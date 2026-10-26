Funnel-only pass. LeftClick AI (Nick Saraev), 26 October 2026. This teardown is how they sell, not a catalog of the course, the workshop curriculum, or the build recipes.

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no call booked, no Skool join, no slot selected on the calendar.

Wil Sensing is a one-person consultancy. Offer, in order: a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder. Headline: "Hand off the busywork. Keep the decisions." Buyers: owners of 50–200 person dealerships, equipment dealers, and trades in Idaho and eastern Washington. He is not building a Skool community or a YouTube course. Pricing is undecided.

Quotes are from files in `research/ai-specialists/leftclick/pages/`. **INFERENCE** marks a conclusion that is not a sentence on the page.

## Top 5 takeaways

1. **The front door is one free 30-minute call, and the page says the buyer leaves it knowing the price.** They name it a "growth mapping call" and a "funnel map audit." The pricing page says the caller leaves "with a concrete sense of what's possible and what it would cost." The public calendar URL is `cal.com/codymclean/30min`, and the event is titled "Nick's Strategy Team." **INFERENCE:** the slug matches Cody McLean, Head of AI Solutions, named on the about page. The saved event page does not say he is the person on the call. It is not a form, and Nick's name is not in the URL. Adapt the habit of telling the owner what the fit call produces. Keep the fit call as Wil's own calendar. Leave the live "audit your funnel" promise: a one-person practice cannot scope a dealer in thirty minutes. Source: https://leftclick.ai/pricing.html and https://cal.com/codymclean/30min?source=website

2. **A price band is on every sales page. The retainer has no number. The only refund promise is on the community, for a different buyer.** Agency copy, repeated in the footer: "Engagements typically start at $5K. Most projects range $10K-$50K." Ongoing management is "optional" and unpriced. Maker School, the Skool page, is "$184 /month" and "Get your first paying AI client in 90d or your money back." Once Wil picks a floor, put that floor on the fit-call page so the wrong owner self-selects. Do not print their band. Do not print a 90-day client guarantee. Source: https://leftclick.ai/pricing.html and https://www.skool.com/makerschool/about

3. **The proof on the sales page is revenue from companies the site also calls his.** The homepage leads with "$10M+ revenue generated," then Dental Media Corp at "$2M/yr," 1SecondCopy at "$90K/mo," and Maker School at "$250K/mo." The about page lists "LeftClick, Maker School, DMC, Clairvo" as "our companies and products," and says he founded 1SecondCopy. The reviews page calls Maker School "Our own education company" and says third-party reviews are still being built. The Maker School monthly figure is $250K, $240K, or $330K depending on the page. Wil's $217K and 11,139 PO lines, labeled as a client's books, is the proof shape to keep. Leave follower counts, logo rows, and in-house revenue as the substitute for a client. Source: https://leftclick.ai/ and https://leftclick.ai/about.html

4. **Maker School is a second business, sold to people who want to start an AI agency.** The public Skool page is a join button, a monthly price, a 90-day refund, "218 exclusive videos," and "3 underground lead gen methods." The agency footer links it beside YouTube. Wil is not building this. Leave the membership, the "price increasing soon" line, and the curriculum. The selling lesson, if any, is that their community states price and promise on the first screen, and the agency retainer does not. Source: https://www.skool.com/makerschool/about

5. **Every service page ends on the same call. There is no application and no lead magnet on the site.** Lead gen, agents, CRM, and workshops all close with the growth-mapping block and the same $5K–$50K lines. "Free Courses" is a YouTube playlist; that playlist was not opened. Careers says hire by booking a short call. The words they use for the buyer are "fast-moving B2B companies," agencies, and, for workshops, "midmarket and enterprise." Local services show up as a vertical they have built outbound for, not as the owner Wil sells to. Keep a fit call that asks whether the job is his. Leave a growth audit, a cold-email product, and a workshop as the way in. Source: https://leftclick.ai/ai-automation and https://leftclick.ai/faq.html

## Method and coverage

Chrome headless, read-only, 26 October 2026. Three runs, one browser at a time. Logs: `pages/crawl-log-1.tsv` (leftclick.ai, max 40), `pages/crawl-log-2.tsv` (Maker School, max 1), `pages/crawl-log.tsv` (the Cal.com event page, max 1). 42 page text files. No soft 404s. No login.

Leftclick.ai, 40 files. Homepage, five service pages, workshops, about, Nick's bio, industries, press, what-is-LeftClick, process, FAQ, reviews, terms, five case studies, plus the `.html` canonicals for services, about, Nick, industries, pricing, process, FAQ, reviews, press, careers, contact, privacy, terms, what-is-LeftClick, and one case study. Fourteen extensionless files and their `.html` twins have the same body after the URL lines. Both were kept: the final URLs differ. The extensionless pages name the `.html` URL as canonical.

Still queued when the first run stopped, and not fetched: `https://leftclick.ai/pricing`, `/about`, `/about-us`, `/services`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, `/privacy`, `/privacy-policy`, and four `.html` case-study twins. Pricing, about, services, contact, and careers were saved at the `.html` URLs. `/blog` and `/work` were not opened. No blog posts were crawled.

Second host, one page: `https://www.skool.com/makerschool` rendered `https://www.skool.com/makerschool/about`. Not followed, on purpose: signup, members, Nick's Skool profile, reviewer profiles, and the rest of Skool. `pages/not-fetched-skool.txt` is that queue. Did not join.

Third host, one page: `https://cal.com/codymclean/30min?source=website`. The event description rendered. No date was selected and no form was submitted. The run queued thousands of other cal.com URLs (`pages/not-fetched.txt`). Those were not fetched.

Not opened, on purpose: the YouTube channel, the Free Courses playlist `https://www.youtube.com/playlist?list=PLSbQllRagIuR2C9Aiy_-RtUEC9Q3NbKaB`, LinkedIn, Instagram, X, Gumroad (named only in homepage JSON-LD), and Clairvo (named on the about page, no Clairvo URL in the saved pages).

The visible text on leftclick.ai is server-rendered enough that Chrome and the HTML agree. Skool and Cal.com are JS apps; the saved text is what headless Chrome showed.

## Product

### What they sell

Two products sit next to each other. The agency site sells done-for-you systems. The Skool page sells a membership for people who want their own AI clients.

Homepage H1: "The definitive AI growth partner for fast-moving B2B companies." Subhead: "AI systems that generate leads, close deals, and scale operations. Built by a team that has done it across 20+ industries." https://leftclick.ai/

What-is page: "We build custom AI systems that generate leads, close deals, and scale operations — without our clients having to add headcount." The same page names four builds: "AI lead generation," "Workflow automation & AI agents," "CRM & sales automation," "Backend infrastructure." One line on that page is the closest they come to Wil's headline: "Custom agents and automations that remove manual busywork across sales, ops, and delivery." https://leftclick.ai/what-is-leftclick

Service names, each with its own page and no separate price:

| Page | H1 | How they describe it | URL |
| --- | --- | --- | --- |
| AI automation | AI automation. | "Custom AI systems that handle repetitive work end to end — so your team ships more without adding headcount." | https://leftclick.ai/ai-automation |
| AI lead generation | AI lead generation. | "Done-for-you outbound and inbound systems that surface qualified B2B leads on autopilot." | https://leftclick.ai/ai-lead-generation |
| Custom AI agents | Custom AI agents. | "Agents that research, reach out, support, and run internal workflows." | https://leftclick.ai/ai-agents |
| CRM & sales automation | CRM & sales automation. | "Lead routing, enrichment, follow-up, and reporting." | https://leftclick.ai/crm-sales-automation |
| Workshops | AI workshops & training. | "We train midmarket and enterprise teams to implement AI into their day-to-day." | https://leftclick.ai/workshops |

The services index is a vertical grid (dental, e-commerce, local services, agencies, real estate, SaaS, education, enterprise, and others) with no prices per vertical. It was read for the sales claim, not inventoried line by line. The local-services blurb is outbound, not ops inside an existing shop: "Lead generation and booking automation for home services, cleaning companies, landscapers, and contractors. Built outbound systems that fill calendars on autopilot." Tags under it include "Google Maps Scraping." https://leftclick.ai/services.html

Maker School is the other product. See Sales.

### Packaging, prices, and guarantees

Agency price, pricing page, https://leftclick.ai/pricing.html:

> Engagements typically start at $5,000; most projects range from $10,000 to $50,000. One clear scope, timeline, and price — agreed before any work begins.

The same band is in the FAQ and in the footer of the pages saved ("Engagements typically start at $5K. Most projects range $10K-$50K."). Meta description on the pricing page matches. No project on the crawled pages has its own price. Workshops use the same footer. No hourly rate.

Ongoing, same page: "An optional monthly retainer to monitor, optimize, and extend your systems over time. Most clients see compounding returns." No retainer dollar amount on any page crawled.

Agency promise, homepage, as two lines:

> Fixed price, no surprises
>
> Every engagement gets a clear scope, timeline, and fixed price. No hourly billing, no scope creep, no mystery invoices.

No refund sentence and no "no invoice" guarantee on the agency pages. The terms file has no price and no refund clause in the visible text.

Community price and guarantee, public Skool about page, https://www.skool.com/makerschool/about:

> $184 /month
>
> Get your first paying AI client in 90d or your money back.

Also on that page: "JOIN $184/month", "Price increasing to $194/mo soon!", and "Join now & land AI client #1 in 90d or get a full refund." Meta description: "Get your first client for an AI automation business in 90 days or your money back. Daily AI coaching, AI templates, +$30K saved in tools. $184/mo."

The about page states a separate figure for the agency as a business he scaled: "launch and scale LeftClick to $72K/mo." That is not a client price. https://leftclick.ai/about.html

### Engagement model

Process page, four steps, https://leftclick.ai/process.html:

1. "Funnel map audit." Then: "A free 30-minute session where we audit your funnel, identify bottlenecks, and map out exactly where AI can move the needle."
2. "Proposal." Then: "We deliver a clear scope, timeline, and fixed price. No surprises, no hourly billing. You know exactly what you're getting."
3. "Project." Then: "Our team builds, tests, and deploys your systems. You get weekly updates and a working product, not a deck full of promises."
4. "Ongoing management." Then: "Optional retainer for monitoring, optimization, and iteration. Most clients see compounding returns over time."

Same page: "From day one you're working with the people who actually build the systems, not a layer of account managers."

The automation page puts mapping inside the paid work: "We start by mapping the real workflow — intake to delivery — and pinpoint the highest-ROI places to automate." https://leftclick.ai/ai-automation

The agents page is the handoff line: "We define exactly what the agent does and where it hands off to a human, before building." https://leftclick.ai/ai-agents

**INFERENCE:** discovery is the free call plus a proposal. Nothing on these pages is a paid diagnostic the buyer keeps if they stop. That is the structural difference from a Job map credited toward the build.

### Named frameworks

No named framework, trademark, or ladder on the pages crawled. The repeated names are the call ("growth mapping call," "funnel map audit") and the companies (LeftClick, Maker School, 1SecondCopy, Dental Media Corp, Clairvo).

### Who it is for, in their words

- Homepage H1: "fast-moving B2B companies."
- Meta description, homepage: "agencies and service businesses."
- FAQ: "a remote-first team serving B2B clients in Canada, the United States, the United Kingdom, and Australia. We've delivered work across 20+ industries."
- Industries H1: "AI systems for 20+ industries." The list is agencies, e-commerce, SaaS, healthcare and dental marketing, education and coaching, content and media. "If yours isn't here, the audit will tell us fast whether we're a fit."
- Workshops: "midmarket and enterprise."
- Contact: "SERVING Canada, United States, United Kingdom, Australia." Phone "(604) 723-1522." Hours "Mon–Fri, 9:00 AM – 5:30 PM."

No page crawled says dealership, equipment dealer, trades, Idaho, or a headcount band. The services grid includes "Local services" as a place they have installed outbound. **INFERENCE:** the buyer they write for is a B2B operator who wants more pipeline, often an agency. Wil's buyer is an owner who already has the work and wants the busywork off the desk.

### Proof

Homepage stats: "$10M+ revenue generated," "20+ industries served," "1M+ followers worldwide," "7 yrs production AI." Logo line: "NICK & HIS TEAM HAVE WORKED WITH" Anthropic, MrBeast, Notion, Wix, HeyGen, VEED, Lightricks, Durable. None of those names appear in the five case studies saved. https://leftclick.ai/

About page, the ownership sentence:

> All of our companies and products (LeftClick, Maker School, DMC, Clairvo) use the same automations we help you install.

Nick's bio on the homepage: "Nick runs a 400K-subscriber YouTube channel and Maker School, the #1 AI community on Skool ($250K/mo, 10,000+ graduates)." The about page says Maker School is "over $330,000/mo in revenue" and that he "scaled LeftClick to $72K/mo." The services page says both "$240K/mo in recurring revenue" (education block) and "$330K/mo" (info-products block and the featured Maker School panel). https://leftclick.ai/services.html

Reviews page: "We let outcomes speak." Then: "We're building out third-party reviews on Clutch and Google. If you've worked with LeftClick and want to leave a review, get in touch." https://leftclick.ai/reviews.html

| Study | What the sales surface leads with | What the study page adds | URL |
| --- | --- | --- | --- |
| 1SecondCopy | "$90,000/m, 2 operators." Homepage. He "founded 1SecondCopy" on the about page. | "automate 90% of their pipeline," "cost per 1,000 words by 50-60%," "fewer than 3 operators," "revision rate below 5%," "40+ hrs/month" of admin removed. | https://leftclick.ai/case-studies/1secondcopy |
| Dental Media Corp | "Regional PPC shop to $2M/yr revenue." DMC is in the "our companies" list. | "3-5x more qualified leads," "ROAS by 40%+," "sales cycle by 60%," "founders 20+ hours/week." "scaled 2024-2025." | https://leftclick.ai/case-studies/dental-media-corp |
| XWECAN | "Featured in Forbes, WSJ, Fortune, BBC & more." | "18% positive-reply rate—4-5× typical cold-PR benchmarks," "account-management headcount by 80%." The study also names CNN. | https://leftclick.ai/case-studies/xwecan |
| AlterCall | Named on the case-study index. Not on the homepage hero. | "Call-booking rate up ~30%." "Close-rate per booked call up ~25%." "ROAS improved by ~40%." The body also writes "Alter Call." | https://leftclick.ai/case-studies/altercall |
| Dad's Printing | Named on the index. Not on the homepage hero. | "Margin per unit up 2–3× versus wholesale jobs." "Hundreds of unique orders/day with <5% error rate." "Pick-pack time cut ~70%." | https://leftclick.ai/case-studies/dads-printing |
| Maker School | Homepage "$250K/mo." Reviews: "Our own education company." | Not a case-study URL. Sold as a membership. See the Skool page. | https://leftclick.ai/reviews.html |

**INFERENCE:** a buyer who only reads the homepage cannot tell which of the $10M+ is client revenue and which is revenue of companies the about page claims as theirs. The reviews page is the one place Maker School is labeled as their own.

## Sales and marketing

### Headlines and tone

Lines worth keeping in view, because they show the motion:

> Book a free 30-minute growth mapping call. We'll audit your funnel, find the bottlenecks, and show you exactly where AI moves the needle.

That block, plus the $5K–$50K lines, is the close on the homepage, the service pages, pricing, about, process, FAQ, reviews, press, workshops, and careers. https://leftclick.ai/

Pricing page, on the call itself: "No cost, no pitch." Contact page: "No pitch, just a clear plan." The Cal.com event contradicts the pitch claim in the next section.

Tone is short, certain, and revenue-first. "We don't just advise. We build." "Hourly billing rewards slowness. We'd rather be measured on outcomes." The founder is the trust: 400K subscribers, 1.5M views on a Claude Code course, "20M+ views," "built in public since 2024." Team of three is named: Nick Saraev (CEO / Talent), Cody McLean (Head of AI Solutions), George Dinu (Head of Delivery). Footer: "© 2026 Nick Saraev Media LLC."

### Funnel, CTA, qualification

One CTA. Contact page: "BOOK A CALL" and the visible URL `cal.com/codymclean/30min`. Phone is the second path. No form fields were in the saved contact page. https://leftclick.ai/contact.html

Cal.com event, fetched and not booked, https://cal.com/codymclean/30min?source=website:

> Growth Mapping Call
>
> Nick's Strategy Team
>
> We'll audit your workflows and funnels live on a 30-minute call and show you where AI can maximize growth before suggesting a few changes. Completely free, no strings attached.

The page shows "30m" and "Google Meet." No qualification questions (revenue, headcount, role) were in the rendered text. **INFERENCE:** the price band in the footer is the qualifier; the calendar is open. Selecting a time might reveal more fields. That step was not taken.

Careers is not a client application. "We hire opportunistically when we meet exceptional people. The best way to reach us is to book a short call and tell us what you've built." The client CTA is still in that page's footer. https://leftclick.ai/careers.html

There is no ebook, checklist, or newsletter on the pages crawled. "Free Courses" in the footer points at a YouTube playlist. The playlist was not opened, so this teardown does not describe its videos.

### The community offer

Maker School public page, the whole pitch before the reviews, https://www.skool.com/makerschool/about:

> Maker School is the fastest & most affordable way to get client #1 for AI automation with tools like Claude Code, Codex, n8n and more.
>
> Get your first paying AI client in 90d or your money back.

Visible merchandise of the offer, same page: "4.9 · 115 reviews", "Private", "2.6k members", "$184 /month", "By Nick Saraev", "218 exclusive videos & guides", "Live coaching: I respond to almost every post each day", "$21K in IMMEDIATE discounts to AI automation platforms", ">50 templates/scripts", "Weekly calls w Nick", "Over 2K AI consultants", "80 Online", "2 Admins."

The leftclick.ai pages describe the same community with different totals: "10,000+ graduates" and the monthly-revenue set in the table below. The Skool page does not state a monthly revenue figure. It does say "What's inside (worth +$40K)" and "BONUSES (worth +$10K)."

**INFERENCE:** the YouTube channel and Maker School are the audience engine. The agency site assumes that fame and sends the company buyer to Cody's calendar. Wil does not have that engine, and he should not build one to get the first dealer.

## What Wil should steal or adapt

Ranked. Mapped to his offer. Prices below are theirs; his stay undecided until he sets them.

1. **Fit call.** Name the meeting for the decision it supports, and say what the owner leaves with. Their pricing page: "you'll leave that call with a concrete sense of what's possible and what it would cost." Wil's version is narrower: whether a paid Job map is the right next step. The Cal.com line "before suggesting a few changes" is a pitch inside a "no pitch" call. Do not copy that.
2. **Job map.** Their process mapping is real language ("intake to delivery," "highest-ROI places to automate") and it is buried inside the build. The credited Job map is the stronger product for a single operator, because the free call is not the scope. Steal the sentence that scope, timeline, and price are agreed before work. Keep charging for the map.
3. **Build.** "Weekly updates and a working product, not a deck full of promises." And, from the agents page, define "what the agent does and where it hands off to a human, before building." That is "Keep the decisions," in their words. Use it on the build, aimed at one job in the shop, not at a funnel.
4. **Autonomy ladder.** Their step 4 is an optional, unpriced retainer for "monitoring, optimization, and iteration." There is no ladder. Wil's ongoing work needs a plainer public sentence than theirs: what "ongoing" means after the build. Do not copy "optional" as the whole description.
5. **Proof line.** One client, one count, one dollar figure, with the caveat on the same page. Dad's Printing (margin per unit, error rate, pick-pack time) is the study that reads like an operation. The homepage ($10M+, followers, logos) is the study to leave.

## What not to copy, and why

- **A Skool community and a YouTube course as the way clients arrive.** Maker School sells "client #1" to people building an AI automation business, at $184/mo, with a 90-day refund and a "Price increasing to $194/mo soon!" line. Wil's buyers are owners of existing companies. A membership would sell to a different person.
- **The growth headline.** "Generate leads, close deals, and scale operations" and the local-services offer (Google Maps scraping, calendars on autopilot) are an outbound agency. Wil's headline is busywork handed off, decisions kept. An owner who came for leads is the wrong fit call.
- **Their price band and their guarantee.** $5,000 to $50,000 is their number. The 90-day "first paying AI client" refund is the community's promise to aspiring agencies. Neither is a promise Wil can point at a dealership and keep.
- **In-house companies as the client logo wall.** The about page calls DMC and Maker School "our companies," the case studies say "we helped," and the homepage says "revenue generated for clients." Wil should not stack his own future product revenue on top of the auto-shop proof.
- **Fame as the trust mark.** "1M+ followers," "400K+ subscribers," "stress-tested in public, hundreds of thousands of times." A one-person local practice that leads with an audience is borrowing a motion it does not have. The named team of three, and a call titled "Nick's Strategy Team," is the same pattern at smaller scale.
- **Collapsing discovery into the free call.** Step 1 is free and step 2 is already a fixed-price proposal. **INFERENCE:** that only works if the team can estimate live. Wil's paid, credited Job map is the estimate. Folding it into thirty minutes throws away the product that makes the build safe.
- **Workshops for midmarket and enterprise** as a parallel offer. No workshop price is published. The CTA is still the agency call. Wil is not running a training company beside the practice.
- **A logo row the case studies do not narrate.** Anthropic, MrBeast, Notion, Wix, HeyGen, VEED, Lightricks, Durable. The pages crawled never connect those marks to a scope or a result.

## X evidence

`research/ai-specialists/_x/posts.md` has no post from Nick Saraev, LeftClick, or Maker School. Nothing on X in that file adds to, or contradicts, the site.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Maker School monthly revenue | Homepage: "$250K/mo." Services education block: "$240K/mo in recurring revenue." | About and Nick's page: "over $330,000/mo." Reviews and the services info-products block: "$330K/mo." The Skool page publishes $184/mo membership and 2.6k members, and no revenue total. |
| Maker School size | Leftclick.ai: "10,000+ graduates" and "218+ lessons" or "218 exclusive videos." | Skool page: "2.6k members", "Private", "4.9 · 115 reviews." Graduates and current members are different words. The pages do not reconcile them. |
| Tool-value claims on Skool | Body: "$21K in IMMEDIATE discounts." "worth +$40K." Bonuses "worth +$10K." | Meta description: "+$30K saved in tools." |
| Who owns the proof | Case studies: "We helped 1SecondCopy," "We helped Dental Media Corp." | About: he "founded 1SecondCopy." About: "our companies and products (LeftClick, Maker School, DMC, Clairvo)." Reviews: Maker School is "Our own education company." |
| The call is or is not a pitch | Pricing: "No cost, no pitch." Contact: "No pitch, just a clear plan." | Cal.com: "before suggesting a few changes." |
| 1SecondCopy headcount | Homepage card: "2 operators." | Case study: "fewer than 3 operators" and "<3 internal operators." |
| Retainer | Process step 4 exists. | No price, no term, no scope beyond "monitoring, optimization, and iteration." |
| Third-party reviews | Homepage is full of results. JSON-LD links Clutch and Capterra. | Reviews page: "We're building out third-party reviews on Clutch and Google." |
| Press logos vs. studies | Homepage "worked with" Anthropic, MrBeast, Notion, and others. | No case study saved mentions those names. |
| LeftClick's own revenue | About: "scale LeftClick to $72K/mo." | Not mentioned on the pricing page or the homepage stats. |

Private equity: the pages crawled and the X file do not mention it.

Clairvo is named once, on the about page, and has no saved page. Gumroad appears in homepage JSON-LD (`https://leftclicker.gumroad.com/`) and was not fetched.
