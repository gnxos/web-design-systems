# Accessibility and contrast

WCAG 2 ratios computed from the token values. Text needs 4.5:1 (3:1 at 24px or larger); borders, focus rings and icons need 3:1.

## Passing pairs

| Pair | Light | Dark |
| --- | --- | --- |
| `on-surface` on `surface` | 18.6 | 17.6 |
| `on-surface-variant` on `surface` | 9.3 | 9.6 |
| `on-surface-variant` on `surface-container-high` | 8.3 | 8.2 |
| `on-primary` on `primary` | 18.6 | 17.6 |
| `on-primary` on `primary-hover` | 13.2 | n/a |
| `on-accent-text` on `accent-text` | 5.5 | 8.8 |
| `accent-text` on `surface` | 5.5 | 8.8 |
| `on-surface` on `announce-fill` | 17.6 | 15.1 |
| `on-night` on `night` | 21 | 21 |
| `outline-strong` on `surface` (non-text) | 3.4 | 3.4 |
| `focus-ring` on `surface` (non-text) | 4.0 | 8.8 |

## Flags

These are values taken from the reference page. They are kept exactly; each has a safe alternative.

| Where | Value | Ratio | Problem | Use instead |
| --- | --- | --- | --- | --- |
| `accent` as text on `surface` | `#3279f9` | 4.0 | below 4.5 for body-size text | `accent-text` (`#1b62dc` light, `#8ab4f8` dark) |
| White text on `accent` fill | `#ffffff` on `#3279f9` | 4.0 | below 4.5 under 24px | `dp-btn--accent` (accent-text fill) |
| `outline` (12% ink) as the only edge of a control | `#2122261f` | 1.3 | below 3:1 for UI components | `outline-strong` |
| `outline-hairline` as a control edge | `#2122260f` | 1.1 | decorative only | keep for dividers; never for inputs |
| `disabled-text` on `disabled-fill`, light | `#6a6a71` on `#e1e6ec` | 4.3 | disabled text is exempt, but weak | acceptable; do not use for live text |
| `disabled-text` on `surface`, dark (source value) | `#6a6a71` on `#121317` | 3.5 | weak | dark theme uses `#8b8f98` (4.9 on `surface-container-high`) |
| Fleck colours | various | n/a | decorative, never text | keep text off flecks |

## Dark theme

The reference page is light-only; its dark values were derived from its inverse tokens and from the dark-scoped announcement bar and menu. Treat Dark as a faithful extension, not a measurement.

## Other rules

- Never carry meaning by colour alone: badges say "New", the selected menu item is bold with a check, states have a word.
- Focus is always visible: 2px solid `focus-ring`, 2px offset.
- Touch targets: large buttons 47px, compact 36px (use the large size on phones for primary actions), icon buttons 44px.
- Motion stops under `prefers-reduced-motion` (see `motion.md`).
- The typed headline keeps its full text in `aria-label`.
