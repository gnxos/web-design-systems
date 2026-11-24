# NavBar

A top bar with the name set in plain type, a few links, and a secondary and primary action.

**Consumer provides:** Brand text, three to five links, two buttons.

- Root class `ik-nbar` (parts use `ik-nbar__…`, variants `--…`).
- Current page uses `aria-current="page"`.
- Links hide under 760px; keep the primary action.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
