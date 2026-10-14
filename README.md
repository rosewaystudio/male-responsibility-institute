# Male Responsibility Institute — Odis Bellinger

Next.js (App Router, TypeScript) landing page for Odis Bellinger: speaking, books, events, and booking. Built from the Claude Design export, same look.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check; run this before every push
```

## Where things live

| To change… | Edit |
| --- | --- |
| Any copy, prices, book links, events, testimonials, contact info | `lib/content.ts` |
| Speaker reel video | `reel.embedUrl` in `lib/content.ts` |
| Second book cover | add the image to `public/images/`, set `book2.cover` in `lib/content.ts` |
| Where booking inquiries and email sign-ups go | `lib/delivery.ts` |
| Styling and colors | `app/globals.css` |
| Page layout and section order | `app/page.tsx` |
| Browser tab title and social preview | `site` in `lib/content.ts`, `app/layout.tsx` |

In `lib/content.ts`, **PLACEHOLDER** marks content waiting on Odis and **VERIFY** marks content to confirm before launch.

## Waiting on Odis

- [ ] **Book links.** Order Direct, Amazon paperback, Kindle (all `#` right now).
- [ ] **Kindle price.** The site says "Free". Amazon only allows free Kindle books for limited promotion days, so confirm the current listing.
- [ ] **Book cover.** The current cover is 212px wide and looks blurry at the size it's shown. Ask for the original file.
- [ ] **Book subtitle.** The site says "African American Males"; the cover says "Young African American Males".
- [ ] **Second book.** Title, subtitle, description, price, link, cover.
- [ ] **Speaker reel.** YouTube or Vimeo link.
- [ ] **Events.** Real dates, names, venues (or remove the section until there are some).
- [ ] **Testimonials.** Consent from each person to be quoted by name.
- [ ] **Contact.** Domain, booking email, real phone number.

## Before launch

- [ ] **Booking form and email sign-up destinations.** Not wired yet. In dev, submissions print to the terminal. In production, each form says it isn't open yet instead of pretending to succeed. Implement the two functions in `lib/delivery.ts`.
- [ ] **Privacy policy.** Both forms collect personal information, and the email sign-up builds a mailing list.
- [ ] **Domain.** Buy it, add it in Vercel → Project → Domains, set `NEXT_PUBLIC_SITE_URL`.

## Deploy (Vercel)

Every push to `main` deploys to the live site. To review changes without the public seeing placeholders, push to another branch instead; Vercel gives each branch its own preview URL.
