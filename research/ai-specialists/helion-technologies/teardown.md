# Helion Technologies teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no portal login, no assessment requested.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer is a free 30-minute fit call, then a paid Job map credited toward the build, then the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The line is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided.

Helion Technologies sells managed IT, cybersecurity, compliance, and Tekion enablement to auto and heavy-truck dealerships, and it has started selling a governed AI workspace on top of that stack. The useful part for Wil is how they talk about an AI plan and about who an agent is allowed to be. The MSP catalog is the motion not to copy.

Every important claim below is quoted from a file under `research/ai-specialists/helion-technologies/pages/` or from the two Helion posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on their site or in those posts.

## Top 5 takeaways

1. **Steal the seven-part page and put it inside the Job map.** Scot McConnor's 23 October 2026 post says an AI plan names the problem, the measure, the owner, the data, who connects the data, the access, and a pilot that ends in go or no-go. "A license is a tool. A plan is a decision." One page, signed by a named person, before anyone buys seats. Wil's $217K and 11,139 PO lines are already the measure row. Do not give that page away as a free assessment. Source: https://heliontechnologies.com/dealership-ai-implementation-plan/

2. **Steal the agent rules and write them on the autonomy ladder.** Erik Nachbahr's 22 October 2026 post: an agent gets its own account, the least access the job needs, and a manager's name. "An agent should never run as a person. Not as the IT manager. Not as the controller. Never as an administrator." A table says what it may do alone, what a person signs, and what it never does. A one-person practice can say that on a fit call. Do not hire a help desk or a security operations center to say it. Source: https://heliontechnologies.com/ai-agents-for-car-dealerships/

3. **Their good first project is read-only and ends with a person. Wil’s shop story is already that shape.** The recon example "doesn’t move anything. It doesn’t reprice anything. It reads. It reports." The test he gives a dealer is whether someone already checks several systems, whether read-only access is enough at the start, whether a manager’s name is on the output, and whether a number they already watch will move. Managed AI’s department list includes "Vendor quote comparison" and "Core and return documentation" with no dollar attached. The repair-shop match of 11,139 lines is a stronger owner-facing proof than that menu. Source: https://heliontechnologies.com/ai-agents-for-car-dealerships/ and https://heliontechnologies.com/managed-ai/

4. **Leave the free assessment and the per-user MSP tiers.** The IT assessment is "no-cost, no-obligation" and stacks "current bills across every vendor" against "what a single accountable team would cost." Managed AI is "Per-user monthly, plus a one-time onboarding fee," with Foundation, Assist, and Advantage named and no dollar on the page. That is how a firm with a bench replaces five vendors. Wil's discovery is paid and credited toward the build. Keep that. Sources: https://heliontechnologies.com/it-assessment/ and https://heliontechnologies.com/managed-ai/

5. **The two X posts are the headlines of two website articles. The articles are the richer source.** Each tweet is one sentence plus the Cox "about 1 in 3" line, and each link resolves to the post already quoted above. The articles add the seven rows, the sign-off table, and the pilot rule. Use the articles. Do not copy the 7-day help desk, the Tekion-certified practice, or the city landing pages. X posts: https://x.com/HelionTech/status/2113649752029933988 and https://x.com/HelionTech/status/2113303304969032070

## Method and coverage

The marketing site is WordPress on Hostinger (LiteSpeed, Yoast sitemaps). Public REST reports 83 pages and 330 posts. The post sitemap lists 329 non-asset URLs. The page sitemap lists image URLs as well as pages, so a raw sitemap count overstates the site. Visible pages were taken with headless Chrome. FAQ answers that sit in collapsed accordions are in the JSON-LD block of the same saved file. Those answers are quoted from that block, not invented.

Hosts:

- `heliontechnologies.com`
- `heliontechnologies.itclientportal.com`, login wall only. The saved page is "CLIENT PORTAL" with User Name, Password, and "I forgot my password." The form was not submitted. https://heliontechnologies.itclientportal.com/ClientPortal/Login.aspx

201 page text files have a URL header. 200 are from `heliontechnologies.com`, including six PDF text extracts. One is the portal login. `pages/crawl-log.tsv` lists them. `pages/crawl-log-1.tsv` is the first automatic pass. `pages/crawl-log-b1.tsv` through `pages/crawl-log-b10.tsv` are the later batches.

What the first pass did. `crawl_site.mjs --max 80` from the homepage followed the blog index into pagination (page 2 and the last pages of a 32-page archive) and saved mostly older posts, plus the homepage, `/blog/`, `/privacy/`, and one search results page. Search URLs returned HTTP 429 and were not saved. That pass did not reach the service pages, because the blog links filled the budget first.

What the second wave did. The priority URLs (every WordPress service, about, company, contact, and pricing-related page, the AI, governance, and Tekion posts, and the 16 city landing pages) were passed as `--start` in batches of 12 so a stall on sitemap seeding could not eat the run. One earlier start list of 98 URLs sat with no pages written and was stopped. `/upcoming-events/` returns the speaking page (final URL `https://heliontechnologies.com/speaking/`). The file `speaking.txt` records that redirect. `/pricing` and `/privacy-policy/` are not real pages: `/pricing` is HTTP 404, "Page not found." The privacy policy that exists is https://heliontechnologies.com/privacy/. "Terms of Service" in the footer is a span, not a link. No terms page was fetched because none was linked.

Case-study PDFs are linked from the five download pages with the line "There is no form to fill in." They were fetched with a plain GET and the text was extracted into `pdf__*.txt`. They were not rendered in Chrome. `HMSS-2026.pdf` is a four-page brochure for Helion Managed Security Suite, linked from the resources page. It has no price.

Not fetched, on purpose. 224 post URLs remain in `pages/not-fetched.txt`. The blog is larger than 80 content URLs. Those leftovers are older cybersecurity, compliance, and IT-news posts, plus a handful of AI-attack headlines that repeat the same warning. They are listed so they are not described here. Tag archives, author archives, cart, and login were not crawled. The client portal was not entered.

The first-pass archive files are still in `pages/`. This teardown does not quote them. One of them, `state-of-dealership-cybersecurity___hsenc-….txt`, is the cybersecurity report page saved with HubSpot tracking parameters still on the URL.

## Product

### What they sell

Homepage H1: "Every Dealership IT Expert You Need, Under One Roof." The line under it:

> Managed IT, cybersecurity, compliance, Tekion enablement, and AI — one accountable team, not five different vendors.

https://heliontechnologies.com/

Services page H1: "One Integrated, Accountable Technology Partner for Dealerships." The same five are "one sequenced, accountable program." https://heliontechnologies.com/services/

| Offer | How the page describes it | URL |
| --- | --- | --- |
| Managed IT | Proactive support, a service desk open when the stores are, networks, Microsoft 365, identity, backups | https://heliontechnologies.com/services/ |
| Cybersecurity | "a security operations center staffed by live, US-based analysts around the clock" | https://heliontechnologies.com/services/ |
| Compliance | "Continuous Evidence Collection" from the dealership's own systems, then "Active Risk Remediation" by Helion's own teams. "Compliance isn't a portal. It's an operational program." | https://heliontechnologies.com/services/ |
| Co-managed IT | Internal IT "keeps their role" and Helion "adds coverage, expertise, and backup" | https://heliontechnologies.com/co-managed-it/ |
| Tekion enablement | "Tekion Certified Partner." Implementation readiness, adoption, and optimization after go-live. "Getting the most from Tekion isn't a one-time project." | https://heliontechnologies.com/tekion-services/ |
| Managed AI | "a recurring, governed service — not a software license, not a one-time project." Called "THE FIFTH PILLAR." | https://heliontechnologies.com/managed-ai/ |
| DMS transition | End-to-end support for a DMS move, not only go-live day | https://heliontechnologies.com/dms-services/ |
| Buy-sell IT | Review the seller's systems before closing, then move the store onto the buyer's network, Microsoft 365, and DMS | https://heliontechnologies.com/dealership-acquisition-it/ |
| Heavy truck | Karmak and Procede named as the truck DMS pair, alongside the auto DMS pages | https://heliontechnologies.com/heavy-truck-dealerships/ |

Company page: "works only with automotive and heavy-truck dealerships. Founded in 1997 by Erik Nachbahr and based in Baltimore, Maryland." Address on the contact page: 3000 Falls Rd, Suite 300, Baltimore, MD 21211. Organization JSON-LD also lists the alternate names "Helion Automotive Technologies" and "Helion Trucking Technologies." https://heliontechnologies.com/company/ and https://heliontechnologies.com/contact/

The services-page meta description stops at "Managed IT, Cybersecurity, Compliance and Tekion Enablement." The body of the same page adds Managed AI. Both strings are on https://heliontechnologies.com/services/.

### Packaging and price

No dollar price for a Helion fee was published on the pages crawled.

The price-quote page says the services "are customized rather than one-size-fits-all" and "a Helion representative contacts you about pricing based on your dealership's needs." The pricing FAQ in that page's JSON-LD: "Helion Technologies prices its services dealership by dealership." A different FAQ on the same page, "Which Helion services can a price quote include?", says "Helion's managed services come in coverage levels" and does not name the levels or a dollar. https://heliontechnologies.com/price-quote/

Managed AI is the only page that names packages:

> Foundation. Private branded workspace, Microsoft 365 connections, governance controls, rollout, and user training.
>
> Assist. Foundation plus department agents for service, sales, parts, and office workflows, and quarterly usage review.
>
> Advantage. Assist plus custom agent development and quarterly AI roadmap sessions with leadership.
>
> Per-user monthly, plus a one-time onboarding fee.

https://heliontechnologies.com/managed-ai/

**INFERENCE:** a buyer cannot tell from the site what a rooftop would pay, or what "per-user" counts (a technician, a license, a rooftop). The onboarding fee has no number either.

The John Eagle PDF states a network cost, which is the client's carrier and vendor spend, not a Helion rate card: "Prior to the network upgrade, John Eagle paid an average of $62,300 per month to several different vendors. The new, streamlined network cost $25,000 per month — a 60% reduction in expenses." https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-John-Eagle-Auto-Group-Case-Study.pdf

Rosner's controller compared Helion with hiring and did not publish either number: "When I did a cost analysis comparing that to Helion's services, it was very cost competitive." https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-Rosner-Auto-Group-Case-Study.pdf

`/pricing` is a 404. The Dallas city page says after-hours, weekend coverage, and field dispatch "sit inside the monthly number instead of showing up later as separate invoices." It does not say what the monthly number is. https://heliontechnologies.com/dealership-it-services-dallas/

### Guarantees

No "no measured uplift, no invoice" line, and no uptime credit, appears on the marketing pages crawled.

The HMSS brochure says "Guaranteed deployment of essential security controls across every endpoint." It does not say what happens if a control is missing, and it does not price the suite. https://heliontechnologies.com/wp-content/uploads/2026/05/HMSS-2026.pdf

The operating promise that is repeated is speed and coverage, not a result: "82s. avg. response time" on the homepage, and on the contact page "After-hours and weekend support included at no extra charge" with the help desk "Open whenever your stores are, 7 days a week. Closed Christmas Day and Thanksgiving Day." https://heliontechnologies.com/ and https://heliontechnologies.com/contact/

The assessment page says "No cost. No obligation. No sales pressure built into the visit itself." It also says why it is free: "most dealerships that go through it see gaps they didn't know existed, and some of them become clients." https://heliontechnologies.com/it-assessment/

### Engagement model and deliverables

Homepage, "What Working With Helion Looks Like":

1. "Book a Complimentary IT & Cybersecurity Assessment. No cost, no obligation."
2. "See where your current spend is actually going. The assessment maps your existing vendor bills against Helion's all-in cost, side by side."
3. "Get a standardization plan, not a takeover. If Helion can build it right for your dealership, you'll know exactly what that looks like before you sign anything."

https://heliontechnologies.com/

The assessment page says an IT expert "visits (or connects remotely)," "Findings get documented," and "A written report goes to the people who need to see it." Scope of the review: current technology, whether EDR and firewalls are configured or merely installed, vendor spend, FTC Safeguards standing, and "AI Tool Usage." https://heliontechnologies.com/it-assessment/

AI readiness is not a separate paid product. "You request it through the complimentary IT and cybersecurity assessment." It checks tools already in use, customer data those tools can reach, Microsoft 365 rights, where an AI build would store data, and whether there is a policy. The output named on the page is "One written readiness report." https://heliontechnologies.com/ai-readiness-assessment/

Managed AI deployment, four steps on https://heliontechnologies.com/managed-ai/ :

1. AI Readiness Assessment. "We map what's already in use across departments."
2. Workspace Deployment and Configuration. Private workspace, Microsoft 365, "access controls and spend limits set per department."
3. Department Rollout and Training. "We start with service and BDC, where ROI is fastest."
4. Ongoing Governance. "Usage monitored, access reviewed, audit trail fed into the Continuous Compliance program quarterly."

Secure AI Chat is the workspace inside that program: "a private, managed workspace where staff use GPT, Claude, Gemini and other leading models." https://heliontechnologies.com/secure-ai-chat-for-dealerships/

Tekion enablement stays after go-live and mentions "performance scorecards benchmarked against Tekion's own data across Service, Parts, Sales & F&I, and Accounting." https://heliontechnologies.com/tekion-services/

### Named frameworks

- **The seven-part AI implementation plan.** Problem, measure, owner, data sources, who connects the data, access and approved platforms, pilot and go or no-go. "You don't need a binder. You need one page per initiative that a dealer principal can read in five minutes and sign." NIST's Govern, Map, Measure, Manage is cited as an order to borrow, not as a certification. https://heliontechnologies.com/dealership-ai-implementation-plan/
- **Managed AI tiers.** Foundation, Assist, Advantage. Above.
- **Continuous Compliance.** The compliance program the AI audit trail is supposed to feed.
- **Fifth pillar.** Managed AI, counted after managed IT, cybersecurity, compliance, and Tekion enablement. Co-managed IT and DMS transition are on the same nav and are not in that count of five.
- **Ingest, retain, reuse, connect.** Erik Nachbahr's four things an AI tool does with what you give it, in the governance post. https://heliontechnologies.com/ai-governance-for-dealerships/
- **Least privilege, and OWASP "excessive agency."** Rex Marchant's post, and Nachbahr's agent post. Excessive agency is "excessive functionality, excessive permissions, and excessive autonomy."
- **HMSS.** Helion Managed Security Suite. Brochure only in this crawl.
- **The sign-off table.** What the agent may do alone, what a person signs, what it never does. Quoted under AI below.

### How they describe AI and agents

The problem, from the Managed AI page:

> Your staff is already using AI. Helion makes sure it's yours — isolated, auditable, and managed by the same team that handles your IT, cybersecurity, and FTC compliance.

Examples they name: service advisors "Pasting RO notes into ChatGPT," BDC "Drafting lead responses," F&I using it "to summarize a deal jacket." "All of it in personal accounts, outside your security controls." https://heliontechnologies.com/managed-ai/

Definition of the plan, McConnor:

> An AI implementation plan for a dealership names the business problem, how success gets measured, who owns it, which data it needs, who connects that data, what access it gets, and the pilot that decides go or no-go.

> "Use AI in service" isn’t a problem. It’s a wish. A problem has a person attached to it and a number you can check on a Tuesday.

He cites Cox Automotive’s AI in Auto Retail Tracker, released 11 August 2026: "82% of dealers use AI today and 69% expect it to drive sales and revenue growth, yet only 22% of AI users report seeing that growth so far. About 1 in 3 either aren’t measuring AI’s impact or have no clarity on how they’re measuring it." He also writes that dealers with an external AI partner reported growth "36% versus 21%" and then says "Cox doesn’t define what counts as a partner, so I wouldn’t read too much into it." https://heliontechnologies.com/dealership-ai-implementation-plan/

Definition of an agent, Nachbahr:

> An AI agent is software that carries out a series of steps on its own, on a schedule or a trigger, using access you give it to your systems. It reads, decides what matters, and acts, often by alerting a person or updating a record, without someone typing a prompt each time.

> An agent should never run as a person. Not as the IT manager. Not as the controller. Never as an administrator. Give it its own named account in the DMS, the CRM, and Microsoft 365, with the smallest set of permissions its job requires.

The sign-off table on the same page:

| The agent may do this alone | A person signs off first | The agent never does this |
| --- | --- | --- |
| Read statuses, notes, and tickets it was scoped to | Change a record in the DMS or CRM | Delete records or files |
| Write a summary or a daily list | Send anything to a customer | Change its own permissions or anyone else's |
| Alert a named manager inside the store | Reassign a lead, a car, or a repair order | Move money, approve credit, or touch payroll |
| Open an internal ticket | Change a price or a payment figure | Export customer data outside your systems |

https://heliontechnologies.com/ai-agents-for-car-dealerships/

Three first projects on that page, each "ends with a person": a morning list of recon units that have not moved ("It doesn't move anything"), a review of BDC calls and emails that no customer hears, and a list of unhappy customers from tickets and survey comments. Helion's own ticket-sentiment agent "is not done yet."

The filter for a first project, same page: someone already checks several systems to learn one status; the agent can start read-only; a manager's name is on the output; a number they already watch will move; and a wrong answer does not reach a customer. "If the answer to that last one is yes, it isn't a first project."

Least privilege, Rex Marchant: "AI does not need all of your data, but AI will use all the data you give it." "Give every AI integration its own account. Not an admin’s. Not a shared login." "Read before write." https://heliontechnologies.com/least-privilege-ai-dealerships/

Governance, McConnor, opening story: a salesperson asked the help desk to install a personal ChatGPT account "on every computer on the sales floor, signed in as them on each one." "It isn’t a hacker story. It’s an enthusiasm story, which is what AI risk looks like at most dealerships right now." The four moves are ingest, retain, reuse, and connect. "The tool isn’t the risk. The access is." https://heliontechnologies.com/ai-governance-for-dealerships/

Secure AI Chat on blocking:

> The firewall shuts the sites off on store PCs, and then the same advisor pulls out a personal phone in the service drive and carries on, except now there’s no record of anything at all.

https://heliontechnologies.com/secure-ai-chat-for-dealerships/

Managed AI FAQ, JSON-LD on https://heliontechnologies.com/managed-ai/ :

> Copilot is a license. Nobody governs it, reviews usage, tracks what data went where, or connects it to your compliance program. A Copilot license lands in the building and 60 days later half the team isn't using it and nobody's checked whether the other half used it appropriately. Managed AI is a program, not a login.

> For Tekion environments, yes — the integration extends naturally from the Enablement practice Helion already manages. For CDK and Reynolds & Reynolds, live DMS data access isn't in scope at launch. The deployment covers Microsoft 365, file storage, email, and business applications outside the DMS.

> No. Zero Data Retention means prompts and outputs aren't stored by the model provider and aren't used to train anything. That's a contractual commitment, not a configuration setting.

Department jobs they list for the workspace include repair-order cleanup, warranty documentation, lead drafts, "Vendor quote comparison," "Core and return documentation," month-end summaries, and "Plain-English questions against dealership reporting." No result number is attached to any of those jobs.

### Ideal customer and the words they use

They say the buyer is a dealership, a dealer group, or a heavy-truck dealer. "Helion works only with automotive and heavy-truck dealerships, from single stores to dealer groups with rooftops across multiple states." https://heliontechnologies.com/price-quote/

Roles they write to: dealer principal, CFO, service director, used car manager, BDC manager, controller, an internal IT manager who should not be replaced. The in-house comparison says "For a lot of stores" keeping the IT person "is the right answer." https://heliontechnologies.com/in-house-vs-managed-it-for-dealerships/

Industries in their words: "Automotive Dealerships" and "Heavy Truck Dealerships." "One of the only providers in this space naming heavy truck as a dedicated vertical, not an afterthought." https://heliontechnologies.com/

They do not mention a one-bay repair shop, an equipment dealer that is not a truck franchise, a trade contractor, Idaho, or eastern Washington. **INFERENCE:** the economic buyer is a dealer principal or a group executive who can sign a monthly MSP agreement across rooftops. A local owner with one repair shop is outside the copy, even when the job (parts, vendor credits, PO lines) shows up as a bullet on the Managed AI page.

Sixteen city pages (Atlanta through Dallas in this crawl) repeat the same offer with a local statute and, sometimes, one anonymized story. The offer does not change by city.

### Proof and how a case study is built

Homepage stats, repeated on almost every page: "2,000+ dealerships nationwide," "98% client retention," "82s avg. response time," "4.9," "244 Google Reviews," and "35,000+ Dealership employees supported daily." The company page says "35,000+ End users supported." https://heliontechnologies.com/ and https://heliontechnologies.com/company/

Named quotes on the homepage:

- Ricky Brown, COO, Peach State Truck Centers, on the phone being answered "within five minutes" and someone who "gives a crap."
- Jeb Balise, CEO, Balise Auto Group: "we spend a lot less time thinking about computer problems."
- John Epps, CFO, Mossy Automotive Group: "saved us hundreds of thousands of dollars and many headaches."

The five case studies are ungated PDFs. The HTML pages are one sentence each ("untangled its IT problems," "expanded with IT improvements"). The numbers below are from the PDFs, not from those sentences.

| Study | Named? | What it leads with | Outcome number in the PDF? |
| --- | --- | --- | --- |
| John Eagle, https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-John-Eagle-Auto-Group-Case-Study.pdf | Yes. Ten stores, Houston and Dallas. Duffy Cummings, CFO | Network consolidation, then video meetings so managers stop driving between stores | Network spend "from an average of $62,300 per month" to "$25,000 per month," "a 60% reduction," throughput "by a factor of more than 1,000." "Cummings estimates that John Eagle Auto Group has added $1 million to its bottom line." |
| Mossy, https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-Mossy-Automotive-Group-Case-Study.pdf | Yes. 14 San Diego stores. John Epps | Opening: "saving over $400,000 in the process." A heading also says "$400K by Upgrading IT Infrastructure." | Epps: carriers and equipment "easily saved us more than $300,000." License renegotiation: "This alone saved us $100,000." Servers "from 36 to 12." The closer is the homepage line, "hundreds of thousands of dollars." |
| Peach State Truck Centers, https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-Peach-State-Trucking-Centers-Case-Study.pdf | Yes. Twelve locations, Georgia and Alabama. Ricky Brown, COO | Outages, one in-house IT lead, a referral from CliftonLarsonAllen | No dollar total. The result is PCs replaced, outages addressed, and people willing to call IT. The engagement "started … with an IT assessment." |
| Balise, https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-Balise-Auto-Group-Case-Study.pdf | Yes. 23 New England stores. Jeb Balise | In-house IT replaced with "a 100% outsourced solution," fiber, call centers | No Helion fee and no savings total. Since then the group "acquired four dealerships and moved 10 of its stores into new facilities." |
| Rosner, https://heliontechnologies.com/wp-content/uploads/2026/04/Helion-Rosner-Auto-Group-Case-Study.pdf | Yes. A three-store group after a split. Solomon | Separating systems after a sale of stores | "very cost competitive" against hiring "two full-time people." "they can do 95% of the work from off site." No monthly rate. |

The three Tekion testimonials are a different set. The page says "Where a writer named a store, you’ll see a bracketed description instead, and each writer is described by role and region rather than by name." A Texas CFO and two Gulf South general managers describe a CDK-to-Tekion move. No dollar outcome. "meaningful operational improvements" is as quantified as the sister-store letter gets. https://heliontechnologies.com/testimonials/

The Dallas and Houston city pages retell the John Eagle network story without the name. Dallas: "According to Helion’s case study, the group’s network spend fell from an average of $62,300 a month to $25,000" and "The group’s CFO put the total at about $1 million." Houston: "We don’t name clients on this page." The PDF names John Eagle and Duffy Cummings. https://heliontechnologies.com/dealership-it-services-dallas/ and the John Eagle PDF.

**INFERENCE:** the proof that would matter to an owner is a before-and-after dollar on a named group, and Helion has two of those (John Eagle, Mossy), both about network and license spend, both from an MSP engagement, neither about an AI agent. The AI pages cite Cox, Reynolds, IBM, and Cyberhaven. They do not show a dealership AI project with a before-and-after number. Wil's $217K on 11,139 lines is a tighter proof shape than the AI section of this site, if he writes what "missed vendor credits" includes.

## Sales and marketing

### Positioning

1. Category: the one technology partner for dealerships.
2. Enemy: "a patchwork of vendors" and, for AI, personal ChatGPT accounts and licenses bought before a plan.
3. Mechanism: one team across IT, security, compliance, Tekion, and now AI.
4. Commercial: a free assessment that compares vendor bills with "Helion's all-in cost," then a quote.
5. Proof: 2,000+ dealerships, 98% retention, 82 seconds, 4.9 from 244 Google reviews, then named dealer quotes.
6. Who it's for, said immediately: automotive and heavy truck only, since 1997.

Lines worth keeping:

- "A license is a tool. A plan is a decision." https://heliontechnologies.com/dealership-ai-implementation-plan/
- "No owner, no agent." https://heliontechnologies.com/ai-agents-for-car-dealerships/
- "Same rule. New kind of user." https://heliontechnologies.com/least-privilege-ai-dealerships/
- "The tool isn’t the risk. The access is." https://heliontechnologies.com/ai-governance-for-dealerships/
- "A block hides shadow AI. It doesn't end it." https://heliontechnologies.com/secure-ai-chat-for-dealerships/
- "Managed AI is a program, not a login." Managed AI FAQ, https://heliontechnologies.com/managed-ai/
- "It isn’t a hacker story. It’s an enthusiasm story, which is what AI risk looks like at most dealerships right now." https://heliontechnologies.com/ai-governance-for-dealerships/
- "Confidence in your current setup and actual protection aren't always the same thing." https://heliontechnologies.com/it-assessment/

Voice on the AI posts is a person who has stood in a store: McConnor sold CRM to dealers for five years; Nachbahr has been in dealership IT since 1997. Sentences are short. The failed move is named (buy the seats, block the website, copy an admin login), then the opposite. The city pages are smoother and more alike. **INFERENCE:** the October 2026 AI posts are the ones worth studying. The city pages are a coverage grid.

### Funnel and CTAs

Primary action: "Get Your Complimentary IT & Cybersecurity Assessment." It repeats in the header area, the homepage steps, the footer of service pages, and the end of the AI posts.

Other doors:

- Price quote form. First name, last name, work email, dealership or group, phone optional. Then "A Helion representative gets in touch." https://heliontechnologies.com/price-quote/
- Contact form. Those fields plus "How can we help?" Phone (443) 541-1500. Marketing email `marketing@heliontechnologies.com`. Support (410) 252-8830 in Maryland, (877) 219-8830 outside. https://heliontechnologies.com/contact/
- Assessment form. Full name, dealership or group name, work email, phone. https://heliontechnologies.com/it-assessment/
- Hackability Test. Same shape as the quote form. "Complete the form and a Helion representative contacts you to schedule it." https://heliontechnologies.com/hackability-test/
- "Speak to a Tekion Expert" on the Tekion page, alongside the same assessment.
- Client Portal, for people who are already clients. Login wall.

No revenue band, headcount band, or budget band is on these forms. Qualification is the conversation after the form, plus the sentence that they only work with auto and heavy-truck dealers.

**INFERENCE:** the motion is a free on-site or remote assessment whose written output compares today's vendor stack with Helion's all-in number, then a quote. The AI posts do not have their own calendar. They end on the same assessment. There is no paid diagnostic in front of the MSP contract.

### Lead magnets

Ungated, from the resources page and the checklist pages:

- Five case-study PDFs. "PDF downloads, no form to fill in." https://heliontechnologies.com/resources/
- FTC Safeguards Rule checklist. Meta: "Free FTC Safeguards Rule checklist for dealerships" and "a printable PDF." https://heliontechnologies.com/ftc-safeguards-rule-checklist/
- Incident response plan template, safeguards risk-assessment template, and a WISP template, linked from the nav.
- HMSS brochure PDF.
- Webinar recordings on YouTube and BigMarker, linked from resources. Those off-site videos were not fetched.
- The DealersEdge AI-governance webinar is embedded from the governance post. The transcript was not a separate file in this crawl. The post quotes it.

The AI readiness report and the IT assessment report are meetings, not downloads.

### Content

The blog index says "Showing 1–9 of 288" and offers filters: All, Managed IT, Cybersecurity, Compliance, Tekion, Managed AI, Heavy Truck, Rankings. The featured and latest posts in October 2026 are the AI plan, AI agents, AI chatbot security, AI BDC, least privilege, governance, Copilot, and Tekion implementation. Authors on the posts used here: Scot McConnor, VP of Technology Advisory; Erik Nachbahr, founder; Rex Marchant on least privilege. https://heliontechnologies.com/blog/

**INFERENCE:** the October cluster is a field manual for dealer principals who already bought or are about to buy AI seats. It is not a "what is RAG" query factory. That is the part of their publishing a one-person practice can learn from, at a cadence of a note when a real job teaches something, not nine posts in ten days.

Awards on the company page run from 2017 to 2023 (MSP 501, CRN MSP 500). The 2017 and 2018 entries "appeared … under its former name, Helion Automotive Technologies." Nothing on that list is 2024, 2025, or 2026. https://heliontechnologies.com/company/

### Trust placement

Homepage order: H1 and the five-part promise, the assessment button, four stats, the patchwork-vendor problem, seven service cards, auto and heavy truck, a Peach State quote, the 2,000 / 35,000 / 98% / 82s / 4.9 block, Balise and Mossy quotes, a logo row (Balise, DARCARS, Fitzgerald, Fred Beans, Mossy, Peach State, Phil Smith), the three-step "how working together looks," then FAQs. The AI argument is a card ("Managed AI") and an FAQ ("Our staff is already using AI tools. Is that a problem?"), not the hero.

The hero FAQ answer: "It depends on whether anyone owns the program. Most dealership staff are using personal ChatGPT accounts with no oversight, no audit trail, and no governance." https://heliontechnologies.com/

## What Wil should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder.

1. **Make the Job map the seven-row page.** Their rows are the job, the number, the owner's name, the systems and fields, who connects them, who may use it, and the pilot with an end date and a go or no-go. Their post says “Keep watching it” isn’t one of the options. For the repair shop, the number is credits found and lines matched, the owner is the person who can approve a credit, the data is the PO lines, and the access row says the workflow reads the vendor file and does not pay anyone. The buyer keeps that page, and the fee comes off the build. Their version is free because the MSP contract is the product. His is the product. https://heliontechnologies.com/dealership-ai-implementation-plan/

2. **Put the agent sentence under his headline.** "Hand off the busywork. Keep the decisions" is their sign-off table in owner language: the agent may read and list; a person sends, changes a price, or moves money; the agent never runs as admin. On the ladder, tool adoption is "one approved tool while the plan is written." Governed is its own account and least access. Agent-run work is the morning list, with a person on the exception. He should not add their DMS, CRM, and Microsoft 365 stack diagram unless the buyer already has those systems. https://heliontechnologies.com/ai-agents-for-car-dealerships/

3. **Use their first-project test on the fit call.** Someone already checks several places to answer one question. Read-only is enough to start. A person owns the output. A number they already watch will move. A mistake does not reach a customer by itself. The PO match passes. A chatbot that texts leads does not, and they say so: if a wrong answer reaches a customer, "it isn't a first project." https://heliontechnologies.com/ai-agents-for-car-dealerships/

4. **Say "one or two," not a program.** Their FAQ: a single store should run "One or two" AI projects at once, because "each pilot needs real attention from the owner." A dealer group "usually hands it to an executive committee." A single-point store "needs one approver, usually the dealer principal or the CFO," not a committee. That is the right size for a one-person practice. https://heliontechnologies.com/dealership-ai-implementation-plan/

5. **Name the measure before the tool, in the words the owner already uses.** "Time to first customer update on an open repair order, measured before and after" is their example. Wil's equivalent is credits found, lines matched, and what the person still checks. Do not import their Cox percentages onto his page. Those are industry survey figures, and McConnor already warns that Cox does not define "partner."

6. **Steal "a block hides it" for the tool-adoption rung.** Blocking the chatbot and watching people switch to a phone is the reason to name one approved tool while the Job map is being written. He does not need to host GPT, Claude, and Gemini in a branded workspace to say that. https://heliontechnologies.com/secure-ai-chat-for-dealerships/

7. **Keep the report, change who pays.** Their assessment leaves "a written report." His Job map should say, in one sentence, what the buyer holds if they stop: the job, the steps, the exceptions, the source of truth, and the number that will decide the build. Peach State's PDF says Helion started with an assessment and a "laundry list" of the minimum needed to support them. That list is the cousin of a Job map. Theirs is unpaid and aimed at a managed-IT contract. https://heliontechnologies.com/it-assessment/ and the Peach State PDF.

8. **One field note when a job teaches something.** The posts to study are the seven-part plan and the agent rules, not the city pages and not a weekly SEO post. A note that says what the job was, what was written down, what the person still does, and the caveat on the number, matches those two posts more than it matches a 32-page archive.

## What not to copy, and why

- **The free assessment as the whole front door.** It exists to compare "vendor bills" with "Helion's all-in cost" and to find gaps that turn some dealers into clients. Wil's fit call can be free and short. The map that finds the $217K is the paid, credited step. Giving the map away would copy their MSP economics without their contract behind it.
- **Per-user monthly tiers and an unnamed "coverage level."** Foundation, Assist, and Advantage assume a workspace rolled out across departments, a quarterly review, and a team that already runs the dealership's identity and compliance. He does not staff that. Publishing "per-user monthly" with no number would also import a unit he has not chosen.
- **The bench.** "2,000+ dealerships," "35,000+," "98% client retention," "82 seconds," a US-based SOC, a 7-day help desk, field technicians. He is one person. Borrowing the shape makes the shop story look like it is missing a department.
- **Tekion-certified enablement, Karmak, Procede, and DMS migration as a practice.** Useful to know the words his dealer buyers use. Not a service he should list beside the Job map. Their own FAQ says live DMS data for CDK and Reynolds "isn't in scope at launch." He should not imply a DMS connection he has not built.
- **Co-managed IT and "we won't replace your IT person."** That is an MSP sitting beside a dealership IT department. His buyer may have an office manager, not a department. The transferable sentence is only "the person who owns the job keeps the decisions."
- **Buy-sell integration as an offer.** Reviewing a seller's network before closing, moving tenants, and cutting off the old vendor's remote access is a project business for groups that acquire rooftops. It is not the next product after a vendor-credit match.
- **City landing pages.** Sixteen of them say the same MSP offer with a local privacy statute attached. He should name the towns where he actually works, not a grid of metros.
- **Anonymizing the best proof and naming the MSP proof.** The Tekion letters hide the store. The AI pages have no client result. The homepage names Peach State, Balise, and Mossy for IT support. If a repair shop lets him name it, that named dollar belongs on the first screen. If it does not, he should say "a local shop" and keep the caveat, rather than invent a logo row.
- **Survey stats as if they were his result.** 57% and 70% are Reynolds, Q1 2026, on the Managed AI page. 82%, 22%, and "about 1 in 3" are Cox, August 2026, in the posts. $670,000 is IBM 2025, "Shadow AI premium." 34.8% is Cyberhaven. None of those is a Helion engagement.
- **A guarantee sentence with no remedy.** "Guaranteed deployment of essential security controls" on the HMSS brochure does not say what the dealer gets if a device is missed. Do not print a cousin of that line.

## Private equity

**Noted for reference, NOT our strategy for now.**

Helion does not sell to sponsors, operating partners, or funds on the pages crawled. There is no EBITDA line, no hold period, and no portfolio offer.

The one private-equity sentence is about a vendor, not about Helion. On the Karmak vs Procede comparison: "Procede Software took a majority growth investment from Rubicon Technology Partners, a private equity firm focused on enterprise software, to speed up product work and widen integrations across the commercial vehicle world." https://heliontechnologies.com/karmak-vs-procede/

What they do sell next door to a transaction is dealer buy-sell IT. "When you buy a store, you buy its IT too." Erik Nachbahr: "When dealers are buying a dealership or a group of dealerships, they’re also buying their risks and problems from an IT standpoint." The work is a pre-close look at the DMS contract, network, PCs, Microsoft 365, admin logins, and customer data, then a move onto the buyer’s standard. https://heliontechnologies.com/dealership-acquisition-it/

**INFERENCE:** that is a service for a dealer group that acquires rooftops. It is not a strategy for Wil. If an owner on a fit call is in the middle of buying a shop, "what are you buying besides the work" is a question, not a new offer.

## X evidence

The posts are short. The website articles they link to are not. The X posts are not richer than the site.

Post from 23 October 2026, https://x.com/HelionTech/status/2113649752029933988 . Metrics in the saved file: 0 likes, 0 replies, 0 reposts, 2 impressions.

> Who owns your dealership's AI project, by name? If nobody, write an AI implementation plan before buying seats. Helion Technologies lists the 7 parts; about 1 in 3 dealers aren't measuring AI (Cox): https://t.co/xuwfDJGvUc https://t.co/zyZQSPYz1q

The first link resolves to https://heliontechnologies.com/dealership-ai-implementation-plan/ . The second resolves to the tweet itself. The article has the seven rows, the "one page" rule, the pilot, and the Cox wording with the date of the tracker. The tweet adds the question "by name" in the first four words, which the article also answers ("Which manager answers for it, by name?"). No contradiction.

Post from 22 October 2026, https://x.com/HelionTech/status/2113303304969032070 . Metrics: 0 likes, 0 replies, 0 reposts, 7 impressions.

> AI agents for car dealerships should never run as an admin. Helion Technologies: own login, least access, a manager's name on it. About 1 in 3 dealers aren't measuring AI's impact or aren't sure how (Cox): https://t.co/6zXRrQdGqo https://t.co/H7ikLciNVq

The first link resolves to https://heliontechnologies.com/ai-agents-for-car-dealerships/ . The article is stricter than the tweet: not only "never as an admin," but "never run as a person," with the sign-off table and the read-only recon example. The tweet's "own login, least access, a manager's name" matches the article. It does not add a rule the article lacks.

**INFERENCE:** these two posts are distribution lines for articles published the same week. They are not a second body of method. With 2 and 7 impressions in the saved metrics, they are also not evidence that the argument is traveling. The argument lives on the site.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Helion's price | Price-quote FAQ: customized, "coverage levels," a rep calls | Managed AI: "Per-user monthly, plus a one-time onboarding fee." No dollar on either page. `/pricing` is a 404. |
| Who the $1 million belongs to | John Eagle PDF: Duffy Cummings, CFO, "estimates" $1 million added, and names the group | Dallas city page: "the group's CFO" and "about $1 million," no name. Houston city page: "We don't name clients on this page." |
| Google reviews | Homepage hero and footer: "244 Google Reviews" | Homepage body: "Google rating across 200+ reviews." Testimonials: "more than 200 of them averaging 4.9 out of 5." |
| Assessment volume | Assessment page section title: "What 2,000+ Assessments a Year Looks Like" | Same page body: "Helion runs hundreds of these every year" and the tile "Hundreds. Complimentary assessments run for dealerships annually." The 2,000+ figure elsewhere is dealerships under management. |
| Headcount supported | Homepage: "35,000+ Dealership employees supported daily" | Company page: "35,000+ End users." Governance post: "about 35,000 dealership employees." |
| What "five" includes | Managed AI is "the fifth pillar" next to IT, cybersecurity, compliance, and Tekion | The nav also sells co-managed IT and DMS transition. The services meta description omits Managed AI; the H1 block includes it. |
| DMS data for AI | Managed AI FAQ: Tekion, "yes." CDK and Reynolds, "live DMS data access isn't in scope at launch." | The agent post still talks about an account "in the DMS" and Tekion's per-user controls. The scope limit is easy to miss. |
| AI adoption | Managed AI page: "57% of dealership staff" and "70% of dealer principals," Reynolds & Reynolds, Q1 2026 | The October posts: "82% of dealers use AI today," Cox, 11 August 2026. Different studies and different denominators. The site does not reconcile them. |
| X posts and the site | Tweets: 7 parts; never as admin; own login; a manager's name; about 1 in 3 (Cox) | The linked articles say the same things and add the rows, the table, and the pilot. The articles are the fuller text. |

## Where the raw pages are

`research/ai-specialists/helion-technologies/pages/` holds the extracts. `crawl-log.tsv` lists every saved URL. `crawl-log-1.tsv` is the first 80-page pass. `not-fetched.txt` lists 224 post URLs that were not fetched. Quotes in this report were checked against the homepage, the services page, Managed AI, the AI implementation plan, the AI agents post, least privilege, AI governance, Secure AI Chat, the IT assessment, the price quote, Tekion enablement, the company page, the five case-study PDFs, and the two X posts.
