# MediaTile

A rounded art tile with an optional caption chip.

**Consumer provides:** One image from `assets/` and a one- to three-word caption.

- Root class `hl-mtile` (parts use `hl-mtile__…`, variants `--…`).
- Hover slowly scales the art (off under reduced motion).
- `--contain` is for line art that should sit inside the tile.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
