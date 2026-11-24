# Dropdown

A trigger and a menu of options with the selected one checked.

**Consumer provides:** Two to eight labelled options, one selected.

- Root class `ag-select` (parts use `ag-select__…`, variants `--…`).
- Wire with `Afterglow.initExtras()`; Up/Down, Enter and Esc work.
- Selected is bold plus a check, never colour alone.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
