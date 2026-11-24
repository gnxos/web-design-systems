# Input

A labelled text field with hint and invalid state, plus an inline capture (field + button).

**Consumer provides:** A visible label, optional hint, and a button label for the capture.

- Root class `ag-field` (parts use `ag-field__…`, variants `--…`).
- Invalid uses `aria-invalid="true"` and a message that says how to fix it.
- Focus is a 2px outline in the system's link colour.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
