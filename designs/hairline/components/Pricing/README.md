# Pricing

Three plan cards with a price, a feature list and an action; the popular plan is inverted.

**Consumer provides:** Plan names, prices, three feature lines and a button label.

- Root class `hl-plan` (parts use `hl-plan__…`, variants `--…`).
- Only one plan is `--hot`.
- Always include a word flag such as "Popular".
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
