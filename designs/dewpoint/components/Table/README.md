# Table

A data table with a labelled header row, hairline rows and right-aligned numbers.

**Consumer provides:** A header row and rows of up to four columns.

- Root class `dp-dtable` (parts use `dp-dtable__…`, variants `--…`).
- Numerals are right-aligned with tabular figures.
- The wrapper scrolls horizontally on narrow screens.
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
