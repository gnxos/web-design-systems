# Chip

A small pill or tag label for categories, states and meta.

**Consumer provides:** One to two words; a variant (neutral, outline, accent, solid, live).

- Root class `ik-badge` (parts use `ik-badge__…`, variants `--…`).
- Use `--outline` for quiet tags, `--accent` for one highlight per view, `--live` for a pulsing status dot.
- State is always a word, never colour alone.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
