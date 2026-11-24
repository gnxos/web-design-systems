# Stat

A large numeral over a rule with a one-line caption.

**Consumer provides:** A numeral (2 to 6 characters) and a caption under 80 characters.

- Root class `cr-kpi` (parts use `cr-kpi__…`, variants `--…`).
- Use real figures only; three per row at most.
- Numerals use tabular-friendly sizing and the system's display weight.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
