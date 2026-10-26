# Pixel Narratives

26 October 2026. Prepared for Wil Sensing. Read-only: no forms submitted, no calls booked, no URL typed into the site scanner, no Calendly slot selected.

This is not a thin site. The studio sells a priced ladder of its own: a paid assessment, a scoped build, a workshop, and two monthly partnerships, plus websites, marketing, and a free website scanner on a second host. The offer was the unknown at candidate time. It is on the site. Jordan Maruszak's X post is a separate surface, advice to people starting an agency. It is quoted as an X post. **INFERENCE** marks a conclusion that is not a sentence on the site or in that post.

## Top 5 takeaways

1. **Name the paid first step, and say whether the fee comes off the build.** Theirs is Explore, "STARTING AT $1,250": "We look at how your business runs, where AI may help, and what to do first." https://pixelnarratives.studio/work-with-us The X post tells someone starting an agency to copy "Paid discovery" from IT consulting. https://x.com/agenticjordan/status/2112957051978514933 Neither surface says the fee is credited toward the build. Wil's Job map already has the credit. That sentence is his to add. The $1,250 is their floor, not his.

2. **Agree the work, the price, the time, and the success measure before anyone builds.** Their step 02 is "Define": "We agree on what we're doing, what it costs, how long it should take, and what success looks like." https://pixelnarratives.studio/implementation Build is the next product, "STARTING AT $2,500," "Defined projects with clear deliverables. Pricing follows the scope." That is the Job map, then the build. His measure can be narrower than "where possible," because he already has a unit: credits found, lines matched, exceptions a person still handles.

3. **Keep ongoing work as a rung on one job.** Their ongoing products are Partner, "STARTING AT $2,500/MO," and Enterprise Partner, "FROM $15,000/MO." The model file says "Do not treat Partner as unlimited access at $2,500/mo." https://pixelnarratives.studio/llms.txt A press release calls a version of the ongoing work a Fractional Chief AI Officer and does not price it. Wil's ongoing unit is the next rung of a job (tool, then headless, then governed, then agent, with a person on the exceptions), stoppable. Their monthly partner is a different product. Leave the $15,000 floor and the executive title.

4. **Put their judgment line under his headline.** On the implementation page: "Use AI to help your people work faster and with fewer mistakes. Not to replace judgment." https://pixelnarratives.studio/implementation The workflow guide adds "Human approval where risk is high." That is "Hand off the busywork. Keep the decisions." Their homepage puts Implementation, Training, Visibility, and Marketing on one line. Visibility and Marketing are a studio. They are not his offer.

5. **Lead with the shop story. Their public number is a television campaign they made for themselves.** Chad G.P.T.: 4,695 impressions, 3,196 unique households, 98.2% video completion, August 29 through September 15, 2026. The work page says the character was "created for Pixel Narratives". https://pixelnarratives.studio/work The one named client quote, BadgePass, has no hours and no dollars. The restaurant assessment is unnamed, and the reports "stay confidential." Wil's $217K and 11,139 PO lines is the owner-facing shape this library does not have. Write the caveat the way they labeled the restaurant file a reconstruction, and then use the real count.

## Method and coverage

First crawl: `https://pixelnarratives.studio/`, host `pixelnarratives.studio`, max 50. Headless Chrome. 39 pages saved, queue finished, no leftover. The HTML is server-rendered Next.js on Vercel. Chrome was still the fetcher. JSON-LD `dateModified` on the main pages is `2026-10-16`. The sitemap file's `last-modified` is Sat, 24 Oct 2026. Every sitemap URL was in that first crawl.

`robots.txt` allows AI crawlers and `/llms.txt`, and disallows `/api/`. Nothing in the HTML linked `llms.txt`. It was fetched with curl (200, `text/plain`, `last-modified` Sun, 25 Oct 2026) and saved as `pages/llms.txt`. It matches the priced page. It also tells models not to use older product names. Both are reported. They are not merged.

Hard 404s, not saved: `/about-us`, `/pricing`, `/case-studies`, `/blog`, `/careers`, `/privacy-policy`. Prices are on `/work-with-us`. The writing is on `/insights`. The privacy policy is `/privacy`. The work samples are on `/work`.

Live redirects, HEAD only, status 308: `/automation` and `/intelligence-layer` to `/implementation`, `/starting-small` to `/work-with-us`, `/projects` to `/work`. `llms.txt` calls these "Redirected legacy URLs" and says "301." The response this crawl recorded was 308. The old names were not crawled as pages.

Five contact URLs (`?need=automation`, `training`, `websites`, `marketing`, `not-sure`) saved the same visible form as `/contact`. Only the URL line differs. They are different final URLs, so the files were kept.

Second hosts, after the studio log was copied to `pages/crawl-log-1.tsv`:

- Public Calendly event only: `https://calendly.com/pixelnarratives/30min`. Saved as `pixelnarratives__30min.txt`. No slot was booked. Calendly's own marketing pages came back in the same run because the host allow-list was `calendly.com`. Those files were removed. They are Calendly, not Pixel Narratives.
- `https://intel.pixelnarratives.studio/` (the free scanner `llms.txt` points at). The crawler names files from the path, not the host, so this homepage was saved as `intel.txt` and the scanner privacy policy as `intel-privacy.txt`. Otherwise both would have overwritten the studio homepage and the studio privacy policy. Dashboard, compare, and terms kept their own names.
- The sample assessment is an iframe to `https://gamma.app/embed/1l93c1jf76mhrw3`. That URL returned 403 (Cloudflare challenge) to Chrome and to curl. The slides were not read. The studio page around the iframe was.

`https://webintel.replit.app/` is the canonical on every scanner page. A HEAD returned 200. That host was not crawled. Quotes about the scanner come from `intel.pixelnarratives.studio`.

The studio homepage file was rewritten once by that host collision and then restored from a one-page recrawl. The first line is `https://pixelnarratives.studio/`.

## Product

### What they sell

Homepage title: "AI Implementation Partner | Pixel Narratives." H1: "Put AI to work in your business." The line under it: "IMPLEMENTATION. TRAINING. VISIBILITY. MARKETING." https://pixelnarratives.studio/

> You know your business. We know AI.
>
> You don't need to keep up with every new tool or figure everything out on your own. We bring the expertise to help you identify opportunities and turn them into practical results.

Four service lines, from the services page. https://pixelnarratives.studio/services

| Line | Their one-liner | What the page says it includes |
| --- | --- | --- |
| Implementation | "Putting AI into practice." | "That may mean improving how your team uses existing tools, changing a process, or building something custom." |
| Training | "Developing your team's capabilities." | "Practical AI training tailored to your team, their work, and the tools they use." |
| Visibility | "Helping customers find you." | "Websites, SEO, and AI search." The URL is `/websites`. |
| Marketing | "Getting their attention and generating demand." | "creative strategy, social media, advertising, and original content." |

`llms.txt` says the same four "are not interchangeable" in one pair of cases: "Visibility means get found. Attention means get noticed." It also says: "Do not describe Pixel Narratives as primarily a custom AI software company, an advice-only consultancy, or a creative agency." The marketing and work pages are still a creative studio. The model file and the work page are both on the site.

Official-information page: "Custom AI software development and workflow automation are available when appropriate, but they are not required parts of every engagement." "Services can be purchased independently." "AI Team Training does not require an Implementation engagement." Founded 2026. Founder Jordan Maruszak. Headquarters Madison, Mississippi. https://pixelnarratives.studio/ai-info

The implementation FAQ on that page: "Pixel Narratives is an AI implementation partner for businesses. Consulting and advisory work are part of that." A separate FAQ: "Is Pixel Narratives a financial advisory firm? No." The about page says he spent "more than 15 years in financial services" before the company. The company "does not provide financial advisory services."

### How an engagement is packaged, and the prices

`/work-with-us` is the price page. `/pricing` 404s. The homepage "Work With Us" block describes project-based work and an ongoing partnership and does not print the numbers. `llms.txt` says that on purpose: "Work With Us on the homepage is project-based or an ongoing partnership, without prices. Pricing lives on /work-with-us."

| Offer | Published price | What the page says you get |
| --- | --- | --- |
| Explore | STARTING AT $1,250 | "We look at how your business runs, where AI may help, and what to do first." Schema calls it an "Implementation Assessment." |
| Build | STARTING AT $2,500 | "Defined projects with clear deliverables. Pricing follows the scope." Schema: "Scoped project." |
| Equip | STARTING AT $7,500 | "Practical AI training for your team. Larger or multi-day programs are quoted separately." |
| Partner | STARTING AT $2,500/MO | "Ongoing AI expertise for your business." Identify opportunities, implement, "help your business make the most of AI as technology evolves." |
| Enterprise Partner | FROM $15,000/MO | "A strategic AI partner for your organization." Then "develop AI strategy, lead implementation, train employees, and manage initiatives across your business." "For organizations looking for a deeper, more hands-on relationship." |

Same five prices, same words, in `llms.txt`. The extra sentence is only in the model file: "Do not treat Partner as unlimited access at $2,500/mo."

No sentence on the studio site says the $1,250 comes off a later build. No hourly rate is printed. No guarantee of uplift, revenue, or time saved is printed on the service pages.

The video-cost article describes what changes a budget (concept, runtime, style, revisions, deliverables) and does not state a dollar amount. "Pixel Narratives projects are strategy-first, so concept development is part of the value." https://pixelnarratives.studio/cost-of-ai-video-production

The scanner is priced at zero. Its JSON-LD offer is `"price": "0"` and "Free website audit and diagnostic reports." The meta description says "Free AI-powered website diagnostic tool." https://intel.pixelnarratives.studio/ The tool terms cap liability at "the greater of the amount you paid to use the service in the twelve months preceding the claim or fifty dollars (USD $50)." https://intel.pixelnarratives.studio/terms That is a liability cap on a free tool, not an implementation fee.

### The working steps, and what a buyer holds

The same five steps are on `/work-with-us` and `/implementation`:

1. Discover. "We get to know your business, how you work, and where we can make a meaningful difference."
2. Define. "We agree on what we're doing, what it costs, how long it should take, and what success looks like."
3. Deliver. "You'll know what's happening, what's been accomplished, and what's coming next."
4. Demonstrate. "We show you what we've built or accomplished, make sure your team knows how to use it, and measure the results where possible."
5. Continue. "Some projects end with a handshake. Others turn into ongoing partnerships."

"Where possible" is the measurement standard they printed. The unit is not named on that page.

The sample assessment page says an Implementation Assessment shows "where AI could create value," "which opportunities are worth pursuing," and "how to move forward." The contents they list:

- "Your Business Today" — "existing processes, tools, and goals"
- "Quick Wins" — "without committing to a larger implementation project"
- "Implementation Opportunities" — "tools, systems, workflows, and custom solutions"
- "A Plan for Moving Forward" — "what to pursue now, what can wait, and where additional investment makes sense"

https://pixelnarratives.studio/sample-implementation-assessment

"View Sample Assessment" is an embedded Gamma document. The embed URL returned 403. The four headings above are the studio's own description of the sample. The slides are not in this teardown.

A second, free diagnostic sits beside Explore. Work-with-us: "Prefer a self-serve starting point? Take the AI Readiness Assessment." The page: "This quick 10-question assessment takes about 3 minutes." https://pixelnarratives.studio/ai-readiness-assessment The questions are behind "Start the Assessment" and were not in the rendered text. They were not stepped through. `llms.txt` calls it "Free" and "Not the default CTA." The privacy policy calls it informational:

> The AI Readiness Assessment is informational. It does not guarantee business results, compliance outcomes, return on investment, or AI implementation success.

https://pixelnarratives.studio/privacy

The press release uses a third name, "AI & Automation Assessment," and says it "is a starting point for a conversation about what to implement, not a score that replaces the owner's judgment." https://pixelnarratives.studio/news/pixel-narratives-brings-ai-implementation-services-to-mississippi-businesses The pages do not say whether that is Explore, the 10-question quiz, or both.

### How they describe the work

Implementation H1: "This Should Be Easier." The problem list: "Employees spending hours on repetitive work," "Slow lead response and inconsistent follow-up," "Disconnected tools that do not share information," "Data spread across spreadsheets and inboxes," "Manual scheduling and duplicate data entry," "Poor reporting and administrative bottlenecks."

The examples under that: lead follow-up, dashboards, client portals, internal tools, "AI assistance," workflow automation, "CRM + integrations." The AI-assistance line is the one that matches Wil's headline:

> Use AI to help your people work faster and with fewer mistakes. Not to replace judgment.

Training is a tool list: "ChatGPT, Claude, Microsoft Copilot, AI video, creative production, research, analysis, and more," split by leadership, sales, operations, HR, and marketing. https://pixelnarratives.studio/training The implementation page says a team can take that training "without a custom implementation project."

The guide "How to Use AI in Your Business" is the sharpest process page:

> They sign up for a handful of tools, experiment for a few weeks, and end up with more complexity, not less. No real time saved. No meaningful change in how the business runs.
>
> But tools aren’t the starting point, outcomes are.

> AI doesn’t fix bad workflows. It amplifies them.

https://pixelnarratives.studio/how-to-use-ai-in-your-business

The friction list on that page includes "No clear use case or success metric." The workflow guide says a strong automation has "A clear trigger, owner, and review point" and "Human approval where risk is high," and "Measurement tied to time saved or cycle-time reduction." It also says "Most automation fails when teams automate a broken process instead of redesigning the workflow first." https://pixelnarratives.studio/ai-workflow-automation

The CRM guide: "Will AI replace sales reps? No. It removes low-value admin work so reps can focus on conversations and closing." Follow-up shows up as "Follow-up draft generation," not as an unsupervised send. https://pixelnarratives.studio/ai-crm-automation

The consulting guide says ongoing support "is a part-time operating partner" and "You are buying follow-through, not an executive title." https://pixelnarratives.studio/ai-consulting-for-businesses The same page cites "McKinsey reports that 88% of organizations use AI in at least one function" with no link in the saved text.

The press release's marketing section is narrower than the implementation line, and it is still the owner:

> AI can help draft, organize, and produce. The owner still decides what the business is saying and who it is trying to reach.

### Who it is for

About meta: "serving businesses across Mississippi, Alabama, the Memphis area, and Atlanta." The who-we-work-with page names "business owners, leadership teams, and departments" and the markets Mississippi, Birmingham, Memphis, "Mobile plus Alabama's Eastern Shore," and Atlanta. https://pixelnarratives.studio/serving-the-south Atlanta is a paragraph. It has no `/locations/` page. Mississippi, Birmingham, Memphis, and Mobile do.

The press release and the Business News recap say "small and midsize businesses." The recap, describing Daniel Hartley's spotlight rather than quoting a client: "Many of the businesses described in the feature are owner-operated or run by small leadership groups that already handle operations, sales, and customer work themselves." https://pixelnarratives.studio/news/pixel-narratives-featured-business-news-info

The contact page adds a wider net: "Based in Madison, Mississippi. Working with teams across the South and nationwide." https://pixelnarratives.studio/contact

No page states a headcount band, a revenue band, a dealership, an equipment dealer, or Idaho. The scanner's business-type dropdown includes "Local / Service Business" with the examples "Plumber, contractor, dentist, HVAC, etc." Those are labels on a form, not clients. https://intel.pixelnarratives.studio/

**INFERENCE:** the economic buyer they wrote the studio for is an owner or a small leadership team in those Southern markets, who might buy an assessment, a workshop, a website, or a campaign. A 50–200 person dealer in Idaho is outside the copy. The operating problems on the implementation page (repetitive work, spreadsheets, duplicate entry) are the sentences that travel. "Get found" and connected-TV ads do not.

### Proof

Homepage section "OUR WORK": "A selection of projects across AI implementation, training, and creative production." The work page H1 is "A little of what we've been working on." https://pixelnarratives.studio/work

| Piece | Whose work the page says it is | What it leads with | An operating number? |
| --- | --- | --- | --- |
| Chad G.P.T. | "created for Pixel Narratives". "This work is here to show concept, story, and production." Two commercials, college football and the NFL, in Mississippi. | 4,695 impressions, 3,196 unique households, 98.2% video completion. August 29 through September 15, 2026. | Those three are media-delivery counts. No sales, no leads, no spend. |
| Social Media Agency Dashboard | "CLIENT WORK." No client name. | "client projects, team assignments, approvals, and day-to-day operations into one place." | No |
| BadgePass workshop | "CLIENT WORK." Jason Thomas, "EVP of Sales, BadgePass." | The quote below. | No |
| Team P | "ORIGINAL FILM" for "Pixel Narratives team training." | A brand film. | No |
| Risky Business Podcast | "CLIENT WORK." | "An opening video and original music." | No |
| Restaurant Group | Homepage label "PAID ASSESSMENT." No company name. "multi-location restaurant business." | A roadmap plus a website audit. "Conceptual reconstruction of the assessment materials. The actual reports stay confidential." | No |
| The Homie | Marketing page: "SPEC CAMPAIGN" for Fizz Soda, "Runway Big Ad Contest." | A concept. | No |
| Cinder Wealth Brand Spot | Marketing page: "A financial services brand film." | A film. The page does not say the firm hired them. | No |

BadgePass, on the work page and again on the training page:

> Pixel Narratives made AI practical for our team. The workshop was hands-on, easy to follow, and focused on things we could actually use in our work. We left with a much better understanding of what these tools can do and, more importantly, how to use them.

The Chad figures are labeled on the work page (IMPRESSIONS, UNIQUE HOUSEHOLDS, VIDEO COMPLETION) and repeated on the marketing page under Chad G.P.T. The homepage extract places "4,695 impressions · 3,196 unique households · 98.2% video completion" after the dashboard paragraph. The labeled pages attach the figures to the commercials. This teardown uses the work page.

The restaurant confidentiality line sits under the restaurant card on the homepage. On the work page the same sentence is extracted above the restaurant heading and below the podcast. **INFERENCE:** it describes the restaurant materials, because the homepage order says so. It is not a claim about the podcast.

The how-to-use guide says "Where we’ve seen the most success is in repeatable, operational work" and lists email triage, CRM updates, proposal drafting, reporting, customer support, content, research, and marketing workflows. No client and no count is attached.

**INFERENCE:** a buyer can see that they have made ads, run one named workshop, built at least one unnamed internal tool, and delivered at least one paid assessment they will not show. A buyer cannot see a dollar found, an hour removed, or a person still on the exception. Wil's repair-shop paragraph is a different and, for his buyer, stronger shape, if he writes what the $217K includes and what the person still checks.

### Fractional Chief AI Officer

The 24 August 2026 press release, hosted on the site and marked as distributed via EIN Presswire, adds a name the price page does not use:

> Pixel Narratives offers Fractional Chief AI Officer support for that situation. The work includes deciding what to implement next, overseeing the build, and keeping systems aligned as the business changes. It is ongoing leadership for AI and automation, not a one-time software purchase.

The release does not give it a price. The Business News recap says Hartley's article covers the same offering as "ongoing AI strategy, prioritization, and implementation leadership" without a full-time executive role. This teardown did not fetch EIN Presswire or Business News & Info. The recap is Pixel's page about that coverage.

The consulting guide's "not an executive title" and the release's "Fractional Chief AI Officer" are both on pixelnarratives.studio. They are not reconciled in this report.

## Sales and marketing

### Positioning

1. Category: "AI Implementation Partner."
2. The four words: Implementation, Training, Visibility, Marketing.
3. The enemy, on the guide rather than the homepage: tools bought before the outcome, and AI laid on a broken workflow.
4. The commercial menu: Explore, Build, Equip, Partner, Enterprise Partner, with floors.
5. Proof: the reel, then BadgePass, then an unnamed paid assessment.
6. The person: Jordan Maruszak, Madison, a book coming 27 October 2026.

Lines worth keeping:

- "You know your business. We know AI." https://pixelnarratives.studio/
- "This Should Be Easier." https://pixelnarratives.studio/implementation
- "Not to replace judgment." Same page.
- "AI doesn’t fix bad workflows. It amplifies them." https://pixelnarratives.studio/how-to-use-ai-in-your-business
- "We're not here to impress you with AI. We're here to help you use it to grow your business." https://pixelnarratives.studio/about
- "You are buying follow-through, not an executive title." https://pixelnarratives.studio/ai-consulting-for-businesses

Voice on the service pages is calm and short. The guides get more direct. The about page is a first-person founder story: the company "started with a camera," AI video in 2025, then business owners asking about research, training, and custom builds. He names a book, *Insert Door Metaphor: AI, Ideas and The New Cost of Trying*. Paperback ISBN 9798160711751, hardback 9798178293195. "COMING OCTOBER 27, 2026." https://pixelnarratives.studio/book The book page says "But this isn't a book about replacing people with AI, automating everything, or getting rich overnight."

### Funnel

Primary action: "Start a Conversation," which goes to `/contact`.

Contact H1 repeats the homepage close: "Let's put AI to work for your business." Then "WHAT ARE YOU TRYING TO IMPROVE?" with five links: Implementation, Training, Visibility, Marketing, Not Sure. Those links are the `?need=` URLs. The saved text does not show one of them preselected.

Under that, "Book a Zoom call": "Schedule a Zoom call to talk through your goals, where you are today, and what the right next step looks like." The button is Calendly. The public event, not booked:

> Introductory Conversation.
> 30 min
>
> Let's talk about your business, what you're working on, and where Pixel Narratives might be able to help.
>
> Whether you have a specific project in mind or you're just exploring opportunities, this is a chance to get acquainted and discuss next steps.
>
> Location: Google Meet, Zoom, or whichever video platform you prefer.

https://calendly.com/pixelnarratives/30min

`llms.txt` calls the same URL "Book a discovery call" and prints `https://calendly.com/pixelnarratives/30min`. The contact page says Zoom. The event says Meet, Zoom, or whichever. The length is 30 minutes on the event page. No price and no qualifying form are on the event page.

The email path on `/contact` is a form with Subject and Message (message required). No name, email, or phone field is in the extract. Under it: "We reply within 1-2 business days." The phone on the page is `904-524-7269`. The address block is Madison, Mississippi. The page does not explain the area code. This teardown does not either.

There is no revenue, headcount, or budget question on the public form.

The other front doors:

- Explore at $1,250, from the price page.
- The free 10-question assessment, which `llms.txt` says is not the default CTA. Submitting it, per the studio privacy policy, can collect name, email, company, optional phone, answers, score, and result category, and a Vibe pixel fires a Lead event "so we can measure that conversion." The Lead event "does not include your name, email address, company name, phone number, or other form answers." The policy also says the site "does not use a cookie pop-up" and that the pixel loads on visit. Connected TV attribution is the stated reason.
- The free scanner at `intel.pixelnarratives.studio`. The studios page `/websites` calls it "a free look at your live site" and links there. The scanner asks for a URL, a business type, a target customer, and "AVG. DEAL VALUE (USD)." None of that was submitted. The empty state "No audits yet" is the page before a scan, not a claim about their client list.

### Lead magnets and content

No PDF gate. The substitutes are the sample assessment (structure visible, slides not fetched), the free quiz, the free scan, the book (on sale the day after this report, not a download), and the insights. The insights index is a short set of practical guides: using AI, implementing it, workflow automation, CRM, consulting, training, visibility, ads, and the cost of AI video. https://pixelnarratives.studio/insights They close on "Discuss a Project" or "Discuss Marketing." This is not a CTO query factory. It is also not a field note from a named job.

Two news pages, both dated 24 August 2026: the EIN release, and a recap of a Business News & Info spotlight by Daniel Hartley. They are company descriptions, not case studies.

Location pages repeat the four services for Mississippi, Birmingham, Memphis, and Mobile. They do not add a local result.

### Trust placement

Homepage order: the four services, then the reel (Chad, the dashboard, the restaurant), then project versus ongoing, then the conversation. Prices are one click away, not in the hero. The founder story is on About, not the first screen. BadgePass is on the work page and the training page, not the homepage extract.

**INFERENCE:** they lead with the category and the work, and they are willing to show a campaign they made for themselves before they show a client number. A one-person practice that copies that order will put a reel where the shop story should be. Wil's number can take the slot their impressions take.

## What Wil should steal or adapt

1. **Fit call.** A 30-minute introductory conversation is already his length. Their event description is low prep: the business, what they are working on, whether there is a next step. The contact chips collapse, for him, to the job in front of them or "not sure." He does not need Implementation / Training / Visibility / Marketing. He does not need the quiz, and he does not need a pixel that attributes a connected-TV ad.

2. **Job map.** Explore is the paid, named, public first product. The X post, quoted below, tells agency owners to copy paid discovery. Spell the credit they leave out: the fee comes off the build. Spell the contents the way the sample page does, in his language: the job today, the quick wins, the one build worth doing, and the number that will decide if it worked. Their Define step is the rule for that document: what it is, what it costs, how long, what success looks like. "No clear use case or success metric" is the failure they already named. His metric is the vendor-credit match, not "where possible."

3. **Build.** Build is one scoped project "with clear deliverables," priced from the scope, not from a seat. The guide's "series of focused projects" is the same idea as one job at a time. "AI doesn’t fix bad workflows. It amplifies them" is the reason the map comes first. For the repair shop, the build is the match on the PO lines, and a person approves the credit. Their CRM page already stops at a draft.

4. **Autonomy ladder.** Training is their tool-adoption rung, and they sell it without a custom build. He can name that rung without a $7,500 workshop. "Not to replace judgment" and "Human approval where risk is high" are the top of the ladder, said in one line each. Partner and Enterprise Partner are how they productized "stick around." His version is the next rung, stoppable, not a fractional executive and not $15,000 a month.

5. **Proof.** One job, the count, the unit, the caveat. Their restaurant page is the caveat habit (a reconstruction, the real file stays private) without the count. Their Chad block is the count habit without a job the owner recognizes. The BadgePass quote is the right kind of sentence, from a named person, and it still does not say what changed on Monday morning. The shop paragraph should.

## What not to copy, and why

- **The four-pillar menu.** Websites, SEO, AI search, social, connected TV, and original music are a studio. His headline is a job handed off inside a company that already has customers. "If People Can't Find You, the Rest Doesn't Matter Much" is their visibility H1. It is a different offer.
- **Their price floors as if they were his.** $1,250, $2,500, $7,500, $2,500 a month, $15,000 a month. His price is undecided. If he publishes a number later, it is a Job map and a build for a dealer or a shop, not a translation of Explore and Enterprise Partner.
- **Chad G.P.T. as the proof shape.** 4,695 impressions for one's own commercial shows production. An owner of a 100-person dealer wants the $217K and the 11,139 lines.
- **The Fractional Chief AI Officer title.** The release uses it. The consulting guide says the buyer is not buying an executive title. A one-person practice that picks the title will sound imported. The useful part is already in the guide: follow-through.
- **The free quiz as the front door, and the Vibe pixel behind it.** `llms.txt` already says the quiz is not the default CTA. The privacy policy says the pixel loads without a banner so they can tie visits to connected-TV ads. He will be in the room with the buyer. He does not need either.
- **A public scanner that crawls someone else's site.** The tool is free, branded Web Intelligence, and it tells the visitor not to submit a URL they do not own. `llms.txt` tells models not to use the name Web Intelligence at all. See the contradiction table. It is a lead magnet he does not need, and running it is out of scope for this teardown.
- **Southern city pages, copied.** The habit of a plain local page is visible. The cities are Madison, Jackson, Birmingham, Memphis, Mobile, Daphne, Fairhope, and Atlanta. His places are Idaho and eastern Washington. Nothing on this site is about those places.
- **The book as a lead magnet.** It is his book, dated 27 October 2026. It is not a Job map.
- **The unsourced 88%.** A statistic with no link on the page is the kind of loose number a small practice gets caught on. He has a primary count. Use that.
- **Spec spots and unnamed reconstructions as the library.** Fizz Soda is a contest concept. Cinder Wealth is not clearly a client. The restaurant reports stay confidential. One named quote beats a shelf of maybes.

## X evidence

One post, Jordan M., `@agenticjordan`, 21 October 2026. https://x.com/agenticjordan/status/2112957051978514933

This is an X post, not website copy. The post does not mention Pixel Narratives, Explore, a price, a client, Mississippi, or a credit toward a build. The site does not mention IT consulting.

The post, in full:

> Starting an AI agency or automation business?
>
> Study the IT consulting industry.
>
> Same basic business model, with decades of lessons.
>
> Copy what works:
> • Paid discovery
> • Scoped implementations
> • Recurring support contracts
> • Standardized delivery
> • Long-term client relationships
>
> Fix what doesn’t:
> • Scope creep
> • Hourly billing dependency
> • Poor documentation
> • Unnecessary complexity
> • Vendor lock-in
>
> AI changes the economics of delivery.
>
> You don’t have to reinvent the business model.

Read as advice to an agency owner, it is direct support for a paid Job map, and only for that: the words are "Paid discovery." It does not say the discovery fee is credited, and it does not say what the discovery document contains. Wil's credit and Wil's contents (the job, the steps, the exceptions, the PO file, the number that decides the build) are not in the post. Adding them would embellish it.

Set next to the site, the "copy" list rhymes with products the site already sells, without the post naming them:

- Paid discovery rhymes with Explore at $1,250. The post has no dollar figure.
- Scoped implementations rhymes with Build, "Pricing follows the scope."
- Recurring support contracts rhymes with Partner and Enterprise Partner.
- Standardized delivery rhymes with Discover, Define, Deliver, Demonstrate, Continue. The post does not list those five steps.
- Long-term client relationships rhymes with "Others turn into ongoing partnerships."

The "fix" list is not a claim that Pixel has fixed those things for a client. The site never says "we do not bill hourly." It does publish starting-at project prices and monthly prices, which is a different shape from an hourly rate card. **INFERENCE:** that published shape is the same instinct as "fix hourly billing dependency." It is not a warranty that every invoice is fixed-fee.

"Poor documentation" is the fix list. The sample assessment is the site's attempt to show documentation. The slides were not readable in this crawl. "Vendor lock-in" is the fix list. The site says custom software is not required and "Engagements are designed around the needs of the organization rather than a required technology platform." https://pixelnarratives.studio/ai-info The post and that sentence point the same direction. The post is still advice to founders, not a client term sheet.

Nothing in the post contradicts a price on the site, because the post states no price. Using the post as the client offer would hide Explore, Build, Equip, and the two monthly tiers. Using the site as if it were the post would hide the audience: he is talking to people who want to start an agency, not to a dealer principal.

## Open questions and contradictions

| Topic | One surface | The other |
| --- | --- | --- |
| What the first paid step includes | Explore, starting at $1,250, "what to do first." | The X post says "Paid discovery" and does not say $1,250, a credit, or a deliverable list. |
| Credit toward the build | Not said on the site or in the post. | Wil's offer credits the Job map. That difference is his, not theirs. |
| Ongoing name | Price page: Partner from $2,500/mo, Enterprise Partner from $15,000/mo. `llms.txt`: Partner is not unlimited access. | Press release and news recap: "Fractional Chief AI Officer," no price. Consulting guide: "not an executive title." |
| Assessment names | Explore, the sample Implementation Assessment, and a free 10-question AI Readiness Assessment. | Press release: "AI & Automation Assessment." The pages do not say these are one product. |
| The call | Contact page: "Book a Zoom call." | Calendly event: "Introductory Conversation," 30 min, "Google Meet, Zoom, or whichever." `llms.txt`: "Book a discovery call." |
| Geography | Contact: "across the South and nationwide." | About, ai-info, and the location pages: Mississippi, Birmingham, Memphis, Mobile and the Eastern Shore, Atlanta. |
| Product name | Scanner pages: "Web Intelligence," canonical `https://webintel.replit.app/`. | `llms.txt`: "Do not use Intelligence product names (Intelligence Layer, Web Intelligence, Narrative Intelligence, Business Intelligence) in summaries. Do not list Starting Small as a current offer." `/starting-small` now redirects to `/work-with-us`. |
| Prices on the homepage | Homepage partnership block has no numbers. | `/work-with-us` and `llms.txt` print all five floors. The model file says the homepage omits them on purpose. |
| Chad's statistics | Work page and marketing page attach 4,695 / 3,196 / 98.2% to the commercials. | The homepage text extract places that line after the dashboard card. |
| Restaurant confidentiality line | Homepage: under the Restaurant Group card. | Work-page extract: above the restaurant heading, below the podcast. |
| Who the proof is for | BadgePass is a named workshop quote. | The largest counts are Pixel's own TV buy. |

- The sample slides were blocked (Gamma 403). Whether the real assessment names a workflow owner, a source file, and a pass/fail number is not known from this crawl. The four headings on the studio page are all that was readable.
- The 10 quiz questions were not rendered. Do not invent them.
- `webintel.replit.app` returned 200 and was not crawled. If it differs from `intel.pixelnarratives.studio`, this teardown would not show it. The canonical tag is the reason to flag it.
- Will the repair shop let Wil name it? Pixel's paid assessment is anonymous on purpose. His proof gets weaker as "a local shop." That is a permission question.
- His price is open. Their public floors show that a small firm can print a starting-at without printing a custom quote. They do not show that the starting-at should be credited. Both choices are still his.
- Private equity. The site and the post do not sell to it. There is no PE section in this teardown. The founder's financial-services background is disclosed, and the site says Pixel Narratives is not a financial advisory firm.

## Where the raw pages are

`research/ai-specialists/pixel-narratives/pages/`. The studio crawl is `crawl-log-1.tsv`. `crawl-log.tsv` is that log plus `llms.txt`, the Calendly event, and the scanner pages. Quotes were checked against those files and against `research/ai-specialists/_x/posts.md` for the 21 October 2026 post.
