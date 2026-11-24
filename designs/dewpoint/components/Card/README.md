# Card

A surface card with a title, a sentence, key/value rows and a link.

**Consumer provides:** A title, one sentence, two to four key/value pairs.

- Root class `dp-panel` (parts use `dp-panel__…`, variants `--…`).
- Uses the system's card radius, border and shadow.
- Keep rows to short values.
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
