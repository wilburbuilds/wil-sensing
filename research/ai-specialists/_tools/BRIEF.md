# Crawl and teardown brief

You are writing one company teardown for Wil Sensing. Read `research/limestone-digital/teardown.md` before you write. Match its habits: verbatim quotes, a source URL on every quote, saved page text under the company folder, and **INFERENCE** on every conclusion that is not a sentence on the site or in the X post. Never invent a price, a client, a number, a guarantee, or a quote. If a page was not fetched, do not describe its contents.

## Wil (so the takeaways map to his offer)

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). Offer, in order: a free 30-minute fit call, a paid Job map discovery credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with humans on the exceptions). Headline: "Hand off the busywork. Keep the decisions." Proof on hand: $217K in missed vendor credits found at a local auto repair shop by matching 11,139 PO lines. Pricing is undecided. Private equity angles: note them and label every one "Noted for reference, NOT our strategy for now."

## How to crawl

Read-only. Never submit a form, book a call, sign up, log in, or type into a field.

From `/workspace`:

```bash
node research/ai-specialists/_tools/crawl_site.mjs \
  --start "https://EXAMPLE/" \
  --out research/ai-specialists/SLUG/pages \
  --hosts example.com \
  --max 80
```

The script renders with headless Chrome, reads `sitemap.xml` and the WordPress REST API when those exist, and saves visible text. Soft 404s are saved but do not consume the page budget. When it finishes, read `pages/not-fetched.txt` if present. If those URLs are real service, pricing, case-study, about, or article pages, run again with a higher `--max` or with those URLs added to `--start`. Do not crawl tag archives, cart, login, or asset files.

A second host (a founder subdomain, a public Calendly event page, a second marketing domain) needs its own run. Copy `pages/crawl-log.tsv` to `pages/crawl-log-1.tsv` before the second run so the first log is not overwritten. Do not click Book on Calendly. Fetch the public event page only.

If the body is a login wall, save the wall text and stop. Do not create an account.

X evidence is already saved in `research/ai-specialists/_x/posts.md`. Quote only the posts for this company. Label them as X posts, not as website copy. Do not post, like, or follow.

## Page files

Leave the crawler's text files in place. Each file starts with the URL. Do not rewrite them except to delete an obvious duplicate of the same final URL (keep one, say so in the teardown method). Do not edit anything outside `research/ai-specialists/SLUG/`.

## teardown.md

Write `research/ai-specialists/SLUG/teardown.md`. Open with the company name and the date 26 October 2026. Then, in this order:

1. **Top 5 takeaways** for Wil. Each one says what to steal or adapt, or what to leave, and cites a URL.
2. **Method and coverage.** Pages saved, hosts, what was JS-rendered, what 404'd, what you did not crawl and why.
3. **Product.** What they sell and how it is packaged. Prices or pricing signals, or an explicit "no price on the pages crawled." Guarantees, quoted. Engagement model and deliverables. Named frameworks. How they describe the work. ICP and industries, with the words they use. Proof and the shape of a case study (numbers, how framed, caveats). A small table when there is more than one study.
4. **Sales and marketing.** Positioning and verbatim headlines. Funnel, CTAs, forms, and the qualification questions (from the forms appendix in the page files). Lead magnets. Content strategy. Trust signals. Tone, with a few lines worth studying.
5. **What Wil should steal or adapt.** Ranked, short, mapped to the fit call, the credited Job map, the build, or the autonomy ladder.
6. **What not to copy, and why.**
7. **Private equity**, only if the site or the posts actually talk about it. Label "Noted for reference, NOT our strategy for now."
8. **X evidence.** What the linked posts add that the site does not, or where they contradict the site. Quote them. URL on each quote.
9. **Open questions and contradictions.** A table when two surfaces disagree.

Voice: plain sentences, the way the Limestone teardown is written. Name the page. Use a block quote for lines worth keeping. Do not pad. Do not write a SWOT. Do not recommend that Wil become this company.

Guru-tier assignments are funnel only. Still save the public sales pages. The teardown answers how they sell (headline, CTA, price if published, lead magnet, qualification, community or call), not a full catalog of what the course teaches. Say "funnel only" in the first line. Top 5 takeaways still come first, and they are about the selling motion.

## Done when

- `teardown.md` exists and its quotes can be found in the saved page files or in `_x/posts.md`.
- `pages/crawl-log.tsv` exists.
- You did not commit, push, or touch `index.html`, `mockups/`, or another company's folder.
- Your final message lists: slug, page count saved, hosts, whether a price was published, and the five takeaway headlines.
