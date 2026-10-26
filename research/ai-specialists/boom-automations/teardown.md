# Boom Automations strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no fields typed, no call booked, no checkout, no newsletter signup.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer, in order, is a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The line is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided.

Boom Automations (Luke Pierce) is the closest public match to that sequence. The match is the delivery order, not the company they are selling. Two businesses share the name. The marketing site sells a department operating system to operators. The founder page, the playbook host, and one of the two X posts sell a coaching program to people who are building AI agencies. Every important claim below is quoted from a page saved under `research/ai-specialists/boom-automations/pages/` or from the two Boom posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those surfaces.

## Top 5 takeaways

1. **Steal the sequence they use to describe the job. Leave the company-wide operating system.** The 4 October 2026 hiring post on X lists the forward-deployed role as embed, map, build, then ongoing improvement and enablement. That is Wil's offer order. On the site the same shape is four layers of "one operating system," sold to a department and then the next department. His version stays one job, in the system the shop already runs. Source: https://x.com/BoomAutomations/status/2106796348368683433 and https://boomautomations.com/

2. **Put the map in the paid Job map. Their discovery call tries to be the assessment.** The homepage FAQ says the discovery call maps how work moves, picks the highest-ROI workflows, and lasts 45 minutes. The thesis says that assessment is step one of every engagement. The page after the application calls the same meeting a 30-minute consultation. Wil already splits this: a free 30-minute fit call, then a paid map that is credited toward the build. Keep that split. Steal their sentence that they will say so when it is not a fit. Source: https://boomautomations.com/ and https://boomautomations.com/thesis

3. **No dollar price for the operating system is published. Do not copy the 90-day guarantee.** The marketing FAQ says pricing is discussed after the discovery call, and that a typical engagement costs 80–90% less than the equivalent full-time headcount over 12 months. It does not give a dollar. The guarantee is "measurable results" within 90 days, and the page never says what is measured. The only dollar a buyer can pay from a public page is $1,250 for an hour with Luke, which is a different product and is credited toward "Boom or the Inner Circle," not toward a Job map. Source: https://boomautomations.com/ and https://lukepierce.boomautomations.com/call

4. **Name the client and the unit. Do not copy the company count.** The homepage cards name nine companies and attach a percent, an hours figure, or a quote count, plus an implementation length in weeks. The quotes do not name a person, and they do not say what the percent includes. The same page says "95+ companies." The logo row has 48 logo files. The X post says "90+." The founder card says "80+." Wil's $217K and 11,139 lines is a clearer owner proof if he writes the caveat. Source: https://boomautomations.com/

5. **The founder page is a second business, for people building AI agencies. Leave it.** The 25 October 2026 X post tells agency operators to book at least 25 sales calls a month across 6 channels. The 180-day plan on the playbook host lists 7 channels and a scorecard of about one discovery call a week. The Inner Circle is a 6-month coaching program with its own guarantee. None of that is the embed-map-build-ongoing sale, and none of it is a fit for a one-person practice whose buyer owns a shop. Source: https://x.com/lukepierceops/status/2114497167205494947 and https://playbook.boomautomations.com/180

## Method and coverage

The marketing site is a Vite single-page app. `sitemap.xml` returns HTTP 404. `llms.txt` returns HTTP 404. `https://boomautomations.com/wp-json/wp/v2/pages` returns the same HTML shell as the homepage. `robots.txt` allows all user agents. There is no canonical link on the pages saved. Bodies were taken from headless Chrome after the app rendered. The first crawl followed in-page links and the crawler's usual seed paths.

Pages with real copy on `boomautomations.com`:

- Homepage, four solution pages, thesis, apply, careers, thank-you, application-received
- Soft 404s, saved and not counted against the page budget: `/about`, `/about-us`, `/services`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/privacy`, `/privacy-policy`. Each shows H1 "404" and "Oops! Page not found."

Case studies are not URLs. "Case Studies" in the nav is `#case-studies` on the homepage. The nine stories are cards. Client-side redirects, saved in `client-redirects.txt`: `/solutions/evaluation-optimization` lands on ongoing management, `/solutions/current-state-assessment` and `/solutions/ai-native-operating-system` land on OS build-out, `/solutions/ai-agents` lands on agent deployment, `/approach` lands on the thesis.

The homepage FAQ is an accordion that keeps one answer open, and the result counters stay at 0 until they scroll into view. `index.txt` is the crawler's first render, so the counters read 0% and the FAQ shows questions only. `index-expanded.txt` is the same URL after a scroll and after each disclosure was opened. No form was submitted. Quote the counters and the FAQ answers from `index-expanded.txt`. The bullet lines under each card ("95% faster processing," "6 weeks implementation") are already in `index.txt`.

`apply.txt` was saved before the chat finished drawing. `apply-waited.txt` is the same URL after the first message appeared. Nothing was typed. Later questions do not render until an answer is typed, so they are not on that render. `apply-question-script.txt` is the question list shipped in the public bundle `https://boomautomations.com/assets/index-dsrhWyIn.js`. It is labeled as source, not as a conversation that happened.

The founder host `lukepierce.boomautomations.com` is a second Vite app. The crawl names files by path, so that run replaced the marketing homepage, the careers page, and the seeded soft 404s. Those marketing files were fetched again and put back. The founder copies are the `lukepierce__` files, and `crawl-log.tsv` points at those names. Founder paths `/about`, `/services`, `/pricing`, `/case-studies`, `/contact`, `/blog`, `/careers`, and `/privacy` are soft 404s with H1 "404". `/call` and `/book` are real routes the homepage opens with a button, not an `<a href>`, so the first founder crawl did not see them. They were fetched afterward. The Book Now button was not clicked. Nothing was paid. `/book` tells a person who has already paid to pick a time. The calendar widget rendered no slots. The bundle points that widget at `https://calendly.com/REPLACE_ME`, which is a placeholder, so there was no public Calendly event page to fetch. `/unsubscribe` was not fetched. It is an email opt-out route, not a sales page.

The founder homepage links the lead magnet at `https://playbook.boomautomations.com/playbook`. That host was crawled because the brief says to fetch a real lead magnet rather than describe a page that was not opened. The email forms were not submitted. The gate URLs are `/playbook`, `/case-studies`, `/180`, and `/newsletter`. The full playbook and the full 180-day plan are also public at `/master-playbook` and `/180-plan`, both `noindex`. Those two were fetched. This teardown uses them for how the second offer is sold, the price bands they teach, and the places they disagree with the X post. It does not catalog the scripts, the channel sequences, or the day-by-day checklist. Seed paths on that host other than `/case-studies` returned empty bodies and were not kept. `crawl-log-playbook.tsv` is that host's log. `crawl-log-1.tsv` is the marketing-site log, including thank-you and application-received. `crawl-log.tsv` is the founder host.

Not crawled on purpose: X profiles beyond the two saved posts, LinkedIn, the Whop checkout, Calendly's placeholder URL, and the Inner Circle payment step. The NYSE and Tech 2.0 mentions are captions on the homepage. The pages crawled do not link a press article.

## 1. Product

### What they sell

Homepage title: "Boom Automations | AI Agent Systems for Enterprise." Meta description: "A custom AI operating system your company and its bespoke agents run on, live in 90 days. Then we make your team AI-native." H1: "We make companies AI-native." https://boomautomations.com/

> Boom builds a custom AI operating system your company and its bespoke agents run on, live in 90 days. Then we make your team AI-native: they run the system, and they use AI in their own work, every day. Clients cut manual work in half. Some cut it by 95%.

Four trust chips under the hero: "Enterprise-grade security," "90-day guarantee," "Deployed on your cloud," "Quarterly AI enablement training, lifetime access."

The work is packaged as four layers of one system, not four projects. Homepage: "Each one is a layer of the same system, not a separate project."

| Layer | Page H1 | What the page says it is | URL |
| --- | --- | --- | --- |
| OS Build-Out | OS Build-Out | "One AI-native operating system for the company, built one department at a time, on a single context layer." | https://boomautomations.com/solutions/os-build-out |
| SaaS Consolidation | SaaS Consolidation | "The tools the OS makes redundant get retired. Fewer seats, fewer handoffs, cost out of the budget." | https://boomautomations.com/solutions/saas-consolidation |
| Agent Deployment | Agent Deployment | "Agents deployed into the OS to own whole workflows, from intake through execution to reporting." | https://boomautomations.com/solutions/agent-deployment |
| Ongoing Management & Enablement | Ongoing Management & Enablement | "After launch, we run it: measured, maintained, improved, with quarterly enablement your team keeps for life." | https://boomautomations.com/solutions/ongoing-management |

OS page, the sentence that defines the product:

> The foundation of every Boom engagement. We design and deploy one AI-native operating system for the company, starting with a single department: a constant context layer that connects your data, your existing tools, and the agents that do the work. Each department we add runs on the same layer. Nothing depends on a person carrying information between apps.

Inside that, the homepage order is deliberate:

> 01 Consolidate. We retire the tools the department no longer needs.
>
> 02 Automate the simple work. Low-cost automations for everything that doesn't need AI at all.
>
> 03 Deploy agents. Agents own workflows end to end: token-aware, with model routing, and with full observability and evaluation so every agent keeps improving after launch.

The OS page repeats the cheap-automation rule: "Low-cost automations first, for the work that doesn't need AI and shouldn't pay for it."

Agent page, the workflows they name:

> Finance: reconciliation, AP/AR, month-end close
>
> Revenue: CRM hygiene, pipeline reporting, follow-up
>
> Operations: intake, routing, exception handling

And: "Purpose-built agents deployed into your operating system to own whole workflows: intake, execution, exception handling, and reporting. Not a single step."

**INFERENCE:** "exception handling" here is something the agent owns. The homepage before-and-after line is softer: "Exceptions routed before anyone notices." The two sentences do not say whether a person still decides the exception. Wil's ladder says the person does.

Ongoing page: "Managed, not handed off." The thesis uses the same three words. The hiring post on X says the engineer owns the build "from kickoff through handoff, ongoing management & enablement." Both wordings are in the sources. They are not the same offer.

### Prices and the guarantee

No dollar amount for the operating system appears on the marketing pages, the solution pages, the thesis, the careers page, or the application pages.

FAQ, from the opened disclosure on https://boomautomations.com/ :

> Engagements are priced based on workflow complexity, system integrations, and deployment scope. Pricing is discussed after the discovery call once we understand the operational requirements. Typical engagements cost 80-90% less than the equivalent FTE headcount over 12 months.

That is a comparison, not a price. The page does not say which salary, which city, or which role the comparison uses.

Guarantee, same FAQ:

> If your agent system is not deployed and delivering measurable results within 90 days of kickoff, we continue working at no additional cost until it is.

The same FAQ, on duration:

> Most Boom deployments move from kickoff to production-deployed agent in 4-8 weeks, depending on workflow complexity and integration scope. We've never had a deployment take longer than 90 days.

The hero says "live in 90 days." The footer repeats "90 days / to a live system." The guarantee's unit is "measurable results." The duration answer's unit is "production-deployed." The page does not say whether a deployed agent that the team does not use would void the invoice, extend the work, or count as done. **INFERENCE:** a buyer cannot tell from the site what would trigger the guarantee.

The dollar that is published sits on the founder host, and it is not the operating-system engagement.

Profile card, https://lukepierce.boomautomations.com/ :

> One hour with me on AI implementation for your business or growing your agency · $1,250 · recording and notes included

Call page, https://lukepierce.boomautomations.com/call :

> $1,250 · 60 minutes · step-by-step plan included

> How it works: pay below, then pick a time on the next screen and fill out the short intake form. After the call you get the recording, my notes, and a full step-by-step plan. No pitch on the call. If you move forward with Boom or the Inner Circle within 30 days for whatever reason, the fee is credited toward it.

The call page also says "You bring the problem, you leave with a step-by-step plan" and "Real ROI numbers before you spend on a build" and "A prioritized 90-day roadmap." The checkout widget did not render a second price in the captured text. The page says "pay below."

A second set of dollar figures is in the public playbook, and it is written as instructions to other agency owners. The heading is "Bonus: The Complete Pricing Guide for AI & Automation Agencies" and "How to price your strategy, your builds, and your ROI." https://playbook.boomautomations.com/master-playbook

The guide's own packages:

> Package 1: Strategy Process ($2,000)
>
> Package 2: Implementation ($10k–$200k)
>
> Package 3: Ongoing Optimization ($2k–$15k/month)

Benchmarks on the same page, introduced as "the industry-standard ranges for high-level automation agencies":

> Simple Department Build / $8,000–$25,000
>
> Mid-Complexity Multi-System Build / $25,000–$60,000
>
> Full Operating System / $60,000–$150,000
>
> Enterprise Multi-Department Automation + Agents / $150,000–$400,000+
>
> Monthly Retainer / $3,000–$15,000

The sales script earlier in the same document says the strategy process "takes 10–14 days," "The investment is $2,000," and "Half of that applies to implementation if we move forward." The $25,000 in "Implementation costs $25,000" is inside an example script next to "This system will save you $150,000/year," not a Boom order form.

**INFERENCE:** the $2,000 and the ranges are what the playbook tells an agency to charge. They are not the price list on boomautomations.com. The $1,250 call is the only dollar attached to a pay button on a page that was rendered. The Inner Circle thank-you page says "It costs money" and does not print the number. https://playbook.boomautomations.com/playbook-thank-you

### Engagement model and deliverables

Homepage "How we work," four steps: Current state assessment, Solution Design, Build & Deploy, AI enablement & training. https://boomautomations.com/

Assessment, same page:

> We meet with key stakeholders to map how work actually moves through your organization. We identify automation opportunities, quantify time savings, and pinpoint the workflows with the highest ROI.

The bullets under that step: "Stakeholder interviews," "Workflow mapping," "Time savings quantified," "ROI opportunities identified," "Systems inventoried."

Solution design: "we either recommend existing tools or architect custom agents, whichever delivers the fastest path to your target outcome."

Build: "We build the agent system and deploy it into production. We keep what works, replace what doesn't, and ship in weeks, not in an 18-month IT project."

Training: "Every engagement includes AI-native training for the team that owns the workflow. We train your people to run, monitor, and extend the system, and to use AI in their own day-to-day work, so the capability stays in-house."

Thesis, https://boomautomations.com/thesis, names the same four steps and adds the posture:

> We sit with the people who do the work and map how the department actually runs: where the hours go, where the cost sits, which tools exist only because nothing better did.

> An agile cadence that works for your team. Short live demos where they watch each piece come together, and feedback sessions where they tell us what to change while it still costs nothing to change.

FAQ on time required, https://boomautomations.com/ :

> Typical engagements require less than 20 hours of total internal time across the entire deployment, split between the kickoff assessment, occasional context-gathering, and final training. Boom handles the architecture, build, and deployment.

FAQ on the discovery call:

> The discovery call is a working session where we map how work currently moves through your organization. We identify which workflows are highest-ROI for agent deployment, what systems they touch, and what a realistic timeline looks like. Most calls last 45 minutes.

The page a visitor sees after the Sonic application, https://boomautomations.com/application-received, calls the next meeting something else:

> The team is reviewing your application now. If it's a fit, you'll have a calendar invite for one of your slots within a couple of hours.

The three steps on that page: "We review your application," "You get a calendar invite within a couple of hours," "30-minute consultation with the team."

A second thank-you URL, https://boomautomations.com/thank-you, says "Thank you. We'll reach out within 24 hours" and "within one business day to schedule next steps." **INFERENCE:** `/application-received` is the page the current chat routes to, because the bundle sends the finished chat there. `/thank-you` is still public and still makes a slower promise. They were not merged.

Included enablement, FAQ:

> Every engagement includes AI-native training for the team that owns the workflow: how the agents work, how to monitor and audit them, how to extend them, and how to use AI in their own day-to-day. Enablement is part of the deployment, not an upsell.

Ongoing page: "Full observability on every agent, with evaluation loops that feed improvements back into the system," "New workflows added to the same OS instead of new projects," "Quarterly-updated enablement training that your team keeps for life."

### Named frameworks

Visible names on the marketing site are the four solution names, "Boom OS," "current state assessment," and the thesis. There is no trademarked framework name on those pages.

The thesis is the belief page, not a delivery trademark. H1: "Nothing matters more than adoption." Four beliefs: "Adoption and ROI are the only numbers that matter," "One-off AI tools were never the answer," "Enablement, not replacement," "The team has to build it with us."

> A system nobody uses is a cost, not a result.

> We never believed in vertical AI SaaS: a different agent for every task, a different subscription for every department, none of them sharing context.

> We do not build systems to remove people. We build them so the people you have can do more, and we train them to run what we built.

> Boom started almost five years ago with basic automations: Zapier, Airtable, the simple glue between tools a team already had. The tools have changed completely since then. The process has not. The value was never the tool.

The playbook, which is the other business, names a "3-Pillar Strategy Process" (Mapping & Diagnostics, Architecture & Recommendations, Implementation Plan) and a "SCORE" qualifier (Severity, Complexity, Operational Commitment, Resources, Expansion Potential). Those names are in the guide for agency owners. They are not on the boomautomations.com nav. https://playbook.boomautomations.com/master-playbook

### How they describe the work

Adoption is the number they want remembered. Homepage:

> We judge every engagement by one number: how much of what we built your team actually uses. Everything in our process, from the first assessment to the training your team keeps for life, is there to protect that number. Today it sits at 94%.

Under the counter: "adoption rate across the systems we deploy" and "Measured as active use by the client team after rollout." The FAQ repeats "94% of the systems we deploy are in active use by the client team after rollout." No window, no definition of active use, and no client name is attached to the 94%.

Before and after, same homepage, is the plain version of the product:

> Your team is the glue / One system runs the department
>
> A dozen tools, none of them talking / One context layer, every tool connected
>
> Handoffs that depend on memory / Full visibility across the business
>
> Reports built by hand every month / Reporting that updates itself
>
> Exceptions found when a customer calls / Exceptions routed before anyone notices
>
> A week spent on admin / A week spent on the work that matters

Tools drawn on that diagram: Slack, Salesforce, Google, HubSpot, QuickBooks, Notion. The caption: "Logos shown are trademarks of their respective owners and represent commonly integrated tools."

Security, FAQ:

> Agents operate within your existing system permissions and security policies. All actions are logged and auditable. If you have BAAs with specific AI labs, we use those models. Deployments can run entirely on your cloud.

Tools, FAQ: "Only where it pays off." "Nothing is migrated for its own sake. Every change is tied to hours saved or cost cut." Custom work: "We do not sell generic templates."

Careers, the reporting line that matches a Job map's measure, https://boomautomations.com/careers :

> Instrument what you ship and report the result back to the client: hours saved, process time cut.

### Who it is for

Homepage: "Boom has impacted 95+ companies, from asset managers to agencies to field-service companies." H2 above that: "The Premier AI Implementation Provider." Eyebrow: "Trusted by 95+ companies."

Careers: "Boom is a small team deploying AI agent systems into mid-market operations: finance, revenue, and ops."

The call page: "My team and I have built AI systems for 90+ mid-market companies."

Nothing on the marketing pages says dealership, equipment dealer, trade, Idaho, or a 50–200 person local firm. The application script's team-size options do include "51–200," between "11–50" and "201–500." Revenue options run from "Under $1M" through "$50M+" plus "Prefer not to say." Role options: "Founder / CEO," "C-Suite / VP," "Director / Manager," "Other." Those options are in `apply-question-script.txt`. They were not walked.

The closest industry words on the homepage itself are the Stryker card ("roofing operations," "field operations automation") and the logo alt "Kevin's Tree Service," which has no case card. The 180-day plan, written for people starting an agency, has a home-services offer. Quoted in the sales section. It is not the homepage ICP.

### Proof and how a case study is built

Homepage section "Client results." "Some of the companies we've impacted." "Real transformation, with the outcomes to prove it. Every number here is what the client's team got back."

There is no case-study page. `/case-studies` is the soft 404. Each card is a company name, a metric, a quote with no person's name, and three bullets. The quotes are praise. The bullets carry the number. Weeks are "implementation," not a before-and-after window that is defined.

| Card | Number on the card | Weeks | What the bullets call the work |
| --- | --- | --- | --- |
| Catalyst Strategic Advisors | 95% reduction in process time. Bullet: "95% faster processing." | 6 | "24/7 automation" |
| Jack Lingo Asset Management | 83% reduction in process time. "83% faster processing." | 8 | "Automated reporting" |
| Hipstr | 87.5% reduction in process time. "87.5% faster processing." | 5 | "Creative workflow automation" |
| Stryker Digital | 75% faster project completion. "75% faster completion." | 4 | "Field operations automation." The quote says "roofing operations." |
| Sterling AI | 28 hours saved per month. The quote says "saves us 28 hours every single month." | 4 | "AI workflow automation" |
| Uvid | 40 hours saved per month | 5 | "Business automation" |
| Keru | 55% reduction in admin time. "55% less admin time." The quote says "educational administrative processes." | 6 | "Education automation" |
| Beacon Davenport | "150+ quotes monthly." Label: "Quotes Automated / Month." | 5 | "Quote automation" |
| Beanstalk Web Solutions | 80 hours saved per month. The quote says the team can "take on more clients without increasing headcount." | 6 | "Development automation" |

A representative quote, Catalyst: "Boom Automations completely transformed our workflow efficiency. What used to take hours now happens in minutes with their intelligent automation solutions." No speaker, no role, no baseline, no caveat.

Stryker is the card closest to a trade:

> Boom Automations revolutionized our roofing operations with smart field automation and digital project management. We've cut project timelines dramatically while improving quality and customer satisfaction.

The logo row is a separate claim. `index-expanded.txt` lists the image alts. Unique files under `/logos/`: 48. Of those, 39 have a readable name in the alt text and 9 use the alt "Client logo." The page says 95+. **INFERENCE:** the logos on the page do not add up to the sentence above them. Five card names also appear as those alts: Catalyst Strategic Advisors, Hipstr, Sterling AI, Beacon Davenport, and Beanstalk Web Solutions. The alt "JLAM" is not the words "Jack Lingo Asset Management," and this teardown does not merge them. Stryker, Uvid, and Keru are case-study images, not marquee logos. The row is not a second set of case studies.

Featured block, same homepage: "Boom's work has been featured at the New York Stock Exchange and recognized for excellence in technology at Tech 2.0." Captions: "Boom featured on the NYSE screens," "Boom on the floor at the NYSE Founder Event," "Excellence in Technology." No article, no date, no award citation in the text.

The playbook host gates a different set of stories. https://playbook.boomautomations.com/case-studies :

> A marketing agency, a PE firm, and a multi-location healthcare group. What the assessment found, the full tech stack, what we absorbed vs. kept vs. killed, the timelines, and the results after launch.

> Company names and identifying details in these case studies have been redacted for confidentiality. All figures reflect actual client engagements. These examples are provided for educational purposes only and do not constitute a guarantee of results.

The form was not submitted. The three studies were not read. They are not the nine homepage cards, and the numbers were not combined.

## 2. Sales and marketing

### Positioning

On the marketing site, in the order a visitor meets it:

1. Category, from the title: "AI Agent Systems for Enterprise."
2. Outcome: "We make companies AI-native," live in 90 days, then the team runs it.
3. Enemy, from the before-and-after and the thesis: the team as the glue, a dozen tools, one-off agents, a system nobody uses.
4. Mechanism: one context layer, one department first, cheap automations, then agents.
5. Commercial: discussed after the call, 80–90% less than an FTE, 90-day guarantee.
6. Proof: 95+, nine cards, 94% adoption, NYSE and Tech 2.0.
7. Risk reversal: keep working at no additional cost until it is deployed and delivering measurable results.
8. Who, said in one sentence: asset managers, agencies, field-service companies. Careers says mid-market finance, revenue, and ops.

Lines worth keeping, each from the page named:

- "If we are not the right fit, we will say so." Homepage closer. https://boomautomations.com/
- "A system nobody uses is a cost, not a result." https://boomautomations.com/thesis
- "The value was never the tool." Same page.
- "We do not build systems to remove people." Same page.
- "Enablement is part of the deployment, not an upsell." Homepage FAQ.
- "Nothing is migrated for its own sake." Homepage FAQ.
- "Low-cost automations first, for the work that doesn't need AI and shouldn't pay for it." https://boomautomations.com/solutions/os-build-out
- "We do not sell generic templates." Homepage FAQ.
- "hours saved, process time cut." https://boomautomations.com/careers

Voice on the marketing site: short declaratives, second person, "your department," "your team." The thesis is the page that sounds like a person. The cards sound like a brochure. The founder host and the playbook sound like a coach talking to another operator ("you," "your agency," "what to charge").

### Funnel and CTAs

The marketing site has one primary action: "Apply to Work with Us," repeated from the hero, the cards, the solution pages, and the footer. It goes to https://boomautomations.com/apply. There is no "Book a call" on that host. There is no pricing page. There is no contact form. `/contact` is a soft 404.

Apply page meta: "Apply to work with Boom Automations: a quick conversation with Sonic, one of our operating system agents." Visible line: "A quick conversation with Sonic, one of our operating system agents. Takes about a minute."

The first message, rendered without typing, https://boomautomations.com/apply :

> Hi, I'm Sonic, one of the agents running on Boom's internal operating system. Before we book your consultation, I've got a few quick questions. Takes about a minute. First, what's your name?

The rest of the script is in the public bundle. Quoted from `apply-question-script.txt`, not from a submitted chat:

- Company: "What company are you with?"
- Work email: "We route applications by company domain, so personal emails won't work here."
- Phone.
- Role: Founder / CEO, C-Suite / VP, Director / Manager, Other.
- "How big is the team?" Options: 1–10, 11–50, 51–200, 201–500, 500+.
- "Roughly, what's your annual revenue? This helps us scope the right solution." Options: Under $1M, $1–5M, $5–20M, $20–50M, $50M+, Prefer not to say.
- "What are you most interested in?" Options: AI-native operating system, AI agents, Workflow automation, All of the above.
- Stack, multi-select: NetSuite, Salesforce, HubSpot, QuickBooks, Google Workspace, Slack, Notion, Mostly spreadsheets, Other. The prompt asks the visitor to say if they are running an ERP like NetSuite.
- Optional context: "Biggest bottlenecks, what's driving the timing, what you've already tried."
- "Pick two or three 30-minute slots and we'll confirm one within a couple of hours." The slots are generated as the next three weekdays, each with "Morning 9–12," "Afternoon 12–3," and "Late afternoon 3–6." That step was not rendered, because reaching it requires typing.

Closing line in the same script: "If it's a fit, you'll see an invite from us within a couple of hours."

A static fallback exists in the bundle and was not on the screen that was captured: "Leave your details and the team will follow up directly," with name, company, email, phone, and Submit.

**INFERENCE:** the marketing funnel is an application, scored by a chat, then a short consultation if they say it is a fit. It is not an open calendar. The 45-minute FAQ and the 30-minute slot script disagree about how long that consultation is. The fit call Wil already offers is closer to the 30-minute line than to the 45-minute one, and his is free. Theirs is behind the application.

The founder host is a different door. Three cards, https://lukepierce.boomautomations.com/ :

- "AI & Automation Implementation." "Done-for-you AI systems for your business · 80+ teams served over 4 years." This card links to https://boomautomations.com/
- "Download My Free AI Agency Playbook." "How I Built My AI Automation Agency — the exact strategies and frameworks." Links to https://playbook.boomautomations.com/playbook
- "Book a 1-Hour Strategy Call." The $1,250 card. The button routes to `/call`.

`/call` is aimed at two readers at once: "For businesses implementing AI" and "For AI Agencies and AI Consultants." The second list includes "Pricing builds, retainers, and maintenance," "Getting out of fulfillment so you can sell," and "Building around a full-time job." https://lukepierce.boomautomations.com/call

`/book` is the after-payment screen: "Payment confirmed. Pick a time." "Didn't get redirected here after paying? Email luke@boomautomations.com and we'll get you booked." No slots were on the page.

### Lead magnets

None on the marketing site. No blog (`/blog` is a soft 404). No PDF link in the marketing footer.

On the playbook host, three gates, none of them submitted:

- Playbook, https://playbook.boomautomations.com/playbook . H1: "Get Access to Luke Pierce's AI & Automation Agency Master Playbook." "Downloaded by 4,120+ people." "Includes the complete Pricing Guide." Fields: First Name, Email Address. Button: "Send Me The Playbook." The same gate at `https://playbook.boomautomations.com/` said "Downloaded by 4,195 people" when it was fetched a few minutes later.
- 180-day plan, https://playbook.boomautomations.com/180 . H1: "The Exact 180-Day Plan to a $500K/Year AI Agency." "Send Me the Plan." Stats on that gate: "4 years / running Boom Automations," "95 clients / on this exact model," "90+ operators / in the AI Agency Inner Circle, averaging $11,340/mo."
- Newsletter, https://playbook.boomautomations.com/newsletter . "3,645 subscribers." "Get exclusive AI agency tips straight to your inbox."

The documents behind the first two gates are also at public URLs. `/master-playbook` and `/180-plan` render the full text and are marked `noindex`. The thank-you pages assume the email went out anyway. Playbook thank-you: "Playbook sent to your inbox" from `luke@updates.aiagencyinnercircle.com`. https://playbook.boomautomations.com/playbook-thank-you

### The second offer, sold from the thank-you page

This is the selling motion, not a chapter list.

H1 on https://playbook.boomautomations.com/playbook-thank-you :

> License the exact offers, scripts, and systems 90+ operators use to build AI Agencies making up to $190K a month. Run them and they work. Guaranteed, or it's free.

> A 6-month program for people building AI implementation, AI consulting, AI automation, AI agency, and AI services businesses. You license the systems, frameworks, templates, and playbooks members run every day, 8 live coaching calls a week, and a coach who maps your plan. Make back what you paid in new revenue inside 6 months, or you get every dollar back.

Two guarantees on that page, separate from the 90-day client guarantee: "7-day money back" and "If you do the work and don't make back what you paid in new revenue within 6 months, you get a full refund." "Doing the work" means completing the onboarding action plan, showing up, and flagging blockers. "The exact terms are in the membership agreement you see before you pay."

Counters on that page: "90+ operators inside," "$11,340/mo average member revenue," "$0 to $190K/mo range across members," "8 live calls every week."

Who it is for, same page: an AI services business. "Not for you if: you run a cold email agency, a marketing agency, a SaaS, or any other model."

Steps: "Apply. Two minutes." Then "Call with the team. 45 minutes." Then "Onboarding call with Luke and your coach. We map your plan for the next 180 days before you touch anything else." The form fields did not render in the captured text. The page says every application is reviewed and the team confirms the call if it is a fit.

Legal name on that page: "AI Agency Inner Circle LLC." Questions: `info@aiagencyinnercircle.com`.

The 180 thank-you page describes the same membership in shorter form: "8 live coaching calls a week. Luke runs 2 of them personally." "A private Slack with 90 operators." https://playbook.boomautomations.com/180-thank-you

**INFERENCE:** Inner Circle is a community and a license for agency builders. It is the thing the $1,250 call can be credited toward, alongside "Boom." It is not a department operating system, and the site never gives it a price.

### What the plan tells an agency to sell a home-services owner

This is the paragraph in the public 180-day plan that sounds most like Wil's buyer. It is instruction to the reader of the plan, not a Boom service page. https://playbook.boomautomations.com/180-plan

> Home services ($2M to $15M) Buyer: the owner. Hook pain: slow lead response, dispatch done by text, and invoicing that lags the job by a week. What you build: lead response, dispatch, and billing automation on top of their field service software. Build range: $20K to $40K. Red flag: owners who don't live on LinkedIn or email, which means this industry is a cold calling or workshop play, not an outreach play.

The same page's day-90 scorecard for the agency builder: "4 or more discovery calls a month," "2 to 4 audits delivered," "your first $30K build signed between day 75 and day 90." The gate for that plan lists the seven channels: "AI workshops, Upwork, cold email, cold calling, LinkedIn content, warm network, Dream 100." https://playbook.boomautomations.com/180

The plan also says the delivery order inside a build is data, then deterministic automations, then agents, then the interface, then "QA and adoption," then "Handoff." "Adoption is the real measure of the build, not delivery." Retainer: "The retainer is earned after delivery, never sold upfront," and "every build that ships adds another $3K to the base." Those are the plan's words for how an agency should deliver. They are recorded here because they rhyme with Wil's ladder and because they disagree with "Managed, not handed off" on the marketing site. The scripts in that document are not copied into this teardown.

### Trust, stack, and the missing policy

Order on the marketing homepage: hero and guarantee chips, client-count line, what the OS is, before and after, nine cards, four services, 94% adoption, four-step process, NYSE and Tech 2.0, FAQ, then the apply closer with 94% / 90 days / 95+.

Address in the footer: "252 NW 29th St. 9th Floor #1021, Miami, FL 33137."

No privacy policy. `/privacy` and `/privacy-policy` are soft 404s. The application still asks for a name, a work email, a phone number, role, headcount, revenue, stack, and a description of bottlenecks. **INFERENCE:** a local owner who asks where the PO file goes will not find an answer on the site.

Careers names the tools the engineers use: "Claude Code, Codex, or something else," "TypeScript or Python," "ERPs, CRMs, and finance tools," and "Lovable" as a nice-to-have. The forward-deployed role is quoted in the next section. The 180-day plan names a delivery stack for agency builders: Supabase, Lovable, n8n, Claude, Claude Code, Slack, Loom, Gamma. That list is the plan's, not a stack diagram on the marketing homepage.

### Forward-deployed role

Careers H1: "Build the systems that run real companies." "Three open roles. All full-time." https://boomautomations.com/careers

Forward Deployed Engineer, "2 open seats," "Miami or remote (US)":

> Embed with our clients' teams. You'll work inside their operations, not from a distance, and own the deployment end to end: map the department, design the agent system, ship it into their stack.

> You'll be in the room with the CFO, the ops lead, the person whose week you're giving back.

> Ship into production weekly
>
> No sandboxes. Your work runs inside a client's real stack within the first month.

The other two roles are Technical Assistant (1 seat) and Associate Marketer (1 seat). The marketer "owns the pipeline from 'the client said yes' to 'it's live'" and runs "Boom's content on X and LinkedIn." The application form on that page, not submitted: role, full name, email, LinkedIn URL, GitHub or portfolio URL, "What's the best thing you've shipped?" with a 40-character minimum, resume link.

The X hiring post is the same role, shorter, and it adds the word handoff. Quoted in the X section.

## What Wil Sensing should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder.

1. **Fit call. Keep it free, short, and able to say no.** Their closer is the line to steal: "Apply for a working session. We will map one department, show you where the 50% is hiding, and tell you what it would take. If we are not the right fit, we will say so." His version can drop "apply" and "50%." The 30 minutes can start from the job. Their Sonic chat is a qualifier for a firm that has more demand than seats: work email only, role, headcount, revenue to $50M+, stack. The only band that overlaps his buyer is "51–200." He does not need the chat, the revenue ladder, or the $1,250 paywall in front of a first conversation. https://boomautomations.com/

2. **Job map. Make the assessment the paid artifact, and say the fee comes off the build.** Their discovery call already tries to map workflows, name systems, and put a timeline on the work, in 45 minutes, before a contract. The thesis says the map is where the hours, the cost, and the tools that exist "only because nothing better did" show up. The careers page says the number reported back is "hours saved, process time cut." That is the contents of his Job map: the job, the steps, the exceptions, the source of truth, and the number that will decide if the build worked. The repair-shop match already has a source (11,139 PO lines) and a number ($217K). The playbook's script for other agencies says the strategy fee "applies to implementation if we move forward." The call page says the $1,250 "is credited toward it" within 30 days. He already has the credit. Spell it in one sentence, without their dollars and without a 30-day Inner Circle clause. https://boomautomations.com/thesis and https://lukepierce.boomautomations.com/call

3. **Build. One job, cheap automation before an agent, in the system they already run.** The OS page starts with a single department and refuses to spend model money on work that does not need it. The agent page names operations as intake, routing, and exception handling. For a shop, the translation is one job (vendor credits, warranty, parts returns), the screen they already use, and a build that does not begin by retiring QuickBooks. "We do not sell generic templates" and "Nothing is migrated for its own sake" are the lines. "Live in 90 days" for a whole department OS is not the first invoice. Stryker's card is the proof shape to study: a named field company, a completion number, four weeks. Write the caveat they left off. https://boomautomations.com/solutions/os-build-out

4. **Autonomy ladder. Include the training, keep the person on the exception, and name the next rung.** "Enablement is part of the deployment, not an upsell" and "We do not build systems to remove people" are the ongoing offer in owner language. Their ladder, read off the homepage order, is consolidate tools, automate what is not AI, then agents that own the workflow, then a team that can run and extend it, with Boom still managing. His ladder is tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions. Steal the included training and the "capability stays with you." Leave "lifetime access," which he cannot staff, and leave agents that own exception handling. The homepage's "Exceptions routed before anyone notices" can be his sentence if the route ends at a person. https://boomautomations.com/solutions/ongoing-management

5. **Agree the measure in the Job map, in the units the careers page already uses.** Hours saved, process time cut, and, for him, dollars found and lines matched. Their 94% is "active use by the client team after rollout," with no window. Their guarantee is "measurable results," with no unit. He can be more concrete because the shop story already has a count. If he later wants a promise, the promise has to name that unit. Copying "we continue working at no additional cost" without a unit imports the hole in their FAQ. https://boomautomations.com/careers

6. **Say the work happens in their building, the way the job post does.** "You'll be in the room with the CFO, the ops lead, the person whose week you're giving back." For his buyers the room is the service desk, the parts counter, the office manager. "Deployed on your cloud" and "within your existing system permissions" become "we work in the DMS, QuickBooks, or the vendor portal you already run, and a person still approves the exception." https://boomautomations.com/careers

7. **One measured win, then the same job at the next similar company.** The thesis says they start with one department and add the next on the same system. The 180-day plan tells an agency builder to componentize a build so the second one in the same industry starts "80% done." Stripped of the fund and of the agency scale-up, the shape is his: the vendor-credit match becomes the offer for the next shop, and the Job map is the step that checks the data exists. That is an adaptation of a sentence. It is not a reason to take on a book of agency clients. https://boomautomations.com/thesis

## What not to copy, and why

- **The AI Agency Inner Circle, the playbook, and the 180-day plan.** They sell seats to people building agencies. The headline is a license, a Slack of 90 operators, and eight calls a week. Wil's buyer is the owner of one company. Becoming the coach in that thank-you page is a different firm.
- **The $1,250 call as the front door.** His fit call is free. Their paid hour is a strategy session for a business or for "growing your agency," credited toward Boom or the Inner Circle. Putting a paywall on the first conversation throws away the thing the marketing site is actually good at, which is offering to say no.
- **The playbook's price bands, as if they were his or as if they were Boom's client price.** $2,000 strategy, $8,000–$25,000 for a simple department, $60,000–$150,000 for a "full operating system," $3,000–$15,000 a month, and the home-services "$20K to $40K" are the guide's recommended prices for agency owners. His price is still open. Publishing their bands would either scare a 50-person dealer or anchor him to a delivery model he does not staff.
- **Headcount-replacement pricing.** The same guide says charge 20–40% of the salary eliminated, and it works an example that removes an assistant, an ops analyst, and an admin worker. The thesis on the marketing site says "We do not build systems to remove people." The guide and the thesis disagree. His line is "Keep the decisions." The salary-arbitrage model fights both.
- **The 90-day guarantee as printed.** "Measurable results," "production-deployed," "live in 90 days," "4-8 weeks," and "we've never had a deployment take longer than 90 days" are four different promises. The Inner Circle's "guaranteed, or it's free" is a fifth, and it is a refund of a coaching fee. A guarantee he cannot score becomes the first objection.
- **The company count.** "95+" on the homepage, "95 clients" on the 180 gate, "90+" in the hiring post, "90+ mid-market companies" on the call page, "80+ teams" on the founder card, 48 logo files on the homepage. A one-person firm that borrows the largest number will get asked which one is real.
- **94% adoption with no window.** "Active use by the client team after rollout" is not a definition. The instinct, judge the work by whether the team uses it, is already in his ladder. The number is not.
- **"Less than 20 hours of total internal time."** That sentence sells a done-for-you deployment. His ongoing work leaves a person on the exceptions. Promising the owner's team will barely show up fights "Keep the decisions."
- **Sonic as the only way in.** A chat that rejects personal email and asks for revenue before a human speaks is a filter for a team with a queue. He is the person who will be in the room. A sentence about the job, then the fit call, is the version that matches the shops.
- **Seven outbound channels and a 25-call month.** Workshops, Upwork, cold email, cold calling, LinkedIn, warm network, Dream 100. The X post's 25 calls a month is not even what the 180-day plan's own scorecard says. His buyers, in the plan's own words about home services, "don't live on LinkedIn or email." The channel machine is the part to leave.
- **Anonymous percentages with brochure quotes.** "Completely transformed our workflow efficiency" does not tell an owner what changed. Hours, quotes per month, and the Stryker roofing line are the cards with a job in them. Even those skip the caveat.
- **Enterprise as the category.** The title says enterprise. The careers page says mid-market. The call page sells to agency founders in the same hour. Using "enterprise" on a page for a 50-person dealer is an imported word.
- **NYSE screens as proof.** The captions do not say what was delivered. A shop owner cannot check them. One named job with a number is the proof he has.
- **A logo wall in place of a story.** Forty-eight marks under a 95+ claim looks like coverage. He should name the shops he has actually done.
- **No privacy page while the form asks for revenue and a phone number.** He needs his own short note about where a PO file goes. He should not copy a site that does not have one.
- **"Managed, not handed off" and "handoff" in the same brand.** If he says both, the owner will ask which one the invoice is. His ongoing work is a rung he can stop, with a person still on the exception. Pick that and say it once.

## Private equity

**Noted for reference, NOT our strategy for now.**

The marketing site does not use the words private equity, portfolio, EBITDA, or hold period. The hiring post does not either.

Two mentions sit on the playbook host, both inside the agency-builder material:

- The case-study gate names "a PE firm" as one of three redacted stories, next to a marketing agency and a multi-location healthcare group. The studies themselves were not opened. The page says the figures are real and the names are not. https://playbook.boomautomations.com/case-studies
- The 180-day plan, in a section titled "Three builds, so you can see the shape," gives this example: "A PE firm deal flow system, $120K: inbound deals ingested and enriched, scored against the thesis, pipeline kept current, a partner-facing dashboard." The other two examples on that list are a marketing-agency OS at $45K and a dental group at $85K. The page does not say these are Boom invoices. https://playbook.boomautomations.com/180-plan

**INFERENCE:** do not treat the $120K line as Boom's price, and do not treat it as the same story as the gated case study. They share the words "PE firm." They were not tied together on the site.

Nothing here is a second go-to-market Wil should build. A dealership is not a fund.

## X evidence

These are posts, not website copy. The site and the posts disagree on the company count and on the call math. Quoted from `research/ai-specialists/_x/posts.md`.

Hiring post, @BoomAutomations, 4 October 2026. https://x.com/BoomAutomations/status/2106796348368683433

> We have more companies waiting on builds than engineers to build them.
>
> We are hiring Forward Deployed Engineers.
>
> An overview of the role:
>
> 1. Embed inside our client's team(s)
> 2. Map how they operate
> 3. Build the AI operating system they run on
> 4. Lead ongoing improvement and team enablement
>
> You own the build from kickoff through handoff, ongoing management & enablement .
>
> We've shipped for 90+ companies and the pipeline has never been bigger.

The post points at "the newly updated site" and an apply link. The role's four steps are the closest public wording to Wil's sequence. The marketing site splits step 3 into four product pages and says the ongoing work is "Managed, not handed off." The post says handoff and ongoing management in the same sentence. "90+" is not the homepage's "95+."

The second post is Luke, the next day from this crawl, 25 October 2026. https://x.com/lukepierceops/status/2114497167205494947

> If you run an AI agency and you’re not booking at least 25 sales calls a month...
>
> I got you.
>
> Here are 6 channels booking calls right now (& the exact KPIs to hit + what each one costs):

The saved post ends there. It does not list the six channels, the KPIs, or the costs. Those figures are not invented here. What the post does say is a target of at least 25 sales calls a month, for someone who runs an AI agency.

The 180-day plan, fetched the same day, tells that same reader something else. The gate lists 7 channels, not 6. The day-90 scorecard is "4 or more discovery calls a month" and "a pipeline that now produces a call a week." https://playbook.boomautomations.com/180 and https://playbook.boomautomations.com/180-plan

**INFERENCE:** the post and the plan are the same coaching business, and they do not use the same funnel math. Neither number is the marketing site's funnel. The marketing site does not publish a call target at all. It publishes an application.

The hiring post adds one fact the site's careers page does not: the queue is longer than the bench. Careers says "2 open seats" for the forward-deployed role and does not say "90+ companies." The site's "95+" and the post's "90+" were both public on 26 October 2026.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Companies shipped | Homepage: "95+ companies" and "95+ / companies impacted." 180 gate: "95 clients on this exact model." | X hiring post: "90+ companies." Call page: "90+ mid-market companies." Founder card and playbook gate: "80+ teams." Logo files on the homepage: 48. |
| How long Boom has been at it | Thesis: "almost five years ago." | 180 gate: "4 years running Boom Automations." Founder card: "over 4 years." |
| Discovery length | FAQ: "Most calls last 45 minutes." Inner Circle thank-you: "Call with the team. 45 minutes." | Application-received: "30-minute consultation." Sonic script: "30-minute slots." |
| What happens after apply | Application-received: calendar invite "within a couple of hours" if it is a fit. | `/thank-you`: "within 24 hours" and "within one business day." |
| Guarantee | Homepage chip and FAQ: 90 days, then keep working at no additional cost until "measurable results." | Inner Circle: 7-day refund, and make the fee back in new revenue within 6 months or a full refund. Different product. |
| Handoff | Ongoing page and thesis: "Managed, not handed off." | X hiring post: "from kickoff through handoff, ongoing management & enablement." The 180 plan's build order ends in "Handoff" and then a retainer. |
| Call volume | X post: at least 25 sales calls a month, 6 channels. The six are not in the saved post. | 180 plan: 7 named channels, and about one discovery call a week at day 90. |
| Price of the work | Marketing FAQ: no dollar, "discussed after the discovery call," 80–90% less than an FTE over 12 months. | Founder call page: "$1,250" for one hour, credited toward Boom or the Inner Circle within 30 days. Playbook: a $2,000 strategy fee and implementation bands, written as what an agency should charge. |
| Adoption | "Today it sits at 94%." "Measured as active use by the client team after rollout." | No time window, no method, no named client on that number. |
| Case studies | Nine named cards on the homepage. | `/case-studies` on the marketing host is a 404. The playbook gate offers three different, redacted studies, behind an email form that was not submitted. |
| Download count | Playbook gate file: "Downloaded by 4,120+ people." | The host root, fetched the same morning: "Downloaded by 4,195 people." |

Open for Wil, not answered by this crawl:

- The unit in his Job map is still his to write down. Their site shows what happens when the unit is missing: the guarantee cannot be scored. His shop story can name dollars found, lines matched, hours the person no longer spends, and the exceptions a person still handles. The site does not pick one for him.
- Whether the credited Job map needs a published price. Their operating-system price is hidden until after a call. Their strategy-call price is public. Both choices are on the properties crawled. Which one fits a local owner is still his call.
- Whether the repair shop will let him name it. Their strongest homepage cards use company names and then waste the quote on generic praise. A named shop with a caveat is the better version of what they attempted. Permission is his question, not a line on their site.
- Where the person stays. Their agent page puts exception handling inside the agent's job. His ladder keeps the person there. How far an agent should go in a dealership is not answered by a site that never mentions one.
- Which second job, after vendor credits, is the next map. Their "where the hours go" test is the filter. Stryker's card is roofing field ops, not a dealer. The site has no dealer example to steal.
- The home-services note in the 180 plan ("the owner," "don't live on LinkedIn or email") describes a buyer who looks like his, inside a document that teaches someone else how to sell to that buyer. Using the description is fair. Using the $20K–$40K range, the cold call, or the workshop is the second business again.
- Ongoing work. Their marketing ongoing unit is "we run it," lifetime training included, price unstated. The plan's ongoing unit is a retainer earned after delivery, with "$3K" added to the base per build, which is the plan's number for an agency, not a Boom invoice. His is a rung at a time. The site does not have a one-person version of that rung.
- Privacy. The public form should stay light. The PO lines belong in the Job map, under whatever terms he uses. Their site does not supply those terms.

## Where the raw pages are

`research/ai-specialists/boom-automations/pages/` holds the extracts. Each file starts with the URL. `crawl-log-1.tsv` is the marketing host. `crawl-log.tsv` is the founder host, with files prefixed `lukepierce__` so they did not replace the marketing pages. `crawl-log-playbook.tsv` is the playbook host.

Quotes in this report were checked against the homepage extracts, the four solution pages, the thesis, the careers page, the opened FAQ, the apply render, the application-received and thank-you pages, the founder profile, `/call`, the playbook gate, the 180 gate, the Inner Circle thank-you page, the pricing section of `/master-playbook`, the home-services and day-90 lines of `/180-plan`, and the two posts in `research/ai-specialists/_x/posts.md`.
