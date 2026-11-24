# Button

2px-bordered pills with a 300ms `ease` transition on every property. Five faces for light and photo grounds.

**Consumer provides:** a sentence-case label of one to three words ("Book a tour", "Start free"). Trailing-dot buttons add a 30px white circle with a chevron.

| Variant | Classes | When |
| --- | --- | --- |
| Primary | `cr-btn` | The main action. `primary` (#0f62fe) fill and border, white label, 8px 20px padding, 40px radius. Large: add `cr-btn--lg` (12px 24px, 24px radius, 500 weight). |
| Outline | `cr-btn cr-btn--outline` | Companion on light. 2px `outline-strong` border; hover fills `on-surface` with a `surface` label. |
| Glass | `cr-btn cr-btn--glass` | Over photography. 10% white fill, 2px white border, 35px backdrop blur; hover fills white with a black label. |
| Light | `cr-btn cr-btn--light` | Solid white pill on dark or photo. |
| Trailing dot | `cr-btn cr-btn--icon` (+ `is-blue`, `is-light`) | "Learn more" on cards. 8px 8px 8px 20px padding, 50px radius, 500 weight. |
| Link | `cr-btn cr-btn--link` | Inline 20px blue link; hover lightens and underlines. |

- **Hover** on primary is `primary-hover` (#4589ff, the source value). White on it is 3.3:1, so add `cr-btn--safe` to use `primary-hover-safe` (#0043ce, 7.8:1).
- Disabled: `disabled` attribute; `surface-container-higher` ground, `on-surface-variant` label.
- No shadow, no uppercase, no icon-only primaries. One primary per view.
