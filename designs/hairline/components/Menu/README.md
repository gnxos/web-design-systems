# Menu

A dropdown from a nav link: a white panel (`radius-lg`, `shadow-menu`, 1px `border-weak`) with uppercase group labels and two-line items.

**Provide:** `<div class="hl-menu">` with a `<button class="hl-menu__trigger" aria-expanded="false" aria-controls="id">` and a `<div class="hl-menu__panel" id="id" hidden>` of `hl-menu__group` labels and `<a class="hl-menu__item">` links (title, then `<small>` description). An orb may lead an item. Call `Hairline.init()` to wire open, close, Escape and outside clicks.

- Group labels: `tag` style in `text-weak`. Items: `nav` style in `text-strong`, hover `surface-hover`, `radius-md`.
- Opens with a 4px drop and fade, `dur-base` `ease-out`; the chevron turns over in `dur-fast`.

Don't: nest menus, put more than two groups or eight items in one panel, use the menu for actions that change data.
