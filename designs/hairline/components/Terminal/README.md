# Terminal

A command window with a title bar and lines that reveal in turn.

**Consumer provides:** Three to six lines; mark commands with the prompt span.

- Root class `hl-term2` (parts use `hl-term2__…`, variants `--…`).
- Always dark, in the system's terminal ground.
- Lines appear one by one (off under reduced motion).
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
