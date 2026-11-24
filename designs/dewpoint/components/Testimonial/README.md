# Testimonial

A portrait mark, a quote, and the speaker's name and role.

**Consumer provides:** A quote under 160 characters, a name and a role.

- Root class `dp-quote` (parts use `dp-quote__…`, variants `--…`).
- The mark is an initial on a tint; swap in an illustration, never a stock photo.
- Stacks under 620px.
- Styled from Dewpoint's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `accent / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-lg / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`dp-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
