# Tenex

26 October 2026. Prepared for Wil Sensing. Read-only: no forms submitted, no password entered, no call booked, no newsletter signup.

Wil Sensing is a one-person consultancy for local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer is a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The line is "Hand off the busywork. Keep the decisions." Proof on hand: $217K in missed vendor credits at a local auto repair shop, from 11,139 PO lines. Pricing is undecided.

Quotes are from files under `research/ai-specialists/tenex/pages/` or from the X post in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those surfaces. Tenex.co, the Ashby job posts, and the X post do not describe one discovery. They are not merged below.

## Top 5 takeaways

1. **Steal the interview. Leave the free prototype week.** The X post's bootcamp interviews "the people closest to the work," then maps "the systems involved and expected business impact," then builds prototypes "on your data." The site playbook is the part that fits a Job map: "walk me through the exact steps. How many hours a week? Who else touches it? What breaks?" and, during the interview, frequency, time spent, cost of the time, impact, and effort to fix. The prototypes are the build. Wil's map is paid and credited toward that build. He should not spend five days building on a prospect's data before anyone pays. Sources: the X post, and https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

2. **Keep the fit call short. Their free intensive is not one product, and it is not his.** On the site, discovery is a "complimentary" 2-week diagnostic (survey, stakeholder interviews, a report) and, on another page, "30-, 60-, or 90-day" audits that end in an AI-Adoption Report the client can "run with or hand back to us for execution." The 30 September 2026 X post is a free 5-day bootcamp with "Up to 4 working prototypes." The Typeform behind that post still says "five-day." Do not collapse these into one offer. Wil's 30-minute fit call stays the filter. The paid Job map is the artifact. The credit is how the map leads to the build. https://www.tenex.co/diagnostic and https://www.tenex.co/ai-transformation

3. **Put the number that decides the build into the Job map, and say where the hours go.** Their test for a pilot is "improve [measure] from [baseline] to [target] by [date]." "AI will make us more efficient" does not qualify. Arman's line on the same page: "gross productivity gain is not realized savings." Advantage names where the hours go (training and time on the floor) instead of stopping at a pile of hours. Wil already has a count and a dollar figure ($217K, 11,139 lines). Write that unit into the map before the build. Do not borrow their 70,000 hours or the job ad's "$1M a week." https://www.tenex.co/the-big-question/ai-strategy-where-to-start

4. **Leave the enterprise motion.** The post sells bootcamps to "Midmarket & enterprise companies doing >$100m in revenue or funding," after work for "midmarket cos, F2000 enterprises, and PE portcos." Job posts say they "build for Fortune 500 companies" with "70 people" in a New York office. The named public stories are Advantage Solutions and WebFX. Nothing on the pages crawled speaks to a 50–200 person dealer, equipment dealer, or trade shop. Do not copy the squad, the "Chief AI Officer" line, or a revenue floor. PE language is quoted later and labeled not his strategy. https://x.com/businessbarista/status/2105404947106075038 and https://jobs.ashbyhq.com/tenexlabs/2a359a2a-d5ed-48e8-96b8-b93826110ee9

5. **Say what the person still decides. That is the ladder, under his headline.** The workshop, on one workflow of the visitor's own, has them write "what AI does, what a person still does, and where approval sits." The playbook calls one role "The Boss = the decider," puts a deterministic rule on the left and "a junior employee" agent on the right, and orders adoption from a tool on one desk, to one person's process, to a whole function. The engineer job says "decide where people stay in control." That is "Hand off the busywork. Keep the decisions." His rungs stay tool adoption, headless, governed, agent-to-agent, and a person on the exceptions. Their AI Office and a grid of fifty use cases are a portfolio practice. Leave them. https://www.tenex.co/workshops/closing-the-ai-gap and https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

## Method and coverage

Two crawls, both headless Chrome, read-only. The first log is `pages/crawl-log-1.tsv`. The second overwrote `pages/crawl-log.tsv` after that copy.

First crawl: `https://www.tenex.co/`, host `tenex.co`, max 90. The sitemap is one file with 53 URLs. The crawl saved the marketing pages, both service pages, about, careers, get-started, the diagnostic, build-first, the workshop, the AI value-chain gate, privacy, terms, the blog index and all 12 blog posts, the playbook index and all 17 playbooks, both Big Question essays, the events index and all 5 event pages, and ultrathink. 58 successful saves, then the seeded paths. `/contact` ends at `/get-started`. `/about` ends at `/about-us`. `/privacy` ends at `/privacy-policy`. The log shows those repeats. One file remains for each final URL. Nothing was deleted.

`/services`, `/pricing`, and `/work` returned 404 and were not saved. `/case-studies` returned 401. The crawler does not write a file for that status. The wall text was saved by hand from the 401 body, password not entered: `pages/case-studies.txt`. Homepage and about logo names are `img` alt text, which the Chrome innerText extract drops. Those alts are in `pages/logo-alts.txt`, taken from the same pages' HTML the same day.

The marketing HTML is server-rendered. Curl returned the body copy. Chrome was still used, and it is what the page files quote. Ashby job pages are a client-rendered app. The Typeform welcome screen rendered. The questions behind "Get started" did not. They were read from the form definition in that page's HTML and saved as `pages/typeform-bootcamp-fields.txt`. The form was not advanced and not submitted.

Second crawl, after the log copy: the Ashby board `https://jobs.ashbyhq.com/tenexlabs`, the 22 job URLs linked from https://www.tenex.co/careers, and `https://form.typeform.com/to/vk5i1x9Q`. Hosts `jobs.ashbyhq.com` and `form.typeform.com`. Max 24, so the script stopped before it walked either host's sitemap or the generic `/about` and `/pricing` seeds it queues for every origin. Those unused seeds, plus each job's `/application` URL, are in `pages/not-fetched.txt`. Application URLs were left alone so nothing was submitted.

Not fetched on purpose:

- 38 newsletter edition URLs on `ultrathink.beehiiv.com`, listed in `pages/not-fetched-newsletter.txt`. On the ultrathink page they are buttons (`data-edition-url`), not links the crawler followed. The index decks are in `ultrathink.txt`. The edition bodies were not read, and they are not summarized from titles.
- The case-study library behind the password.
- `robots.txt` disallows `/admin` and `/api/`. Those were not opened.
- Social profiles, including `https://x.com/tenex_labs` and `https://x.com/businessbarista`, except the one saved post.
- No `llms.txt` (404).

A search of the tenex.co page files finds no "bootcamp," no "private equity," and no "F2000." Those words show up on the X post, the Typeform, and (for private equity) the strategist job posts.

## Product

### What they sell

Homepage title: "Tenex | AI Transformation & AI Engineering Partner." Meta description: "Tenex is your AI transformation partner. We set and execute your enterprise AI strategy at startup speed, then ship it with outcome-based AI engineering squads." H1: "Win the next decade." Subhead: "Your AI transformation partner. We set & execute your enterprise AI strategy at startup speed." https://www.tenex.co/

Three blocks under "Tenex helps you shift from AI-absent to AI-native."

| Block | Their line | URL the card points at |
| --- | --- | --- |
| Strategy | "No 6-month strategy work. No 200-slide presentations. We get right to work on holistic & function-specific audits that surface the most compelling AI use cases." | https://www.tenex.co/ai-transformation |
| Transformation | "Custom partnership that combines bespoke change management & AI tooling with baseline metrics to drive measurable ROI." | https://www.tenex.co/ai-transformation |
| Engineering | "Outcome‑based, subscription‑style engineering squads that leverage AI acceleration to ship software faster and more affordably— you pay for features delivered, not hours logged." | https://www.tenex.co/ai-engineering |

The same three names are in the homepage JSON-LD as services. Strategy and Transformation share one URL.

About page, https://www.tenex.co/about-us. H1: "Our mission is to help your business reach its potential & end up on the right side of history, post-AI." Managing partners named on the page: Alex Lieberman and Arman Hezarkhani. JSON-LD gives both the title Managing Partner. Alex's `sameAs` includes `https://x.com/businessbarista`. The page does not say founder, and it does not give a founding year.

Legal name on the privacy policy and the terms: Tenex Labs, LLC, New York, NY. Terms: AI consulting, software development, and advisory, each engagement under "a separate written agreement (e.g., Master Services Agreement or Statement of Work)." "Nothing on this Site constitutes an offer to perform services without such an agreement." Governing law Delaware. Disputes in New York unless the client contract says otherwise. https://www.tenex.co/terms and https://www.tenex.co/privacy-policy

Job posts, which the marketing pages do not repeat: "We were founded in New York City in 2025. We are currently 70 people and will double by the end of the year." The strategist posts say "will reach 140 by the end of the year" instead of "will double." "We're bootstrapped and profitable." https://jobs.ashbyhq.com/tenexlabs/2a359a2a-d5ed-48e8-96b8-b93826110ee9 and https://jobs.ashbyhq.com/tenexlabs/a7b5a192-5ed9-469b-95e2-90d401c025b9

### How discovery is packaged, and how it is supposed to lead to a build

Four descriptions are on the record. They disagree on length, on whether a prototype is included, and on who it is for. The comparison is in the contradictions table. This section keeps them apart.

**Site, diagnostic page.** Title tag: "Free 2-Week AI Diagnostic." Meta: "A complimentary 2-week engagement that surfaces your biggest bottlenecks and shows exactly where AI can unlock them." Body:

> Take the first step with a complimentary AI Diagnostic — a rapid 2-week engagement that surfaces your biggest bottlenecks and shows exactly how AI can unlock them.

What is inside, same page: "AI Readiness Survey," "Stakeholder Interviews," "Diagnostic Report: A clear roadmap outlining the highest-ROI use cases for AI." No prototype. No price beyond complimentary. No sentence that says the fee is credited, because no fee is stated. https://www.tenex.co/diagnostic

**Site, transformation page.** The audit is not the 2-week diagnostic:

> We get right to the punch line. 30-, 60-, or 90-day holistic & function-specific audits that surface the most compelling AI use cases, quantify ROI, and map out an implementation roadmap.
>
> Each engagement culminates in a crisp AI-Adoption Report backed by a technical appendix your team can run with or hand back to us for execution.

That last sentence is the site's bridge from a written diagnostic to paid work. The client can keep the report or give it back to Tenex to build. The page does not say the audit is free, and it does not say what it costs. https://www.tenex.co/ai-transformation

The same page splits execution into product, process, and people. Process: "We begin with an employee survey & stakeholder calls to define high-impact opportunities, develop a clear plan with baseline metrics, then implement automation—guided by training and change management." People: "bespoke curricula and hands‑on workshops." They also call the firm "We are your Chief AI Officer."

**Site, the strategy playbook** (dated in JSON-LD 8 December 2025). H1: "How to Build + Execute an AI Strategy That Doesn’t Suck in 6 Steps." Deck: "This is the exact playbook Tenex uses to create and execute AI roadmaps for high-growth startups and enterprises valued at $50 billion and beyond." Six steps: exec buy-in, a company survey, interviews, a Claude synthesis into 8–12 recommendations, a roadmap, then "the cycle of execution." Close: "Want us to run this exact playbook (with military-level precision) inside your org? Talk to us today." https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

The interview instruction on that page is the sharpest discovery writing on the site:

> If they flagged “report building sucks” in the survey, go deeper. “You mentioned reporting takes forever—walk me through the exact steps. How many hours a week? Who else touches it? What breaks?”

They say to interview "6–12 people for 30 minutes each," half execs and half operators, and to aim for "around 30" survey responses. During each interview, quantify frequency, time spent, cost of the time, impact, and effort to fix.

**X post and the Typeform it points at.** Quoted in full in the X section. Short version: a free 5-day bootcamp, prototypes on real data, then a recommendation of what to take live, then "take agents into production in ~2 weeks." The post says this is "before committing." It does not name a fee for the production work, a story-point, or the engineering squad.

**Hiring pages, a third shape.** Strategist posts say the job is to "run diagnostics that surface real value drivers, scope engagements an engineer can build against, and manage transformation rollouts and adoption." One bullet: "Four-week diagnostic across claims, underwriting, and customer operations for a national insurer. We identified the ten highest-return AI opportunities, presented a roadmap, and delivered the first two." Another: "Two-week sprint to define an agent’s requirements for a healthcare system. We Prototyped it with engineering and managed its rollout across three hospitals." https://jobs.ashbyhq.com/tenexlabs/a7b5a192-5ed9-469b-95e2-90d401c025b9

**INFERENCE:** on every surface, the written diagnosis is the door and a later build is the paid work. The site says you can hand the report back "for execution." The post says you see agents "before committing," then they take agents to production. The job post says a diagnostic ended with "the first two" delivered. None of them says the diagnostic fee comes off the build. Wil's credit is the difference. None of them publishes the build price.

### Engineering, the paid build they describe

https://www.tenex.co/ai-engineering. H1: "AI Engineering." "We provide high-velocity engineering-as-a-service, without sacrificing quality."

> We charge our clients based on what we produce, measured by story-points that we define.
>
> We pay our team based on the story-points that they complete.

No dollar per point, no monthly retainer, and no story-point definition. The meta description says "charged by story-points — not hours logged." The homepage says "you pay for features delivered, not hours logged."

What the page says a squad does: full-stack applications, fine-tuning, code migration, data engineering, and "Custom Agentic Solutions." How the work is run: a Technical Product Manager and Forward Deployed Engineers, two-week sprint cycles, the client picks tickets, a 24-hour turnaround to grade tasks into story-points, a shared Slack channel, and an optional seat in Jira or Trello. "We commit to the story-points within each sprint."

The Forward Deployed Engineer post is more specific about the person than the service page is about the contract. "You’ll own client projects end to end: find where AI adds real value, decide the technical plan, build the whole system, and keep improving it in production. You’ll lead a few projects at a time in a pod run by an engineering manager." "Every project leaves behind agent systems, evals, and tools that make the next one faster." "You will learn to structure work for agents, engineer context, evaluate outputs, and decide where people stay in control." https://jobs.ashbyhq.com/tenexlabs/2a359a2a-d5ed-48e8-96b8-b93826110ee9

"Bring Your Own Pod" is a hiring path ("Apply as a team of two to five"), not a priced client package. https://jobs.ashbyhq.com/tenexlabs/55eb0282-d760-4425-9546-4b8b28dff419

A blog post describes MetaHarness as "the system that runs Tenex’s AI-native SDLC." It is an internal engineering process, not a SKU with a price. https://www.tenex.co/blog/building-an-ai-native-sdlc

### Prices

No Tenex service price is published on the pages crawled. No rate card, no story-point dollar, no diagnostic fee, no bootcamp fee other than free.

What is published, and what it is:

- Diagnostic: "complimentary," and the title tag "Free 2-Week AI Diagnostic." https://www.tenex.co/diagnostic
- X post: "Bootcamps are free." https://x.com/businessbarista/status/2105404947106075038
- Typeform welcome screen: "A free, five-day sprint." https://form.typeform.com/to/vk5i1x9Q
- Engineering: story-points, with no number attached. https://www.tenex.co/ai-engineering
- Pay for employees, not a client fee. Forward Deployed Engineer posts: "OTE $224K-$394K • Offers Equity • Offers Bonus • 55/45 split." The careers index on tenex.co prints "$224K – $394K" only beside Forward Deployed Engineer. The Associate and Senior FDE posts on Ashby print the same OTE line. AI Strategist: "Base $130K-$180K • Quarterly bonus $5K-$15K." Developer Experience and Developer Relations: "The base salary for this role is $100,000 to $150,000 annually." These are compensation.
- "You pay $20 a month for AI" is the value-chain explainer's Claude subscription, not a Tenex fee. https://www.tenex.co/ai-value-chain
- The Claude Code playbook mentions Anthropic Pro at "$20/month" and Max at "$100-200/month." That is Anthropic's price. https://www.tenex.co/playbooks/how-to-use-claude-code-101

No performance guarantee is stated. The terms say the site and services are provided "as is" and "as available," and "We make no warranties, express or implied."

### Named frameworks

- **AI-Adoption Report.** The close of a 30/60/90-day audit. https://www.tenex.co/ai-transformation
- **AI Triage Matrix.** Big Question essay, 9 October 2026. Score each initiative on "Can we execute it today?" and "How big is the prize?" Quadrants lead to fund, fix, keep running, or stop. "It comes from the process Tenex has used to build AI roadmaps for more than 100 mid-market and enterprise companies." https://www.tenex.co/the-big-question/ai-strategy-where-to-start
- **Four adoption phases** in the December 2025 playbook: "Single-player tools," "Single-player processes," "Multiplayer, single-function process," "Multiplayer, multifunction processes." "Don’t touch multiplayer, multifunction processes until phases 1–3 are nailed."
- **The Boss and the Bulldozer.** "The Boss = the decider. The Bulldozer = the unblocker."
- **Agentic workflow, not a full agent.** "If you can make an ‘if this happens, do this’ statement, it’s deterministic," Alex says. "If you can mentally model it like a junior employee… it’s an agent," Arman adds. The middle, attributed to Wade Foster of Zapier, is an "agentic workflow." Checkpoints "every few steps."
- **Return on learning.** Arman's name, on the Big Question page, for a test whose job is to learn whether AI can do the work.
- **Pilot purgatory.** Arman's name for a pilot with no end date.
- **Closing the AI Gap.** A 16-slide workshop, one workflow, a printable worksheet. https://www.tenex.co/workshops/closing-the-ai-gap
- **MetaHarness** and **Tenex OS.** Internal SDLC, in the 5 August 2026 essay.

The playbook's "hundreds of companies" and "hundreds of AI audits across media, real estate, SaaS, and deep tech" is not the same count as "more than 100 mid-market and enterprise companies" on the October essay. Both sentences are on the site. They are not averaged here.

### How they describe the work

Homepage: "AI isn’t scary. Ignoring it is."

Transformation page: "As the cost of intelligence approaches zero, businesses will need to transition from AI-absent to AI-native if they want to win the next decade." "We are bomb-sniffing dogs for your business. Identify bottlenecks. Spot inefficiencies. Fix process issues. And put money back in your pocket." "The only thing more dangerous than ignoring AI? Implementing it, but forgetting about your people."

About, three relationships: "AI-absent, AI-integrated, and AI-first."

Big Question, the line that belongs next to Wil's headline:

> Does a business owner own the result and the decisions?

Same page, what a small fix has to say out loud: "Hours saved hold up when you say where the time will go before you start: more output from the same team, faster turnaround, fewer errors, growth without new hires, or roles you don’t backfill." "Minutes nobody redirects don’t count." Before a larger initiative, finance should be able to answer: "What’s the dollar outcome? Where do the saved hours go? Who owns the number? How will we know it worked at 30, 60 and 90 days?"

Engineer job: "decide where people stay in control."

Workshop, the three lines a visitor writes down:

> Frame one result and the workflow that affects it.
> Redesign the work: what AI does, what a person still does, and where approval sits.
> Check what’s ready, then write a test—scope, success measures, and guardrails.

### Who it is for

Words they use, by surface:

- Homepage and service pages: "enterprise AI strategy." No headcount, no revenue.
- Get-started and diagnostic forms: annual revenue from "<$1M" through ">$100M," in bands. The form accepts under $1 million. The page does not say those leads are turned away.
- Playbook: "high-growth startups and enterprises valued at $50 billion and beyond." Industries named there: "media, real estate, SaaS, and deep tech."
- Big Question: "more than 100 mid-market and enterprise companies." The worked example is Advantage Solutions, "a retail services company with 60,000 frontline teammates."
- Job posts: "Fortune 500 companies across media, healthcare, retail, finance, and sports." "C-suite leaders." New York City, on-site, five days a week, "travel to client sites approximately once a month."
- X post: "midmarket cos, F2000 enterprises, and PE portcos," and bootcamps for companies "doing >$100m in revenue or funding."
- Typeform: revenue choices from "Under $5M" to "Over $100M." No funding question. No sentence on the form that repeats the post's $100 million floor.

**INFERENCE:** the economic buyer they write for is a leader who can sponsor an AI program across a large company. A 50–200 person local operator is not in the copy. The forms will accept a smaller revenue band. That is not the same thing as a page written to that buyer.

### Proof

`/case-studies` is a password gate. Visible text: "This work is shared privately. Enter the password to continue." No study was read. https://www.tenex.co/case-studies

Two named stories are public, both as blog posts, both about Claude adoption rather than a custom agent in production.

| Story | Named? | Where | What the page actually says |
| --- | --- | --- | --- |
| Advantage Solutions | Yes. Chief AI Officer Bethany Miles, CEO Dave Peacock, Ash Gupta, and (on the essay) George Johnson | https://www.tenex.co/blog/advantage-solutions-claude-rollout and https://www.tenex.co/the-big-question/ai-strategy-where-to-start | "about 70 million labor hours a year" is Advantage's operation. A compliance check "took 20 to 30 minutes every shift." Diagnostic "turned up more than 50 AI use cases." A 150-person leadership pilot, including the CEO, then "thousands of users." "Advantage expects it to return more than 70,000 labor hours a year." Finance: "cut a 10-hour weekly forecasting workflow to under 30 minutes." Use cases "from 50 to more than 100." The essay says Advantage "projects" the 70,000+ hours and names where they go: "training teammates and time on the store floor." The essay's next result paragraph ends "(Anthropic case study)." The blog says "Read Anthropic’s full story on Advantage Solutions here." |
| WebFX | Yes. Quote from Chris Putnam, Senior Director of Enterprise Architecture | https://www.tenex.co/blog/webfx-claude-fluency | "four-week diagnostic and training sprint." "94% of surveyed WebFX employees use AI daily or hourly." "300 people joined the live Claude 101 session." "4 weeks from kickoff to leadership readout." Conversations "over two weeks." "WebFX is a tech and AI-enabled digital marketing agency that has generated more than $10B in client revenue in the last five years" and has "750+ experts." That revenue sentence is about WebFX's clients, not a Tenex fee. |

Hiring-page bullets. Repeated on the FDE posts and, for the last three, on the strategist posts. No company names. Not behind the case-study password, and not written as case studies.

- "Sales intelligence for a sports and entertainment company. Models score 4.1M fans every night... Top-ranked fans buy at 125x the rate of fans who are not called."
- "Shelf and field intelligence for a beauty brand. ... Fixing the retailer data feed alone recovered about $1M a week in sales."
- "In-store computer vision for a retail analytics company. ... They count 98% of entries with zero false counts, and store no video or faces."
- "AI legal review for true-story TV scripts at a global media company. ... A review that took about 7 hours now takes about 1."
- The insurer, healthcare, and private-equity bullets above.

**INFERENCE:** the "$1M a week" line is recruiting copy. It has no client name, no date range, and no link to the locked case-study library. It should not be repeated as a result Wil can stand next to.

Logo bars are not these stories. Under "Partnered with the best:" the homepage alts are Anthropic, OpenAI, Vercel, Lovable, LangChain, and Braintrust. Under "Trusted by the best:" the about-page alts are Snapback Sports, Blip, EightAI, and Garman Homes. Job posts say "Anthropic, OpenAI, and Cursor are partners" (FDE) or "Anthropic, OpenAI, and Cursor build the frontier. As their trusted implementation partner..." (strategist). Cursor is in the job sentence and not in the homepage alt list. Vercel, Lovable, LangChain, and Braintrust are in the alt list and not in that sentence. The about-page names are not attached to a result.

The playbook line "We’ve seen this move alone save companies millions" has no client and no window. It is not in the table.

## Sales and marketing

### Positioning

1. Category: "Your AI transformation partner."
2. Outcome: "from AI-absent to AI-native," and "Win the next decade."
3. Enemy: a 6-month strategy and a 200-slide deck. Also "forgetting about your people."
4. Mechanism: audits, then change management and tooling, then story-point squads.
5. Commercial: "you pay for features delivered, not hours logged." No number.
6. Proof: a logo line, then two named Claude rollouts, then anonymous bullets on job posts. The case-study library is locked.
7. Risk reversal: none found. Terms are "as is."
8. Who, said in the X post and the job posts more than on the homepage: large companies, Fortune 500, and, on the post, F2000 and PE portcos.

Lines worth keeping in a swipe file:

- "No 6-month strategy work. No 200-slide presentations." https://www.tenex.co/
- "you pay for features delivered, not hours logged." Same page.
- "The Boss = the decider." https://www.tenex.co/playbooks/build-an-ai-strategy-that-works
- "gross productivity gain is not realized savings." https://www.tenex.co/the-big-question/ai-strategy-where-to-start
- "what AI does, what a person still does, and where approval sits." https://www.tenex.co/workshops/closing-the-ai-gap
- "Stop debating AI. Start deploying it." The closer on the blog posts.
- "Stay on the right side of history." Footer CTA on the marketing pages.

Voice on the homepage is short and declarative. The strategy playbook is looser ("eating an elephant," "any tusk people?"). That playbook's opening puts a board in the room: "They feel the pressure (from their team, board, customers)." Wil's buyer often is the board. The scare is theirs.

### Funnel and CTAs

The action on the marketing pages is "Get Started," which goes to https://www.tenex.co/get-started. H1: "Ready to Tenex your business?" No calendar link was in the pages crawled. No HubSpot or Calendly URL showed up in the extracts.

The get-started meta description, which is not repeated in the visible body: "No BDRs — partner-reviewed intake."

Visible promises on that page: "Learn how enterprises are building & executing org-wide AI strategies." "Get access to our world-class technical AI talent." "Build a bespoke partnership with Tenex based on business goals & major bottlenecks."

The diagnostic is a second door, same shape of form, at https://www.tenex.co/diagnostic. It is linked from the sitemap. It was not in the main nav text the Chrome extract showed (Home, AI Transformation, AI Engineering, Who We Are, Careers, Resources, Blog, The Big Question, Playbooks, AI Workshop, Newsletter, Get Started).

**INFERENCE:** a visitor who only uses the nav never sees the word "diagnostic" or "bootcamp." They see Get Started. The free 5-day offer lives on X and on the Typeform, not in the nav.

Other doors:

- Workshop gate, https://www.tenex.co/workshops/closing-the-ai-gap. Full name, email, company, job title, and a required checkbox for the newsletter. "Your presentation and worksheet open on this page after you sign up." Not submitted.
- Value-chain explainer, email plus the same newsletter checkbox. https://www.tenex.co/ai-value-chain
- ultrathink email form. https://www.tenex.co/ultrathink
- Article footers repeat an email field.
- Careers "Apply" leaves the site for Ashby. Build First is a candidate path, not a client path: a solo prototype, a GitHub history, a YouTube demo under 10 minutes, and a form. Roles on that form: Forward Deployed Engineer or AI Strategist. https://www.tenex.co/build-first
- Email on the site: `human@tenex.co`.

No thank-you URL was in the sitemap. The forms were not submitted, so the after-submit page was not seen. The Typeform definition includes a thank-you screen: "Thanks for your interest in Tenex Agents!" and "We've received your details and agent-suite interests." "Agent-suite" is not a phrase on the tenex.co pages crawled.

### Qualification questions

Get-started form, required unless noted. https://www.tenex.co/get-started

- First name, last name, work email, phone, company name, job title.
- Annual revenue: "<$1M", "$1M-$5M", "$6M-$20M", "$21M-$50M", "$51M-$100M", ">$100M".
- "Which services are you interested in?": AI Transformation, AI Engineering, Both.
- "Describe your specific needs you’d like our solutions to support."
- "How did you hear about us?": search, "AI App (ChatGPT, Perplexity, etc)", X, LinkedIn, "JJ Englert", "Claude Code Community", Instagram, YouTube, Referral, Newsletter, Podcast, Webinar, Other.

The diagnostic form uses the same identity and revenue fields. The service question becomes "Which diagnostic are you interested in?" with AI Transformation, Product & Engineering, or Both. "How did you hear about us?" is not marked required on that form. The needs prompt says "our diagnostic" instead of "our solutions." https://www.tenex.co/diagnostic

Bootcamp Typeform, a different qualifier, at https://form.typeform.com/to/vk5i1x9Q. Full name, work email, job title. Revenue: "Under $5M", "$5M to $20M", "$20M to $50M", "$50M to $100M", "Over $100M". Then priority of implementing AI, clarity on where AI applies, how much AI is already implemented, "What would make a Tenex Agent Bootcamp successful for you?", and where they heard about it. The welcome screen says "Takes 1 minute 30 seconds." There is no headcount question and no funding question.

The two revenue lists do not match each other, and neither matches the X post's ">$100m in revenue or funding" as a gate. The Typeform offers "Under $5M" as a real choice. The post says the bootcamp is for companies above $100 million. Both are in the record. See the table.

### Lead magnets

- The complimentary diagnostic (a project, not a file).
- The free bootcamp waitlist (X and Typeform only).
- "Closing the AI Gap," 16 slides and a worksheet, after a form.
- The AI value-chain explainer, after an email.
- ultrathink.
- Playbooks, ungated, "no consulting required" on the index, with a "Talk to us today" close on the strategy one and "Hire Us As Your Chief AI Officer" on several others.

### Content

Blog index, https://www.tenex.co/blog. H1: "Field notes for the AI-native company." Twelve posts, fetched. Two are the Advantage and WebFX stories. The rest are explainers (evals, Claude skills, an SDLC essay, Kimi, vectors, "slop," a PHP security essay, a video-editor review). Footer CTA on the posts: "Stop debating AI. Start deploying it." then Get Started.

Playbook index, https://www.tenex.co/playbooks. "Each playbook is a step-by-step guide built from real client work. Pick one, follow the instructions, and ship the result in your own stack—no consulting required." Seventeen playbooks, all fetched. Several are someone else's method with a Tenex close: Vercel's lead-qualification agent, HubSpot's CMO on answer-engine optimization, Gauntlet's CTO on evals, a cinematic-ads workflow, a Gamma deck workflow. The strategy playbook is the one written as Tenex's own audit. **INFERENCE:** the library is a top-of-funnel how-to shelf. It is not the catalog of what a squad delivers.

The Big Question, https://www.tenex.co/the-big-question. "Each piece takes one question we hear from executives and answers it with the method we use with clients." Two essays. One is the triage matrix. One is a Claude Code tutorial, "How to Build Your First AI Agent."

Events, https://www.tenex.co/events. "Live workshops, build sessions, and webinars with the team embedded in client repos — plus recordings of every past session." The five event pages fetched are past "Human in the Loop" sessions (November and December 2025, virtual, Riverside). Each saved page is the title, the date, "Hosted by Tenex," and a newsletter form. The recording is not in the text.

ultrathink, https://www.tenex.co/ultrathink. H1: "ultrathink." "Twice a week, 10,000+ execs and builders read ultrathink for the AI news that matters and what to do about it." The workshop checkbox calls the same letter "Tenex’s weekly Applied AI newsletter." The index lists editions from November 2025 through 21 July 2026. Bodies were not fetched. See `not-fetched-newsletter.txt`.

Build First and the careers page are a hiring brand: "Come make history," 22 open roles, all New York, all on-site. Engineering 5, Marketing 5, Operations 1, People 1, Strategy 10. https://www.tenex.co/careers

### Trust, in the order a visitor hits it

Homepage: headline, three offers, "Partnered with the best" (tool logos), a ticker that says "Built by builders, trusted by leaders," then "Stay on the right side of history" and Get Started. The two named client stories are not on the homepage. They are blog posts.

**INFERENCE:** the first screen sells the category and the pace. The proof that has a client's name is two clicks away, and the proof that has an operating number in a job ad is on a careers subdomain. A one-person firm that copies the homepage order will hide the only story it has.

## What Wil should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the ladder.

1. **Fit call: one workflow, not a company transformation.** The workshop is "one workflow of your own." The fit call can do that in 30 minutes. What job, who does it, what they would rather keep. Do not open with "enterprise AI strategy" or a 2-week free engagement. https://www.tenex.co/workshops/closing-the-ai-gap

2. **Job map: use their interview, and write down the five quantities.** Steps, hours a week, who else touches it, what breaks, which system. Then frequency, time, cost, impact, effort to fix. That is the map. Their version interviews 6 to 12 people and wants about 30 survey responses, because they are inside a company the size of Advantage or WebFX. His version interviews the person closest to the job, and the owner. https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

3. **Job map: the buyer keeps a recommendation of what goes live.** The transformation page's report can be "run with or hand back to us for execution." The X post says "recommend what to take live first." Say that in one sentence on his map: here is the job, here is the measure, here is what we would put in the build, and this fee comes off that build if you go ahead. Their report is not described as a credit. His is. https://www.tenex.co/ai-transformation

4. **Build: the measure is a sentence with a baseline, a target, and a date.** Copy the shape of "improve [measure] from [baseline] to [target] by [date]." For the repair shop, the unit is already dollars of vendor credits and lines matched. Add where any saved hours go, or do not count the hours. "Minutes nobody redirects don’t count." https://www.tenex.co/the-big-question/ai-strategy-where-to-start

5. **Build: one insertion point, not the whole company.** "Break every workflow on your roadmap into 5–15 micro-steps, then find the most repetitive, time-expensive one. That’s your AI insertion point." For him the roadmap is one job. The insertion point is the retyping, the matching, the status check. The rest of the job stays with the person. https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

6. **Ladder: name the rung in their phase language, only as far as his ladder.** Single-player tools is tool adoption. A single-player process that runs on a defined path is headless. A person who still approves is governed, and it is also "where approval sits." A step that has to be modeled "like a junior employee," with a checkpoint, is the agent rung, and the person on the exception is the last rung. He does not need "multiplayer, multifunction" to say this. https://www.tenex.co/playbooks/build-an-ai-strategy-that-works

7. **Ladder: "less human review" is a later decision, not the sales line.** The essay says meeting the readiness checks "earns the next step, like a second team, more of the workflow or less human review, and each step is its own test." His ongoing work can be that next test on the same job. He should not sell a second team. https://www.tenex.co/the-big-question/ai-strategy-where-to-start

8. **Fit call form: three questions, not their wizard.** Which of these is it: take a recurring job off the team, finish something a tool already started, or I am not sure. A sentence on the job. Work email. Their phone number, revenue bands to ">$100M", and the essay-length needs box are a screen for a partner-reviewed enterprise intake. While his price is open, he does not need a budget band. https://www.tenex.co/get-started

## What not to copy, and why

- **The enterprise motion.** Fortune 500, F2000, ">$100m in revenue or funding," "enterprises valued at $50 billion," a 70-person New York office, monthly travel to client sites, a Technical Product Manager plus Forward Deployed Engineers. Different buyer, different delivery. The takeaways say leave it. This section repeats that so it does not leak into a homepage.
- **A free multi-day build on the prospect's data.** The bootcamp's "Up to 4 working prototypes" and the job post's "We Prototyped it" are how a staffed firm lowers friction for a large account. For one person, that gives away the build. The map recommends. The build is paid.
- **A complimentary 2-week diagnostic as the fit call.** Their free intensive is sized for a leadership team and a survey of the company. His free step is 30 minutes. Making it free and two weeks long would erase the reason the Job map is a product.
- **Story-point squads as a price.** "You pay for features delivered" is a posture. Without a defined point and a dollar, it is not a price a shop owner can accept. Publishing their OTE band ($224K–$394K) as if it were a project fee would be a category error. His price stays undecided until he sets it.
- **"We are your Chief AI Officer."** That is a seat inside a company that has an AI portfolio. His buyer has a parts counter, a service drive, or a shop floor.
- **The locked case-study library.** "This work is shared privately" withholds the proof. His one shop story should be on the page, with the caveat that says what the $217K includes. Two public Claude-rollout posts plus anonymous job-ad numbers is not a model to copy.
- **The "$1M a week" recruiting bullet, the 125x, and the 70,000 hours.** They are not his numbers, and the first two are not tied to a name he can check.
- **The content machine.** Twice-a-week (or weekly) newsletter for "10,000+ execs," seventeen how-to playbooks, a Big Question essay program, and past webinars with other companies' product leads. A field note from a job he has done is the piece that fits. The query factory does not.
- **Logo rows of model vendors as "Partnered with the best."** Anthropic, OpenAI, Vercel, Lovable, LangChain, Braintrust, and Cursor are a partnership claim. He should not invent one.
- **The scare, and the board in the room.** "AI isn’t scary. Ignoring it is." "Win the next decade." "pressure (from their team, board, customers)." An owner who is the board does not need to be told he is on the wrong side of history.
- **Contradictory public facts.** Listed below. Copying the confidence is optional. Copying the loose counts is how a small practice gets caught.
- **Build First, the pod-of-five hiring stunt, and "modern-day Bell Labs."** That is a recruiting identity. It is not an offer to a dealer.

## Private equity

**Noted for reference, NOT our strategy for now.**

The marketing pages crawled do not use the words private equity, portco, or portfolio company. Two other surfaces do.

X post, 30 September 2026: "We've helped dozens of midmarket cos, F2000 enterprises, and PE portcos deploy agents into production." **Noted for reference, NOT our strategy for now.** https://x.com/businessbarista/status/2105404947106075038

Strategist job posts: "AI training program built across a private equity firm’s portfolio. We developed the playbook, led training, and prepared internal champions to carry the work forward after the engagement ended." No fund name, no portco name, no dollar result. **Noted for reference, NOT our strategy for now.** https://jobs.ashbyhq.com/tenexlabs/a7b5a192-5ed9-469b-95e2-90d401c025b9

That is the whole of it. There is no PE page, no EBITDA line, no hold-period offer, and no separate PE calendar. It is still not a motion to put on Wil's site, in his industries, or in his fit-call script.

## X evidence

One post. Alex Lieberman, @businessbarista, 30 September 2026. https://x.com/businessbarista/status/2105404947106075038

The post is not website copy. The waitlist link in the post (`https://t.co/qi43VColFy`) redirects to the Typeform above. That redirect was a read-only header check. The form was not submitted.

What the post says the bootcamp is:

> A 5-day, free intensive to find & build high-impact agent opportunities with your real systems & data.

Three phases, in the post's words:

> 1) Find Opportunities - We interview the people closest to the work to identify where agents could have the biggest impact.
> 2) Map Workflows - We map workflows step by step, including the systems involved and expected business impact.
> 3) Prototype Agents - We build prototypes on your data, demonstrate the results, and recommend what to take live first.

What the buyer holds at the end:

> 1) A clear AI roadmap with ROI per opportunity
> 2) Up to 8 mapped opportunities
> 3) Up to 4 working prototypes

Who and what it costs:

> Midmarket & enterprise companies doing >$100m in revenue or funding. Bootcamps are free. They're an opportunity to see what AI agents can do for you before committing.

How it is supposed to lead to paid work, still only in the post:

> Taking agents to production is complex and nuanced and we've built a repeatable process for handling the final mile of applied AI, which allows us to take agents into production in ~2 weeks.

"Led by our world-class FDEs & strategists, on the ground, working with your teams and systems." The site's strategist jobs say client-site travel "approximately once a month," not a 5-day on-site. Those are different sentences.

The Typeform welcome screen, fetched 26 October 2026, still matches the post's shape and not the site's diagnostic:

> A free, five-day sprint where our team works alongside yours to identify high-impact AI agent opportunities, map workflows, and build prototypes using your real systems and data.

The form's revenue question does not match the post's floor. Choices start at "Under $5M" and end at "Over $100M." The post says the bootcamp is for companies above $100 million "in revenue or funding." The form does not ask about funding. The thank-you line says "agent-suite interests," which the post does not say.

Where the post and the site disagree, the table below is the record. The useful overlap, and the only one Wil should take, is the sequence inside phases 1 and 2: talk to the person who does the work, map the steps and the systems, name the impact, then decide what is allowed to go live. Phase 3, the free prototypes, stays theirs.

## Open questions and contradictions

| Topic | One surface | Another surface |
| --- | --- | --- |
| What discovery is | X post and Typeform: free 5-day bootcamp, prototypes on real data, up to 8 opportunities and up to 4 prototypes | Diagnostic page: complimentary 2-week survey, interviews, and a report. No prototype. Transformation page: 30-, 60-, or 90-day audit and an AI-Adoption Report. |
| Who it is for | X post: ">$100m in revenue or funding" | Typeform choices include "Under $5M". Get-started choices include "<$1M". Neither form asks about funding. |
| How a diagnosis becomes a build | Transformation page: the team can "hand [the report] back to us for execution." Terms: a separate MSA or SOW, and the site is not an offer. | X post: free, "before committing," then production "in ~2 weeks." Strategist job: a four-week diagnostic for an unnamed insurer, then "delivered the first two." No surface states a credit or a build price. |
| Length of "two weeks" | Diagnostic page: the whole engagement is 2 weeks. Engineering page: sprint cycles are 2 weeks, which is delivery cadence. | WebFX post: a four-week sprint, with conversations "over two weeks." Strategist job: a two-week sprint that includes a prototype and a rollout across three hospitals. |
| How many companies | Playbook: "hundreds of companies" and "hundreds of AI audits" | Big Question essay: "more than 100 mid-market and enterprise companies." X post: "dozens." |
| Industries | Playbook: media, real estate, SaaS, deep tech | Job posts: media, healthcare, retail, finance, sports. The named stories add retail services (Advantage) and digital marketing (WebFX). |
| Scale label | X post: "F2000 enterprises" | Job posts: "Fortune 500." A playbook title says "Fortune-50-Ready Decks," which is a Gamma tutorial, not a client list. |
| Headcount and founding | Job posts: founded in New York in 2025, "currently 70 people," and either "will double" or "will reach 140" | About page: no year, no headcount. Marketing pages do not say 70. |
| Partners | Homepage alts: Anthropic, OpenAI, Vercel, Lovable, LangChain, Braintrust | FDE post: "Anthropic, OpenAI, and Cursor are partners." |
| Newsletter cadence | ultrathink hero: "Twice a week" | Workshop checkbox: "weekly Applied AI newsletter." |
| X handle | JSON-LD `sameAs`: `https://x.com/tenex` | Footer and about links: `https://x.com/tenex_labs`. The post tags `@tenex_labs`. |
| LinkedIn | JSON-LD: `https://www.linkedin.com/company/tenex-co/` | Footer href: `https://www.linkedin.com/company/tenexco/` |
| Case studies | A nav-level promise is not on the homepage. `/case-studies` is a password wall. | Operating numbers that would be case studies are on job posts, unnamed, or in the two Claude blog posts. |
| Bootcamp on the site | Not in the nav, the sitemap, or the tenex.co page text | Still the H1 of the Typeform, and still the 30 September post. |

Open for Wil, not for them:

- His fit call stays 30 minutes. Their shortest public diagnosis is two weeks or five days, and those two are not the same product. He does not need to pick one of theirs.
- The Job map should name the unit before the build. Their essay shows what happens when the unit is "hours" with nowhere to put them. His shop story can answer it. The question is whether the map states dollars recovered, hours removed, exception rate, or all three.
- Whether the repair shop can be named. Their strongest public AI stories use real names (Advantage, WebFX) and also a locked library. An anonymous "local shop" is weaker than the story he has, if he is allowed to use it.
- How far up the ladder he will say out loud. Their workshop stops at "where approval sits." That is enough for a homepage. A dealership agent that acts without a person is not a claim this crawl supports, because the crawl never mentions a dealership.
- Price. They publish "free" for the front door and nothing for the build. He can do the same for the fit call and still put a number on the Job map later. The credit ("this fee comes off the build") does the filtering work their revenue dropdown is doing, without importing ">$100M".
