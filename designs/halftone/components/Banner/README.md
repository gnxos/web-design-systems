# Banner

A dismissible announcement strip with a message and one link.

**Consumer provides:** A message under 60 characters, a link label, optional badge.

- Root class `ht-notice` (parts use `ht-notice__…`, variants `--…`).
- Add `data-dismissible` to the strip and `data-dismiss` to its close button.
- `--accent` is for one urgent notice at a time.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
