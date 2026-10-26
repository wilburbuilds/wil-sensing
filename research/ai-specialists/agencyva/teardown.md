# Agency VA / Wessly J. Anderson strategy teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no call booked, no account created, no field typed into.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (about 50 to 200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). The offer is a free 30-minute fit call, then a paid Job map credited toward the build, then the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with a person on the exceptions). The headline is "Hand off the busywork. Keep the decisions." The proof on hand is a local auto repair shop: $217K in missed vendor credits found by matching 11,139 PO lines. Pricing is undecided. Wil does not sell insurance virtual assistants.

Wessly J. Anderson is Co-Founder and President of Agency VA. Two public sites were crawled. agencyva.com sells insurance virtual assistants, managed service teams, and global payroll, and describes an "AVA Insurance OS." www.wesslyanderson.com is a one-page bio. Ranked #7 on the list this pass is working from. **INFERENCE** marks a conclusion that is not a sentence on a saved page or in the X posts.

## Top 5 takeaways

1. **Steal the manual-work line. Leave the staffing company.** On X, 30 September 2026, he wrote: "Your agency does not have a staffing problem. It probably has a manual-work problem." The list under it is "Data entry. Proposals. Documents. Follow-ups. Research. Internal workflows." https://x.com/TF27wess/status/2105281521523585191 The marketing site sells the opposite shape: hire, manage, and pay virtual assistants, teams of 3–10, and an employer of record. https://agencyva.com/ Wil does not sell insurance VAs. The line to adapt, in his buyer's words, is that the shop does not have a headcount problem. It has a manual-work problem. That is the fit-call opener, and it is already his headline.

2. **Steal the job nouns. Leave the insurance buyer.** The solutions page names the back office in the words an agency owner uses: "Data entry," "AMS/CRM management," "Quoting," "Certificates," "Endorsements," "Policy Checking," plus renewals, bind, and phones. https://agencyva.com/solutions The X post names proposals, documents, and follow-ups. The useful habit is to say the screen and the task, not "operations." For Wil that is PO lines, vendor credits, warranty, parts, the DMS. It is not certificates, and it is not an insurance ICP. Principal agents, producers, and AMS platforms are their buyer. https://agencyva.com/testimonials

3. **The Job map is the product they describe and do not sell.** The blog says the hard part of a renewal is assembling the file, and "The person still decides what happens next." https://agencyva.com/blog/what-ai-should-actually-handle-inside-an-insurance-agency The AI page says AVA "works from a synchronized mirror of agency data" and "does not overwrite the AMS directly." https://agencyva.com/ai-enablement Their public path is a VA-match survey, then a free 30-minute discovery call, then a hire. There is no paid artifact the buyer keeps, and no credit toward a build. His Job map is that missing step: the job, the steps, the source system, the exception, and the number that will decide if the build worked. The survey's questions (industry, AMS, headcount, "How many additional hires do you currently need?") show what they think qualification is. https://agencyva.typeform.com/to/gCd27ssO His fit call should qualify the job, not a seat.

4. **Their oversight rules are the autonomy ladder. The X post skips the human rung.** On the AI page a person still merges a duplicate in the source system, a licensed person can take a live call, and outbound campaigns keep consent and do-not-call. https://agencyva.com/ai-enablement The blog keeps "judgment, trust, licensing, accountability" with people. https://agencyva.com/blog/what-ai-should-actually-handle-inside-an-insurance-agency That is tool, then a governed workflow, then a person on the exception, which is "Hand off the busywork. Keep the decisions." The 18 September X post says an upload replaces the whole proposal, including "Generate the file" and "Send the new proposal to the client." https://x.com/TF27wess/status/2100932858332303838 The same company's AI page says quote follow-up can be reviewed "without AVA independently rating or generating a new quote." Use the page, not the post, when he says what the build is allowed to do.

5. **Leave the price cards and the headcount proof.** Published prices on https://agencyva.com/pricing are $299 /month (Global Payroll), $2,349 /month (Virtual Assistants), and $3,449 /month (Trained Service Teams), plus "Custom Pricing." None of those cards is AVA Insurance OS, and none says whether the figure is per person, per team, or a starting rate. Proof on the site is 2,100+ VAs, 700+ agencies or agents, and $100M of payroll, plus star ratings on named assistants. No saved page ties a dollar, an hour, or a retention point to a named workflow. His $217K and 11,139 lines is the proof shape to keep. Their monthly people-prices are not a number to publish while his price is undecided.

## Method and coverage

agencyva.com is a Laravel-style site (Livewire markers in the HTML, a public `sitemap.xml`, Cloudflare). Visible text was taken with headless Chrome. www.wesslyanderson.com is a Wix one-pager. The personal-site sitemap index lists one URL, lastmod 13 July 2026.

Page text files under `research/ai-specialists/agencyva/pages/`, each starting with the URL:

- agencyva.com, 11 unique pages: home, solutions, AI enablement, our technology, pricing, about, testimonials, blog index, one article, book a discovery call, privacy policy. `agencyva-com__index.txt` is the homepage. The second crawl writes every site's homepage to `index.txt`, so the Agency VA homepage was copied back under that name after www.wesslyanderson.com overwrote it. Same final URL, same text. The http and https copies in the first log are the same pages, kept once.
- www.wesslyanderson.com: `index.txt` only. Probed paths `/about`, `/services`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, `/privacy` returned 404.
- Public Calendly event, one page: `agencyva__discovery-call.txt`. No date was selected. No booking.
- Public Typeform, two files for one URL: `to__gCd27ssO.txt` is the rendered welcome screen ("Find Your Perfect Virtual Assistant Match" / "Start"). `to__gCd27ssO-definition.txt` is the question list from that page's source. Start was opened once to confirm the first question renders. Nothing was filled in and nothing was submitted.

Logs: `crawl-log-agencyva.tsv` (first host), `crawl-log-wesslyanderson.tsv` and `crawl-log.tsv` (personal site; the second command overwrites `crawl-log.tsv`), `crawl-log-calendly.tsv`, `crawl-log-typeform.tsv`. `not-fetched-typeform.txt` is the unused seed list from the one-page Typeform fetch (`/about`, `/pricing`, and the other paths the crawler always queues). Those are not Agency VA pages.

What 404'd on agencyva.com: `/services`, `/case-studies`, `/work`, `/contact`, `/careers`, `/privacy` (the policy is `/privacy-policy`). `/about-us` ends at `/about`. The footer word "Case Studies" is a link to `/testimonials`, not a study library. "Become A VA" and "Log in" / "Get Started" leave the marketing host. They were not opened. No account was created.

A block in the homepage HTML names calculators (take-home pay, EOR or entity, global benefits, employment comparison, employee cost). That block is inside an HTML comment, the anchors have no href, and guessed paths 404. Not treated as products. "Load More" on the blog is a `data-static` span, not a link. The sitemap lists one article. Every article card's href on the blog HTML is that same article. The other titles are index text only. Their bodies were not fetched and are not described below.

JS-rendered: the marketing pages' visible copy is in the HTML the crawler saved. FAQ answers are expanded on the homepage and the solutions page. On pricing, about, technology, testimonials, and the booking page the same questions are visible and the answers are not, so answers are quoted from the pages where they are in the extract. The booking page's visible text has no form fields. The Calendly widget is an embed; the event page was fetched separately. The Typeform welcome screen does not list the questions until Start; the definition file is the source of those questions.

Not crawled on purpose: `agencyva.vision` login and signup, social profiles, podcast episodes, YouTube, the personal site's outbound links, tag archives, and anything that required a login. No OpenAI account was opened.

The organization JSON-LD on the Agency VA pages is broken. The `@context` value is a fragment of PHP (`context()->has`). The telephone inside that block is `+1-801-609-9627`. The visible footer on the same pages is `1-801-590-7477`. Both are in the saved files. They are not reconciled here.

## Product

### What they sell, and which site says it

agencyva.com sells people, payroll, and a software layer.

Homepage H1: "Hire, Manage & Pay Insurance Virtual Assistants with AI Precision". The deck says the platform scans pre-vetted virtual assistants and matches "team, timezone, and budget." https://agencyva.com/

Three staffing offers, https://agencyva.com/solutions, H1 "Three ways to staff, scale, and run your agency":

| Offer | How the page describes it | Where |
| --- | --- | --- |
| Virtual Assistants | Dedicated, bilingual, "Insurance Licensed VA," executive assistants, and "AI Enablement VA." Customer-facing phones, renewals, billing, claims. Back office: data entry, AMS/CRM, email, quoting, certificates, endorsements, policy checking. | https://agencyva.com/solutions |
| Trained Service Teams | Quoting, phones, renewal, and billing/CSR teams. Homepage: "Pre-built teams of 3–10 specialists." | https://agencyva.com/solutions and https://agencyva.com/ |
| International Payroll (EOR) | "Found your own talent? Keep them. We'll run the payroll, compliance, and HR." Contracts, payroll, tax, benefits. | https://agencyva.com/solutions |

"AI Enablement VA" is a type of person on the solutions page, in the same list as a bilingual VA. It is not a separate software SKU on that page.

The software is on other URLs.

- **AVA Insurance OS**, https://agencyva.com/ai-enablement. H1: "Put AI to work across your insurance agency." Meta: "AVA Insurance OS gives your agency an AI workforce for retention, service and growth, built on your existing data to surface insights and empower your team." Eleven feature slides: Dashboard, Clients, Agents, Quotes, Ask AVA, Calls, Campaigns, Tasking, AVA Growth, Reports, Retention & Cross-Sell. Slide 09 (AVA Growth) repeats the Calls paragraph word for word ("Keep AI-assisted calls visible to the team"). That is a paste on the page, not a second product.
- **Our Technology**, https://agencyva.com/our-technology. H1: "Technology built around the way insurance agencies work". Three named products: AVA Tracking (time, screenshots, end-of-day reports), Ask AVA (answers for the VAs), and "AVA Agentic Ai" (clients, renewals, cross-sell, quotes, calls, campaigns, tasking, growth, reporting, "specialized AVA roles").
- **AVA University** is a line on the about page ("Training and development through AVA University") and is not a URL in the sitemap. https://agencyva.com/about

The personal site does not sell a package. Visible bio: "Wessly J. Anderson is the Co-Founder and President of Agency VA, where he's redefining how insurance agencies scale through elite Virtual Agents and AVA, his proprietary remote workforce platform." The meta description calls AVA "remote worker software." The JSON-LD description on the same page says "Helping insurance agencies become AI-enabled" and lists `worksFor` as Agency VA, Insurtech UT, and FNIA Insurance Agency. https://www.wesslyanderson.com/ **INFERENCE:** the personal page still describes a workforce tool. The AI enablement page describes an agency operating system. They are the same person's two sites, and they are not the same product sentence.

About page, the company story, https://agencyva.com/about: Ben Barrientos and Wessly Anderson started Agency VA in 2005. 2012 is "trained remote professionals." 2018 is "AVA enters the tech" for "workforce management, tracking, and reporting." "Today" is "virtual assistants, service teams, and AVA products."

### Prices

Published on https://agencyva.com/pricing. H1: "Flexible support for the way your agency works".

| Card | Figure on the card | What the card lists |
| --- | --- | --- |
| Global Payroll (EOR) | $299 /month | "Global Payroll & Compliance," "SOC 2-Aligned Data Security," "Benefits Administration," "HR & IT Support Services." For agencies that "already have the right people." |
| Virtual Assistants | $2,349 /month | "Everything in Global Payroll," plus recruiting, matching, "Insurance Training & Onboarding," "Managed Placement & Ongoing Support." |
| Trained Service Teams | $3,449 /month | "High-Volume Agency Support," "Quoting & Renewal Processing," "Certificates & Policy Servicing," "Inbound & Outbound Phone Support." |
| Larger or complex | "Custom Pricing" | "Talk to Our Team." |

The pricing page says "AVA Insurance OS is part of the broader Agency VA product ecosystem" and then shows those three cards. It does not put a price on Insurance OS, Ask AVA, or Tracking. It does not say "per VA," "per employee," or "per team." **INFERENCE:** a buyer cannot tell the unit from the card. The homepage says service teams are 3–10 people and does not multiply that by $3,449. Those two sentences are not combined here.

No price appears on www.wesslyanderson.com. The Calendly event is "30 min" and does not show a fee. The booking page meta says "Book a free discovery call." https://agencyva.com/book-a-discovery-call

### Guarantees, quoted

No "results or you don't pay" line was on the pages crawled. The promises that are there:

Homepage, under Virtual Assistants: "Most clients have their VA onboarded within 5 business days. No contracts or minimums." https://agencyva.com/

Homepage and solutions FAQ: "If a VA isn't the right fit for any reason — performance, communication, skill gaps, or just personality mismatch — we handle the replacement at no extra cost. Most replacements are completed within five business days." The same FAQ also says "Most clients are matched and onboarded within five to seven business days from their first consultation." https://agencyva.com/

"Scale up or down on demand — no long-term lock-in" sits under Global Reach on the homepage, next to "50+ countries." https://agencyva.com/

SOC 2 is their claim. Homepage: "The only SOC 2-certified insurance VA provider." Solutions: "As one of the only SOC 2-certified VA providers." Pricing: "SOC 2-Aligned Data Security." No certificate image or report was in the fetched text. Both wordings stay their claim.

### Engagement model and deliverables

Staffing path, from the FAQ on https://agencyva.com/: "intake call → match presentation → VA interview (optional) → offer and onboarding." The buyer is matched to a person or a team. The deliverable is the placement, payroll, and replacement if the person is wrong.

Software path, from the AI page: a login to AVA Insurance OS that reads a mirror of agency data, surfaces renewals, duplicates, old quotes, calls, and tasks, and can hand a live call to "an available licensed team member." There is no statement of work, no discovery document the buyer keeps, and no sentence that a fee is credited toward a build.

Discovery call, https://agencyva.com/book-a-discovery-call: "Whether you’re exploring virtual assistants, managed service teams, global employment support, or AVA technology, we’ll help you understand the options and find the right fit for your agency." The Calendly event title is "Discovery Call," 30 minutes. Its description: "We’ve helped hundreds of businesses like yours implement virtual support effectively — we know what works and what doesn’t." https://calendly.com/agencyva/discovery-call The word on that event is virtual support, not an AI build.

### Named products, not a framework

Visible names: AVA Insurance OS, AVA Agentic Ai, Ask AVA, AVA Tracking, AVA EOR, AVA Growth, AVA University (a label only), and "AI Enablement" as both a page and a VA type. No numbered method, no trademarked framework, no "layer 0."

### How they describe the work

Two descriptions are on the site. They do not match the X posts. The posts are quoted in the X section.

Careful version, the blog, https://agencyva.com/blog/what-ai-should-actually-handle-inside-an-insurance-agency:

> The difficult part is not always the decision itself. It is assembling the context required to make it.
>
> The person still decides what happens next. They simply begin with a clearer picture.

> The goal is not maximum automation
>
> Keep people responsible for the work that depends on judgment, trust, licensing, accountability, and understanding the individual client.
>
> That division of responsibility is less dramatic than the promise that AI will “run your agency.”

Oversight version, https://agencyva.com/ai-enablement:

> Your AMS remains the system of record
>
> AVA works from a synchronized mirror of agency data. It does not overwrite the AMS directly.
>
> If AVA identifies an issue such as a likely duplicate record, the merge is still completed by a person in the source system.

Quotes, same page: earlier quotes "can be reviewed without AVA independently rating or generating a new quote." Calls: "When a conversation requires a person, supported workflows can be handed over to an available licensed team member." Campaigns keep "Consent, revocation, and do-not-call."

Ask AVA, https://agencyva.com/our-technology: "ASK AVA helps virtual assistants find answers, reference internal information, and get guidance during day-to-day work." On the AI page, Ask AVA "can create follow-up tasks when action is needed."

The phrase "structure the data, then automate" is not on the pages crawled. The nearest sentences are the mirror, the visible "last updated" line ("Data freshness is visible"), and the blog's "assembling the context."

### ICP and the words they use

Insurance agencies and brokerages. Roles on the AI page: "Agency Owners," "Operations Teams," "Service Teams," "Producers." Testimonials page: "Principal agents, CFOs, and agency owners." Tools named as logos on the homepage: AMS 360, Applied Epic, EZ Lynx, Hawksoft, QQ Catalyst. The survey also offers Tax, Real Estate, and Other. https://agencyva.typeform.com/to/gCd27ssO **INFERENCE:** the site a visitor reads is an insurance company. The form still qualifies other industries, and the form's own jumps send "not Insurance" to "Where is your business headquartered?" rather than to the P&C and AMS questions.

Nothing on either site addresses a dealership, an equipment dealer, a trade, or a 50–200 person local firm outside insurance.

Geography they name: Pleasant Grove, UT, on the privacy policy (1390 West State Street, Suite 170, Pleasant Grove, UT 84062). The personal site's LocalBusiness schema says Lehi, UT. The bio mentions "the mountains of Utah" and "the waves of Puerto Rico." Talent is "50+ countries" on the homepage and "150+ countries" on the EOR sections. "We have legal entities in every country we operate in" is on the homepage payroll slide. Those country counts are not the same sentence.

### Proof

No case-study URL was fetched, because `/case-studies` 404s and the footer "Case Studies" link is the testimonials page. The proof that is on the site is company scale plus quotes.

Scale, repeated on the homepage, about, and AI pages:

- "2,100+" pre-vetted VAs placed. The testimonial intro on the homepage says "More than 2,100 VAs in the insurance and claims industry are growing with Agency VA."
- "700+" . Homepage label: "Local agents supported." AI page label: "Local agencies supported." The line under both is "Licensed local agents backed by our teams and software."
- "$100M" "Global payroll processed," "across 50+ countries."
- AI page testimonial intro, different number: "More than 10,000 companies in the insurance and claims industry are growing with Agency VA."

Named clients in the quotes, and only two have a title: Victor Salcedo, "Managing Director @ Salcedo Benefits Group," and Sofia Marchetti, "VP Operations @ Meridian Insurance Partners." The other quotes are first names of VAs (Anil, Alejandra, Eli, Jorge, Neiser, Yuli) or the buyer's reaction. Star figures sit under the quotes (5.0, 4.0, 4.3, 4.2, 4.5). The page does not say who scored them or out of what. No quote states hours saved, policies bound, premium, or a before-and-after.

Lines that show the shape, https://agencyva.com/testimonials:

> "It's been a lifesaver for me. Getting a Virtual Assistant from Wess or Agency VA is something you should really really consider"

> "On the team approach, if one person is out, I don't even know they're out. Everything just happens the way it's supposed to happen like if you had a full time staff every day. Which is nice. They have performed outstanding"

> "We've used different VA companies in the past, but the licensed support we get from Agency VA is a game changer"

About page, unmeasured: "some of our virtual assistants are making more than the mayors of their provinces." https://agencyva.com/about

Calendly: "hundreds of businesses." No list.

**INFERENCE:** the library proves that agencies will praise a named assistant. It does not prove that a workflow got shorter. The only timed workflow in the source set is the X post below, and it is one unnamed agency.

## Sales and marketing

### Headlines worth keeping in view

- Homepage: "Hire, Manage & Pay Insurance Virtual Assistants with AI Precision"
- Solutions: "Three ways to staff, scale, and run your agency"
- AI enablement: "Put AI to work across your insurance agency." And "AI assistance without giving up control of your core systems"
- Technology: "Technology built around the way insurance agencies work"
- Pricing: "Flexible support for the way your agency works"
- Booking: "Let’s talk about what your agency needs"
- Blog H1: "What AI Should Actually Handle Inside an Insurance Agency"
- Personal site H1: "THE LIFE OF WESSLY J ANDERSON". The line under it is “It's not about how hard you fall, but how quickly you get up.”
- X, not a website headline: "Your agency does not have a staffing problem. It probably has a manual-work problem."

The homepage also says "We've built, scaled, and sold agencies ourselves" and "The top 1% of applicants, vetted and completely ready."

### Funnel and CTAs

The repeated actions are "Get Started," "Book a Demo," and "Book a call." The discovery URL is https://agencyva.com/book-a-discovery-call. The Typeform thank-you button "Book a Call Now" points at `https://www.agencyva.com/book-a-call/`, which redirects to that same discovery page.

Calendly is a 30-minute "Discovery Call." The public event page is a calendar. It does not show custom questions before a time is picked. No time was picked.

The other door is the survey, linked from testimonials as "Take the VA match survey." Welcome title: "Find Your Perfect Virtual Assistant Match." Questions in the form definition, https://agencyva.typeform.com/to/gCd27ssO:

- Industry, required: Insurance, Tax, Real Estate, Other. Other opens a free-text industry question. Insurance jumps to "Do you require P&C licensed support?" Anything that is not Insurance jumps to headquarters.
- AMS, required when that question is in the path: EZLynx, Applied Epic, AMS360, Hawksoft, QQCatalyst, Other.
- Headquarters. Bilingual: Yes, No, Maybe. Yes asks which languages.
- "How many total team members do you currently have?" Bands: 1–9, 10–24, 25–49, 50–99, 100+.
- "How many additional hires do you currently need?" Bands: 1–2, 3–5, 6–10, 10+.
- How to receive "survey results and potential VA profiles": phone, text, or email.
- Name, business email, phone. Required.

Thank-you title: "Thanks for submitting!" Description: "We’ve received your answers. A copy of your responses will be sent to your email shortly. Our team will get in touch with your perfect VA match!"

**INFERENCE:** the survey qualifies a staffing lead (industry, system, headcount, how many hires, how to contact them) and hands them a profile plus the same discovery call. It does not ask what the recurring job is, what "done" looks like, or what the person should still decide.

No ebook, PDF, webinar, or newsletter gate was on the pages crawled. The blog is the content offer, and it ends on the same "Get Started" / "Book a Demo" footer as the rest of the site.

Contact in the footer and the privacy policy: sales@agencyva.com and 1-801-590-7477. The personal site's Person schema lists wja.ins@gmail.com. That address is not on agencyva.com.

### Content

Blog index H1: "Practical ideas for building a better insurance agency". One article is real: "What AI Should Actually Handle Inside an Insurance Agency," labeled "Sep 01 · 9 min read" in the header and "Aug 19 · 8 min read" further down the same index. The index also prints titles that have no separate URL, with dates that do not agree with each other (Aug 24 and Aug 19 on the same cards): a "Modern Insurance Agency Playbook," "7 Tasks Insurance Agencies Should Stop Handling In-House," a book-of-business growth note, "How to Manage a Remote Team Without Micromanaging It," and "Why Agency Growth Usually Creates an Operations Problem First." https://agencyva.com/blog The blurbs are on the index. The articles behind them were not fetched.

The one real article is the piece worth studying. It is vertical, it draws a line between assembling context and deciding, and it refuses "run your agency." It is not a query factory.

The personal site is a speaker reel: Marques Ogden, The Insurance Dudes, Keep Hustling, Silicon Slopes, Insurance Nerds ("Co-Founder at Agent VA"), Insurance Town, Buttoned Up, and Insurance Agency Intelligence. Episode bodies were not fetched. One title is the PE note below.

### Trust and tone

Order on the homepage: hire headline, a few VA cards (Patricia Mendoza, Manila; Gabriela Torres, Nairobi; Mateo Delgado, San Salvador), "we've run agencies," four claims (industry expertise, top 1%, 50+ countries, the only SOC 2), feature list, the 2,100 / 700 / $100M band, three solutions, testimonials, then screenshot tracking, then FAQ.

Tone that is worth keeping, because it sounds like an owner who has done the job:

> We've built, scaled, and sold agencies ourselves.

> The person still decides what happens next.

Tone that is a staffing company, and not his:

> The top 1% of applicants, vetted and completely ready.

> Getting a Virtual Assistant from Wess or Agency VA is something you should really really consider

## What Wil should steal or adapt

Ranked. Each one maps to the fit call, the credited Job map, the build, or the autonomy ladder.

1. **Fit call: say manual work before headcount.** Use his headline, then the X sentence stripped of "agency": the company does not have a staffing problem, it has a manual-work problem. Data entry, documents, follow-ups, the job the owner is tired of. Do not continue into a VA. Their survey's first move is industry and "how many additional hires." His first move is which job.

2. **Fit call: ask in the nouns of the shop, the way they ask in the nouns of an agency.** They ask AMS by name (Applied Epic, AMS360, EZLynx, Hawksoft, QQ Catalyst) because that is the system of record. He should ask the system the buyer already runs, by the name the buyer uses. The solutions list (quoting, certificates, endorsements, policy checking, renewals) is the pattern: a short list of tasks a principal recognizes. His list is the dealer and the shop, not this list.

3. **Job map: write the steps the way the X post writes a proposal, then stop where the AI page stops.** The post's before-list is a job map in miniature: open the template, read the file, input coverages, compare premiums, generate the file, draft the email, send it, "About 20 minutes." Steal the shape. The 20 minutes is their anecdote, from "an agency," and it is not his number. The map he sells should name the source file (the PO lines, the vendor credits), the person who still approves, and the count that will show the build worked. Their discovery leaves a calendar invite. His leaves a document, and the fee comes off the build. They never say that. He should.

4. **Build: one job, against the system they already run.** "Your AMS remains the system of record" and "a synchronized mirror" is the build rule to adapt: the DMS, QuickBooks, or the vendor portal stays the record, the workflow reads it, a person still commits the change. "Ask AVA" finding an answer for a VA is tool adoption, the first rung, not the build. He does not need an eleven-screen insurance OS to hand off one job.

5. **Autonomy ladder: publish their division, under his headline.** Rungs they actually describe: a person looks up context (Ask AVA, the blog's "assembling the context"); a workflow drafts the admin around a call (summary, outcome, transcript) or creates a follow-up task; a campaign runs inside consent, revocation, and do-not-call; a licensed person takes the exception; a person merges the duplicate in the source system. They name "AVA agents" and "specialized AVA roles." They do not describe an agent handing work to another agent. Do not add that rung because the page has the word "agentic." The human rung is the one their own product page insists on, and it is the one the X post leaves out.

6. **One field note in the blog's shape, not a six-title index.** The article to copy the posture of is "What AI Should Actually Handle," tied to a real job. A dealer principal does not need a playbook index whose "Read more" links all go to one post. One note, with the caveat written the way that article refuses "run your agency," matches a one-person practice.

## What not to copy, and why

- **The virtual assistant, the team, and the EOR.** That is a different company. "AI Enablement VA" puts a person in a slot that sounds like software. Wil's buyer who hears that will think they are hiring, which is the sale he is not making.
- **$299, $2,349, and $3,449.** Those cards buy payroll and people. The unit is not on the card. Publishing them would anchor a one-person build to a staffing rate. His price is undecided. AVA Insurance OS has no public price to borrow anyway.
- **Screenshot and keystroke tracking.** Homepage: "AVA’s employee tracking uses automated screenshots," "captured at random intervals," and a "workload capacity indicator" from "keyboard and mouse usage," colored red, yellow, and green. That is surveillance of the worker. It is the opposite of handing a person the decisions and leaving them the job.
- **Headcount as the trust stack.** "2,100+," "700+," "$100M," "top 1%," "the only SOC 2," "10,000 companies," "hundreds of businesses." He is one person with one shop story. Borrowing the shape of a bench makes the shop number look small. The SOC 2 sentences also disagree with each other, and no certificate was fetched.
- **Starred quotes about a named assistant.** Useful for a staffing firm. An owner deciding whether to hand off PO matching wants dollars, lines, and what the person still checks. Larry Talbert's "if one person is out, I don't even know" is a coverage story, not a measurement.
- **The X proposal as a build promise.** "Upload the client file" and the workflow "handles" compare, generate, draft, and send. The AI page says the product does not independently rate or generate a new quote, and a person still writes the change back to the AMS. Shipping the post's version would promise a rung their own product page will not claim.
- **The survey as the fit call.** Industry, AMS, bilingual, headcount, "additional hires," then a profile of a VA. It is a good staffing qualifier. It teaches the wrong first question for a Job map.
- **Insurance as the vertical, and Tax or Real Estate as a quiet second.** He does not serve those buyers. The nouns transfer. The ICP does not.
- **A blog index of titles that share one URL, and dates that disagree on the same page.** It looks like a publication. The sitemap has one post.
- **An OpenAI services-partner badge.** No saved page from either host states it, and no certificate was fetched. It is not a trust mark to put on his site. If it shows up in a room, it is their claim.

## Private equity

**Noted for reference, NOT our strategy for now.**

The only PE surface in the fetch is a podcast title on the personal site: "Wessly Anderson: Thinking Bigger With PE," listed under Buttoned Up. https://www.wesslyanderson.com/ The page does not describe a fund, a portco offer, a fee, or a hold period. The episode was not fetched. agencyva.com does not mention private equity. There is nothing here to adapt, and nothing to add to his site.

## X evidence

Both posts are from @TF27wess. They are X posts, not website copy. Metrics in the source file: 2 likes and 35 impressions on the first, 2 likes and 44 impressions on the second. They are not treated as market proof.

What they add: a problem sentence the site never uses, a timed proposal workflow, and the words "agentic AI" and "AVA AI enablement." The site says "AI enablement" and "AVA Agentic Ai," and it never tells the 20-minute story.

18 September 2026, https://x.com/TF27wess/status/2100932858332303838:

> I just got off the phone with an agency using AVA AI, and they shared something pretty exciting.
>
> Before using AVA AI, preparing a proposal looked like this:
>
> • Open a template
> • Read the file
> • Manually input coverages
> • Compare premiums
> • Generate the file
> • Draft the email
> • Send the new proposal to the client
>
> About 20 minutes.
>
> Now?
>
> Upload the client file to AVA AI, and it handles the workflow above.
>
> The time it takes now is essentially the time it takes to upload the file.
>
> That's a very different way of working.
>
> And this is what gets me excited about agentic AI.
>
> We're taking workflows that require multiple manual steps and giving AVA AI the ability to handle them.
>
> The result? More time and capacity for the people doing the work that matters.
>
> This is AVA AI enablement in practice.

30 September 2026, https://x.com/TF27wess/status/2105281521523585191:

> Your agency does not have a staffing problem. It probably has a manual-work problem.
>
> Data entry. Proposals. Documents. Follow-ups. Research. Internal workflows.
>
> AVA AI gives that time back so your people can focus on clients, relationships, and growth.

Where they fight the site: the product page will not "generate a new quote" on its own, and the homepage's entire offer is staffing. The posts say the problem is not staffing, and that an upload finishes the proposal. Both cannot be the offer a buyer relies on. The sentence Wil can use without taking their product is the manual-work line. The step list is a Job map example, with their number left on their post.

## Open questions and contradictions

| Topic | What one surface says | What another says |
| --- | --- | --- |
| The problem | X: "Your agency does not have a staffing problem. It probably has a manual-work problem." | Homepage H1 sells hiring, managing, and paying virtual assistants. Solutions H1: "Three ways to staff, scale, and run your agency." |
| Proposals | X: upload the file and AVA handles compare, generate, draft, and send. "About 20 minutes" becomes the time to upload. | AI page: quotes "can be reviewed without AVA independently rating or generating a new quote." A person merges duplicates in the AMS. |
| What AVA is | Personal site meta: "remote worker software." Visible bio: "elite Virtual Agents" and a "remote workforce platform." | AI page: "AVA Insurance OS," an "AI workforce for retention, service, and growth." Technology page spelling: "AVA Agentic Ai." |
| 700+ | Homepage: "Local agents supported." | AI enablement: "Local agencies supported." The subline on both is "Licensed local agents." |
| Who is growing with them | Homepage testimonials: "More than 2,100 VAs." | AI page testimonials: "More than 10,000 companies." |
| SOC 2 | Homepage: "The only SOC 2-certified insurance VA provider." | Solutions: "As one of the only SOC 2-certified VA providers." Pricing: "SOC 2-Aligned Data Security." No certificate in the fetch. |
| Countries | Homepage talent and payroll: "50+ countries." | EOR sections: "150+ countries." Homepage also says "legal entities in every country we operate in." |
| Time to a VA | Homepage offer: "within 5 business days. No contracts or minimums." | FAQ on the same page: "five to seven business days." Replacement: "within five business days," "at no extra cost." |
| Price unit | $299, $2,349, and $3,449 per month are printed. | The cards do not say per person, per team, or starting at. Insurance OS has no price. |
| Phone | Footer: 1-801-590-7477. | JSON-LD on the same pages: +1-801-609-9627. The JSON-LD `@context` is a PHP fragment. |
| City | Privacy policy: Pleasant Grove, UT. | Personal-site LocalBusiness schema: Lehi, UT. |
| Name | Agency VA everywhere on the marketing site. | One podcast title on the personal site: "Co-Founder at Agent VA." |
| Blog | Sitemap and the only article file: one post. | Index shows six titles, and two different dates and read-times for the AI article. |
| Case studies | Footer label "Case Studies." | The href is `/testimonials`. `/case-studies` is a 404. |
| OpenAI | Not stated on any saved page from either host. No certificate was fetched. | If the partnership is claimed somewhere else, it stays their claim. It is not a line on these sites. |
| Qualification | Survey asks hires, headcount, AMS, bilingual. | Discovery-call copy also offers "AVA technology," and the Calendly description only says "virtual support." |

Questions the pages do not answer, and that matter for his offer:

- Which of their two stories would a buyer meet on the call, the VA or the OS? The survey ends in "your perfect VA match." The booking page lists both. **INFERENCE:** the default sale is a person.
- Does $2,349 include one VA, and does $3,449 include a team of 3–10? The pages do not say. Do not fill that in.
- Will he name the repair shop? Their strongest timed story is an unnamed "agency" on X, with 35 impressions. His proof gets weaker if it has to become "a local shop," and that is a permission question, not a copy question.
- Where on the ladder does the build stop out loud? Their page stops at a person merging the record and a licensed person taking the call. That is a cleaner public line than the X post, and it matches his headline. How far an agent should go in a dealership is still his call. This crawl has no dealer example.
- The survey's headcount bands run through 100+. His buyer is about 50 to 200 people, and the question he needs is the job, not the seats. Nothing here prices a credited Job map. Whether he publishes that fee is still open. Their choice was to publish staffing rates and leave the software unpriced.
