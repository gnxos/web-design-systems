# Terminal

A command window with a title bar and lines that reveal in turn.

**Consumer provides:** Three to six lines; mark commands with the prompt span.

- Root class `dp-term2` (parts use `dp-term2__…`, variants `--…`).
- Always dark, in the system's terminal ground.
- Lines appear one by one (off under reduced motion).
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
