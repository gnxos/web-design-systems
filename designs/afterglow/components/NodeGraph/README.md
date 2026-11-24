# NodeGraph

A hub-and-spoke graph: one light hub card in the centre, dark chips around it on thin lines, each chip with a series-coloured dot and a type label; nodes pop in on load.

**Consumer provides:** the hub (label + ID/meta line) and 6–12 nodes `{label, meta, series 1–4, x, y}` in percent; a legend for the series.

- `<div class="ag-graph" data-ag-graph='{"hub":…,"nodes":[…]}'>` + `Afterglow.init()`, or `Afterglow.graph(el, data)`.
- Series colours: 1 ember (your data), 2 teal (third-party), 3 sand (first-party), 4 grey.
- Static export: Assets → Fields → `node-graph.svg`.
