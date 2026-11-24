# Ticker

A scrolling strip of short highlights that pauses on hover.

**Consumer provides:** Four to eight short phrases.

- Root class `hl-ticker2` (parts use `hl-ticker2__…`, variants `--…`).
- Duplicate the track once so the loop is seamless.
- Stops under reduced motion.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
