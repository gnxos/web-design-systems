# Footer

A hairline-topped footer: tagline plus two link columns, a dark fleck band with 48px bottom corners, and the name set huge across the width.

**Consumer provides:** a tagline (under 30 characters), two columns of four to eight links, and the name.

- Column heads `body-sm` in `on-surface-variant`; links `body-sm` 500 weight in `on-surface`, 4px vertical padding, underline on hover.
- Band: `night` ground with `assets/Fields/fleck-band-dark.svg`, min height 180px, bottom radius `radius-2xl` (48px).
- Wordmark: plain type, `clamp(38px, 23cqi, 340px)`, 450 weight, −0.02em, one line, `aria-hidden`. It is the only place type is allowed to be this large.
- Under 767px columns drop to two and the tagline spans both.
