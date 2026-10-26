# Schema Operations teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no checkout, no webinar seat reserved, no email sent.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer, in order, is a free 30-minute fit call, a paid Job map credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder. The line is "Hand off the busywork. Keep the decisions." Pricing is undecided. Schema Operations is not an AI firm. This note is about how Martin Toomey packages operating design, and which pieces map to Wil's sequence. Wil is not becoming a fractional COO, and he is not selling a $397 kit.

Every important claim below is quoted from a page saved under `research/ai-specialists/schema-operations/pages/` or from the two Toomey posts in `research/ai-specialists/_x/posts.md`. X posts are labeled as X posts. **INFERENCE** marks a conclusion that is not a sentence on the site or in those posts.

## Top 5 takeaways

1. **Steal the split between doors. Leave every price.** The homepage says "Not one product at three prices: different jobs for different stages. Pick the wrong one and you waste a month." The doors are a $397 kit, a $6,000 install, and a $12,000-a-month seat. Wil already has a sequence. The useful part is that each step is a different job and a different amount of him in the room. He does not sell the kit, and he does not take the seat. https://schemaoperations.com/

2. **The qualifying sentence belongs on the fit call.** The services page says "Pick the product and tell me what breaks when you step out. I'll tell you if it's a fit, or if you picked the cheap product because it felt safer." One sentence, then a revenue band. That is a 30-minute conversation. It is not a substitute for the paid Job map. https://schemaoperations.com/services/

3. **KEEP / GIVE / KILL is a contents list for the Job map. His map stays paid, and he stays in the room.** The services page packs the kit as "30 days, one function. Engine, KEEP / GIVE / KILL, owner, scorecard. A file and a walkthrough. No call." The kit page says "I am not in the room. You are." The practice is the part to adapt. The product is a file the buyer works alone for $397. Wil's map is credited toward the build. Do not publish $397. https://schemaoperations.com/services/ and https://schemaoperations.com/services/rebuild-kit/

4. **The AI essay is the argument for mapping the job before the tool.** "AI can help a person who already knows the standard, the boundaries and the outcome they own. It cannot supply the lines." The print-shop paragraph writes three job types, a dollar and timeline threshold, and the person who owns the handoff. That is a Job map. The build comes after the lines exist. https://schemaoperations.com/writing/you-dont-need-ai/

5. **Leave the proof shape.** The about page rests on "more than fifteen companies" and "more than two hundred million in revenue through those companies." The named people in the value essay are labeled composites. There is no case-study page. Wil's $217K and 11,139 PO lines is the number for the first screen, with a sentence on what the credits include and what the person still checks. A biography is not that. https://schemaoperations.com/about/

## Method and coverage

Read with headless Chrome. `https://schemaoperations.com/sitemap.xml` returns 404. `https://schemaoperations.com/robots.txt` points at `sitemap-index.xml`, which points at `sitemap-0.xml`. That sitemap lists 29 URLs. All 29 were saved. The crawl log counts 32 successful fetches because `/about`, `/services`, and `/contact` were also requested without a trailing slash and wrote the same three files again (`about.txt`, `services.txt`, `contact.txt`). One file kept per final page. Nothing was left queued. No `not-fetched.txt`.

Saved: homepage, services index, Rebuild Kit, Design Install, Fractional COO, webinars, about, contact, the writing index, and 20 essays. The writing index says "20 pieces." The sitemap and the folder match.

HTTP 404, crawler seed paths, not linked from the site: `/about-us`, `/pricing`, `/case-studies`, `/work`, `/blog`, `/careers`, `/privacy`, `/privacy-policy`. There is no public privacy policy and no case-study index in the sitemap.

Not crawled on purpose: Stripe checkout, the webinar payment step, X itself (the two posts were already saved). No second host appeared in the page text. Forms post to `/api/fit-check`, `/api/contact`, and `/api/webinar` on the same host. None were submitted.

Pages were rendered in Chrome. The visible prices and the comparison table are in the saved text.

## Product

### What he sells

Homepage H1: "When the founder is the system, growth stops." Eyebrow: "OPERATING DESIGN FOR FOUNDER-LED COMPANIES." https://schemaoperations.com/

> I work with owner-led companies under $20M, most of them under $5M, that have customers, a product people pay for, and a curve that has gone flat. It's rarely the market. It's usually the founder's role.

Three problems, same page, and the order is the point: "They feed each other, so the order you fix them in matters."

| Problem | His line | Essay |
| --- | --- | --- |
| Design | "The company still needs you in every deal." | https://schemaoperations.com/writing/the-company-still-needs-you-in-the-room/ |
| Margin | "Busy, but not keeping enough." | https://schemaoperations.com/writing/busy-is-not-the-same-as-keeping-money/ |
| Inputs | "You know what to do. You're not doing enough of it." | https://schemaoperations.com/writing/you-already-know-what-to-do/ |

How he describes the work, homepage:

> I install simple systems — short rules, named owners, a weekly number — that take the business off your desk. So you can get back to the work you're great at: the work that made the company successful in the first place.

The about page rejects the deck: "People hear "consultant" and picture decks. That is not the work I care about." He starts with "your actual week next to the company's actual constraint." Then "we name the two or three jobs only you should keep." https://schemaoperations.com/about/

### Packaging and prices

Prices are on the site. The same three product prices are also in the 1 October 2026 X post. The name "30 Day Design Sprint" is only in the 22 October 2026 X post. Detail is in the X section. Do not treat the candidate note "$2–15M" as the offer. That phrase is one sentence in an essay, quoted under ICP.

Services H1: "Not one product at three prices." https://schemaoperations.com/services/

| Product | Price on the site | Who, in their words | What happens | His time |
| --- | --- | --- | --- | --- |
| Rebuild Kit | "$397" "one payment" | "Usually under $2M." "You will do the work." | "30 days, one function." File and a walkthrough. | "None. A file and a walkthrough." "No calls." |
| Design Install | "$6,000" "once" | "Under $5M." Someone on the payroll could own a function. | "Four half-days in 30 days." Then he leaves. | "Four working sessions." |
| Fractional COO | "$12,000" "a month, 6-month minimum" | "$3–5M and up." "The team already exists." | Built with the team. | "About a day a week." |

The services table also says Design Install length is "30 days, up to 90 if needed." The Design Install page says "Extending up to 90 days can be negotiated if needed" and does not print a second price. https://schemaoperations.com/services/design-install/

Fourth price, webinar page only, not in the two X posts: "$99" "one seat, live on Nov 15." "Secure payment with Stripe." https://schemaoperations.com/webinars/

No page crawled says "guarantee," "refund," or "money back." The price sections compare the fee to a bad hire. Rebuild Kit: "Avoiding one wrong hire in that seat covers the price 60 times over, before counting margin." Design Install: "covers the price 4 times over, before counting margin." That is a comparison, not a promise that the engagement will avoid the hire.

Both product pages cite "U.S. Department of Labor," "SHRM," and "CareerBuilder" for the hire-cost figures (30% of first-year salary, 50–200% replacement, 74% of employers, $15,000 to $17,000). They also say "Businesses commonly lose 20–30% of revenue to operational inefficiencies, rework, and 'work about work.'" The services page turns that into a slider. At the default "$2,000,000": "Leaking at 20% $400,000" and "Leaking at 30% $600,000." "On a $2M company that is $400k to $600k a year hiding." The slider is a calculator on the page. It is not a client result.

EOS is the price anchor on the Design Install page, not a fourth product. "Why EOS usually doesn't fit businesses under $10M." "A certified implementer at $4,000 to $6,000 a meeting." Their table: Design Install "$6,000"; EOS one busy month "$8k–$18k"; EOS first year "$32k–$48k"; EOS two years "$45k–$80k+". "For most businesses under $10 million trying to get to $20 million, that cost and complexity is not worth it." Disclaimer on the same page: "EOS® is a registered trademark of EOS Worldwide, LLC. Schema Ops is not affiliated with or endorsed by EOS Worldwide. Costs are typical ranges; implementer fees vary."

Checkout lines, not followed: Rebuild Kit "Secure checkout with Stripe. No calls included: you do the work." Design Install "Secure checkout with Stripe." Fractional COO has no checkout button. The CTA is "Send SEAT."

### Engagement and deliverables

Rebuild Kit, https://schemaoperations.com/services/rebuild-kit/ :

> Daily KEEP / GIVE / KILL practice
>
> Clear rules for what stays and what moves
>
> An owner for the function you choose
>
> A weekly scorecard
>
> The growth engine, mapped

"I am not in the room. You are. No calls are included in the kit." KEEP is "The few calls that actually need you." GIVE is "A person, a cap, and a picture of done." KILL is "The question that doesn't need to be asked."

Design Install, same URL family, https://schemaoperations.com/services/design-install/ :

> A chart of who owns each seat
>
> A weekly scorecard
>
> A handful of quarterly goals
>
> The growth engine, mapped
>
> One 90-minute meeting a week

"Four half-days in 30 days. We build it on your company. Then I leave." "Your seats, your numbers, your goals, your growth engine. Not a template." "The weekly 90 minutes starts while I'm still there, so it sticks." "Hire or fire if the seat is wrong." "Most founders run it themselves after 30 days."

The page's visible FAQ lists six questions and does not include the answers in the saved text: how it differs from EOS, what if 30 days is not enough, how much of the founder's time, what happens after, whether you can talk before you buy, and what if you are smaller. The Rebuild Kit FAQ list is the same shape: calls, what you get, how long, which function, how to get the kit, what if you outgrow it. Answers are not in the extract. This note does not invent them.

Fractional COO, https://schemaoperations.com/services/fractional-coo/ : "About a day a week in the company. More can be negotiated." "Not a file to work through and not a 30-day sprint: I'm in the company, building it with the people who will run it." "We do not start this from zero." "6 months minimum. Long enough for the system to run without me." Not a fit if "You're under $3M and someone on the payroll could own a function. The Design Install does it in 30 days for $6,000 once."

Webinar, Sunday 15 November 2026, 9 AM ET, "30 min + 15 min Q&A," "for founders under $10M." Agenda in the saved text: design, margin, and inputs; KEEP, GIVE, KILL on "your own last week"; "The five pieces" (seats, weekly scorecard, quarterly goals, growth engine, one weekly meeting); "Your first function." You leave with "Your KEEP / GIVE / KILL list," "A first draft of your scorecard," and "One function, one owner." https://schemaoperations.com/webinars/

### Named frameworks

Visible names, not a separate course catalog:

- **Design, margin, inputs.** The three problems. The contact form asks which one.
- **KEEP / GIVE / KILL.** The daily sort, and the kit's practice.
- **Growth engine.** "Exactly how leads come in, get converted, and the product ships." Design Install page.
- **Scorecard.** Essay, not only a SKU. "One page. Seven to ten numbers. One named owner. Green, yellow, or red." "You do not need software." The four pages "at $2–5M" are "Marketing. Sales. Delivery. Finance." https://schemaoperations.com/writing/scorecards/
- **Owner OS.** Seven moves in an essay: foundation, vision, perception, team, the 20%, paying the owner, exiting the job. "A company that cannot run without you is not a company." The 30-day action plan includes "Install three scorecards" and "Run a no-rescue rule." https://schemaoperations.com/writing/owner-os/
- **Levels.** Revenue stages in an essay: "$0–500k: Launch," "$500k–2M: Grow," "$2M–5M: Systematize," "$5M–20M: Elevate," "$20M–100M: Scale." https://schemaoperations.com/writing/levels-to-this-game/
- **The offline test, the 14-day absence, the 10-day disappearance.** Essay tests, not a priced product. Owner OS: "What breaks if I disappear for 14 days?" Levels, at $5–20M: "can this thing move if you disappear for ten days?"

"30-day sprint" is the line under the product name on the Design Install page. The proper name on the site is Design Install. "30 Day Design Sprint" does not appear in the saved pages. It appears in the 22 October X post, quoted below.

### How he describes the work, including AI

He is not selling agents. The 28 September 2026 essay is the place AI shows up. H1: "You don't need AI. You need competent people running a clear system." https://schemaoperations.com/writing/you-dont-need-ai/

> When the system is missing, the tool produces faster versions of work that still need the same review, the same exception handling, and the same yes that already fill the week. The team gets a new input. The founder keeps the bottleneck.

The anecdote: "One owner of a $3.1 million specialty print and fulfillment shop had already tested two AI tools—one for quoting, one for routine customer emails." Non-standard material, a timeline under five days, or a customer with late changes "still landed in his inbox." They "wrote the three job types the team could quote and schedule without him, the specific dollar and timeline thresholds that still required a review, and the person who owned the handoff." "Standard quotes moved without him." The page does not name the shop, does not label the story a composite, and does not give a dollar outcome.

The software essay is the same point without the word AI. H1: "You trained the new hire on the software. You never trained them on the decisions." "The estimator could produce a complete first draft on standard work within 3 days." Custom material, a deadline inside ten days, or a prior scope change still went to the owner. "Tool proficiency and decision ownership are separate." https://schemaoperations.com/writing/you-trained-the-new-hire-on-the-software/

Scorecards essay, the line that matches a person still on the exception: "If every fix is "I'll talk to Martin," the scorecard is working. It just told you the design is still you." And: "If they cannot move the number without your yes, rewrite the rule and give them the right. Discount band. Spend limit. Date change. Hire. Write it. Then stop being the filter." https://schemaoperations.com/writing/scorecards/

### Ideal customer

What the commercial pages say, which is not one band:

- Homepage and about: "under $20M, most of them under $5M." About adds: "Above it, professional management, boards and institutional capital start to force structure whether the founder likes it or not. Below it, the founder is still the operating system."
- Rebuild Kit: "usually $2M and under," "a small team or are about to hire."
- Design Install: "under $5M." The EOS section also says "businesses under $10M" trying to get to $20 million.
- Fractional COO: "$3–5M and up," "team already exists." The not-a-fit line uses "under $3M" for people who should buy the install instead.
- Webinar: "under $10M."
- Essay, not a product page: "Founder-led companies between $2M and $15M are usually built this way." https://schemaoperations.com/writing/lean-teams-survive-and-thrive/ That is the candidate note. It is one sentence about how decisions sit with the owner. It is not the services table.

Industries he names as his own operating history, about page: "real estate sales, real estate development, e-commerce and consulting." Essays mention a print shop, a commercial HVAC company, a professional services firm, a specialty contractor, and real estate math on the scorecard. The services pages do not name dealerships, equipment dealers, or a trade as the ICP. No headcount band is the offer. Headcount is a field on some forms.

**INFERENCE:** the buyer is the founder who can still give every yes. A 50–200 person dealer is inside the "$20M" ceiling only if the revenue happens to match, and nothing on the site speaks to a parts counter, a DMS, or a shop floor. The HVAC story is an essay composite, not a trade offer.

### Proof

No `/case-studies` page. The homepage stats are his, not a client's: "15+ companies owned and operated," "$200M+ in revenue through those companies," "<$20M the companies I work with, most under $5M."

| Where | Named client? | What the page leads with | Caveat on the page |
| --- | --- | --- | --- |
| About, https://schemaoperations.com/about/ | Himself | 15+ companies, $200M+ through them | Those are companies he owned and operated. |
| "You don't need AI" | No. A $3.1M print and fulfillment shop | Two AI tools, then written thresholds | No dollar saved. Not labeled a composite. |
| "You trained the new hire" | No. "One client" and an estimator | First draft in 3 days; drafts to the owner dropped after the line was written | No client name. |
| "Twice the profit, three times the value" | Marcus, Elena, David | $5.2M HVAC, $180,000 unbilled; close rate 28% to 17% at a $7M firm; discount bands at a $3.8M contractor | "Marcus, Elena and David are composites, drawn from more than one company, with names and details changed." |
| Services slider | No | 20–30% of $2M is $400k–$600k | A calculator, not a measured engagement. |

The value essay's multiple is his illustration, not a private-equity offer: a company with "$2 million in profit" that still needs the founder "offers roughly four times profit"; one with "$4 million in profit" that can run without him "offers roughly six times profit." "A buyer pays three times as much for the first" in the deck line, and the body uses those two companies. The pages crawled do not say "private equity," "EBITDA," or "portfolio." There is no PE section in this note because those words are not on the site or in the two posts.

## Sales and marketing

### Positioning

1. Category: "Operating design for founder-led companies that have stopped growing."
2. Enemy: the founder is the system. Also EOS, for the under-$10M reader, on the Design Install page only.
3. Mechanism: design, margin, inputs. Then seats, a scorecard, a growth engine, one meeting.
4. Commercial: three prices, and a sentence that picking the wrong one wastes a month.
5. Proof: his operating history, then essays. Logos are absent.
6. Who it's for, said in the product blocks, not in the hero: under $2M, under $5M, or $3–5M and up.

Lines worth keeping, each from the URL after it:

- "When the founder is the system, growth stops." https://schemaoperations.com/
- "If you are the bottleneck, you are also the lever. You can change a role faster than you can change an industry." Homepage, attributed to the essay. https://schemaoperations.com/
- "The work you're good at and should stop doing is the most addictive work in the company." https://schemaoperations.com/
- "Not one product at three prices." https://schemaoperations.com/services/
- "A file and a walkthrough. No calls. You do the work." https://schemaoperations.com/services/rebuild-kit/
- "Not a template." https://schemaoperations.com/services/design-install/
- "We do not start this from zero." https://schemaoperations.com/services/fractional-coo/
- "You don't need AI. You need competent people running a clear system." https://schemaoperations.com/writing/you-dont-need-ai/
- "You do not need software. You need owners, numbers, and a meeting that does not turn into therapy." https://schemaoperations.com/writing/scorecards/

Voice: second person, short, the founder is the problem and the lever in the same breath. The about page is softer than the services pages. Essays often use a shop story, then a rule.

### Funnel and CTAs

Paths on the pages:

1. "Get in touch" and "Send me one word." DESIGN, MARGIN, or INPUTS. Contact form posts to `/api/contact`. Fields: name, email, company optional, topic (Design, Margin, Inputs, Not sure), "What's going on?", website. "If I'm not the right person, I'll say so." https://schemaoperations.com/contact/
2. Product checkout for the kit and the install ("Get the Rebuild Kit, $397" and "Start the Design Install, $6,000"). Not followed.
3. Fit check before buying. Services, kit, and fractional forms post to `/api/fit-check`. Product choices: Rebuild Kit, Design Install, Fractional COO, Not sure. Required: "What breaks when you step out?" Placeholder: "One sentence is enough." Optional revenue: Under $1M, $1M–$2M, $2M–$5M, $5M–$10M, $10M+. Headcount is on the services form and the fractional form, not on the kit form. Design Install adds "Who on the payroll could own it?" https://schemaoperations.com/services/ and the three product pages.
4. Fractional and Design Install also say "Send SEAT" and "Send DESIGN." The 1 October X post tells people to reply with those words. The site forms are the same words.
5. Webinar. Banner on every saved marketing page: "Live webinar, Nov 15 at 9 AM ET. Stop being the system: a 30-minute working session." Form posts to `/api/webinar`, then "Continue to payment, $99." Fields: name, email, company optional, revenue, "What breaks when you step out?" optional, website. Not submitted. https://schemaoperations.com/webinars/
6. "Read the writing." Footer: "New essays go out on X first." X handle on the site: @Toomey1313. Email: hello@schemaoperations.com.

There is no ebook. The kit is a paid file. The webinar is a paid seat. The essays are public.

**INFERENCE:** the motion is self-serve for the $397 file, a short written fit check or a Stripe checkout for the $6,000 install, and a written "SEAT" note for the retainer. The calendar is not the front door. A founder who wants him on Zoom this week is told the kit is the wrong door.

### Trust

Order on the homepage: webinar bar, H1, the under-$20M sentence, three stats about him, the three problems, how he works, the three prices, three essays, one quote, then the one-word CTA. Prices appear before any client logo. There are no client logos in the saved text.

### Content

Writing index: "Long-form pieces on why founder-led companies stall, and what gets them moving again. Most start as a line in a notebook and go out on X first." "Start here" is the three pillar essays plus a life essay. "All essays" is 20 pieces, dated from 3 November 2025 through 19 October 2026. Topics stay on design, margin, inputs, ownership, and life. They are not a query list. Each essay ends on "Send me one word" and DESIGN, MARGIN, or INPUTS. https://schemaoperations.com/writing/

**INFERENCE:** the essays are the sales pages in a longer voice. A one-person practice can study the habit (one job, one rule, one next step) and cannot copy a 20-essay archive as a launch plan.

## What Wil should steal or adapt

Ranked. Each item maps to the fit call, the credited Job map, the build, or the autonomy ladder. None of them is "sell a kit" or "become the COO."

1. **Fit call: ask what breaks when he steps out, and say if it is the wrong door.** Their sentence is the whole qualifier. Wil can add the job, not a revenue wizard. Optional: roughly how many people touch the job. Their bands run to $10M+ because that is how they choose among three products. His price is undecided, so a band is a fit question, not a price question. "If I'm not the right person, I'll say so" is the line to keep.

2. **Job map: write KEEP, GIVE, and KILL for one function, with a cap and an owner.** GIVE is "A person, a cap, and a picture of done." That is the map's contents: the job, what stays with the owner, what moves, the dollar or time cap, the person, and the weekly number. Their kit delivers this as a file with no call, for $397. His difference is that the map is paid and credited, and he is in the room long enough to use the shop's real screen. Say what the buyer holds at the end. Do not print $397.

3. **Job map, before the build: the lines the tool is not allowed to cross.** The print-shop paragraph is the spec. Three job types the team can finish, the threshold that still needs a person, and who owns the handoff. Wil's version uses PO lines, vendor credits, or the dealer screen he has already seen. The essay's point is the one to keep: the tool inside those lines, the person on the exception. "You don't need AI" is their headline. His headline already says what the owner keeps. Use the essay as the reason the map comes first, not as a slogan to paste over his.

4. **Build: one function, installed on their company, not a template.** "Your seats, your numbers, your goals, your growth engine. Not a template." For him, one job in the system they already run. The Design Install then ends: "Then I leave." His sequence does not end there. The next rung is the ladder. Steal "not a template." Leave "then I leave" as the whole offer.

5. **Ladder: a weekly number with a name, and a no-rescue rule.** Scorecard essay: green, yellow, red, and "You do not get to be the plan." Owner OS: "If they own it, you do not take it back." That is how a rung sticks. The number is credits, hours, or the exception rate he agreed in the map, not "uplift." Their four pages (marketing, sales, delivery, finance) are a company operating system. He needs one page for one job.

6. **Name the next step so the cheap door is obviously the wrong door.** They say the kit is wrong if you want him on Zoom this week, and the install is wrong if the team already exists and you want him every week. Wil can say the fit call is wrong if they want a quote for software, and the Job map is wrong if they will not show the source file. The sentence "pick the wrong one and you waste a month" is the reason to name the sequence out loud. The prices attached to their doors are not his.

7. **One field note, from a job, the way the essays are built.** A shop, the line that was missing, what the person still checks. Not a top-10 list. Their archive is already 20 essays. **INFERENCE:** one note from the repair-shop match will do more for a dealer principal than a notebook archive he has not earned yet.

## What not to copy, and why

- **The $397 Rebuild Kit as a product.** It is a file, no call, for a founder usually under $2M who will do the work. Wil's buyer is a 50–200 person operating company, and the map is credited toward a build. Publishing $397 would describe Toomey's door.
- **The $6,000 Design Install and the $12,000-a-month, six-month seat.** Those buy four half-days, or about a day a week inside the company. Wil is not staffing that seat. His price is undecided. If he publishes a number later, it is his number for a Job map and a build.
- **The $99 webinar as the front door.** A group working session that produces a draft scorecard is a real offer. His front door is a free 30-minute call with one company. A paid public seat is a different motion.
- **The EOS price chart.** "$32k–$48k" in year one is how he makes $6,000 feel small. Wil's buyers are not shopping an EOS implementer unless they say so. Importing the chart imports a category he is not in.
- **The 20–30% leak slider.** It turns a general sentence into $400k–$600k on a $2M company. Wil's proof is a counted result at one shop. A slider with no client will make that result look like a gadget.
- **The fractional COO offer.** "About a day a week," "6-month minimum," "We do not start this from zero." That is the seat he is not taking. The transferable piece is "the team already exists," which for him means the person who does the job still works there.
- **"Then I leave" as the end of the relationship.** Their install is designed to be over in 30 days, with an optional extension and no printed extension price. His ongoing work is a rung at a time. Stopping is allowed. Disappearing after the install is their product, not his.
- **Proof by biography and composites.** "15+ companies," "$200M+," and Marcus, Elena, and David, labeled composites. An owner comparing vendors will ask who the HVAC company was. Wil should not borrow a composite to sound as if he has a library. One named shop, with a caveat, is the stronger page.
- **The stage map from $0 to $100M.** It is an essay. Putting "$20M–100M: Scale" on his site would aim him at a company he does not serve.
- **A missing privacy page.** `/privacy` and `/privacy-policy` 404. He needs his own policy. He should not copy the absence.

## X evidence

Two posts, both @Toomey1313. They are X posts, not website copy.

The 1 October 2026 post is the services page in another place. It says "They are not one product at three prices." Then: "Rebuild Kit — $397," "Usually under $2M," "30 days, one function. Engine, KEEP / GIVE / KILL, owner, scorecard. File and a walkthrough. No call." "Design Install — $6,000 once," "Under $5M," "Four half-days in 30 days." "Fractional COO — $12,000 a month, six months minimum," "$3-5M+," "About a day a week in the company." "Companies leak 20% to 30% of revenue through rework, delays, invisible founder hours, and under billing. On a $2M company that is $400k to $600k a year hiding." Those prices and the $400k–$600k line are on the site and in this post. The post adds the reply codes: "reply DESIGN," "reply SEAT," "DM KIT or DESIGN." https://x.com/Toomey1313/status/2105676513844539593

The 22 October 2026 post uses a name the site does not use.

> EOS will cost you $32k–$48k in the first year alone. The 30 Day Design Sprint will not.
>
> $6,000 covers the growth engine map, scorecards for the departments you leave, the meeting I sit in, and you running it in week 4 of the 30 Day Design Sprint.
>
> Most founders have the numbers living outside their head by day 30.
> If you need more time we can extend. That is separate.
>
> One avoided bad hire or a few points of recovered margin covers it.

https://x.com/Toomey1313/status/2113374841831120950

The $6,000 and the EOS first-year range are also on the Design Install page. The page says "scorecard" singular, "four half-days," and "Extending up to 90 days can be negotiated if needed." The post says "scorecards for the departments you leave," "the meeting I sit in," "you running it in week 4," and "If you need more time we can extend. That is separate." Neither surface prints an extension price. This note does not merge the two names into one SKU. **INFERENCE:** they are the same $6,000, 30-day shape. The deliverable list is not word-for-word, so a quote from the post should stay labeled as the post.

The candidate note "30 Day Design Sprint at $6,000" is this X post. The candidate note "Rebuild Kit $397" is the site and the 1 October post. The candidate note "founder-led $2–15M" is the lean-teams essay, not these posts and not the price table.

## Open questions and contradictions

| Topic | One surface | The other |
| --- | --- | --- |
| Name of the $6,000 offer | Site: "Design Install," also "30-day sprint" on that page | X, 22 October: "30 Day Design Sprint." The words "30 Day Design Sprint" are not in the saved pages. |
| What $6,000 includes | Site: seats, one weekly scorecard, quarterly goals, growth engine, one 90-minute meeting, four half-days, then he leaves | X, 22 October: "growth engine map, scorecards for the departments you leave, the meeting I sit in, and you running it in week 4" |
| Extension | Site: "up to 90 days can be negotiated if needed" | X, 22 October: "If you need more time we can extend. That is separate." No price on either. |
| Who the company is for | Homepage and about: under $20M, most under $5M | Kit usually under $2M. Install under $5M. Fractional $3–5M and up. Webinar under $10M. Essay: "between $2M and $15M." |
| Install length | Services table: "30 days, up to 90 if needed" | Design Install page: 30 days, extension negotiable |
| Fractional floor | Product page: "$3–5M and up" | Same page, not-a-fit: "under $3M" should look at the install. The gap between $2M and $3M is not given its own door. |
| Proof | Homepage stats are companies he operated | Value essay: composites, "names and details changed." AI essay: unnamed shop, not labeled a composite. |

- Which of his three problems is the Job map's first question, design or margin? Design is "who decides." Margin is "keeping enough." Wil's repair-shop proof is money found in PO lines, which is closer to their margin story, while the headline he uses is closer to their design story. The site does not pick one for a dealer.
- Does a public price filter, or does the sentence "this fee comes off the build" do that work? They publish all three prices and still ask for a fit check. His price is open. Their site shows both habits at once: a price on the button, and a form that can talk him out of the cheap door.
- Will he name the next rung after the build? Their install is built to end. His ladder is built to continue. The site has no language for "tool, then headless, then governed, then agent, person on the exception," because he does not sell that. The scorecard line "give them the right, then stop being the filter" is as close as the pages get.
- The webinar date is 15 November 2026. The saved page also says "21 days away." That relative line will rot. Not his problem, except as a reminder not to bake a countdown into a page he will not edit.
