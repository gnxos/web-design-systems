# Banner

A dismissible announcement strip with a message and one link.

**Consumer provides:** A message under 60 characters, a link label, optional badge.

- Root class `ag-notice` (parts use `ag-notice__…`, variants `--…`).
- Add `data-dismissible` to the strip and `data-dismiss` to its close button.
- `--accent` is for one urgent notice at a time.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
