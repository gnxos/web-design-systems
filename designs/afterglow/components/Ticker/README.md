# Ticker

A scrolling strip of short highlights that pauses on hover.

**Consumer provides:** Four to eight short phrases.

- Root class `ag-ticker2` (parts use `ag-ticker2__…`, variants `--…`).
- Duplicate the track once so the loop is seamless.
- Stops under reduced motion.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
