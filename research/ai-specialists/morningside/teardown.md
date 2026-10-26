Funnel-only pass. Morningside AI (Liam Ottley), 26 October 2026. This teardown is how they sell. It does not inventory a YouTube channel or a course catalog. Neither is linked from the marketing site.

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: the inquiry form was not submitted, and no time was selected on the calendar.

Wil Sensing is a one-person consultancy. Offer, in order: a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder. Headline: "Hand off the busywork. Keep the decisions." Buyers: owners of 50–200 person dealerships, equipment dealers, and trades in Idaho and eastern Washington. He is not building a Skool community or a YouTube course. Pricing is undecided.

Quotes are from files in `research/ai-specialists/morningside/pages/`. **INFERENCE** marks a conclusion that is not a sentence on the page.

## Top 5 takeaways

1. **The front door is a form, then a 30-minute discovery call. There is no price page.** "GET IN TOUCH" goes to `/work-with-us`. The form asks role, company size, and a budget band, then the public thank-you page says to book the call. The calendar is "Morningside AI Discovery Meeting - Website," 30 minutes. `/pricing` returns 404. No fee is printed. The budget choices on the form are the only dollar figures, and they are the buyer's selection, not an invoice. Wil can ask role, size, and whether a Job map is the right next step on the fit call itself. He should not publish their bands. Source: https://www.morningside.ai/work-with-us and https://calendly.com/morningside-ai/morningside-ai-discovery-meeting

2. **Identify, Develop, Adopt is a map, a build, and an adoption phase, sold as one engagement.** Homepage: "Morningside defines what's worth building, builds it for you, then trains your people to make it stick." Identify looks for "the 5% of opportunities worth building." Develop says "No fragile demos. No science projects." Adopt says adoption is the success, and the goal is ownership. That sequence is the cousin of Job map, build, and the start of a ladder. Their case studies show the identify work running nine weeks, eight weeks, or one week, with no separate SKU and no line that the assessment fee comes off the build. Keep the paid, credited Job map. Use their three words as the shape of the story, not as a 55-person transformation. Source: https://www.morningside.ai/ and https://www.morningside.ai/services

3. **The proof closest to Wil's buyer is an industrial distributor, and the big numbers are what a roadmap makes possible.** Asmuss Group: steel and flow control, "15+ warehouses," "40+ Sales Reps," nine weeks, 20+ interviews, 19 opportunities cut to 6. The hours and the money are under "What the roadmap makes possible," including "projected annual cost savings." The homepage quote from Marita at Asmuss praises the roadmap, not a measured saving. Wil's $217K on 11,139 PO lines is a past result. If he writes a study, he should label a projection the way the Asmuss body does, and he should not title a roadmap as if the system is already running. Source: https://www.morningside.ai/case-study/building-new-zealands-first-ai-enabled-industrial-distributor

4. **YouTube and "our online community" are trust stats, not the product on this site.** The homepage and the team page repeat "13.4m views on YouTube," "90k in our online community," "2,700+ empowered through our programs." The sitemap has no course URL, no community URL, and no YouTube link. Liam Ottley is Co-CEO, "one of the leading educators," with "over one million followers." The call to action under his bio is still "GET IN TOUCH." Wil should not add a channel or a community to make the practice look like this. The firm is what they sell. Source: https://www.morningside.ai/team

5. **The form already knows a 50–200 person company might show up, and it still does not speak to one.** Size options include "50 - 100" and "100 - 500." The first budget choice is "$15K - $50K," then "$50K - $150K," "$150K - $500K," and "Not Sure Yet." Roles are CEO, COO, CFO, CIO/CTO, VP, Other. Copy is "FROM NEXT-GEN STARTUPS TO ESTABLISHED ENTERPRISES" and "the world’s leading organisations." Nothing names a dealership, an equipment dealer, a trade, or the inland Northwest. Asmuss is the page that sounds like Wil's world, and it is told as a nine-week roadmap for a national distributor. Source: https://www.morningside.ai/work-with-us

## Method and coverage

Chrome headless, read-only, 26 October 2026. First run: `https://www.morningside.ai/`, host morningside.ai, max 40. Log: `pages/crawl-log-1.tsv`. The sitemap has ten URLs and all ten were saved: homepage, services, team, work-with-us, thank-you, three case studies, terms, privacy. Left 0. Soft 404s: none. Hard 404s from the crawler's extra seeds, not from the sitemap: `/about`, `/about-us`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, `/privacy`.

The site is Webflow. On `/services`, Chrome's visible text includes the Identify panel and not the Develop or Adopt panels. Those panels are in the HTML of the same URL. `pages/services-tab-panels.txt` is that text, tags removed. `pages/services.txt` is the crawler's visible extract. Quotes below say which file.

Second host, one page, not booked: `https://calendly.com/morningside-ai/morningside-ai-discovery-meeting`, linked from the thank-you page's embed (`hide_gdpr_banner=1` on the embed; the fetch used the event URL without that parameter). Log: `pages/crawl-log.tsv`. No date was selected. Twelve other calendly.com URLs were queued and not fetched (`pages/not-fetched.txt`).

Not opened, on purpose: LinkedIn, Instagram, X, and any YouTube channel or course. The marketing pages state view counts and "our programs" and do not link them. This pass did not go find Liam Ottley's videos or a lesson library off-site. The three case studies were read for how the sale uses proof, not as a build catalog.

## Product

### What they sell

Homepage title: "Morningside AI | AI Strategy, Upskilling & Custom Development." H1: "We don't just talk AI. We deliver it." Subhead: "We help companies identify AI opportunities that will actually transform their business, then we build it, deploy it, and train your team to use it." https://www.morningside.ai/

The situation they put under the hero:

> You bought the AI tools. Read the case studies. Attended the webinars. But months later, the tools sit unused. The pilots never scaled. And nobody can explain what ROI actually looks like.

Then: "Stop paying to experiment. Start paying for results." And: "AI that actually moves the needle."

Three steps, same page:

1. Identify. "Every project starts with clarity. We start by understanding how your team actually works - where time is being lost, what slows things down, and why work piles up. From there, we find the 5% of opportunities worth building."
2. Develop. "Once we know what matters, we move quickly and get to the building."
3. Adopt. "Then we make it real. We work side by side with your teams - training, fine-tuning, and helping them integrate your new systems into their everyday work. By the time we step back, it’s not a project anymore - it’s just how work gets done."

Services H1: "From Trying AI to Trusting It." The three panels, from the HTML extract of the same URL:

| Step | Their line | What the panel says they do | Where |
| --- | --- | --- | --- |
| Identify | "Decide what’s actually worth building" | Workshops, interviews, "ROI Modeling & Business Case Design," "Prioritization Mapping," "AI Readiness & Diagnostics Report" | https://www.morningside.ai/services |
| Develop | "Build it right so it works from day one." | "Scoping & Technical Architecture," integration, "Proof of Concept → Production Build," "Security, Governance & Reliability Design" | same, tab extract |
| Adopt | "Make AI part of how work actually gets done" | "Pilot Launch & Controlled Rollout," "AI Enablement Sessions," "Performance Tracking & Ongoing Optimization" | same, tab extract |

Develop, in the page HTML: "No fragile demos. No science projects." Adopt, same extract: "Shipping software isn’t success." Then: "Adoption is." And: "The goal isn’t a “handover” - it’s ownership."

Terms use a different menu than the marketing pages: "MorningsideAI provides AI strategy, Autonomous Agent Development, Enterprise Consulting, Chatbot Development." https://www.morningside.ai/terms-conditions

No named framework or trademark on the pages crawled. The repeated structure is Identify, Develop, Adopt. "Asmuss 2030 Vision" is a name inside one study, not a product.

### Price

No price, package, or retainer dollar is published. `/pricing` is a 404. Terms have no fee.

The only dollar figures a buyer can select are on the inquiry form, labeled "Budget Range": "$15K - $50K", "$50K - $150K", "$150K - $500K", "Not Sure Yet." https://www.morningside.ai/work-with-us

**INFERENCE:** those bands are a qualifier. They are not a statement of what Morningside charges. Do not treat them as Wil's prices either.

No guarantee and no refund sentence on the marketing pages or in the terms text that was saved.

### Engagement, from the studies rather than a SKU

The site never says whether the opening assessment is free, paid, or credited. Durations that are written down:

- Asmuss: "We spent 9 weeks inside the business." "20+ in-depth interviews." Deliverable described as a roadmap and phased plan. https://www.morningside.ai/case-study/building-new-zealands-first-ai-enabled-industrial-distributor
- Aged care: "Over 8 weeks," "12+ interviews," "a comprehensive AI Strategy Roadmap." https://www.morningside.ai/case-study/transforming-aged-care-with-ai-driven-efficiency
- NBA: "a rapid one-week discovery sprint," "21 in-depth interviews," "almost 70 survey responses," and "thorough AI optimization roadmap with multiple functioning proof-of-concept applications." https://www.morningside.ai/case-study/transforming-basketball-operations-with-ai-powered-intelligence

FAQ, homepage: "We don’t hand off and vanish. We train your people, monitor how it’s used, and refine until it runs smoothly without us." And: "You’ll typically see a working pilot within weeks, not months." And: "We know that you hired us to get things off of your team’s plate."

**INFERENCE:** ongoing work, as written, ends when the client can run it. That is an adoption phase with a finish. It is not a published ladder and not a priced retainer.

### Who it is for, in their words

Homepage kicker: "FROM NEXT-GEN STARTUPS TO ESTABLISHED ENTERPRISES." Team page, visible sentence: "the world’s leading organisations." The meta description on the same file uses a straight apostrophe in the same phrase. JSON-LD: "areaServed": "Worldwide." Work-with-us: "Based in Auckland, New Zealand." Then two lines: "Working globally" and "Clients across AU, US, UK & EU." Email on that page: tara@morningside.ai. JSON-LD email: info@morningside.ai.

FAQ: "We’re workflow specialists first, AI specialists second." "We are tool-agnostic, industry-agnostic, but results-obsessed." "You’re ready if you have clear pain points, repetitive work, or untapped data slowing things down."

Team: "a team of over 55 people across the Morningside Group." Named on the page: Josh Brown, Co-CEO; Liam Ottley, Co-CEO; Tara Zver, Lead Engineer; Nick Roco, Managing Director of Consulting; Lana Lisichkina, Chief Financial Officer. Liam's bio: "one of the leading educators in the global AI space. He has built a worldwide audience of over one million followers." "As the visionary behind many of Morningside’s core ideas and frameworks."

No page says dealership, equipment dealer, trades, or a headcount of 50–200 as the customer. The form's size options do include "50 - 100" and "100 - 500," along with "1 - 50" and "500+."

### Proof

Stats, homepage and team, with no link behind them: "13.4m views on YouTube," "90k in our online community," "2,700+ empowered through our programs," "48+ successful client engagements," "11+ industries served."

| Study | How it is framed | The number, and whether they say it happened | URL |
| --- | --- | --- | --- |
| Asmuss Group | "Building New Zealand's First AI-Enabled Industrial Distributor." Manufacturing / steel and flow control. "40+ Sales Reps, 15 Warehouses." | Nine weeks. 19 opportunities, 6 prioritized. "What the roadmap makes possible: 1,600+ hours per month redirected from admin to customer-facing work. Hundreds of thousands in projected annual cost savings. Millions in revenue growth opportunity." | https://www.morningside.ai/case-study/building-new-zealands-first-ai-enabled-industrial-distributor |
| Australian aged care | Visible page does not name the provider. JSON-LD headline on the same file is "Care Connect." "86+ Care Managers, 100+ Care Workers." | Eight weeks. 16 opportunities, 5 prioritized. "client-facing time can increase 25%." A Care Operations Lead is quoted on documentation. | https://www.morningside.ai/case-study/transforming-aged-care-with-ai-driven-efficiency |
| NBA franchise | "This championship-caliber NBA franchise." Not named. "12 departments, 60+ basketball operations staff." | One week. 8 opportunities, "3 rising to the top." "the franchise can: reclaim 200+ monthly hours." The challenge section already says manual work was "consuming 200+ hours monthly." PoC timelines "3-4 weeks per solution." | https://www.morningside.ai/case-study/transforming-basketball-operations-with-ai-powered-intelligence |
| Ashcroft Homes | Homepage quote only. Josh. No case-study URL. | "we’re already seeing measurable improvements." No figure. | https://www.morningside.ai/ |

Homepage quote, Marita, Asmuss:

> In just nine weeks, Morningside uncovered critical inefficiencies and clear opportunities for AI automation. They delivered the clarity, direction, and practical roadmap we needed to drive real operational efficiency and future-proof our business.

**INFERENCE:** a buyer who reads the case-study title and not the body can think the distributor is already AI-enabled and that the hours are saved. The body says the roadmap makes those hours possible, and the client's own quote is about clarity.

## Sales and marketing

### Headlines worth keeping in view

> We don't just talk AI. We deliver it.

> You bought the AI tools. Read the case studies. Attended the webinars. But months later, the tools sit unused.

> From there, we find the 5% of opportunities worth building.

> AI is here. Most will react. The few with a plan will lead. We build for those few.

The last line is the close on the homepage, services, team, and the case studies. Tone is calm and operational. It does not sell a secret, a seat cap, or a follower count in the hero. The follower count sits lower, as a stat row.

### Funnel, CTA, qualification

One CTA on the marketing pages: "GET IN TOUCH," linking to https://www.morningside.ai/work-with-us. H1 there: "Ready to transform your business with AI?"

The form, not submitted. Fields: First Name, Last Name, Work Email, Company, Company Website, Your Role, Company Size, Budget Range, "Tell Us About Your Project." Placeholder on the project box: "What challenges are you facing? What does success look like for your business?" Role options: "CEO / Founder," "COO / Head of Operations," "CFO / Finance Lead," "CIO / CTO / Head of Data," "VP / Director," "Other." Button: "SUBMIT INQUIRY." The page also offers the email tara@morningside.ai.

Thank-you page, public in the sitemap, not reached by submitting: "Please book in a discovery call below to discuss your project." The embed on that page points at the Calendly URL below. The saved thank-you text does not include the calendar widget. https://www.morningside.ai/thank-you

Calendly, fetched and not booked, https://calendly.com/morningside-ai/morningside-ai-discovery-meeting:

> Morningside AI Discovery Meeting - Website
>
> 30 min
>
> Book a discovery call to explore how Morningside AI can identify and implement AI solutions that drive measurable results in your business.

No intake questions were on the rendered event page. **INFERENCE:** the form is the qualifier, and the calendar is the second step. The thank-you URL and the Calendly URL are both reachable without the form. Selecting a time might ask more. That step was not taken.

No ebook, newsletter, or lead magnet on the pages crawled. "Upskilling" is in the homepage title and shows up as "AI Enablement Sessions" inside Adopt. It is not a separate public course on this site.

## What Wil should steal or adapt

Ranked. Mapped to his offer. Their budget bands stay theirs.

1. **Fit call.** Ask what the owner already tried, who else feels the pain, and what "done" would change. Their hero is that sentence: tools bought, pilots stalled, nobody can say the ROI. That is a dealership owner who already paid for seats. Their mechanism is a form, then a 30-minute event titled "Morningside AI Discovery Meeting - Website." Wil's fit call can carry the same questions without a $15K radio button. The call stays free and on his calendar.
2. **Job map.** "the 5% of opportunities worth building," interviews with "the people doing the work," and a written priority list with ROI. That is the map. Their versions in the studies are a nine-week residence, an eight-week roadmap, or a one-week sprint with proof-of-concept apps. Wil's is a paid diagnostic, credited toward the build, sized for one person. Steal the output and the refusal to build the other 95%. Do not copy nine weeks inside the company as the default product.
3. **Build.** "No fragile demos. No science projects." And, from Develop: scope, data flows, integrations, and success criteria before the build. The NBA study is the one that says the deliverable included working proofs of concept. Wil's build should be one job, with a done test, after the map says it is the 5%.
4. **Autonomy ladder.** Adopt is the line to keep: the work is real when people use it, and "The goal isn’t a “handover” - it’s ownership." The FAQ adds "monitor how it’s used, and refine until it runs smoothly without us." Wil's ladder keeps going after that, with a person on the exceptions. Say that ongoing is part of the offer. Their pages never price it.
5. **Proof.** One operating company, warehouses and admin hours, and the client's sentence on the same page. Asmuss is the right shape. The title overclaims relative to the body. Wil's auto-shop number should stay in the past tense, with the method (11,139 PO lines) in the same breath. Do not borrow "Millions in revenue growth opportunity."

## What not to copy, and why

- **A 55-person group as the way the work gets done.** "a team of over 55 people across the Morningside Group," two Co-CEOs, a CFO, a managing director of consulting. The nine-week, 20-interview Asmuss assessment is staffed like that. A one-person practice that promises "We spent 9 weeks inside the business" before a build will not finish the Job map.
- **Their budget bands as a price.** "$15K - $50K" through "$150K - $500K" are choices on a form. There is no price page. Printing those bands on Wil's site would invent a fee he has not set, and the top of the form is an enterprise conversation.
- **The audience as the product.** 13.4 million views, 90k in a community, 2,700 people "through our programs," Liam's million followers. None of it is a link, a join button, or a curriculum on this site. Wil is not building that, and bolting a view-count onto a local practice copies the stat row without the firm behind it.
- **Industry-agnostic, worldwide, "leading organisations."** The form will accept a 50-person company. The writing is still startups and enterprises, an NBA franchise, and a national distributor. Wil's page should say dealerships, equipment dealers, and trades. Their "industry-agnostic" line would erase that.
- **Projected impact written like a result.** "1,600+ hours per month," "Millions in revenue growth opportunity," "can increase 25%," "can: reclaim 200+ monthly hours." The Asmuss page does say "projected" and "makes possible." The titles do not. An owner comparison-shopping will remember the title. Wil should not title a roadmap as a transformation that already happened.
- **Unnamed flagship clients.** The NBA study and the visible aged-care study do not name the organization. Ashcroft's "measurable improvements" has no number and no page. The logo-and-quote pattern is fine only when the quote is as specific as Marita's, and even hers is about the roadmap.
- **Terms that sell a different menu.** "Autonomous Agent Development, Enterprise Consulting, Chatbot Development" is not the Identify / Develop / Adopt story. Wil should keep one offer in one order: fit call, Job map, build, ladder.
- **A public course or a Skool.** Not on this site. Nothing here is a reason to start one.

## X evidence

`research/ai-specialists/_x/posts.md` has no post from Liam Ottley, Josh Brown, or Morningside AI. Nothing in that file adds to, or contradicts, the site.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Price | No pricing page. `/pricing` is a 404. No fee in the terms. | The inquiry form asks the buyer to pick "$15K - $50K," "$50K - $150K," "$150K - $500K," or "Not Sure Yet." |
| What the engagement is | Marketing site: Identify, Develop, Adopt. | Terms: "AI strategy, Autonomous Agent Development, Enterprise Consulting, Chatbot Development." |
| Did the result happen | Asmuss title: "Building New Zealand's First AI-Enabled Industrial Distributor." | Body: "What the roadmap makes possible," "projected annual cost savings," "revenue growth opportunity." Marita's quote is about the nine-week roadmap. |
| Aged-care name | Visible prose: "An Australian aged care provider." | JSON-LD headline on the same saved file: "Care Connect." |
| NBA hours | Challenge: manual work "consuming 200+ hours monthly." | Outcomes: the franchise "can: reclaim 200+ monthly hours." |
| After delivery | Homepage step 3: "By the time we step back." | FAQ: "We don't hand off and vanish" and they refine "until it runs smoothly without us." |
| Who is on the email | Work-with-us prints tara@morningside.ai. | Homepage JSON-LD contact is info@morningside.ai. |
| Discovery call | Thank-you page, after the form's copy, says to book below. | The thank-you URL and the Calendly URL are public. No page says the form is required before the calendar will accept a booking. |
| Audience vs. offer | "13.4m views," "90k in our online community," "2,700+ empowered through our programs." | Sitemap and nav do not link a channel, a community, or a program. |
| How long discovery is | Studies: 9 weeks, 8 weeks, and 1 week. | No page says which a new buyer should expect, or whether that time is paid. |

Private equity: the pages crawled and the X file do not mention it.
