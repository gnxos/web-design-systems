# Dropdown

A trigger and a menu of options with the selected one checked.

**Consumer provides:** Two to eight labelled options, one selected.

- Root class `cr-select` (parts use `cr-select__…`, variants `--…`).
- Wire with `Cirrus.initExtras()`; Up/Down, Enter and Esc work.
- Selected is bold plus a check, never colour alone.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
