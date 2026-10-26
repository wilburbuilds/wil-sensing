# Handoff: Wil Sensing homepage (PR #7)

Read this before touching anything. **Delete this file before merging.** GitHub Pages serves the whole repo from `main`, so anything merged is public.

## What this is
A new homepage for Wil Sensing, Wil's one-person ops service. He finds the work businesses do by hand, measures it, and builds reliable automations on top of one trusted foundation for their data.

- Branch: `cursor/website-copy-from-plan-59a8`
- PR: https://github.com/wilburbuilds/wil-sensing/pull/7 (open, not merged; merge only when Wil says so)
- Files that matter:
  - `website-copy.md`: the approved copy, strategy, and section order.
  - `homepage.html`: a single standalone page with no build step. Open it in a browser.

## Source of truth
Wil's own business plan is the only source. **Ignore every other file in the repo** (`PRODUCT.md`, `site-content-v1.md`, `mockups/`, the old `index.html`, and so on). They're outdated, and a previous agent got confused by them. If anything conflicts with this file or `website-copy.md`, ask Wil.

## Locked: don't change without Wil's OK
- **The Results section wording.** It stays exactly as written in `website-copy.md`.
- **The hero wording.** It can change later, but only when Wil says so.
- **Facts and numbers.** Never invent results, numbers, prices, client names, or quotes. The only approved proof figures are:
  - $200K in leakage stopped
  - 48% more profit on per-part pricing (this is a real result, not a model)
  - $300/month saved by replacing a paid scheduling tool
  - an automated marketing strategy
  - an automated sales pipeline
- **No client names.** The auto repair shop stays anonymous.
- **No Tenex-style lines.** Wil doesn't want copy that sounds like Tenex (tenex.co), such as "no six-month program / no 200-page deck."
- **No jargon on the page.** Avoid "semantic layer" and "context layer"; say "one reliable foundation."

## Current design
- The design is modeled on https://boomautomations.com/: a black background with a star field, Inter type, a white call-to-action button, green check marks, numbered section labels, a sticky "How it works" section, an accordion FAQ, and a closing call-to-action panel.
- The animated diagram shows **your tools → one reliable foundation (us) → your team**. It plays when scrolled into view, has a replay button, runs vertically on mobile, and is skipped when the visitor's system is set to reduce motion. There's no Boom branding anywhere.
- Wil approved this direction (Oct 26). Before going live, it needs to be **made our own**, so it doesn't read as a copy of Boom's site.

## Open items before launch
1. **Make the design distinct from Boom.** This is the main job. Keep the overall structure and the animation idea, but give it its own identity: color accent, type details, layout rhythm, and the way the hero handles the stats.
2. **Brand name.** Replace `[Company]` with **Wil Sensing** in the header, the footer, the diagram label, and the page title.
3. **Booking link.** Every "Book a free 30-minute call" button should go to https://calendly.com/wilsensing.
4. **Wil's photo.** The "Who you'll work with" section needs one. Ask Wil for it.
5. **Pricing answer.** The FAQ's pricing answer is TBD. Don't invent one; ask Wil.
6. **Contact email.** Confirm it with Wil before publishing.

## How to check your work
- Open `homepage.html` at desktop width (1440px) and phone width (390px). Nothing should scroll sideways, and the animation should play.
- Diff the hero and Results text against `website-copy.md`. They must match word for word.
- Search the file for "Boom". It must not appear.
- Commit to the same branch. Don't merge.
