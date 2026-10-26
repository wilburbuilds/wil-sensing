# Varick Agents strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no newsletter signup, no access code entered, no time selected on the booking page.

Wil Sensing is a one-person ops and AI consultancy for local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho, eastern Washington, Boise and Nampa). The offer is a free 30-minute fit call, then a paid Job map credited toward the build, then the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The lead line is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided.

Every important claim below is quoted from a page saved under `research/ai-specialists/varick-agents/pages/`, or from the two @vasuman posts in `research/ai-specialists/_x/posts.md`. Those posts are labeled as X. They are not pages on varickagents.com. **INFERENCE** marks a conclusion that is not a sentence on the site or in those posts.

## Top 5 takeaways

1. **Steal the workflow list as a menu of jobs, and sell one job.** Varick's material is a department catalog with a volume, a before-and-after, and a person still on the exception. The public site puts three departments on the homepage and three long studies behind them. The nine-department list, including "most AP teams are managing 600-800 exceptions a month," is on X, not on a page of the site. https://x.com/vasuman/status/2112312466726060128 and https://www.varickagents.com/case-studies-finance. Wil's version is one shop job on the Job map (vendor credits, PO lines, what the person still approves). He should not publish nine enterprise departments he has not done.

2. **Sort the job into code, an agent, and a person who still decides.** That is his headline and the top of the ladder, in their words. "Don't Apply AI" sorts every step into deterministic software, an agent, or a human in the loop, and says a 25 step process becomes "3 agents with 2 human checkpoints." The human gets the evidence and still gates the action. https://www.varickagents.com/blog/don-t-apply-ai. Put that sort in the Job map. Leave "redesign the organization" and "drive billions in value."

3. **Their audit is the Job map. Keep his paid and credited, and keep the call at 30 minutes.** The booking page is a 30-minute call that asks the visitor to bring "a workflow or two," and says the next step is "a formal audit." The audit they show is four weeks inside a 280-person finance org, and the essay says the buyer then receives the redesigned process, the value, the baseline KPIs, and the build order. https://cal.com/team/varick-agents/discovery-call and https://www.varickagents.com/blog/don-t-apply-ai. Wil already charges for the map and credits it toward the build. Keep that. Do not copy a four-week embed, a revenue floor, or an unpaid audit that disappears into the proposal.

4. **Write the shop proof like the finance close: before, after, the math, and what the number leaves out.** The finance study leads with the job (close from 18–22 days to 7–9, AP exceptions at close from 600–800 to under 50) and then shows the dollar math with the assumptions and the items left out of the total. https://www.varickagents.com/case-studies-finance. Wil's $217K and 11,139 PO lines are the same shape, at a size an owner can check. He should say what "missed vendor credits" includes, and that a person still owns the exceptions. He should not print their $11.4–$14.7M year-one range, or the other dollar figures that do not match it.

5. **Put the agent in the system they already run, and let a person pause it.** The line to study is that people "just want the work done," so the agent runs in NetSuite or Salesforce and a process owner can pause it, change a permission, or take an exception back. https://www.varickagents.com/blog/solving-the-ai-adoption-problem. That is headless, then governed, with a person on the exceptions. The homepage version of the same idea is "No 18-month timelines or migrations required." https://www.varickagents.com/. Leave the Fortune 500 control plane, "Only AI Native Orgs Will Survive," and any revenue minimum.

## Method and coverage

The marketing pages are client-rendered. Headless Chrome was required to read the bodies. `https://www.varickagents.com/sitemap.xml` lists 28 URLs. All 28 were fetched and saved. The blog index's visible text shows author and read time and does not show article titles. The titles are on the article pages, and those pages were fetched from links in the HTML.

65 page text files are saved. Each file starts with the URL. Hosts:

- `www.varickagents.com` (first run, log kept as `pages/crawl-log-1.tsv`)
- `demo.varickagents.com` and `audit.varickagents.com` (second run, log kept as `pages/crawl-log-2.tsv`)
- `cal.com`, one public event page only (`pages/cal-discovery-call.txt`). The calendar was not used. Cal.com's own sitemap was not crawled.

The crawler names a file from the path, not the host. `https://www.varickagents.com/` and `https://demo.varickagents.com/` both wanted `index.txt`. The marketing homepage is `index.txt`. The demo homepage is `demo-home.txt`. `pages/crawl-log.tsv` is the combined log, with that rename noted.

HTTP 404, not saved as pages: `/about`, `/about-us`, `/services`, `/pricing`, `/case-studies`, `/work`, `/contact` on the marketing host. The same probes 404 on the demo and audit hosts. `https://demo.varickagents.com/cfo` returned 404 and was not saved. The finance essay says a five-minute walkthrough exists ("here") and does not print the URL in the saved text. The article HTML links `https://demo.varickagents.com` (saved) and `https://demo.varickagents.com/cfo` (the 404).

Not crawled on purpose: Ashby job posts (the careers page already lists the roles and the pay bands), LinkedIn, `x.com/varickagents` (the footer link; the two posts used here are on @vasuman and were already saved), newsletter signup, the access-code forms, and anything past the single Cal.com event page. Eight case-study URLs on the demo host are password walls. The wall text was saved. The code was not submitted, so the bodies behind the walls are not described.

`pages/not-fetched.txt` was not produced. The in-host queues finished inside the page budget.

## Product

### What they sell

Homepage H1: "Transform Your Enterprise With AI." The deck:

> Custom AI implementations tailored to your business that automate entire departments from the inside, end to end. No generalized software that only does half the job. No 18-month timelines or migrations required.

https://www.varickagents.com/

The section under that:

> A single automation that answers emails isn't transformation. We architect agent systems that handle end-to-end workflows — from intake to execution to reporting — replacing entire process chains, not individual steps.
>
> The result: your finance team operates like it's 3x the size. Your ops team ships without the backlog. Your revenue team closes faster.

There is no services page and no pricing page. The offer is the homepage sequence, then the three case studies.

How it works, same page:

1. AI Opportunity Audit. "We conduct a structured audit of how work moves through your organization across teams, systems, and decision points."
2. Process Architecture & Redesign. "Varick designs and builds the AI agent system that will execute the workflow — integrating it with the enterprise tools, data, and operational logic that power the process. You're kept in the loop the entire time."
3. Production Deployment. "Agents are built on top of your existing software, meaning no migrations are required. If you have BAAs with AI Labs we'll use their models, and we deploy on your cloud."
4. A fourth block, "Agent System Optimization." "After deployment, Varick improves how the agent operates over time - strengthening its decision logic, increasing reliability, and extending it into new operational responsibilities."

The "Case Study" control in that section links to the finance audit demo. Each agent's "View Demo" links to an engine page on `demo.varickagents.com`. "View Case Study" links to the three public studies. "View Deployments" links to the demo index.

Careers, https://www.varickagents.com/careers:

> Varick is an applied AI company that replaces the manual work employees do between systems at enterprise companies. We build AI agents that handle exception routing, cross-system coordination, data reconciliation, and the hundreds of operational tasks that are too complex for traditional automation but too repetitive for your best people.
>
> We embed engineers directly inside client organizations — Fortune 500 companies generating billions in revenue — and deploy production AI systems that run inside their existing tools. No rip-and-replace. No demos that never ship. 100% of our clients deploy to production. 100% come back for more.

The short page https://www.varickagents.com/what-does-varickagents-do-differently is the cleanest product sentence:

> We build AI agents directly into the workflows that drive the business, so companies get results from AI whether or not every employee becomes an AI power user. The agent connects to the systems the company already uses, follows the company’s rules, handles the repetitive work, and escalates to humans only when judgment or approval is needed.

Legal entity, support page and privacy notice: SolidCart, Inc. (d/b/a Varick Agents), 311 California Street #750, San Francisco, CA 94104. Contact `contact@varickagents.com`. The privacy notice says solutions "are typically deployed into the client's own cloud infrastructure" and "We do not use client confidential information or client personal information to train generalized models or improve services for other clients unless expressly authorized in writing." https://www.varickagents.com/privacy-policy

The same notice lists AI service providers: "Amazon Web Services (AWS) AI, Amazon Bedrock, Microsoft Azure AI, OpenAI, Anthropic and Google Cloud AI." The homepage line about using the client's BAA models is a different sentence. Both are on the properties crawled.

### Packaging, prices, and guarantees

No engagement price, in dollars, is on any page crawled. There is no `/pricing` page.

Homepage FAQ, https://www.varickagents.com/:

> Engagements are structured based on the complexity of the workflow, the systems involved, and the scope of the deployment. Pricing is typically discussed after the discovery call once we understand the operational requirements.

The audit demo's investment block names three phases and no fee. Phase 1 Audit, "Completed." Phase 2 Implementation, "4 months." Phase 3 Ongoing, "Usage-based." https://audit.varickagents.com/demo/plan

The three engine outcome pages each end with "They never paid more than the value created." They do not define value, name a fee, or say what happens to the invoice if the value is missed. https://demo.varickagents.com/client-001/outcomes

Other numbers that are not a client price: careers salary bands (for example the ML Engineer, Post Training, at "$250,000 - $400,000 + EQUITY," and the Enterprise Account Executive at "$140,000 - $180,000 / $280-320K OTE + EQUITY"), and a "$20k referral bonus" in a hiring essay. https://www.varickagents.com/careers and https://www.varickagents.com/blog/how-to-become-an-applied-ai-engineer

No guarantee is printed on the homepage. The FAQ does not offer one. "100% of our clients deploy to production" is on the careers page with no list and no window.

### Engagement model and deliverables

Homepage timing, same FAQ:

> Most deployments move from discovery to a production agent in 6–12 weeks, depending on the complexity of the workflow and the systems involved.
>
> Your team provides context on the workflow and systems involved (<20 hours across all employees).

The booking page says the call is 30 minutes and that a fit leads to an audit, not to a build. https://cal.com/team/varick-agents/discovery-call

The essays describe a longer front end. "Don't Apply AI," https://www.varickagents.com/blog/don-t-apply-ai:

> Our pod of Strategists and Engineers come in at the department level to first map how the work actually happens, not just accept how it's documented, through a combination of process mining and interviews, calculation of elapsed time vs touch time, mapping of the exceptions, upstream effects, and downstream effects, and understanding of who owns what. Instead of months, we complete this process in just a few weeks, at which point you receive your redesigned process, the value to be captured, custom baselined KPIs, and the priority ranking order in which the agents would get built. Next, we would begin building the agents, which come equipped with enterprise-level governance, auditability, eval-suites, and monitoring out-of-the-box.

"If AI is so great, why isn't it working?" calls the audit at least four weeks, and the thing it produces a "digital twin." The six-month path in that essay is audit, then architecture, then a soft launch "where humans approve every action," then go-live with humans still on the high-stakes decisions, then a tuning function. https://www.varickagents.com/blog/if-ai-is-so-great-why-isn-t-it-working

The finance case study packages the same arc as "The Audit (4 Weeks)" and "Implementation (4 months)." The audit demo is a three-chapter sample of the deliverable: who was interviewed, SOP versus reality, a risk register, then a four-month build plan. https://audit.varickagents.com/demo

What the buyer is told to hold at the end of the map, from the seven details in "Don't Apply AI": the happy path, the exceptions and what share of volume leaves the happy path, what is upstream and downstream, which system of record wins when two disagree, how the workflow differs by entity, touch time versus elapsed time, and who should own the future system. The method is "Process mining against the systems of record" plus "Interviews." Doing only one "is the biggest reason why AI discovery fails."

The finance engine demo shows a different narrator for the same weeks. Chapter 1 is "The Diagnosis Agent," which "scans Industrial Manufacturing Corp's finance operations across 6 connected systems. In 2-4 weeks, it surfaces exactly where time is being wasted." https://demo.varickagents.com/client-001/discovery. The case-study page says a forward deployed engineer did the audit. Both surfaces were saved. They are not merged below.

### Named frameworks and how they describe the work

They do not trademark a framework on the homepage. The names that recur:

- **AI Opportunity Audit**, then a redesign, then production, then optimization. Homepage.
- **Three buckets.** Deterministic software, an agent, or a human in the loop. https://www.varickagents.com/blog/don-t-apply-ai
- **Forward deployed engineer**, and the job as "Audit, Evals, and Deployment." https://www.varickagents.com/blog/forward-deployed-engineering-101
- **Conformance gap.** "We call the gap between SOP and actual workflow the conformance gap. In typical engagements we see 30%+. In heavy exception-driven workflows like AP exception handling or supply chain disruption response, we routinely see over 70%." https://www.varickagents.com/blog/if-ai-is-so-great-why-isn-t-it-working
- **Single pane of glass.** One orchestration layer across departments, in that same essay.
- **Control plane.** "It shows them which agents are running, and it lets them pause a workflow, change a permission, or pull an agent back without writing any code internally." https://www.varickagents.com/blog/solving-the-ai-adoption-problem
- **Outcomes as a service.** "If enterprise software was the era of software as a service, enterprise AI is the era of outcomes as a service." Same essay.
- **85% code, 15% model.** Repeated. The finance essay: "What we ship is ~85% plain code and ~15% model calls." https://www.varickagents.com/blog/ai-for-enterprise-finance-how-to-do-it-right. The failure essay says production systems "end up as 5-10 deterministic steps with maybe one or two model calls."

The human-in-the-loop paragraph worth keeping, https://www.varickagents.com/blog/don-t-apply-ai:

> For example, an agent will detect a mismatch between an invoice and a purchase order, and then present the human with 3 options: approve anyways, reject plainly, or provide feedback and route to someone else. The agent just saved your human 40 minutes of hunting through emails, invoice records, and more, so that instead, they can make a decision in 30 seconds. But the final action is still gated by that human.

Evals, from the FDE essay, https://www.varickagents.com/blog/forward-deployed-engineering-101:

> If a customer is spending millions on an AI deployment, they need to know it's working. To do that, an FDE builds detailed evals.
>
> A good eval doesn't just check if the final answer an agent gives you is correct, but also verifies the AI is thinking like a human would.

"AI Agents 102" tells the reader to build a golden dataset of about 100 examples for a narrow first task, and to block a change when the score drops. https://www.varickagents.com/blog/ai-agents-102. "How to become an applied AI Engineer" adds a second grade: the outcome, and the trajectory, so an invoice agent cannot "classify an invoice correctly while also changing bank details." https://www.varickagents.com/blog/how-to-become-an-applied-ai-engineer

The finance essay's implementation list is the operating version of the ladder. Embed and map the real process, including the unwritten step. Build inside the tools they already use. Build agents that do the work, not a dashboard. Escalate only for judgment, and let approve, edit, or reject train the agent. Design the whole department on day one. https://www.varickagents.com/blog/ai-for-enterprise-finance-how-to-do-it-right

A sentence on that page is the exception path in one line:

> When the agent isn't sure, it sends the two likeliest POs to an analyst on Slack and asks them to determine which one is right. 15 minutes of digging time becomes thirty seconds for a yes or no, with all the information surfaced ahead of time.

"AI Transformations" says the company "gets used to handing off busy work to AI and owning real work." The first workflows they scope are accounts payable, procurement, sales, and operations. https://www.varickagents.com/blog/ai-transformations

The same essay's test for a first workflow: it happens often enough to matter, it has repeatable decisions, the context is spread across systems, and the pain can be measured before and after. "Take it from an agent company — please do not put agents in every workflow."

### Ideal customer and industries

Homepage: "Varick deploys AI agent systems inside Fortune 500 organizations and large enterprise teams." Functions named on that page: Finance Operations, Procurement, Revenue Operations, Compliance & Risk, and "…AND 300+ ADDITIONAL ENTERPRISE WORKFLOWS." The three agent blocks are Finance Ops, Revenue Ops, and Logistics Ops. Systems named there and on the studies: NetSuite, Oracle, Ramp, Concur, Snowflake, Excel, Salesforce, Gong, Clari, DocuSign CLM, Slack, CPQ, Tableau, Highspot, SAP ECC, Manhattan WMS, Blue Yonder, Ariba.

The essays do not share one revenue floor. Quoted as printed:

- "between $500M and $100B in revenue, 1k to 100k employees." https://www.varickagents.com/blog/don-t-apply-ai
- "companies doing over $500M in revenue." https://www.varickagents.com/blog/ai-adoption-is-a-myth
- "companies doing over $1B in annual revenue at this time." https://www.varickagents.com/blog/solving-the-ai-adoption-problem
- "over a billion dollars in revenue," and "engagements for July." https://www.varickagents.com/blog/ai-transformations
- "new clients doing over $2B in revenue starting June 1, 2026." https://www.varickagents.com/blog/if-ai-is-so-great-why-isn-t-it-working
- "from $1B in revenue all the way up to Fortune 500 giants doing over $50B." https://www.varickagents.com/blog/ai-for-enterprise-finance-how-to-do-it-right

The homepage FAQ does not state a minimum. A person who only reads the homepage is not told any of those floors.

**INFERENCE:** the buyer they are writing for already runs a finance, sales, or operations department large enough to have a controller, a deal desk, and several systems of record. A 50-to-200-person local operator is outside that copy. The closest industry language is in "AI's Biggest Winners Have the Lowest Margins," which names manufacturers, trucking, distributors, staffing, field service, facilities, and clinics, and then describes a logistics company whose coordination layer "added up to nearly 10% of revenue." That is still not a single repair shop. https://www.varickagents.com/blog/ai%E2%80%99s-biggest-winners-have-the-lowest-margins

### Proof and how a case study is built

Three studies are public, unnamed, and built the same way: a revenue and headcount badge, the stack, the challenge, a four-week audit, an architecture by sub-function, a four-month implementation table, result tiles, then a value table with a methodology column and a note that cross-department effects are excluded.

| Study | Named? | What the page leads with | Outcome number on the page? |
| --- | --- | --- | --- |
| Finance, https://www.varickagents.com/case-studies-finance | No. "$4B REVENUE INDUSTRIAL MANUFACTURER", "PE-BACKED", "280-PERSON FINANCE ORG". Profile: "$4B", "3,200 employees", "14 entities across 6 countries". | Month-end close and AP exceptions | "7-9 Days / Month-End Close (from 18-22)". "<50 / AP Exceptions at Close (from 600-800)". "0.3% / Intercompany Error Rate (from 4%)". "-11 Days / Days Sales Outstanding Improvement". "7:00 AM / Daily Cash Position (from 10:30 AM)". "Day 2 / FP&A Variance Analysis (from Day 10)". "ROI: $11.4-$14.7M Year One Value". |
| Sales, https://www.varickagents.com/case-studies-sales | No. "$2.8B ARR ENTERPRISE SAAS", "PRE-IPO", "420-PERSON SALES ORG". "4,600 employees". | Cycle time and rep admin | "6.5 Months / Sales Cycle (from 9 months)". "6 Days / Internal Idle Time (from 23 days)". "14% / Rep Admin Time (from 38%)". "+/- 11% / Forecast Accuracy (from +/- 25%)". "+6 pts / Large-Deal Win Rate Improvement". "Same Day / CS Handoff (from 10-15 days)". "ROI: $16.5-$24.5M Year One Value". |
| Operations, https://www.varickagents.com/case-studies-operations | No. "$3.5B REVENUE CONSUMER GOODS MANUFACTURER", "9 DCS", "340 SUPPLIERS". "5,200 employees", "380-person operations org". | Disruption response | "<6 Hours / Disruption Response (from 2-4 days)". "2.9% / Stockout Rate (from 6.8%)". "86% / SKU Forecast Accuracy (from 71%)". "4% / PO Amendment Rate (from 23%)". "-22% / Inventory Carrying Costs". "Same Day / Returns Disposition (from 5-7 days)". "ROI: $10.1-$13.7M Recurring + $9.3M One-Time". |

The finance caveat is the one to copy, not the dollar range:

> All value estimates use conservative assumptions: fully-loaded employee cost of $130-160K (varies by role), year-one realization discounted to 70-85% for ramp, and revenue attribution held to directly measurable outcomes. We show our math and encourage clients to stress-test with their own assumptions.

The sales page says revenue attribution uses "historical pipeline velocity and conversion rates" and "Win rate improvement measured against matched control cohort," discounted to 70–85% for year one. The operations page separates the $9.3M working-capital release as one-time. All three say the cross-department effects are not in the total.

The finance value table counts "Headcount redeployed (11 AP, 4 AR, 1 Treasury = 16 positions)" at "$2.1-2.6M". The audit plan for the same badge ("$4B Industrial Manufacturer · 280-Person Finance Org") says "Labor redeployment means shifting hours from manual coordination to higher-value work. Not headcount reduction," and prices that line at "$9.2M" inside a "$16.8M" projected year. https://audit.varickagents.com/demo/plan. The public study's year-one total is "$11.4-$14.7M". The finance engine's discovery chapter models "$11.6M" split as cost, revenue, and risk. https://demo.varickagents.com/client-001/discovery. Those three totals are all on the saved pages. They are not one number.

A second finance result lives only in an essay, with no client name: "we took one client's month end close from 12 days to 5. Simultaneously we reduced error rates by 72%. The value capture was upwards of $45M annually." It also says "100% of Varick's finance department implementations have successfully been deployed into production, with measurable positive ROI (average is 5.5x)." https://www.varickagents.com/blog/ai-for-enterprise-finance-how-to-do-it-right. "Don't Apply AI" adds a rollup: "the value delivered across this set of deployments was over $100M. The best part is that this number was co-created with our clients." The set it lists is the close (18–22 to 7–9), disruptions under 6 hours, idle deals (23 days to 6), rep admin (38% to 14%), AP exceptions (600–800 to under 50), media budget ("8-12%"), and payroll corrections ("fell 90%"). https://www.varickagents.com/blog/don-t-apply-ai

The demo index is public and shows eight more cards. Each card says "Access code required." The pages behind them are password forms. The teasers below are the index text only. https://demo.varickagents.com/

| Index card | Teaser on the index | Body fetched? |
| --- | --- | --- |
| Omnichannel Home Goods Retailer | Average time on hold, "7 hours / from 28 hours". "Promotion setup errors down 86%, held orders cleared in 7 hours". | No. Access-code wall. |
| Independent Oil and Gas Producer | "Field ticket to approved / 4 days / from 18 days". "95% of deviations filed on time". | No. |
| Large Regional Bank | "Payment exception resolved / 1.5 days / from 4.5 days". "aged suspense down 79%". | No. |
| 9-Hospital Health System | "Offer to cleared for orientation / 6 days / from 19 days". "agency overbilling recovered". No dollar. | No. |
| Industrial Manufacturer | "Match exception cleared / 2 days / from 13 days". | No. This card is not the $4B finance study's headline. |
| Global Real Estate Investment Manager | "Year end to final tenant statement / 13 weeks / from 31 weeks". | No. |
| Global B2B Software Company | "Deal desk request / 8 hours / from 3 days". "Four sales workflows return $25.9M and 104,000 hours a year". | No. |
| Global Professional Services Firm | "Cost per invoice / $6 / from $13". | No. |

The engine demos retell the three public studies and add a company label the case-study pages do not use: "Industrial Manufacturing Corp", "Enterprise SaaS Corp", "Consumer Goods Manufacturer". The sales engine says "3.5-Month Implementation". The sales case study says four months. The finance engine's outcome page says "PE sponsors own the agents" and "Walk away anytime / Zero vendor lock-in. Keep everything if the engagement ends." The sales and operations engines say "The client owns the agents" and do not mention a sponsor. https://demo.varickagents.com/client-001/outcomes and the sibling outcome URLs.

The audit demo names fourteen people (David Chen, CFO, through Carlos Medina, Tax Analyst) and a February 2026 calendar. The public finance study does not use those names. This teardown does not treat the names as verified employees. https://audit.varickagents.com/demo

"AI Transformations" ties "$25m in value in the first year" to "a multibillion-dollar revenue enterprise software company" whose "large deals touched six teams across eleven handoff points." The sales study uses "6 teams across 11 distinct handoff points" and a year-one range of "$16.5-$24.5M". The pages do not say the $25m, the $25.9M card, and the $16.5–$24.5M range are one engagement. They are not combined here.

Homepage proof that is not a client: the visible line "Built by engineers from," with no firm name in the saved text. The essays name Vas Moza's time at Meta and, in the FDE hiring close, "a former COO of Citadel Securities." Those sentences are not a client logo.

## Sales and marketing

### Positioning

1. Category: "Transform Your Enterprise With AI."
2. Outcome: whole departments, end to end, on the systems already in place.
3. Enemy: a single email automation, generalized software, an 18-month migration, copilots and seats that employees do not use.
4. Mechanism: an audit, a redesign, agents in production, then optimization. Under that, code for the deterministic steps, a model where there is judgment, a person on the exception, evals, and a log.
5. Commercial: no public price. The call, then a number, then "usage-based" on the sample plan.
6. Proof: three unnamed department transformations with a methodology column, plus eight locked cards.
7. Who it is for, said in the essays more than on the homepage: a company at the revenue floors above.

Lines worth keeping, each with its page:

- "A single automation that answers emails isn't transformation." https://www.varickagents.com/
- "No generalized software that only does half the job." Same page.
- "escalates to humans only when judgment or approval is needed." https://www.varickagents.com/what-does-varickagents-do-differently
- "They just want the work to be done." https://www.varickagents.com/blog/solving-the-ai-adoption-problem
- "But the final action is still gated by that human." https://www.varickagents.com/blog/don-t-apply-ai
- "The company gets used to handing off busy work to AI and owning real work." https://www.varickagents.com/blog/ai-transformations
- "please do not put agents in every workflow." Same essay.
- "If your agent only handles the documented process, it breaks the first time it encounters a case Brittany handles with tribal knowledge." https://www.varickagents.com/blog/ai-for-enterprise-finance
- "We show our math and encourage clients to stress-test with their own assumptions." https://www.varickagents.com/case-studies-finance

Voice on the homepage is short, second person, and department-sized. The essays are longer, first person, and willing to name a bad alternative (Copilot seats, a point-solution stack, a slide from a consultancy). Vas Moza signs the strategy posts as CEO. Other bylines on the fetched posts: Eyad Khrais, Daniel Kornum, Ibrahim Ahmed, Grey Luo, JD Pruett. "Spend Less Tokens" calls Daniel the person who "runs our FDE team."

The homepage also says "Only AI Native Orgs Will Survive." That line is a different tone from the finance study's math.

### Funnel and CTAs

Primary action: "Book a Call" and "Learn more" open `https://cal.com/team/varick-agents/discovery-call`. The public event, fetched and not booked:

> A quick call to understand where your team's time is spent on manual work, and whether there's a fit to work together. We'll talk through processes slowing you down and how we'd approach an AI transformation.
>
> It helps to come with a workflow or two in mind that's eating real hours. If this call reveals a good fit, the next step is a formal audit.

The page shows "30m". It does not ask revenue, headcount, or budget. No time was selected.

Homepage FAQ, "What happens during the discovery call?":

> The discovery call is a working session where we review how operational workflows currently run inside your organization. From there we identify areas where an AI agent could realistically execute work, what systems it would need to interact with, and what a deployment timeline would look like.

Paths a visitor is offered:

1. The calendar, from the header, the hero, and the footer.
2. The newsletter. One email field. "Join 50,000+ Readers." The page has no issue list. Not submitted. https://www.varickagents.com/newsletter
3. Support. "Send us a message and we'll get back to you within one business day." Fields: full name, work email, subject, "How can we help?" The form posts to `mailto:contact@varickagents.com`. Not submitted. https://www.varickagents.com/support-varick
4. A privacy request form: access, delete, correct, or other. Not a sales form. https://www.varickagents.com/privacy
5. The essays, which close on the same site and, in several cases, on a dated cohort.

There is no ebook, whitepaper, or assessment wizard. "AI Agents 102" says "book a free AI audit at varickagents.com." The homepage calls the first step an audit and does not call it free. The booking page calls the next step "a formal audit" and does not say free.

The essays qualify harder than the form. They also disagree with each other about which month is open and which revenue is in. As of this crawl those lines include June 1 2026 at over $2B, July at over a billion, August at over $1B, August and September for sponsors, and "the fall cohort." **INFERENCE:** a reader cannot tell which cohort is the current door. The homepage does not mention a cohort at all.

### Content and trust

The blog is sixteen essays. The index groups them as Business, Engineering, Finance, and Tech. The long posts are the sales argument: why seats fail, why the audit comes first, how a finance department should be rebuilt, what an FDE does, what an eval is. They are not "what is RAG" articles. The newsletter page claims a weekly briefing and does not show one.

Trust order on the homepage: the department promise, a logo row with no readable names, the four steps, three outcome claims (overhead, speed, hiring), the function list, three agents with capabilities, one unsigned quote ("Enterprise operations were designed for human coordination. The next generation will be designed for intelligent execution."), the FAQ, then the calendar. The case studies are a click away, not the first screen.

The privacy notice says the site may share information with Google Analytics. This pass did not open a tag container.

## What Wil Sensing should steal or adapt

Ranked. Each item maps to the offer he already has: fit call, credited Job map, build, autonomy ladder.

1. **Fit call: 30 minutes, and ask for one ugly job.** Their booking line is the right size. "Come with a workflow or two in mind that's eating real hours." His call can ask for the job, who owns it, and where the source of truth sits (the PO file, the vendor statement, the DMS screen). Their next sentence sends the buyer into a formal audit. His next sentence is the paid Job map, credited toward the build. He should say that on the call. He should not add their revenue question. They did not put one on the calendar either. The floors live in the essays.

2. **Job map: write the seven details, for one job.** Happy path, exceptions and what share of volume they are, upstream and downstream, which system wins when two disagree, touch time versus elapsed time, the baseline number, and who still decides. That is "Don't Apply AI," scaled to a shop. The repair-shop match already has an owner, a source file, and a definition of a correct result (a credit that was missed, across 11,139 lines). The map should say what the person still does after the build. Their line for that is the 40 minutes of hunting versus the 30-second decision, with the person gating the action.

3. **Job map: sort the steps before anyone talks about a model.** Deterministic, agent, human. Their invoice example is a three-way match that either clears or lands on a person with three choices. His vendor-credit job is the same sort: the lines that match on the rules, the lines an agent should pair, and the lines a person has to see. "Please do not put agents in every workflow" is the sentence that keeps the map honest.

4. **Job map: agree the measure in the map, in the finance study's shape.** Before, after, the unit, the assumption, and what is excluded. For him the unit can be credits found, lines matched, hours the person no longer spends, and the exception rate the person still handles. Their study shows the math and tells the client to stress-test it. His $217K paragraph should say what the figure includes and what it does not. He should not print "they never paid more than the value created" until he can score the unit. Their pages do not score it either.

5. **Build: one job, in the system the company already runs.** "No migrations" is the homepage promise worth keeping, translated. The system he already runs is the DMS, QuickBooks, or the vendor portal. Their stack names (NetSuite, SAP, Salesforce) are the enterprise version of that sentence. The build deliverable, in their audit's language, is the workflow running, a log of what the agent did, and a person who can approve, edit, or reject. He does not need their five sub-agents or their VPC diagram to say that.

6. **Ladder: headless, then governed, then a person on the exceptions.** Their control-plane sentence is the governed rung: the owner can see what is running, pause it, change a rule, and pull the exception back, without learning a new product. The background-agent sentence is the headless rung: nobody has to open a chatbot for the invoice to be matched. Agent-to-agent is their finance agent flagging a procurement problem, and they are careful to leave that value out of the ROI table. He can name the rung and stop. He should not sell a department operating layer on day one. Their own failure essay says the first workflow should be the one that ships, and the next one should be faster because the first one exists.

7. **Ongoing: a rung he can stop, not a usage meter he has not defined.** Their sample plan calls phase 3 "Usage-based" and does not show a rate. His ongoing work is the next rung on a job he has already mapped. Month-to-month is the posture that fits an owner. He should not invent a usage price from their label.

8. **Proof: one field note, tied to the job.** Their blog is a CEO writing the argument once, at length, from work they say they have done. The useful piece for him is one note: the job, what was written down, the number, what the person still checks. He should not staff a sixteen-essay machine, and he should not claim "300+ additional" workflows.

9. **The low-margin essay's one transferable point.** The cost they describe is "the work behind the work": dispatch, exceptions, invoices, claims. That is a service advisor, a warranty clerk, or a parts counter, not a 280-person finance org. Use the idea in the fit call. Leave the trillion-dollar frame and the 10% of revenue anecdote unless he has measured it in a shop he can name.

## What not to copy, and why

- **The buyer.** Fortune 500, "$500M to $100B," "$1B," "$2B," "1k to 100k employees," a 280-person finance team. Publishing any of those floors would tell his actual buyer the offer is not for them. The homepage never states a floor, and the essays state six. Copying the set copies the contradiction.
- **A four-week embedded pod, and the "<20 hours" line next to it.** The FAQ says the client's people spend under 20 hours in total. The studies and the audit demo show multi-week shadowing, fourteen interviews, and a forward deployed engineer on site. He is one person. A four-week embed inside a department is their delivery model. His is a fit call and a credited map.
- **Their dollar ranges as if they were his proof.** $11.4–$14.7M, $16.5–$24.5M, $10.1–$13.7M plus $9.3M, $16.8M projected, $11.6M modeled, $25m, $25.9M, $45M, "over $100M," average 5.5x, "nine-figure efficiency gains." The pages do not reconcile them. An owner who asks "which number?" has them. His number is $217K and 11,139 lines, if he writes the caveat.
- **"They never paid more than the value created."** It is on the demo outcome pages. It is not a defined guarantee. The homepage does not say it. A promise he cannot score becomes the first objection.
- **Headcount dollars counted as value, while the plan says "Not headcount reduction."** The finance study prices 16 redeployed positions at fully loaded cost. The plan prices labor redeployment at $9.2M and says it is not a layoff. He should not quote a salary as cash recovered. Credits found are cash. Hours given back are hours.
- **"100% of our clients deploy to production. 100% come back for more."** No list, no date, no denominator. The finance essay's "100%" and "5.5x" are the same kind of sentence. He has one shop story. One story with a caveat is stronger than an unlisted 100%.
- **The access-code library and the unnamed-but-labeled demos.** Eight studies are teasers until someone has a code. The engines rename the public studies ("Industrial Manufacturing Corp") and the audit demo adds staff names the case study does not. Using that pattern would make a one-client practice look like it is hiding the client. If the repair shop cannot be named, say "a local shop" and keep the numbers, and say so.
- **Department transformation as the unit of sale.** "We Transform Departments" and "300+ additional enterprise workflows" is a staffed firm selling a function. He sells a job, then the next rung. Their own essay says not to put an agent in every workflow, and then the homepage says the opposite scale.
- **"Only AI Native Orgs Will Survive."** It scolds. His buyers are owners of going concerns. "Hand off the busywork. Keep the decisions." already says the offer.
- **The diagnosis agent as the thing that learned the company.** One demo says a diagnosis agent scanned the operation in two to four weeks. The case study and the audit demo say people sat with the team. He learns a job by sitting with the person who does it. He should not imply a product did the interview.
- **Computer-use as a casual integration method.** The finance engine lists "API Integration, Computer Use, File & Email Ingestion." This teardown does not adopt computer-use as a technique. His version of "no migration" is: work in the system the shop already trusts, and a person still approves the exception.
- **Cohort scarcity that does not agree with itself.** June, July, August, September, and "the fall," each with a different revenue line, on a site crawled in October 2026. A one-person practice that copies rotating deadlines will spend the fit call explaining the deadline.
- **The empty weekly newsletter with "50,000+ Readers."** The page is an email box. There is no public issue. He should not claim a list he does not have. One field note from a job he has done is the content that fits.
- **Salary bands, equity, and a $1M commission as trust.** The careers page is a hiring poster for San Francisco. It is evidence they are building a bench. It is a poor homepage for a practice of one.
- **Private equity, held to the section below.** Portfolio companies, hold period, exit multiple, EBITDA, sponsor engagements. Different buyer. Different sale.

## Private equity

**Noted for reference, NOT our strategy for now.**

It is a real lane on this site, and it is not his.

The finance case study is badged "PE-BACKED". The finance engine says "PE sponsors own the agents" and "Full compliance with PE sponsor security policies and SOX requirements." The sales study is badged "PRE-IPO". The sales and operations engines say the client owns the agents. The homepage does not mention private equity.

The essay is the offer, https://www.varickagents.com/blog/private-equity%E2%80%99s-ai-problem, by Daniel Kornum:

> Today, the dominant use case of AI in PE is operational efficiency: automating manual work, reducing cost, and thus expanding EBITDA margins. Improving operational efficiency directly drives PE returns through increased earnings, but two other critical levers are usually left untouched: the exit multiple, and the holding period over which value is realized.

The play they describe is two steps: standardize a workflow inside each company, then group portfolio companies that share that workflow and deploy one pattern across the group. They say a four-company sketch starts above 100 deployments and, after consolidation, "requiring only 3 reusable AP Agents." The return language is EBITDA, a higher exit multiple, and a shorter hold inside a "5–7 year" window.

The close of that page:

> Varick agents run in production today inside portfolio companies of leading private equity firms. We are now taking on sponsor engagements for August and September.
>
> If you are a private equity firm with portfolio companies above $1B in revenue ready for AI transformation, whether you are preparing an asset for exit, folding in add-ons, or standardizing operations across the portfolio without forcing a software migration, book a discovery call at varickagents.com.

No fund is named. No portco is named. The discovery link is the same site as every other call.

The X hiring post asks for "1+ years in startups / PE / banking / consulting." That line is quoted in the X section. It is the same label.

**INFERENCE:** the only shape that would survive stripping the sponsor out is "one measured job becomes the offer for the next similar company." For Wil that next company is another shop or dealer, not a fund. The sentence is not a reason to add private equity to his homepage, his industries, or his fit-call script.

## X evidence

Two posts, both by @vasuman, fetched into `research/ai-specialists/_x/posts.md`. The blog calls Vas the CEO and tags @varickagents. The footer of the site links `x.com/varickagents`, which was not fetched. These two posts are not pages on varickagents.com.

### The department list

https://x.com/vasuman/status/2112312466726060128, 19 October 2026. The post opens:

> The biggest AI workflows, ripe for agent-ification in each department, that we've seen at Varick:

Finance, as written:

> a. Manage AP exceptions: most AP teams are managing 600-800 exceptions a month where invoices don't match POs or receipts and require manual resolution
>
> b. Automate your month end close: background execution of bank recs, accruals, intercompany, etc. can get your close cycle from 18-22 days to 7-9 days
>
> c. Cash application and collections: automate matching remittance advice to open invoices and getting customers to pay on time

The 600–800 and the 18–22 to 7–9 are the finance case study's result tiles. The post states them as what "most AP teams" and "your close cycle" look like. The case study states them as one $4B manufacturer.

The post then lists Sales Ops (reps "spend 38% of their time updating Salesforce"; deals "take 23 days to get discounts, pricing, etc. approved"; forecast-call prep), HR (payroll changes across ATS, HRIS, and payroll; "up to 80% of inquiries" for PTO, benefits, and policy "without human intervention"; onboarding from offer to day 1), Legal (first-pass redlines "from 5+ days to same day"; contract intake; renewal dates and notice periods), Operations (disruption "from a week-long process" to "a few hours"; order exceptions such as credit hold, a bad ship-to, or no inventory), Procurement (supplier onboarding "from 26 days to 4"; three-way match), IT (access on day 1 "instead of day 4"; "1 in 3 IT tickets are routed to the wrong team"), Marketing (inbound demo requests "in under 5 minutes"; "8-12% of media spend that is lost"), and Customer Operations (escalations routed once; case summaries so engineering does not send the case back).

The close:

> All of these can be run in the background using your existing systems (NetSuite, Salesforce, SAP, ServiceNow, Dynamics, etc.) and exceptions can be routed to your people.
>
> If you can solve these for your clients, you'll make them very happy.
>
> But in order to succeed across the entire company, you have to go about this systematically.

What the site does not carry as this list: ServiceNow, supplier onboarding from 26 days to 4, legal redlines from 5+ days to same day, IT joiners and the 1-in-3 ticket line, speed-to-lead under 5 minutes, and order exceptions named as credit hold, address, and inventory. "Don't Apply AI" does use the 600–800, the 18–22 to 7–9, the 23 days, the 38% to 14%, the 8–12% media figure, "80% of employee support queries," and payroll corrections down 90%. The sales study's 38% is "internal work," not "updating Salesforce" alone, and its 23 days are "idle time," not "to get discounts, pricing, etc. approved." The operations study's disruption time is "2-4 days" to "under 6 hours," not "a week-long process."

**INFERENCE:** the post is a catalog for people who sell this work, written broader than any one page. The finance and sales numbers are the case studies, loosened. The IT, legal-turnaround, and supplier-onboarding lines were not found on the pages crawled. Wil should treat the post as a menu of job shapes, and only repeat a number he can point at a saved page or at his own shop.

### The HITL and evals stance

https://x.com/vasuman/status/2114092422112432553, 24 October 2026:

> No one is doing AI Transformation. The gap between what is possible and what is actually happening has never been wider.
>
> When we started Varick we weren't sure this industry would exist in 2 years. Now we're sure it will be here for decades.
>
> There are many "Applied AI" and "AI Transformation" firms, but most of them sell:
> - skill files
> - some Claude jobs
> - prompting workshops
>
> That isn't AI Transformation. AI Transformation is:
> - redesigning an organization based on AI's capabilities
> - agent-ifying each workflow in a department, primarily running in the background
> - HITL so agents improve themselves, with auditability, governance and evals built in

The site argues the same split without that three-line product definition. "AI Adoption is a Myth" says prompting training "is 10% of the game" and that skill files are what the power users build. "Solving the AI Adoption Problem" says the agent should run in the background and a person should still govern it. "Don't Apply AI" and the FDE essay put evals, audit logs, and the human gate on the work. The X post is the first place those three requirements sit in one sentence, and the first place "skill files," "Claude jobs," and "prompting workshops" are named as the thing Varick refuses to sell.

The same post says "We're here to drive billions in value" and "a $30T market," and it recruits in San Francisco for people with "1+ years in startups / PE / banking / consulting." The billions and the $30T are not on the pages crawled. The PE hiring line is reference only, as labeled above.

**INFERENCE:** the post is aimed at practitioners and candidates. The site is aimed at the enterprise buyer. They agree on background agents, a human on the exception, and evals. They do not agree on scale: the post says each workflow in a department, and the transformation essay says do not put agents in every workflow. Wil can take the second and third bullets (background, then HITL with a log) and leave the first (redesign the organization) and the market-size lines.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Time to a live agent | Homepage FAQ: "6–12 weeks" from discovery to a production agent. | Finance and operations studies: a 4-week audit, then 4 months of implementation. Failure essay: a 6-month path, with humans approving every action until month 4. "100x" essay: "Get to production in 3 months max." FDE essay: the first agent on a platform "takes 12 weeks," then 9, then 4. |
| Client time | Homepage FAQ: "<20 hours across all employees." | "Solving the AI Adoption Problem": "sit on site for weeks." Audit demo: 14 people interviewed across four weeks of shadowing. |
| Who does the audit | Finance study: "A Forward Deployed Engineer embedded." Audit demo: a calendar of named interviews. | Finance engine, chapter 1: "The Diagnosis Agent scans" the operation "in 2-4 weeks." |
| Revenue floor | Homepage: none. | Essays: over $500M, between $500M and $100B, over $1B, over $2B from 1 June 2026, and up to "over $50B." |
| Which cohort is open | Homepage: none. | July (transformations), August (adoption essay), August and September (PE essay), "fall cohort" (finance essay), "June 1, 2026" (failure essay). Crawled 26 October 2026. |
| Finance year-one value | Case study: "$11.4-$14.7M", with 16 positions at "$2.1-2.6M". | Audit plan: "$16.8M" projected, labor redeployment "$9.2M", "Not headcount reduction." Engine discovery: "$11.6M" modeled. |
| The other close | Finance study: 18–22 days to 7–9. | Finance essay: a client's close "from 12 days to 5," errors down 72%, "upwards of $45M annually." |
| Sales value and length | Case study: "$16.5-$24.5M", 4 months, idle time 23 days to 6. | Transformations essay: "$25m" and eleven handoffs. Demo index card: "$25.9M and 104,000 hours" and deal desk from 3 days to 8 hours, body not fetched. Sales engine: "3.5-Month Implementation." |
| Who owns the system | Finance engine: "PE sponsors own the agents." | Sales and operations engines: "The client owns the agents." Privacy notice: deployed in the client's cloud. |
| 38% and 23 days | Sales study: 38% of time on internal work, 23 days of idle time. | X post: "38% of their time updating Salesforce," and 23 days "to get discounts, pricing, etc. approved." |
| AP exceptions | Case study: under 50 at close, from 600–800, for one manufacturer. | X post: "most AP teams are managing 600-800 exceptions a month." |
| First step free or not | "AI Agents 102": "book a free AI audit." | Booking page: the call reveals fit, "the next step is a formal audit," price unstated. Homepage: pricing after the discovery call. |
| Migrations | Homepage hero: "No 18-month timelines or migrations required." Deployment block: "no migrations are required." | Same page, systems section: "We'll never force you to migrate off your systems, but will help you through the process if you'd like." |
| Production claim | Careers: "100% of our clients deploy to production. 100% come back for more." | Finance essay: "100% of Varick's finance department implementations" reach production, "average is 5.5x." No client list on either page. |
| Company name | Public studies: unnamed, with revenue badges. | Engines: "Industrial Manufacturing Corp", "Enterprise SaaS Corp", "Consumer Goods Manufacturer". Audit demo: named staff the study does not list. |

Questions this crawl does not answer, and should not be filled in:

- What a buyer pays. No fee, rate, or usage price was published. Whether the audit is free, credited, or billed is not stated in one place.
- Whether "usage-based" means tokens, workflows, or a monthly rung. The plan uses the label and stops.
- Whether the $25m, the $25.9M card, and the $16.5–$24.5M sales range are one client. The pages do not say so.
- Whether the repair-shop equivalent of their exception log is something Wil's buyer will read. Their finance study would. Their homepage would not, because the homepage does not show the math.
- How far up the ladder he should speak on a fit call. Their X post says every workflow in the department, in the background, with HITL. Their transformation essay says not every workflow. His ladder already has a stop: humans handle the exceptions. The site does not tell a 50-person dealer where to stop, because it never speaks to one.
