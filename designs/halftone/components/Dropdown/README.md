# Dropdown

A trigger and a menu of options with the selected one checked.

**Consumer provides:** Two to eight labelled options, one selected.

- Root class `ht-select` (parts use `ht-select__…`, variants `--…`).
- Wire with `Halftone.initExtras()`; Up/Down, Enter and Esc work.
- Selected is bold plus a check, never colour alone.
- Styled from Halftone's own tokens: ground `canvas`, panels `surface / surface-strong`, ink `ink`, secondary text `ink-secondary`, accent `pink`, lines `line`, radii `radius-lg / radius-pill`.
- Buttons inside it are this system's own (`ht-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
