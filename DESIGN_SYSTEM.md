# Dominion Design System

## Brand Color Tokens

Use the brand tokens in `app/globals.css` instead of page-level hex values.

- `brand-primary`: primary Dominion blue, sampled from the provided logo (`#004ADB`)
- `brand-primary-hover`: darker blue for hover states
- `brand-secondary`: supporting blue for secondary emphasis
- `brand-accent`: pale blue surface for icon wells and subtle emphasis
- `brand-on-dark`: light blue text used on navy surfaces
- `brand-ink`: primary text
- `brand-text`: secondary text
- `brand-border`: borders
- `brand-muted`: quiet backgrounds
- `brand-navy`: dark brand surface

## Usage Rules

- Emphasized text, icons, primary CTAs, and active advisory labels use `text-brand-primary` or `bg-brand-primary`.
- Hover states for primary buttons use `hover:bg-brand-primary-hover`.
- Avoid purple, violet, indigo, or one-off blue hex values in components.
- Raw color values belong in `app/globals.css`; pages and components should use tokens.
- Portal screens should stay restrained: white/gray surfaces, brand blue only for action and emphasis.
