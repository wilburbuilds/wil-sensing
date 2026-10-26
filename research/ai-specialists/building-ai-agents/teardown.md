# Building AI Agents strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no newsletter signup, the Tally form was not advanced.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). Offer, in order: a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with humans on the exceptions). Headline: "Hand off the busywork. Keep the decisions." Proof on hand: $217K in missed vendor credits found at a local auto repair shop by matching 11,139 PO lines. Pricing is undecided.

Akshay Patel, Building AI Agents (buildingaiagents.ai). The public site is a one-page services pitch plus an application. The workshop arithmetic lives on X. Those surfaces are quoted separately and are not merged.

Every important claim is quoted from a file under `research/ai-specialists/building-ai-agents/pages/` or from the two Akshay Patel posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on the site or in those posts.

## Top 5 takeaways

1. **Use a room of owners to earn the fit call. Leave the tweet's prices off the page.** The 28 July 2026 post says the first workshop "wasn't a disguised pitch," that 18 owners were in the room, and that both deals "closed 1–2 weeks later." That delay is his free 30-minute fit call, not a close in the room. The 22 June 2026 post puts dollars on the same kind of event: "$5k per build" and "Cost to put on workshop: $600." The website never prints those figures. Steal the sequence (teach, listen, follow up). Leave the dollar lines in his posts. https://x.com/notanotherpatel/status/2082110295267283082 and https://x.com/notanotherpatel/status/2069030104135540880

2. **Their public step 1 is a free application they also call an audit. The site never says $500.** The apply page eyebrow is "FREE CONSULTATION," the title is "AI Automation Audit," and the sentence is "the highest-value opportunities in a free consultation." https://www.buildingaiagents.ai/apply The string "$500" is not on the pages crawled and not in the two posts. Steal "You don't need to know what to automate" for the fit call. Leave the ten-step form, and leave the buyer's investment bands, which start at "Under $10,000." https://tally.so/r/lb9zOo

3. **The Job map is the baseline, the one target, and the test, written before the build.** On the marketing page: "Before work starts, we document the baseline, target, and how it will be tested." The discover step says to set the baseline "in hours, response time, errors, or revenue waiting to be collected," then "flag anything that should not be automated." https://www.buildingaiagents.ai/agency-site?v=20260723-26 His difference is that the map is paid and credited toward the build. Their public door is the free consultation. Keep his version. Name the artifact the buyer holds.

4. **Steal the one-job case: a before, an after, and a person still reviewing.** Smile Obsession is "two to three days" of doctor payroll cut to a packet "for review in 45 minutes." https://www.buildingaiagents.ai/agency-site?v=20260723-26 That is "Hand off the busywork. Keep the decisions." in a shop story. None of the three studies states a dollar found. Wil's $217K and 11,139 PO lines are the stronger owner number if he writes the caveat (what the credits include, and that a person still checks the exception). Leave dental payroll, newsletter sponsorships, and the Chicago influencer as their proof, not his.

5. **The local workshop and the corporate training are different offers. The ladder is the work after launch.** The site's secondary offering is "Private, hands-on sessions for leadership and operating teams" "alongside our implementation work," labeled "EXEC WORKSHOPS," "CORPORATE TRAININGS," and "PRIVATE AI EVENTS," with no date and no price. https://www.buildingaiagents.ai/agency-site?v=20260723-26 The X posts describe a room that produced audits and two builds. The ongoing rung on the site is "a fallback for anything that needs human judgment" and support "agreed before the build begins." Keep those three motions apart. Do not hang a workshop price, a training SKU, or an unnamed retainer on his autonomy ladder.

## Method and coverage

The marketing site is a small app on `www.buildingaiagents.ai`. There is no sitemap and no WordPress REST corpus in the crawl: the seeded paths `/about`, `/about-us`, `/services`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, and `/privacy-policy` returned HTTP 404. Direct requests for `/workshop` and `/workshops` also returned HTTP 404. Those URLs were not service pages.

What was fetched:

- `https://www.buildingaiagents.ai/` saved as `index.txt`. Title and meta description are present. The visible body is empty. The homepage HTML is a shell whose body is an iframe pointed at `/agency-site.html?v=20260723-26`, which redirects to `https://www.buildingaiagents.ai/agency-site?v=20260723-26`.
- That iframe document, saved as `agency-site__v-20260723-26.txt` (4,983 characters of visible text). The crawler recorded the same final URL twice. One file was kept.
- `https://www.buildingaiagents.ai/apply` and `https://www.buildingaiagents.ai/privacy`.
- The public Tally form linked from the apply page, `https://tally.so/r/lb9zOo`. Visible text is step 1 only. The form was not advanced and was not submitted.

Two extracts sit beside the crawler files, because `innerText` skipped real copy on pages that were fetched:

- `agency-site-dialogs-and-faq.txt`. Five FAQ answers live in closed `details` elements. Three case studies live in dialogs with `aria-hidden="true"`. Same URL as the marketing page.
- `tally-lb9zOo-fields.txt`. Question labels and options from the public `__NEXT_DATA__` payload on the Tally URL. The progress element in that HTML reads "Page 1 of 11" (`max="11"`). The visible line the crawler saved is "1 of 10."

Logs: `crawl-log-1.tsv` is the shell pass (homepage, privacy, and the 404 seeds). `crawl-log-2.tsv` is the marketing page, apply, privacy, and the homepage again. `crawl-log-3.tsv` is the Tally form. `crawl-log.tsv` matches the Tally pass. `not-fetched.txt` lists 434 `tally.so` URLs the form page links to (Tally's own site, templates, login, help). Those were left. Max was 1 on that host so the crawl would not spend itself on Tally's product.

Not crawled on purpose: `smileobsession.com`, `adsalesasaservice.com`, `instagram.com/zhaofits/`, and the Loom embed on the Ad Sales dialog. The video was not played. No account was created. Nothing was typed into a field.

JS-rendered: the homepage shell, the apply route, and the privacy route come back as HTML from the server. The words a buyer reads on the homepage are the static iframe document, not a client-rendered app. The Tally form renders one step at a time in the browser.

Neither the pages nor the two X posts mention private equity.

## Product

### What they sell

Homepage title: "Building AI Agents | We automate your business." Meta description, on the shell page only:

> Turn everyday bottlenecks into done-for-you AI workflows that get launched, save time, and generate revenue without becoming the tech expert.

https://www.buildingaiagents.ai/

The marketing page's visible deck is a second wording, not the meta sentence:

> We find where AI creates the most value in your business, then build and launch the automation for you. Save time, move faster, and grow without becoming the tech expert.

H1 text the crawler saved: "Automate your inbound leads." The rotator list under it is "inbound leads, operations, payroll, HR, invoicing, business, reporting, client onboarding, and follow-up." A line above the headline: "2+ years building AI workflows." https://www.buildingaiagents.ai/agency-site?v=20260723-26

The page then sells one motion. "Every engagement starts by finding where time is lost, revenue is delayed, or the team is stuck chasing work. Then we choose one workflow and define the measurable win before we build."

Three numbered steps on the same page:

| Step | Name | Their line |
| --- | --- | --- |
| 01 | Discover & Diagnose | "Find where time, money, and attention disappear." |
| 02 | Define, Build & Validate | "Agree on the result before the build begins." |
| 03 | Launch, Monitor & Improve | "Make the result stick without creating another job." |

A second offer sits under About, marked "SECONDARY OFFERING":

> Corporate AI training
>
> Private, hands-on sessions for leadership and operating teams, built around the workflows they use every day. Available as a focused engagement alongside our implementation work.

The labels under that block, as the crawler saved them, are "EXEC WORKSHOPS," "CORPORATE TRAININGS," and "PRIVATE AI EVENTS." No agenda, date, city, or price is on the page.

Footer: "© 2026 Building AI Agents · BetterTech Inc." Email `hello@buildingaiagents.ai`.

### Packaging and price

No dollar fee for an audit, a build, a workshop, or a retainer is printed on `buildingaiagents.ai`.

What the marketing and apply pages do say:

- Apply page: "FREE CONSULTATION" and "a free consultation." https://www.buildingaiagents.ai/apply
- Each case-study dialog ends on a line of the form "The audit prices it." Smile: "Have a payroll like this? The audit prices it." Ad Sales: "Losing hours to manual review? The audit prices it." Zhaofits: "Leads going cold in your inbox? The audit prices it." https://www.buildingaiagents.ai/agency-site?v=20260723-26
- The guarantee is more work inside the scope "at no additional cost," not a published rate. Quoted below.

**INFERENCE:** "The audit prices it" says the audit is what puts a price on a workflow like the one in the story. It does not state the audit's fee. The apply page is the page that calls the first conversation free.

The application, on Tally, asks the buyer a budget question. It is not a fee card. Question, step 8 of 10:

> If we identify a strong opportunity, what investment range could you consider?

Options: "Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+", "Not sure—I need help scoping it." https://tally.so/r/lb9zOo

The two X posts, quoted in full in the X section, say "$5k per build," "Not including monthly retainers," and "Cost to put on workshop: $600." They are not copied into this price section as site prices.

"$500" does not appear on the pages crawled or in the two posts.

### Guarantee

Long form, in the "SUCCESS AGREED UPFRONT" block:

> One success metric. Agreed before we build.
>
> Before work starts, we document the baseline, target, and how it will be tested. If the finished system misses that target, we keep working within the original scope at no additional cost until it meets it, provided the agreed access, data, and business inputs remain available.

Short form, in the footer of the same page:

> Before the build begins, we agree on one measurable result and how it will be tested. If the completed system misses it, we keep working within the agreed scope at no additional cost.

The long form names "original scope" and the conditions (access, data, business inputs). The short form says "agreed scope" and drops the conditions. Both sentences are on https://www.buildingaiagents.ai/agency-site?v=20260723-26

The page does not show a missed target that was worked off. **INFERENCE:** a buyer can read the promise and still cannot see how a miss was scored.

### Engagement model and deliverables

Discover, from the visible page:

- "Map the repetitive work, delays, and handoffs across your inboxes, spreadsheets, CRM, and internal tools."
- "Establish the current baseline in hours, response time, errors, or revenue waiting to be collected."
- "Select the workflow with the clearest return and flag anything that should not be automated."

Build:

- "Set one measurable target, such as hours returned each week, time to first response, or fewer missed transactions."
- "Build around the tools your team already uses, so the system does not create another platform to learn."
- "Test the workflow against representative cases, edge cases, and safeguards before it goes live."

After launch:

- "Launch with clear ownership, alerts, and a fallback for anything that needs human judgment."
- "Monitor performance and correct failures before they become another source of team stress."
- "Report the result against the agreed metric and improve the system as the workflow changes."

FAQ, from the closed details on the same URL:

> Most focused builds target three to six weeks once the required access, data, and decisions are available. More complex integrations or regulated data can take longer. You receive the expected timeline before work begins.

> We monitor performance, surface exceptions, and improve the system based on real use. Anything requiring human judgment can be routed to the right person, and the level of ongoing support is agreed before the build begins.

The site does not use the word retainer. The 22 June X post says the $5k figure is "Not including monthly retainers." That clause stays in the X section.

The page does not say the buyer keeps the diagnostic if they stop. **INFERENCE:** the document they describe ("the baseline, target, and how it will be tested") is the cousin of a Job map. Whether the buyer holds it without hiring them is not answered.

### How they describe the work

Founder block:

> Akshay Patel founded Building AI Agents after years in consulting and commercial strategy. His industrial engineering background shapes how the company works: map the process, define the business result, build around the tools already in place, and keep the system performing after launch.

The three lines above that bio: "An operator's approach to automation." "Find the bottleneck. Define the result. Build around the team." The eyebrow the crawler saved is "AKSHAY PATEL · FOUNDER."

FAQ on fit:

> We work best with operations-heavy businesses where recurring processes depend on inboxes, spreadsheets, manual review, or repeated follow-up. Examples include multi-location healthcare, property management, financial services, professional services, media, logistics, and field services. The better test is whether the work is repeatable and costly in time, money, or attention.

FAQ on tools:

> Usually not. We build around the tools and accounts your team already uses wherever practical. If something new is required, we explain why and keep the steps your team must manage to a minimum.

FAQ if the buyer has no project:

> You do not need to arrive with a project brief. We look at where time is being lost, revenue is being delayed, and your team is stuck chasing work. Then we identify the process with the clearest measurable return.

No named agent product, no model names, and no stack list on the pages crawled. The Ad Sales dialog says "an agent." The Zhaofits dialog says "messaging systems." The Smile dialog says "a system."

### Named frameworks

No trademarked framework name is on the page. The method is the three steps, plus the founder's line "map the process, define the business result, build around the tools already in place." "Industrial engineering discipline, commercial strategy, and practical automation" is the about-line, not a product name.

Counts next to the bio, with no list behind them: "115+" "owners & executives trained in person" and "5,000+" "operators reading Building AI Agents playbooks each week." No playbook URL is on the pages crawled.

### Ideal customer

Who the marketing page names: operations-heavy businesses, and the industry examples in the FAQ above. Field services is the example closest to a trade. The page does not say dealership, equipment dealer, auto repair, Idaho, or Washington.

Who the form will accept, from the options: role from "Founder/Owner" through "Team Member" and "Other"; team size "Just me", "2–10", "11–50", "51–200", "200+". https://tally.so/r/lb9zOo

**INFERENCE:** "51–200" is the band that overlaps Wil's 50–200 person buyer. The form also invites a solo and a firm over 200. The marketing page never states a headcount. A dealer principal is not who the industry sentence is written for. A field-service owner is inside the sentence. Wil should keep his own nouns.

The only geography on the form is the scheduling line: "Choose three consultation windows (Central Time). Morning: 9 AM–12 PM CT; Afternoon: 1–4 PM CT." The pages do not say where Patel lives.

The X math post qualifies the four audits as "businesses +$1m rev /yr." That filter is not on the site. It is quoted under X evidence.

### Proof and how a case study is built

Visible results block: "Real outcomes. Real businesses." "Three real workflows with measurable before-and-after results. Open any case study to see the problem, the build, and what changed."

The card line "Trusted by top-tier newsletters & podcasts" and "Dedicated sponsorship sales for digital media" sit on the Ad Sales As A Service card, under that company's logo. **INFERENCE:** that pill is the client's own line, shown on their card. It is not counted here as a press list for Building AI Agents.

Pattern inside each dialog: a before/after chip, who the client is, "How it started," "The problem," "The build," three stat lines, the repeated line "Designed, built and monitored" "around the client's existing systems and workflows," a checklist, then "Apply to work with us" and "The audit prices it."

| Study | Named? | What the page leads with | Outcome number on the page? |
| --- | --- | --- | --- |
| Smile Obsession, dialog on https://www.buildingaiagents.ai/agency-site?v=20260723-26 | Yes. "Multi-location dental group." Card: "DENTAL GROUP." | "2–3 days → 45 min." "Doctor payroll · every cycle." | Time, not dollars. "45 min per payroll run" against "2–3 days what it took before." "Between visits when payroll can now be completed." |
| Ad Sales As A Service, same URL | Yes. "Jack · Co-founder, Ad Sales As A Service." Card: "MEDIA & CREATORS." | "1 hire avoided while coverage expanded." "Newsletter sponsorships collected at scale. By agents, not analysts." | "1,000s/day of newsletters processed." "More sponsorships surfaced than the original human process" "at a fraction of the cost." No dollar and no wage. |
| Zhaofits, same URL | Yes. "Fashion consultant & influencer · Chicago." | "2–4 days → 2–3 min." "Time to first message · every inbound lead." | "2–3 min time to first message" against "2–4 days what it could take before." Card also shows "57 posts" and "12.7K followers." |

Smile, how it started and what was built:

> Smile Obsession knew AI was important but did not know where to begin. We audited the business, ranked the opportunities by impact, and identified doctor payroll as one of the clearest first wins. It became the first of several projects we are now building together.
>
> Every pay cycle, their head doctor spent two to three days pulling production data and calculating pay for every dentist. The work spilled into clinical time and after-hours work.
>
> After shadowing the process and working through the compensation rules with the team, we built a system that pulls the data, applies each doctor's terms, and assembles the payroll packet for review in 45 minutes.

Ad Sales:

> We met the team at an in-person conference and began talking about the work behind their sponsorship business. They were paying a person to manually scan newsletters and wanted to know whether AI could do it at a scale that would remove the need for another full-time hire.
>
> We built an agent that scans thousands of newsletters every day and logs the sponsorships it finds. In the initial run, it surfaced more sponsorships than the human process at a fraction of the cost.

The dialog points at a video: "Hear Jack (co-founder) describe the build in the video above." The visible card says "On the ad-placement agents build." The video was not played. No quote from Jack is in the page text.

Zhaofits:

> Zhaofits was growing quickly, and every new video created a wave of inbound client and deal inquiries. The demand was good; the backlog was not. Replies could take two to four days, and scaling the old process meant adding more people.
>
> We implemented messaging systems that create a personalized first reply for every inbound lead in two to three minutes, preserving the feel of a one-to-one response while handling the volume.

**INFERENCE:** the 57 posts and 12.7K followers are identity figures on the card, next to the Instagram link. The page does not say the automation produced them. The result the page claims is the time to first message.

No study states revenue, a fee, or hours priced into dollars. Smile is the only one that says a person still receives the work product ("for review"). Ad Sales removes a hire. Zhaofits keeps "the feel of a one-to-one response" and "Same team more inbound handled."

## Sales and marketing

### Positioning

1. Category line, in the title: "We automate your business."
2. Outcome, in the meta description: bottlenecks become workflows that "get launched, save time, and generate revenue without becoming the tech expert."
3. Mechanism: find the loss, choose one workflow, agree the metric, build on the tools they already use.
4. Proof: three before-and-after jobs, then the founder and the two training counts.
5. Commercial: a free consultation by application. No public rate. A promise to keep working inside the scope if the metric is missed.
6. Who, said in the FAQ rather than the hero: operations-heavy businesses, with field services in the example list.
7. A side door: corporate training, workshops, and private events, "alongside our implementation work."

Lines worth keeping, from https://www.buildingaiagents.ai/agency-site?v=20260723-26 unless noted:

- "Understand first. Automate second."
- "See what your business can stop doing by hand."
- "One success metric. Agreed before we build."
- "flag anything that should not be automated."
- "Build around the tools your team already uses, so the system does not create another platform to learn."
- "a fallback for anything that needs human judgment."
- "No fluff. Here's how it actually works."
- "You don't need to know what to automate." https://www.buildingaiagents.ai/apply
- "Practical opportunities, not AI for AI's sake." Same apply page.

Voice: short declaratives, second person, the owner in the room. The failed state is time, a backlog, or another hire. The about page is the same voice as the hero, not a softer culture page.

### Funnel and CTAs

One action on the marketing page: "Apply to work with us →." It repeats in the hero, after the case cards, after the process, after the about block, in the closer, and inside each dialog. "View case studies" stays on the same page. "Tell us what is slowing your team down." is the line under one of the apply buttons.

Paths a visitor is offered:

1. The application at https://www.buildingaiagents.ai/apply. Eyebrow "STEP 1" and "FREE CONSULTATION." H1: "We find where AI creates the most LEVERAGE in your business."
2. The Tally form embedded there, and the link "Open the form in a new tab," which points at https://tally.so/r/lb9zOo.
3. Email `hello@buildingaiagents.ai`, in the footer and on the privacy page.

There is no public calendar and no Calendly link on the pages crawled. The form collects three Central Time windows. The thank-you block in the form payload says:

> Thanks—your audit is in review. Akshay will personally review it and follow up within one business day to confirm a consultation time.

The apply page says "Personal review of every application" and "You'll hear from us within 24 hours."

**INFERENCE:** the motion they designed is an application Patel reads himself, then a time he confirms. The buyer does not pick a slot on an open calendar. That is a qualifier in front of the conversation, with the qualifier doing most of the work.

Closer on the marketing page: "A short application to see whether your business is a fit."

### The application

Apply page body:

> You don't need to know what to automate. We learn how your business operates, uncover where time and money are being lost, and show you the highest-value opportunities in a free consultation.

Meta description: "Tell us where your business is getting stuck and apply for an AI automation audit."

The visible Tally step the crawler saved is "AI Automation Audit," "1 of 10," "Full name," required, placeholder "Enter your full name," and a Next button. Robots on that form URL: "noindex,nofollow." "Made with Tally."

The rest of the questions are in the public payload. Required except the website. Order:

1. Full name.
2. Email address.
3. Phone number.
4. Company name, and company website (not required).
5. "Your role" (Founder/Owner, Executive/Senior Leader, Operations, Sales/Marketing, Technical/IT, Team Member, Other) and "Team size" (Just me, 2–10, 11–50, 51–200, 200+).
6. "What are some pains that you’re experiencing in your business today?" Options: "Repetitive manual work or data entry," "Leads or follow-ups slipping through the cracks," "Slow customer onboarding, service, or support," "Reporting and data are disconnected," "Internal bottlenecks or slow approvals," "Knowledge is scattered across tools and people," "Scaling requires adding more headcount," "Not sure where AI or automation could help," "Other."
7. "How soon would you like to solve this?" Options: "Within 30 days," "1–3 months," "3–6 months," "More than 6 months," "Just exploring."
8. The investment question quoted above.
9. "Tell us more about what’s happening today. What is happening, who it affects, how often, and what have you tried so far?" Placeholder: "Share details..."
10. Three consultation windows, Central Time, Monday through Friday, morning or afternoon.

Privacy page, https://www.buildingaiagents.ai/privacy, "Last updated July 22, 2026.":

> When you complete an application or contact us, we may receive your name, contact information, business details, and the information you choose to share about your operations.
>
> We use this information to evaluate whether there is a fit, respond to your inquiry, prepare for conversations, and improve how we serve prospective clients. We do not sell information submitted through the application.
>
> The application may be delivered through Tally, which processes form responses on our behalf.

Same page: "Do not send passwords, private access keys, payment card information, protected health information, or other sensitive credentials through the application." The apply page shortens that to "Do not include passwords or sensitive credentials."

No page says what the consultation covers, how long it is, or what the buyer leaves with.

### Lead magnets

No ebook, PDF, webinar, or newsletter form was on the pages crawled. The substitutes are the free consultation (a meeting after an application, not a file) and the claim of playbooks read by "5,000+" operators a week, with no link. The X posts describe an in-person workshop. The site does not link a workshop date or a registration page.

### Trust placement

Order on the marketing page: years and the automate-your headline, three result cards, the three-step process and the metric promise, the founder plus "115+" and "5,000+", the corporate-training aside, the FAQ, the apply closer, the footer with BetterTech Inc.

**INFERENCE:** the three jobs do the convincing before the bio. The training counts have nothing behind them on this site. A one-person firm that copies "115+" and "5,000+" without a list will look like it is borrowing a crowd. Copying the order (one job with a number, then who he is) fits Wil, because he already has the shop story.

### Content

No blog, no article URLs, and no feed. The 404s above are the paths a content site would usually have. **INFERENCE:** this domain is a sales page and an application. Whatever the playbooks are, they are not published here.

### Follow-up hints

- "You'll hear from us within 24 hours."
- Thank-you payload: "within one business day."
- "Akshay will personally review it."
- Privacy: application data kept "only as long as reasonably needed for evaluation, follow-up, business records, or legal obligations." Controller is not named beyond the footer "BetterTech Inc." and `hello@buildingaiagents.ai`.

## What Wil Sensing should steal or adapt

Ranked. Each item maps to the offer he already has: fit call, credited Job map, build, autonomy ladder.

1. **Fit call: a room, then the call, with the close after the room.** The July post: "We had 18 business owners in the room. We showed them how we were using AI, answered their questions, and listened to how their businesses worked." "We gave so much value that a follow-up call felt like the natural next step." "Both deals closed 1–2 weeks later." https://x.com/notanotherpatel/status/2082110295267283082 For Wil, the room is owners he already knows in Idaho and eastern Washington, and the next step is the free 30-minute fit call. The post's prices stay off his page. **INFERENCE:** a dealer principal who will sit for 30 minutes will not want the pitch inside the workshop hour.

2. **Fit call: two sentences and the pain list, not ten pages.** "You don't need to know what to automate." https://www.buildingaiagents.ai/apply The pain options (manual work, follow-ups, onboarding, reporting, approvals, scattered knowledge, headcount, "Not sure where AI or automation could help") are a listening list for the call. https://tally.so/r/lb9zOo His public step can stay a sentence about the job plus the 30 minutes. The "51–200" band matches his buyer if he needs a headcount question. He does not need "Just me" or "$100,000+" to ask it.

3. **Job map: write the baseline, the target, and the test, and say the fee comes off the build.** Their line is "Before work starts, we document the baseline, target, and how it will be tested." The units they name are "hours, response time, errors, or revenue waiting to be collected," and "hours returned each week, time to first response, or fewer missed transactions." https://www.buildingaiagents.ai/agency-site?v=20260723-26 His map should name the job, the steps, the exceptions, the source of truth, and the number that will decide the build. The repair-shop match (11,139 PO lines, $217K in missed vendor credits) is already "revenue waiting to be collected." **INFERENCE:** their discover step is inside a free consult plus a build. His is a paid artifact. Spell that credit in one sentence. They never say the buyer keeps the pages if the build does not happen. He can say it.

4. **Build: one workflow, on the system they already run, with the person still on the review.** "we choose one workflow." "Build around the tools your team already uses." Smile: the system "assembles the payroll packet for review." https://www.buildingaiagents.ai/agency-site?v=20260723-26 That review line is his headline made concrete. "You receive the expected timeline before work begins" is the sentence to keep. "three to six weeks" is their timeline for "focused builds," not a number to print as his.

5. **Autonomy ladder: the third step is the rung, and some work stays with the person.** "a fallback for anything that needs human judgment." "Anything requiring human judgment can be routed to the right person." "flag anything that should not be automated." https://www.buildingaiagents.ai/agency-site?v=20260723-26 His ladder (tool, then headless, then governed, then agent-to-agent, with a person on the exceptions) is more specific than their three steps. The piece to take is the stop rule: name what the person still does, and agree the ongoing support before the build. The X post's "monthly retainers" have no price and no scope. Leave them unnamed until he has his own.

6. **Proof: one job, the before, the after, the caveat.** Lead with the job the way the Smile chip does ("2–3 days → 45 min," "Doctor payroll · every cycle"). Then say what the person still touches. Wil's paragraph is the credits, the line count, what those missed vendor credits include, and the exception a person still owns. Their "at a fraction of the cost" is the sentence to avoid, because the page never gives the cost.

7. **Guarantee: agree the unit, and attach the conditions if he ever promises more work.** "One success metric. Agreed before we build" is the right posture while his price is open. The long promise ("original scope," "agreed access, data, and business inputs") is the version that can be scored. The footer version ("agreed scope," no conditions) is the version that will get argued. If he prints a promise, print the long one, and only after the Job map has named the unit. Copying either sentence before that unit exists imports a blank check.

## What not to copy, and why

- **The X prices as if they were the website, or his.** "$5k per build," "Cost to put on workshop: $600," "2 clients worth $10k," "50% upfront." They are one founder's posts. The site a buyer reads calls step 1 a free consultation and prints no fee. Putting the tweet's numbers on Wil's page would invent a rate he has not chosen.
- **A $500 audit.** That figure is not on these pages and not in these posts. This teardown is not a source for it.
- **The investment menu.** "Under $10,000" through "$100,000+" is a question they ask the buyer, on a form. Publishing it on a local offer would set a five-figure floor in the owner's head before the fit call. "Not sure—I need help scoping it" is the only option that matches an undecided price, and even that sits on their menu.
- **The ten-step application as the front door.** Name, email, phone, company, website, role, team size, pains, timing, budget, a written story, and three time windows, before a person talks. **INFERENCE:** an owner of a 50–200 person dealer will take the 30-minute call and will abandon the form. Patel's "Personal review of every application" is a founder reading a queue. Wil's fit call is the review.
- **Central Time windows.** The form says "9 AM–12 PM CT" and "1–4 PM CT." His buyers are in Idaho and eastern Washington. Their clock is not his.
- **Corporate training as a second product.** "EXEC WORKSHOPS," "CORPORATE TRAININGS," "PRIVATE AI EVENTS," with no public offer sheet. His product is the job, the map, and the ladder. A workshop, if he runs one, is a way into the fit call, which is the X post, not this secondary block.
- **The crowd counts.** "115+" owners trained, "5,000+" operators reading playbooks each week. No roster, no archive, no link. He is one person with one shop story. Borrowing the counts makes the shop story look smaller.
- **"at a fraction of the cost" and "1 hire avoided," without the wage.** The time cuts are usable as a shape. The cost claim is not, until there is a number. His $217K is already a number.
- **Their industries as his.** Multi-location dental payroll, newsletter sponsorship research, a fashion influencer in Chicago. Field services is a word in their FAQ, not a case. He should name the dealer, the equipment yard, and the trade he has actually worked.
- **Two wordings of the same promise.** "original scope" plus access, data, and inputs, against a footer that only says "agreed scope." A small firm that prints both will be asked which one governs.
- **Reply-time wording that does not match.** "within 24 hours" on the apply page, "within one business day" in the form's thank-you. Pick one if he makes the promise.
- **The homepage iframe as a sales idea.** It hid the body from a plain text fetch. It is a build detail, not a funnel to imitate.

## X evidence

Two posts, both @notanotherpatel. They are not website copy. The site does not repeat the attendee counts, the $5k, the $600, the $10k, the upfront percent, or the "$1m" filter.

Post from 22 June 2026, https://x.com/notanotherpatel/status/2069030104135540880. The saved file shows 50 impressions, 0 likes.

> 6. Here's the math on my 1st workshop:
> 20 attendees
> 4 audits (businesses +$1m rev /yr)
> 50% converted to a custom build
> $5k per build
> Not including monthly retainers
> Cost to put on workshop: $600

Post from 28 July 2026, https://x.com/notanotherpatel/status/2082110295267283082. The saved file shows 257 impressions and 5 likes.

> My first AI workshop turned into 2 clients worth $10k.
> I collected 50% upfront.
>
> But not that day. Both deals closed 1–2 weeks later.
>
> That timeline matters because the workshop wasn't a disguised pitch.
>
> We had 18 business owners in the room. We showed them how we were using AI, answered their questions, and listened to how their businesses worked.

The same post: "Now, not every workshop guarantees a $10k outcome." And: "a workshop can compress the trust building cycle and give yourself a real shot at turning that trust into clients."

What this adds: a concrete local funnel with counts, a build fee, a workshop cost, a payment term, and a close that happened after the event. The site has none of those numbers. The site's workshop block is corporate training beside implementation work, with no math.

**INFERENCE:** both posts call the event his first workshop, so they are the same story told twice. They do not agree on headcount (20 and 18). Four audits at the stated 50% conversion is two builds. Two builds at the stated $5k is $10k, which matches "2 clients worth $10k" only if both builds were the $5k in the first post. The July post does not itemize the two fees. "50% upfront" is a deposit. It is not the conversion rate. "Not including monthly retainers" says retainers exist and were outside the $5k. No retainer amount is in either post.

The posts are his account of his workshop. They are not a client case study, and the impression counts in the saved file are small. They are still the only place these figures appear.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Audit fee | Apply page: "FREE CONSULTATION" and "a free consultation." Page title: "AI Automation Audit." | No "$500" on the site or in the two posts. Dialogs: "The audit prices it," with no dollar. |
| Build fee | Marketing pages: no dollar fee. | X, 22 June 2026: "$5k per build." |
| Buyer budget | Not on the marketing page. | Tally step 8: "what investment range could you consider?" starting at "Under $10,000" and running to "$100,000+." |
| Workshop | Site: "EXEC WORKSHOPS" under corporate training. No date, no city, no price, no registration URL. | X: a first workshop, cost "$600," then audits and builds. Attendance "20" in one post and "18 business owners" in the other. |
| Workshop revenue filter | Site FAQ: industries and "repeatable and costly," no revenue floor. | X: "4 audits (businesses +$1m rev /yr)." |
| Close and payment | Site: reply "within 24 hours" or, in the form thank-you, "within one business day," then he confirms a time. No deposit language. | X: "I collected 50% upfront." "Both deals closed 1–2 weeks later." "not that day." |
| Two uses of 50% | X, 22 June: "50% converted to a custom build." | X, 28 July: "50% upfront." |
| $10k | Not on the site. | July post: "2 clients worth $10k." June post states $5k per build and does not state a $10k total. |
| Retainers | Site: "the level of ongoing support is agreed before the build begins." The word retainer is absent. | X: "Not including monthly retainers." No amount. |
| Guarantee wording | Body: "original scope" plus "agreed access, data, and business inputs." | Footer: "agreed scope," conditions omitted. |
| Form length | Visible form: "1 of 10." | Progress element in the same HTML: "Page 1 of 11." |
| Who was trained | "115+ owners & executives trained in person." No names. | X workshop attendance is 18 or 20. The site does not connect the two. |
| Playbooks | "5,000+ operators reading Building AI Agents playbooks each week." | No playbook URL on the pages crawled. |

Open for Wil, not answered by this crawl:

- His price is still open. Their public choice is a free conversation and no fee card, with the budget question hidden on a later form step. The X choice is a $5k build and a $600 room. Which of those shapes he uses is his call. This site does not show a paid, credited discovery.
- Does the buyer keep the baseline-and-target note if the build stops? They never say. His Job map can say it, and can say the fee comes off the build.
- The unit in that note: dollars, hours, or the exception rate the person still handles. Their list ("hours, response time, errors, or revenue waiting") is the menu. His shop story can pick "revenue waiting" and still name the hours.
- Will he run a room at all? Their July post is the argument for a room that does not close. Their site is the argument for an application with no room. A dealer group he already knows is the only version that fits a one-person practice in Idaho and eastern Washington. Nothing here is a local SEO lesson.
- Where the ladder stops out loud. Smile still hands the payroll packet to a person. The FAQ routes "human judgment" to a person. How far an agent should go inside a dealership is his sentence, using his headline. Their pages never mention a dealership.
- The next job after vendor credits. Their "clearest measurable return" test is the filter. Their examples are payroll, newsletter research, and inbound replies. None of those is a parts counter. The filter is still usable.
