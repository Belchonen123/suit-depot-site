# The Suit Depot Website

Local Next.js 15 marketing site for The Suit Depot in Oak Park, MI.

## Run Locally

```bash
npm install
npm run dev
```

Current local handoff port from Codex work: `http://127.0.0.1:3799`.

## Scripts

```bash
npm run lint
npm run build
```

## Environment

Copy `.env.example` to `.env.local` when email delivery is ready.

```bash
RESEND_API_KEY=
RESEND_TO_EMAIL=hello@thesuitdepot.com
RESEND_FROM_EMAIL="The Suit Depot <onboarding@resend.dev>"
NEXT_PUBLIC_ENABLE_HERO_VIDEO=false
```

Without `RESEND_API_KEY`, the contact API validates submissions and logs them locally.
Set `NEXT_PUBLIC_ENABLE_HERO_VIDEO=true` only after adding `public/media/hero.webm` and `public/media/hero.mp4`.

## Notes

- This is not a Shopify rebuild. Shop and collection CTAs intentionally link to `https://thesuitdepot.com`.
- Do not deploy to Vercel unless the user explicitly asks.
- Confirm phone, hours, full brand list, Shopify deep links, reviews, and hero footage before launch.
