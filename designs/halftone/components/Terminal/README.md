# Terminal

A command window with a title bar and lines that reveal in turn.

**Consumer provides:** Three to six lines; mark commands with the prompt span.

- Root class `ht-term2` (parts use `ht-term2__…`, variants `--…`).
- Always dark, in the system's terminal ground.
- Lines appear one by one (off under reduced motion).
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
