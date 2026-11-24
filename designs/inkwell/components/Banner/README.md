# Banner

A dismissible announcement strip with a message and one link.

**Consumer provides:** A message under 60 characters, a link label, optional badge.

- Root class `ik-notice` (parts use `ik-notice__…`, variants `--…`).
- Add `data-dismissible` to the strip and `data-dismiss` to its close button.
- `--accent` is for one urgent notice at a time.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
