# Suit Depot Website Project Map

## Source Of Truth

- Build spec: `C:\Users\belch\Downloads\suit-depot-build-spec.md`
- Local-only instruction: do not push or deploy to Vercel unless explicitly asked.

## App Shape

- Framework: Next.js App Router with TypeScript and Tailwind CSS.
- Content: local TypeScript files in `/content`.
- Shared UI: `/components/site`.
- Public assets: `/public/media` and `/public/logos`.

## Routes

- `/` home
- `/oak-park`
- `/custom-suits`
- `/tailoring`
- `/tuxedo-rentals`
- `/wedding-suits`
- `/brands`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/service-areas`
- `/service-areas/[city-name]`
- `/privacy-policy`
- `/api/contact`

## Current Constraints

- This is a marketing and local-retail website, not a Shopify rebuild.
- Shop and collection CTAs link externally to `https://thesuitdepot.com`.
- Business facts, phone number, hours, brand list, reviews, and hero footage must be confirmed before launch.
