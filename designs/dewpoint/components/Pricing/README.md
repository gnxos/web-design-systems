# Pricing

Three plan cards with a price, a feature list and an action; the popular plan is inverted.

**Consumer provides:** Plan names, prices, three feature lines and a button label.

- Root class `dp-plan` (parts use `dp-plan__…`, variants `--…`).
- Only one plan is `--hot`.
- Always include a word flag such as "Popular".
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
