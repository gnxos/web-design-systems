# Accessibility

WCAG 2.x contrast, computed from the tokens. Translucent colours are composited on the ground first.

## Dark

| Foreground | Ground | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| `on-surface` | `surface` | 18.62 | 4.5 | pass |
| `on-surface` | `surface-container` | 16.47 | 4.5 | pass |
| `on-surface` | `fill-secondary` | 11.20 | 4.5 | pass |
| `on-surface` | `fill-secondary-hover` | 7.15 | 4.5 | pass |
| `on-surface-variant` | `surface` | 7.93 | 4.5 | pass |
| `on-surface-variant` | `surface-container` | 7.02 | 4.5 | pass |
| `on-surface-variant` | `surface-container-high` | 6.58 | 4.5 | pass |
| `on-surface-muted` | `surface` | 5.46 | 4.5 | pass |
| `on-surface-muted` | `surface-container` | 4.83 | 4.5 | pass |
| `on-primary` | `primary` | 15.91 | 4.5 | pass |
| `on-primary` | `primary-hover` | 7.59 | 4.5 | pass |
| `success` | `surface` | 15.99 | 4.5 | pass |
| `success` | `surface-container` | 14.15 | 4.5 | pass |
| `danger` | `surface` | 5.52 | 4.5 | pass |
| `danger` | `surface-container` | 4.88 | 4.5 | pass |
| `warm` | `warm-container` | 8.99 | 4.5 | pass |
| `blue` | `surface` | 5.14 | 3 | pass |
| `violet` | `surface` | 5.25 | 3 | pass |
| `amber` | `surface` | 9.60 | 3 | pass |
| `outline-strong` | `surface` | 4.12 | 3 | pass |
| `outline-strong` | `surface-container` | 3.64 | 3 | pass |
| `focus-ring` | `surface` | 10.99 | 3 | pass |
| `outline-hairline` | `surface` | 1.34 | 3 | flag |
| `on-surface-disabled` | `surface` | 2.60 | 4.5 | flag |
| `paper-ink` | `paper` | 15.58 | 4.5 | pass |

## Light

| Foreground | Ground | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| `on-surface` | `surface` | 18.27 | 4.5 | pass |
| `on-surface` | `surface-container` | 16.74 | 4.5 | pass |
| `on-surface` | `fill-secondary` | 15.29 | 4.5 | pass |
| `on-surface` | `fill-secondary-hover` | 13.66 | 4.5 | pass |
| `on-surface-variant` | `surface` | 6.52 | 4.5 | pass |
| `on-surface-variant` | `surface-container` | 5.97 | 4.5 | pass |
| `on-surface-variant` | `surface-container-high` | 5.61 | 4.5 | pass |
| `on-surface-muted` | `surface` | 5.38 | 4.5 | pass |
| `on-surface-muted` | `surface-container` | 4.92 | 4.5 | pass |
| `on-primary` | `primary` | 18.27 | 4.5 | pass |
| `on-primary` | `primary-hover` | 9.36 | 4.5 | pass |
| `success` | `surface` | 5.89 | 4.5 | pass |
| `success` | `surface-container` | 5.40 | 4.5 | pass |
| `danger` | `surface` | 6.17 | 4.5 | pass |
| `danger` | `surface-container` | 5.65 | 4.5 | pass |
| `warm` | `warm-container` | 5.61 | 4.5 | pass |
| `blue` | `surface` | 6.70 | 3 | pass |
| `violet` | `surface` | 7.54 | 3 | pass |
| `amber` | `surface` | 6.43 | 3 | pass |
| `outline-strong` | `surface` | 3.99 | 3 | pass |
| `outline-strong` | `surface-container` | 3.65 | 3 | pass |
| `focus-ring` | `surface` | 6.70 | 3 | pass |
| `outline-hairline` | `surface` | 1.24 | 3 | flag |
| `on-surface-disabled` | `surface` | 2.00 | 4.5 | flag |
| `paper-ink` | `paper` | 15.58 | 4.5 | pass |

## Flags and safe choices
- `outline-hairline` and `outline` are decorative frame rules and stay below 3:1 as measured. Use `outline-strong` for any boundary a person needs to find (fields already do).
- `on-surface-disabled` is for disabled controls and not-yet-resolved words only.
- Where `on-surface-muted` is flagged on a container, use `on-surface-variant`.
- Text over media depends on the picture: always keep `media-scrim` under it.
- Buttons are 32px tall (source). That passes WCAG 2.2 target size (24px); use `gl-btn--lg` (44px) for touch-first primaries.
- Blur reveals keep the full text available to assistive technology and stop under reduced motion.
