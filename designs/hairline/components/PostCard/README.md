# PostCard

An art tile with a title, a date and a tag, in a responsive row.

**Consumer provides:** Art, a title under 60 characters, a date and one tag.

- Root class `hl-post` (parts use `hl-post__…`, variants `--…`).
- Hover underlines the title and slowly scales the art.
- `--contain` keeps line art inside the tile.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
