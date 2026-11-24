# Accordion

A list of questions that open to reveal an answer.

**Consumer provides:** Questions and answers under 200 characters.

- Root class `ht-faq` (parts use `ht-faq__…`, variants `--…`).
- Built on native `details`; no script needed.
- The plus icon rotates 45 degrees when open.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
