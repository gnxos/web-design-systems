# NavBar

A transparent, borderless header `header-height` (68px) tall: plain-type wordmark on the left, four or five links, two compact pills on the right.

**Provide:** `<header class="hl-nav">` holding an `hl-wordmark` link (your product name as text; CSS adds the `coral` dot), a `ul.hl-nav__links`, and `hl-nav__actions` with a secondary and a primary `hl-btn--nav`. A link with a dropdown uses the Menu component.

- Links: `nav` style in `text-strong`; hover underlines (4px offset). No active-page pill, no bottom border, no background until you need a sticky header (then `surface` and `z-header`).
- Below `bp-sm` the links hide; keep the two pills or collapse them to one primary.
- The wordmark is type, never a drawn logo: 22px, weight 400, -0.4px tracking.

Don't: add a shadow or rule under the header, put more than two buttons in it, colour the links.
