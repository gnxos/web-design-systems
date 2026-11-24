# MediaTile

A rounded art tile with an optional caption chip.

**Consumer provides:** One image from `assets/` and a one- to three-word caption.

- Root class `ht-mtile` (parts use `ht-mtile__…`, variants `--…`).
- Hover slowly scales the art (off under reduced motion).
- `--contain` is for line art that should sit inside the tile.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
