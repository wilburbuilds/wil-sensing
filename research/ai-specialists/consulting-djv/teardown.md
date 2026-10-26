# Dino Vidili, DJV Consulting

26 October 2026. Prepared for Wil Sensing. Sources fetched that day. Read-only: no form submitted, no assessment scored, no report downloaded from a score, no Calendly time selected, no Luma registration.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). Offer, in order: a free 30-minute fit call, a paid Job map discovery credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with humans on the exceptions). Headline: "Hand off the busywork. Keep the decisions." Proof on hand: $217K in missed vendor credits found at a local auto repair shop by matching 11,139 PO lines. Pricing is undecided. He is not becoming a fractional CFO.

DJV Consulting is Dino Jose Vidili's site at consultingdjv.com. The homepage sells "Fractional CFO + AI Implementations." The AI page sells four self-score frameworks and a free PDF kit. Quotes below are from files in `research/ai-specialists/consulting-djv/pages/` or from the two posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those surfaces. Wil's $217K and 11,139 lines are his proof. They are not a DJV result.

## Top 5 takeaways

1. **Leave the fractional CFO. Take the gap map that comes before the pilot.** The homepage packages him as a monthly finance seat. The AI page's useful line is the opposite of a seat: "A gap map before you sign the next pilot." Wil's fit call can end on the one constraint in the one job. It should not end by offering to run the company's finance function. https://consultingdjv.com/ai-readiness and https://consultingdjv.com/

2. **Their cash story is a warning or a worked example. His is a counted recovery. Keep them apart.** The X post says leaks are found in a recovery audit, months or years later, and gives no dollar and no line count. The free kit then prints sample math ("a USD 200k AR book," "~USD 30k," "typically"). The only named client on the site is a valuation testimonial with no cash figure. Do not attach $217K or 11,139 PO lines to their sentence. https://x.com/DinoJVidiliCons/status/2110361740256919872 and https://consultingdjv.com/

3. **The Job map should name the cash line, the baseline, and who approves before money moves.** Their questions already ask for one use case, a 13-week baseline, one system of record, and a human approval before money moves. That is the contents of a credited Job map. Their version is a free score. His is paid and credited toward the build. https://consultingdjv.com/ai-readiness

4. **Their ladder still stops at a person. That is the part that matches his. The CFO seat does not.** "If nobody approves before money moves, you do not have control — you have theater." The board PDF then names assisted mode, then exceptions, then a later scale that still has a human-review threshold. Use that order. Do not take "The CFO runs the outer loop" as the product. https://consultingdjv.com/ai-readiness

5. **The published "From" prices do not agree. Do not print them as his.** English Tier Two is "From USD 8,000." Spanish Tier Two is "Desde USD 5,000." Tier One is "From USD 2,500" on both. The hour is "From USD 200." The monthly fractional seat has no number. His price is still open. https://consultingdjv.com/ and https://consultingdjv.com/es

## Method and coverage

First crawl, headless Chrome, start `https://consultingdjv.com/ai-readiness`, host `consultingdjv.com`, max 80. Log kept as `pages/crawl-log-1.tsv`. The site is Webflow. `sitemap.xml` lists twelve URLs: English and Spanish home, AI readiness, portfolio, and four template utility pages. All twelve returned 200 and were saved. The crawler's usual seeds (`/about`, `/about-us`, `/services`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, `/privacy`, `/privacy-policy`) returned HTTP 404 and were not saved. No `not-fetched.txt` on that run. The queue finished.

Visible homepage and portfolio text is in the HTML the crawler saved. On `/ai-readiness`, body `innerText` is the welcome screen of whichever tab is showing. The other three tabs are in the DOM and were saved separately as `ai-readiness-tab-panes.txt`. The twelve and twenty-four questions are not in that welcome text. They sit in inline scripts and appear after "Start assessment." No score was selected. Those English strings are in `ai-readiness-english-copy.txt`. Spanish strings for the same questions were left in the scripts.

Seven PDFs linked from `/ai-readiness` are the free kit. The HTML crawler does not save PDF text. They were fetched with GET and extracted with pypdf into `pdf-*.txt`. They are short kit files (4 to 15 pages), not an archive that was skipped.

Second crawl, after the site log was copied aside. Hosts `calendly.com` and `luma.com`, max 2, so only the two start URLs were saved: the public Calendly event and the Luma embed. Log: `pages/crawl-log-2.tsv`. No time was booked. The embed's "View Full Event Page" is `https://luma.com/003gwzef`. That URL was fetched in a third crawl, max 1, host `luma.com`. Log: `pages/crawl-log.tsv`. Registration was not opened. `pages/not-fetched.txt` is the leftover from that third crawl (Luma's own home, discover, user, app, and the crawler's generic `/about` and `/pricing` seeds on `luma.com`). Those are Luma, not DJV. The second crawl's leftovers were the same kind of thing on Calendly (`calendly.com/`, privacy notice, and the generic seeds) plus the event page that was then fetched. Calendly's and Luma's own marketing sites were not crawled.

Also not crawled, on purpose: LinkedIn `https://www.linkedin.com/in/dino-jose-vidili/`, the client site `https://www.controlasset.com.ar/`, and the two X article URLs. Unauthenticated GET of the t.co targets returned 404 at `https://x.com/i/article/2112915584098664449` and `https://x.com/i/article/2110361325394169856`. The article bodies are not in the saved posts. They are not quoted.

No page and neither X post says private equity, sponsor, portfolio company, or fund. The board PDF uses "Operating income / EBITDA" as one row on a company scorecard. That is noted under the product. It is not a private-equity offer, and there is no private-equity section below.

Homepage HTML that the saved body text does not show is recorded in `home-links-and-alts.txt`: partner logo file names, a web-design slider set to `opacity:0`, and the Calendly and Luma iframe URLs. No email address was in the homepage HTML.

Spanish home, Spanish AI readiness, and Spanish portfolio were saved because they are real alternates, not duplicates of the English final URL. The Spanish utility pages repeat the English template. They were kept.

## 1. Product

### What they sell

Homepage eyebrow: "Fractional CFO + AI Implementations." H1: "WHEN THE PLAN IS CLEAR THE WORK GETS DONE." Subline: "Higher profitability - Stronger cash flow." Then: "Blending senior management experience with cutting-edge AI and web technologies to deliver sustainable financial growth. Free time, and focus on business strategy." Meta description: "DJV Consulting is a boutique firm empowering small and mid sized businesses worldwide to be future aligned through the implementation of best practices, strategies and latest technologies." https://consultingdjv.com/

The rotating service labels on that page are Strategy management, Fractional CFO, AI implementations, and Financial planning.

FAQ, same page:

> DJV Consulting provides bilingual AI-financial services for LatAm and global SMBs. We blend senior management experience with AI and web technologies to help companies achieve sustainable financial growth, optimize CFO functions, and implement practical technology solutions.

Services the FAQ lists: fractional CFO as "monthly subscriptions with business diagnosis in 2–3 weeks"; "AI solutions for Finance & Supply Chain (ready-made or custom-built to maximize profitability and cash)"; "Strategy management, financial planning, and process optimization consulting."

The AI page is a different product shape. Four tabs, each a scored self-assessment, then "Review your score with us" and "A 30-minute walkthrough of your score and the one constraint blocking cash or AI impact." https://consultingdjv.com/ai-readiness

| Tab | Welcome line | Score | What a low score is told |
| --- | --- | --- | --- |
| AI Readiness | "Find out in 10 minutes whether the company is ready for AI. Twelve questions. Four pillars. A gap map before you sign the next pilot." | 12 questions, max 120 | "Not ready to buy AI. Strengthen the foundations first." Bands 0–59, 60–89, 90–120. |
| Human in the Loop | "Twenty-four questions. Six loops. The weakest loop sets the ceiling: if nobody approves before money moves, you do not have control — you have theater." | 24 questions, max 240 | "Chat tools, no loop, no owner. Do not let a model move money." |
| ROI-Cash (script title Tokenomics & ROI) | "Twenty-four questions. Six loops. Tokens are the bill. Value is cost per successful outcome and cash in the bank." | 24 questions, max 240 | "Seats and APIs, no map to cash. Diagnose the bill first." |
| Family Business (script title Bridging Generations) | "Twenty-four questions. Six loops. AI and succession reinforce each other or block each other. The Architecture Gap closes with bridges, not scattered pilots." | 24 questions, max 240 | "AI and succession live in silos. Knowledge and control do not transfer." |

Pillars on the first assessment: Strategy, Data, Technology, Governance. The human-in-the-loop dimensions are Intent, Data, Oversight, Accountability, Evidence, Cadence. Tokenomics dimensions are Cost visibility, Unit economics, Value case, ROI follow-up, Cash impact, Spend governance. Family dimensions are Bridge, Governance, NextGen, Succession, Knowledge, Architecture. Question text: `ai-readiness-english-copy.txt`.

Under the assessments, the visible closer:

> "We don't promise results. We promise effort."— Every consultant ever.
>
> And it's why 95% of AI pilots produce zero P&L impact (MIT NANDA,2025).
>
> After 20+ years inside finance and tech for mid-market SMBs, here's what actually separates the 5% that work from the 95% that don't

The page does not link a paper under that citation. The same page's homepage-style principle 5, on the home page, is "We do not promisse, we deliver." Both sentences are theirs. They are not the same offer.

Implementation, homepage, after the partner logos:

> Strategy is only half the job. Our dedicated implementation team, powered by Visionary AI, builds, deploys, and supports the solutions we design together.
>
> End-to-end build and deployment. We don't hand you a slide deck and walk away. Our implementation team configures, integrates, and launches your AI and automation solutions inside the tools you already use.
>
> Fortune 50 program discipline, sized for SMBs. Our implementation partner brings 30+ years of large-scale technology program leadership from Wells Fargo, Bank of America, and Capital One.

**INFERENCE:** the person on the site is Dino, and the build is attributed to a named partner, Visionary AI, plus unnamed "implementation team." The pages crawled do not list that team's size, a Visionary AI URL, or a statement of work.

### Packaging and prices

Prices on the English homepage, under "MY SERVICES." https://consultingdjv.com/

| Card | What the card is attached to | Price on the English page | Price on https://consultingdjv.com/es |
| --- | --- | --- | --- |
| Fractional CFO. "Monthly subscriptions." "Business diagnosis in 2/3 weeks." "Take care of your business strategy. I help you with the rest." | "Tier One: Finance & Data Diagnostic 2-3 weeks" | "From USD 2,500" | "Desde USD 2,500" (card name "Finanzas & Data Diagnostic 2-3 semanas") |
| "AI for Finance & Supply Chain." "Best in class AI solutions." "Case by case implementations." | "Tier Two: 90-Day Cash & Control Install" | "From USD 8,000" | "Desde USD 5,000." The Spanish card is "Tier Two: 90-Day Control Interno y Flujo de Caja" under "IA para el negocio" |
| "One Hour Expert Advising." Finance and strategy, fundraising tips, "Finance AI implementations best practices," "Companies Reestructuring," "Business Turnaround" | The hour | "From USD 200" | "From USD 200" |

The FAQ describes the fractional CFO as an ongoing monthly subscription after a 2–3 week diagnosis. The only number printed next to that block is the Tier One "From USD 2,500" diagnostic. **INFERENCE:** a reader cannot tell the monthly fee from the pages crawled. "From" is the only price word. No deposit, no credit toward a later phase, and no guarantee dollar.

Other numbers that are not his fee:

- Luma general admission, structured data on the event: `"price":0`. The description says "Online y 100% Gratuito." https://luma.com/003gwzef
- Supply-chain brochure, "METRIC 06 · THE REFERENCE STACK": "$130–$1,300 / month. End to end." That sentence is a tool stack (ERP, n8n, an OCR tool, a small model). It is not labeled as a DJV invoice. `pdf-sme-supplychain-brochure.txt`
- Quick-tricks and model briefs use example books and software prices. Those are under proof, below. They are not a rate card.

No price appears on `/ai-readiness`, `/portfolio`, or the Calendly event. The Calendly page is "30 Minute Meeting," "30 min," "Dino J Vidili - DJV Consulting," "Web conferencing details provided upon confirmation." It does not say free and it does not say USD 200. https://calendly.com/dinojosevidili/30min

### Guarantee

There is no results guarantee on the pages crawled. The sharpest commercial sentence is the assessment's mock quote, "We don't promise results. We promise effort." Homepage principle 5 says "We do not promisse, we deliver." Principle 4 says "ROI and excellence comes from a clear implementation framework and tracked KPIs." The FAQ says success is "tangible improvements in profitability, cash flow, process efficiency, and strategic outcomes—not just activity metrics." None of those sentences names the unit, the date, or what happens to the invoice if the number does not move.

The kit comes closer, and the kit does not agree with itself. Quoted in the contradictions table: "before the next billing cycle," "90 days," "3-6 mo," and "after 6+ months."

### Engagement model and deliverables

What a visitor can actually start, from the pages:

1. A free call. Buttons say "Your Free Call" or "Schedule Call" and point at `https://calendly.com/dinojosevidili`. The page also embeds `https://calendly.com/dinojosevidili/30min`. "Secure your spot and I will contact you." FAQ: "We will contact you to discuss your specific needs around finance, AI, websites, or strategy."
2. A free score on `/ai-readiness`, then the 30-minute walkthrough of that score. "Download / print report" is a button on the unscored screen. It was not clicked. A separate static PDF of the 12-question sheet is one of the kit files.
3. Tier One, a 2–3 week finance and data diagnostic, from USD 2,500.
4. Tier Two, a 90-day cash and control install, from USD 8,000 in English and from USD 5,000 in Spanish.
5. One hour, from USD 200.
6. The build line: Visionary AI "configures, integrates, and launches" inside "the tools you already use." No deliverable list, no week-by-week on the homepage.
7. An NDA: "We sign a Non-Disclosure Agreement (NDA) for every single project—no matter its size, budget, or duration."

The free kit adds engagement shapes that are not on the homepage rate card. Board PDF, "LAYER 1 · 5-DAY SPRINT": a five-day alignment of "the CEO, COO, CFO, and business-unit leaders" that "ends with a 90-day launch plan and the first version of the executive AI scorecard." Supply-chain brochure: "WEEKS 1–6 · QUICK WINS" then visibility, then "WEEKS 11–13 · INTELLIGENCE," and "The first six weeks must pay for the next six months." Quick tricks: "WEEK 1 / Pick 2 plays" and "10 plays is the menu — not the order. Two paying plays beat ten half-done experiments."

**INFERENCE:** the public offer is at least four commercial shapes (diagnostic, 90-day install, hour, monthly CFO with no printed monthly price) plus a free score, a free kit, and a free workshop. They are not written as one path.

Lines in the assessment script that describe the work, not the price. https://consultingdjv.com/ai-readiness

> Freeze the backlog to one use case until that case has a metric, a baseline and a go/no-go date.

> Start only #1. DJV does not scale a portfolio until one pilot moves a visible number.

> If the action moves money, must a human approve before execution — not “if nobody objects in 24h, proceed”?

> Is timeout behavior defined: no approval means no action?

> Does a named human inherit the consequence if the output is wrong?

> Is the target cash, margin, DSO, freight variance, write-off or leakage — not “adoption”?

> Are “hours saved” booked only if headcount, overtime or contractor spend actually fell — or capacity produced named extra output?

The family-business tab is a succession product: reverse mentoring, a family council agenda, staged release of control. It is on the same URL as the cash questions. It is not the finance-team offer.

### Named frameworks

On the site, in the scripts, or as a PDF title:

- The eight principles on the homepage. The list is numbered 1–8. Worth keeping as their own words: "AI implementations are to create value, not only cutting costs or headcount." "The company and business knowledge is what we learn first, then we help." "Let´s get things DONE."
- AI Readiness, Human in the Loop, Tokenomics & ROI, Bridging Generations. Scores above. Bands inside the script also say "only theater," "Heroics, not architecture," and "Autonomy can live inside written limits."
- HITL / HOTL / HIC, asked as a question ("Have you explicitly chosen HITL, HOTL or HIC in writing, by risk?") and not defined on the page.
- NIST AI RMF, named once, as the alignment target for a one-page acceptable-use policy.
- AI Board Operating System. "5 layers. 9 sections. 90-day rollout." Layers in the PDF: a 5-day executive sprint, a use-case portfolio (productivity / efficiency / growth), TokenOps and P&L, cross-functional plays, a KPI cockpit. `pdf-ai-board-operating-system.txt`
- The cockpit's autonomy names, same PDF: "STAGE 1 — ASSISTED MODE" ("humans approve every external or financially material output"), "STAGE 2 — SEMI-AUTOMATED" ("keeping humans in the loop for exceptions"), "STAGE 3 — MANAGED SCALE" ("TokenOps becomes a core finance capability").
- Supply-chain "4-TIER STACK": T0 rules (n8n, Make, Zapier), T1 OCR, T2/T3 small model then a larger model. "17 use cases." "90 days."
- "10 AI tricks. 30 days. Real cash."

The board PDF's cockpit table includes the row "Operating income / EBITDA" correlated with "Opex, operating profit," and later "Present to the board or executive committee." That is a scorecard for the company in front of its own board. The pages and the posts do not sell a private-equity offer.

### How they describe the work

Homepage, the eight principles, principle 1 and principle 6: value, not only cost or headcount; learn the company first. The assessment is harsher. A red AI-readiness band: "The base is not there. Buying a model now gets expensive." A data fix: "If it cannot fit on a page, the model will learn the mess." A technology fix: ""The ERP has AI" is not a map."

Quick-tricks PDF, the line that fights the fractional-CFO headline:

> You do not need a CFO — you need a Sunday-night 30-minute habit.

That sentence is play 03, a 13-week cash forecast made by dropping a bank ledger into a chat. It is in the free kit. The homepage is selling the CFO.

Supply-chain brochure: "If you run an SME, every AI dollar must pay for itself." "P2P is where the cash is." "Logistics ROI comes from math and OCR. Use LLMs only to explain results to managers." The freight line is "Cross-check every carrier invoice vs. contracted rates. Recovers 3–8% of freight spend." No carrier, no shipper, and no period is named.

### Ideal customer and industries

Words they use. FAQ: "small and medium businesses (SMBs) and mid-market companies in LatAm and globally." "Typical industries include automotive (autoparts & logistics), fintech, travel, supply chain (freights, warehouses, purchasing), software/services, and general SMBs."

The industry grid on the homepage is six cells, each with a delivery tag:

- Automotive: "Autoparts," "Logistics Centers," "Consulting + Fractional"
- SmB: "Any segment," "Consulting + New Tech"
- Fintech: "Any Stage," "Consulting + Fractional"
- Travel: "Agencies," "Occupacy centers," "Consulting"
- Supply Chain: "Freights," "Warehouses," "Purchasing," "Consulting + New Tech"
- Services: "SmB related," "Software Fact," "Consulting + Fractional"

"Occupacy" and "Software Fact" are printed that way. No cell says dealership, equipment dealer, trade, 50–200 people, Idaho, or Washington. The AI page says "mid-market SMBs." The Luma bio says "startups y pymes del mercado medio." The model briefs sort buyers by revenue bands under $1M, $1–10M, and $10M+.

Footer on the marketing pages: "Remote, Argentina." The terms page does not say Argentina. It is the Crestfund template. See what not to copy.

**INFERENCE:** the economic buyer they wrote the homepage for is an owner who will hire a part-time CFO, in Latin America or "globally," in the industries named above. The assessment and the kit talk to a finance or operations lead who is about to buy an AI pilot. A local shop owner in Idaho is not addressed by name, place, or headcount.

### Proof and the shape of a case study

One named client on the marketing site. https://consultingdjv.com/

> "I hired Dino to advise us on the valuation of our company. His deep technical knowledge, strong academic background and structured approach were evident from the beginning and represented a key contribution to achieving our objectives."

Alberto Murazzo, "Control Asset Management (CAMSA). Owner." The "Visit" link on that card goes to `https://www.controlasset.com.ar/`. That host was not crawled. The quote is about a valuation. It has no dollar outcome, no headcount, and no AI claim.

Portfolio, https://consultingdjv.com/portfolio, H1 "PORTFOLIO," deck "I have  developed several apps and websites." Visible titles are explorations and sites: "Stitch by Google Exploration" (2026, repeated), "3D Website Exploration" (2026), "Hero Section Animation" (2024), "Finance Website" (2024), "Music App Website" (2024), "Supply Chain" (2022), "No Code Tools Library" (2023). No client name and no result. A homepage slider the body text does not show says "our web design work" and "As part of our complementary services," with image files named Kindred, Eleanor, Solvant, Monolith, and SolidNestHomes. Those names are file names. They are not case studies on the page.

| Surface | Named client? | What it leads with | A recovery number? |
| --- | --- | --- | --- |
| Homepage testimonial | Yes. Alberto Murazzo, CAMSA, owner | A company valuation | No |
| Portfolio | No | Web experiments and sites, by year | No |
| X post, 14 October 2026 | No | Cash is leaking; finance teams find it in a recovery audit | No dollar, no line count |
| Quick-tricks PDF | No. "SMBs typically" | Ten plays "you can ship this month" | Worked examples, below |
| Supply-chain brochure | No | "Recovers 3–8% of freight spend." "87% automation rate. $8–15 → $1–3 per invoice." | Rates and ranges, no shop |
| Wil's proof, not on their site | A local auto repair shop | Missed vendor credits found by matching PO lines | $217K, 11,139 lines |

Quick-tricks examples, so they are not later mistaken for a client. `pdf-ai-quick-tricks-30-days.txt`

> Pulling DSO down by 5-10 days on a USD 200k AR book frees ~USD 30k of working capital in 30 days.

> SMBs typically cancel 15-25% of SaaS spend on first sweep. On USD 4k/month tooling that is USD 700+ saved monthly.

> Cutting overstock by 10% on a USD 150k inventory frees USD 15k of cash and reduces obsolescence write-offs.

The play closest to a recovery audit is play 02, "Hunt down silent SaaS leaks," which is recurring card charges, not vendor credits on PO lines. The supply-chain brochure's "FREIGHT AUDIT" and "INVOICE CAPTURE / OCR + 3-way match" are the operational cousins of matching PO lines. They are written as method claims ("Recovers 3–8%," "87% automation rate") without a company, a period, or a line count.

**INFERENCE:** nothing crawled is a case study in the sense of one customer's before and after. The valuation quote is a character reference. The kit is a menu of illustrations. The X post is a category claim. Wil's shop result is a different shape: one place, one match, a dollar, a line count. Putting his figures into their "recovery audit" sentence would invent a client they did not name.

## 2. Sales and marketing

### Positioning

1. Category, in the header: "Fractional CFO + AI Implementations."
2. Promise: "WHEN THE PLAN IS CLEAR THE WORK GETS DONE" and "Higher profitability - Stronger cash flow."
3. Enemy, on the AI page and in the kit, more than on the homepage: slides, enthusiasm, a pilot with no P&L owner, tokens with no cash line, a model that moves money with nobody accountable.
4. Mechanism: eight principles, four scores, a 90-day install, and a partner who implements.
5. Commercial: "From" prices, a free call, a free kit, a free workshop.
6. Proof: one valuation quote, then logo files, then the kit's sample math.
7. Risk: an NDA "from minute one." Not a results guarantee. "Your peace of mind has no fine print."
8. Who: LatAm and global SMBs, said in the FAQ, after the offer.

Lines worth keeping, each from the URL on the line:

- "A gap map before you sign the next pilot." https://consultingdjv.com/ai-readiness
- "We don't hand you a slide deck and walk away." https://consultingdjv.com/
- "if nobody approves before money moves, you do not have control — you have theater." https://consultingdjv.com/ai-readiness
- "Tokens are the bill. Value is cost per successful outcome and cash in the bank." Same page.
- "Two paying plays beat ten half-done experiments." Quick-tricks PDF, and the board PDF repeats the sentence.
- "You do not need more leads — you need faster, sharper responses." Quick-tricks PDF. Useful only as a sentence. The product around it is a quote-writing assistant, not his offer.

Voice on the homepage is a template plus a personal FAQ: short labels, some misspelled ("profability," "promisse," "Reestructuring," "Occupacy"). Voice in the assessments is tighter: second person, a failed alternative, then a rule. The PDFs sound like carousels. They close with "DM "AI QUICK WIN"" and "DM "AI SUPPLY"" and "Save – Share – Follow." Those closers are not on the website.

### Funnel and CTAs

Paths a visitor is offered:

1. "Your Free Call" and "Schedule Call" to `https://calendly.com/dinojosevidili`. The embedded event is a 30-minute meeting. No date was selected. The public event shows a calendar and a cookie banner. It does not show custom questions before a time is picked.
2. "OUR FREE AI KIT" / "Download our Free AI implementation frameworks." The "Visit" button goes to `/ai-readiness`, not to a gated file. The seven PDFs are direct CDN links. No email field was in front of them.
3. The four assessments. "Start assessment" is a button, not a form. The script writes a score into the browser. Nothing was submitted.
4. "Review your score with us" is again "Your Free Call."
5. "OUR EVENTS" is a Luma embed. The event is "Taller de IA Aplicada a Compras Corporativas," hosted by Dino J Vidili, Friday 30 October 2026, "9:00 PM - 10:00 PM UTC" on the widget, "18:00 hs." and "100% Gratuito" in the description. Structured data start is `2026-10-30T18:00:00.000-03:00`. **INFERENCE:** 18:00 at offset -03:00 is 21:00 UTC, which is the widget's 9:00 PM UTC. The page does not spell that out. Topics: purchasing automation, data analysis, "Casos reales," tools "desde el primer día." No company is named inside "casos reales." Registration was not opened, so any questions behind "Register" are not in this teardown. https://luma.com/003gwzef
6. LinkedIn icon to his profile. The profile was not opened.
7. Language toggle, English and Spanish. The Spanish homepage is a translation that also changes a price, a tier name, and one experience label. See the table.

The FAQ says "Secure your free call through the form or CTA on consultingdjv.com." The pages crawled have no `<form>`. The CTA is the calendar. **INFERENCE:** "the form" is either the embedded Calendly widget or a leftover sentence.

There is no blog. `/blog` is a 404. There is no ebook gate. The kit is the lead magnet, and it does not ask for an address. The workshop is a second lead magnet, in Spanish, aimed at corporate purchasing, one hour, free.

### Trust placement

Order on the homepage: headline and free call, four service labels, "ABOUT ME" (10+ years in global organizations, tech entrepreneur, "Save money and gain profability short term"), the free kit, eight principles, the NDA, four partner cards, Visionary AI, the industry grid, the free-call line again, the Murazzo quote, an experience list (Finance, Fundraising, IT + AI, Investments - M&A, Business strategy, HR, Purchasing), then the three priced cards, then the FAQ.

The partner cards do not name the firms in text. The image files, one sentence each, are "5 Foot View GF SHIELD," "TFN Logo," "ApexBit Logo," and "Humand Logo." The sentences are the fractional-executive community (two cards), "AI and automation for Accounts Payables, Accounts Receivables and Pharmacies," and "An all-in-one HR platform." Alts are empty. **INFERENCE:** the file names are the intended brands. The page does not say so in a sentence, and those sites were not opened.

The experience list on the Spanish homepage swaps "FUNDRAISING" for "DESARROLLO WEB." https://consultingdjv.com/es

### Follow-up hints

- "Secure your spot and I will contact you."
- FAQ: they contact you after the free call. No "one business day," no "no automated sequence."
- The kit's own follow-up is a social DM, "AI QUICK WIN" or "AI SUPPLY," not the calendar.
- No privacy policy of DJV's was found. `/privacy` and `/privacy-policy` 404. The terms URL is the template, below.
- Calendly's cookie banner mentions clicks, cursor movement, and screen recordings. That is Calendly's notice, on their event page. It is not copied here as a tactic.

## What Wil should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder. None of them is "become a fractional CFO."

1. **Fit call: end on one constraint, in 30 minutes.** Their walkthrough line is "A 30-minute walkthrough of your score and the one constraint blocking cash or AI impact." His call is already free and already 30 minutes. He does not need their 120-point band, and he should not tell an owner "Not ready to buy AI" from a self-score. The sentence to keep is the one constraint. https://consultingdjv.com/ai-readiness

2. **Fit call: say what is not a slide.** "We don't hand you a slide deck and walk away" is the homepage. The X post sharpens it to "Sprints over Slides" and "a PowerPoint and a next phase proposal." On his call, the thing the buyer leaves with is the decision to commission the Job map, or not. The map is the artifact. A deck is the thing both of them are refusing. https://consultingdjv.com/ and https://x.com/DinoJVidiliCons/status/2112916472313897259

3. **Job map: write the contents they bury in the quiz.** One sentence for the job. The cash or P&L line it must move. A baseline (they use 13 weeks; his shop story can use the lines he already matched). The system of record. The exceptions. The person who approves before money moves. A go/no-go date. Their script: "Freeze the backlog to one use case until that case has a metric, a baseline and a go/no-go date." His difference is that this document is paid and credited toward the build. Their score is free and stays a score. https://consultingdjv.com/ai-readiness

4. **Job map: use their "leakage" question as a filter, not as a claim.** "Is the target cash, margin, DSO, freight variance, write-off or leakage — not “adoption”?" For the repair shop, the target is missed vendor credits, and the source is the PO lines. The map's job is to check that the source exists at the next shop. **INFERENCE:** a Job map that cannot name the line and the file should not become a build. That is their question, applied to his proof, without using their sample dollars.

5. **Build: one job, then stop.** "Start only #1. DJV does not scale a portfolio until one pilot moves a visible number." And "Two paying plays beat ten half-done experiments." The build that matches his proof is the vendor-credit match. It is not ten tricks, not a 90-day finance install, and not a monthly CFO. https://consultingdjv.com/ai-readiness and the quick-tricks PDF.

6. **Build: do it in the system they already run.** "inside the tools you already use" is the homepage implementation line. The kit's opposite instruction is play 02: paste bank and card statements into a chat. Leave that. His version of their line is the DMS, the vendor portal, and the PO file, with a person still approving the exception. https://consultingdjv.com/

7. **Autonomy ladder: their three stages, stopped at the person.** Assisted: a person approves every output that moves money. Semi-automated: low-risk repeats run, a person takes exceptions. Managed scale: only after the measure is there, and the human-review threshold is still named. Their HITL line "no approval means no action" is the rule on the early rungs. "Does a named human inherit the consequence if the output is wrong?" is "Keep the decisions." Do not adopt "The CFO runs the outer loop." That sentence makes the product a finance seat. https://consultingdjv.com/ai-readiness and `pdf-ai-board-operating-system.txt`

8. **Proof: lead with the shop, the dollar, and the line count, then the caveat.** Their freight line "Recovers 3–8%" and their AR line "~USD 30k" have no shop and no caveat. His paragraph should say what "missed vendor credits" includes, that the figure is that shop, and that a person still checks the exception. One paragraph. Not a grid of "typically."

9. **Price: one number per step, the same on every page, or no number yet.** They printed "From" three times and the second tier disagrees with itself across languages. While his price is undecided, the fit call can say the Job map fee comes off the build, without borrowing 2,500, 5,000, 8,000, or 200. If he later publishes a range, it is his range for the map and the build.

10. **NDA in one sentence, in owner language.** "We sign a Non-Disclosure Agreement (NDA) for every single project—no matter its size, budget, or duration." His shorter version: the work happens in your system, you own the workflow, a person still approves the exception. He should write his own terms. Theirs, on the terms URL, are not theirs. See below.

## What not to copy, and why

- **The fractional CFO seat.** "Monthly subscriptions," "I help you with the rest," Tier One as a finance diagnostic, the Luma bio "Fractional CFO." Wil hands off a job. He does not take the finance chair. The kit even says "You do not need a CFO," which shows how tangled this offer is. Leave the seat.
- **Their "From" prices.** USD 2,500, USD 8,000, USD 5,000, and USD 200 buy a diagnostic, a 90-day install, or an hour of advice. Publishing them would anchor a delivery model he does not staff. The English and Spanish Tier Two prices cannot both be the offer.
- **The $130–$1,300 stack and the sample cash math, as if they were results.** Those are kit illustrations. An owner who hears "~USD 30k" will treat it as a promise. Wil already has a real recovery. He does not need a fictional AR book.
- **Pasting bank, card, or PO files into a chat.** Play 02 tells the reader to feed three months of statements to an AI and ask for duplicates. That is the wrong place for a shop's payables. The line to keep is the opposite one: work inside the tools they already use, and write down what may enter a model.
- **Visionary AI, the unnamed implementation team, and the Fortune 50 bank names.** "Wells Fargo, Bank of America, and Capital One" is the partner's résumé on his homepage. A one-person practice that borrows a bench looks like it is hiding the shop story.
- **The family-business and board product.** NextGen, a family council, staged succession, a five-day sprint for CEO, COO, and CFO, an AI council. Different buyer. The EBITDA row on that cockpit is a metric name, not a reason to talk like a fund.
- **The model bake-offs.** Two kit PDFs compare labs for budgeting and for finance operations, with "TIME TO FIRST ROI / 3-6 mo" in one and "real ROI builds after 6+ months" in the other. A dealer principal does not buy a model ranking. Wil should not publish one.
- **The industry grid.** "Any segment" and "Any Stage" next to Automotive and Fintech is a grid of hopes. He should name the trades he has actually worked.
- **"95% of AI pilots produce zero P&L impact (MIT NANDA,2025)" with no linked study on the page.** The sentence is doing the work of a guarantee he does not offer. If he cites a study, the study has to be on the page.
- **The Crestfund legal pages.** https://consultingdjv.com/utility-pages/terms is titled "Terms - Crestfund - Free Webflow Website Template," `noindex`, "Last updated: January 14, 2022," country "Switzerland," company "Haute Capital Partners Ltd," website "www.haute.capital." The licenses page credits Pexels, Unsplash, and a Figma template. The changelog says "hello@atwww.design." The footer still says "DJV Consulting" and "Remote, Argentina." Copying their confidence is not the lesson. Copying a template's legal entity is how a small firm publishes someone else's terms.
- **Web experiments as the portfolio of a finance offer.** "Stitch by Google Exploration" and a music-app site do not help an owner believe a cash finding. The valuation quote does not either. One shop story beats both.
- **A free score that tells the buyer they are not ready, then a paid CFO.** The band "Not ready to buy AI" is a useful internal test. Said out loud at the end of a fit call, it is a scold. His call is a fit check, not a maturity exam.
- **The same calendar for a free call and a USD 200 hour.** Both buttons use `https://calendly.com/dinojosevidili`. The event page does not say which offer the slot is. He can keep one 30-minute fit call. The paid work starts at the Job map, not at a second unlabeled button.

## X evidence

Both posts are from @DinoJVidiliCons, saved in `research/ai-specialists/_x/posts.md`. They are X posts, not website copy. The article links in them did not return a public article body.

14 October 2026, https://x.com/DinoJVidiliCons/status/2110361740256919872

> Your company is probably leaking #cash right now. And almost nobody is catching it.
>
> Most finance teams only discover the problem during a recovery audit — months (or years) after the money has already left the building. #AI can solve this problem

What this adds: the site never says "recovery audit," and it never says the money is already gone before anyone looks. The tokenomics quiz uses the word "leakage" as one allowed target among cash, margin, DSO, freight variance, and write-off. The quick-tricks PDF's "silent SaaS leaks" are subscription charges. The supply-chain brochure's freight audit "recovers 3–8% of freight spend" with no timing claim. The post is a timing claim with no number.

Shape, set next to Wil's proof and not merged with it. Their post: a probable leak, found late, in an audit, no company, no dollar, no line count, and a claim that AI can solve it. His proof: one local auto repair shop, $217K in missed vendor credits, 11,139 PO lines matched. His is a recovery that already happened, with a count of the records. Theirs is a warning that the recovery happens too late. Using his dollar as the example inside their warning would make their post sound measured. It is not measured on the post.

21 October 2026, https://x.com/DinoJVidiliCons/status/2112916472313897259

> Sprints over Slides: Why mid-market companies are quietly firing their #AI strategy consultants
>
> If your last AI engagement ended with a PowerPoint and a “next phase” proposal, this is the shift happening right now. Here is how

What this adds: "firing" and "next phase proposal" are not on the site. The site does say "We don't hand you a slide deck and walk away," and the readiness question contrasts a written strategy with "just slides and enthusiasm." The homepage also sells "STRATEGY MANAGEMENT" and "WHEN THE PLAN IS CLEAR." **INFERENCE:** the post is the sharper version of the implementation paragraph, aimed at a mid-market reader who already hired a strategy consultant. It is not a case, and it does not say what the sprint delivers.

The two posts together are the offer in slogan form: do the work, not the deck, and look for cash that has already left. The site is wider than that (fractional CFO, websites, family succession, an hour of turnaround advice). The posts do not mention the prices.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Tier Two price | English homepage: "From USD 8,000." Name: "90-Day Cash & Control Install," under "AI for Finance & Supply Chain" and "Case by case implementations." | Spanish homepage: "Desde USD 5,000." Name: "90-Day Control Interno y Flujo de Caja," under "IA para el negocio." |
| Monthly CFO | FAQ: "Fractional CFO (monthly subscriptions with business diagnosis in 2–3 weeks)." | The only number on that block is the diagnostic, "From USD 2,500." No monthly figure. |
| Free call vs paid hour | "Your Free Call" and the USD 200 "Schedule Call" both link to `https://calendly.com/dinojosevidili`. | The event page says "30 Minute Meeting" and shows no price and no word "free." |
| Years | Homepage: "SR Management experience ... for 10+ years." | AI page: "After 20+ years inside finance and tech." Luma: "más de 20 años de experiencia en Senior Management." The "30+ years" line is the implementation partner, not him. |
| Need a CFO | Homepage and Luma sell a fractional CFO. | Quick-tricks play 03: "You do not need a CFO — you need a Sunday-night 30-minute habit." |
| Promise | Principle 5: "We do not promisse, we deliver." | AI page, as the thing "every consultant" says: "We don't promise results. We promise effort." No results guarantee either way. |
| When cash shows up | Quick tricks: "pay for itself before the next billing cycle closes." Supply-chain brochure: "ROI you can measure in 90 days." | Model brief: "TIME TO FIRST ROI / 3-6 mo." Budgeting brief: "real ROI builds after 6+ months." |
| Readiness questions | Live script: "a written AI strategy with measurable business goals and a 12–24 month horizon — or just slides and enthusiasm?" | Kit PDF: "a clearly defined AI strategy that is aligned with business objectives and documented — not just a vague 'we should use AI'." Same 12-count and same 0–59 / 60–89 / 90–120 bands. Different question text. |
| Experience labels | English: Fundraising, IT + AI. | Spanish: "DESARROLLO WEB" where the English list says "FUNDRAISING." |
| How to start | FAQ: "through the form or CTA." | No form on the pages crawled. The CTA is Calendly. |
| Footer year | English home and English AI page: "@2026." | Spanish home and Spanish AI page: "@2025." |
| Terms | Footer presents DJV Consulting, "Remote, Argentina." | `/utility-pages/terms`: Crestfund template, Haute Capital Partners Ltd, Switzerland, haute.capital, January 2022, `noindex`. |
| Cash leak | X: found in a recovery audit, after the money has left. No amount. | Kit: SaaS "typically" 15–25%, freight "3–8%," AR example "~USD 30k" on a "USD 200k" book. Not the same claim, and not his $217K. |
| X articles | Both posts say "Here is how" or that AI can solve it, and link out. | Those article URLs 404 to an unauthenticated fetch. The argument past the post text was not available. |

Questions the site does not answer, which Wil still has to answer for himself:

- The unit in his Job map: credits found, lines matched, hours the person no longer spends, the exception rate, or all of them. Their site shows what happens when that unit is left blank: the kit uses four different clocks for "ROI."
- Whether the credited Job map needs a published price. Their diagnostic has a "From" and their monthly CFO does not. Both choices are on the homepage. Which one fits a local owner is still his call.
- Whether the repair shop can be named. Their only named proof is a valuation client. His number gets weaker if it has to become "a local shop." That is a permission question.
- How far up the ladder he will say out loud. Their governed band still has a person on the money. Saying that on his page matters more than adopting their 240-point score.
- Which second job, after vendor credits, is the next map. Their filter is a named line, a source, and a person who can approve. The site has no dealer and no trade example to steal. Automotive on their grid is "Autoparts" and "Logistics Centers," with no story attached.

## Where the raw pages are

`research/ai-specialists/consulting-djv/pages/`. `crawl-log-1.tsv` is the marketing site. `crawl-log-2.tsv` is the Calendly event and the Luma embed. `crawl-log.tsv` is the Luma event page. Quotes were checked against the English and Spanish homepages, both AI-readiness files, the tab-pane extract, the English assessment strings, the portfolio, the terms page, the seven PDF extracts, the Calendly event, the Luma event, and the two posts in `research/ai-specialists/_x/posts.md`.
