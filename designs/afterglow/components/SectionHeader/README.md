# SectionHeader

A short full-width panel tile that opens a section: eyebrow and `heading-1` on the left, one or two sentences of body on the right.

**Consumer provides:** eyebrow, title (2–5 words), body (≤ 2 lines).

- Markup: `div.ag-tile.ag-tile--panel.ag-head > (div > p.ag-eyebrow + h2.ag-h1) + p.ag-body`.
- Sits directly above a grid of demo tiles with the standard 12px gap; one per section at most.
