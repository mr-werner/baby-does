# Baby Doe's — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.babydoesclothing.com/ (women's clothing, artisan jewelry and fine craft boutique, Golden, CO).
Preview: https://bd.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `baby-does` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `bd.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-25). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Palette from their logo and current site: the logo plum (#4B3B6C, also their footer bar) and the header teal (#00CEC2), deepened for dark sections and paired with silver (for Baby Doe Tabor and Colorado's silver boom) on a warm linen paper.
- Their own script "Baby Doe's" logo, extracted from the site header (the purple bar that crossed it was patched from the cover-art copy of the logo) in plum and a cream version for the footer. Favicon is the logo's "B" on a plum tile.
- Bodoni Moda (Victorian high-contrast serif, italic accents) for headings, Pinyon Script for the "for the way you live" / "irresistible" taglines from their cover art, Work Sans for body.
- Motifs from the name and the street: a scalloped storefront-awning edge under the header, an arched Victorian window framing the store photo (the old painted Wrigley's sign inside the Fair Variety Store building), a silver-dollar "Est. 1999 · Golden, Colorado" medallion, a theater-marquee brand strip with bulbs, departments numbered No. I–III as cabinet cards, silver award coins, flourish rules.
- Section order: ribbon (hours, address, phone) → hero → brand marquee → the collection (clothing, artisan jewelry, fine craft & fiber arts) → artisan spotlight grid with filters (22 makers with photos, plus the full roll call) → clothing lookbook strip → "Why the name Baby Doe's?" + 1999–2014 timeline → community and awards → customer testimonials → visit (hours for every day, today highlighted, map, policies, newsletter) → footer.
- All photos come from babydoesclothing.com and are downloaded into `src/assets/photos` (their site has no valid HTTPS, so hotlinking would break on an HTTPS page).

## What changed from the current site

- Replaces a fixed 924px table layout (Table Mountain Web Design) with no mobile viewport tag; the new site works at phone width with no sideways scrolling.
- The current site has no valid HTTPS (https://www.babydoesclothing.com serves a self-signed certificate); the concept is HTTPS on Vercel.
- The homepage "Read our newsletter" link points to an April 2017 spring sale email; the concept links to the subscribe form instead.
- Every page has the same `<title>`; artisan, fine craft and fashion detail pages (55 of them) each hold one photo. The concept puts the makers on one filterable grid.
- Phone, address and email are plain text in the footer bar, not tap-to-call; the concept makes them links and puts hours on the first screen.
- Typos cleaned up: "Charlie O/Brien" → "Charlie O'Brien", "insure" → "ensure", "Baby Does" → "Baby Doe's". The cover art says jewelry by "over 25 regional artists" while the text says "over 40 regional artisans"; the concept uses 40+.
- Some detail pages (Papillon, Mama's Little Babies, one Nina Sampsel page) intermittently return a "One moment, please..." bot-check page instead of content.
- Checked at 1440px and 390px with no sideways scrolling.

## Owner should confirm

- Owner: the About page names "Nancy the store owner" and credits the 2015 Charlie O'Brien Volunteer Award to Nancy Taylor Mason; Visit Golden lists Lynn Conrad as owner since April 2017. No owner name is shown on the concept. Confirm who to name (if anyone) and whether the award should be credited to a person.
- Awards are copied from the About page: Golden Chamber Business of the Year 2006, Golden Mayoral Award for Excellence 2014, Charlie O'Brien Volunteer Award 2015 (Golden Chamber). Confirm any newer awards, and who presents the Mayoral award.
- Buy Local Golden badge (from the homepage): confirm the program is still active; its link (golden.com/BuyLocal) is the old one from the site.
- Brand list (JAG Jeans, KAVU, Royal Robbins and the rest) and artisan roster are from pages last updated years ago (fashion photos are 2015–2016). Confirm current lines and makers, and permission to show each artisan's photo.
- Community details: Golden Fine Arts Festival volunteering and fundraisers for Doctors Without Borders, Golden Retriever Rescue of the Rockies and Sky High Hope Camp. Confirm they're current.
- Policies: cards accepted, gift certificates, 14-day exchange/store credit with receipt, clearance and layaway final.
- Newsletter: the concept links to the Mailchimp form embedded on subscribe.htm (eepurl.com/IxlgH) and says "once a month" (from the Contact page). Confirm it's still used.
- Testimonials are verbatim from the About page, where they're unsigned and undated. No Google rating is quoted (only a link); confirm before adding one.
- The map is simplified from their hand-drawn Contact page map (Washington Ave between 11th and 12th, south of Clear Creek). Not to scale.
- Social: only Facebook is linked on the current site. Add Instagram etc. if they have them.
- Photos are low-resolution (most under 600px) and the logo was rebuilt from a small JPG; ask for a vector logo and current photos before launch.
