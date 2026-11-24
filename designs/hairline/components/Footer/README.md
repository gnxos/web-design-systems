# Footer

A footer with brand, three link columns and a base row.

**Consumer provides:** A brand line, one sentence, 3 to 4 links per column.

- Root class `hl-foot` (parts use `hl-foot__…`, variants `--…`).
- Ground and ink come from the system's footer roles.
- Columns drop to two under 700px.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
