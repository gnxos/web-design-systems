# Table

A data table with a labelled header row, hairline rows and right-aligned numbers.

**Consumer provides:** A header row and rows of up to four columns.

- Root class `ht-dtable` (parts use `ht-dtable__…`, variants `--…`).
- Numerals are right-aligned with tabular figures.
- The wrapper scrolls horizontally on narrow screens.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
