# Frontier Business Design teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no form submitted, no assessment started, no discovery call booked, no checklist requested.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer, in order, is a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder. The line is "Hand off the busywork. Keep the decisions." Pricing is undecided. Frontier is not an AI firm. John Claborn sells operations work into trades and home-service companies. This note is about that packaging. Wil is not becoming a fractional COO. Prices below are theirs.

Every important claim is quoted from a page saved under `research/ai-specialists/frontier-business-design/pages/` or from the two Frontier posts in `research/ai-specialists/_x/posts.md`. X posts are labeled as X posts. **INFERENCE** marks a conclusion that is not a sentence on the site or in those posts.

## Top 5 takeaways

1. **Name the job the way the HVAC page does.** "Techs call you from the attic to approve repairs and replacements." The scorecard on that page is "calls run, close rate, callbacks, agreements." A dealer or a trade page should sound like the counter and the shop. He should write that only for work he has actually done. https://frontierbusinessdesign.com/hvac/

2. **Built ≠ Owned is the ladder's test.** "A binder of SOPs nobody follows is built, not owned. Frontier measures the work by adoption, not by deliverables handed over." A rung is not done when the workflow is written. It is done when the person uses it, and the exception still has a name. https://frontierbusinessdesign.com/frontier-method/

3. **Write the decisions the owner keeps.** Alignment ends with "written decision rights, so the team knows what it can decide without you." That is his headline turned into a page the team can hold. The Job map is where those rights get written, one job at a time. https://frontierbusinessdesign.com/frontier-method/

4. **One handed-off system is the cousin of the build. The retainer is the thing to leave.** System Builds are "One defined project, built with your team and handed off working," "From $2,500." The Operating Partner is "I embed as your part-time COO," "From $3,000/mo." Wil's build is the project. He is not taking the seat, and these floors are not his price. https://frontierbusinessdesign.com/packages/

5. **Keep the free 30-minute call. Leave the long assessment.** The packages page says "Or book a free 30-minute call." The FAQ says the call is where "you get an honest read" and "we won't promise a date before we've looked." The checklist is free and short. The assessment and the Business Builder are longer gates, and they do not agree on who they are for. His fit call stays 30 minutes. The paid map is where the detail goes. https://frontierbusinessdesign.com/packages/ and https://frontierbusinessdesign.com/faq/

## Method and coverage

The marketing site is WordPress (Rank Math sitemaps, Elementor, public `wp-json`). Read with headless Chrome. `sitemap.xml` and `page-sitemap.xml` list the same 15 URLs. All 15 were saved before the crawler spent the rest of a 70-page budget on attachment and media URLs that returned the homepage (logos, OG images, Elementor library URLs). Those requests overwrote `index.txt` with the same homepage body. The file now starts with `https://frontierbusinessdesign.com/`. The body is the homepage that was rendered (815 characters of visible text, plus a form extract and JSON-LD).

`not-fetched.txt` holds 14 URLs: three logo attachments and crawler guesses (`/services`, `/pricing`, `/case-studies`, `/work`, `/blog`, `/contact`, `/about`, `/careers`, `/privacy`, and the same pages without a trailing slash). None of those are in the page sitemap. `/about-us/`, `/contact-us/`, `/packages/`, and `/privacy-policy/` were already saved. No blog posts and no case-study URLs are in the sitemap.

Second hosts, crawled after the marketing site, one Chrome session, no forms submitted and no time booked. The log is `pages/crawl-log-2.tsv`. The marketing-site log is `pages/crawl-log.tsv` (copy also at `pages/crawl-log-1.tsv`).

- `https://pages.frontierbusinessdesign.com/assessment` saved as `assessment.txt`. Visible screen is a contact gate. The question labels are in the form extract. Continue was not clicked.
- `https://builder.frontierbusinessdesign.com/` saved as `builder-home.txt`. The crawler first wrote this over `index.txt` because both URLs slug to `index`. The builder text was moved to `builder-home.txt` and the homepage file was put back. `builder.txt` is `https://builder.frontierbusinessdesign.com/builder`, the first question only. Continue was not clicked.
- `https://link.frontierbusinessdesign.com/widget/booking/VsbIEYu2VYgQdRnV8GxN` saved as `widget__booking__VsbIEYu2VYgQdRnV8GxN.txt`. Public booking widget only. No time was selected.

The 14 October X post's short link resolves to `https://builder.frontierbusinessdesign.com/`. That is why the builder host is in this folder. It was not guessed.

Not crawled on purpose: Facebook, LinkedIn, X, `wp-admin`, image files, and the guessed paths that 404 on the subdomains. The booking widget's calendar dump (years and empty day cells) is in the file and is not treated as copy.

## Product

### What he sells

Homepage title: "Fractional COO for Trades & Service Businesses." Eyebrow: "OPERATIONS PARTNER FOR TRADES AND HOME-SERVICE OWNERS." H1: "THE BUSINESS YOU BUILT SHOULDN'T DEPEND ON YOU." https://frontierbusinessdesign.com/

> You built the business. Now too many decisions, problems and approvals still run through you. Frontier helps founder-led service companies doing $500K–$10M install the structure, accountability and operating systems needed to run without the owner at the center.
>
> Built for the trades: HVAC · Plumbing · Electrical · Landscaping

The homepage is a short hero, a footer, and a form (name, email, company, "Tell us a bit about your business and what you're facing..."). The offer is on the other pages. Footer on every page: "Lubbock, TX · Serving owners nationwide," phone (806) 790-7951, johnc@frontierbusinessdesign.com.

The category page defines the work. https://frontierbusinessdesign.com/fractional-coo/

> A fractional COO is a part-time operations executive who builds and runs the systems a growing business needs, without the cost of a full-time hire. For a founder-led service company, that means assigning clear ownership of every function, setting up a weekly scorecard and meeting rhythm, documenting how the work gets done, and moving day-to-day decisions off the owner's plate.

FAQ, the distinction he wants: "A consultant typically recommends, a coach typically advises, and a fractional COO installs the system and stays until the team runs it." https://frontierbusinessdesign.com/faq/

### Packaging and prices

Prices are on the marketing site. They are not in the two X posts. The packages meta description: "Three ways to work with a fractional COO: Individual Coaching at $250/hr, System Builds from $2,500, or an Operating Partner from $3,000/mo." https://frontierbusinessdesign.com/packages/

| Offer | Price on the site | Best for, in their words | What is included |
| --- | --- | --- | --- |
| Individual Coaching | "$250/hr" | "Owners who want a sharper plan and a sounding board, or a key leader you are growing to run the day-to-day." | 90-day plan, delegating, accountability, decisions, leadership meetings, hard conversations, "Reading your basic financial documents," "Growing from operator to leader, or from owner to CEO." |
| System Builds | "From $2,500" | "Owners who know what's broken and want it fixed, installed and owned by the team." | A diagnosis and "a 30-, 60- or 90-day operational plan," an org chart, a weekly scorecard, a weekly meeting rhythm, "SOPs and checklists your team will actually use," hiring and onboarding, "Clean handoffs between the office and the field." |
| Operating Partner | "From $3,000/mo" "Billed monthly" | "Owners ready to stop being responsible for everything, and leadership teams that need structure and accountability." | Diagnose, org chart, scorecard, "run the meetings," "hold the team accountable," "Coach your leaders until they can run it without me," "Step in when you are out of the office." |

"From" is on the page. No ceiling, no hour cap, and no minimum term is printed on the packages page. The FAQ repeats the three prices and does not add a term. https://frontierbusinessdesign.com/faq/

The same three prices are repeated on the HVAC, plumbing, electrical, and landscaping pages.

No page crawled says the assessment or the Builder is free. "Free" is used for two other things. Packages: "Or book a free 30-minute call." Checklist: "It's free, it's one page, and nobody sees your answers but you." https://frontierbusinessdesign.com/checklist/ The candidate note "a free assessment" matches the checklist and the call. It does not match a sentence on the assessment page or the Builder page. The 14 October X post says "All about the free value" and links to the Builder. That word is in the post, not on the Builder page. Quoted in the X section.

Terms, on results: "We do not guarantee any specific result, revenue, or outcome from using the Site or engaging our services." "A working relationship begins only when we both sign a written agreement." "The content on the Site is general information." https://frontierbusinessdesign.com/terms-of-service/

FAQ, on timing: "It depends on where the business starts and which path you choose, so we won't promise a date before we've looked."

### The Frontier Method

Named framework, https://frontierbusinessdesign.com/frontier-method/ H1: "The Frontier Method: Clarity → Alignment → Execution → Scale." "always in this order."

| Stage | What you end with, in their words |
| --- | --- |
| Clarity | "A 1- and 3-year direction, operating targets, and the few priorities that matter most right now." "Clarity sets the destination and the owner's future role in it." |
| Alignment | "Clear ownership of every function, measurable outcomes for each seat, and written decision rights, so the team knows what it can decide without you." |
| Execution | "A weekly scorecard, a meeting rhythm that produces decisions, SOPs the team actually uses, and visibility into the numbers." |
| Scale | "Managers making decisions independently and the system still in use months later." |

> Built ≠ Owned means a document or system doesn't count as implemented until the team uses it and owns it. A binder of SOPs nobody follows is built, not owned. Frontier measures the work by adoption, not by deliverables handed over.

"All three do." Coaching applies the method "to your own role and decisions." A System Build "installs one piece of it, like the scorecard or the org chart." An Operating Partner "installs and runs the whole method alongside your team."

### Trade pages

Four pages, same skeleton, different jobs and numbers. Each one says "$500K–$10M," repeats the three prices, and says "Yes. Frontier builds the process around the tools you already run instead of selling you new software." Each one refuses a date: "we won't promise a date before we've looked."

| Page | The owner's extra jobs | Scorecard numbers they name |
| --- | --- | --- |
| HVAC, https://frontierbusinessdesign.com/hvac/ | "the dispatcher, the estimator, the techs’ backup." "Techs call you from the attic to approve repairs and replacements." "Maintenance agreements get sold, but nobody owns renewals." | "calls run, close rate, callbacks, agreements." Owners named for "dispatch, the replacement sale and maintenance agreements." |
| Plumbing, https://frontierbusinessdesign.com/plumbing/ | "emergency calls, pricing and techs." | "calls booked, average ticket, callbacks, margin by job type." Owners for "dispatch, pricing and callbacks." |
| Electrical, https://frontierbusinessdesign.com/electrical/ | "the license on the permits, the estimator on the bids and the scheduler for every crew." | "bids out, win rate, crew utilization, change orders billed." Owners for "estimating, scheduling and permits." |
| Landscaping, https://frontierbusinessdesign.com/landscaping/ | "crews, routes and quotes." | "crew hours, revenue per crew, enhancement sales, rework." Owners for "routing, quoting and equipment." |

HVAC also says "That works at three trucks. It breaks at ten, especially in July." Electrical says "Growth adds crews faster than it adds people who can make decisions." The electrical page prints "For a electrical company." That is the template showing. The four pages are one offer with the nouns swapped.

**INFERENCE:** the pages are search doors for an owner who already knows the pain, not four different products. The prices do not change by trade.

### Ideal customer

Homepage and FAQ: "founder-led trades and home-service companies doing $500K to $10M a year, especially ones where too many decisions, problems and approvals still run through the owner." About page: "between $500K and $10M." Geography: "Based in Lubbock, Texas, and works with owners nationwide, virtually." https://frontierbusinessdesign.com/faq/

The bands do not agree. The contradictions table has the list. Short version: visible copy says $500K–$10M, the organization name in JSON-LD says "$1M–$10M," the assessment meta says "$1M-$10M," and the Builder says "roughly $300k to $1M."

No employee-count ICP is stated on the marketing pages. The assessment form has an "Employee Count" field. The options are not in the saved text.

About page, his history, not a client list: "I've been a COO/Integrator for more than 10 years." "Financial services firm focused primarily in insurance," then "my real estate company," then "the home services industry." "Frontier Business Design is the culmination of over 15 years of service-minded business experience." "From consulting and landscaping to insurance and real estate." https://frontierbusinessdesign.com/about-us/

Nothing on the saved pages says dealership, equipment dealer, Idaho, or Washington. The trades he names are HVAC, plumbing, electrical, and landscaping, plus the about-page history.

### Proof

There is no case-study URL in the sitemap. `/case-studies` and `/work` were not in the fetched sitemap and were left in `not-fetched.txt`.

The only outcome number on the marketing site is on the about page:

> I have successfully installed an operating system in 5 different companies resulting in 3x revenue twice, clear accountability, ownership of outcomes and decreased chaos and stress of each business's leaders and executives.

No company name, no starting revenue, no year, no "twice" attached to a named firm. Terms say "We share examples of past work to show what is possible" and "Every business is different." The saved pages do not include those examples.

**INFERENCE:** "3x revenue twice" is a biography line. It is not a case study a buyer can check. Wil's $217K and 11,139 PO lines is a more usable proof shape if he writes what the credits include. He should not borrow "3x twice."

### Two diagnostics that are not the packages page

Blueprint page on the marketing host, https://frontierbusinessdesign.com/frontier-business-blueprint/ H1: "FRONTIER BUSINESS BLUEPRINT ASSESSMENT." Meta: "A 24-question diagnostic for service business owners." The visible text promises "24 diagnostic questions," "the 4 core operating areas," and "A Scoring system with recommendations." It does not say free, and it does not show the 24 questions. The button goes to `https://pages.frontierbusinessdesign.com/assessment` (linked from the homepage, the blueprint page, and the packages page). Packages calls that assessment "20 minutes."

Assessment host, https://pages.frontierbusinessdesign.com/assessment Title: "Owner Dependency Assessment." Meta: "An honest 25-minute diagnostic for owners of $1M-$10M trades and home service businesses to discover where the leaks are occurring." The visible screen, not submitted: Full Name, Email, Business Name, Industry, Revenue Range, Employee Count, then "Continue." The form extract on the same file lists later questions, including "If you were unavailable for two weeks, what would break down in your organization and why?", "Who on your team can make decisions without coming to you first, and what kinds of decisions are those?", and "Are your core business processes written down anywhere, or do they live in your head and your team's heads?" Those labels were in the page. The next step was not opened. Revenue and industry options are not in the extract.

Builder, the page the X post links to, https://builder.frontierbusinessdesign.com/ saved as `builder-home.txt`:

> Answer about 25 questions about how your business actually runs. You will get a personalized Builder: what is working, the one constraint to address first, and the three outcomes to focus on over the next 90 days.

"For founder-led service businesses doing roughly $300k to $1M, with a small team and an owner who is still in the middle of most things." "ABOUT 15 MINUTES." "Your answers save in this browser as you go." "DELIVERED IN 24 HOURS." "Your Builder is prepared from your answers and sent to your inbox as a private link the next day." The first question page asks "What is the name of your business?" and Website. Not continued. The Builder page does not say free.

**INFERENCE:** the blueprint link and the assessment host are one diagnostic aimed at the $1M–$10M copy, and the Builder is a second diagnostic aimed at roughly $300k–$1M. The marketing site never explains that split. The "24 questions," "about 25 questions," "20 minutes," "25-minute," and "ABOUT 15 MINUTES" lines are all on the properties crawled. They are not one duration.

## Sales and marketing

### Positioning

1. Category, in the title and the FAQ: fractional COO. On the homepage eyebrow: "Operations partner."
2. Outcome: the business runs without the owner at the center.
3. Enemy: coach who advises, consultant who recommends, software that gets installed and is not used. "Built ≠ Owned."
4. Mechanism: Clarity, Alignment, Execution, Scale, then one of three ways in.
5. Commercial: three published floors, a free 30-minute call, no date promised.
6. Proof: the about-page "3x revenue twice," with no client attached. Trade pages do the work the case studies would have done, by describing the job.

Lines worth keeping:

- "THE BUSINESS YOU BUILT SHOULDN'T DEPEND ON YOU." https://frontierbusinessdesign.com/
- "A consultant typically recommends, a coach typically advises, and a fractional COO installs the system and stays until the team runs it." https://frontierbusinessdesign.com/faq/
- "A binder of SOPs nobody follows is built, not owned." https://frontierbusinessdesign.com/frontier-method/
- "Clean handoffs between the office and the field." https://frontierbusinessdesign.com/packages/
- "Techs call you from the attic to approve repairs and replacements." https://frontierbusinessdesign.com/hvac/
- "Frontier builds the process around the tools you already run instead of selling you new software." https://frontierbusinessdesign.com/hvac/
- "The office and the field each think the other owns it." https://frontierbusinessdesign.com/fractional-coo/
- "We'll look at where the business is stuck and tell you straight whether Frontier can help." https://frontierbusinessdesign.com/contact-us/

Voice: short, the owner is tired, the nouns are the trade. The method page is more abstract than the HVAC page. The HVAC page is the one that sounds like a person who has been in the building.

### Funnel and CTAs

1. "Book a Discovery Call" on the packages page, the FAQ, the method page, the trade pages, and the contact page. Contact page: "Pick a 30-minute time that works for you. We'll look at where the business is stuck and tell you straight whether Frontier is the right fit. Prefer to write first? Use the form and we'll reply within 24 business hours." The button on the contact HTML points at `https://link.frontierbusinessdesign.com/widget/booking/VsbIEYu2VYgQdRnV8GxN`. The widget's visible text: "Consultations / Discovery Call / 30 min" and "30-minute conversation to understand where the business is today, what is creating the most operational friction, and whether Frontier is the right fit to help." No time was booked. https://frontierbusinessdesign.com/contact-us/
2. Contact form, not submitted. Full name, email, company name, phone, "What's your biggest challenge right now?" "By submitting this form, you agree to our privacy policy." The form does not ask revenue or headcount.
3. Homepage form, not submitted. Name, email, company, a short note about the business.
4. "Take the Assessment" on the packages page. "It takes 20 minutes and shows you where your business is strongest and weakest." That link is the assessment host above.
5. Checklist gate, not submitted. "FREE ONE-PAGE CHECKLIST." "Ten questions. Five minutes." First name and email. Five of the ten are in the visible text: decisions that wait on you, pricing and dispatch and scheduling, whether you are the only one who knows the numbers, problems that come back, a week off without the phone. https://frontierbusinessdesign.com/checklist/

What the call includes, contact page: "30-minute intro conversation," "Discussion of your current challenges," "Assessment of fit and potential approach," "Clear next steps if we're aligned."

**INFERENCE:** the designed front door is the 30-minute call, with a checklist and an assessment for people who will not book yet. The form does not qualify on revenue. The pages do, and they do not all say the same band. There is no SDR and no second name on the booking widget.

### Trust and content

Homepage order: H1, one paragraph, the four trades, footer. Prices are one click away on Work With Us, not in the hero. There is no logo row and no quote from a client in the saved marketing pages.

There is no blog in the sitemap. The content is the FAQ, the method page, four trade pages, and the checklist. Privacy policy effective 14 June 2026. It names a scheduling provider and an assessment tool and does not name the vendors. Controller email is johnc@frontierbusinessdesign.com. Terms are governed by Texas, Lubbock County. https://frontierbusinessdesign.com/privacy-policy/

**INFERENCE:** four trade pages plus a FAQ are doing the job a blog would do, and they are aimed at an owner searching "fractional COO" plus a trade. That is a small site on purpose. It is also why a buyer who wants a named job result does not find one.

## What Wil should steal or adapt

Ranked against the fit call, the credited Job map, the build, and the ladder. The retainer is not on this list as something to become.

1. **Fit call: 30 minutes, free, and a straight "not a fit."** Their call and his call are the same length. Theirs asks where the business is stuck and whether they can help. His can ask which job is stuck. "We won't promise a date before we've looked" is the right refusal of a fake timeline. He should not open with their assessment. Thirty written questions before the call is a different product.

2. **Fit call: five checklist questions, not the 25-minute form.** The visible checklist lines are already a fit conversation. Do decisions wait on you? Do pricing, dispatch, and scheduling run through you? Are you the only one with the numbers? Do the same problems come back? Can you take a week off? For a dealer, swap dispatch for the parts counter or the service lane. The email gate is optional. The questions are the point.

3. **Job map: decision rights for one job, plus the office-to-field handoff.** Alignment's deliverable is "written decision rights." System Builds include "Clean handoffs between the office and the field." The map for a trade or a dealer should name who can approve the repair, the discount, or the comeback without the owner, and where the office and the field each think the other owns it. That is the credited artifact. Their System Build starts at $2,500 for a whole project. His price is undecided. Do not print their floor.

4. **Build: around the system they already run, one project, handed off working.** "instead of selling you new software" is the line on the HVAC page. His build lives in the DMS, the service software, or the vendor portal they already have. "One defined project" matches a build scoped to one job. "Handed off working" matches Built ≠ Owned: the person uses it. The Operating Partner, who "runs the meetings" and will "Step in when you are out of the office," is the seat he is not selling.

5. **Ladder: adoption is the measure, and Scale is "still in use months later."** Their Scale stage is managers deciding, and the system still in use. His rungs are tool, then headless, then governed, then agent, with a person on the exception. The test to steal is the binder line. A workflow file that nobody opens is not a rung. The number he already has (credits found, lines matched, what the person still checks) is the adoption evidence. Their scorecard numbers (close rate, callbacks, margin by job type) are the menu for a later job, after he has seen that job. They are not a dashboard to invent.

6. **One page per trade he has actually worked, with that trade's nouns.** HVAC does not say "optimize operations." It says attic, agreements, July, three trucks and ten. A dealership page or an equipment-dealer page should be that specific, and only if the proof exists. Four cloned pages that say "a electrical company" are the pattern to avoid. Geography is the other difference. They say nationwide, from Lubbock. His buyers are in Idaho and eastern Washington. **INFERENCE:** naming those places is his version of naming the trade, and this site does not teach local SEO. It only shows a national virtual practice.

7. **Say the next step, and say what you will not promise.** Three doors, a sentence on who each one is for, and no date until they have looked. Wil's doors are already named: fit call, Job map, build, next rung. Publishing their $250, $2,500, and $3,000 would describe their practice. Naming his sequence without a borrowed price is the part that fits while his price is open.

## What not to copy, and why

- **The fractional COO identity.** The site's title, FAQ, and trade pages are that category. The X post, quoted below, says he does not use the phrase. Wil should not enter the argument. He does not sit in the seat, run the huddle, or "step in when you are out of the office."
- **Their prices.** $250 an hour, from $2,500, from $3,000 a month. Those buy coaching, a system install, or a part-time operator. Putting them on his page would anchor a delivery model he is not offering. His price stays undecided until he sets it.
- **A six-month embed.** The packages page does not print a minimum. The 22 October X post says a "6 month contract" was signed. Either way, a multi-month seat inside the company is the offer he is leaving.
- **"3x revenue twice" with no name.** Five companies, two triples, no window. Terms already say they do not guarantee a result. An unnamed multiple next to a real PO-line story makes the real story look vague.
- **The band that their own pages do not share.** $500K–$10M, $1M–$10M, and roughly $300k–$1M are all printed. Copying one of them as "the" trades ICP would copy a contradiction. His size is 50–200 people. **INFERENCE:** a company that size is often outside a $10M ceiling, and nothing on this site says otherwise. He should not adopt their ceiling to look like a trades specialist.
- **The 25-minute assessment as the price of a conversation.** The gate asks name, email, business, industry, revenue, and headcount, then a long form. His fit call is the conversation. The Job map is where the source files show up. "Please leave confidential data off the public form" is still the right public rule, and this site's assessment does the opposite: it asks for the operation up front.
- **Cloned trade pages.** Same prices, same FAQ, "a electrical company." One honest page beats four templates. He should not publish an HVAC page, a plumbing page, and a dealer page that differ by a noun.
- **Nationwide virtual as the default.** They can, from Lubbock. His advantage is being in the room in Idaho and eastern Washington. Copying "serving owners nationwide" throws that away.
- **Running the weekly meeting.** Execution on their Operating Partner includes "run the meetings" and "hold the team accountable." That is the COO's week. His ongoing work is the next rung of a job, stoppable, with a person still on the exception.

## X evidence

Two posts, both @FrontierBDesign. They are X posts, not website copy.

The 14 October 2026 post is the menu the site spreads across the method and the packages page. He lists: operating plans with targets, the owner's role and a plan to get them out of day-to-day, org structures with outcome-based roles, "who owns decisions, results, and responsibilities," "KPIs, scorecards, and performance tracking," "SOPs that employees will use," weekly meeting rhythms, "financial visibility into profitability, cash flow, and job performance. (fCFO partnerships in some cases)," "Fix broken processes between the office and field," develop GMs and directors of ops, lead projects, "Step into the operations seat," train internal leaders, and "Transfer operational ownership to the team."

> Coaches teach.
> Consultant advise.
> Ops partners do.

"All about the free value, so start here." The link resolves to `https://builder.frontierbusinessdesign.com/`, the Builder page quoted above, which does not say free. Then: "Want to chat? DM's are open." https://x.com/FrontierBDesign/status/2110384350659313843

What the post adds: "fCFO partnerships in some cases" is not on the saved pages. "Develop GM's and Dir of Ops" is sharper than the site's "coach your leaders." The office-and-field line is also on the packages page, so it is not X-only.

The same post contradicts the site's category:

> And for the record, I don't use Fractional COO because everyone over on LI seems to be a fractional COO these days.

The site title, the FAQ H1, the trade-page titles, and the JSON-LD organization name all say fractional COO. The packages H1 is "WORK WITH US," and the retainer's name on that page is "Operating Partner," while the page title is "Work With Us: Fractional COO Engagements." Both the refusal and the category are public. This note does not pick one.

The 22 October 2026 post is a day log, not a price.

> 6 month contract officially signed for new client despite seller of business telling my client "that's a waste of money".

Also in that post: an office admin "led both weekly huddles for the first time (transfer of ownership)," an owner "took CSR + Dispatcher out in the field for training," "2 clients changed scope," "Formed yet another new venture (peer advisory for Ops consultants)," a podcast, and "COO Collective tomorrow, no meetings and no client work." https://x.com/FrontierBDesign/status/2113108248748245492

No client is named. No dollar result is given. "6 month contract" is not on the packages page. "Peer advisory for Ops consultants" and "COO Collective" are not pages on the marketing site. "Seller of business" is a person in a client's deal, not a private-equity offer. The pages and the posts do not say "private equity." There is no PE section in this note.

The post is the only place the site's "transfer of ownership" shows up as something that happened last week: an admin ran the huddle, and a CSR and a dispatcher went to the field. **INFERENCE:** that is the proof shape the marketing site is missing, and it is still unnamed, so it cannot be quoted as a case study.

## Open questions and contradictions

| Topic | One surface | The other |
| --- | --- | --- |
| Category name | Site titles, FAQ, trade pages, JSON-LD: "Fractional COO" | X, 14 October: "I don't use Fractional COO." Packages SKU name: "Operating Partner." |
| Revenue band | Homepage, FAQ, about, trade pages: "$500K–$10M" or "$500K to $10M" | JSON-LD organization name: "Fractional COO for $1M–$10M Service Businesses." Assessment meta: "$1M-$10M." Builder: "roughly $300k to $1M." |
| How long the diagnostic is | Blueprint meta: "24-question." Packages: "20 minutes." | Assessment meta: "25-minute." Builder: "about 25 questions" and "ABOUT 15 MINUTES." |
| Whether the diagnostic is free | Checklist: "It's free." Call: "a free 30-minute call." X, 14 October: "free value," linking to the Builder | Assessment page and Builder page: the word free is not in the saved text. |
| Term | Packages and FAQ: no minimum printed. "From $3,000/mo," "Billed monthly." | X, 22 October: "6 month contract officially signed." |
| Proof | About: "5 different companies" and "3x revenue twice" | No case-study URL. Terms: "We do not guarantee any specific result." X log: unnamed clients, no dollars. |
| Where the work is sold | Homepage eyebrow: "Operations partner." Body: founder-led service companies. | X menu includes "fCFO partnerships in some cases," which the saved pages do not list. |

- The candidate note "founder-led trades, $500K–$10M" is the homepage and the FAQ. The candidate note "a free assessment" is only confirmed for the checklist and, as "free value," for the X post's link. The assessment and the Builder do not say free.
- Which diagnostic is the one to send, the $1M–$10M assessment or the $300k–$1M Builder? The marketing site links the first. The X post links the second. The site does not say how an owner chooses.
- Will a 50–200 person dealer even recognize this offer? The copy is three trucks and ten, CSRs, dispatch, and a $10M ceiling. **INFERENCE:** the page shape (the job, the number, the handoff) travels. The ceiling and the seat do not.
- His price is open. Theirs is a floor with "from." Is a floor useful once he knows his own number for a Job map and a build, or does "credited toward the build" do the filtering their price does? Their site cannot answer that. It only shows that they were willing to print a floor.
- Ongoing work. Their ongoing unit is the Operating Partner, in the company, running the meeting. His is a rung. The admin who led the huddle is their definition of done. His definition of done is the person still on the exception, and the busywork no longer on that person's desk. The site has no sentence for an autonomy ladder, because the product stops at "the team runs it."
