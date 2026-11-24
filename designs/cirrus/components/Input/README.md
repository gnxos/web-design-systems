# Input

A labelled text field with hint and invalid state, plus an inline capture (field + button).

**Consumer provides:** A visible label, optional hint, and a button label for the capture.

- Root class `cr-field` (parts use `cr-field__…`, variants `--…`).
- Invalid uses `aria-invalid="true"` and a message that says how to fix it.
- Focus is a 2px outline in the system's link colour.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
