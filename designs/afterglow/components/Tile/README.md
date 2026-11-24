# Tile

The bento building block: a 12px-radius box in one of six fills — panel, ground, or a grainy ember, teal, warm or sand field — with an eyebrow at the top and content pushed to the bottom.

**Consumer provides:** an eyebrow, a headline or number, one or two lines of body, and an optional foot ("Learn" + outline chips, or a link). Size it with grid spans inside `ag-bento`.

- Markup: `div.ag-tile.ag-tile--{panel|ground|ember|teal|warm|sand} > p.ag-eyebrow + div.ag-tile__foot`.
- Gradient tiles re-scope `ink/muted/faint/border` so their text and chips just work; they carry grain automatically.
- Per viewport: at most one ember, one teal, one warm/sand; everything else `panel`.
- Headlines in gradient tiles: `ag-h2`, set low; body in `ag-body`, max 2 lines on ember.
