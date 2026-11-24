# Button

Pill buttons, 47px large or 36px compact, with a 150ms ease-out fill change and a 2px focus ring.

**Consumer provides:** a sentence-case label of one to three words and, for primary, an optional 24px trailing icon (20px when compact).

| Variant | Classes | When |
| --- | --- | --- |
| Primary | `dp-btn dp-btn--primary` | The one main action. `primary` fill, `on-primary` label, `primary-hover` on hover. Trailing icon sits 16px from the edge. |
| Secondary | `dp-btn dp-btn--secondary` | The companion action. `secondary-fill` with a `blur-sm` backdrop and `outline-hairline` edge. |
| Outline | `dp-btn--outline` | Source-faithful ring (12% ink). Looks right; its edge is 1.3:1 so use Outline strong where the edge is the only cue. |
| Outline strong | `dp-btn--outline-strong` | Safe alternative: `outline-strong` edge, 3.4:1. |
| Accent | `dp-btn--accent` | Rare highlight. `accent-text` fill with `on-accent-text` label (5.5:1 light). Do not use raw `accent` behind white text (4.0:1). |
| Text | `dp-btn--text` | Tertiary actions. Fill appears on hover only. |
| Compact | add `dp-btn--compact` | Nav and toolbars. 6px 16px padding, `body-sm` label. |

- Hover changes fill only. Press scales to 0.98 over 180ms (inferred; the source shows no transform).
- Disabled: `disabled` attribute; `disabled-fill` ground and `disabled-text` label, no pointer events.
- Icons nudge 2px on hover (`svg.nudge` up-right, `svg.nudge-down`). Remove under reduced motion.
- Never two primaries in one view. Never uppercase, never a drop shadow.
