# Mad City Integrations

26 October 2026. Prepared for Wil Sensing. Read-only: no forms submitted, no calls booked, no messages sent.

The site is thin. Twelve URLs carry the business. Eight more files are the same screen, H1 "This page is not here." There is no pricing page, no case-study page, and no blog. Anthony Elert's X post is a separate surface. Quotes from it are labeled as X posts. **INFERENCE** marks a conclusion that is not a sentence on the site or in that post.

## Top 5 takeaways

1. **Steal the moment where a person approves the draft.** The custom-build example ends with "You approve the finished draft" and "A useful draft instead of another blank page." https://www.madcityintegrations.com/services/custom-builds That is "Hand off the busywork. Keep the decisions." in a shop task. The homepage treats lead follow-up, a website, and a custom build as three equal services. Wil's offer is one job, then the next rung.

2. **Leave the $1,000 setup and $250 a month on the X post.** No service price appears on any page crawled. `/pricing` is a soft 404. The figure is in Anthony Elert's post about a first client, and the post presents it as that engagement, not as a rate card. https://x.com/Aelert18/status/2104742700058591576 Wil's price is still open. Publishing their first invoice would anchor a dealership lead-nurture retainer he does not sell.

3. **Steal the fit-call sentence that is allowed to be a no.** The calculator page says "Bring last month's leads. We will tell you if a first build is even a good idea." https://www.madcityintegrations.com/calculator His version of the free 30 minutes: bring the job (the PO lines, the credit list), and the call can end without a Job map. The form under that line asks for a name, a business, an email, an optional phone, and a note. It does not ask revenue or headcount.

4. **Put the repair-shop result on the first screen. Their dollar figure is a calculator default.** The calculator opens on sample inputs, labels the result "A monthly figure," and shows $2,946. The terms say estimates are illustrative and that Mad City Integrations does not guarantee revenue, savings, or ROI. https://www.madcityintegrations.com/terms-and-conditions Wil already has a counted result: $217K in missed vendor credits, 11,139 PO lines. Write what that figure includes, the way a careful case study writes a caveat. A slider with made-up defaults does that job worse.

5. **Publish one real job. This site has a labeled fiction, and the X post says the paid system is not proven yet.** Willow & Wok is "a fictional restaurant." The patio text thread is marked "ILLUSTRATIVE EXAMPLE". The post's dealership story is the only client, and it ends with "Now we have to prove it works." Do not borrow the dealership, the daycare, or "one extra car" as proof. The path in the post that Wil should leave is the free build offered to owners he knew. His Job map stays paid.

## Method and coverage

Crawl from `https://www.madcityintegrations.com/`, host `madcityintegrations.com`, max 50. Headless Chrome. 20 text files. The queue finished (`LEFT 0`). No `not-fetched.txt`. One host. No Calendly, no second domain.

The raw homepage HTML is a Vite shell: a `<div id="root"></div>` and a module script, served by Vercel, `last-modified` Thu, 15 Oct 2026. The sentences below are the text Chrome rendered. A curl of the HTML does not contain them outside the meta description.

Saved pages with copy:

- Home, services index, lead lifecycle, online presence, custom builds
- Calculator, about, consultation
- Privacy policy, terms
- Two Willow & Wok menu demos (`/examples/restaurant/before.html`, `after.html`), both `noindex`

Seed paths the crawler always tries, each saved as the same soft 404 ("This page is not here"): `/about-us`, `/pricing`, `/case-studies`, `/work`, `/contact`, `/blog`, `/careers`, `/privacy`. The crawler's soft-404 check looks for an H1 that starts with "404" or the words "page not found" in the first 400 characters. These pages say "This page is not here," so they were counted against the page budget. They are the same screen at different URLs, not duplicates of one final URL, so all eight files were kept. The real privacy page is `/privacy-policy`. There is no `/contact`. The email and phone are in the footer.

No WordPress REST body and no extra sitemap URLs showed up in the queue. **INFERENCE:** the public site, as of this crawl, is the twelve pages above plus the legal pair and the two demos.

## Product

### What they sell

Homepage title: "Mad City Integrations | Leads, online presence & custom AI." Meta description: "Lead lifecycle systems, online presence optimization, and custom AI builds for businesses. Based in Madison, Wisconsin." https://www.madcityintegrations.com/

The services H1 is "Three services. One stronger business." The line under it: "Win more work, improve your online presence, and put repetitive tasks on autopilot." https://www.madcityintegrations.com/services

| Service | Their line | What the page actually lists | URL |
| --- | --- | --- | --- |
| Lead lifecycle system | "The right message, at the right time, every time." | "Text · Phone · Email · Forms." Steps: "Connect your lead sources," "Set the timing and messages," "Respond, book, and follow up." | https://www.madcityintegrations.com/services/lead-lifecycle |
| Online presence optimization | "Get found. Build trust. Turn visits into inquiries." | "Websites · Google Business Profile · SEO · Brand." The page also says "Website redesign" and "Google Business Profile." | https://www.madcityintegrations.com/services/online-presence |
| Custom AI builds | "Automate the work that slows your team down." | "Workflows · Internal tools · AI systems." Steps: "Choose the task to improve," "Build around your tools and rules," "Test it with your team." | https://www.madcityintegrations.com/services/custom-builds |

Lead lifecycle body:

> We connect every lead source, respond with the right message, and follow up through booking and beyond.

Custom builds body:

> We build a system around your process and connect it to the tools you already use. You own the code and data.

The custom-build meta description, which is not repeated as a sentence in the body, adds "when we leave" and "No lock-in": "A system built around a workflow you already run. You own the code and the data when we leave. No lock-in."

The illustrated custom build is three frames: "A customer's project request," "Details organized. Quote drafted." and "You approve the finished draft." Then: "A useful draft instead of another blank page."

No named framework. No autonomy ladder. No package names beyond the three services. Terms describe the work as "consulting, automation, artificial intelligence, website, lead-management, and business-operations services." https://www.madcityintegrations.com/terms-and-conditions

### Price

No service price on the pages crawled. `/pricing` is the soft 404.

Figures that are easy to misread as a fee:

- Calculator defaults, on both the homepage and `/calculator`: weekly leads 28, missed or slow-response rate 22%, old leads or past customers 420, "Share that could be worth a timed follow-up" 6%, average job value $650, close rate on qualified leads 35%, then the label "A monthly figure" and the value $2,946, plus "27" beside "Active leads at risk each month" and "2.1" beside "Timed follow-ups each month." The page calls this "A rough monthly figure from the numbers you enter."
- Willow & Wok menu prices ($9, $11, $12, $18, $19) are dishes on a fictional restaurant demo.
- Terms cap liability for "the public website or a free consultation" at "ONE HUNDRED U.S. DOLLARS ($100)." That is a legal cap, not a fee.

The $1,000 setup and $250 a month are not on the site. They are quoted in the X section.

### Guarantee

The terms refuse one. Section 7, "No Guaranteed Results":

> MCI does not guarantee:
>
> Revenue
> Profit
> Cost savings
> Lead volume
> Conversion rates
> Search rankings
> Appointment volume
> Customer retention
> Productivity gains
> Uptime
> Error-free operation
> A particular return on investment
> Any specific business outcome

The next sentence: "Examples, estimates, projections, assessments, and potential-impact calculations are illustrative and depend on factors outside MCI's control."

Section 6, unless a written client agreement says otherwise: "Outputs should be reviewed by a qualified human before important use," "Clients and users remain responsible for decisions made using an output," and "Automated systems should not be used as the sole basis for high-impact decisions."

### Engagement and deliverables

The public step is a free consultation. Consultation H1: "Free consultation to determine the best fit for you." Meta description: "Book a free consultation with Mad City Integrations to find the first useful AI build for your business." https://www.madcityintegrations.com/consultation

Terms, section on the relationship:

> Submitting a form, communicating with MCI, or booking a consultation does not create a client relationship.
>
> A client relationship begins only when MCI and the client enter into a separate written agreement, statement of work, proposal, or other contract signed or accepted by the appropriate parties.
>
> The scope, pricing, timeline, deliverables, responsibilities, payment terms, intellectual-property rights, confidentiality obligations, warranties, and termination rights for paid services will be governed by the applicable client agreement.

Ownership in the terms is not the marketing sentence. "Ownership of client-specific deliverables is governed by the applicable written client agreement." The custom-build page says "You own the code and data." Both sentences are on the site. A buyer cannot tell from the marketing page what the contract will say.

There is no list of what the buyer holds at the end of a consultation, and no sentence that a discovery fee is credited toward a build.

### Who it is for

The words they use: "businesses," and on the about page, "Wisconsin businesses, from Madison." The about H1 is "Two builders in Madison." https://www.madcityintegrations.com/about

> Anthony works with owners on the business side: where time leaks, which conversations are worth having, and how a new system should feel to the person using it. He wants practical AI to give people their day back.

> Quinton designs and ships the systems. He is based in Wisconsin and cares about tools people can actually run — with a human in the loop, and with the local economy in mind.

Anthony Elert is labeled CEO. Quinton Bush is labeled CTO. Footer: "© 2026 Mad City Integrations LLC," "Madison, Wisconsin," `contact@madcityintegrations.com`, `+1 (608) 471-6833`.

No page names a dealership, an equipment dealer, a trade, a headcount, or Idaho. The only industries in the examples are a fictional patio quote ("Madison Service Co." / "a quote for a patio this spring") and a fictional restaurant. The patio block is labeled "ILLUSTRATIVE EXAMPLE". The online-presence page says "Willow & Wok is a fictional restaurant."

**INFERENCE:** the copy is written for a local owner in the Madison area who wants more booked work or less repetitive work. It is not written for a 50–200 person dealer group, and it does not say which of the three services that owner should buy first. The consultation meta says "the first useful AI build." The homepage form says "We'll help you choose the right service," and the right service can be a website.

### Proof

No case study. `/case-studies` and `/work` are the soft 404. The proof-shaped objects on the site are demos, and the site says so.

| Object | Named client? | What the page says it is | A result number? |
| --- | --- | --- | --- |
| Patio text thread, home and lead-lifecycle | No. "Madison Service Co." | "ILLUSTRATIVE EXAMPLE". A quote request, a reply, "Lead saved. A follow-up is ready if they go quiet." | No |
| Willow & Wok before/after | No | "Willow & Wok is a fictional restaurant." Menu demos are `noindex`. | Menu prices only |
| Custom-build frames | No | "ILLUSTRATIVE EXAMPLE". A request becomes a drafted quote a person approves. | No |
| Calculator | No | "A rough monthly figure from the numbers you enter." | $2,946 from the default inputs, which the terms call illustrative |

The X post is the only place a client is described. It is not a case study with a result. See the X section.

## Sales and marketing

### Headlines worth keeping

- "Win more work. Get more time back." https://www.madcityintegrations.com/
- "Less repetitive work. More time back." https://www.madcityintegrations.com/services/custom-builds
- "A useful draft instead of another blank page." Same page.
- "We will tell you if a first build is even a good idea." https://www.madcityintegrations.com/calculator
- "with a human in the loop" https://www.madcityintegrations.com/about

Voice: short, second person, owner-facing, Madison-specific. The failed alternative is unnamed. They do not scold the reader for having bought the wrong tools. The about page is two short bios, not a manifesto.

### Funnel

One action, repeated: "Book a free consultation" or "Book a consultation." On the pages crawled it is a form, not an embedded calendar.

The form is on the homepage and on `/consultation`. Fields extracted, not submitted:

- `website` (no label, not required). **INFERENCE:** a honeypot. It is not described on the page.
- Name, required, placeholder "Your name"
- Business name, required
- Email, required
- Phone, optional, placeholder "(608) 555-0100"
- Notes, optional, placeholder "What would you like help with?"
- Checkbox `communicationConsent`, not required

The consent text is the long SMS block: non-marketing calls and texts about the inquiry, consultation scheduling, and follow-up, "which may be sent using automated technology," "Consent is not a condition of purchase," STOP / HELP. A second line says submitting means Mad City Integrations LLC may use the information to respond, as described in the privacy policy.

There is no revenue question, no headcount question, no industry list, and no "what do you need?" menu. The note field is the qualifier.

Privacy policy says they may use Google Calendar, and the SMS section includes "A reminder to complete consultation booking." https://www.madcityintegrations.com/privacy-policy We did not submit the form, so this crawl did not see a scheduler. **INFERENCE:** the public step is the inquiry, and a booking step can follow. The page a visitor can read is the form.

No ebook, no newsletter field, no blog. The calculator is the ungated tool: "Free. No email required." It ends on the same consultation button, plus "Talk through the real numbers."

### Trust, in the order they placed it

Homepage order: three services, one illustrated text thread, the consultation form, the calculator with the $2,946 default, then "Built in Madison. We're Anthony and Quinton." Logos, reviews, and client names do not appear.

The long pages are the legal ones. The privacy policy names the processors they use to run the site and the business: "Website hosting and deployment providers, including Vercel," "Customer relationship management and communications providers, including GoHighLevel," "Google Workspace and Google Calendar." It also says "We do not currently use advertising pixels or behavioral advertising tools" and "Please do not submit sensitive personal information, protected health information, financial account information, passwords, government identification numbers, or confidential client data through the public consultation form."

GoHighLevel is in that vendor list. The service pages do not say they install GoHighLevel, or any other named product, for a client.

**INFERENCE:** the trust stack they actually built is two named people, a local phone number, and careful SMS and privacy copy. The missing piece is a job with a result. For a two-person firm that is an honest gap. Filling it with the fictional restaurant would make the gap look decorated.

### Content

No articles. The online-presence page is a before/after of a made-up menu. That is the portfolio. There is no field note.

## What Wil should steal or adapt

1. **Fit call.** Use their no. "We will tell you if a first build is even a good idea." Keep his call at 30 minutes, low prep, one note about the job. Their form is the right weight. The SMS consent block is their legal text for their LLC. He needs his own if he texts. He should not paste theirs.

2. **Job map.** They do not sell a paid map, and they do not say the buyer keeps an artifact. The custom-build steps are still the contents of a map: the task, the tools the business already uses, the rules, and a test with the team. Add the sentence they skip: the map is paid, and the fee comes off the build. Their terms already assume the real scope lives in a written agreement. The map is that agreement's first pages. A strong first job on his side already has an owner, a file (11,139 PO lines), and a definition of a correct result (a missed vendor credit). Their patio demo has none of the three.

3. **Build.** "You approve the finished draft" is the build's exit. For the repair shop, the person approves the credit before it is claimed. "You own the code and data" is the sentence to put in the agreement, because their own terms say the agreement is what governs ownership. The meta line "No lock-in" is the same instinct. The body never defines it.

4. **Autonomy ladder.** Quinton's bio already says "a human in the loop." The terms say a person reviews the output before important use. That is the top of Wil's ladder (the person keeps the exceptions), said as a legal condition rather than as a product. He can say it as the product. Their three services are not the rungs. Lead follow-up and a new website are different businesses.

5. **Proof, on the first screen.** They were willing to put a number above the fold. Theirs is a default. His is $217K and 11,139 lines, with a sentence on what "missed vendor credits" includes and what the person still checks. The terms' refusal to guarantee ROI is the reason not to print their calculator as if it were a promise, and not to print "if this finds one more credit it pays for itself" as a guarantee. The X post's "one extra car" line is that kind of sentence. It is a hypothesis. See below.

## What not to copy, and why

- **The three-service menu.** Lead lifecycle plus websites, Google Business Profile, SEO, and brand is a local marketing shop that also builds automations. Wil's headline is busywork inside a job the company already has. "Get found" is a different sale.
- **The dealership lead-nurture retainer, including the X price.** Different job, different buyer math, and the post says they still have to prove it. Putting $1,000 and $250 on his page would also invent a rate he has not chosen.
- **Free implementation as the way in.** The post says they "offered to build something for free" and that this produced a daycare database reactivation. That is how they got a first story. His front door is a paid Job map.
- **Fictional before/after as proof.** A restaurant menu redesign, labeled fictional, shows web design. It does not show a job removed.
- **The calculator as a lead magnet.** "Free. No email required" is a clean offer. The number it leads with ($2,946, $650 average job) will be read as a result by someone who does not read the terms. He has a real number. He does not need a toy one.
- **A two-founder "we" and a bench he does not have.** The about page is Anthony and Quinton. Wil is one person. Writing "we" to sound like a firm makes the shop story look smaller.
- **Their guarantee vacuum, pasted in as his promise.** The terms are doing legal work. His commercial sentence can still name the unit he will count (credits found, lines matched, exceptions a person still handles) without promising a percentage.
- **Madison, Wisconsin, as the geography.** The local specificity is the right habit. The place is theirs. His pages are Idaho and eastern Washington because that is where he is, not because this crawl teaches local SEO.

## X evidence

One post, Anthony Elert, `@Aelert18`, 29 September 2026. https://x.com/Aelert18/status/2104742700058591576

This is an X post, not website copy. The site does not mention a price, a dealership, a daycare, or a client count. The post does not mention Quinton Bush, Madison, the three service names, or the calculator.

The price and the client, from the post:

> We finally landed our first paying AI agency client.
>
> $1,000 setup + $250/month.

> The client is a car dealership spending roughly $10,000/month on inbound leads.
>
> The problem isn’t getting leads. It’s what happens after they come in.
>
> A lot of them aren’t being followed up with effectively, so we’re building a lead nurturing system designed to pick up sales that otherwise would’ve fallen through the cracks.
>
> If the system helps close one extra car, it can already pay for itself. Everything beyond that is upside.

That is a lead-nurture build. It matches the website's first service in subject (follow-up after an inquiry) and it is more specific than the website, which never names an industry. The payback line is a hypothesis ("if," "can"). The terms on the site say they do not guarantee revenue, conversion, or ROI. The post and the terms can both be true. They are not the same claim.

What the post says they did before that invoice:

> Before selling these systems, we implemented them into our own business and tested them constantly.
>
> AI receptionist. SMS agent. Email agent. Lead follow-up workflows.

> We reached out to basically every business owner we knew and offered to build something for free.
>
> That led to a database reactivation campaign for a daycare company.

> A few more conversations later, we landed our first paying client.

And the status of the proof:

> We’re still extremely early. One client doesn’t mean we’ve made it.
>
> But after months of work with basically nothing tangible to show for it, being able to say someone is finally paying us for something we built feels damn good.
>
> Now we have to prove it works.

The post also says the first four months included "LLC, branding, website, offers, payments, systems." The homepage asset `last-modified` is 15 October 2026, after the 29 September post. **INFERENCE:** the site a buyer sees now was updated after that post. The crawl cannot say which sentences were already there on 29 September.

The post says "we" and does not name Quinton. The about page names Anthony Elert and Quinton Bush. This teardown does not decide who "we" is.

Nothing in the post is a measured close, a car count, or a statement that the $250 month has been collected more than once. "And for us, the better this performs, the stronger the case study and the more confidently we can price future clients" is a plan to raise prices later, not a second price.

## Open questions and contradictions

| Topic | One surface | The other |
| --- | --- | --- |
| Price | No service price on the site. `/pricing` is a 404. | X post: "$1,000 setup + $250/month" for the first paying client. |
| Client | No named client. Demos are labeled illustrative or fictional. | X post: a car dealership, plus an earlier free daycare reactivation. The dealership is not named. |
| Proof | Terms: examples and calculations are illustrative. No guaranteed outcome. | X post: "If the system helps close one extra car, it can already pay for itself." Then: "Now we have to prove it works." |
| What the consult is for | Consultation meta: "the first useful AI build." | Homepage form: "We'll help you choose the right service." The services include a website and SEO. |
| Ownership | Custom-build body: "You own the code and data." Meta adds "No lock-in." | Terms: ownership of client deliverables "is governed by the applicable written client agreement." |
| Who "we" is | About page: Anthony Elert, CEO, and Quinton Bush, CTO. | The X post is from Anthony's account, uses "we," and does not name Quinton. |
| Booking | The button says "Book a free consultation." The control on the page is a form. | Privacy policy lists Google Calendar and "a reminder to complete consultation booking." The scheduler was not opened. |

- The site never says the consultation fee, because the consultation is free, and it never says a later discovery fee comes off the build. Whether Wil publishes a Job map price or only the credit ("this fee comes off the build") is still his call. This site does not demonstrate either.
- Will the repair shop let him name it? This firm has not named its dealership. His number gets weaker if it has to become "a local shop." That is a permission question.
- The public form tells people not to send confidential client data. His Job map needs PO lines. The files belong after the fit call, under whatever terms he uses, not in the note field.
- Private equity. The site and the post do not sell to it, and there is no PE section in this teardown. The privacy policy's ordinary line about a merger or sale of assets is a disclosure clause, not an offer.

## Where the raw pages are

`research/ai-specialists/mad-city-integrations/pages/`. `crawl-log.tsv` is the URL list. Quotes above were checked against those files and against `research/ai-specialists/_x/posts.md` for the 29 September 2026 post.
