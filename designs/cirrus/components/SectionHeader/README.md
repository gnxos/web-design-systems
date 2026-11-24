# SectionHeader

A kicker, headline and lead that open a section, left aligned or centred.

**Consumer provides:** A kicker word, a headline of up to ten words, one lead sentence.

- Root class `cr-shead` (parts use `cr-shead__…`, variants `--…`).
- `--center` centres it and the lead.
- Headline uses the system's section heading style.
- Styled from Cirrus's own tokens: ground `surface`, panels `surface-container`, ink `on-surface`, secondary text `on-surface-variant`, accent `primary / accent-text`, lines `outline-hairline / outline-strong`, radii `radius-card / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`cr-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
