# Table

A data table with a labelled header row, hairline rows and right-aligned numbers.

**Consumer provides:** A header row and rows of up to four columns.

- Root class `hl-dtable` (parts use `hl-dtable__…`, variants `--…`).
- Numerals are right-aligned with tabular figures.
- The wrapper scrolls horizontally on narrow screens.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
