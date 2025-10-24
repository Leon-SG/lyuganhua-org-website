# Lü Ganhua Foundation – Website (Prototype)

English-first, tri-lingual (EN / 繁體 / 简体) memorial and knowledge site. No fees. No payments. No funding.

## Tech
- Next.js 14 (App Router), React 18, TypeScript
- Static-first with simple locale segment routing: `/en`, `/zh-hant`, `/zh-hans`
- No payment or funding modules; includes an anti-fraud banner and page

## Structure
- `app/page.tsx` – redirects `/` to `/en`
- `app/[locale]/` – localized pages and layout
- `lib/dictionaries` – tri-lingual UI copy
- `components/` – shared UI (banner, nav, language switcher)

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel)
1. Import this folder as a Vercel project
2. No special build settings required (`next build`)
3. Domain: `lyuganhua.org` → project; add `www` CNAME if used (301 to root)

## Notes
- Global banner clearly states: no fees / no payments / no funding
- `app/robots.txt` and `app/sitemap.ts` included; adjust as content grows
- Security headers set in `next.config.js` (CSP may need tweaks if adding external assets)

