# Tabs

A segmented control that switches between panels.

**Consumer provides:** Two to five labels and one panel per label.

- Root class `ag-tabset` (parts use `ag-tabset__…`, variants `--…`).
- Wire with `Afterglow.initExtras()`; Left/Right arrows move between tabs.
- The selected tab uses the system's primary fill.
- Styled from Afterglow's own tokens: ground `canvas`, panels `panel / raised`, ink `ink`, secondary text `muted`, accent `signal`, lines `border / border-strong`, radii `radius-xl / radius-lg / radius-sm`.
- Buttons inside it are this system's own (`ag-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
