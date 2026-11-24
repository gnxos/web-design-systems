# PostCard

An art tile with a title, a date and a tag, in a responsive row.

**Consumer provides:** Art, a title under 60 characters, a date and one tag.

- Root class `cr-post` (parts use `cr-post__…`, variants `--…`).
- Hover underlines the title and slowly scales the art.
- `--contain` keeps line art inside the tile.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
