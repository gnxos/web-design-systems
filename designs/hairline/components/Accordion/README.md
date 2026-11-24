# Accordion

A list of questions that open to reveal an answer.

**Consumer provides:** Questions and answers under 200 characters.

- Root class `hl-faq` (parts use `hl-faq__…`, variants `--…`).
- Built on native `details`; no script needed.
- The plus icon rotates 45 degrees when open.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
