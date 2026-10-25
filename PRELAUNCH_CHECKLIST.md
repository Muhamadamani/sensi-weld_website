# SensiWeld Website — Pre-Launch Checklist
_Review every item before going live._

## Content and Claims
- [ ] All items in CLAIMS_REGISTER.md "Outstanding" table resolved or removed
- [ ] Official supporter logo files supplied by founder and added to `src/assets/`
- [ ] `src/config/supporters.ts` updated with real `logoPath` and verified `url` for each organisation
- [ ] Supporter section alt text matches supplied logo organisation names
- [ ] Patent wording confirmed with legal — "application filed" not "patented" or "granted"
- [ ] Award wording confirmed — precise names, recipients, and project relationships
- [ ] Team roles confirmed as current (Mo Amani, Christi Raubenheimer, Prof. Masania, Dr. Sundaramoorthy)
- [ ] "EngD" qualification for Christi Raubenheimer confirmed
- [ ] Pilot project section reviewed — no MOU/LOI flag is accurate
- [ ] Contact emails confirmed: mo@sensiweld.com, christi@sensiweld.com
- [ ] Privacy information / data use statement added if collecting personal data via form

## Contact Form
- [ ] Netlify Forms or alternative backend configured and tested end-to-end
- [ ] Form delivers to confirmed receiving address (not simulated delivery)
- [ ] Loading state visible during submission
- [ ] Error state shown and retry available on failure
- [ ] Success state only shown after backend confirms acceptance
- [ ] "Please do not include confidential technical information" notice visible

## Assets
- [ ] Real material, joint or manufacturing images used — no unrelated stock imagery
- [ ] Team photographs supplied and added (graceful fallback if unavailable)
- [ ] Logo images display at correct aspect ratios with sufficient clear space
- [ ] No broken-image icons displayed for any logo placeholder
- [ ] All images have meaningful alt text
- [ ] Images optimised for web (file size, format)

## Accessibility
- [ ] All text meets WCAG AA contrast ratios against respective backgrounds
- [ ] Navigation is keyboard-accessible with visible focus indicators
- [ ] Form fields have associated labels
- [ ] Aria labels present on icon-only controls (hamburger, logo link)
- [ ] Heading hierarchy is logical (h1 > h2 > h3)
- [ ] Reduced-motion: animations respect `prefers-reduced-motion`
- [ ] Content visible if CSS animations fail

## Layout and Responsiveness
- [ ] No horizontal overflow at mobile (375px)
- [ ] Supporter logo grid balanced at all breakpoints
- [ ] Navigation hamburger menu functions correctly on mobile
- [ ] Text readable at body size on mobile

## Technical
- [ ] Build runs without TypeScript errors (`npm run build`)
- [ ] All routes resolve (/, /product, /applications, /about, /team, /contact)
- [ ] 404 / not-found state handled
- [ ] Meta title and description set in index.html
- [ ] Canonical URL set
- [ ] Google Analytics or equivalent confirmed / privacy-compliant
- [ ] Netlify deploy preview reviewed before promoting to production

## Changed Files (this update)
- `index.html` — page title updated
- `src/config/supporters.ts` — NEW: central supporter config
- `src/App.tsx` — added /applications route, removed /investors route
- `src/components/Navbar.tsx` — nav: Technology | Applications | About + Get in Touch CTA
- `src/components/Footer.tsx` — emails updated, Applications link added
- `src/pages/Home.tsx` — full rewrite: new hero, supported-by, 4 tech blocks, applications, validation, team preview
- `src/pages/Product.tsx` — rewritten: 4 tech blocks, no "2-second" claim, no adhesive-free language
- `src/pages/Applications.tsx` — NEW: dedicated applications page
- `src/pages/Contact.tsx` — new heading, emails, form fields, no-confidential notice
- `src/pages/Team.tsx` — role titles updated (Technical Lead / Business Developer)
- `src/pages/About.tsx` — light theme, no em dashes
- `CLAIMS_REGISTER.md` — NEW
- `PRELAUNCH_CHECKLIST.md` — NEW

## Run Instructions
```bash
cd /Users/mamani/Downloads/sensi-weld_website-main
npm install      # if not already done
npm run dev      # local dev server
npm run build    # production build
```
