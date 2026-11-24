# Terminal

A dark mono panel that shows an agent or CLI run: a header bar with a live status, a prompt, a tool call, tree-indented steps, a short answer with source chips, and an input row — lines rising in one by one.

**Consumer provides:** a title for the bar, a status, the transcript lines (prompt, tool, steps, answer), source tags, and an input placeholder.

- Stays dark in both themes (`term-*` tokens). Mono 13/20; tool names `ag-term__tool`; steps in `ag-term__muted` with ├ └; prompt glyph `ag-term__prompt`.
- Wrap lines in `ag-term__body ag-line-in` and call `Afterglow.init()` to stagger them (`data-step`, default 90ms).
- Label sample data with a `caption` under the panel.
