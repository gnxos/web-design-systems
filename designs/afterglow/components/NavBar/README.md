# NavBar

A top bar with the name set in plain type, a few links, and a secondary and primary action.

**Consumer provides:** Brand text, three to five links, two buttons.

- Root class `ag-nbar` (parts use `ag-nbar__…`, variants `--…`).
- Current page uses `aria-current="page"`.
- Links hide under 760px; keep the primary action.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
