# Limestone Digital strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no newsletter signup, no portal login.

Wil Sensing is a one-person ops and AI consultancy for local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho, eastern Washington, Boise and Nampa). The offer is a free 30-minute fit call, then a paid Job map credited toward the build, then the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless governed workflows, then agent-run work, with a person on the exceptions). The lead line is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided.

Every important claim below is quoted from a page that was saved under `research/limestone-digital/pages/`. The URL list is `research/limestone-digital/sitemap.md`. **INFERENCE** marks a conclusion that is not a sentence on their site.

## Executive summary: top 10 takeaways

1. **They sell an embedded engineering outcome, not a tool.** The homepage meta description is "Enterprise AI transformation across product, process, and people: embedded engineers who ship, measure, and train until the capability is yours." Three layers sit under that: training, custom agents, and accelerated delivery. A measurement product, DevInt, is both a standalone demo and "inside every engagement." Source: https://limestonedigital.com/

2. **The commercial spine is a written measure plus a monthly pod.** Service pages price a pod at "$17K–$20K" per month. Training is "typically under $10K." The repeated promise is "No measured uplift, no invoice," month-to-month, "If it's not working, you walk." The public pages never define the unit of "uplift," and the percentages conflict (15%, 20–40%, day 60, 60 days). Steal the habit of agreeing the measure in writing. Do not copy the dollar amounts or the guarantee as printed.

3. **Their buyer is a software leader or a private-equity operator. Wil's buyer is an owner of a local operating company.** Named personas are CTO, VP Engineering, private equity operating partner, and founder. The team page says they serve "enterprises and private equity portfolio companies" in healthcare, insurance, lending, financial services, and logistics. Nothing on the site speaks to a dealership, an equipment dealer, a trade, or a 50–200 person local firm.

4. **The agent definition is the line that maps to Wil's headline.** On the agents page: "An agent can follow a defined workflow, take permitted actions, and hand exceptions to a person." That is the autonomy ladder in one sentence. Their agents H1 is "Custom AI agents that take work off your hands."

5. **Proof is mostly "a team shipped." Two pages actually measure the client's operation.** Ingenetix states a 12% processing-time cut and a 3% throughput gain. The voice-agent study states 61,246 calls, about 97% of conversations without a person, $0.071 per connected call, and then qualifies the zero-balance figure so it is not read as cash collected. Homepage percentages (42%, 85%, 35%/40%) are not tied to a client name in the visible copy. Wil's $217K / 11,139 PO lines is a stronger owner-facing proof shape than most of their library, if he writes the caveat the way the voice study does.

6. **The funnel is the founder's calendar, with a qualifier in front of it.** Almost every "Book a discovery call" opens Mark Ajzenstadt's HubSpot link. The contact page also offers a short form ("We reply within one business day. No automated sequence.") and a 7-step "free project assessment" that asks role, industry, revenue, headcount, stage, timeline, and investment before the same calendar. There is no ebook.

7. **They teach "seats are not a new process," then sell the process.** "You've got AI. You don't have value." The newsletter issue "no process, no agent" says "No document, no automation" and calls process documentation Layer 0. That essay is the closest thing on the site to Wil's Job map.

8. **Discovery leaves an artifact whether or not the buyer proceeds.** Agents FAQ: "Your team keeps the Vision and Scope document and Data Map whether or not you proceed." That is the structural cousin of a Job map credited toward the build. Their version is unpaid-looking (it sits inside a sales discovery). Wil's is a paid, credited product. Keep his version. Name what the buyer holds at the end of it.

9. **The content machine is a CTO query factory plus a Tuesday letter for PE and enterprise leaders.** The browsable blog is SEO playbooks ("What is RAG," "Top 10," DORA, healthcare billing). Thirty-six WordPress insight URLs 301 to Beehiiv. The newsletter homepage says "Join 3000+ PE Partners & Enterprise Leaders" and "Published Tuesdays." Do not copy the query factory. A short field note from a real job is the part that fits a one-person practice.

10. **Private equity is a second go-to-market, not a sidebar.** "More than half our business is PE-driven." The PE page sells a different offer than the homepage pods: fixed-fee prototypes in 20 days, a free 45-minute portfolio diagnostic, data foundries, interim CTO/CDO, EBITDA and exit language, firms at "$20 - $500M in revenue." Captured below and labeled not Wil's strategy. The only transferable instinct is "one measured win becomes a repeatable playbook," which for Wil is the next similar shop, not a fund.

## Method and coverage

The site is WordPress (theme `limestone`, Rank Math sitemaps, LiteSpeed). Public REST `content.rendered` is empty for pages, services, case studies, and testimonials, so those bodies were taken from server-rendered HTML. Insight posts with a body were taken from the public HTML. Insight URLs that redirect were followed onto `thefoundation.limestonedigital.com`.

142 text files were saved. Each file starts with the URL. Groups, from `sitemap.md`:

- Marketing pages, three service pages, case studies, four testimonials, the team page (nine team-member URLs 301 to `/team`)
- Blog index plus the insight corpus (playbooks on the site, newsletter issues at the redirect target)
- AI Foundation homepage and the issues linked from it, including October 2026 issues that are not in the WordPress sitemap
- Careers index (two pages) and 20 PeopleForce vacancies at `careers.limestonedigital.com`
- Customer Hub login wall at `csp.limestonedigital.com` (not logged in)
- `robots.txt`, Rank Math sitemaps, `llms.txt`, and the feeds

Not crawled on purpose: HubSpot booking, subscribe, portal login, "ask ChatGPT/Claude/Gemini" outbound links, Fortune and The Neuron, social profiles. `https://limestonedigital.com/case-studies/onerail` returns the freight-audit page (final URL `.../case-studies/freight-audit-pay`). The WordPress sample page and `case-studies-v2-qa` are public and indexed.

`llms.txt` is a model brief that does not match the visible site on several offers. Both versions are reported. They are not merged.

## 1. Product

### What they sell

Homepage H1 pattern: "AI Transformation for" plus a rotator of Healthcare, Insurance, Lending, Compliance, Logistics, FinServ. Subtitle: "AI transformation across product, process, and people: embedded engineers who ship, measure, and train until the capability is yours." Starred line: "*NO MEASURED UPLIFT, NO INVOICE". https://limestonedigital.com/

The approach section:

> Limestone Digital takes your existing product from AI-absent to AI-native.
>
> We run AI transformation as an engineering discipline, built for brownfield: your codebase, your constraints, your compliance. No rewrite pitch, no greenfield fantasy. The product you already run is the one that becomes AI-native.

Three layers, same page:

| Layer | Name | Their one-liner | URL |
| --- | --- | --- | --- |
| 01 Capability | AI Training & Enablement | "Build AI-native capability across engineering, technical leadership, and delivery teams." | https://limestonedigital.com/services/ai-training-enablement |
| 02 Systems | Custom AI Agents | "Develop agentic AI systems for your platform, from data foundation and pilot through to production." | https://limestonedigital.com/services/custom-ai-agents |
| 03 Output | Accelerated AI-Native Delivery | "Ship your product roadmap 3-5x faster with embedded AI-native engineering pods." | https://limestonedigital.com/services/ai-sdlc |

The third URL's title is "AI SDLC as a Service." The nav calls the same URL "Accelerated AI-Native Delivery."

Team page, https://limestonedigital.com/team:

> Limestone Digital is an AI transformation and embedded engineering partner for enterprises and private equity portfolio companies. We build custom AI agents, accelerate software delivery, and train teams to adopt AI.
>
> Our engineers work inside your existing systems, from data preparation and integration through production deployment. We serve businesses in healthcare, insurance, lending, financial services, and logistics. Your team owns the systems we build and develops the capability to run them.

Stats on that page: "200+ Engineers", "10+ Delivery Locations", "100+ Products Delivered", "10+ Years on Market". The ten locations are not listed.

### Packaging, prices, and the guarantee

**Pods.** Custom AI Agents FAQ, https://limestonedigital.com/services/custom-ai-agents:

> A typical AI Velocity Pod is $17K–$20K per month, depending on scope and the support required. Additional pods are priced into the proposal when parallel delivery is needed. The proposal also sets out expected model, infrastructure, and ongoing support costs. Agent builds use the same pod model as our AI SDLC service. The monthly pod price is not a fixed price for the whole project.

The AI SDLC page repeats the $17K–$20K band and adds that scope, capacity, and responsibilities are agreed in a Statement of Work. https://limestonedigital.com/services/ai-sdlc

Visible pod composition on that page:

> A typical starting pod combines one dedicated senior AI engineer with 0.5 FTE of shared advisory, delivery, and specialist support. That support is pooled across the services shown, rather than a separate hire for each.

**Training.** Named package "AI Enablement Foundation": Preparation, Practical sessions, Assessment, Handover. Formats: "2 days" ("A focused, hands-on intensive") or "2 weeks" ("A sprint around existing work"). Budget block: "<$10K / For the foundation engagement, depending on scope." FAQ: "The foundation engagement is typically under $10K, depending on scope." "Production agents or additional engineering work are priced separately." https://limestonedigital.com/services/ai-training-enablement

**Guarantee language, which does not agree with itself.**

- Homepage hero: "*NO MEASURED UPLIFT, NO INVOICE".
- Homepage commercial block: "Month-to-month, no 12-month contracts. If it's not working, you walk. That's the deal, in writing. Predictable monthly cost: OpEx, not a capital project."
- Why Limestone card: "≥15% uplift guaranteed (typical 20 – 40%)".
- Training page: "We assess the agreed uplift at day 60. Success measures and guarantee conditions are agreed in writing before the engagement."
- Homepage FAQ: "Two weeks from signature to first standup."
- `llms.txt`: "ship 20-40% faster in 60 days, guaranteed" and "Guaranteed minimum 15% velocity uplift or you don't pay." https://limestonedigital.com/llms.txt

The pages say the baseline, the measures, and the conditions are "agreed in writing." They do not say whether uplift means cycle time, deployment frequency, dollars, or hours. **INFERENCE:** a buyer cannot tell from the site what would make the invoice void.

DevInt has no price on https://limestonedigital.com/developer-intelligence. No uptime SLA or response-time credit appears on the marketing pages. The homepage section styled as SLA is an industry grid, not a service-level agreement.

### Engagement model and deliverables

Homepage "HOW IT WORKS":

- Diagnose (Weeks 1-2): "A two-week diagnostic sprint. We instrument your delivery with DevInt: cycle time, review load, open PR flow, and AI assist hours. You get a baseline and an architecture decision document."
- Accelerate (Weeks 3-6): "The embedded team ships the first AI increments into production. ... Uplift is measured weekly."
- Scale to AI-Native (Weeks 7+): "Validate uplift with ROI dashboards. Deliver playbooks or scale pods. Governance review ensures delivery maturity and confident growth."

A hero graphic on the same page uses a second stage list. Its accessible name is "The AI transformation roadmap: 00 Adopt, 01 Accelerate, 02 Automate, 03 Scale, 04 AI-Native." The visible line under the hero is "Your partner on every stage." The Diagnose / Accelerate / Scale section above is a different three-step. Both are on https://limestonedigital.com/.

Agents page, how a build is packaged, https://limestonedigital.com/services/custom-ai-agents:

1. "A Vision and Scope document, a Data Map, and acceptance criteria for the proposal."
2. "A working capability and evidence for the rollout decision."
3. "A production workflow, operating guidance, and a plan for ongoing support."

FAQ on the same page:

> For a build or delivery workstream, discovery typically takes one to two weeks, with up to three working sessions and review of relevant material. We send agendas in advance. Your team keeps the Vision and Scope document and Data Map whether or not you proceed. Delivery scope, acceptance criteria, and monthly price are agreed before you commit to the build.

What they say a good first project needs:

> A strong starting point has a workflow owner, usable source information, and a clear definition of a correct result.

Embedded posture, homepage:

> We embed engineers into your existing teams. Not a separate squad, not tickets over a wall. Teammates in your standups, shipping the outcome.
>
> Our engineers join your team the way an in-house hire would, minus the 6-month search. They work inside your repositories, follow your conventions, and answer in your Slack. The market calls them forward-deployed engineers. Our clients call them teammates. AI-native from day one: 98% of the code we ship isn't handwritten, and all of it is reviewed, tested, and owned by you.

The "98%" sentence is repeated in the founder closer and in playbooks. No window, no method, and no source is attached.

### Named frameworks and offers

Visible on the marketing site:

- **Velocity Framework™.** Homepage card: "Measurement + process + AI for compounding gains." The freight case study says "The Velocity Framework: six steps, every feature, every time" and does not list six steps. https://limestonedigital.com/case-studies/freight-audit-pay
- **AI Velocity Pod™.** The priced monthly unit above.
- **AI Enablement Foundation.** The training SKU.
- **DevInt / Developer Intelligence.** https://limestonedigital.com/developer-intelligence. Meta: "Dev Intelligence ties GitHub, Jira and AI tools like Cursor into one weekly read: cycle time, review load and AI spend per engineer. Read-only access." H1: "Dev Intelligence, resolved to real people." Banner sense from the page: it runs inside engagements and is also offered standalone. CTA on the product is "Book a Demo," still the same HubSpot URL.
- **Layer 0.** Newsletter, not a homepage SKU. See content strategy.
- **Limestone Protocol, three pillars, PROOF, Four-Customer Framework, question-first integration, Architecture AI & Flow.** These live in 2025 essays. The Protocol post calls David Antoline "CEO at Limestone Digital." `llms.txt` and the team page call Mark Ajzenstadt founder and CEO. Both wordings are on the site. https://limestonedigital.com/blog/the-limestone-protocol

In `llms.txt` and not matched by the visible pod diagram:

- "AI Velocity Pod: Two-person strike unit (Senior Engineer + AI Delivery Architect)."
- "AI Productivity Accelerator" at "20-40% in 60 days, verified by DORA-style metrics."
- "Legacy Vendor Rescue: Replace underperforming vendors without a rewrite. Reproducible build in 5 days, release plan in 10, first increment shipped in 30."
- "IT Staff Augmentation: Senior developers who integrate with your team in week one."
- "Limestone Digital is a Velocity Partner, not a body shop or consultancy."

**INFERENCE:** `llms.txt` is an older or parallel packaging sheet aimed at models. The pages a human reads sell three layers, a 1-senior-plus-0.5 pod, and a training foundation. Quoting the llms file as the current offer would misstate the site.

`/devint` is a thinner, still-indexable duplicate of Developer Intelligence (canonical is itself, not `/developer-intelligence`). `/sample-page` is the default WordPress sample. `/case-studies-v2-qa` is an empty "Case Studies V2 QA" page in the sitemap.

### How they describe AI and automation

Problem section, https://limestonedigital.com/:

> You've got AI. You don't have value.
>
> You bought AI tools. Your team has Copilot licenses. A handful of enthusiasts got faster. The rest kept working the old way. Deployment frequency stayed flat. 80% of AI initiatives never deliver measurable business value.

The 80% line has no citation on the homepage. It is repeated in playbooks, still without a linked study.

> The problem isn't your team. It's the invisible friction between your team and production.

Agents FAQ definition, https://limestonedigital.com/services/custom-ai-agents:

> Software built to carry out tasks using your business data and tools. An agent can follow a defined workflow, take permitted actions, and hand exceptions to a person.

AI SDLC is defined on its page as a lifecycle that uses AI in planning, implementation, testing, and review, with engineers still responsible for requirements, architecture, code quality, and approval.

Newsletter, https://limestonedigital.com/blog/no-process-no-agent (final URL https://thefoundation.limestonedigital.com/p/no-process-no-agent):

> I'd put model selection at maybe 5% of whether an AI project survives. The other 95% is whether the company has a process worth automating.
>
> No document, no automation.
>
> Agentic AI in a company is RPA with reasoning and unstructured input.
>
> Layer 0: Process documentation.
>
> Every engagement we run starts at Layer 0. The team specifies every workflow before writing a line of implementation code.

The same issue's P.S. sells a scarce diagnostic: "Five slots left this month." That is a sales line inside a newsletter, not a count verified anywhere else.

Founder closer, Mark Ajzenstadt, homepage:

> Intelligence is getting cheap. Shipping it isn't.
>
> Cheap intelligence doesn’t merge itself into a nine-year-old codebase, pass a compliance review, or survive contact with production. The gap between what AI can write and what your company actually ships is where transformations go to die.

Borys Gurtovyi's team bio line, the sharpest product sentence on the team page: "the model is the commodity, the context is the moat." https://limestonedigital.com/team

### Tech stack and partners

They name the client's stack more than their own. Case studies cite .NET, React, Python, FastAPI, PostgreSQL, Azure, Kubernetes, Chrome extensions, Cursor, Claude Opus, ClickUp, CodeRabbit. DevInt reads GitHub, Bitbucket, Jira, ClickUp, Cursor, Anthropic, OpenAI, and offers an MCP server "into your Claude config." Homepage JSON-LD `knowsAbout` includes RAG, multi-agent orchestration, MLOps, DORA, React, Node, Python, .NET, TypeScript, AWS, Azure, GCP.

Legal entity on the privacy policy: Limestone Digital s.r.o., Pernerova 697/35, Prague. The contact page also lists Limestone Digital LLC, 254 Chapman Rd, Ste 208, Newark, Delaware 19702. Organization JSON-LD `foundingDate` is `2017-10-25`, founder Mark Ajzenstadt. Careers copy says "est. 2016" and "Since 2016." Marketing copy says "ten years" and "a decade." All of those strings are on the properties crawled. This report does not pick one.

Delivery geography from job posts, not from the homepage "Top 1% nearshore" line: Central Europe, Prague, Poland or Czechia, Brazil, South America, a UK contractor for business development, "R&D facilities located in Eastern Europe" on the recruiter listing. The business-development vacancy says "174 consultants globally" and "companies with 0-20 engineers." https://careers.limestonedigital.com/v/179859-business-development-manager

Security copy that is specific, homepage:

> Work happens in your repos, your cloud, your identity provider. Least-privilege access by default, revocable any day.
>
> Everything we build is assigned to you. NDAs standard. No surprise licensing, no vendor hostage math.
>
> Client code isn't used to train models.

Privacy policy: "Information security at Limestone is governed by an Information Security Management System certified to ISO/IEC 27001:2022." The homepage compliance card lists "SOC 2, GDPR, HIPAA" as governance "built into every engagement." The pages crawled do not show the phrase "SOC 2 certified" or a report. Badge alts include "GDPR Compliant" and "HIPAA Compliant." https://limestonedigital.com/privacy-policy

### Ideal customer and industries

Who the site addresses:

- Header and footer "WHO ARE YOU?" chips: CTO, VP Engineering, Private Equity, Founder.
- Assessment role list adds COO, CFO, engineering manager, individual contributor, and "PE firm (operating partner, value creation)."
- FAQ: "That's where we go deepest: PE portfolio companies and products where compliance gates every release. ... the client list runs wider: logistics, industrial software, fintech, consumer platforms, physical security."
- Industry grid: Healthcare, Insurance, Mortgage & Lending, Compliance, Logistics, Legal & Professional Services, Financial Services, Enterprise SaaS. Every "Learn more" on that grid goes to the case-study index, not an industry page.
- Size signals that are explicit: a "40-person organization" in one training story, a "580-person engineering org" in a DevInt quote, "~24 people" at Ingenetix, and the PE band "$20 - $500M." No page states a 50–200 employee ICP.

**INFERENCE:** the economic buyer is someone who already owns a software roadmap (a CTO, a VP of engineering, or an operating partner who can place a pod inside a portfolio company). Operators of physical local businesses are outside the copy.

### Objection handling

Homepage FAQ answers, in the order they chose to handle them: what "enterprise AI transformation" means, dev shop versus partner, consultants versus engineers, a 10-year-old codebase, Copilot already purchased, trusting AI-written code, governance, "only PE and regulated?", speed, and cost.

The dev-shop answer:

> Dev shops close tickets. We own outcomes: every pod is measured against your own delivery baseline on our Dev Intelligence Platform dashboards, and the engagement is month-to-month. No measured uplift, no invoice.

The speed answer:

> Two weeks from signature to first standup. We capture your delivery baseline first, so uplift is measured against your own numbers, not industry averages.

The SDLC page's start FAQ is slower: three to six weeks from first conversation through discovery, agreement, and start, with much of that time on client review and procurement. Both sentences are on the site.

Service FAQs add: what a good first project is, scattered data, wrong answers, mutual NDA, who maintains it, time required from the client team, whether they must change tools, and what the team keeps if they stop.

### Proof and how a case study is built

Homepage "PROOF" block, "Real teams. Real uplift. Documented results.":

- LEAD TIME 42% (down), FASTER TIME-TO-MARKET 21% (up), CHANGE-FAIL RATE 29% (down). These three tiles are not attached to a named client in the text.
- "Logistics platform / 42% faster delivery in 2 months → $160k annualized value."
- "Fintech SaaS / 85% incident rate reduction in 3 months."
- "Industrial software / +35% faster cycles and 40% higher sprint predictability."

`llms.txt` retells the 85% line as "a martech platform," not "Fintech SaaS," and drops the $160k. The logo classes on the homepage point at OneRail, Brown Boots, and Johnson Controls. **INFERENCE:** those classes are the intended clients. The visible sentences do not name them, and the llms file disagrees with the homepage on the industry of the 85% story. Do not merge them.

Clutch is the volume proof: hero badge alt "Reviewed on Clutch — 56 reviews," body "4.91/5.0 on Clutch · 180+ Engineers," team page "200+ Engineers," careers "174 consultants globally," footer "170+ teams over the last decade." Four different headcount phrases.

Case-study pattern on the newer pages: badges, a facts row (industry, platform, scope, team, dates), challenge cards, solution cards, sometimes an architecture diagram, a timeline, an impact checklist, sometimes three stat tiles, then the same footer CTA. Older pages (ColiMinder, Rival Games) are a short overview, a feature list, and a qualitative ending.

| Study | Named? | What the page leads with | Outcome number on the page? |
| --- | --- | --- | --- |
| Voice agent RCM, https://limestonedigital.com/case-studies/voice-agent-rcm | No. "a US healthtech company" | "61,246 Patient Calls" and "420+ hours ... at $0.071 per connected call" | Yes. Also "Around 97% of patient conversations complete without human involvement" and "18,194 balances reached zero; 73% of resolved balances closed within 14 days." The page adds: "Zero-balance outcomes include insurance re-adjudication and other adjustments, as well as patient payments." |
| Freight audit, https://limestonedigital.com/case-studies/freight-audit-pay (also the OneRail URL) | No. "A U.S. delivery orchestration platform." Quotes marked "Anonymized" | "Legacy to Production in 6 Months" | Delivery activity: "122 pull requests merged in the first 90 days," "90% code generated with AI, reviewed by humans," "50% FASTER," "AI cost: $200/month." No invoice volume or dollars collected. |
| Ingenetix, https://limestonedigital.com/case-studies/ingenetix | Yes, Ingenetix GmbH, "~24 people" | H1 "IVDR Sample Processing: 12% Faster in 6 Months" | "Processing time reduced 12%." "Daily lab procedure throughput increased 3% with existing staff, no additional headcount." "Limestone embedded a 7-person team." |
| Prior auth, https://limestonedigital.com/case-studies/prior-auth-automation | No. "a PE-backed healthcare platform" | "POC to Production" | No operating KPI in the hero. Fixed-price managed delivery is stated with no dollar amount. |
| Fox Funding, https://limestonedigital.com/case-studies/fox-funding | Yes | Manual ACH, underwriting, and syndication replaced inside a live stack | Counters are project counts and "0" disruption, not dollars moved. |
| Brown Boots, https://limestonedigital.com/case-studies/brown-boots | Yes | "zero in-house engineering to owning a multi-tenant adtech platform" | The quantified story is release and QA activity (the page's own release counts), plus the client's background "10k+ campaigns" and "$200M+ in managed budget," which is the agency, not a Limestone fee. |
| mBanc, https://limestonedigital.com/case-studies/mbanc | Yes. "US non-QM mortgage lender" | "7-developer Limestone team, in a one-year engagement" | No application counts. The claim is that a failed vendor was replaced. No AI language. |
| Sentinel, https://limestonedigital.com/case-studies/sentinel-systems | Yes | "Partners with Sentinel Systems since 2022" | No percentage. Quote from Dee Jay Skinner, CTO: "Our support hours have gone down drastically, and we can deliver new features to customers much faster." |
| ColiMinder, Rival Games | Product or company name | 7 months and 8 months to a platform | No before/after operating metric. |

Testimonials with video pages and no matching case study: Prodege (Shane O'Neill, CTO), Lab Coat Marketing (Joe Evans and Chris Carroll, founders), Johnson Controls (Paul Valentine, "Manager of CSD"). Sentinel has both. Quotes are about ownership and relief ("almost zero involvement from me," "an essential part of our development team"), not about a measured dollar result. https://limestonedigital.com/testimonials/prodege and the sibling URLs.

**INFERENCE:** the index is ordered to lead with AI-agent and AI-engineering proof, including work the client would not name. The pages that would reassure an owner (a dollar found, a job removed, a person still on the exception) are the voice study's caveat and the Ingenetix 12% / 3%. The rest prove that a pod stayed and shipped.

Footer on these pages, verbatim shape: "Your AI roadmap is 6 months behind. Your board knows it." Then "170+ teams," "Embedded engineers, not consultants," "Month-to-month, not 12-month contracts," "No measured uplift, no invoice."

## 2. Sales and marketing

### Positioning hierarchy

1. Category line: "Enterprise AI Transformation."
2. Outcome: from AI-absent to AI-native, on the product you already run.
3. Enemy: tool seats, more headcount, vendors who close tickets, and "the invisible friction between your team and production."
4. Mechanism: embedded engineers, three layers, a weekly measure.
5. Commercial: month-to-month pod, "no measured uplift, no invoice."
6. Proof: three homepage percentages, Clutch, a handful of logos, then case studies.
7. Risk reversal: "If it's not working, you walk. That's the deal, in writing."
8. Who it's for, said late: regulated industries and, "where we go deepest," PE portfolio companies.

Lines worth keeping in a swipe file, each from https://limestonedigital.com/ unless noted:

- "You've got AI. You don't have value."
- "Your standup. Your codebase. Your process."
- "YOUR DASHBOARDS. NOT OUR SLIDES."
- "The engineering team CTOs bring to their next company."
- "Built to pass your security review."
- "Intelligence is getting cheap. Shipping it isn't."
- "Custom AI agents that take work off your hands." https://limestonedigital.com/services/custom-ai-agents
- "AI enablement your team can own and extend." https://limestonedigital.com/services/ai-training-enablement
- "Prefer to write first? Send us a message." Same training page.
- "We'll tell you honestly if we can help." https://limestonedigital.com/contact
- "A sentence or two is enough. We'll take it from there." Contact form placeholder region.
- "Engineers, not consultants." Assessment popup eyebrow on the contact page.

Voice: short declaratives, second person, a board in the room even when the reader is a CTO. The failed alternative is named, then their opposite. Team-page values (radical transparency, idea meritocracy, problem ownership) are softer than the homepage and read like an about page, not the pitch.

### Funnel and CTAs

Primary action everywhere: "Book a call" or "Book a discovery call" opens `https://meetings-na2.hubspot.com/mark-ajzenstadt` (Mark Ajzenstadt). The contact page says "Skip the form. 15 or 30 minutes, your pick. Straight to specifics, no prep needed." and "Opens the HubSpot calendar."

Paths a visitor is offered:

1. Calendar immediately, from the header, hero, and footer.
2. Short contact form. Button "SEND AND GET A REPLY." Under it: "We reply within one business day. No automated sequence."
3. On `/contact` only, a popup titled "Ready to move? Let's scope the work." with "Find out what it would take to solve your problem, and what it could cost." Steps they publish: "Tell us what needs fixing." / "Book a free assessment." / "Discuss approach, cost and timing." Note: "About 2 minutes · No commitment." After submit, the page says the brief is in and offers "Choose a time" with Mark, Founder. The popup is delayed (`delayMs` 30000 in the theme script). It was in the contact HTML, not in the homepage HTML fetched the same day.
4. Footer email form: "Subscribe to AI Foundation to receive weekly practical tips on AI engineering, workflows, & AI transformation."
5. "Ask AI for a summary" chips that open ChatGPT, Claude, Perplexity, Grok, and Gemini with a role prompt. `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended, with the comment "AI crawlers — explicitly allowed (GEO / AI discoverability)."

There is no `/thank-you` in the page sitemap. The contact form posts back to `/contact`.

Header "Customer Hub" goes to `/case-studies`. Footer "Customer Hub" goes to `https://csp.limestonedigital.com/`, which is a login wall: "Welcome Back / Sign in to your account" and "Use your corporate email address." No public description of what is behind the login.

**INFERENCE:** the motion they designed is a low-friction calendar on the founder's link, with a heavier qualifier available for people who will fill it in. There is no published SDR, no second seller on the booking screen, and no content download between the article and the call. The careers business-development listing says the seller's path is "discovery → proposal → close → handoff to delivery" in HubSpot, working with "the CEO and technical presales team." That is internal process copy, not a page the buyer sees.

### Contact form and the assessment

Short form fields, https://limestonedigital.com/contact: first name, last name, work email, optional phone, required "WHAT DO YOU NEED?", optional "TELL US MORE." Need options:

- Automate manual work with agents
- Get an AI pilot into production
- Build an AI feature or product
- Ship software faster (AI SDLC)
- Get our teams using AI properly
- Other (Find the right place to start)

Assessment (same page, not submitted), the qualifying steps after "what do you want to make happen?":

- Problem description, minimum 20 characters. Placeholder example is an operations team re-entering claims. Note: "Please leave out confidential data."
- Role, including "PE firm (operating partner, value creation)."
- Industry, including "Private equity & VC."
- "If you represent a portfolio, answer for the company this project is for."
- Annual revenue from "Under $5M" through "$500M+", plus pre-revenue and prefer not to say.
- Employees from "1-5" through "1000+." The bands include both "5-25" and "25-50" and "50-100," so 50 and 100 sit on the boundaries.
- Stage: exploring, defined problem, pilot running, or improve a live system.
- Start: now, 1–3 months, 3–6 months, or no deadline.
- Investment: Under $25K, $25K–$75K, $75K–$150K, $150K+, or "We need your guidance."

Success does not download anything. It books Mark.

### Lead magnets

No ebook, whitepaper, webinar, or PDF gate was found. The substitutes are the free assessment (a meeting, not a file), the AI Foundation email, and the "ask an AI to summarize us" links.

### Trust placement

Order on the homepage: hero guarantee, three layers, problem, embedded promise, three-step roadmap, DevInt mock numbers (36.7h, 14.2h, 312h, $1.4k, presented as a product view, not as a named client), proof tiles, PE block, industry grid, three testimonials, why-us with Clutch, security and IP, founder quote, AI-summary chips, footer CTA.

**INFERENCE:** the guarantee and the category are doing the work before any logo. Logos and quotes arrive after the offer is explained. That is a confidence move available to a firm with a bench. A one-person firm that copies the order and has one story will look like it is hiding the story.

### Content strategy

Two products share the `insight` post type.

**Playbooks** on https://limestonedigital.com/blog. H1 "Blog." Deck: "Playbooks and field notes from AI transformation work: what works in production, what dies in pilots, and the numbers in between." The index fetched shows one category, Playbook, reverse chronological, about 7–10 minutes. From August through 29 September 2026 the titles are a query list: DORA, forward-deployed engineers, technical debt, DevOps maturity, engineering KPIs, insurance agents, a transformation roadmap, agentic workflows, spec-driven development, AI-native vs AI-enabled, healthcare intake to billing, technical due diligence, cycle time vs velocity, agentic AI, RAG, and "Top 10 Enterprise AI Transformation Companies." The top-10 post places Limestone in the list and states "starting from $17K per month per AI velocity pod." https://limestonedigital.com/blog/top-10-enterprise-ai-transformation-companies

Those 2026 playbooks point at the same HubSpot link as the rest of the site. The footer repeats "Book a discovery call" on every page, and the articles themselves close on that action. The 2025 essays (Limestone Protocol, three pillars, PROOF, question-first, four customers) argue a framework and cross-link each other. They cite interview subjects. They do not link out to the studies behind lines such as "60-70% of all digital transformation projects have failed."

**Newsletter.** https://thefoundation.limestonedigital.com/ : "The #1 newsletter for practical tips on AI engineering, AI governance, & AI transformation." "Published Tuesdays." "Join 3000+ PE Partners & Enterprise Leaders." WordPress holds 62 insight records. The ones with empty bodies 301 to Beehiiv. The public blog does not list those issues. The main site RSS feed has a channel and no items. `/blog/feed/` does list posts.

Cadence of the WordPress dates: paired essay-plus-stub every two weeks from 22 July 2025 through 25 November 2025, a weekly opinion letter through mid-2026 with a gap in July, then a playbook roughly every five days in August and September 2026. October 2026 issues exist on Beehiiv ("FDE washing," "data foundation is king," "escape the pilot purgatory") and are not in the WordPress sitemap.

**INFERENCE:** the playbooks capture a CTO who searches "what is RAG" or "technical due diligence checklist" and hand that person to Mark's calendar. The Tuesday letter keeps a PE and enterprise audience warm and occasionally offers a scarce diagnostic. Neither lane is written for a dealer principal.

### Follow-up hints

- "We reply within one business day. No automated sequence."
- Assessment success names Mark Ajzenstadt and asks the visitor to pick a time.
- Privacy policy: enquiry data kept "no longer than 12 months after our last contact," newsletter until opt-out. Controller email `privacy@limestonedigital.com`. Contact email `contact@limestonedigital.com`.
- No public "what happens after the call" page. The service pages are the process (discovery, proposal, pod, month-to-month).

### Stack signals a buyer can see, and one they cannot

Visible: HubSpot meetings, a first-party WordPress form (not Gravity Forms or Typeform), Beehiiv implied by the newsletter host, PeopleForce for careers, Clutch badges, ISO 27001 named in the privacy policy.

In the public GTM container `GTM-TBX929CQ`: GA4 `G-WD71LYYC60`, a `generate_lead` event the assessment popup pushes, CookieYes, Amplitude with session replay, HubSpot portal `242216805`, and an RB2B loader. **INFERENCE:** RB2B is visitor identification. This teardown does not describe how to deploy it. It is listed so the funnel is complete, and it is called out under what not to copy.

The container file does not contain LinkedIn, Clearbit, Mutiny, Warmly, Chili Piper, or Calendly. It does contain the string `facebook.com/tr`. That string sits inside the container's large shared library, and this pass did not separate it from a Meta pixel Limestone configured.

## Private equity

**Noted for reference, NOT our strategy for now.**

This is a full second offer. It should not be folded into Wil Sensing's homepage, his industries, or his discovery script.

Homepage teaser, https://limestonedigital.com/ :

> Portfolio adoption, not portfolio pilots.
>
> More than half our business is PE-driven. Enablement is how a sponsor turns one portco win into a playbook that travels across the fund.

Cards under that: "One policy, one toolkit, measured weekly." "Value creation projects, not science projects." "Workshops for operating partners." "Where AI pays on this P&L, in this hold period." CTA "See the private equity playbook" goes to `/private-equity`.

Dedicated page, https://limestonedigital.com/private-equity. Meta: "Engineering value creation for PE portfolio companies: board-grade reporting, Data Foundry dashboards, prototypes in 20 days. Free 45-minute diagnostic."

H1: "Drive Portfolio Growth with Confidence." "Execution certainty, board-level visibility, and technical integration. Built for private equity-backed businesses." CTA "BOOK A DIAGNOSTIC CALL" uses the same HubSpot URL as the rest of the site, not a separate PE calendar.

Problems they list: operating visibility gaps post-acquisition, portfolio companies lacking GTM and technical depth, failed transformations, fragmented reporting to boards, overstretched internal teams, "Inability to access system complexity during diligence," "Lack of standardization across platforms in roll-up strategies."

> We've lived these gaps inside portfolio boards. We built Limestone to solve them.

Role they claim: post-acquisition technical clarity, centralized "data foundries," new digital products, executive visibility, "interim CTO/CDO roles," and the ability "to audit, challenge, and guide their portfolio leadership."

Differentiation block: "We understand how PE makes money - and we build accordingly."

- "Every engagement mapped to EBITDA, multiple expansion, or readiness for exit"
- "Fixed-scope, fixed-fee engagements with deployable prototypes in 20 days"
- "Real-time reporting dashboards, aligned with investor KPIs"
- "portfolio-wide data normalization"
- "We've worked directly with board members, operating partners, and C-suite leadership across PE-backed firms"

The only practice example is anonymous and has no dollar outcome: "3 disconnected legacy systems," "30-day Data Foundry sprint" to a Looker dashboard, "Weekly revenue insights auto-synced to PE board format."

ICP on this page: "Lower-mid to mid-market firms," "$20 - $500M in revenue," "Buy-and-built platforms" (printed that way), "Functional & operational partners." "Free 45-minute portfolio diagnostic." Closer: "Brought in by the sponsor. Still there after the exit." "A decade inside PE portfolios, more than half our business from the PE motion. Operating partners place us once, then carry us across the fund."

Schema service type on that page: "Technical due diligence, data foundry & execution for PE-backed companies." Audience: "Private equity firms and portfolio company leadership."

Paul Bracht, team page, is the only bio written as the PE interface:

> ...an AI-native engineering firm that embeds delivery pods inside PE-backed software companies after close. ... before any work starts he sets out who is accountable for what and how the CFO and CISO will measure the result.

Due-diligence playbook, https://limestonedigital.com/blog/technical-due-diligence-a-checklist-for-software-deals:

> More than half of our business comes from private equity, and we work with sponsors and portfolio companies both before and after the deal.

The same article says findings "tell operating partners what to fix in the first 100 days after close" and that after close the same people can join the company and "deliver the value creation plan."

Other PE-colored proof, still reference only:

- Training page eyebrows "PE-BACKED FINTECH" and "PE-BACKED SOFTWARE COMPANY," including "Three AI champions identified in a 40-person organization" and reporting that took five days becoming "Same day."
- Prior-auth case study: "a PE-backed healthcare platform." No fund name, no portco name.
- Question-first and four-customer essays quote Jeff Spence, described as a private-equity investor, with an unnamed Scandinavian logistics example (the posts say both "20x" in a title and "18-22x" / "€8M" / "€150 to €175 million" in the body). He is not on the team page. Those figures are his example as published, not the 3-system sprint on the PE page, and they are not combined here.
- Assessment industry "Private equity & VC" and the portfolio note on headcount.
- Careers: the project manager listing mentions PE-backed companies. Several AI roles list private equity as a nice-to-have background.
- Newsletter homepage: "Join 3000+ PE Partners & Enterprise Leaders."

**INFERENCE:** the homepage PE block is an adoption playbook across a fund. The dedicated page is post-close execution, data foundries, and a diligence adjacency. They share a calendar and the "more than half" claim. They do not share one scope of work with the $17K–$20K pod page. A reader who needs a price can find three commercial shapes: monthly pod, sub-$10K training, and fixed-fee 20-day prototype.

## What Wil Sensing should steal or adapt

Ranked. Each item maps to the offer he already has: fit call, credited Job map, build, autonomy ladder.

1. **Put their agent definition under his headline.** "An agent can follow a defined workflow, take permitted actions, and hand exceptions to a person." (https://limestonedigital.com/services/custom-ai-agents). That is "Hand off the busywork. Keep the decisions." made operational. On his page, the ladder is the definition: a person still does the job, then a tool drafts it, then a governed workflow runs it, then an agent runs it and a person takes the exceptions. Their H1 "take work off your hands" is the same instinct. His line is better for an owner, because it says what the owner keeps.

2. **Make the Job map the artifact they keep, and say so in one sentence.** Their discovery line is "Your team keeps the Vision and Scope document and Data Map whether or not you proceed." His difference is that the map is paid and credited toward the build. Spell the contents the way they spell theirs: the job, the current steps, the exceptions, the source of truth (PO lines, vendor credits, the DMS screen), and the number that will decide if the build worked. A strong first job, in their words, "has a workflow owner, usable source information, and a clear definition of a correct result." The repair-shop match of 11,139 PO lines already has all three. **INFERENCE:** the next Job map should be chosen the same way, not by how exciting the model is.

3. **Agree the measure in the Job map, before the build. Do not print their guarantee.** "No measured uplift, no invoice" is their spine, and the site never says what uplift is. Wil can be more concrete because his proof is already a count and a dollar figure: credits found, lines matched, hours the person no longer spends, exception rate the person still handles. Write that definition into the map. If he later wants a promise, the promise has to name that unit. Copying "≥15% (typical 20–40%)" would import a contradiction he does not need.

4. **Write the shop story in the voice-agent shape.** Lead with the job and the number. Then the unit. Then the caveat. Their voice page leads with 61,246 calls and $0.071, states about 97% without a person, and then says zero-balance "include[s] insurance re-adjudication and other adjustments, as well as patient payments." Wil's paragraph should say what "missed vendor credits" includes and what it does not, and that a person still owns the exceptions. One story written that way beats a grid of unnamed percentages. Homepage tiles of 42% and 85% with no client name are the pattern to avoid.

5. **Use their Copilot objection, translated into a shop.** "You bought AI tools. Your team has Copilot licenses. A handful of enthusiasts got faster. The rest kept working the old way." For his buyers: you bought seats. The parts counter, the warranty clerk, or the service advisor still retypes the same job. "Tools lift individuals" is the idea. He should not say Copilot, deployment frequency, or DORA unless the buyer already speaks that way. **INFERENCE:** almost none of them do.

6. **Keep a short form and a 30-minute call. Steal their need-list, not their 7-step wizard.** The useful "WHAT DO YOU NEED?" options collapse, for him, to something like: take a recurring job off the team, finish something a tool pilot started, or "I'm not sure where to start." Optional note, work email, and the fit call. Their assessment's "We need your guidance" on budget is the right answer choice while his price is undecided. Their revenue bands to $500M+ and the PE role are a different company.

7. **Name the next step so the ladder is visible.** They named AI Enablement Foundation (2 days or 2 weeks, production quoted separately) and the pod (monthly, extra for models and infrastructure). He already has names for step one and step two (fit call, Job map). Name the build as one job, and name the ongoing work as the next rung, stoppable. Their month-to-month line ("If it's not working, you walk") is the right posture for an owner who hates a 12-month contract. The rung, not a headcount pod, is what they are walking away from.

8. **Say where the work happens, in owner language.** Their security block is specific: your environment, IP assigned, a human owns the merge, client data is not used to train models. His version: we work in the system you already run (the DMS, QuickBooks, the vendor portal), you own the workflow, a person still approves the exception, we do not paste your customer file into a public model. "The product you already run is the one that becomes AI-native" becomes "the system you already run." No rewrite pitch is the part worth keeping. "3-5x faster" is not.

9. **Publish one field note, tied to a job, on a cadence he can keep.** The essay to study is "No document, no automation" and Layer 0, not "What is RAG." A Tuesday-length note from a real shop (what the job was, what was written down, what the person still does) matches the newsletter's job and not its audience. Their playbook machine, a 7–10 minute SEO article every few days ranking themselves next to McKinsey, is a staffed content operation. **INFERENCE:** one note a month from a job he has actually done will outperform a query factory he cannot sustain, for the buyers who already know him.

10. **Put the number where they put the guarantee: the first screen.** They are willing to open with a commercial sentence before the logos. He can open with the headline and the shop result ($217K, 11,139 lines) before any explanation of agents. Their mistake is opening with a percentage they do not define. His number is already defined.

11. **One measured win, then the same job at the next similar company.** The PE line "one portco win into a playbook that travels across the fund" is reference-only as a fund motion. The shape, stripped of sponsors, is how a one-person practice grows: the vendor-credit match becomes the offer for the next repair shop or dealer, with the Job map as the step that checks the data exists. That is an adaptation of a sentence, not an entry into private equity.

12. **Let the fit call be low-prep, and put the detail in the paid map.** Their contact page says "no prep needed" and their popup asks for revenue, headcount, and a budget band. The coherent version for him is theirs only halfway: the 30 minutes can start from a sentence about the job. The Job map is where source files and exceptions show up. "Please leave out confidential data" is a good line on a public form.

## What not to copy, and why

- **The private-equity go-to-market.** Portfolio, hold period, EBITDA, exit multiple, data foundry, interim CTO, 45-minute portfolio diagnostic, "$20 - $500M." It is a different buyer and a different sale. Labeled above so it stays out of his strategy.
- **The $17K–$20K pod and the sub-$10K training price as if they were his.** Those prices buy a senior engineer plus fractional support, or a cohort inside a software company. Publishing them would either scare a 50-person dealer or anchor him to a delivery model he does not staff. His price is still open. If he publishes a range later, it should be his range for a Job map and a build, not a translation of a pod.
- **The uplift guarantee as printed.** 15%, "typical 20–40%," day 60, "20-40% faster in 60 days," and an undefined "uplift" cannot all be the offer. A guarantee he cannot score will become the first objection.
- **Headcount and Clutch as the trust stack.** "180+ Engineers," "200+ Engineers," "174 consultants," "170+ teams," "Top 1% nearshore," "56 reviews." He is one person. Borrowing the shape of a bench (pods, delivery locations, "the engineering team CTOs bring to their next company") makes the shop story look smaller instead of more specific.
- **DevInt, DORA, cycle time, and "98% of the code we ship isn't handwritten."** That is an engineering-org identity. His buyers do not run a software factory. The transferable piece is "measured weekly against a baseline you agreed," applied to a job, not to pull requests.
- **The SEO query factory and the top-10 listicle.** "What is RAG," "Top 10 Enterprise AI Transformation Companies," insurance underwriting, healthcare prior auth. A dealer principal does not search those. The top-10 post also puts the author in a list with McKinsey and BCG. That comparison fights a local practice.
- **The 7-step assessment and the 30-second popup.** Revenue to $500M, investment bands that start at under $25K and run past $150K, and a PE role. Too much for a fit call, and the bands describe their sales qualification, not his.
- **Visitor de-anonymization (RB2B in the tag manager).** It is part of their funnel instrumentation. It is a poor fit for a local consultant who will be in the same room as the buyer, and this report does not explain how to run it.
- **Anonymized case studies whose headline is a PR count.** "122 pull requests" and "90% code generated with AI" persuade a CTO. An owner wants dollars, hours, and what the person still checks. Ingenetix and the voice study are the exceptions, and even those are healthcare and lab operations, not a trade.
- **Contradictory public facts.** Founded 2016 versus 2017 versus "a decade." Fintech SaaS versus martech for the same 85% anecdote. Two-person strike unit in `llms.txt` versus one senior plus 0.5 FTE on the service page. Sentinel "46 years" on the case study versus "35 years" on the testimonial. Header Customer Hub to case studies, footer Customer Hub to a login wall. A public sample page and a public QA page. Copying their confidence is useful. Copying their loose numbers is how a small firm gets caught.
- **Industry cards that all link to the same case-study index.** It looks like coverage. It is one library. He should name the trades he has actually worked, not a grid of industries he hopes to enter.
- **"Your AI roadmap is 6 months behind. Your board knows it."** There is often no board. The owner is the board. A line that puts a board in the room will sound imported.

## Open questions

- What is the unit Wil will agree in the Job map: dollars recovered, hours removed, exception rate, or all three? Their site shows that leaving this blank makes the guarantee unreadable. His shop story can answer it. The site does not.
- Does the credited Job map need a published price to filter, or does naming the credit ("this fee comes off the build") do that work without a number? Their training price is public and their DevInt price is not. Both choices are on the site. Which one fits a local owner is still his call.
- Will the repair shop let him name it? Their strongest recent AI case is anonymous. His proof gets weaker if it has to become "a local shop." That is a permission question, not a copy question.
- Where on the ladder does he stop out loud? The voice study's "around 97%" still "pause[s] outreach and route[s] to staff." Saying "a person keeps the exceptions" on the homepage will matter more to an owner than any autonomy percentage. How far he claims an agent should go in a dealership is not answered by this site, because the site never mentions one.
- Which second job, after vendor credits, is the next Job map: warranty, parts returns, service scheduling, or something else he has already seen? Their "good first project" test (owner, source data, definition of correct) is the filter. The site has no dealer examples to steal.
- Geography. They do not build local landing pages. **INFERENCE:** Boise, Nampa, Idaho, and eastern Washington belong on his pages because his buyers search and refer that way. Nothing in this crawl teaches local SEO. It only shows that a national engineering firm does not bother.
- Voice. Their sharpness ("You've got AI. You don't have value.") works on a CTO who has already bought seats. The same tone on a trade owner can sound like a scold. Which of his lines stay plain ("Hand off the busywork") and which stay off the site is a writing decision this teardown cannot make for him.
- Ongoing work. Their ongoing unit is a monthly pod. His is a rung at a time. Is the retainer per job, or one monthly review across several jobs in the same company? The site does not have a one-person version of "scale pods."
- The assessment's "Please leave out confidential data" versus his need to see PO lines. The public form should stay light. The question is only when the files move: after the fit call, under whatever terms he uses for the Job map. Their privacy policy is a Czech controller with a Delaware LLC also listed. He needs his own, not theirs.

## Contradictions worth remembering so they are not repeated

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Pod shape | Service page: one dedicated senior AI engineer plus 0.5 FTE shared support | `llms.txt`: "Two-person strike unit (Senior Engineer + AI Delivery Architect)" |
| Uplift | Homepage card: "≥15% uplift guaranteed (typical 20 – 40%)" | `llms.txt`: "20-40% faster in 60 days, guaranteed" and also "minimum 15%." Training page assesses "at day 60." Unit unnamed on all of them. |
| Start time | Homepage FAQ: "Two weeks from signature to first standup." | AI SDLC FAQ: three to six weeks from first conversation to start. |
| 85% anecdote | Homepage: "Fintech SaaS / 85% incident rate reduction in 3 months." | `llms.txt`: "85% incident reduction for a martech platform in 3 months." |
| Headcount | Homepage "180+ Engineers"; team page "200+"; footer "170+ teams"; careers "174 consultants globally" | Not reconciled on the site. |
| Founding | JSON-LD and `llms.txt`: 2017 | Careers: "est. 2016" / "Since 2016." Marketing: "ten years," "a decade," "10+ Years on Market." |
| OneRail | Sitemap and index still contain `/case-studies/onerail` | That URL's final page is the anonymized freight study, which does not use the name OneRail. |
| Customer Hub | Header link goes to case studies | Footer link goes to the login wall. |
| CEO | Team page and `llms.txt`: Mark Ajzenstadt | Protocol essay: "David Antoline, CEO at Limestone Digital." |

## Where the raw pages are

`research/limestone-digital/sitemap.md` lists every fetched URL, the final URL after redirects, and the text file. `research/limestone-digital/pages/` holds the extracts. Quotes in this report were checked against those files for the homepage, the three service pages, the team page, the private-equity page, the contact form, `llms.txt`, the voice, freight, and Ingenetix studies, the training price, and the "no process, no agent" issue. Longer case studies and the rest of the insight corpus are in the extracts so a later pass can quote them without another crawl.
