# Dominion Roadmap

Cross-border transaction advisory workspace. Public site at dominionpartners.ca. Member portal at /dashboard.

Related products (separate repos): D-AirPay.dominionpartners.ca, FlowSignal.dominionpartners.ca.

---

## Shipped

### Public site V1
- Home (`/`)
- Intelligence / advisory model (`/intelligence`)
- For accountants (`/for-accountants`)
- Insights (`/insights`)
- Disclaimer (`/disclaimer`)
- Sign in / sign up (`/sign-in`, `/sign-up`)

### Member portal V1
- Transaction Diagnostics calculator (`/dashboard`)
- Route Review workspace (`/dashboard/route-review`)
- Downloadable resources (`/dashboard/resources`)
- Account and workspace access (`/dashboard/account`)

### Design system
- Brand token consolidation (`brand-primary`, `brand-ink`, `brand-text`, `brand-navy`, `brand-accent`, etc.)
- `DESIGN_SYSTEM.md` as living spec for tokens, typography, spacing, card patterns, buttons, hero/CTA
- `ServicePageHero`, `ServicePageSection`, `ServicePageCta` shared layout components
- PNG logo asset (`dominion-logo-cropped.png`) and updated `FlowSignalLogo` component
- Standardized spacing, eyebrow style, and icon sizing rules

### Service pages
- Trade Advisory (`/trade-advisory`) — market entry, trade structuring, regulatory coordination, operational strategy
- Payment Services (`/payment-services`) — payment infrastructure, FX optimization, flow structuring, ongoing optimization
- Contact form (`/contact`) — lead capture with 1-business-day response SLA

---

## Near Term

### Public site navigation
- No navigation currently exists between public pages
- Header nav links needed: services (trade advisory, payment services), intelligence, for accountants, insights
- Footer nav audit: disclaimer currently footer-only; consider expanding footer links

### SEO metadata
- Per-page `metadata` objects (title, description, openGraph) for all public pages
- Currently only root layout has metadata

### Insights as real content
- Insights articles are currently static mock data
- Decision needed: CMS-backed (Contentful, Sanity, etc.) or markdown files + MDX
- Articles could link to relevant service pages (trade-advisory, payment-services)

---

## Medium Term

### Dashboard improvements
- Transaction Diagnostics: persist inputs, add export/download of diagnostic output
- Route Review: add free-text workspace for notes and structured review brief
- Resources: additional downloadable materials

### Cross-product surface
- Determine how Dominion site references or links to D-AirPay and FlowSignal
- Consider whether service pages link to product subdomains or keep them separate

### Contact / intake form
- Current CTA is sign-up only; consider whether a pre-auth intake or contact form fits the advisory model
- Affects all "Request a review" CTAs across the site

### Analytics
- No tracking currently in place
- Decision needed: GA4, Plausible, or other

---

## Open Questions

See open questions section in README or session notes.
