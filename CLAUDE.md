# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run typecheck  # TypeScript type checking (no emit)
```

There are no automated tests. Type checking (`npm run typecheck`) is the primary correctness check.

## Architecture

Single-page marketing site for a speaker/author (Odis). Built with Next.js 16 App Router, React 19, TypeScript, and vanilla CSS (no Tailwind, no CSS-in-JS).

### Content layer

All copywriting, pricing, links, and event data live in [lib/content.ts](lib/content.ts). This is the first place to look when changing any visible text. Items marked `// PLACEHOLDER` or `// VERIFY` are awaiting real data from the client.

### Form layer

- [app/actions.ts](app/actions.ts) — React Server Actions (`submitInquiry`, `submitSignup`) that validate input and call delivery functions. Forms use `useActionState`.
- [lib/delivery.ts](lib/delivery.ts) — Stub functions (`deliverInquiry`, `deliverSignup`) that log in dev mode and return "not open yet" in production. Wiring to real providers (Resend, Mailchimp, etc.) happens here.
- Both forms include a honeypot `website` field for spam protection.

### Components

- [components/BookingForm.tsx](components/BookingForm.tsx) — Multi-field inquiry form with conditional bundle fields and field-level error messages.
- [components/SignupForm.tsx](components/SignupForm.tsx) — Email newsletter sign-up.
- [components/SmartLink.tsx](components/SmartLink.tsx) — Opens external URLs in new tabs; anchor links stay in-page.
- [components/SpeakerReel.tsx](components/SpeakerReel.tsx) — Renders a video embed or a placeholder if no URL is set.

### Styling

All styles are in [app/globals.css](app/globals.css) (vanilla CSS with CSS custom properties). Key design tokens:

| Variable | Value | Usage |
|---|---|---|
| `--color-ink` | `#1C1A17` | Primary text |
| `--color-gold` | `#D4962E` | CTAs, accents |
| `--color-bronze` | `#A8621C` | Secondary accents |
| `--color-parchment` | `#F8F2E8` | Light backgrounds |
| `--color-charcoal` | `#24211D` | Dark section backgrounds |

Responsive breakpoints: 560px, 720px, 860px, 900px, 980px, 1040px, 1100px, 1180px. Font sizes use `clamp()` for fluid scaling. The `.dark` class on section elements inverts the color scheme.

### Fonts

Cormorant Garamond (serif, headings) and Inter (sans-serif, body) are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) and applied as CSS variables (`--font-serif`, `--font-sans`).

## Deployment

Every push to `main` deploys to Vercel. Branch pushes get preview URLs. The environment variable `NEXT_PUBLIC_SITE_URL` must be set in Vercel for the OG image and canonical URL to work correctly.
