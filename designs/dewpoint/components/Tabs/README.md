# Tabs

A segmented control that switches between panels.

**Consumer provides:** Two to five labels and one panel per label.

- Root class `dp-tabset` (parts use `dp-tabset__…`, variants `--…`).
- Wire with `Dewpoint.initExtras()`; Left/Right arrows move between tabs.
- The selected tab uses the system's primary fill.
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
