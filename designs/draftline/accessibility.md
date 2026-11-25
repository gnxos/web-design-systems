# Accessibility

WCAG 2.x contrast, computed from the tokens. Translucent colours are composited on the ground first.

## Dark

| Foreground | Ground | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| `on-surface` | `surface` | 17.23 | 4.5 | pass |
| `on-surface` | `surface-raised` | 16.09 | 4.5 | pass |
| `on-surface-variant` | `surface` | 9.85 | 4.5 | pass |
| `on-surface-variant` | `surface-raised` | 9.20 | 4.5 | pass |
| `on-surface-muted` | `surface` | 6.18 | 4.5 | pass |
| `on-surface-muted-safe` | `surface` | 7.45 | 4.5 | pass |
| `on-surface-muted-safe` | `surface-sunk` | 7.24 | 4.5 | pass |
| `on-primary` | `primary` | 8.25 | 4.5 | pass |
| `on-primary` | `primary-hover` | 6.01 | 4.5 | pass |
| `on-primary-safe` | `primary-safe` | 8.25 | 4.5 | pass |
| `accent-text` | `surface` | 11.32 | 4.5 | pass |
| `accent-text-safe` | `surface` | 11.32 | 4.5 | pass |
| `accent-text-safe` | `surface-raised` | 10.57 | 4.5 | pass |
| `accent-soft` | `surface-raised` | 6.21 | 4.5 | pass |
| `on-banner` | `banner` | 9.60 | 4.5 | pass |
| `code-string` | `surface-raised` | 8.23 | 4.5 | pass |
| `code-keyword` | `surface-raised` | 8.46 | 4.5 | pass |
| `danger` | `surface-raised` | 7.95 | 4.5 | pass |
| `outline-strong` | `surface` | 4.11 | 3 | pass |
| `outline-strong` | `surface-raised` | 3.84 | 3 | pass |
| `focus-ring` | `surface` | 12.72 | 3 | pass |
| `hairline` | `surface` | 1.23 | 3 | flag |

## Light

| Foreground | Ground | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| `on-surface` | `surface` | 18.46 | 4.5 | pass |
| `on-surface` | `surface-raised` | 19.44 | 4.5 | pass |
| `on-surface-variant` | `surface` | 7.42 | 4.5 | pass |
| `on-surface-variant` | `surface-raised` | 7.81 | 4.5 | pass |
| `on-surface-muted` | `surface` | 3.07 | 4.5 | flag |
| `on-surface-muted-safe` | `surface` | 5.06 | 4.5 | pass |
| `on-surface-muted-safe` | `surface-sunk` | 4.76 | 4.5 | pass |
| `on-primary` | `primary` | 2.29 | 4.5 | flag |
| `on-primary` | `primary-hover` | 3.01 | 4.5 | flag |
| `on-primary-safe` | `primary-safe` | 5.27 | 4.5 | pass |
| `accent-text` | `surface` | 2.51 | 4.5 | flag |
| `accent-text-safe` | `surface` | 5.49 | 4.5 | pass |
| `accent-text-safe` | `surface-raised` | 5.78 | 4.5 | pass |
| `accent-soft` | `surface-raised` | 2.09 | 4.5 | flag |
| `on-banner` | `banner` | 3.29 | 4.5 | flag |
| `code-string` | `surface-raised` | 4.91 | 4.5 | pass |
| `code-keyword` | `surface-raised` | 5.39 | 4.5 | pass |
| `danger` | `surface-raised` | 5.44 | 4.5 | pass |
| `outline-strong` | `surface` | 3.41 | 3 | pass |
| `outline-strong` | `surface-raised` | 3.59 | 3 | pass |
| `focus-ring` | `surface` | 5.00 | 3 | pass |
| `hairline` | `surface` | 1.19 | 3 | flag |

## Flags and safe choices
- `on-primary` on `primary` and `primary-hover` (Light) fails: it is the source look. Use `primary-safe` with `on-primary-safe` (`df-btn--safe`).
- `accent-text` (Light) fails as text: use `accent-text-safe`. `accent-soft` is for drawings and decoration.
- `on-surface-muted` is the source resting grey: use `on-surface-muted-safe` (the navigation and footer here already do).
- `on-banner` on `banner` is close to the line in Light: keep banner text bold, or darken the strip.
- `hairline` is decorative. Use `outline-strong` for edges that must be seen.
- Buttons are 34px tall; that passes WCAG 2.2 target size (24px). Make them 44px for touch-first screens.
