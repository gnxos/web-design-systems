# Ticker

A scrolling strip of short highlights that pauses on hover.

**Consumer provides:** Four to eight short phrases.

- Root class `ik-ticker2` (parts use `ik-ticker2__…`, variants `--…`).
- Duplicate the track once so the loop is seamless.
- Stops under reduced motion.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
