# Terminal

A command window with a title bar and lines that reveal in turn.

**Consumer provides:** Three to six lines; mark commands with the prompt span.

- Root class `ik-term2` (parts use `ik-term2__…`, variants `--…`).
- Always dark, in the system's terminal ground.
- Lines appear one by one (off under reduced motion).
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
