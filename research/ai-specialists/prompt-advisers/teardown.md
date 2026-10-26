# Prompt Advisers teardown

Prepared for Wil Sensing. Sources fetched 26 October 2026. Read-only: no forms submitted, no call booked, no scan run, no account created, no cookie banner accepted.

Wil Sensing is a one-person consultancy that hands off busywork at local and mid-sized businesses (50–200 people: dealerships, equipment dealers, trades; Idaho and eastern Washington). Offer, in order: a free 30-minute fit call, a paid Job map discovery credited toward the build, the build, then ongoing work that moves each job up an autonomy ladder (tool adoption, then headless, then governed, then agent-to-agent, with humans on the exceptions). Headline: "Hand off the busywork. Keep the decisions." Proof on hand: $217K in missed vendor credits found at a local auto repair shop by matching 11,139 PO lines. Pricing is undecided.

Every important claim below is quoted from a page saved under `research/ai-specialists/prompt-advisers/pages/`, or from the X post in `research/ai-specialists/_x/posts.md`. **INFERENCE** marks a conclusion that is not a sentence on those surfaces. Prompt Advisers publishes no client roster. Member wins are labeled as member wins.

## Top 5 takeaways

1. **Steal the free call that can say no. Leave the 15-minute scope-on-the-spot.** The audit page promises a call with no pitch, two or three wins the buyer can ship whether or not they hire, and a straight no. That is the right posture for Wil's fit call. Theirs is fifteen minutes, and the consulting FAQ says they scope the paid work on that call. Wil's next step is a paid Job map, not a price. Source: https://www.promptadvisers.com/free-audit and https://www.promptadvisers.com/consulting

2. **Steal "Clean the back of house" for the Job map. Leave the $15k sprint.** Consulting will not automate until the data, the workflow, the connections between systems, and the compliance rules are in order. That sequence is a Job map. Their advisory sprint is "FROM $15K" and "a plan it can run without us." Nothing on the page says that fee is credited toward a later build. Source: https://www.promptadvisers.com/consulting

3. **Steal "The engagement ends when it works" for the build. Leave the $50k floor.** Implementation is "We build alongside your people until the workflow ships and holds under real load." The card is "ENTERPRISE, $50K AND UP". The fractional lead is "MONTHLY RETAINER" with no dollar amount. Wil's buyer is not that card. Source: https://www.promptadvisers.com/consulting

4. **Adapt phase 04, Autonomy, as ladder language. Leave train-the-trainer as the finish.** Workshops run Foundations, Fluency, Workflows, Autonomy. Autonomy is "Delegation, review, and the guardrails that let agents run without becoming a liability. The team leaves able to teach the next hire." That is a training arc that ends. Wil's ladder continues after the team can use the tool. Source: https://www.promptadvisers.com/workshops

5. **Leave the proof, and do not import the X stress-test.** The homepage proof is 86.1k YouTube subscribers, 5 O'Reilly courses, 1k+ community members, and 500+ "BUSINESSES ADVISED". The reviews talk about prompts and a GPT. `/case-studies` is a 404. The X post says the team stress-tests client infrastructure with uncensored models. The security page says nothing is logged into and no payloads are sent. Those are not the same claim. Source: https://www.promptadvisers.com/ and https://www.promptadvisers.com/security

## Method and coverage

The marketing site is a Next.js app on Vercel (`www.promptadvisers.com`). Public text was taken with headless Chrome. `sitemap.xml` lists 43 URLs. The first crawl followed that sitemap, same-host links, and the crawler's usual guesses. `https://www.promptadvisers.com/llms.txt` is not in the sitemap and was fetched on its own. `robots.txt` allows `/` and points at the sitemap. There is no WordPress REST API.

43 page files came from that first crawl (`pages/crawl-log-1.tsv`): home, consulting, workshops, security, community, free audit, about, media, blog index, contact, privacy, terms, the internal Google app disclosure, and 30 blog posts. Soft guesses: `/services` ends on `/consulting`, `/about-us` and `/careers` end on `/about`, `/pricing`, `/case-studies`, `/work`, and `/privacy` return 404. The real privacy URL is `/privacy-policy`.

Two header lines record the last request, not the first. `about.txt` was written again when `/careers` redirected to `/about`. `consulting.txt` was written again when `/services` redirected to `/consulting`. The body is the about page and the consulting page. Final URL and canonical are those pages.

The crawler names a file from the path only. A later pass overwrote `index.txt` three times (Lockpick home, then the testimonials wall, then the living-course site). The Prompt Advisers homepage was fetched again and put back in `index.txt`. The other homepages are saved under their own names: `lockpick-home.txt`, `ea-testimonials.txt`, `ea-claudecodelivingcourse.txt`. `llms.txt` was saved from a one-page crawl (the crawler had named it `llms.txt.txt`).

Second hosts, each its own crawl, commercial pages only:

- `lockpick.app` (`crawl-log-2.tsv`): pricing, `pricing.md`, methodology, docs index, Claude connector, AI-facts page, guides index, checks index, and the sign-in walls at `/login`, `/signup`, and `/app/billing`. The docs tree beyond that index was left. No scan was submitted. The sign-in pages were saved and not passed.
- `skool.com` (`crawl-log-3.tsv`): the Early AI-dopters about page and Mark Kashef's public profile. `not-fetched.txt` is this run's leftover. It is mostly member profiles, other Skool groups, and signup. The one pricing URL in that list, the plans page, was fetched afterward (`earlyaidopters-plans.txt`). Signup was not used.
- `ea-testimonials.vercel.app` and `ea-claudecodelivingcourse.vercel.app` (`crawl-log-4.tsv`, which is also the current `crawl-log.tsv`): the wall of wins and the living-course sales page.
- `ea-apps.vercel.app`: the member portal. It is a sign-in wall. No account was created.

Not crawled on purpose: Calendly (the audit page does not expose a calendar until the form is submitted; the privacy policy names Calendly), O'Reilly, YouTube, Entrepreneur, Wired, CNBC, Pinecone, Microsoft Learn, LinkedIn, Facebook, the Lockpick scan field, Lockpick blog and the rest of the docs, Skool member profiles, and other Skool communities. Blog post bodies were saved. They are tool notes. A search of the saved pages for "case study," "private equity," and "portfolio company" does not find a client study.

Community-page counters rendered as `0+` members, `0%` stay, `0` lessons, and `0` coaches. The same page's meta description, and the homepage body, state the figures. **INFERENCE:** the zeros are a count-up that had not run, not a claim that the community is empty.

## Product

### What they sell

The homepage meta description: "Enterprise AI consulting, workshops, and team bootcamps on Claude Code and Codex. We install the systems, then train the people who run them." H1: "MAKE YOUR TEAM DANGEROUS WITH AI." Kicker: "THE AI CONSULTANCY THAT TEACHES". https://www.promptadvisers.com/

Four offers sit on that page. Advisory and audits links to the same consulting URL as enterprise consulting.

| Offer | Their line | Price as printed | URL |
| --- | --- | --- | --- |
| Enterprise consulting | "Hands-on AI strategy and implementation for teams that need results, not slideware." | See the four cards below | https://www.promptadvisers.com/consulting |
| Workshops and bootcamps | "Your real work. One workspace. A team that ships with Claude Code and Codex." | No dollar amount | https://www.promptadvisers.com/workshops |
| Advisory and audits | "A senior operator on call. Systems audits, compliance readiness, a map of what to automate first." | The consulting cards | https://www.promptadvisers.com/consulting |
| Security and compliance | "What your AI build left open, found from the outside before someone else finds it." | "FROM $20K" on the consulting page | https://www.promptadvisers.com/security |

`llms.txt` describes two registers, consulting and team training, and does not mention security, the community, or Lockpick. The visible site sells all of those. https://www.promptadvisers.com/llms.txt

The legal name on the app page is "datascience2go Inc." Terms are governed by "the laws of the Province of Ontario and the federal laws of Canada applicable in it." The app itself is internal Google tooling, not a client product. https://www.promptadvisers.com/app and https://www.promptadvisers.com/terms-and-conditions

### Consulting cards and the price language

https://www.promptadvisers.com/consulting

- Advisory sprint. "A short, intense reconnaissance. We audit the back of house, map what to automate first, and hand your team a plan it can run without us." **FROM $15K**
- Implementation program. "We build alongside your people until the workflow ships and holds under real load. The engagement ends when it works, not when the deck is done." **ENTERPRISE, $50K AND UP**
- Fractional AI lead. "A senior operator on call. Compliance readiness, systems that talk to each other, and the judgment to know what not to build." **MONTHLY RETAINER**
- Security and compliance review. "FROM $20K"

FAQ on the same page:

> Enterprise engagements run from $15k to $50k and up, depending on scope. Advisory is a monthly retainer. You will know the number before any work begins.

The $15k card is the sprint. The FAQ calls advisory the retainer. The retainer card has no number. Both wordings are on the page. They are not merged here.

Workshops FAQ, no number: "It is scoped to your team, so pricing depends on headcount, format, and depth. A free fifteen minute call gives you a firm number and a plan. Most engagements run as a fixed program rather than an hourly rate, so you know the full cost before we start." https://www.promptadvisers.com/workshops

No outcome guarantee on the consulting or workshop pages. The security page limits what a review is:

> A review tells you what we found in what we checked. It is not a certificate and it is not a full penetration test, and we will say so in the report.

Terms: "Consulting engagements are governed by separately signed agreements." Content on the site "does not create a consulting relationship."

### How an engagement moves

Consulting method, same page:

> Clean the back of house.
>
> Before a single automation, we fix the data and the workflow underneath it.

Then "Make the systems talk." Then "Know what compliance means for you." Then "Then, and only then, automate." The closer under that step: "Agents go on top of a house in order, never in place of one."

Mark Kashef, quoted on that page as "IN ENTREPRENEUR": "My advice usually boils down to three sentences. Clean your back of house. Make sure your systems can talk to each other. And understand what it means for you to be compliant."

FAQ: "With a free fifteen-minute call. We map where AI actually helps you and where it will not, then scope the work on the spot if we are a fit." "Discovery this week, scoping the next. Implementation timelines depend on the state of your back of house, which is the first thing we audit." "Primarily Claude Code and Codex, wired into the systems you already run. We are tool-agnostic where it matters and opinionated where it counts."

The audit page is the call, not a written audit:

> FIFTEEN MINUTES. NO PITCH.
>
> We map where AI actually helps your business and, just as usefully, where it will not. You leave with two or three concrete wins you can ship this quarter, whether we end up working together or not. If Prompt Advisers is not the right fit, we will say so and point you somewhere better.

https://www.promptadvisers.com/free-audit

**INFERENCE:** discovery, as published, is the free call plus whatever they audit once hired. There is no paid artifact the buyer keeps if they stop, and no sentence that credits a discovery fee toward the build.

### Workshops

H1: "TURN YOUR TEAM INTO SHIPPERS." "No fixed calendar. Scoped to your company. Done when your team ships." Four phases. Foundations is "Claude Code and Codex as an operating system, not a chatbot." Fluency pulls tasks "from your actual backlog." Workflows "wire the tools into the work your team already does, from intake to review." Autonomy is the guardrails line in takeaway 4. "Some teams run them in a few intensive weeks, others across a quarter." https://www.promptadvisers.com/workshops

Formats: a half-day executive briefing, a team bootcamp, a non-technical track for "Operations, marketing, and finance," and train-the-trainer ("We leave an internal champion who can onboard every future hire without us"). A menu of eight tracks is "fair game," plus five packaged tracks (AI fluency, a Claude Code bootcamp for engineers, AI strategy for leadership, an agent engineering masterclass, building products on Claude). The page says there is "no canned curriculum."

Who teaches: "Mark Kashef, founder of Prompt Advisers and the instructor behind five live O'Reilly courses on Claude Code and agentic workflows. He holds a master's in AI from Queen's University and has advised hundreds of businesses. Your team learns from him directly, not a junior facilitator."

The course JSON on that page sets `"courseWorkload":"PT8H"`. The visible copy says weeks or a quarter. Both are on the page.

Three O'Reilly titles are named: "Claude Code for Everyone," "Claude Cowork for Everyone," and "OpenClaw, Claude Cowork, and Claude Code Compared." The stat and the FAQ say five. The other two titles are not on this page.

### Security, and Lockpick

Security H1: "YOU SHIPPED IT WITH AI. KNOW WHAT YOU LEFT OPEN."

> We look from the outside, the way a stranger, a bot or an attacker would. Nothing is logged into, no payloads are sent, no forms are filled.

What they look at: the public surface (headers, framing, transport), dependencies in the client bundle, the email domain (SPF, DKIM, DMARC), and the heading "YOUR AI SURFACE" ("Agents, skills, MCP servers and the repos behind them"). https://www.promptadvisers.com/security

The same page sends the free check to Lockpick: "Antivirus for vibe-coded apps, websites, skills and repos. Paste a URL and get a score in about ten seconds, no account needed. The enterprise review below is the same lens, run by hand across a whole estate instead of one page." The homepage says "We built Lockpick" The Lockpick pages that were saved do not name Prompt Advisers or Mark Kashef. **INFERENCE:** the consultancy site claims the product; the product site, on the pages crawled, stands alone.

Lockpick prices, in US dollars. The rendered pricing card is on the yearly toggle: Free "$0 /month"; Deep "$15.83 /month" and "Billed yearly: $190"; Master Key "From $40.83 /month" and "From $490 billed yearly · Not on sale yet"; teams "Priced to your sites and team"; "10 extra Pulse scans for US$5." https://www.lockpick.app/pricing

`pricing.md` and the AI-facts page state the monthly figure the card does not show while yearly is selected: Deep "$19 a month" or "$190 a year"; Master Key "From $49 a month" or "From $490 a year". https://www.lockpick.app/pricing.md and https://www.lockpick.app/ai-info

Methodology: "Neither one changes anything on your site." Pulse is "at most 10 requests." Deep needs proof of ownership and is "the way a determined attacker would," up to 30 pages. The pricing FAQ: "They never sign in, submit forms or change anything." Master Key, still "Coming soon," "signs in to your app with two test accounts." That is a different product from today's Pulse and Deep, and it is not the same sentence as the X post.

Login, signup, and billing are sign-in walls. They were not passed.

### Community

On the consultancy site the community has no dollar price. Homepage: "Early AI-dopters is where entrepreneurs and business owners learn to run their companies on Claude Code and Codex, with direct access to Mark, Taha, and twelve coaches." "1,000+ MEMBERS. 92% STAY." The community page repeats the twelve coaches, "across Claude Code, n8n, security, and sales," a living course of "Six modules and sixty lessons," and "the ClaudeClaw agentic OS." Closer: "Cancel anytime." https://www.promptadvisers.com/community

The price is on Skool. The about page leads with "$43/month" and "1.1k members". The plans page is three tiers:

- Standard, "$43/month." "Master Claude Code & Codex."
- Premium, "$77/month." "Get Everything in Standard," plus "Get 1:1 Coaching & Office Hours" and "Deploy Your Agentic OS."
- VIP, "$777/year." "Save $147 Every Year," plus "Access Leads From Our Agency" and "Deploy Your Enterprise OS."

https://www.skool.com/earlyaidopters/about and https://www.skool.com/earlyaidopters/plans?src=join

The about page also says: "Master's in AI, ex-Amazon, O'Reilly instructor, $2M+ in client work with my AI agency." And: "If it's not for you within 7 days, message me for a FULL refund." The Prompt Advisers about page does not say ex-Amazon, does not say $2M, and does not state a refund.

The living-course site sells the same membership at the Premium number and calls it complete: "BUNDLED · $77/MO", "included in your $77/mo membership", "1,400+ MEMBERS BUILDING", then "$77/mo" and "ALL-IN, NO UPSELL" on the next lines, and "Three Claude Code coaches". https://ea-claudecodelivingcourse.vercel.app/

**INFERENCE:** $43, $77, and $777 are three Skool tiers, and the course site is advertising the $77 tier as if it were the whole price. The consultancy site advertises none of the three.

EA Apps (`ea-apps.vercel.app`) is "ONE LOGIN. YOUR WHOLE MEMBERSHIP." The saved page is a sign-in form. It was not used.

### Who it is for

Words on the consultancy pages: enterprise, teams, "Operations, marketing, and finance", "entrepreneurs and business owners", and "entrepreneurs, operators, and business owners". Workshops JSON says "Worldwide." No page gives a headcount band, a revenue band, or a region for the buyer.

Taha El Harti's bio is his own history, not a client list: "Five years building production AI systems, first for construction and home-services companies." "Three years implementing AI across insurance, from the first intake to the decision at the end." "Where Mark teaches the room, Taha builds the systems behind it." "If it reaches a client, it cleared him first." https://www.promptadvisers.com/about

The about timeline: "2022 Prompt Advisers, founded days after ChatGPT launched." "2026 Over five hundred businesses advised and counting. Thinking in AI, the forthcoming book." The homepage stat is 500+ "BUSINESSES ADVISED". The YouTube figure on this page is "80,000" and "80,000 strong". The homepage stat is "86.1k".

Nothing on the pages crawled addresses a dealership, an equipment dealer, a trade, or a 50–200 person firm in Idaho or eastern Washington. **INFERENCE:** Wil's buyer is not the buyer these pages are written for. The nearest industry words are Taha's background in construction, home services, and insurance, and those words are not attached to a named company.

### Proof

There is no case-study library. `/case-studies` is a 404. The proof on the consultancy site is a stat row, a press belt, and reviews.

The homepage stat row pairs 86.1k with "YOUTUBE SUBSCRIBERS", 5 with "O'REILLY LIVE COURSES", 1k+ with "COMMUNITY MEMBERS", and 500+ with "BUSINESSES ADVISED". https://www.promptadvisers.com/

The reviews are labeled "VERIFIED CLIENT REVIEW". Two first names appear, Kathy and Paul. The work they describe is prompt engineering, explanations, and "a superb GPT tool for viral content ideas." No company, no workflow in an operating business, and no dollar result. The belt repeats the same quotes. **INFERENCE:** this reads as marketplace-style prompt work, not an enterprise implementation library. The pages do not say where the reviews were collected.

Media page headlines they print, without the articles themselves: Entrepreneur, "I Built a 7-Figure Business Teaching People How to Engineer AI Prompts". Wired, "On who's to blame when AI agents screw up." CNBC, "On how operators put AI to work." Pinecone, "Contributor on retrieval and practical AI systems." https://www.promptadvisers.com/media

The wall of wins is explicit: "Not testimonials we wrote. Results members posted themselves." https://www.promptadvisers.com/community and https://ea-testimonials.vercel.app/

Those posts are members reporting their own sales and builds. Examples the community page quotes: Mirza I. in Frankfurt, "Closed my first high-ticket deal today, totaling €70k"; Drew T. in Birmingham, AL, "25k fixed plus 8.3k/month for a Business OS build"; Fabienne W., "9k for my client in 7 days"; Tanya S., "a 15k AI training win"; Kevin J. in Leicester, "clean ERP uploads for a software client." The full wall adds more posts in the same shape. One of them is Miguel Simon, Hamilton, ON: "Secured my first contract, automating the quoting process for a septic-system company." That is a member's contract. It is not labeled as a Prompt Advisers engagement. No post on the wall is.

**INFERENCE:** Wil's $217K and 11,139 PO lines is a kind of proof this site does not publish. Copying the 500+ "BUSINESSES ADVISED" line without one named operating result would make his proof worse.

## Sales and marketing

### Headlines worth keeping in view

> Consulting is teaching.
>
> Teaching is proof.
>
> And we prove it in public, every week.

https://www.promptadvisers.com/

"STRATEGY YOU CAN SHIP, NOT SLIDEWARE." https://www.promptadvisers.com/consulting

"FIFTEEN MINUTES. NO PITCH." https://www.promptadvisers.com/free-audit

"We ship proof, not slideware." https://www.promptadvisers.com/about

"MAKE YOUR TEAM DANGEROUS WITH AI" is the H1. It is a team-status line. It is a poor fit for an owner who wants busywork off the desk and the decisions kept.

### Funnel

Almost every primary button is "BOOK YOUR FREE 15-MINUTE CALL" or "FREE 15-MINUTE CALL," and it goes to `/free-audit`. The audit form, extracted and not submitted, asks what to look at:

- Where AI fits in my business
- Training my team on Claude Code
- A build I want scoped
- Something is already broken

Then name and work email. A field labeled "Website" is in the form. The button is "SEE AVAILABLE TIMES," with "SKIP TO THE CALENDAR." No calendar and no Calendly URL rendered. The privacy policy says booking "happens through Calendly." https://www.promptadvisers.com/privacy-policy

Contact and the workshops page share a note form: name, work email, company, interest, message. The visible interest value is "Enterprise consulting." The placeholder is "What are you trying to build, and by when?" The saved form extract has a button, not a select, so the other interest choices are not in the page text. Contact meta description: "We read every message and reply within two business days." The contact body does not repeat that sentence. It does publish "MARK@PROMPTADVISERS.COM." https://www.promptadvisers.com/contact

The community path leaves the site: "JOIN ON SKOOL" goes to `skool.com/earlyaidopters`. Lockpick's path is "SCAN YOUR SITE FREE" at `lockpick.app`. Speaking is "ENQUIRE ABOUT A DATE" on the media page, which returns to the same free-call button.

### Lead magnet and content

The free offers are the 15-minute call, the Lockpick homepage check, the YouTube channel, and the blog. There is no ebook. The blog index is thirty tool and model notes (Claude skills, an OpenCode breach, GPT and Claude setup), each a few minutes' read, dated from June through 23 October 2026. The index closer: "These notes are a glimpse. The full breakdowns, weekly modules, and the working systems live inside the community." https://www.promptadvisers.com/blog

**INFERENCE:** the publishing machine sells the community and the personal brand. It is not a field note from a client job. A one-person practice does not need a weekly model-review blog.

### Trust and tone

Trust on the homepage is the stat row, the review marquee, and a press belt whose visible words are "LEARN" and "PINECONE." The media page's meta description lists "Entrepreneur, O'Reilly, CNBC, Microsoft Learn, Pinecone." The visible media body also names Wired, "RYAN DOSER · YOUTUBE," and "LEADING AI AGENTS," and prints four blurbs. Those articles were not fetched. The about page adds a master's from Queen's, a decade in data science, a finance background, and the co-founder. The community page adds a sold-out members' mastermind: Berlin, 22–24 May, betahaus Kreuzberg, 30 seats, "sold out."

Lines worth studying, because they say what the buyer holds:

> The engagement ends when it works, not when the deck is done.

> Agents go on top of a house in order, never in place of one.

> If Prompt Advisers is not the right fit, we will say so and point you somewhere better.

## What Wil should steal or adapt

1. **Fit call.** Use the audit page's bargain: a short call, a map of where AI helps and where it will not, two or three wins the buyer can ship anyway, and a willingness to say no. Keep Wil's 30 minutes. Do not scope the build on that call. https://www.promptadvisers.com/free-audit

2. **Job map.** Use the consulting order: clean the data and the workflow, make the systems talk, name the rules that apply, and only then automate. Put that sequence in the paid Job map, and say the fee is credited toward the build. Their sprint hands over "a plan it can run without us" and does not say the fee comes off the next invoice. https://www.promptadvisers.com/consulting

3. **Build.** "We build alongside your people" and "The engagement ends when it works, not when the deck is done." are the build, in their words. Wil can use the standard without the $50k enterprise floor. The non-technical line is useful: "Most of the people we train have never written code. The point is to make Claude Code and Codex usable by the people who own the work." For Wil, the people who own the work are the service writer, the parts counter, and the office, and the tool does not have to be Claude Code. https://www.promptadvisers.com/consulting

4. **Autonomy ladder.** Foundations, Fluency, Workflows, Autonomy is a public way to say the ladder. Map Fluency to tool adoption, Workflows to the work the person already does, and Autonomy's "Delegation, review, and guardrails" to governed work with a person on the exceptions. Stop where they stop only if the engagement is a training. Wil's ladder has another rung after the team can teach the next hire. https://www.promptadvisers.com/workshops

## What not to copy, and why

- **The proof.** 500+ "BUSINESSES ADVISED", a YouTube count, and reviews about prompts do not help an owner decide. Wil already has a shop number. Publishing the audience instead of the number would hide it.
- **The community as a second business.** The Skool about page says it is "For consultants, operators, and builders done just watching tutorials." The meta description says "Build it, sell it, or run it at work." The VIP tier includes "Access Leads From Our Agency." That is a school for people who sell AI. Wil is not opening one.
- **A price list that does not agree with itself.** Sprint versus retainer, $15.83 versus $19, $43 versus $77 versus "ALL-IN, NO UPSELL", five O'Reilly courses versus three named titles, 80,000 subscribers versus 86.1k, twelve coaches versus three. Wil's pricing is still undecided. When he prints a number, one surface should be enough to quote it.
- **The H1.** "MAKE YOUR TEAM DANGEROUS WITH AI." speaks to a team that wants status. Wil's line keeps the owner in the decisions.
- **Lockpick as a product line.** A free scanner plus a $20k human review is a real offer for teams who shipped AI code faster than they reviewed it. It is not the offer for a dealer or a shop, and the X post's version of the work is not what the security page describes.
- **Scoping on the free call.** The FAQ says they "scope the work on the spot if we are a fit." That skips the paid map. Wil's map is the thing the buyer holds before the build.
- **The weekly tool blog.** Thirty posts on model setups do not teach a parts department anything it can use on Monday.

## X evidence

One post is in the evidence file. It is an X post, not website copy. https://x.com/MarkKashef/status/2110850310243533066

> Not enough people are discussing how many awful things will come about from bad actors using uncensored models to hack into everything.
>
> My team and I are constantly stress testing client infrastructure with these models and the results are startling.
>
> We need to wake up asap.

Created 2026-10-15. Metrics on the saved post: 5 likes, 1 reply, 0 reposts, 0 bookmarks, 141 impressions.

The post adds a claim the site does not make. It says "My team and I" are "stress testing client infrastructure" with uncensored models, and that the results are "startling." It names no client and no system. The security page and the Lockpick FAQ say the published review does not log in, does not send payloads, does not submit forms, and does not change the site. Master Key, which would sign in with test accounts, is marked "Coming soon" and is not described as an uncensored-model test.

**INFERENCE:** the post is a warning about attackers, written as if the firm already runs that test on clients. The pages crawled sell an outside read and a fix list. Do not move the stress-test sentence onto Wil's site, and do not treat it as a description of the security product.

## Open questions and contradictions

| Topic | One surface | The other |
| --- | --- | --- |
| What "advisory" costs | Card: advisory sprint "FROM $15K". Fractional lead is the "MONTHLY RETAINER". https://www.promptadvisers.com/consulting | FAQ: "Advisory is a monthly retainer." Same page. |
| Community price | Consultancy site: no dollar price. "Cancel anytime." https://www.promptadvisers.com/community | Skool plans: $43/month, $77/month, $777/year. Course site: "$77/mo" and, on the next line, "ALL-IN, NO UPSELL." |
| Coaches | "twelve coaches" on the homepage and community page. | "Three Claude Code coaches" on the course site. The pages do not say one count includes the other. |
| Members | Homepage "1,000+" and "1k+." About page "A 1,000+ person community." Community meta "1,000+ members, 92% stay." | Skool "1.1k members." Course site "1,400+ MEMBERS BUILDING." |
| YouTube | Homepage "86.1k". | About page "80,000" and "80,000 strong". `llms.txt` says "80k-subscriber". |
| O'Reilly | Stat and FAQ: five live courses. | Three titles named on the workshops page. |
| Training length | Visible copy: a few weeks, or a quarter. | Course JSON on the same page: `PT8H`. |
| Lockpick Deep | Pricing card, yearly toggle selected: "$15.83" "/month" and "Billed yearly: $190". | `pricing.md` and the AI-facts page: "$19 a month" or "$190 a year". |
| What the firm did for clients | Homepage 500+ "BUSINESSES ADVISED". Skool about: "ex-Amazon" and "$2M+ in client work". Media prints an Entrepreneur headline about a 7-figure prompt business. | About page: "hundreds of businesses", no ex-Amazon, no $2M. Reviews name no company. `/case-studies` is a 404. |
| Security work | X post: stress-testing client infrastructure with uncensored models. | Security page: "Nothing is logged into, no payloads are sent, no forms are filled." |
| What `llms.txt` says the homepage is | "what we do, proof, and client outcomes" | The homepage proof is audience stats and prompt reviews. |
