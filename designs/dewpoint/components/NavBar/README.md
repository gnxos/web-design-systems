# NavBar

A 52px bar: plain-type name at the left, pill links, compact actions pushed right, and a hairline under it.

**Consumer provides:** the name as text (no logo), three to five links, one secondary and one primary compact action.

- Links are 36px pills, `on-surface-variant`; hover fills `secondary-hover` and turns the text `on-surface` over 150ms. The current page uses `secondary-fill`.
- Dropdown links carry an 18px chevron that rotates 180° when open (160ms, `ease-out-quart`).
- Sticky, `surface` ground with `blur-md` backdrop; hairline `outline-hairline`.
- Under 1024px collapse links into a menu button (a compact primary pill). Keep actions to two.
