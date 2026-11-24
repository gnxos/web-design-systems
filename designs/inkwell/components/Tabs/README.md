# Tabs

A segmented control that switches between panels.

**Consumer provides:** Two to five labels and one panel per label.

- Root class `ik-tabset` (parts use `ik-tabset__…`, variants `--…`).
- Wire with `Inkwell.initExtras()`; Left/Right arrows move between tabs.
- The selected tab uses the system's primary fill.
- Styled from Inkwell's own tokens: ground `surface`, panels `surface-fog`, ink `ink`, secondary text `ink (68% mix)`, accent `powder`, lines `line / line-strong`, radii `radius-l / radius-xl / radius-m`.
- Buttons inside it are this system's own (`ik-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
