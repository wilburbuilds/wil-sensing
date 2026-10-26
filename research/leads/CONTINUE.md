# Continue: Wil Sensing leads, batch 2

Paste the prompt at the bottom into a fresh session. Do not redo the queries marked exhausted. Do not re-add anyone in the dedupe list.

## Lead definition

A lead is a US business that, on a page opened in this session:

1. Shows heavy manual work. Examples that counted: a public posting for admin, dispatch, scheduling, billing, CSR, office manager, AP/AR, or coordinator work; an owner describing that work on the company site; or an X post, supplied in batch 1, whose business was then confirmed on the web.
2. Has a decision-maker who can be named from a public page: owner, founder, president, CEO, GM, or ops lead. A surname with no given name, or a 1995 buyer with no current title, can sit at fit 3. Do not guess a name from a handle or an email local-part.
3. Can plausibly pay for a paid Job map. Established local and regional shops counted. Enterprise, private-equity rollups, national chains, and Salesforce-heavy shops did not.
4. Has at least two jobs that can be written as: improve [measure] from [baseline] to [target] by [date]. Baseline and target stay TBD until the business provides them.

Date seen on every page in batch 1: 2026-10-26. X quotes were taken from the supplied X batch compiled 2026-10-25. x.com was not opened.

## Scoring

- **5.** Recent specific manual signal, named owner or operator, established shop, at least two measurable jobs, no enterprise or Salesforce identity on the pages opened.
- **4.** Same bar, with a softer or older signal, or a shop that already runs ServiceTitan, Housecall Pro, SimplePractice, or similar while a person still runs the board or the books.
- **3.** Included, with a thin spot: expired or undated listing, hiring signal only in the X batch, current title not stated, very small scale, or a service-advisor workflow rather than a back-office seat.
- **2 or below.** Not included. Past-tense vendor case studies, anonymous Upwork clients, competitors, PE buyers, and shops whose owner page did not open.

## Sources and queries

### Web, this batch

Subagents ran the queries below on 2026-10-26. None of the web queries are exhausted. Later result pages were not opened. Direct fetch used Python urllib with a browser user agent. No login. No scraper aimed at a terms-of-service ban. BBB, Indeed, Glassdoor, and some LinkedIn URLs returned 403 or 401 and were dropped unless another page carried the same fact.

Home services, all partial:

- `"hiring" dispatcher OR "customer service representative" (plumbing OR HVAC OR electrical) (owner OR "family-owned")`
- `"office manager" OR dispatcher (ServiceTitan OR "Housecall Pro" OR Jobber) (owner OR president)`
- `"now hiring" ("service dispatcher" OR "call taker") (plumbing OR HVAC) owner`

Clinics, all partial:

- `veterinary OR dental "we are hiring" "office manager" "about" owner`
- `"patient care coordinator" OR "front desk" (owner OR founder) (dental OR chiropractic OR veterinary OR audiology OR optometry)`
- `medspa OR "functional medicine" careers "founder" scheduling OR coordinator`

Job boards, all partial:

- Upwork public pages for Zapier, Make, QuickBooks automation, and spreadsheet cleanup. The pages that opened were anonymous clients or closed jobs. Treated as exhausted for anonymous posts: do not mine Upwork again unless the client name is already known.
- Indeed, SimplyHired, Paylocity, CareerPlug, Gusto, and company career pages for dispatcher, office manager, AR, and billing coordinator, combined with owner or family-owned language.
- One university board (Cal State East Bay) and one library-school board (Simmons) carried employer-named posts. Those two posts were opened. The boards themselves are not exhausted.

Complaints and news, all partial:

- Reddit searches for spreadsheet, manual invoicing, and dispatch complaints. Direct fetches returned 403 or timed out. No named company came from a Reddit page that opened. Do not treat snippets as leads.
- Vendor case-study searches (ServiceTitan, BILL, Praxedo, Granum, Sage). The stories that opened described a process that had already been replaced. Not leads.

Ops businesses, all partial:

- `"hiring" dispatcher (towing OR moving OR "property management" OR "equipment rental") (owner OR family)`
- `"accounts payable" OR "accounts receivable" hiring (wholesale OR distributor) owner "about us"`
- `"hiring" ("project coordinator" OR "office manager") (mechanical OR electrical OR concrete) (president OR owner)`
- `collision OR "auto repair" "hiring" ("service advisor" OR bookkeeper) owner -Erber`
- `"property management" hiring ("maintenance coordinator" OR "leasing coordinator") owner independent`
- `spreadsheet OR QuickBooks ("by hand" OR manually) (distributor OR contractor) owner` — this one returned vendor explainers only.

X, copied below so batch 2 skips them. All 64 calls in the supplied batch are exhausted for the windows they used. Do not repeat those strings with the same since-dates. New city hashtags and new since-dates are in the batch 2 prompt.


## Query log (all 64 X calls)

All queries are `search_posts_all`, `lang:en -is:retweet`, max 25 results, unless the entry says otherwise. "Hits" means usable candidates. File IDs refer to `/workspace/leads/xraw/`.

| # | File | Query (short form) | Since | Results | Useful? | Hits / notes |
|---|---|---|---|---|---|---|
| 1 | e55bb064 | "drowning in admin/paperwork" + my business/shop | 07-01 | 2 | No | Coaches only |
| 2 | f93853f3 | "anyone know/need/looking for a zapier", "zapier/make.com expert" | 04-01 | 17 | No | 100% vendors |
| 3 | 6ee1f3b1 | my business + "spend(ing) hours" + spreadsheets/invoicing/data entry | 04-01 | 18 | Low | Michael_in_biz |
| 4 | 4ad69816 | "we still do/use" + on paper/by hand/whiteboard + shop/clinic/dispatch | 04-01 | 22 | No | Noise |
| 5 | dd73eb49 | "looking for/need someone to automate", "help me automate" | 04-01 | 25 | No | Vendors and news |
| 6 | 06f0fbdb | "hiring an ops/VA", "need a VA" + my business | 04-01 | 20 | No | VA agencies |
| 7 | 10fdf61a | "our dispatch/scheduling/invoicing/billing/intake" + mess/manual | 04-01 | 20 | Low | joseCleansSTRs |
| 8 | 7ee7bc88 | "I own a/I run a" + trades + paperwork/invoicing/scheduling (relevancy) | 03-01 | 23 | Some | Matt_Titan_, ApartmentsChick, thespearing (vendor) |
| 9 | d261c4da | "paperwork is killing me", "admin is killing me", "so much admin" | 04-01 | 25 | No | K-pop "admin" noise |
| 10 | 37e9be78 | ServiceTitan/Jobber/Housecall/Tekmetric/QuickBooks + my shop + manually/hate | 03-01 | 20 | Low | CableFi |
| 11 | 1cdfb362 | "small business owners" + "what do you use/how do you handle" | 04-01 | 22 | No | Product researchers |
| 12 | 2697c672 | office manager/bookkeeper/dispatcher + quit/vacation + my business | 03-01 | 7 | No | |
| 13 | d7890000 | "business owner" + "anyone using AI/where do I start with AI" | 04-01 | 11 | No | |
| 14 | fa531d42 | "we're hiring/now hiring" + office mgr/dispatcher/data entry/AR + trades/clinic/logistics | 07-01 | 23 | **Yes** | ThePlumberWNY, PihlExcavating, S&S Concrete, Ironstone, Express Hermiston |
| 15 | 40b7c4e7 | "doing invoices/paperwork/estimates" + at night/weekend | 03-01 | 22 | No | Vendors |
| 16 | 573c86b5 | "my wife/husband does" + books/invoicing/billing | 01-01 | 16 | No | |
| 17 | 1d259b8e | property manager + spreadsheet/manually + "I run/I own" | 03-01 | 7 | No | |
| 18 | 434d064d | missed calls/voicemails + my shop/practice/business | 03-01 | 21 | Low | anthonyrm86, bprintco |
| 19 | f0c5627e | copy-paste/double entry + my team/office | 03-01 | 25 | No | AmazonHelp spam |
| 20 | dba6ae0a | to:sweatystartup + ops words | 04-01 | 8 | Low | CREHiddenAlpha, cyn_io |
| 21 | 7c2480be | "what/which CRM/software" + "for my" + trade | 01-01 | 3 | No | |
| 22 | b4c8d74f | "I own/run a" + automate/AI + question words (relevancy) | 04-01 | 25 | No | |
| 23 | 91f64533 | join our team + CSR/dispatcher/service advisor/parts + trades/dealership | 05-01 | 21 | Low | Shaheen, Connect Collision; recruiter spam |
| 24 | 3c0cda4d | Excel/Sheets "runs my business" + mess/outgrown | 03-01 | 18 | No | |
| 25 | c0f93f71 | dentist/chiro/vet + front desk/no-shows/paperwork + my practice | 03-01 | 9 | No | Marketing posts |
| 26 | dd261868 | "my HVAC/plumbing/roofing/landscaping/cleaning company" + admin/software (relevancy) | 03-01 | 24 | Some | therobertbrooks; several DIY builders |
| 27 | 391d4f96 | "my trucking company/fleet/brokerage/3PL" + paperwork/dispatch | 03-01 | 24 | No | "brokerage" = stock brokers |
| 28 | 9d246483 | "my law/CPA/accounting firm, insurance agency" + intake/data entry/admin | 03-01 | 22 | Some | adam_s1986, Naquidamus |
| 29 | 34bce340 | "our dealership/service dept/body shop" + manually/paperwork/warranty | 01-01 | 24 | Low | fredhaastoyota; mostly review replies |
| 30 | 91a97cb9 | "I'm the bottleneck/only one who knows/all in my head" + business | 04-01 | 25 | Low | billcox1962 |
| 31 | ebc2ceed | "recommend/need someone" + set up automations/integrate our | 04-01 | 15 | No | Vendors |
| 32 | 9c96f252 | "looking to hire/hiring" + automation specialist/zapier/n8n | 05-01 | 25 | No | Vendors, job boards |
| 33 | 07145150 | "first ops hire", "need an integrator", "fractional COO" | 05-01 | 18 | No | Startups |
| 34 | 61abe1e0 | QuickBooks/Xero/invoices + my business + hours + hate | 03-01 | 12 | No | |
| 35 | 729283e9 | inventory/POs/vendor invoices/rebates + by hand/spreadsheet (relevancy) | 03-01 | 25 | No | Vendors (JohnMRoman, DIY) |
| 36 | 8de12e59 | "small business owner" + "I spend/takes me" hours + admin | 03-01 | 0 | No | Too narrow |
| 37 | e0927464 | I own/run + employees/techs/trucks + paper tickets/whiteboard/group texts | 01-01 | 19 | No | |
| 38 | bc22aae0 | Vendor "what task would you automate" prompt posts (to mine replies), -is:reply | 04-01 | 24 | No | Dead end: these posts get 0–2 replies |
| 39 | 7791d8c8 | @grok + my business/shop + automate/spreadsheet/invoicing | 06-01 | 24 | Some | architectok1, DevishPatel, CarpenterWarren, TexasJoe |
| 40 | 024b6385 | to:walls_jason1 + software/CRM/paperwork | 03-01 | 24 | Low | Losermayhem (DIY) |
| 41 | 5d227b78 | "my office staff/admin/CSR/service writer" + overwhelmed/quit | 01-01 | 19 | No | |
| 42 | e18b60fa | "we bought/just acquired" + business + "everything on paper/fax/Excel" | 01-01 | 24 | No | ETA content |
| 43 | 49efa891 | "any recommendations/has anyone" + AI receptionist/answering service/practice mgmt | 03-01 | 15 | Low | ValleyIG |
| 44 | 9e0f917d | my restaurant/bakery/bar + invoices/food cost/inventory + spreadsheet/hours | 01-01 | 15 | **Yes** | SayItStraightAB |
| 45 | e00681cf | "I own/manage" + units/doors/storage/laundromats + spreadsheet/admin | 03-01 | 22 | No | Real estate investor influencers |
| 46 | 71f60f79 | estimating/bids/takeoffs + "takes me/I spend" + contractor | 03-01 | 17 | No | |
| 47 | 27ebc705 | my agency/office + insurance/real estate/mortgage/title + data entry | 03-01 | 19 | No | Fiction threads |
| 48 | 8f00385a | "I need help/looking for help" + my business + systems/automation | 04-01 | 19 | Low | FrogusGladzsid |
| 49 | e956b5f2 | hiring + office/intake/patient/billing coordinator + family-owned/clinic/firm, -remote -jobs | 07-01 | 25 | Some | henry_plumbing, Columbiafloors1, BRVascular; many Nigerian job boards |
| 50 | 25b35959 | "Grok Bot/@bot" + my shop/restaurant/practice/crew/ranch | 08-01 | 25 | Low | Mostly hobbyists |
| 51 | 334b26d1 | hiring + warranty admin/billing clerk/title clerk/AP/payroll clerk, -remote | 06-01 | 18 | Some | Ultragloss; Walsworth (too big) |
| 52 | 3a70f77a | #NowHiring + office manager/CSR/dispatcher/scheduler + family-owned/our office | 06-01 | 7 | **Yes** | HughesCozad, WindsorMedNJ |
| 53 | bc5d8997 | hiring + service coordinator/estimator/warranty + HVAC/plumbing/roofing/solar | 06-01 | 24 | Low | SimpleFixRepair, 3RivsElectricMN; many are national firms |
| 54 | 4030b547 | "office manager/bookkeeper/dispatcher quit/left" | 01-01 | 21 | No | Politics ("admin quit") |
| 55 | f33a8c58 | "I own/run a" + small business + admin work/back office/busywork + AI (relevancy) | 04-01 | 24 | Some | jonhowe73 |
| 56 | 0df87c13 | prior auth/insurance verification/charting/billing + my practice/staff + hours (relevancy) | 04-01 | 25 | Some | Halleran_MD, BMcMullen87, 402Dthree |
| 57 | f86d2320 | Tekmetric/Shopmonkey/AppFolio/Buildium/ServiceTitan/Jobber + my shop + manually/integrate | 01-01 | 0 | No | Too narrow |
| 58 | 4e1d4e8c | I run + employees/crews + "we still" do payroll/invoices by hand | 01-01 | 10 | No | |
| 59 | 5800caa7 | Grok Bot/AI agents + my business + "set up/help me/overwhelmed" | 08-15 | 25 | No | Pleas for money |
| 60 | c69d5826 | service manager/parts manager/fixed ops + warranty claims/ROs/paperwork (relevancy) | 01-01 | 25 | No | Dealer vendors and trade news |
| 61 | 3ed7a5d3 | work orders/maintenance requests/rent roll + "I/we manage" + spreadsheet | 01-01 | 0 | No | Too narrow |
| 62 | ce07ca5d | "I own/run a" + "N-person company/team/shop" + admin (relevancy) | 04-01 | 18 | Low | TinyToothDDS |
| 63 | 5d80d31d | `get_posts_by_ids`: full text for 47 shortlisted posts | — | 47 | Lookup | Verified quotes |
| 64 | 9d16c0f6 | `get_posts_by_ids`: full text for 5 more posts | — | 5 | Lookup | Verified quotes |

## What batch 1 included

50 companies, in `leads-batch-1.md` and `leads.csv`. Do not add them again.

Fit 5: Patriot Air; o5 Plumbing; Utility Plumbing Services; Mac 5 Services; Bayshore Plumbers; The Cooling Company; Miller's Towing; Pihl Excavating; Clear the Air.

Fit 4: Jenner & Sons; Aaron Services; Raynor Door; J.J. Kokesh & Son; Boston Budget Plumbing; KVN Construction; Climate Masters; Cornel's Plumbing; Mundahl Law; Bootz & Duke; Perfect Smile Dental Care; Cornerstone Audiology; Jacksonville Dermatology; Finetone Hearing; Tender Care Veterinary Center; RVA Chiropractic; My Vision of the Valley; New Age Medspa; TONIIK; Accurate Towing; Offshore Marine Towing (TowBoatU.S. Fort Lauderdale); S&S Concrete Floors; Hughes & Cozad Orthodontics; Mountain View Therapy; AJ Long Electric; Way Cool Plumbing & Air; The Pets Place; Chris Rizzo Trucking; Crain Eye Clinic; OPDSF Pediatric Dentistry.

Fit 3: Blue Ridge Vascular; Kerner's Auto Service; Suite 200 Grille; Brushworks; Carter Law Group; Penn Veterinary Supply; Lindsey RV Repair; Grand Lake Plumbing & Heating; Isley's Home Service; Henry Plumbing; Windsor Medical Center.

## Dedupe and rejections

Do not pick these up again unless a new page changes the reason.

- Tenicor, Erber Auto, Tim Clark: excluded by rule. Not found in the opened pages.
- CableFi (@CableFi, cablefi.io): sells contractor software. The "eight places my business lived" post promotes the product. Competitor, not a lead.
- @thespearing / Blue Collar OS: competitor.
- @Matt_Titan_ / TLG Equity: buys businesses. Reference only. The Sacramento roofing company in the post was not named. Not a lead.
- Anonymous Upwork clients (QuickBooks automation, spreadsheet cleanup, AppSheet): no company name.
- Robert Half unnamed family business in the Chattanooga/Dalton posting: no employer name.
- Arett Sales: multi-warehouse distributor asking for SAP, Oracle, or NetSuite. Too large.
- RK Industries: multi-state employer. Too large.
- KeHE Distributors: national ESOP distributor. Too large.
- Good Greek Moving, College Hunks: national brands. Local owner not verified.
- Mile High Honda Acura, Markley Motors: dealer groups, not opened, rejected on the listing.
- Tecta America, F.H. Paschen, Walsworth, Keck Medicine of USC: too large, from the X pass.
- Boda Plumbing, Hanson's Plumbing, Emergency Plumbing Heating & Air, Snake 'n' Rooter: vendor case studies. The manual process described was already replaced (Sage, ServiceTitan, BILL, Praxedo).
- Precision HVAC "Tom Martinez," ClearWave Pools, SB Pools, ABC Plumbing: composite or fictional case studies.
- Non-US hits: Doug Tarry Homes, PACE Cardiology, Aquanas Foods, Hua Kun, Raj Grocers, GB Autos, Driven Properties, Pavago, PVG Halifax, DS Water (London).
- Hofmeister Family Dentistry: paper-chart project described as finished.
- Vector Services: ServiceTitan success story, old stack.
- Vendor and agency accounts from the X pass: @polsia, @opsheroai, @deemergeai, @Recei_vo, and Zapier/Make sellers.

## Seen and not finished

These had a real signal or a real name, and a required page did not open or did not name the current decision-maker. Batch 2 should open the missing page before adding anyone.

- Kay Plumbing, Heating & Cooling, Lexington, SC. Konrad Orzechowski is named on search snippets of kayplumbing.com. Direct fetch returned 403. Gusto dispatcher board also 403. Do not add until the about page and the job page both open.
- The Plumber Heating & Cooling, Lockport / Western New York. X post and search snippets name Joel Tucciarone and a dispatcher role. theplumberheatingandcooling.com returned 403. Dispatcher URL returned 404. Do not add until the company site or another stable page opens.
- Columbia Floors, Columbia, MD. Search snippets of columbiafloorsmd.com name Ed Wagschal. Direct fetch returned 403. X post hires an office assistant. Unfinished.
- Ironstone Builders, Lynchburg, VA. ironstonebuildersva.com/meettheteam returned 200 and the extracted HTML did not contain the name Rothgeb. Treat the owner as unconfirmed.
- McGillicuddy Concrete, Spartanburg, SC. mcgconcrete.com returned 403. A prior note named Sean McGillicuddy and a QuickBooks office-assistant post. Unconfirmed this session.
- Central Heating & Plumbing, New Castle / Sharon, PA. SimplyHired office-manager text opened and says the job expired. The exploreVenango article that names Fran Lynch returned 403. Owner not confirmed.
- Ultragloss, Akron. ultragloss.biz opened and did not name an owner or a trade in the extracted text. BBB returned 403. X post is an AP/AR clerk hire. Line of business and owner unfinished.
- Windsor was included at fit 3 from the Medicare listing plus the X post. A search result said the office-manager seat was later marked filled. That update was not opened. Batch 2 should open it and drop the lead if the seat is filled.
- Henry Plumbing's own site returned 403. Included at fit 3 from the March 2022 profile plus the X post. Batch 2 should open henryplumbingco.com before outreach.
- Blue Ridge Vascular careers page did not list the July coordinator role. Included at fit 3. Confirm before outreach.
- Xpress Distributors, Tampa. Accounting-clerk job opened (QuickBooks and Zoho Books). FMCSA page shows SUHAIL@XPRESSDISTRIBUTORS.COM and (813) 622-6362. The president's full name was on a Sunbiz mirror that returned 403. Do not invent the surname from the mailbox.
- Delta Food Supplies / AJAB LLC, Dallas. Paylocity title opened ("Bookkeeper – QuickBooks Desktop / AP & AR") but the duty body required JavaScript. Officer page returned 403. A homepage review names "Bhargav" with no title. Unfinished.
- Beco Inc., High Point, NC. Indeed AR post opened and says the job expired. The North Carolina listing that names David L. Saunders returned 403.
- Spray Booth Products, Redford, MI. An earlier fetch showed an office-manager / bookkeeper ad via Bronwick. The company about page opened and did not name an owner.
- My Guys Plumbing, Heating & Air, Bedford, OH. Dispatcher/CSR job opened. The about page does not name the owner.
- Sherman Hill Animal Hospital. Phone 203-263-4222. Header lists George Nashe, DVM. Employment page refers to "the owner (the main veterinarian)" and does not print the name in that sentence. Not treated as confirmed.
- Universal Pest, Virginia Beach. Careers page says the owners are on site and does not name them.
- Korrect Plumbing, Dayton. About page names historical presidents (Dan Patterson, Martha) and does not name the current president. A third-party CSR post looked expired (available before 2026-08-23). Not added.
- Downtown Towing (Miami), Casady Electric (Bonita), Hassig Companies (Mount Clemens), Lang Towing (Seattle), Smith Towing (Crosby), Tech Solutions (Beltsville), Honest Accurate Auto (Colorado Springs), Legacy Management (Bettendorf), Therma Tech (San Jose, owner name conflict), Wisler (dispatcher URL 404), Covenant (dispatcher title evergreen, no named buyer).
- X accounts with no business name confirmed on the web, so not in the 50: @jonhowe73 (30-truck fleet, Bellingham, business not named), @Halleran_MD (Oklahoma practice not named), @anthonyrm86 (Texas, business not named), @architectok1 Dan Pruitt (insulation startup, business not named, limited capital), @joseCleansSTRs, @therobertbrooks (HVAC company not named; Chosin Companies is), @TinyToothDDS, @BMcMullen87, @ApartmentsChick, @CarpenterWarren, @billcox1962 (B&A Ranch, ability to pay uncertain, not added), @DevishPatel, @Naquidamus, @adam_s1986, @CREHiddenAlpha, @Michael_in_biz (Discount Catholic Products, DIY already built, not added), @ValleyIG (March post, small), @fredhaastoyota (large dealer, indirect signal).
- Below-the-bar X handles to skip: @SimpleFixRepair, @3RivsElectricMN, @ExpressHermist1, @bodyshopjobs1, @ShaheenAuto1970, @402Dthree, @FrogusGladzsid, and the DIY-solved list in the X batch (@TER4M, @TexasJoe, @JohnMRoman, and the rest of that bullet).

## Prompt for batch 2

```
Continue Wil Sensing lead research, batch 2. Read research/leads/CONTINUE.md and research/leads/leads-batch-1.md first. Do not redo exhausted queries. Do not re-add anyone in the dedupe list or the batch 1 table.

Goal: 50 new US leads, same definition and 1–5 scoring as CONTINUE.md. Public pages only. Open every page you cite. No logins, no terms-violating scrapers, no invented names or revenue. Business contact info only. Do not contact anyone.

Prioritize the "seen and not finished" list, starting with Kay Plumbing, The Plumber WNY, Columbia Floors, McGillicuddy Concrete, Xpress Distributors, and Delta Food Supplies. Then run new searches, not the batch 1 strings:

- Company career pages for "dispatcher," "scheduling coordinator," "billing specialist," "warranty clerk," or "AP clerk," plus a city, excluding remote and national chains.
- Do not repeat the 64 X queries in CONTINUE.md. If new X material is supplied, verify the business on the web before it enters the 50.

Write research/leads/leads-batch-2.md, update leads.csv or add leads-batch-2.csv, and append a batch 2 section to CONTINUE.md. Same dossier rules: measure sentences with TBD baselines, outreach angle tied to the signal, date seen, source URL.
```
