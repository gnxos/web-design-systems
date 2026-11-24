# PostCard

An art tile with a title, a date and a tag, in a responsive row.

**Consumer provides:** Art, a title under 60 characters, a date and one tag.

- Root class `ik-post` (parts use `ik-post__…`, variants `--…`).
- Hover underlines the title and slowly scales the art.
- `--contain` keeps line art inside the tile.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
