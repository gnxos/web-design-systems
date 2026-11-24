# FeatureCard

A small panel tile: a 24px ringed icon box top-left, then title, two lines of description and a link at the bottom.

**Consumer provides:** a 14px line icon, a title (1–3 words), a description (≤ 2 lines), a link label.

- Markup: `div.ag-tile.ag-tile--panel > span.ag-icon-box + div.ag-tile__foot > (p.ag-title-s + p.ag-small + a.ag-link)`; padding `space-5`.
- Used in 2×3 or 1×4 grids beside a gradient tile; all cards in a row share height.
