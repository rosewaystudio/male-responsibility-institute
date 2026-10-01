# Male Responsibility Institute — site

Next.js (App Router, TypeScript) port of the Claude Design mockup for Odis Bellinger's speaking site. One page, same design.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Where things live

| To change… | Edit |
| --- | --- |
| Any copy (topics, testimonials, audiences, contact info) | `lib/content.ts` |
| Colors | `:root` in `app/globals.css` — named after the MRI palette sheet |
| Styling | `app/globals.css` (ported from the mockup) |
| Stage photos | put files in `public/images/stage/`, set `src` in `stagePhotos` in `lib/content.ts` |
| Where booking inquiries go | `lib/inquiry.ts` |
| Page title / social preview | `app/layout.tsx`, `site` in `lib/content.ts` |

## Before launch

- [ ] **Booking form destination.** Not wired yet. In dev, submissions log to the terminal. In production, the form tells visitors to email directly instead of pretending to succeed. Implement `deliverInquiry()` in `lib/inquiry.ts`.
- [ ] **Domain.** Buy it, add it in Vercel → Project → Domains, set `NEXT_PUBLIC_SITE_URL`.
- [ ] **Contact info.** `booking@maleresponsibility.org` assumes the domain; the phone number is a 555 placeholder.
- [ ] **Stage photos.** Classroom photo is in; two placeholders still need photos. Confirm the photo release covers the students shown.
- [ ] **Claims.** Confirm the 20,000+ figure, LLPC status, each "Featured in" outlet, and past partners.
- [ ] **Testimonials.** Confirm consent to be quoted by name.
- [ ] **LinkedIn.** Add the URL in `site.linkedin`; the footer link stays hidden until then.
- [ ] **Higher-res photos.** The classroom photo is 700px wide, slightly soft on retina screens. Ask for the original if one exists.

## Deploy (Vercel)

Push to GitHub, import the repo in Vercel; no settings needed. Every push to `main` deploys.
