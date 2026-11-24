# Ticker

A scrolling strip of short highlights that pauses on hover.

**Consumer provides:** Four to eight short phrases.

- Root class `dp-ticker2` (parts use `dp-ticker2__…`, variants `--…`).
- Duplicate the track once so the loop is seamless.
- Stops under reduced motion.
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
