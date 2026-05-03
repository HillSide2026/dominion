# Dominion Design System

## Principles

The site should feel **quietly powerful, precise, and credible** — consistent with a cross-border advisory and financial infrastructure firm. Not a SaaS dashboard. Avoid excessive color, flashy motion, or startup-style decoration.

---

## Color Tokens

All color values live in `app/globals.css` inside `@theme`. Pages and components use token classes — never hardcode hex values on components.

### Brand Palette

| Token | Hex | Purpose |
|---|---|---|
| `brand-primary` | `#004ADB` | Primary blue — CTAs, active icons, links, accents |
| `brand-primary-hover` | `#003AAD` | Hover state for primary blue elements |
| `brand-secondary` | `#0072CE` | Supporting blue for secondary emphasis |
| `brand-ink` | `#08111F` | Primary text — headings, labels |
| `brand-text` | `#64748b` | Secondary text — body copy, descriptions |
| `brand-border` | `#e2e8f0` | Dividers, card borders, subtle separators |
| `brand-muted` | `#f8fafc` | Quiet backgrounds |
| `brand-card` | `#f1f5f9` | Card surface fill |
| `brand-accent` | `#EAF1FF` | Pale blue — icon wells, badges, subtle emphasis |
| `brand-on-dark` | `#BFD4FF` | Light blue text on navy surfaces |
| `brand-navy` | `#071225` | Darkest navy — gradient start (left), footer |
| `brand-navy-light` | `#102A6B` | Mid navy |
| `brand-navy-mid` | `#0F2459` | Mid navy |
| `brand-navy-end` | `#1A4596` | Gradient end (right) — lighter navy/blue for hero and CTA band |

### Usage Rules

- **Primary CTAs and active states only** use `bg-brand-primary` / `text-brand-primary`. Restraint increases perceived sophistication — reduce blue by ~30–40% vs. feeling tempted to use it everywhere.
- **Hover states** on primary buttons use `hover:bg-brand-primary-hover`.
- **Icon wells** use `bg-brand-accent text-brand-primary` — never gray backgrounds for icons in brand contexts.
- **Dark surfaces** (hero, footer, CTA band) use navy tokens. Text on dark surfaces uses `text-white`, `text-slate-300`, `text-slate-400`, or `text-brand-on-dark` for eyebrow labels.
- **Do not** use purple, violet, indigo, or one-off hex values in components.
- **Do not** put raw color values on pages or components — they belong in `globals.css`.

---

## Typography

Font: **Manrope** (Google Fonts), loaded in `app/layout.tsx`.

| Role | Classes | Notes |
|---|---|---|
| Hero H1 | `text-5xl sm:text-6xl lg:text-[4.5rem]` + `font-semibold tracking-tight leading-[1.06]` | White on dark |
| Section H2 | `text-3xl sm:text-4xl` + `font-semibold tracking-tight` | `text-brand-ink` |
| Feature H2 | `text-4xl sm:text-5xl` + `font-semibold tracking-tight` | Used for intro/anchor headings |
| Card H3 | `text-xl` or `text-2xl lg:text-3xl` + `font-semibold tracking-tight` | `text-brand-ink` |
| Eyebrow label | `text-xs font-semibold uppercase tracking-eyebrow` | `text-brand-text` or `text-brand-on-dark` |
| Body copy | `text-base lg:text-lg leading-7 lg:leading-8` | `text-brand-text` (slate-500) |
| Muted/trust line | `text-sm text-slate-400` | On dark surfaces |

**Hierarchy rule:** headings should feel dominant against secondary body copy. Never let body text and headings sit at the same visual weight.

---

## Spacing Scale

All section padding follows an 8px scale. Standard section padding is `py-24 sm:py-28`. Key sections (intro, anchor moments) use `py-28 sm:py-32`. Do not mix arbitrary values.

Container: `mx-auto max-w-content px-4 sm:px-6 lg:px-8` (`--container-content: 68.75rem`).

---

## Section Background Rhythm

Avoid long runs of identical backgrounds. The homepage uses this sequence:

| Section | Background |
|---|---|
| Hero | Dark navy gradient (`brand-navy-light` → `brand-navy`) |
| Two Integrated Capabilities intro + cards | `bg-white` |
| Built for Cross-Border Complexity | `bg-slate-50` |
| Who We Serve | `bg-white` |
| How We Work | `bg-slate-50` |
| Dark CTA band | `bg-white` wrapping a dark gradient card |
| Footer | `bg-brand-navy` (`#071225`) |

Rule: alternate white and `slate-50` for light sections. Use the dark navy only for hero, CTA band, and footer — never for interior informational sections.

---

## Cards

All cards use a consistent spec:

```
rounded-2xl border border-slate-200 bg-white p-8 shadow-sm
transition hover:shadow-md
sm:p-10
```

- **Radius:** `rounded-2xl` (16px). Large feature containers may use `rounded-[28px]` or `rounded-[36px]`.
- **Border:** `border-slate-200` — slightly stronger than `brand-border` for clear card delineation.
- **Shadow:** `shadow-sm` at rest, `hover:shadow-md` on interactive cards.
- **Padding:** `p-8 sm:p-10` standard. Feature cards (Built for Cross-Border) use `p-10`.
- **Background:** always `bg-white` — even when the surrounding section is `slate-50`, the card is white to create lift.

### Card Variants

**Service/capability cards** (clickable Link): include a `group` class for hover arrow animation.

**Checklist cards** (Built for Cross-Border): `divide-y divide-brand-border` with icon wells and text rows.

**Audience cards** (Who We Serve): include a `h-[2px] w-8 rounded-full bg-brand-primary/30` accent bar before the heading.

**Step cards** (How We Work): small `h-9 w-9 rounded-full bg-brand-accent text-brand-primary` number badge at top.

---

## Icon Wells

Icon containers use soft blue backgrounds, never gray:

```
flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary
```

- Service card icons: `h-14 w-14 rounded-2xl`, icon `h-6 w-6`
- Checklist icons: `h-8 w-8 rounded-full`, icon `h-4 w-4`
- Step badges: `h-9 w-9 rounded-full`, text number (not icon)

---

## Buttons

### Primary CTA (on light background)
```
h-12 rounded-full bg-brand-primary px-7 text-white shadow-none hover:bg-brand-primary-hover
```

### Primary CTA (on dark/hero background)
```
h-12 rounded-full bg-brand-primary px-7 text-white shadow-none hover:bg-brand-primary-hover
```

### Ghost CTA (on dark/hero background)
```
h-12 rounded-full border border-white/20 bg-transparent px-7 text-white shadow-none hover:bg-white/10
```

### Inverse CTA (dark band, white button)
```
h-12 rounded-full bg-white px-8 text-brand-ink hover:bg-slate-50
```

**CTA hierarchy rule:** never give two CTAs equal visual weight in the same section. Primary = solid fill, secondary = ghost or outline.

---

## Hero

The hero uses a horizontal dark → lighter navy gradient (left to right):

```tsx
style={{ background: 'linear-gradient(to right, var(--color-brand-navy) 0%, var(--color-brand-navy-end) 100%)' }}
```

Direction rule: always `to right`. The **left/start is the darkest navy** (`brand-navy`); the **right/end is the lighter navy** (`brand-navy-end`). This preserves white text readability at both ends while adding visible depth across the width.

Radial overlay (low opacity, adds subtle depth):
```tsx
style={{ background: 'radial-gradient(ellipse 70% 60% at 70% -10%, rgba(75,158,255,0.10), transparent)' }}
```

Max content width in hero: `max-w-[780px]`.

---

## Dark CTA Band

```tsx
className="rounded-[36px] px-8 py-16 sm:px-12 sm:py-20 lg:flex lg:items-end lg:justify-between lg:px-16"
style={{ background: 'linear-gradient(to right, var(--color-brand-navy) 0%, var(--color-brand-navy-end) 100%)' }}
```

Uses the same `to right` direction and color stops as the hero for visual consistency.

---

## Footer

Dark navy (`#071225`), 4-column grid on desktop. Column headings use `text-xs font-semibold uppercase tracking-widest text-slate-400`. Links use `text-sm text-slate-500 transition-colors hover:text-white`. Bottom bar uses `border-t border-white/10`.

---

## Favicon

`app/icon.svg` — SVG D-letterform in `brand-primary` blue with diagonal white slash. Next.js App Router picks this up automatically. To replace with the PNG version, drop `app/icon.png` and remove `app/icon.svg`.

---

## Do Not

- Do not add motion beyond `transition hover:shadow-md` and `hover:translate-x-0.5` on arrow icons.
- Do not introduce new icon libraries — only `lucide-react` icons already imported.
- Do not use `rounded-full` on icon wells for service cards (use `rounded-2xl`).
- Do not use gray backgrounds for icon wells (`bg-gray-100`, `bg-brand-card`).
- Do not hardcode hex values on components or pages.
- Do not add horizontal overflow or layout shifts.
- Do not modify portal, auth, API, or routing logic for visual changes.
