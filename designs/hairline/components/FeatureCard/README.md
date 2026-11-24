# FeatureCard

An icon, a title, one sentence and a link in a card that lifts on hover.

**Consumer provides:** A title of two to four words, a sentence under 120 characters, a link label.

- Root class `hl-feat` (parts use `hl-feat__…`, variants `--…`).
- Cards sit in a responsive grid; hover lifts 3px (off under reduced motion).
- The icon sits on the system's soft tint.
- Styled from Hairline's own tokens: ground `surface`, panels `surface-subtle / surface-strong`, ink `text-strong`, secondary text `text-weak`, accent `coral / link`, lines `border-weak / border-strong`, radii `radius-md / radius-xl / radius-pill`.
- Buttons inside it are this system's own (`hl-btn`); motion uses its timing and easing tokens and stops under `prefers-reduced-motion`.
