# ListRows

A stack of title + description rows separated by hairlines, used for menus of capabilities inside a gradient or panel tile.

**Consumer provides:** 3–7 items `{title, description?}`; the first or active one may show its description, the rest titles only.

- Markup: `div.ag-rows > a.ag-row > (span.ag-title-s + span.ag-small)`.
- Hover dims the title to `muted`; rows are links, focusable with the standard ring.
