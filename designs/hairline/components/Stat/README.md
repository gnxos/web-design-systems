# Stat

A large numeral over a rule with a one-line caption.

**Consumer provides:** A numeral (2 to 6 characters) and a caption under 80 characters.

- Root class `hl-kpi` (parts use `hl-kpi__…`, variants `--…`).
- Use real figures only; three per row at most.
- Numerals use tabular-friendly sizing and the system's display weight.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
