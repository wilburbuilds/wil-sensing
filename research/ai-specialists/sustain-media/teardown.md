# Sustain Media teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no calls booked, no audit requested.

Noah Igler, Sustain Media. The live homepage sells Google growth to home-service companies: Maps, the website, Google Ads, and Local Services Ads, with the client's CRM as the report. It is a marketing retainer. It is not an ops handoff. Wil's buyers are dealerships, equipment dealers, and trades, about 50 to 200 people. He sells a fit call, a paid Job map, a build, and a rung at a time. The only things worth taking from this site are the proof sentence and the scarcity line, and only where they fit that offer.

Every claim below is quoted from a file in `research/ai-specialists/sustain-media/pages/` or from the two Noah Igler posts in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those pages or in those posts.

## Top 5 takeaways

1. **Put the client's own system in the sentence with the dollar.** The Portland block does not say "we generated." It says what "their ServiceTitan shows": 795 jobs and the dollars from Google. That is the shape of Wil's $217K and 11,139 PO lines. Use it on the shop story and as the source line inside the Job map. Leave the ads program. https://www.sustain-media.com/

2. **Say what the number is not, in the same paragraph.** The playbook's fencing story leads with $934,685 and then says it is total company sales, not all of it from the work. The site then prints two plumbing cuts ($751K and $859,816.11), and the X post prints a third ($2.18M). Wil's credits line needs the caveat in the same breath as the dollar. Do not merge their cuts. https://www.sustain-media.com/full-home-service-seo-playbook.html

3. **The fit call looks at the market and can say no. The count belongs in the paid Job map.** The guide says he will pull up the market and say whether it is worth doing. The Cal.com lead-magnet event lists four topics, none of them a revenue wizard. The pages do not sell a "free market audit." His 30 minutes can be that short. The PO lines, the exceptions, and the number that will decide the build belong in the Job map he charges for. https://www.sustain-media.com/full-home-service-seo-playbook.html and https://cal.com/sustainmedia/lead-magnet-consultation

4. **One trade in a metro is their lock. His version is the next similar company.** The guide says they only take one trade in every major metro, so a competitor cannot hire them. That is an ads-agency scarcity line. The part that fits him is the one he already has: one measured job, then the same job at the next similar shop, with the Job map as the check that the data exists. He does not need a territory. https://www.sustain-media.com/full-home-service-seo-playbook.html

5. **Leave the ads month, the published price, and the old ranking guarantee.** The live homepage prices most clients at $3,500 to $10,000 a month for Maps, SEO, ads, and LSA. An older page still live promises top 3 in six months or they work free, and it calls the buyer "your practice." Neither is his offer. The posture worth keeping is month to month, and the buyer keeps the asset. https://www.sustain-media.com/ and https://www.sustain-media.com/home-services-seo.html

## Method and coverage

Hosts touched: `sustain-media.com`, `www.sustain-media.com`, `go.sustain-media.com`, `cal.com`, and one Internet Archive snapshot of the homepage. No sitemap. `robots.txt` is two lines: `User-agent: *` and `Crawl-delay: 10`. WebFetch of `/sitemap.xml`, `/about`, `/contact`, `/blog`, `/services`, `/pricing`, `/case-studies`, and `/careers` returned 404.

The site sits behind SiteGround and Cloudflare. From this network, headless Chrome received HTTP 403 on the homepage and on several HTML paths, and HTTP 202 "Robot Challenge Screen" on others. Those challenge and 403 bodies are saved and are not treated as the site. The readable marketing pages were taken as text extracts after a fetch that could see the live HTML. The privacy policy rendered in Chrome. Cal.com rendered in Chrome. The April homepage is the raw archive file for `20260424051810`, saved because the price and the revenue floor on it are not the live page.

Logs, all under `pages/`:

- `crawl-log-1.tsv`. First Chrome pass on `https://sustain-media.com/`. 403s were not saved. Challenge pages and the privacy policy were.
- `crawl-log-2.tsv`. `https://go.sustain-media.com/twitter`. Chrome saved a 403 body. A separate GET recorded `302` to `https://sustain-media.com/` (`go-twitter-headers.txt`). No audit form.
- `crawl-log-3.tsv` and `crawl-log-4.tsv`, and the current `crawl-log.tsv`. Cal.com event pages for the `sustainmedia` username only. The crawler queued thousands of other `cal.com` URLs from the footer. Those were not fetched. `not-fetched.txt` is that leftover, not a Sustain sitemap.
- `crawl-log.tsv` is the last Cal.com pass. The earlier passes are the numbered logs.

Saved on purpose, and used below:

- Live homepage, `www-home.txt`. https://www.sustain-media.com/
- The 2026 guide, `full-home-service-seo-playbook.txt`. https://www.sustain-media.com/full-home-service-seo-playbook.html
- Older sales page still served, `home-services-seo.txt`. https://www.sustain-media.com/home-services-seo.html
- Privacy policy, Chrome. https://www.sustain-media.com/privacy-policy
- April 24, 2026 homepage snapshot. https://web.archive.org/web/20260424051810id_/https://sustain-media.com/
- Eight Cal.com surfaces under https://cal.com/sustainmedia

Not crawled on purpose: Wistia (the homepage says to watch the video there; the extract has no Wistia URL), YouTube, LinkedIn, X beyond the two posts already saved, tag or asset files, and the rest of cal.com. No booking slot was selected.

The homepage extract repeats each case study. That is the carousel, printed twice, with slightly different tile lines. Both wordings are quoted from the file. They are not two clients.

The guide says, in the AI-search section: "ignore anything older than this doc, including our own old advice." The April snapshot and `home-services-seo.html` are older surfaces that are still public. They are reported as contradictions. They are not folded into the current offer.

## Product

### What they sell

Live homepage, https://www.sustain-media.com/ :

H1: "Grow Your Revenue From Google With Our Multi-Location System." Eyebrow: "For $3M+ Home Service Companies."

> We compare your CRM job data with where you rank on Google Maps. Then we improve your existing profiles, identify opportunities for additional locations, and build the website and ads strategy to support them.

Three chips under the hero: "Month to month", "You own all accounts", "ROI tracked monthly".

The section "The Google Growth Strategy That's Made Our Clients $40M" is five steps, same page:

| Step | Name | What the page says |
| --- | --- | --- |
| 01 | Market & Job Data | Compare CRM job data with Google Maps rankings, then review competitors. |
| 02 | Google Maps & Reviews | Improve existing profiles, a review process, and chances for more locations. |
| 03 | Website & SEO | Service and location pages, technical cleanup, listings, links. |
| 04 | Google Ads & LSA | Ads and Local Services Ads "around the jobs you want," budgets matched to the service area and "team capacity." |
| 05 | Revenue & Reporting | Connect the CRM. Monthly reporting "ties marketing to booked jobs and revenue." |

Named systems on that step: "ServiceTitan, Housecall Pro, Jobber, or GoHighLevel."

There is no named framework, no trademark, and no SKU list. The work is described as a monthly marketing engagement, not a build with an artifact the buyer keeps.

The guide, https://www.sustain-media.com/full-home-service-seo-playbook.html , is a second packaging of the same practice. Title on the page: "The Home Service SEO Guide." Deck: "2026 Edition · Free guide." It calls itself "the system we install for clients" and "companion doc to the video walkthrough." The commercial inserts sit in the middle and at the end. The rest is the SEO method (profile, reviews, site, links, AI search, tracking, multi-location). This teardown does not catalog those steps. The lines that define the offer are quoted below.

The older page, https://www.sustain-media.com/home-services-seo.html , is still served. H1: "More High-Paying Clients For Your Home Service Business." Its process is an eight-step SEO list (website audit through review management). It does not mention ads management, LSA, or a CRM report. It reads as an earlier sales page, not as a second product with its own price.

### Price

Published on the live homepage FAQ, "What does it cost to work with you?":

> Most clients are between $3,500 and $10,000 per month depending on market, competition, and goals. We’ll review your situation on a call and recommend the right plan based on where you are and where you want to go.

No setup fee, no per-location adder, and no statement of what sits at $3,500 versus $10,000. The FAQ says the plan is chosen on a call.

That is not the only dollar figure that looks like a price. They are not the retainer:

- The guide's "$500–$1,500/mo" is link building. The line under that figure: "that's what link building takes in competitive markets. The $200 a month plan is why the last agency didn't work."
- The guide's "$25 per review" is a tech and CSR incentive the shop pays. "One shop went from 5 reviews a month to 35 on that incentive alone."
- The X post's "$36,000" is what one client paid them. It is not the rate card. Quoted under X evidence. The post does not say that $36,000 is the ad spend behind the 5.6x.

The April 24, 2026 homepage, archive file, FAQ on cost:

> Most clients invest between $2,500 and $5,000 per month depending on market, competition, and goals.

Same sentence shape, different band. The live page is the one to quote as the current price. The April band is evidence the number moved, not a second current offer.

Cal.com event pages have no price.

### Guarantees, and where they disagree

Live homepage. No ranking promise. Contract FAQ: "No. We work month to month. If we're not delivering, you can walk away." "What if it doesn't work? Then you leave." Founder block: "If we're not delivering, you can leave." Ownership: "Yes, 100%. Everything we build or optimize belongs to you." The hero chip is "You own all accounts."

Timeline, same FAQ: "anyone quoting a flat number without looking at those is guessing." Then a "typical arc" of foundation in month one, visibility in months two and three, "compounding by months six to twelve." "On a call, Noah will look at your market and give you a straight read on your timeline."

The guide refuses a short promise and states a different window for a new pin: "The honest timeline: 90 to 180 days to hold top three in a competitive metro." And: "Anyone promising the Map Pack in 30 days is lying to you."

The older page still says this, https://www.sustain-media.com/home-services-seo.html :

> Your practice will rank in the top 3 results of Google search within 6 months OR we work for free until you rank.

The next FAQ on that page says "our guarantee lies in the 6-9 month range" and "our clients always start seeing leads after month 1." The word "practice" and a later "patients" question sit on a page aimed at landscapers and plumbers. **INFERENCE:** that page was not rewritten when the homepage was. The guide's own line about ignoring "our own old advice" describes it. Do not quote the guarantee as the current offer. It is still public.

The April snapshot also offered "Some clients choose a quarterly commitment for a discounted rate, but that's optional." The live homepage FAQ does not say that.

### How a buyer starts, and what they keep

Homepage: "Set a time to speak with the founder below." "What do you need from me to get started?" asks for Google Business Profile access, services, service area, and job photos. "We handle execution."

The guide's pitch, twice:

> This is exactly what Sustain Media does for home service companies doing over $2M a year.
>
> And we only take on one trade in every major metro, so if we rank you, your competitors can't hire us.
>
> If you want our help running this full system for you, and booking you more jobs from search results, book a consultation at the first link in the description below.
>
> On that call I'll pull up your market and tell you straight whether it's worth doing.

The closer adds: "We take seven-figure shops into eight figures on this playbook."

No page says the buyer keeps a written map if they do not proceed. The homepage ownership lines are about the website, the Google profile, content, and citations. **INFERENCE:** discovery here is a sales call, not an artifact. That is the opposite of a paid Job map.

### Who it is for, in their words

Three floors are on the pages. They are not the same sentence.

| Surface | The words | URL |
| --- | --- | --- |
| Live homepage eyebrow | "For $3M+ Home Service Companies" | https://www.sustain-media.com/ |
| Live homepage FAQ | "established companies doing $3M+ in revenue" | same |
| Guide | "home service companies doing over $2M a year" and "seven-figure shops into eight figures" | https://www.sustain-media.com/full-home-service-seo-playbook.html |
| April 24 homepage | "established companies doing $1.5M+ in revenue" | archive snapshot |
| Older SEO page | No revenue floor. Trades named: "landscaper, plumber, HVAC, cleaner, handyman, or similar." | https://www.sustain-media.com/home-services-seo.html |
| Cal.com events | "dozens of businesses" in "over 10+ local industries." No revenue floor. | https://cal.com/sustainmedia/free-consultation |

Trades on the live FAQ: "plumbers, HVAC, roofers, electricians, remodelers, landscapers, pest control, and similar trades."

The candidate note was "$5M+," "1 company per trade per metro," and "free market audit." The pages do not use those phrases.

- The revenue floors on the pages are $3M+ (homepage), over $2M (guide), and $1.5M+ (April). None of them says $5M+.
- The exclusivity line is "one trade in every major metro," and a different sentence, "One brand per trade in each metro," which is instructions for the client's own Google profiles ("The legitimate version of the game. The fake-listing guys get burned every year"). Those are not the same claim. The first is who Sustain will take. The second is how a shop should name a new location.
- "Free market audit" does not appear. The nearest lines are the free consultation on the guide and on Cal.com, and "On that call I'll pull up your market."

The X posts do not say $5M+, do not say one company per trade, and do not say free market audit. One post calls the example client an "8-figure plumbing and HVAC company." That is a description of that client, not the floor on the homepage.

A named size that is not a floor: "A 20-tech shop serving the entire Atlanta metro." The page does not convert techs into a headcount. **INFERENCE:** that shop can sit inside a 50 to 200 person company, and it can sit under it. The page does not say which.

### Proof, and the shape of a case

Homepage stat that is not a case: "We've Generated $40M+ in Jobs For Our Clients." "Our clients generate an average of 34% of their revenue from Google." No window, no client list, no source system.

Founder line, same page: "I started Sustain Media four years ago. Since then, we've helped over 120 local service businesses."

The cases that carry a number:

| Where | Who is named | What it leads with | Source of the number, as written | Caveat on the page |
| --- | --- | --- | --- | --- |
| Homepage, Portland plumbing | Will Dahlstrom, Co-Owner. City and trade, not the company name. | "$751K in Sales from Google in 9 Months" | "their ServiceTitan shows 795 new customer jobs attributed directly back to Google search, Maps, and ads." Rank "8.69 → 1.53" for "sewer line repair." | The quote is about organic being "our highest returning new customer channel," while the tile mixes search, Maps, and ads. A second tile on the same page says "Top 3 across most of southwest Portland." |
| Homepage, Atlanta electrical | Fred McGill, Owner. "20-tech" and "20+ Tech Electrical Shop." | "+15-50% Revenue Growth Every Single Month" | Not a CRM extract. "phone calls grew 60-70% year over year." "Zero jobs in North Atlanta zips." | The quote says "at least 15-20%," not 15-50%. The 40-50% clause is on the April snapshot, not in the live extract. |
| Homepage, Toledo property maintenance | Travis Sanders, Co-Owner | "+3x in Calls & Added an Entire Crew From SEO Leads Alone" | "#1 on Google for 'lawn care toledo oh' and 'landscaping toledo oh'." "5-figures in monthly revenue added." One extra truck. | No call count next to the "3x." The April snapshot said "#2" for the same two phrases. |
| Guide, unnamed plumbing | No name | Rank 8.69 to 1.53 for "sewer line repair near me," "133 pins," "9 mi radius" | "$859,816.11" then "just two Google Business Profiles over the last 12 months, pulled straight from their ServiceTitan." | "The map flip itself took under nine months." This is not the homepage's 9-month, all-of-Google $751K. |
| Guide, unnamed fencing company | No name | "$934,685" and 140 jobs | "CRM revenue dashboard." Average ticket "$6,676" in one line and "$6,676.32" in the caption. | "That's total growth, not all of it from SEO, and three months is faster than typical." |
| Older SEO page | Unnamed landscaper | 35 residential jobs a month, 100-120 calls, after 8 months | Not stated. "multiple 5-figures to their MRR." | Page stats above it are a different set: "43+ Happy Businesses," "$4.72M in Added Revenue," "5.3x Average ROI," "+2.6K+ Top 3 Google Rankings." |
| April 24 homepage | The Groundsmen, Joshua Hallenbeck; Bray Electrical, Fred McGill; D&T, Travis Sanders | 2025 totals: "46+ Happy Clients," "$6.4M in Added Revenue," "5.3x Average ROI," "60,296 Calls for Clients" | The Bray tile says "ranking top 4 average at 9-mile radius." The live tile says top 3. | Not the live page. Joshua is still named on the live testimonial strip, with "Click a client to load their interview" and no quote in the extract. |

The sentence to study is the Portland one, because the dollar and the count are attributed to the client's system:

> Nine months after we took over, their ServiceTitan shows 795 new customer jobs attributed directly back to Google search, Maps, and ads.

The sentence to study second is the fencing caveat:

> $934,685 in total company sales, 140 jobs won, $6,676 average ticket in the three months since we started working together. That's total growth, not all of it from SEO, and three months is faster than typical.

The homepage reporting FAQ is the general form of the same habit: the monthly report "shows revenue attributed to the work, pulled straight from your system."

**INFERENCE:** the 8.69 to 1.53 sewer-line pair on the homepage and in the guide is one scan told two ways. The pages never say that, and the dollars do not match, so they stay in separate rows. Will Dahlstrom's name stays on the homepage row only.

### AI, as the site describes it

Homepage FAQ "Do you show up in ChatGPT and AI search?":

> Yes. AI search pulls from the same signals that drive your map rankings: reviews, real content, and a strong Google Business Profile. The same work compounds across both, so you're not paying for a separate AI service. On a call, Noah runs the AI search check for your service and market live.

The guide's content method is interviews and local questions, not an agent that reads the phone system. "Interview the owner and the techs." Later: "Reddit and local questions, owner and tech interviews, customer interviews, real job information." An example price on a page: "What does a water heater cost in Austin? Usually $1,200 to $2,500 installed." That example is not tied to a client.

The agent that reads customer calls is not on these pages. It is in the X post, quoted below. The homepage CRM list adds GoHighLevel and is about reporting. The X post's list is ServiceTitan, Jobber, and Housecall Pro, and it is about what to write.

## Sales and marketing

### Positioning

1. Outcome: "Grow Your Revenue From Google."
2. Who: "$3M+ Home Service Companies," with the other floors noted above.
3. Mechanism: CRM jobs compared with map rank, then profiles, pages, ads, and a monthly revenue report.
4. Commercial: month to month, you own the accounts, $3,500 to $10,000.
5. Enemy, founder block: "no contracts, no jargony reports, and no holding your assets hostage."
6. Proof: $40M+ and 34%, then three cases, then named owners.
7. Risk: "If we're not delivering, you can leave." Not "we work free until you rank," on this page.

Lines worth keeping, each from the live homepage unless noted:

- "You own all accounts."
- "pulled straight from your system."
- "anyone quoting a flat number without looking at those is guessing."
- "You stay because it's working."
- "We'd rather be honest than keep a client we can't help."
- "you're not paying for a separate AI service."
- Guide: "On that call I'll pull up your market and tell you straight whether it's worth doing."
- Guide: "A phone number becomes a dollar amount."

Voice on the homepage is short, second person, and owner-facing. The scoreboard in Fred McGill's line is the phone, not a rank report: "You guys are making the phone ring more, and that's the true scoreboard." The guide is longer and teaches. It still breaks for the pitch in plain language. The older page does not. "Your practice" and "patients" are a different voice left on the site.

### Funnel and CTAs

What a visitor can actually do, from the pages that rendered:

1. Homepage. "Set a time to speak with the founder below." The extract has no form fields. Chrome could not read the embed. The April snapshot preconnects to `https://app.cal.com` and says "Free consultation" and "Schedule My Free Consultation." **INFERENCE:** the live page still books a Cal.com event, because his public Cal.com profile is a set of 30-minute Google Meet links and the April homepage already loaded Cal.com. The live embed URL was not in the extract. Do not treat that as confirmed for today's homepage.
2. Guide. "Book a free consultation" and "BOOK MY FREE CONSULTATION." "book a consultation at the first link in the description below." No href survived in the extract. **INFERENCE:** "description below" is video-description language pasted onto the page. The destination was not saved.
3. Older page. "Set a time to speak with the founder below." No fields in the extract.
4. Cal.com, public, not submitted. Profile line: "We help businesses appear at the top of Google search results!" https://cal.com/sustainmedia

Events on that profile, all 30 minutes:

| Event | What the page asks or says | URL |
| --- | --- | --- |
| Free Google Consultation | For: "more phone calls and inbound leads." Not for: businesses that "don't want more high-quality leads and aren't actively looking to grow." "over 10+ local industries." | https://cal.com/sustainmedia/free-consultation |
| Youtube - Free Google Consultation | Same for / not-for block. | https://cal.com/sustainmedia/youtube-free-google-consultation |
| Twitter - Free Google Consultation | "This meeting is for businesses looking to get more phone calls and inbound leads from prospects who need your services." | https://cal.com/sustainmedia/twitter-free-google-consultation |
| More Calls From Google w/ Noah | Four bullets, quoted below. | https://cal.com/sustainmedia/lead-magnet-consultation |
| More Phone Calls From Google | The same four bullets. | https://cal.com/sustainmedia/free-google-strategy-consultation |
| Email Booking | Title only. Cal Video, not Google Meet. | https://cal.com/sustainmedia/email-booking |
| SDR Phone Disco | Title only. No description. | https://cal.com/sustainmedia/sdr-phone-disco |

The four bullets on the lead-magnet event:

> What we'll discuss on this meeting:
> - How your business is currently finding jobs.
> - How many jobs you'd LIKE to be getting.
> - How to get MORE phone calls with your Google profile.
> - If we are a good fit to work together

No revenue band, no headcount, no budget field. The Chrome extract found no form. The page is a calendar.

`go.sustain-media.com/twitter` did not render an audit. Curl received `302` to `https://sustain-media.com/`. Chrome saved "403 - Forbidden." There is a Cal.com event whose title is "Twitter - Free Google Consultation." **INFERENCE:** the short link and that event are the Twitter path to a call. The pages do not say the call is a market audit.

"SDR Phone Disco" is a title with no public pitch. **INFERENCE:** it is an internal slot. The page does not say who is invited.

### Lead magnet

The guide is the magnet. "2026 Edition · Free guide." It gives away the system, including LLM prompts, and inserts the consultation twice. There is no email gate in the extract. The homepage does not mention the guide.

### Trust and follow-up

Order on the homepage: who it's for, the H1, three commercial chips, $40M+ and 34%, three cases with names, a testimonial strip, the five steps, "set a time," the founder, then the FAQ with price near the middle of the questions.

**INFERENCE:** they are willing to put a dollar and a client name above the mechanism. That works because the dollar is tied to a system the owner already has. A one-person practice can copy that order with one shop story. It cannot copy $40M+.

Follow-up, as written: "regular check-ins," and they will say when they are not the right fit. Privacy policy, https://www.sustain-media.com/privacy-policy , effective September 15, 2026, is mostly about job applicants, Google Workspace, and "Meta's Facebook and Instagram Lead Ads." Contact for a privacy request: `team@sustain-media.com`. It does not describe the consultation or the CRM connection.

No contract term is printed beyond month to month. The older page says you can walk after the first month if you are not "blown away." The live page does not use that word.

## What Wil should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder. None of them is "start an ads agency."

1. **Job map and the shop story. Name the system the number came from.** "their ServiceTitan shows 795 new customer jobs" is the line. His version is already better specified if he writes it the same way: the DMS, or the PO file, showed $217K across 11,139 lines. The homepage step "Market & Job Data" is their discovery. His is a paid map. The transferable test is the same one this site uses without naming it: a workflow owner, a system that already holds the jobs, and a dollar that system can print. https://www.sustain-media.com/

2. **Job map. Write the exclusion in the paragraph.** The fencing lines are the model: the number, the window, then "not all of it from SEO," then "three months is faster than typical." His paragraph should say what "missed vendor credits" includes, what it does not, and that a person still decides the exception. Copying $934,685 or the 15-50% headline without the quote underneath is how their own pages get fuzzy. https://www.sustain-media.com/full-home-service-seo-playbook.html

3. **Fit call. Four questions and permission to say no.** The Cal.com bullets collapse to: how the work comes in now, what "enough" would look like, and whether this is a fit. The guide adds "I'll pull up your market and tell you straight whether it's worth doing." For him, the market look is the job, not the map pack: what the person retypes, where the file lives, whether a build is even the right next step. No revenue dropdown. His price is undecided, so he should not borrow $3,500 to $10,000 as a stand-in. https://cal.com/sustainmedia/lead-magnet-consultation

4. **After one measured job, the next similar company. Not a metro lock.** "we only take on one trade in every major metro, so if we rank you, your competitors can't hire us" is scarcity for an agency that would otherwise serve both plumbers in town. The Job-map version: the vendor-credit match is the offer for the next repair shop or dealer, and the map is the step that checks the export exists. He can say he would rather go deep on one job than sell the same ads to every trade. He should not promise a territory. https://www.sustain-media.com/full-home-service-seo-playbook.html

5. **Autonomy ladder. An agent can read the system they already run. A person keeps the decision.** That sentence is the X post, not the homepage, so it is quoted in full under X evidence. The site's cousin is narrower: reporting "pulled straight from your system," and AI search as the same work, "not a separate AI service." For the ladder, the useful picture is a tool that reads the DMS or the PO lines and a person who still approves the exception. It is not a content studio that turns calls into blog posts and YouTube. https://www.sustain-media.com/ and the post https://x.com/noahiglerSEO/status/2114034442574467582

6. **Ongoing rung. Month to month, and they keep the asset.** "You own all accounts" and "If we're not delivering, you can leave" is the right posture for an owner who will not sign a year. On his ladder the thing they can leave is the next rung, not a pod and not an ad account. "You own everything we create" becomes "you own the workflow, and a person still approves the exception." https://www.sustain-media.com/

7. **Build. One job, with the capacity line translated.** Their ads step says budgets match "team capacity" and "the jobs you want." The ops translation: the build is one recurring job the team is already doing, not every job in the building. Do not pick up Google Ads, LSA, or a review-incentive program as the build. https://www.sustain-media.com/

## What not to copy, and why

- **The retainer itself.** Maps, SEO, Google Ads, and LSA, priced at $3,500 to $10,000 a month, are a marketing agency. Wil sells the handoff of a job inside a company that already has customers. Publishing their band would anchor him to a delivery model he does not staff, and it would describe the wrong work.
- **The $36,000 and the 5.6x, as if they were one ratio.** The post separates "They paid us $36,000" from "$1.26M from Google Ads at 5.6x ROAS." It never says the fee is the spend. A reader who divides $2.18M by $36,000 invents a return the post did not claim. Details under X evidence.
- **The top-3-or-we-work-free guarantee.** It is on the older page only, next to "your practice" and "patients," and the guide calls a 30-day Map Pack promise a lie. A guarantee he cannot score becomes the first objection. The live page's version is weaker and cleaner: month to month, you can leave.
- **Three revenue floors and three plumbing totals treated as one story.** $1.5M+, over $2M, and $3M+. $751K in nine months from all of Google, $859,816.11 in twelve months from two profiles, $2.18M in under six months on X. Plus homepage $40M+ and 34% with no source, April's $6.4M and 60,296 calls, and the older page's $4.72M and 43+ businesses. Quoting any two of those in one sentence is how a small firm gets caught.
- **The 15-50% headline without the quote.** The live quote says "at least 15-20%." The headline says 15-50%. The April page had the 40-50% months in the quote. The live extract does not. Do not smooth that over.
- **Exclusivity as a contract.** "your competitors can't hire us" only makes sense if the work is rank in a shared map pack. An ops job inside one dealer does not require locking the metro.
- **The Cal.com industry line.** "over 10+ local industries" fights the homepage's trade list. His page should name the shops he has actually worked.
- **"SDR Phone Disco" as a public label.** The event has no description. A one-person practice does not need a second calendar that sounds like a call center.
- **The $25 review bounty and the $500 to $1,500 link budget.** Those are tactics inside an SEO system. They are not a Job map.
- **Giving away the whole system as the magnet, unless he wants to teach it.** The guide is a staffed content piece: ten sections, prompts, a video. One field note from a real job fits him. A playbook that teaches a dealer how to do his job instead does not.
- **Industry language that belongs to a different buyer.** "Your practice" and "patients" on a trades page. He should not inherit a template voice.

## Private equity

**Noted for reference, NOT our strategy for now.**

The site does not sell to private equity. One sentence in the guide, under "Map the demand from your own job data," uses a fund as a foil:

> Big private equity buyers pay six figures for exactly this analysis. Your CRM gives it to you free.

The analysis in that section is closed jobs by zip, for deciding where a new Google pin goes. It is not a portfolio diagnostic, and it is not Wil's. The only adjacent instinct, already used above, is that the owner's own export is the analysis. That belongs in the Job map. It is not a reason to add a fund motion.

The two saved X posts do not mention private equity.

## X evidence

Both posts are Noah Igler, `@noahiglerSEO`. They are posts, not website copy. The site does not contain either one.

### The $2.18M post

https://x.com/noahiglerSEO/status/2113230391465111597 , 22 October 2026. The saved text:

> This 8-figure plumbing and HVAC company sold $2.18M in jobs from Google in under 6 months.
>
> They paid us $36,000.
>
> That's $1.26M from Google Ads at 5.6x ROAS and $918K from two Google Business Profiles.
>
> Here's exactly what we changed:

The t.co link on that line resolves to the post's photo, not to a page on sustain-media.com. There is no "what we changed" article in the pages saved. The photo was not fetched. Do not describe it.

What the post adds that the site does not: a fee paid to Sustain ($36,000), a ROAS (5.6x) on the ads portion, an "8-figure" label, a window of under six months, and a split between ads and two Google profiles. The post does not name ServiceTitan, does not name the owner, and does not name the city.

What the site has instead, for a plumbing result: Will Dahlstrom in Portland, $751K and 795 ServiceTitan jobs in nine months from "Google search, Maps, and ads," and rank 8.69 to 1.53. The guide, unnamed, $859,816.11 from two profiles over twelve months, "pulled straight from their ServiceTitan," and the same rank pair for "sewer line repair near me."

$1.26M and $918K are the post's own split of the $2.18M. Adding them gives $2.178M, which the post prints as $2.18M. That is arithmetic on the post, not a third source. $918K from two profiles is not the guide's $859,816.11, and neither is the homepage's $751K. The windows differ (under six months, twelve months, nine months). The mix differs (ads plus profiles, profiles only, search plus Maps plus ads). They are not merged here.

The post does not say the $36,000 is the ad budget. The 5.6x is attached to the $1.26M ads line. **INFERENCE:** a reader who treats $36,000 as the spend behind $2.18M will overstate the return. The post does not do that. Wil should not do it either.

### The call-reading agent

https://x.com/noahiglerSEO/status/2114034442574467582 , 24 October 2026:

> We built an AI agent that reads a home service company's customer calls in ServiceTitan, Jobber, and Housecall Pro.
>
> It pulls out the questions, objections, and prices homeowners bring up, and that's what we write about.
>
> Everyone publishes "5 heating tips for winter." Those posts rank for nothing, and AI search has no reason to quote them. ChatGPT and Google's AI Mode want information only you have, and they want prices.
>
> So the content we write for home service companies is built on three things:
>
> The calls: real questions from real customers in that market, in their words
>
> A quick quarterly interview with someone at the company about what they're seeing and what customers keep asking (we're starting these in the next few months)
>
> Price ranges labeled as estimates, with the monthly payment, so AI search has a number to quote
>
> When a topic is big enough, we film the answer, post it on YouTube and embed the video in the blog post. The transcript becomes the first draft. Our bet is that people who play the video on your site start seeing your other videos on YouTube.
>
> These pages also pre-qualify callers. A homeowner who has already seen your price range calls ready to talk real numbers.

The site's homepage connects those CRMs, plus GoHighLevel, so a report can show "revenue attributed to the work, pulled straight from your system." It does not say an agent reads the calls. The guide's content inputs are owner, tech, and customer interviews, forums, and local questions. The quarterly interview in the post is future tense: "we're starting these in the next few months." **INFERENCE:** the agent is a content workflow inside the marketing retainer, posted on X before the site describes it. It is not a separate ops product, and the pages do not price it.

The part that maps to the ladder is the first two sentences: the agent reads a system the company already runs, and a person still decides what gets published and which price is an estimate. The blog, the YouTube bet, and the pre-qualification of callers are the agency's use. They are not the steal.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| Revenue floor | Homepage: "$3M+" | Guide: "over $2M a year." April 24: "$1.5M+." Older SEO page: no floor. No page says "$5M+." |
| Exclusivity | Guide: "one trade in every major metro, so if we rank you, your competitors can't hire us." | A second guide line, "One brand per trade in each metro," is about the client's profiles, not Sustain's client list. The homepage does not say either. |
| Free audit | Not a phrase on the pages or in the two posts. | The guide offers a free consultation and "I'll pull up your market." Cal.com titles the Twitter event "Twitter - Free Google Consultation." |
| Plumbing dollars | Homepage: $751K, 795 jobs, 9 months, search plus Maps plus ads, Will Dahlstrom, Portland. | Guide: $859,816.11, two profiles, 12 months, ServiceTitan, no name. X: $2.18M, under 6 months, $1.26M ads at 5.6x and $918K from two profiles, "8-figure," no name, no city, no ServiceTitan. |
| Same rank, maybe same scan | Homepage and guide both use 8.69 to 1.53 on sewer line repair. | The dollars and the windows do not match. The pages do not say it is one client. |
| Atlanta band | Live headline: "15-50%." Live quote: "at least 15-20%." | April quote includes "A couple months we hit 40-50%." Live tile: "top 3 at a 9-mile radius." April: "ranking top 4 average at 9-mile radius." |
| Toledo rank | Live: "#1 on Google for 'lawn care toledo oh' and 'landscaping toledo oh'." | April: "#2" for those two phrases. |
| Agency totals | Live: "$40M+" and "34%" and "over 120" businesses, four years. | April: "$6.4M," "60,296" calls, "46+" clients, still "four years" and "over 120." Older page: "$4.72M," "43+," "5.3x," "two years ago," "over forty businesses," "from California." |
| Guarantee | Live: month to month, you can leave. Guide: a 30-day Map Pack promise "is lying," and 90 to 180 days for a new pin. | Older page: top 3 in 6 months or work free, and also "6-9 month range." |
| Price | Live: "$3,500 and $10,000 per month." | April: "$2,500 and $5,000 per month," plus an optional quarterly discount the live FAQ does not mention. |
| Who the calendar is for | Homepage: home-service trades, $3M+. | Cal.com: "over 10+ local industries," and a not-for line that only excludes people who do not want leads. |
| CRM role | Homepage: ServiceTitan, Housecall Pro, Jobber, GoHighLevel, for revenue reporting. | X: ServiceTitan, Jobber, and Housecall Pro, so an agent can read calls and they can write pages. No GoHighLevel. |
| Interviews | Guide: interview the owner and the techs, and "customer interviews," as a current method. | X: the quarterly interview is "starting these in the next few months." |
| Founder bio | Live and April: four years, 120 businesses, no state in the founder paragraph. | Older page: "from California," "Two years ago," "over forty businesses," "the best local SEO company for any local business." |

Open, because the pages do not settle them:

- Will the Portland shop let anyone use Will Dahlstrom's name the way the homepage does? The guide and the X post both went anonymous for the larger plumbing figures. His shop story gets weaker if it has to become "a local shop," and stronger if the owner will say the number came out of their system. That is a permission question.
- Which of their plumbing figures, if any, is the same company as the X post? The rank pair suggests the homepage and the guide share a scan. The X post shares "two Google Business Profiles" with the guide and shares plumbing and HVAC with nobody on the site by name. Treating them as one client would mix $751K, $859,816.11, and $2.18M.
- Does the live homepage still embed Cal.com? April did. The live extract only says "Set a time to speak with the founder below." Chrome was blocked before the embed could be read.
- Is the $3,500 to $10,000 band the whole relationship, or ads media on top? The page does not say. The X post's $36,000 is a fee for one client over an unstated number of months inside "under 6 months." Dividing it into a monthly rate would invent a price.
- The guide says to ignore older advice, and the older page is still indexed, including a free-until-you-rank promise the homepage does not make. Anyone who lands there first will think that is the offer. His own site should not keep two prices and two guarantees live.
- Geography. Nothing here is Idaho or eastern Washington. **INFERENCE:** his pages still need those place names, because this crawl only shows a national trades agency that names the client's city inside the case, not the agency's.
- Where the ladder stops. Their agent reads calls so a person can write. It does not book the job or change the price. Saying "a person keeps the decision" will matter more to an owner than any claim about AI search.
