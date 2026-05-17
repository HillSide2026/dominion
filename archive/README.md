# Archive

## current-frontend

**Archived:** 2026-05-17  
**Purpose:** Retained for reference while new templates are imported and Dominion Partners content is reapplied.

This folder contains the full public-facing frontend that was in production prior to the template replacement cycle. Nothing has been deleted — all files are preserved here in their original folder structure.

### What was archived

**App pages and layouts**
- `app/layout.tsx` — root HTML shell, fonts, metadata
- `app/globals.css` — Tailwind base + all brand design tokens (`@theme`)
- `app/not-found.tsx` — 404 page
- `app/(dashboard)/layout.tsx` — marketing nav and footer (FlowSignal logo, nav links, footer columns)
- `app/(dashboard)/page.tsx` — homepage (hero, capabilities cards, trust section, CTA band)
- `app/(dashboard)/contact/` — general inquiry form + server action
- `app/(dashboard)/exports/` — export advisory intake form + server action
- `app/(dashboard)/treasury/` — Treasury & Trade Finance Advisory service page
- `app/(dashboard)/trade-advisory/` — Trade Advisory service page
- `app/(dashboard)/insights/` — Insights index page
- `app/(dashboard)/disclaimer/` — Legal disclaimer page
- `app/(login)/login.tsx` — shared login/signup form component
- `app/(login)/sign-in/page.tsx` — sign-in page
- `app/(login)/sign-up/page.tsx` — sign-up page

**Components**
- `components/marketing/service-page.tsx` — `ServicePageHero`, `ServicePageSection`, `ServicePageCta` layout primitives
- `components/brand/flowsignal-logo.tsx` — `FlowSignalLogo` component (lockup + mark variants, white variant for footer)

**Assets**
- `public/background-images/` — source image bank (Hero Section opt1 variants 1–7)

### What was intentionally left in place

| Path | Reason |
|------|--------|
| `app/api/` | Backend API routes (Stripe, team, user) |
| `app/(login)/actions.ts` | Server auth actions |
| `app/(dashboard)/dashboard/` | Authenticated client portal — not being replaced |
| `components/ui/` | shadcn/ui primitives — template-agnostic |
| `components/dashboard/` | Portal-specific UI components |
| `lib/` | Auth, database, payments backend |
| `middleware.ts` | Route authentication middleware |
| `app/favicon.ico`, `app/icon.png` | Brand assets at app root |
| `public/brand/` | Production logo assets (mark, lockup, white lockup) |
| `public/images/` | Production optimized images (`trade-infrastructure.jpg`) |
| `public/resources/` | Downloadable documents |
| `scripts/` | Utility scripts |
| All config/build files | `next.config.ts`, `tsconfig.json`, `package.json`, `drizzle.config.ts`, etc. |

### Brand tokens (from archived globals.css)

Key CSS custom properties defined in `@theme` that should be carried into any new template:

```
--color-brand-primary:       #004ADB
--color-brand-primary-hover: #0041c4
--color-brand-ink:           #08111F
--color-brand-text:          #374151
--color-brand-navy:          #071225
--color-brand-navy-end:      #133070
--color-brand-on-dark:       #BFD4FF
--color-brand-muted:         #f8fafc
--color-brand-border:        #e2e8f0
--color-brand-accent:        #eff6ff
```
