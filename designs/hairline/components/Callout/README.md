# Callout

A small floating card reporting one thing that just happened: who (orb + label) and what, in one or two lines. Callouts are the nodes of the work graph and the only in-flow element with a shadow.

**Provide:** `<div class="hl-callout">` holding an optional `hl-orb--sm`, then a block with one `hl-label` and a `<p class="hl-callout__text">` (wrap the key fact in `<strong>`). Add `hl-callout--enter` to rise in once on load.

- `surface` fill, 1px `border-card`, `radius-callout` (10px), `shadow-float`, 12px × 14px padding, max 300px wide; text 14/20 in `text`, the strong part in `text-strong` 500.
- Copy is past tense and concrete: "Moved the beta to Thursday and told three owners." Under 12 words.
- Enter: fade + 12px rise, `dur-slow` `ease-out`; stagger several by 120ms.

Don't: put buttons in a callout, use more than one label, stack more than four on one canvas.
