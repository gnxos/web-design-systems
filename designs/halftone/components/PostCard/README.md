# PostCard

An art tile with a title, a date and a tag, in a responsive row.

**Consumer provides:** Art, a title under 60 characters, a date and one tag.

- Root class `ht-post` (parts use `ht-post__…`, variants `--…`).
- Hover underlines the title and slowly scales the art.
- `--contain` keeps line art inside the tile.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
