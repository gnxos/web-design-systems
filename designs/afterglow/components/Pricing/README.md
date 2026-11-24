# Pricing

Three plan cards with a price, a feature list and an action; the popular plan is inverted.

**Consumer provides:** Plan names, prices, three feature lines and a button label.

- Root class `ag-plan` (parts use `ag-plan__…`, variants `--…`).
- Only one plan is `--hot`.
- Always include a word flag such as "Popular".
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
