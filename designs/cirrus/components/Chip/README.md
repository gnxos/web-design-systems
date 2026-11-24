# Chip

A small pill or tag label for categories, states and meta.

**Consumer provides:** One to two words; a variant (neutral, outline, accent, solid, live).

- Root class `cr-badge` (parts use `cr-badge__…`, variants `--…`).
- Use `--outline` for quiet tags, `--accent` for one highlight per view, `--live` for a pulsing status dot.
- State is always a word, never colour alone.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
