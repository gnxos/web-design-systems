# Pricing

Three plan cards with a price, a feature list and an action; the popular plan is inverted.

**Consumer provides:** Plan names, prices, three feature lines and a button label.

- Root class `ht-plan` (parts use `ht-plan__…`, variants `--…`).
- Only one plan is `--hot`.
- Always include a word flag such as "Popular".
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
