# Accordion

A list of questions that open to reveal an answer.

**Consumer provides:** Questions and answers under 200 characters.

- Root class `cr-faq` (parts use `cr-faq__…`, variants `--…`).
- Built on native `details`; no script needed.
- The plus icon rotates 45 degrees when open.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
