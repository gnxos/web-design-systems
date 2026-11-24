# Dropdown

A trigger and a menu of options with the selected one checked.

**Consumer provides:** Two to eight labelled options, one selected.

- Root class `ik-select` (parts use `ik-select__…`, variants `--…`).
- Wire with `Inkwell.initExtras()`; Up/Down, Enter and Esc work.
- Selected is bold plus a check, never colour alone.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
