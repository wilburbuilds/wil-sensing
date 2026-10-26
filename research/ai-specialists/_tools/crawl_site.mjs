#!/usr/bin/env node
/**
 * Read-only site crawl. GET and render only. Never submits forms,
 * never clicks buttons whose type is submit, never types into fields.
 *
 * Usage:
 *   node research/ai-specialists/_tools/crawl_site.mjs \
 *     --start https://example.com/ \
 *     --out research/ai-specialists/example/pages \
 *     --hosts example.com \
 *     --max 80
 *
 * Writes one text file per page plus crawl-log.tsv in the out directory.
 * Requires puppeteer-core at /tmp/pw/node_modules and google-chrome.
 */

import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

const require = createRequire("/tmp/pw/package.json");
const puppeteer = require("puppeteer-core");

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1] ?? fallback;
}

const starts = arg("start", "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const outDir = arg("out");
const maxPages = Number(arg("max", "80"));
const hostArg = arg("hosts", "")
  .split(",")
  .map((s) => s.trim().toLowerCase().replace(/^www\./, ""))
  .filter(Boolean);

if (!starts.length || !outDir) {
  console.error("Need --start and --out");
  process.exit(1);
}

const SKIP_EXT = /\.(png|jpe?g|gif|webp|svg|ico|css|js|mjs|map|woff2?|ttf|eot|mp4|webm|zip|gz|xml|json)$/i;
const SKIP_PATH = /\/(wp-admin|wp-login|cart|checkout|account|cdn-cgi|tag|author)\b/i;

function hostKey(hostname) {
  return hostname.toLowerCase().replace(/^www\./, "");
}

function allowed(url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (!["http:", "https:"].includes(u.protocol)) return false;
  const key = hostKey(u.hostname);
  const seeds = hostArg.length ? hostArg : starts.map((s) => hostKey(new URL(s).hostname));
  if (!seeds.includes(key)) return false;
  if (SKIP_EXT.test(u.pathname)) return false;
  if (SKIP_PATH.test(u.pathname)) return false;
  u.hash = "";
  // Drop tracking params.
  const keep = [];
  for (const [k, v] of u.searchParams) {
    if (/^(utm_|fbclid|gclid|mc_)/i.test(k)) continue;
    keep.push([k, v]);
  }
  u.search = "";
  for (const [k, v] of keep) u.searchParams.append(k, v);
  return u.toString();
}

function slugFor(url) {
  const u = new URL(url);
  let p = u.pathname.replace(/\/+$/, "") || "/index";
  if (p === "/") p = "/index";
  let s = p.replace(/^\//, "").replaceAll("/", "__");
  if (u.search) s += "__" + u.search.replace(/[^\w]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  s = s.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-|-$/g, "") || "index";
  if (s.length > 110) {
    s = s.slice(0, 90) + "-" + createHash("sha1").update(url).digest("hex").slice(0, 8);
  }
  return s;
}

async function sitemapLocs(url, seen = new Set()) {
  if (seen.has(url) || seen.size > 30) return [];
  seen.add(url);
  let text = "";
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "WilSensingResearch/1.0 (read-only)" },
      redirect: "follow",
    });
    if (!res.ok) return [];
    text = await res.text();
  } catch {
    return [];
  }
  const locs = [...text.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  const out = [];
  for (const loc of locs) {
    if (/\.xml(\?|$)/i.test(loc) || /sitemap/i.test(loc)) {
      out.push(...(await sitemapLocs(loc, seen)));
    } else {
      out.push(loc);
    }
  }
  return out;
}

async function wpUrls(origin) {
  const found = [];
  const types = ["pages", "posts"];
  try {
    const idx = await fetch(`${origin}/wp-json/wp/v2/types`, {
      headers: { "User-Agent": "WilSensingResearch/1.0 (read-only)" },
    });
    if (idx.ok) {
      const data = await idx.json();
      for (const key of Object.keys(data)) {
        if (["attachment", "nav_menu_item", "wp_block", "wp_template", "wp_template_part", "wp_global_styles", "wp_navigation", "wp_font_family", "wp_font_face"].includes(key)) continue;
        const rest = data[key]?.rest_base;
        if (rest && !types.includes(rest)) types.push(rest);
      }
    }
  } catch {
    return found;
  }
  for (const type of types) {
    for (let page = 1; page <= 5; page++) {
      try {
        const res = await fetch(`${origin}/wp-json/wp/v2/${type}?per_page=100&page=${page}&_fields=link,slug,type`, {
          headers: { "User-Agent": "WilSensingResearch/1.0 (read-only)" },
        });
        if (!res.ok) break;
        const rows = await res.json();
        if (!Array.isArray(rows) || !rows.length) break;
        for (const row of rows) if (row.link) found.push(row.link);
        if (rows.length < 100) break;
      } catch {
        break;
      }
    }
  }
  return found;
}

function headerBlock(meta, body) {
  const fetched = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  const lines = [
    `URL: ${meta.url}`,
    `Fetched: ${fetched}`,
    `HTTP status: ${meta.status}`,
    `Final URL: ${meta.finalUrl}`,
    `Content-Type: text/html`,
    `Via: chrome-headless`,
    `Title: ${meta.title || ""}`,
    `Meta description: ${meta.description || ""}`,
    `Canonical: ${meta.canonical || ""}`,
    `Robots: ${meta.robots || ""}`,
    `H1: ${meta.h1 || ""}`,
    "",
    body.trim(),
    "",
  ];
  if (meta.forms?.length) {
    lines.push("--- forms (extracted, not submitted) ---");
    meta.forms.forEach((form, i) => {
      lines.push(`Form ${i + 1}: method=${form.method} action=${JSON.stringify(form.action)} id=${JSON.stringify(form.id)}`);
      for (const field of form.fields) {
        const opt = field.options?.length ? ` options=${field.options.slice(0, 40).join(" | ")}` : "";
        lines.push(
          `  - ${field.tag} type=${field.type} name=${JSON.stringify(field.name)} id=${JSON.stringify(field.id)} label=${JSON.stringify(field.label)} placeholder=${JSON.stringify(field.placeholder)} aria=${JSON.stringify(field.aria)} required=${field.required}${opt}`
        );
      }
    });
    lines.push("");
  }
  if (meta.jsonld) {
    let blob = meta.jsonld;
    if (blob.length > 20000) blob = blob.slice(0, 20000) + "\n…[truncated]";
    lines.push("--- json-ld ---", blob, "");
  }
  return lines.join("\n") + "\n";
}

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-extensions"],
});

const log = [];
try {
  await mkdir(outDir, { recursive: true });
  const seeds = new Set(starts);
  for (const start of starts) {
    const origin = new URL(start).origin;
    for (const path of ["/sitemap.xml", "/sitemap_index.xml", "/wp-sitemap.xml", "/page-sitemap.xml"]) {
      try {
        const locs = await sitemapLocs(origin + path);
        for (const loc of locs) seeds.add(loc);
      } catch {
        /* ignore */
      }
    }
    try {
      for (const link of await wpUrls(origin)) seeds.add(link);
    } catch {
      /* ignore */
    }
    for (const path of ["/about", "/about-us", "/services", "/pricing", "/case-studies", "/work", "/contact", "/blog", "/careers", "/privacy", "/privacy-policy"]) {
      seeds.add(origin + path);
    }
  }

  const queue = [];
  const later = [];
  const seen = new Set();
  function push(url, deferred = false) {
    const norm = allowed(url);
    if (!norm || seen.has(norm)) return;
    seen.add(norm);
    (deferred ? later : queue).push(norm);
  }
  for (const s of starts) push(s);
  for (const s of seeds) {
    if (!starts.includes(s)) push(s, true);
  }

  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 WilSensingResearch");
  await page.setViewport({ width: 1280, height: 900 });
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const type = req.resourceType();
    if (["image", "media", "font"].includes(type)) req.abort();
    else req.continue();
  });

  let saved = 0;
  while ((queue.length || later.length) && saved < maxPages) {
    if (!queue.length) queue.push(later.shift());
    const url = queue.shift();
    let status = 0;
    let finalUrl = url;
    try {
      const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
      status = res ? res.status() : 0;
      finalUrl = page.url();
      await page.waitForFunction(() => (document.body?.innerText || "").trim().length > 80, { timeout: 8000 }).catch(() => {});
      // Give client routers a short beat after the shell.
      await new Promise((r) => setTimeout(r, 600));
    } catch (err) {
      log.push({ url, status: status || "ERR", finalUrl, file: "", title: "", chars: 0, note: String(err).slice(0, 180) });
      console.error("FAIL", url, String(err).slice(0, 160));
      continue;
    }
    if (status >= 400) {
      log.push({ url, status, finalUrl, file: "", title: "", chars: 0, note: "http error" });
      console.log(`${status}\t0\t${url}`);
      continue;
    }
    const normFinal = allowed(finalUrl) || finalUrl;
    const meta = await page.evaluate(() => {
      const textOf = (el) => (el?.innerText || el?.textContent || "").replace(/\s+/g, " ").trim();
      const metas = {};
      for (const m of document.querySelectorAll("meta")) {
        const key = (m.getAttribute("name") || m.getAttribute("property") || "").toLowerCase();
        if (["description", "og:description", "robots"].includes(key)) metas[key] = m.getAttribute("content") || "";
      }
      const h1 = [...document.querySelectorAll("h1")].map(textOf).filter(Boolean).join(" | ");
      const canonical = document.querySelector("link[rel=canonical]")?.href || "";
      const forms = [...document.querySelectorAll("form")].map((form) => ({
        action: form.getAttribute("action") || "",
        method: (form.getAttribute("method") || "get").toLowerCase(),
        id: form.getAttribute("id") || "",
        fields: [...form.querySelectorAll("input, textarea, select, button")].map((el) => {
          const id = el.getAttribute("id") || "";
          const label = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`)?.innerText?.trim() || "" : "";
          const options = el.tagName === "SELECT" ? [...el.querySelectorAll("option")].map((o) => (o.innerText || o.value || "").trim()).filter(Boolean) : [];
          return {
            tag: el.tagName.toLowerCase(),
            type: el.getAttribute("type") || "",
            name: el.getAttribute("name") || "",
            id,
            label,
            placeholder: el.getAttribute("placeholder") || "",
            aria: el.getAttribute("aria-label") || "",
            required: el.hasAttribute("required"),
            options,
          };
        }).filter((f) => f.type !== "hidden"),
      }));
      const jsonld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent || "").join("\n");
      const links = [...document.querySelectorAll("a[href]")].map((a) => a.href);
      return {
        title: document.title || "",
        description: metas.description || metas["og:description"] || "",
        robots: metas.robots || "",
        h1,
        canonical,
        body: document.body?.innerText || "",
        forms,
        jsonld,
        links,
      };
    });
    const file = slugFor(normFinal) + ".txt";
    const full = path.join(outDir, file);
    await writeFile(
      full,
      headerBlock(
        {
          url,
          status,
          finalUrl,
          title: meta.title,
          description: meta.description,
          canonical: meta.canonical,
          robots: meta.robots,
          h1: meta.h1,
          forms: meta.forms,
          jsonld: meta.jsonld,
        },
        meta.body
      ),
      "utf8"
    );
    const chars = meta.body.trim().length;
    const soft404 = /^404\b/i.test(meta.h1) || /page not found/i.test(meta.body.slice(0, 400));
    const note = soft404 ? "soft-404" : "";
    log.push({ url, status, finalUrl, file, title: meta.title.replaceAll("\t", " "), chars, note });
    console.log(`${status}\t${chars}\t${file}\t${finalUrl}${note ? "\t" + note : ""}`);
    if (!soft404) saved += 1;
    for (const link of meta.links) push(link);
  }

  const leftover = queue.length + later.length;
  if (later.length) queue.push(...later);
  const lines = ["url\tstatus\tfinal\tfile\tchars\ttitle\tnote"];
  for (const row of log) {
    lines.push([row.url, row.status, row.finalUrl, row.file, row.chars, row.title, row.note].join("\t"));
  }
  if (leftover) lines.push(`# queued but not fetched (max ${maxPages}): ${leftover}`);
  await writeFile(path.join(outDir, "crawl-log.tsv"), lines.join("\n") + "\n", "utf8");
  if (leftover) {
    await writeFile(path.join(outDir, "not-fetched.txt"), queue.join("\n") + "\n", "utf8");
  }
  console.log(`SAVED ${saved} LEFT ${leftover}`);
} finally {
  await browser.close();
}
