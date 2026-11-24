# WorkGraph

The signature hero image: floating callouts and orb avatars joined by 1px hairline connectors with small node discs where the lines turn. It shows work connected and moving, without screenshots.

**Provide:** `<div class="hl-graph" data-hl-draw>` with an `<svg class="hl-graph__wires" viewBox="0 0 960 540">` of `hl-wire` paths (right-angle steps only) and `hl-node` circles (r 5) at each turn, then `hl-graph__item` wrappers placed with `left`/`top` percentages (matching the SVG coordinates ÷ 960 and ÷ 540). Add `hl-float` to items that should drift, `data-hl-optional` to items that can drop on phones. Call `Hairline.init()`.

- Wires `text-strong`, 1px, never curved or diagonal; nodes `surface` fill with a `text-strong` ring; one `hl-node--live` (coral, pulsing) per graph at most.
- One large orb at the centre (`hl-orb--lg`), two to four callouts around it, plus a wire or two running off the edges to suggest a bigger graph.
- Motion: wires draw in once when the graph scrolls into view (`dur-draw`, `ease-out`, 120ms stagger); callouts float ±6px over `dur-float`, alternating phase. All of it stops under reduced motion.
- Give the container `role="img"` and an `aria-label` that says what the graph shows.

Don't: use colour on the wires, cross lines, add arrowheads, crowd more than five items.
