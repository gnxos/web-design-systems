# Banner

A dismissible announcement strip with a message and one link.

**Consumer provides:** A message under 60 characters, a link label, optional badge.

- Root class `hl-notice` (parts use `hl-notice__…`, variants `--…`).
- Add `data-dismissible` to the strip and `data-dismiss` to its close button.
- `--accent` is for one urgent notice at a time.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
