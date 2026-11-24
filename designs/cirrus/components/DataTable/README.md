# DataTable

A product table: 13px 600 headers, 16px cells, hairline rows, a mono role chip with a round avatar in the first column.

**Consumer provides:** a header row, rows of one role, one name and up to three numeric columns.

- Role chip `cr-role`: `blue-light` ground, `blue-dark` text in the mono face (11.5:1), 26px avatar. Do not use the primary blue on `blue-light` (3.8:1).
- Numbers right-aligned with `tabular-nums`. Rows separated by 1px `outline-hairline`; header rule the same.
- The wrapper has a 24px radius and scrolls horizontally on narrow screens.
- Avatar fills come from the data tokens (`sky`, `magenta`, `purple`, grey); the initial is white 12px 600 (use darker fills than `#4589ff` if the initial must be read: 3.3:1).
