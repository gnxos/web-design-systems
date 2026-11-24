# Input

A labelled text field with hint and invalid state, plus an inline capture (field + button).

**Consumer provides:** A visible label, optional hint, and a button label for the capture.

- Root class `ht-field` (parts use `ht-field__…`, variants `--…`).
- Invalid uses `aria-invalid="true"` and a message that says how to fix it.
- Focus is a 2px outline in the system's link colour.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
