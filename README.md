# Nexus Oxygen landing page
React + Vite. Run: `npm install && npm run dev`. Build: `npm run build`.

## Facts to confirm
All unconfirmed facts from the copy PDF live in ONE place: the `F` object at the top of `src/App.jsx`.
Replace the [bracketed] values there and they update everywhere (hero, strip, cards, FAQ, footer).
Only facts the PDF does not answer stay highlighted in yellow (credit days, deposit terms, rate-contract term, medical-oxygen details, legal name, GSTIN). Replace the [bracketed] text and the highlight disappears.
Also confirm: which number is WhatsApp vs calls, domain, Google Business access, and add the domain/logo URL/opening hours to the schema.
Hindi lines (language toggle) should be read once by a native Hindi speaker before launch.

## Update (client feedback)
- Tagline is now "The Breath of Life. The Promise of Care." (text on the page, footer, schema; Hindi line needs native review).
- The supplied logo image still contains the old tagline. `public/assets/nexus-oxygen-logo.png` is the same logo with only that bottom tagline strip trimmed off. Originals: `nexus-oxygen-logo-original.png` and `nexus-oxygen-logo-full-old-tagline.png`. When a new logo with the new tagline is ready, replace `nexus-oxygen-logo.png` (keep 1120x900 proportions or update width/height in App.jsx).
- Oxygen is now described as industrial AND medical. Medical grade and licence details are left as [confirm] brackets in the `Do you supply medical oxygen?` FAQ, the oxygen card and the Hospitals tile.

## Values taken from the PDF (now shown as plain text, no highlight)
Order cut-off 12 noon; same-day refills Sectors 1–3; Indore/Dhar next working day; hours Mon–Sat 8 am–8 pm; office 20 minutes from Pithampur; minimum order 2 cylinders per delivery (the PDF gives this as an example, "e.g."); trial rate on first fill; gas grades and purity certificates for nitrogen and argon.
Still to confirm with Nexus: which number is WhatsApp vs calls, domain, Google Business access.
