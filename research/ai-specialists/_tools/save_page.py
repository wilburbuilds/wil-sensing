#!/usr/bin/env python3
"""Read-only page extract in the Limestone teardown format.

GET only. Never posts a form. Writes one text file whose first lines are the URL
and fetch metadata, then visible text, then a forms appendix.

Usage:
  python3 research/ai-specialists/_tools/save_page.py URL OUTDIR [--slug name]

If the static body is thin, retries once with headless Chrome and keeps the
richer extract.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import re
import subprocess
import sys
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

UA = (
    "Mozilla/5.0 (compatible; WilSensingResearch/1.0; +https://wilsensing.com) "
    "research crawl, read-only, no form submit"
)


class Extractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.skip_tags = {"script", "style", "noscript", "svg", "template"}
        self.parts: list[str] = []
        self.title_parts: list[str] = []
        self.in_title = False
        self.h1: list[str] = []
        self._h1 = False
        self._h1buf: list[str] = []
        self.metas: dict[str, str] = {}
        self.canonical = ""
        self.forms: list[dict] = []
        self._form: dict | None = None
        self._label_for: str | None = None
        self._label_buf: list[str] = []
        self.labels: dict[str, str] = {}
        self.jsonld: list[str] = []
        self._in_jsonld = False
        self._jsonld_buf: list[str] = []

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        if tag in self.skip_tags:
            if tag == "script" and "ld+json" in a.get("type", ""):
                self._in_jsonld = True
                self._jsonld_buf = []
                return
            self.skip += 1
            return
        if self.skip:
            return
        if tag == "title":
            self.in_title = True
        if tag == "h1":
            self._h1 = True
            self._h1buf = []
        if tag == "meta":
            key = (a.get("name") or a.get("property") or "").lower()
            if key in {"description", "og:description", "og:title", "robots", "twitter:description"}:
                self.metas[key] = a.get("content", "")
        if tag == "link" and a.get("rel", "").lower() == "canonical":
            self.canonical = a.get("href", "")
        if tag == "br":
            self.parts.append("\n")
        if tag in {"p", "div", "section", "article", "li", "tr", "h2", "h3", "h4", "h5", "h6", "blockquote"}:
            self.parts.append("\n")
        if tag == "form":
            self._form = {
                "action": a.get("action", ""),
                "method": (a.get("method") or "get").lower(),
                "id": a.get("id", ""),
                "name": a.get("name", ""),
                "fields": [],
            }
        if tag == "label":
            self._label_for = a.get("for") or ""
            self._label_buf = []
        if tag in {"input", "textarea", "select", "button"} and self._form is not None:
            field = {
                "tag": tag,
                "type": a.get("type", "textarea" if tag == "textarea" else "select" if tag == "select" else "button" if tag == "button" else ""),
                "name": a.get("name", ""),
                "id": a.get("id", ""),
                "placeholder": a.get("placeholder", ""),
                "aria": a.get("aria-label", ""),
                "value": a.get("value", "") if tag != "textarea" else "",
                "required": "required" in a,
                "options": [],
            }
            if field["type"] not in {"hidden", "submit", "button", "image"} or tag == "button":
                self._form["fields"].append(field)
            elif tag == "button" or field["type"] in {"submit", "button"}:
                self._form["fields"].append(field)
        if tag == "option" and self._form and self._form["fields"]:
            last = self._form["fields"][-1]
            if last["tag"] == "select":
                last["options"].append(a.get("value", ""))
                last.setdefault("_optbuf", [])

    def handle_endtag(self, tag):
        if self._in_jsonld and tag == "script":
            self.jsonld.append("".join(self._jsonld_buf).strip())
            self._in_jsonld = False
            return
        if tag in self.skip_tags:
            if self.skip:
                self.skip -= 1
            return
        if self.skip:
            return
        if tag == "title":
            self.in_title = False
        if tag == "h1" and self._h1:
            text = " ".join("".join(self._h1buf).split())
            if text:
                self.h1.append(text)
            self._h1 = False
        if tag == "label":
            text = " ".join("".join(self._label_buf).split())
            if self._label_for and text:
                self.labels[self._label_for] = text
            self._label_for = None
            self._label_buf = []
        if tag == "form" and self._form is not None:
            self.forms.append(self._form)
            self._form = None
        if tag in {"p", "div", "section", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6"}:
            self.parts.append("\n")

    def handle_data(self, data):
        if self._in_jsonld:
            self._jsonld_buf.append(data)
            return
        if self.skip:
            return
        if self.in_title:
            self.title_parts.append(data)
        if self._h1:
            self._h1buf.append(data)
        if self._label_for is not None:
            self._label_buf.append(data)
        if self._form and self._form["fields"]:
            last = self._form["fields"][-1]
            if last["tag"] == "option" or (last["tag"] == "select" and last.get("options") is not None):
                pass
            if last["tag"] == "button":
                last["value"] = (last.get("value") or "") + data
        self.parts.append(data)

    def text(self) -> str:
        raw = "".join(self.parts)
        raw = raw.replace("\r", "")
        raw = re.sub(r"[ \t]+\n", "\n", raw)
        raw = re.sub(r"\n{3,}", "\n\n", raw)
        raw = re.sub(r"[ \t]{2,}", " ", raw)
        return raw.strip()


def slug_from_url(url: str) -> str:
    parsed = urlparse(url)
    path = parsed.path.strip("/") or "index"
    if parsed.query:
        path = path + "__" + re.sub(r"[^a-zA-Z0-9]+", "-", parsed.query)[:80]
    path = path.replace("/", "__")
    path = re.sub(r"[^a-zA-Z0-9._-]+", "-", path)
    path = path.strip("-") or "index"
    if len(path) > 120:
        digest = hashlib.sha1(url.encode()).hexdigest()[:8]
        path = path[:100] + "-" + digest
    return path


def fetch(url: str, timeout: int = 40) -> tuple[int, str, str, bytes]:
    req = Request(url, headers={"User-Agent": UA, "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"})
    try:
        with urlopen(req, timeout=timeout) as resp:
            body = resp.read()
            final = resp.geturl()
            status = getattr(resp, "status", 200) or 200
            ctype = resp.headers.get("Content-Type", "")
            return status, final, ctype, body
    except HTTPError as e:
        body = e.read() if e.fp else b""
        return e.code, url, e.headers.get("Content-Type", "") if e.headers else "", body


def chrome_dump(url: str) -> bytes:
    cmd = [
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--virtual-time-budget=12000",
        "--timeout=30000",
        "--dump-dom",
        url,
    ]
    proc = subprocess.run(cmd, capture_output=True, timeout=45)
    if proc.returncode != 0 and not proc.stdout:
        raise RuntimeError(proc.stderr.decode("utf-8", "replace")[:500])
    return proc.stdout


def render(url: str, status: int, final: str, ctype: str, body: bytes, via: str) -> str:
    charset = "utf-8"
    m = re.search(r"charset=([\w-]+)", ctype or "", re.I)
    if m:
        charset = m.group(1)
    try:
        text = body.decode(charset, "replace")
    except LookupError:
        text = body.decode("utf-8", "replace")
    parser = Extractor()
    parser.feed(text)
    title = " ".join("".join(parser.title_parts).split())
    desc = parser.metas.get("description") or parser.metas.get("og:description") or ""
    robots = parser.metas.get("robots", "")
    h1 = " | ".join(parser.h1)
    visible = parser.text()
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    lines = [
        f"URL: {url}",
        f"Fetched: {now}",
        f"HTTP status: {status}",
        f"Final URL: {final}",
        f"Content-Type: {ctype}",
        f"Via: {via}",
        f"Title: {title}",
        f"Meta description: {desc}",
        f"Canonical: {parser.canonical}",
        f"Robots: {robots}",
        f"H1: {h1}",
        "",
        visible,
        "",
    ]
    if parser.forms:
        lines.append("--- forms (extracted, not submitted) ---")
        for i, form in enumerate(parser.forms, 1):
            lines.append(
                f"Form {i}: method={form['method']} action={form['action']!r} id={form['id']!r} name={form['name']!r}"
            )
            for field in form["fields"]:
                label = parser.labels.get(field["id"], "")
                opt = ""
                if field["options"]:
                    opt = " options=" + " | ".join(field["options"][:40])
                lines.append(
                    f"  - {field['tag']} type={field['type']} name={field['name']!r} id={field['id']!r} "
                    f"label={label!r} placeholder={field['placeholder']!r} aria={field['aria']!r} "
                    f"required={field['required']} value={field['value'][:80]!r}{opt}"
                )
        lines.append("")
    if parser.jsonld:
        blob = "\n".join(parser.jsonld)
        if len(blob) > 20000:
            blob = blob[:20000] + "\n…[truncated]"
        lines.append("--- json-ld ---")
        lines.append(blob)
        lines.append("")
    return "\n".join(lines) + "\n", len(visible)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("outdir")
    ap.add_argument("--slug", default="")
    ap.add_argument("--no-chrome", action="store_true")
    args = ap.parse_args()
    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    try:
        status, final, ctype, body = fetch(args.url)
    except URLError as e:
        sys.stderr.write(f"fetch failed: {e}\n")
        return 1
    rendered, nchars = render(args.url, status, final, ctype, body, "urllib")
    via = "urllib"
    if not args.no_chrome and (nchars < 400 or status >= 400):
        try:
            dom = chrome_dump(args.url)
            rendered2, n2 = render(args.url, status if status < 400 else 200, final, "text/html", dom, "chrome-headless")
            if n2 > nchars:
                rendered, nchars = rendered2, n2
                via = "chrome-headless"
        except Exception as e:
            sys.stderr.write(f"chrome fallback failed: {e}\n")
    slug = args.slug or slug_from_url(final or args.url)
    path = outdir / f"{slug}.txt"
    path.write_text(rendered, encoding="utf-8")
    print(f"{status}\t{nchars}\t{via}\t{path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
