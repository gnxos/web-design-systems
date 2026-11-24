# Accordion

A list of questions that open to reveal an answer.

**Consumer provides:** Questions and answers under 200 characters.

- Root class `ag-faq` (parts use `ag-faq__…`, variants `--…`).
- Built on native `details`; no script needed.
- The plus icon rotates 45 degrees when open.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
