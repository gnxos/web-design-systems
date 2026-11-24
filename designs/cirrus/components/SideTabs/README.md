# SideTabs

A sticky left column (262px) of uppercase tab labels with a 2px rule under each; the active rule fills as its section scrolls past.

**Consumer provides:** two to five labels of 2–4 words. Set `--progress` (0–100%) on the active tab (`Cirrus.tabs(root).set(index, percent)`).

- Label 13/20 600 uppercase, 0.2px tracking; 11px under 767px.
- Inactive: `tab-muted-safe` (4.7:1). The source value is 50% ink (3.3:1), which fails; kept as `tab-muted` and flagged.
- Rule: 2px `outline-hairline`, the fill is `on-surface`, width changes over 0.1s linear (the same timing as the page's scroll bar).
- The 2px page progress bar (`cr-progress`, `#e0e0e0` track, black fill) sits above the tabs and sticks to the top.
- On phones the tabs become a horizontal scroll strip.
