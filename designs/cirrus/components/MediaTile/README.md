# MediaTile

A rounded art tile with an optional caption chip.

**Consumer provides:** One image from `assets/` and a one- to three-word caption.

- Root class `cr-mtile` (parts use `cr-mtile__…`, variants `--…`).
- Hover slowly scales the art (off under reduced motion).
- `--contain` is for line art that should sit inside the tile.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
