# PostCard

An art tile with a title, a date and a tag, in a responsive row.

**Consumer provides:** Art, a title under 60 characters, a date and one tag.

- Root class `ag-post` (parts use `ag-post__…`, variants `--…`).
- Hover underlines the title and slowly scales the art.
- `--contain` keeps line art inside the tile.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
