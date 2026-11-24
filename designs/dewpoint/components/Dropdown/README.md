# Dropdown

A compact secondary button that opens a 16px-radius menu of options with a check on the selected one.

**Consumer provides:** a list of two to eight labelled options, one selected by default; optional `<small>` hints and one separator.

- Wire with `.dp-dropdown` plus `Dewpoint.init()`; it sets `aria-expanded`, handles arrows, Enter, Esc and outside click.
- Menu: `surface` ground, 1px `outline-hairline`, `shadow-menu` (deeper in dark), 4px padding, items 8px radius, 8px 12px padding.
- Open and close: opacity, translateY(4px→0) and visibility over 160ms with `ease-out-quart`. The chevron rotates 180° on the same timing.
- Hover or keyboard focus fills `surface-container-high`. Selected is 600 weight with a visible check, so selection is never colour alone.
