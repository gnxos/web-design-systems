# Pricing

Three plan cards with a price, a feature list and an action; the popular plan is inverted.

**Consumer provides:** Plan names, prices, three feature lines and a button label.

- Root class `ik-plan` (parts use `ik-plan__…`, variants `--…`).
- Only one plan is `--hot`.
- Always include a word flag such as "Popular".
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
