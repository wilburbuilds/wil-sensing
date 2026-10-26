# Hello Paralegal strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no guide downloaded, no newsletter signup.

Wil Sensing is a one-person consultancy for local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer is a free 30-minute fit call, then a paid Job map credited toward the build, then the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The lead line is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided.

This pass studies how Hello Paralegal packages one job. It is not a market Wil should enter. The law-firm product, the offshore paralegal bench, and the litigation essay stay on their side of the line.

Every important claim below is quoted from a page saved under `research/ai-specialists/hello-paralegal/pages/` or from the two X posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those surfaces. The line "We find 10 hrs/week your law firm loses to repetitive work and automate it" does not appear on the pages crawled or in the two posts.

## Top 5 takeaways

1. **Steal the one evening, and leave the catalog.** The X post walks one intake in the lawyer's own night: a call at 8:47pm, a reply within ninety seconds, a few practice-specific questions, a conflict check, a booked consult or a gentle follow-up, and a one-page brief waiting in the morning. The homepage sells "Elite Global Paralegals" from $5 an hour. The blog then sells six agents. A linked guide sells fifty. Wil's page should do what that post does for a dealer or a shop: one job, in that buyer's day, with what the person still decides. https://x.com/helloparalegal/status/2104536148429443440 and https://helloparalegal.com/

2. **A price is published. Several prices are published. They are not one product, and none of them is his.** The homepage says "Most paralegals start at just $5 per hour." The terms add a 5% fee of first-year salary when the client hires the person in-house. A blog table prices "Managed deployment (Hello Paralegal)" at "$600–$1,200/mo." Another post says "a full agent stack from Hello Paralegal runs $800-$1,500 per month." The free guide has no service price. Wil's price is still open. Putting any of these numbers on his page would price a bench he does not staff, or a law-firm retainer he does not sell. https://helloparalegal.com/ and https://blog.helloparalegal.com/2026/04/06/what-is-agentic-ai-lawyers-guide-2026/

3. **Say what the 30 minutes is for. Put the map of the job in the paid Job map.** The Get Started page lists what the intro call covers, including "a step-by-step guide to help you identify high-impact tasks you can offload." The intake article's first step is "Map Your Current Intake Flow." The stack article tells the reader to track a week in 15-minute blocks before deploying anything. That map is the cousin of his Job map, and they give the instruction away in a post. His version is paid and credited toward the build. The map should name the job, the steps, the exceptions, the source of truth, and the number that will decide if the build worked. https://helloparalegal.com/get-started and https://blog.helloparalegal.com/2026/04/02/how-to-automate-client-intake-solo-law-firm-ai-2026/

4. **The build is one leak, then a pause, then the next rung.** "The deployment process starts with your intake agent because that’s where the ROI is fastest and most visible." "Deploy one at a time, let it run for 2 weeks before deploying the next, and you’ll have a much cleaner picture of what each agent is doing." "Many solo lawyers start with intake and billing, see the impact, and expand from there." That is his ladder as a sales order: the fit call picks the job, the Job map writes the measure, the build does that one job, and ongoing work climbs a rung the buyer can stop. Opening with six agents, or a PDF of fifty, is the part to leave. https://blog.helloparalegal.com/2026/02/27/ai-agents-replace-paralegal-tasks/ and https://blog.helloparalegal.com/2026/02/24/solo-lawyer-ai-agent-stack/

5. **The line under his headline is already written, and it is an owner line.** On X: "The machine handles the busywork. The human keeps the judgment." The same post says the lawyer sees every lead and "can step in and take over any second," and "The client's information stays on the firm's own systems. Nothing is uploaded to me, or to anyone." That is the ladder in one story: a person still does the job, then a system drafts and books, then the person takes the exception and can take the whole thing back. Say it about a parts counter, a warranty clerk, or a PO match. Leave bar complaints, Clio, and "50 AI agents." https://x.com/helloparalegal/status/2104536148429443440

## Method and coverage

Three hosts. No public Calendly, HubSpot, or other booking page was linked from the pages crawled. "Schedule a Call" on the main site is copy next to a form. The X post says "book a call through the link in my bio." The bio URL is not in the saved post, and this pass did not open the profile.

The crawler names files by path, not by host, so a later host's homepage would overwrite `index.txt`. The app homepage was copied to `onhercules-app.txt` before the main pages were fetched again. `onhercules-404.txt` is the app's `/pricing` response. `blog-home.txt` is `https://blog.helloparalegal.com/`, saved under its own name for the same reason. `pricing-faq-bundle.txt` is the accordion answers from the public pricing bundle. The crawler's visible text on `pricing.txt` lists the questions and does not include the answers, because the answers render only after the button is opened. No accordion was clicked and no form was submitted.

Logs: `crawl-log-1.tsv` is the first main-site pass. `crawl-log-2.tsv` is the blog. `crawl-log-3.tsv` is the app. `crawl-log-4.tsv` is a one-page attempt that did not open the author archive. `crawl-log-blog-home.tsv` is the blog front page. `crawl-log.tsv` is the main site after the colliding filenames were fetched again. `not-fetched.txt` is the leftover queue from the author attempt. Those URLs are already saved as posts. The crawler skips `/author/` the way it skips tag archives, so `https://blog.helloparalegal.com/author/ann/` was not fetched. The byline and the person URL are on the article pages.

Main site, `helloparalegal.com`, rendered in headless Chrome. It is a Next.js app. Sitemap lastmod dates are 9 October 2025. Saved: home, why-hp, selection, pricing, get-started, about-us, resources, help-support, terms, privacy, the blog index, and contact. `/blog` and `/blog/` are the same final URL and the same `blog.txt`. Soft 404s, saved and not treated as pages: `/about`, `/services`, `/case-studies`, `/work`, `/careers`, `/privacy-policy`, and a malformed path `/www.resolveoncord.com`. `/contact` returns "This is the Contact page." There is no separate case-study library.

Blog, `blog.helloparalegal.com`, WordPress. The main site's `/blog` index is a shell that lists post titles. The articles themselves are on this host. Twenty-two posts were saved, from 18 September 2025 through 6 April 2026, plus three category archives that repeat those posts, two default WordPress sample pages, and the blog front. The front page's visible body is the theme menu ("Front Page," "Sample Page," "About," "FAQs," "Authors," "Events," "Shop," "Patterns," "Themes," "Twenty Twenty-Five"). Those theme items were not crawled. Tag archives were not crawled. Shop was not crawled.

The intake article's WordPress HTML, and the saved visible text, are missing the currency figures in the cost section. The page prints `,200`, `~/mo`, and `to /month`. This teardown does not fill those blanks in. Other posts on the same blog print dollar amounts normally.

App, `https://aiagents-helloparalegal.onhercules.app/`, one public page, linked from the intake article as the AI workflow service. Seed paths such as `/pricing` and `/about` on that host return "404 / Page Not Found." No second page of the guide was fetched, because the only action is an email form, and it was not submitted.

Not crawled on purpose: LawSikho and the other outbound links on the why-hp page, Google review short links, LinkedIn profiles, `api-blog-helloparalegal.lawsikho.dev` (an image host in JSON-LD), and the X profile. The main site's client logo images have no firm names in the visible text.

## 1. Product

### What they sell

The surfaces do not sell one thing.

**The homepage sells people.** H1: "Elite Global Paralegals to Support your Team | Transparent Pricing, Maximum Value." Meta description on the marketing pages: "Legal Partners Who Think Like Founders." https://helloparalegal.com/

> Hello Paralegal embeds top paralegals trained in US law into your law firm or business.

> Get the right paralegal within 8 hours

> Most paralegals start at just $5 per hour

The same page names a "Fully Embedded Model":

> We don't just provide paralegals - we seamlessly integrate them into your workflow like an extension of your own team.

Hours are "full-time (40 hours/week) or flexible, on demand." They also "offer recruitment agency services if you're hiring for your in-house team." The paralegal "communicates using your tools, attends your meetings, and functions just like full-time employees" and will "match your normal business hours." Talent is "Elite paralegal talent from India."

The terms, effective 01 September 2025, name the company and the two contracts. https://helloparalegal.com/terms

> These Terms of Use (the "Terms") constitute a legally binding agreement between Addictive Learning Technology Limited, its subsidiaries, and affiliates ... The Platform is owned and operated by Addictive Learning Technology Limited, having its registered office at LawSikho, Space Creattors Heights, 3rd floor, Landmark Cyber Park, Golf Course Extension, Sector 67, Gurugram, Haryana - 122102.

> The Platform offers two primary service models: (a) where Clients may engage Paralegals through long-term or full-time placements ("Recruitment Services"), and (b) where Clients may engage Paralegals on an hourly or project-specific basis ("Project-Based Services").

Project-based paralegals "are engaged and managed by the Company." Recruitment is an introduction, and the person "becomes your employee or contractor." The same terms: "We are not a law firm and do not provide legal advice."

**The blog and the X post sell a system that does intake.** The intake article's meta description: "Save 5+ hours a week, triple your conversion rate, and never miss a lead again." https://blog.helloparalegal.com/2026/04/02/how-to-automate-client-intake-solo-law-firm-ai-2026/

> A proper AI intake system does several things at once:
>
> Responds instantly, 24/7, to calls, web forms, texts, and chat messages
> Asks practice-specific qualification questions (for PI: accident date, injury type, insurance; for divorce: marriage length, assets, kids, whether the other party retained counsel)
> Scores and routes leads based on how valuable they are to your firm
> Books consultations directly into your calendar
> Sends confirmation emails and SMS reminders to cut no-shows
> Pushes data into your CRM or case management software automatically

Later on that page: "that is exactly what we do at Hello Paralegal AI workflow service. We map your intake process, build the automation, and hand it off working." The closer: "We build the intake automation for you, connect it to your existing tools, and hand it off working."

The X post is the same job, told as one night. It is quoted in the X section. It is not website copy.

**The free guide sells a list.** https://aiagents-helloparalegal.onhercules.app/

> 50 AI Agents Every Solo Law Firm Needs in 2026
>
> The definitive guide to automating your practice, reducing malpractice risk, and reclaiming 15+ hours per week.

Seven categories, with agent counts: Intake 8, Billing 7, Communication 8, Reputation 6, Marketing 7, Operations 8, Litigation 6. "50 agents total across all categories." Five are named on the page: Smart Intake Qualifier, Deadline Sentinel, Auto-Biller, Client Pulse Monitor, Reputation Shield. "Plus 45 more agents inside the full guide." The guide file was not downloaded. This teardown does not describe its interior.

The agentic-AI article tries to hold the people and the system together. https://blog.helloparalegal.com/2026/04/06/what-is-agentic-ai-lawyers-guide-2026/

> At Hello Paralegal, we combine trained remote paralegals with AI workflow automation, one doesn’t replace the other.

The homepage never says that. The homepage does not mention an agent, intake automation, or AI.

### Packaging, prices, and the guarantee

**People, on the marketing site.**

Homepage and pricing page: most paralegals start at $5 an hour. The pricing page's visible text prints the figures as "$05 /hour" and "05%". The homepage, the terms, and the pricing FAQ bundle print them as $5 and 5%. https://helloparalegal.com/pricing

Pricing page, the two cards:

- "Managed by Hello Paralegal." Full-time or on-demand. "Your subscription begins only when your paralegal is onboarded and gets to work." Includes "100% Match Guarantee," "Free Replacement Policy," "Time to Hire: as little as 8 hours," onboarding, "Ongoing Training & Development," "Monthly Performance Reviews," a recruiting lead, "HR, Payroll & Benefits Management," an account manager, "Legal Staffing Strategy & Planning," and a "Dedicated WhatsApp Group."
- "Your In-House Team." "When your future paralegal signs an offer, we charge a 05% of their first-year salary, depending on the number of hires you make." "Free Replacement Policy for 2 Months." "Time to Hire: as little as 3 days."

The FAQ bundle on the same page:

> Most paralegals start at just $5/hour. We also provide recruitment agency services if you're hiring for your in-house team. In this case, when your future paralegal signs an offer, we charge a one-time fee equal to 5% of their first-year salary, depending on the number of hires you make.

> No, we believe in transparent pricing. The cost you are quoted is the price you will pay, with no hidden fees or surprise charges.

> No long-term commitment is required.

The terms are tighter than the FAQ, and they are the contract. https://helloparalegal.com/terms

> unless otherwise agreed in writing, most Paralegals start at USD $5/hour. However, Clients acknowledge and agree that actual hourly rates vary by scope, complexity, seniority, and availability. ... Fees are exclusive of taxes, withholdings, FX/transfer fees, and other statutory charges, which are your responsibility.

> when a Paralegal onboards with a Client, we will charge a recruitment fee equal to five percent (5%) of the Paralegal’s first-year salary, unless a different fee is agreed in writing.

> Invoices ... are due and payable within fourteen (14) days of the invoice date.

> All payments are non-refundable except as expressly provided in these Terms or agreed in writing by us. ... replacement is the exclusive remedy and refunds are not provided unless expressly stated otherwise in writing.

> No payments are processed through the Platform directly.

Project-based delivery also includes "one (1) hour/month of complimentary legal staffing strategy and planning" and says ongoing training "may be available only for Paralegals enrolled in LawSikho courses."

**The guarantee does not mean what the headline suggests.**

Get Started: "No hiring headaches, no risk - if you're not satisfied, you don't pay." https://helloparalegal.com/get-started

Why-hp: "If Our Paralegal Isn't The Right Fit For Your Needs, We’ll Provide A Free Replacement. It’s That Straightforward." https://helloparalegal.com/why-hp

Terms:

> the "100% Match Guarantee" is deemed fulfilled when Clients hire or engage a Paralegal we present. It is not a guarantee of performance outcomes or fitness for a particular purpose.

> If the Clients are dissatisfied with any Paralegal’s work during a project, and all invoices relating to the appointment of that Paralegal are paid, we will provide up to two (2) free replacements for that project’s duration with no added charges.

For a direct hire, the replacement is "one (1) free replacement search" within two months, invoices paid. Time-to-present figures "are targets only ... and are not service-level commitments." "Except as expressly stated in the match guarantee and replacement provisions above, we do not guarantee specific results, accuracy, quality, productivity, or timelines."

**INFERENCE:** a buyer who reads "you don't pay" on Get Started and the terms on the same day cannot tell whether dissatisfaction voids the invoice or only earns a replacement after the invoice is paid. The terms answer it. The hero line does not.

**Agents, on the blog.** These figures are in the posts. They are not on the homepage or the pricing page.

| Where | What they attach the number to | Figure |
| --- | --- | --- |
| https://blog.helloparalegal.com/2026/04/06/what-is-agentic-ai-lawyers-guide-2026/ | "Managed deployment (Hello Paralegal)" | "$600–$1,200/mo depending on scope." Build time "2–4 weeks." They maintain it. |
| Same page, FAQ | "Purpose-built managed deployments ... like those from Hello Paralegal" | "$600–$1,200/month ... include build, integration, and ongoing maintenance." |
| https://blog.helloparalegal.com/2026/02/24/solo-lawyer-ai-agent-stack/ | "a full agent stack from Hello Paralegal" | "$800-$1,500 per month depending on practice size and the specific agents deployed." |
| https://blog.helloparalegal.com/2026/02/27/ai-agents-replace-paralegal-tasks/ | Title and meta | "For Under $1,500/Month" and "less than $1,500 a month combined." |
| Same page, stack table | Six agents, "Est. Monthly Cost," not labeled as their invoice | "$850 – $1,700/mo" total. Intake and phone "$150 – $300" each, documents "$200 – $400," billing and deadline "$100 – $200," research "$150 – $300." |
| https://blog.helloparalegal.com/2025/11/02/law-firm-support-structure-ai-agents/ | Visible text | "You go from zero to running in days, not months." The visible FAQ heading is not followed by answers. |

The same November page's FAQ structured data, which is in the saved file and not in the visible FAQ, says "most solo firm deployments take 5 to 10 business days from kickoff to live agents" and that an agent deployment plus a part-time coordinator "typically runs $35,000 to $65,000 per year total." Those sentences are not treated here as the page a person reads.
| Intake article | "What Does AI Intake Cost?" | The amounts are missing from the HTML. Visible leftovers include "Average case value: ,200", "Tool cost: to /month", and "a one-time cost" with no figure. |
| Phone article meta | "AI answering services for law firms" | "$25-95/mo". The rendered comparison table on that page says a human answering service is "$300 to $1,200/mo" and an AI phone agent is "Custom (typically lower)." The article body in the extract stops at that table. |
| App | The guide | "Get the Free Guide." No service price. A stat on the page, "$429K / Lost in admin costs annually," is not a fee. |

The agentic article also prices the alternatives it is not: DIY "$150–$400/mo," legal SaaS "$300–$800/mo," a dev-agency retainer "$2,000–$8,000/mo."

**INFERENCE:** a reader can leave with at least four Hello Paralegal agent prices ($600–$1,200 a month, $800–$1,500 a month, under $1,500, and a table that tops out at $1,700) plus a $5 hour and a 5% placement fee, and no page that says which number is the current offer. The homepage price is the only one next to a contract.

### Engagement model and deliverables

Homepage, "How It Works," https://helloparalegal.com/ :

1. "Schedule a Call." "Fill out a quick form and schedule a 30-minute call with us."
2. "Meet With Our Team." "Our experts will assess your needs, learn about your organization, and recommend the best solutions."
3. "We Source." "present it to you in as little as 8 hours."
4. "Meet Your Paralegal." "If the paralegal is selected from your side, we complete the agreements, help in onboarding, and provide continuous support."

Get Started says the 30 minutes covers project understanding, "Org Chart Analysis," talent requirements, a look at "pre-vetted paralegals ... ready to hire within hours," a "Delegation Strategy," "Real-World Success Stories," "Payments And Terms," and timelines. https://helloparalegal.com/get-started

The terms add what happens after the form, which the form itself does not ask: "we will request additional information to scope the Clients’ needs, including but not limited to practice area, tasks, hours, timeline, budget, confidentiality needs, and supervision plan." "no engagement is formed until confirmed in writing (including email) by us."

Selection is a hiring funnel, not a build: attract, screen resumes, first interview, skills test, "Final Interview With Senior Leadership," then "Finalisation, Payment Discussions & Onboarding," then "Ongoing Support." "Over 20,000 people have applied so far less than 1% have been accepted." https://helloparalegal.com/selection

The AI posts describe a different delivery. From the six-agent article:

> The deployment process starts with your intake agent because that’s where the ROI is fastest and most visible. From there you add agents in order of where you’re feeling the most pain. Most solo attorneys have all six running within 30 to 60 days.
>
> Setup takes days. You don’t need to know how to code. You configure the rules, test the outputs, and launch.

The stack article's order is intake, phone, billing, documents, research, deadlines, "8-16 weeks for a full stack," and "give each agent 2 weeks to settle." The deploy guide's first step is to write the current flow and split "which steps require your judgment, and which steps follow a rule you could write down."

**INFERENCE:** the staffing path ends in a person on a WhatsApp group. The agent path ends in a workflow the firm is supposed to run, with a monthly fee for maintenance. The site never says which path a visitor who clicks "Get Started" on the homepage will be sold.

### Named frameworks

Visible names, and where they live:

- "Fully Embedded Model." Homepage.
- "100% Match Guarantee" and "Free Replacement Policy." Pricing, Get Started, terms. The terms define the guarantee as presentation, not performance.
- "Hello Paralegal AI workflow service." Intake article, pointed at `https://aiagents-helloparalegal.onhercules.app`.
- Three tiers: "AI Assistants," "AI-Enhanced Software," "Agentic AI." The agentic guide. Agents "Define what you want. Review flagged decisions." Assistants do not "run without you."
- Four layers: Triggers, Reasoning, Tools, Memory. Same family of posts.
- Six named agents in the February posts: Intake, Phone, Document, Billing, Research, Deadline. The app renames five of them (Smart Intake Qualifier, Deadline Sentinel, Auto-Biller, Client Pulse Monitor, Reputation Shield) and adds Marketing and Reputation as categories the February stack does not lead with.

### How they describe the work

Homepage, the staffing version: "Complex tasks can slow your team down. With Hello Paralegal, you can delegate time-consuming work to top-tier paralegals - so you can focus on what matters most."

X, the one-job version, quoted below. The closest website cousin is the agentic guide:

> Agentic AI is something different. It’s a system that runs without you. It wakes up when something happens, figures out what to do, does it across multiple systems, and either finishes the task or hands it to you when it needs a human decision.

> Agents work while you’re not working. Tools work when you use them.

The same posts keep a person on the judgment. The stack article: "Agents don’t eliminate your judgment. They eliminate the mechanical work that precedes it." The six-agent article: "Don’t configure a document agent to send novel legal arguments without your eyes on them first." The agentic guide cites ABA Formal Opinion 512 and Rule 5.3, and says an agent that sends client communications with no review mechanism "violates Rule 5.3."

The second X post is a different argument. It is in the X section. It says the machine drafts and a person still has to win. It does not describe the $5 service or the intake build.

### Ideal customer and industries

Words they use:

- Homepage: "attorneys to law firms to businesses," "your law firm or business." "Whether you need 1 paralegal or 20." "Most of our clients hire multiple paralegals across different departments."
- Why-hp task list: "Contract Drafting, Litigation Support, Legal Research, Compliance Assistance, Document Review, Case Management, Intellectual Property Support."
- Form, company size: "1-10," "11-50," "51-200," "201-500," "500+." https://helloparalegal.com/get-started
- Blog: "solo lawyer," "solo attorney," "solo and small law firms." The stack article's ideal reader is "a solo doing $150,000-$400,000 per year, working 50+ hours per week."
- App: "solo law firm," "solo practice."
- X: "more than 30 US law firms," "a solo lawyer in Texas," "your practice."

The 51–200 band is on the form. The articles are written to a one-lawyer practice. Nothing on these pages addresses a dealership, an equipment dealer, a trade, or a 50–200 person operating company.

**INFERENCE:** the economic buyer of the homepage is someone who can put a remote paralegal on US legal work and supervise them. The economic buyer of the posts is a solo lawyer who is also the intake desk. Wil's buyer is neither.

### Proof and how a case is built

There is no case-study page. `/case-studies` is a soft 404. The homepage's proof is volume and speed: "Over 400 Organizations Worldwide," "Top 1%," "only 1 out of every 100 applicants," "Save over 70%" "compared to entry-level US hires," "Hire within 8 Hours." No client is named in that text. "Sample profiles" are mentioned. The profiles' text was not in the extract.

The about block puts the Google ratings under Addictive Learning, the parent, not under a client list. https://helloparalegal.com/why-hp

> We're the team behind multiple 7-figure brands, including
>
> Addictive Learning (our parent company) began its journey in 2018 as a bootstrapped startup. In just six years, by 2024, it evolved into a publicly listed company on the Indian stock market.

Then "6000+ Jobs," "19000+ Internship," "29000+ Freelance," and two "4.8 / Google Rating" lines, "2,400+ reviews" and "1,000+ reviews." Founders on that page: Ramanuj Mukherjee, "Co-Founder & Chief Executive Officer," and Abhyuday Agarwal, "Co-Founder & Chief Operating Officer." Ann Srivastava is not named on the marketing pages. The blog byline is a separate fact, in the X section and the contradictions table.

The blog's proof is a city, a practice area, and a before/after, inside the article. No firm URL, no date range, no "what this number includes."

| Where it appears | Who is named | The number they lead with | Tied to Hello Paralegal in the sentence? |
| --- | --- | --- | --- |
| Intake article | "Frontier Law Center" | Onboarding "from 90 minutes to 40 minutes," conversion "from 10% to 35%" | The sentence does not say they did the work. A later paragraph uses the 25% to 35% band as the "Frontier Law Center benchmark." |
| Intake article | "A PI lawyer in Phoenix" | "30 to 35 calls a month," "3 to 4 cases," then "9 to 12" eight weeks later. "February 2026." | "had us build her intake system." |
| Agentic guide | "Maria," a solo PI attorney in Austin | Web-lead conversion "from 34% ... to 61%," "$94,000 in annual fees." "(We ran the math.)" | The scenario is "what agentic AI looks like." It does not say Maria is a client. |
| Agentic guide | "A family law solo in Denver" | Invoice payment "from 47 days to 19 days," receivables "dropped by $38,000 in the first quarter" | "who deployed this agent." |
| Hire-a-paralegal article | "A solo estate planning attorney in Phoenix" | "18.4 hours a week," "$8/hr," "$1,408" a month, "11 additional" plans, "$24,200 in new revenue against $4,224 in paralegal cost" | "through Hello Paralegal." |
| Hire-a-paralegal article | "A PI firm in Atlanta" and "A family law solo in Seattle" | "two virtual paralegals at $10/hr," "23 days" faster; "$62,000/year" replaced, "$41,300" saved | Atlanta "added" the paralegals. Seattle "replaced" a hire. The Hello Paralegal name is in the Phoenix paragraph, not repeated in these two. |
| X, 28 September 2026 | "a solo lawyer in Texas" | "more than 30 US law firms." "zero hours on intake admin." | "I've built exactly one system I'm genuinely, personally impressed with. It belongs to a solo lawyer in Texas." No firm name, no dollar result. |

**INFERENCE:** the articles are written in the shape of a case study and do not give a buyer a way to audit one. The Phoenix estate-planning story and the Phoenix intake story are different paragraphs, with different prices and different jobs. They should not be merged into one client. Wil's $217K and 11,139 lines is a stronger owner-facing proof if he writes what the number includes. Copying "Maria, we ran the math" would add a precise dollar with no caveat.

## 2. Sales and marketing

### Positioning

Two headlines are fighting.

The site a human lands on: "Elite Global Paralegals to Support your Team." Enemy: US entry-level cost, slow hiring, freelance platforms with "Uncertain" talent. Mechanism: vetting, an 8-hour shortlist, a person embedded in the firm's tools. Commercial: "$5 per hour," "Transparent Pricing, No Hidden Fees." Proof: 400 organizations, top 1%, a free replacement.

The post and the X account: the enemy is a lead that dies in voicemail. The mechanism is a system that answers, qualifies, books, and writes the brief. The commercial line on X is "I only take on a few." The commercial line in the posts is a monthly deployment. The proof is the night itself, then the city stories.

Lines worth keeping, each with its source:

- "The machine handles the busywork. The human keeps the judgment." X, https://x.com/helloparalegal/status/2104536148429443440
- "Not a chatbot bolted onto a website. A system that answers like your best receptionist, prepares like your sharpest associate, and never drops the ball." Same post.
- "No lead ever dies in a voicemail." Same post.
- "Agents work while you’re not working. Tools work when you use them." https://blog.helloparalegal.com/2026/02/24/solo-lawyer-ai-agent-stack/
- "The agent will handle the rules. You’ll handle the judgment calls." https://blog.helloparalegal.com/2026/02/26/deploy-ai-agent-law-firm-guide/
- "You configure the rules, test the outputs, and launch." https://blog.helloparalegal.com/2026/02/27/ai-agents-replace-paralegal-tasks/

The homepage voice is a staffing landing page: "Transparent Pricing, Maximum Value," "Plug & Play," "Ready to Scale." It is smoother than the X post and it does not name a job.

### Funnel and CTAs

Primary action on the main site is "Get Started," on the home page, why-hp, pricing, and the footer. It goes to https://helloparalegal.com/get-started or to the form on the same page. The button is "Let’s go!"

The form, not submitted, is the same on pricing, get-started, and resources:

- Email, placeholder "name@company-email.in"
- First name, last name, designation
- Company size: 1-10, 11-50, 51-200, 201-500, 500+
- Company name
- "Add Website / LinkedIn link"

There is no message field, no practice area, and no budget on the form. The terms say those questions come after the form is received.

No calendar URL appeared on the pages crawled. Get Started's H1 is "Here's what we'll cover in a 30-minute intro call," and the pricing FAQ says "fill out the Get Started form and schedule a call with us." **INFERENCE:** the public step is the form. Whether a calendar appears after "Let’s go!" was not tested, because the form was not submitted.

Other doors:

- `/resources`, "Free Guide: Hiring And Managing Paralegals Effectively," then the same form. The file was not downloaded. The page says the ebook covers hiring, workloads, relationships, trends, performance, cost, and "Legal Tech and Paralegals."
- Blog index, an email box, "Subscribe Now," plus a browser-notification prompt ("Subscribe" / "Remind Me Later"). Not submitted.
- The app, two email fields, "Get the Free Guide" and "Download Free Guide." "Instant download. 40+ pages." "We respect your privacy. Unsubscribe anytime." Not submitted.
- `/contact` is a stub. `/help-support` is a privacy template, not a help desk. The real privacy contact is `hi@helloparalegal.com` on https://helloparalegal.com/privacy
- X, 28 September 2026: "book a call through the link in my bio. I’ll show you exactly where your intake is leaking today."

The blog posts close on the service. They do not show a second seller, a community, or a Skool. The six-agent article says "No contracts with staffing agencies," on a site whose homepage is a staffing offer.

### Lead magnets

Two. A hiring ebook behind the same qualification form as the sales call, and a "50 AI agents" guide behind an email address only. The ebook is about managing paralegals. The guide is about automating a solo practice. They point at the two products.

### Content

The readable blog is the article host, not the theme front page. Twenty-two posts.

The 2025 posts are the staffing catalog: legal process outsourcing (18 September), an ultimate guide to paralegal services (30 September), "AI Won’t Replace Your Paralegals..." (3 October), how to hire offshore paralegal services (6 October), "Before You Hire a Paralegal, Read This" (16 October), research agents (31 October), and "AI Agents + One Human" (2 November). The November post's schema author is "hello-paralegal-admin."

From 17 February 2026 through 6 April 2026 the titles are a solo-lawyer query list, most of them bylined Ankita Srivastava: Google reviews, "bleeding revenue," disbarment, bar complaints, agents versus software, a survival guide, the six-agent stack, sanctions, how to deploy a first agent, the six agents under $1,500, the agentic guide, the phone agent, how to automate intake, how to hire a virtual paralegal, and "What Is Agentic AI for Lawyers?" Several February posts are a day apart.

The main site's `/blog` index shows the six newest titles and says "Loading blogs..." above them. Categories on that index: Legal Operations, Paralegal Services, Uncategorized, Uncategory.

**INFERENCE:** the February-to-April run is a search library for a solo lawyer who types "AI intake" or "virtual paralegal $5," and the article hands that person either the $5 hire or the monthly agent deployment. It is a staffed publishing pace. A one-person practice that copies the cadence will publish pages it cannot stand behind. The part that fits Wil is one field note from a job he has done, in the shape of the X post, not in the shape of "6 AI agents that replace a $65,000 paralegal."

### Trust placement

Homepage order: the $5 line and the 8-hour line, then 400 organizations, then talent / cost / speed, then the embedded model, then "top 1%" again, then the four-step, then the price again. Logos are not named. The guarantee a buyer can enforce is in the terms, not in the hero.

The help page is a different document from the privacy policy. https://helloparalegal.com/help-support is titled "Help and support," "Last updated: July 28, 2025," and gives "Email: privacy@company.com," "Phone: (555) 123-4567," and "Address: 123 Privacy Street, Data City, DC 12345." The privacy policy, "AS UPDATED ON 01 September 2025," is Addictive Learning Technology Limited and `hi@helloparalegal.com`. https://helloparalegal.com/privacy

The blog is carrying default WordPress pages. The sample page still says "Hi there! I’m a bike messenger by day" and "The XYZ Doohickey Company was founded in 1971." https://blog.helloparalegal.com/sample-page/

## 3. What Wil Sensing should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder.

1. **Fit call and the first screen: one job, in the buyer's day.** The X post does not open with a category or a count of agents. It opens with a person who called while the lawyer was asleep, and it ends with the lawyer walking into the consult already briefed. Wil's first screen can do that with the repair shop: the PO lines, the credits, what the person still checks. "Hand off the busywork. Keep the decisions." is the same instinct as "The machine handles the busywork. The human keeps the judgment," and his line is the one that says what the owner keeps. Leave "50 AI Agents" and "Elite Global Paralegals" as opening moves.

2. **Fit call: publish the 30 minutes, and make it about the job.** Their Get Started list is a staffing sales call (org chart, talent review, payments). The useful item is the delegation step: identify the high-impact tasks to take off the team. His version of that list is short. What the job is. Who owns it. Whether the source of truth exists. What would count as fixed. Then the paid map. Their form's "51-200 employees" band happens to match his company size and still describes a law-firm lead form, down to the `.in` email placeholder. He does not need designation, LinkedIn, and a five-band headcount quiz to book 30 minutes.

3. **Job map: write the flow the way their step 1 writes intake, and charge for it.** "Write down every way a potential client can contact you right now. ... Now write down what happens at each touchpoint, and how long it typically takes you to respond." Then split judgment from rules. The stack article adds a week of 15-minute time notes before any build. For him, the artifact is the job, the current steps, the exceptions, the system the work already lives in, and the measure. Theirs is a blog instruction and, on the staffing side, a free call. His is paid and credited toward the build. Say what the buyer holds at the end, in one sentence.

4. **Job map: agree the number there.** Their agent prices sit on top of ROI math the intake page cannot even print, and on city stories that say "we ran the math" without showing it. His proof is already a count and a dollar figure. The map should say which of those the build is for, what "missed vendor credits" includes, and what the person still reviews. He should not print "save 5+ hours," "reclaim 15+ hours," or "triple your conversion rate" as his promise. Those are their headlines, and the page that offers an "honest ROI breakdown" is missing its dollar figures.

5. **Build: one job, the leak, and a pause before the next.** Intake is their first agent "because that’s where the ROI is fastest," and they tell the reader to run it two weeks before adding another. The deploy guide's test for a first agent is a threshold the buyer can feel: "You’re spending more than 10 hours/month on intake," or "You’re losing leads to voicemail regularly." His version of that test is the Job map's measure, not a menu of six. The repair-shop match is the worked example. The next build is the next similar job, after this one has a number.

6. **Autonomy ladder: use their handoff, in shop language.** The X system replies, asks, checks, books, follows up, and writes the brief, and the lawyer can take over any second. The blog's ladder is implicit: a tool the person operates, then a workflow with review checkpoints, then an agent that runs and flags the exception. "An agent that sends client communications without any attorney review mechanism violates Rule 5.3" is the governed rung, said to a lawyer. His rung, said to an owner: we work in the system you already run, a person still approves the exception, and you can turn the handoff back into a person's job. He should not cite the ABA, malpractice, or a bar complaint. His buyers do not have that vocabulary, and the fear is the wrong fear. A missed vendor credit is money. A missed court date is their world.

7. **Ongoing work: one rung, stoppable, maintained.** Their agent offer includes "ongoing maintenance" in the $600–$1,200 line, and they warn "Set it and forget it" is wrong: "Review agent performance monthly." The staffing offer's ongoing unit is a person plus a monthly review and a WhatsApp group. His ongoing unit is the next rung of a job he already built, not a pod and not a paralegal. The monthly look at exceptions is the part worth keeping. The headcount is not.

## 4. What not to copy, and why

- **The law-firm market.** Solo intake, Clio, conflicts, bar rules, demand letters, dockets. The packaging lesson is the one job. The vertical is theirs.
- **Either published price.** $5 an hour buys a person in India on a WhatsApp group, under a Gurugram company's terms. $600–$1,200 a month, $800–$1,500 a month, and "under $1,500" do not agree with each other, and the component table goes to $1,700. His price is undecided. A dealer who sees $5 will think he is a staffing agency. A dealer who sees $1,200 will think that is the price of six unnamed agents.
- **"If you're not satisfied, you don't pay," next to a guarantee that is fulfilled when the client hires the person they were shown.** The terms say replacement after the invoice is paid, and refunds are not the remedy. A promise he cannot score will become the first objection. His shop story can name the unit. Their hero line does not.
- **The two products on one brand.** A homepage that sells the $65,000 paralegal's replacement as a person, and a blog that sells six agents "for under $1,500" as the thing that replaces that person. The agentic FAQ says both at once. A one-person practice that does this will sound like it has not chosen.
- **Anonymous precision.** 18.4 hours, $1,408, 11 plans, $24,200, Maria's $94,000, Denver's $38,000, Frontier's 10% to 35%. No case-study URL, no firm the buyer can call, and on the intake cost section, no digits in front of the commas. Wil has one story with a count and a dollar figure. One story with a caveat beats a grid of unnamed cities.
- **The catalog.** Six agents, then fifty, with marketing and reputation and litigation in the same PDF as intake. That is the opposite of one pain. The app's own sneak peek already adds review monitoring and "content creation, SEO optimization, and lead generation." Those are not the intake job.
- **The query factory and the default WordPress pages.** A post every day or two in February 2026, a public sample page about a bike messenger, a help page with a 555 number and "123 Privacy Street," and a contact page that says "This is the Contact page." The confidence of the X post is worth studying. The unfinished site around it is how a small firm gets caught.
- **Headcount and "top 1%" as the trust stack.** "400 Organizations," "20,000" applicants, "less than 1%," two different Google review counts under the parent company, "multiple 7-figure brands," a listed company. He is one person. The shop result is the trust. The bench is theirs.
- **Offshore staffing as a delivery model.** Full-time hours matched to the US day, HR and payroll included, training "only for Paralegals enrolled in LawSikho courses," the client supervises so the work is not the unauthorized practice of law. That is a different company from a Job map and a build.
- **The second X post as a homepage.** Litigation exploding, Jevons, "$15 in compute," "The machine drafts. Someone still has to win." It is a sharp essay. It is not his offer, and it is not aimed at an owner who wants a job taken off the floor.

## 5. X evidence

Two posts. They are X posts, not pages of the site. The first one is the product the homepage does not describe. The second one does not mention Hello Paralegal's service at all.

**28 September 2026.** https://x.com/helloparalegal/status/2104536148429443440 Ann Srivastava, @helloparalegal. 27 likes, 1,674 impressions in the saved metrics.

> I have consulted for more than 30 US law firms on their intake and how to automate it the right way.
>
> In all that time, I've built exactly one system I'm genuinely, personally impressed with. It belongs to a solo lawyer in Texas.

The system, in the post's order: a call at 8:47pm while the lawyer sleeps; a reply "within ninety seconds" that "uses their name and speaks to the exact problem"; "a few smart questions" for that practice area; a check "against the firm's existing clients so a conflict never slips through"; a flag of "urgent, routine, or not a fit"; a consult booked on the calendar, or a follow-up "Once. Twice. Until they answer or clearly say no"; "a one page brief" in the morning. Then the control lines:

> None of it leaves the lawyer's control. The client's information stays on the firm's own systems. Nothing is uploaded to me, or to anyone.
>
> And the lawyer sees everything. Every lead, every status, every message the system sent. They can step in and take over any second they want. The machine handles the busywork. The human keeps the judgment.

> The lawyer spends zero hours on intake admin and all of their hours on the work only a lawyer can do.
>
> That is what a world class intake system feels like. Not a chatbot bolted onto a website.

> I build these by hand, one firm at a time, so I only take on a few.
>
> ... book a call through the link in my bio. I'll show you exactly where your intake is leaking today, and what a system like this would look like for your practice.

What this adds: a single named job, a scarcity line, a data-stays-here line, and a human override. The homepage has none of those. The blog's intake article has the job and names Lawmatics, Smith.ai, and Clio Grow as the tools. The X post names no tool and no price. The blog's "Hello Paralegal AI workflow service" is the closest web cousin, and it sends the reader to the 50-agent guide, which is a list, not this night.

**21 October 2026.** https://x.com/helloparalegal/status/2112948965859840294 554 likes, 172,812 impressions.

> Everyone says AI will kill litigation.
> They have it backwards.
>
> AI is about to make litigation explode.

The mechanism in the post is price: "A demand letter that billed 4 hours now takes 4 minutes." "A motion to dismiss that cost $15,000 in associate time now costs $15 in compute." "A 60 page discovery response that took a paralegal two weeks lands in your inbox by 7 a.m." The post calls this Jevons paradox, says cooperative work such as a standard NDA "dies," adversarial work grows, and "AI can 10x the filings. It cannot 10x the judges." The close:

> The paperwork was never going to be your career. The machine has that now.
> The growth is in the fight.
>
> The machine drafts.
>
> Someone still has to win.

What this adds: a public argument the website never makes. It does not mention intake, the $5 rate, the monthly deployment, Addictive Learning, or a call to action. The "$15 in compute" and "$15,000" are illustrations inside the essay. They are not a Hello Paralegal price.

Where the two posts sit against the site: the September post is a one-person, few-clients intake practice. The site is a staffing company that says its paralegals have worked with over 400 organizations and that most clients hire more than one. The October post says the machine now does the paperwork a paralegal used to do. The homepage sells that paralegal. The blog's FAQ is the only sentence that tries to sell both.

## 6. Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| What is for sale | Homepage: embedded paralegals, "$5 per hour," or a 5% placement fee | X, 28 September: one intake system, built by hand, "a few" firms at a time. Blog: a managed agent deployment at $600–$1,200 a month, and elsewhere $800–$1,500. |
| Agent price | "Under $1,500/Month" in the six-agent title | The table on that page totals "$850 – $1,700/mo." The stack post says "$800-$1,500." The agentic guide says "$600–$1,200/mo." |
| Intake cost | The intake article's H2 is "What Does AI Intake Cost? An Honest ROI Breakdown" | The amounts in that section are missing from the HTML (` ,200`, `~/mo`, `to /month`). |
| "You don't pay" | Get Started: "if you're not satisfied, you don't pay." | Terms: the match guarantee is fulfilled when the client hires the person presented. Replacement is the remedy. "refunds are not provided" unless agreed in writing. Invoices are due in 14 days. |
| Hours saved | Intake meta: "Save 5+ hours a week." Stack post: "5-8 hours per week" on intake. App: "reclaiming 15+ hours per week." | Deploy guide: "more than 10 hours/month on intake" as the test for a first agent. X: "zero hours on intake admin." The "10 hrs/week" sentence is not on these surfaces. |
| Who has done this | X: "more than 30 US law firms," and one system, a solo lawyer in Texas | Homepage: "Over 400 Organizations Worldwide." |
| Who is speaking | X display name: Ann Srivastava, @helloparalegal | Blog byline: Ankita Srivastava. Article JSON-LD person URL: `https://blog.helloparalegal.com/author/ann/`. About page founders: Ramanuj Mukherjee and Abhyuday Agarwal. The author archive was not crawled. This teardown does not treat those names as one person. |
| Phone-agent price | Phone article meta: "$25-95/mo" | The table in that article: "Custom (typically lower)" against a human service at "$300 to $1,200/mo." |
| Contact | "Schedule a Call" and a 30-minute agenda | `/contact` is "This is the Contact page." No booking link on the pages crawled. The X bio link was not in the saved post. |
| Privacy contact | Policy: Addictive Learning Technology Limited, `hi@helloparalegal.com`, 01 September 2025 | Help page: `privacy@company.com`, "(555) 123-4567," "123 Privacy Street," 28 July 2025. |
| Both products | Agentic FAQ: remote paralegals and AI workflow automation, "one doesn’t replace the other" | Six-agent article: "No contracts with staffing agencies." October X post: the machine has the paperwork. |

Open questions for his offer, which this crawl does not answer:

- The unit in his Job map is still his to name: dollars recovered, hours the person no longer spends, the exception rate, or all three. Their sites show what happens when the unit is missing. The intake "ROI" section is the example. His shop story can answer it.
- Whether the credited Job map needs a public price. They publish the $5 and hide the agent price behind four blog figures and a free PDF. Both choices are on the properties. Which one filters a local owner is still his call.
- How far the ladder goes out loud. The X post lets the lawyer take over any second, and the blog says a review checkpoint is an ethics requirement. Saying "a person keeps the exceptions" will matter more to his buyer than a count of agents. How far an agent should go inside a dealership is not answered here, because these pages never mention one.
- Which second job, after vendor credits, is the next map. Their filter is "where the ROI is fastest" and a test the buyer can feel (10 hours a month, leads dying in voicemail). The filter travels. The examples do not.
- The September X post and the corporate site may be the same brand or two brands on one name. The pages do not say. Quoting the night is fair. Quoting "400 organizations" as proof of the intake system would merge two claims the sources keep apart.

## Where the raw pages are

`research/ai-specialists/hello-paralegal/pages/` holds the extracts. Each file starts with the URL. Quotes in this report were checked against the homepage, pricing page, pricing FAQ bundle, terms, Get Started, why-hp, the intake article, the agentic-AI article, the six-agent article, the stack article, the deploy guide, the app homepage, and the two posts in `research/ai-specialists/_x/posts.md`.
