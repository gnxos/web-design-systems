# Tag

Two small labels: the grey uppercase **tag** for skills and categories, and the pastel **highlight label** for naming a person, a workflow or a phrase.

**Provide:** a `<span>` with `hl-tag` (wrap several in `hl-tags`), or `hl-label` plus one colour modifier; short text. For a highlight inside running text, wrap the words in `hl-mark`.

- Tag: `surface-strong` fill, `text-strong` text, `tag` style (11px, 500, uppercase, 0.44px), 4px × `space-1` padding, `radius-sm`. Write sentence case in the markup; CSS uppercases it.
- Highlight label: `--mint`, `--highlighter`, `--orchid`, `--sky`, `--blush` or `--lilac`, always with `on-accent` text, 14px, `radius-sm`. One or two per composition, like a highlighter pen, not a rainbow.

Don't: use tags as buttons, put white text on the pastels, use status colours here.
