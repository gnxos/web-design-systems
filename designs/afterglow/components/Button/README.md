# Button

Light-on-dark primary, ringed secondary and text-only ghost buttons with 8px corners, a 120ms hover and a 0.97 press.

**Consumer provides:** a short label (sentence case) and, optionally, a trailing → or a leading 14px icon.

| Variant | Classes | When |
| --- | --- | --- |
| Primary | `ag-btn ag-btn--primary` | The one main action in view ("Get started"). Light fill in Dark, dark fill in Light. |
| Secondary | `ag-btn ag-btn--secondary` | The second action ("Read the docs →"). `panel` fill + `shadow-btn` ring. |
| Ghost | `ag-btn ag-btn--ghost` | Tertiary actions inside tiles ("Replay"). |
| Small | add `ag-btn--sm` | Header CTA, toolbar actions (28px). |
| Link | `ag-link` | "See all →" at a tile's foot. |

- 40px (`control-lg`) default, 28px small; never pill-shaped; never coloured with `ember` or `signal`.
- Inside ember/teal tiles the secondary inherits the tile's scoped ring and translucent panel automatically.
