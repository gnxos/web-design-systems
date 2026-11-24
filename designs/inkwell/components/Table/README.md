# Table

A data table with a labelled header row, hairline rows and right-aligned numbers.

**Consumer provides:** A header row and rows of up to four columns.

- Root class `ik-dtable` (parts use `ik-dtable__…`, variants `--…`).
- Numerals are right-aligned with tabular figures.
- The wrapper scrolls horizontally on narrow screens.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
