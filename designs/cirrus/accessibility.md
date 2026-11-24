# Accessibility and contrast

WCAG 2 ratios computed from the token values. Text needs 4.5:1 (3:1 at 24px or larger); borders, focus rings and icons need 3:1.

## Passing pairs

| Pair | Light | Dark |
| --- | --- | --- |
| `on-surface` on `surface` | 16.8 | 21.0 |
| `on-surface` on `surface-container` | 15.5 | n/a |
| `on-surface-variant` on `surface` | 5.0 | 6.3 |
| `on-surface-variant` on `surface-container` | 4.6 | 5.8 |
| `on-primary` on `primary` | 5.0 | 5.0 |
| `accent-text` on `surface` | 5.0 | 6.3 |
| `blue-dark` on `blue-light` | 11.5 | 11.5 |
| `success-text` on `surface` / `success-soft` | 5.0 / 4.6 | high |
| `danger-text` on `surface` / `danger-soft` | 5.0 / 4.6 | high |
| `outline-strong` on `surface` (non-text) | 16.8 | 21.0 |
| `tab-muted-safe` on `surface` | 4.7 | 8.0 |
| `on-night` on `night` | 21.0 | 21.0 |

## Flags

Values taken from the reference page and kept exactly; each has a safe alternative.

| Where | Value | Ratio | Problem | Use instead |
| --- | --- | --- | --- | --- |
| White label on primary hover | `#ffffff` on `#4589ff` | 3.3 | below 4.5 at 16px | `primary-hover-safe` `#0043ce` (7.8) via `cr-btn--safe` |
| Inactive tab label | 50% ink on white (`tab-muted`) | 3.3 | below 4.5 at 13px | `tab-muted-safe` `#737374` (4.7) |
| Blue text on `blue-light` | `#0f62fe` on `#d0e2ff` | 3.8 | below 4.5 | `blue-dark` (11.5) or `primary-hover-safe` (5.9) |
| `on-surface-variant` on `surface-container-high` | `#6f6f6f` on `#edeef0` | 4.3 | slightly below 4.5 | use `on-surface` on that ground |
| `accent-text` on `surface-container` | `#0f62fe` on `#f5f5f7` | 4.6 | marginal | use `primary-hover-safe` (7.1) for small text |
| White text over sky art | depends on image | varies | cannot be guaranteed | add a `photo-scrim` (bottom-weighted 40–65% black) |
| Glass cards (10% fill) | white on image | varies | same | add a deeper tint behind the text |
| White initial in `#4589ff` avatar | `#ffffff` on `#4589ff` | 3.3 | below 4.5 for 12px | use a darker avatar fill |

## Notes

- The reference has no reduced-motion handling; Cirrus adds it (see `motion.md`).
- Status never relies on colour alone: tags carry words and risk/growth squares sit beside a text count.
- Focus is always visible: 2px `focus-ring`, 2px offset. Touch targets: buttons 47px high (36px at compact sizes only on desktop).
- Blur-in headings keep their full text in `aria-label`.
