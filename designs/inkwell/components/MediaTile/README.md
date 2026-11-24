# MediaTile

A rounded art tile with an optional caption chip.

**Consumer provides:** One image from `assets/` and a one- to three-word caption.

- Root class `ik-mtile` (parts use `ik-mtile__…`, variants `--…`).
- Hover slowly scales the art (off under reduced motion).
- `--contain` is for line art that should sit inside the tile.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
