# PillTabs

A row of large pill tabs that switches the panel below it. Lives on the dark band (`hl-band`: `surface-band`, `radius-xl`, `space-8` padding).

**Provide:** a container `hl-pilltabs` with `role="tablist"`; each tab a `<button class="hl-pilltab" role="tab" aria-controls="panel-id">` with `aria-selected`; each panel `role="tabpanel"` with `class="hl-tabpanel"` and `hidden` on the inactive ones. Call `Hairline.init()` (or `Hairline.tabs()`) to wire clicks and arrow keys.

- Selected: `orchid` fill, `on-accent` label. Unselected: `surface-band-raised`, `text-on-band`.
- 56px tall, `space-2` × `space-4` padding, `radius-tab`, `button` type style, `space-1` gap; wraps on small screens.
- Three to five tabs, two- or three-word labels. Panels cross-fade in `dur-base`.

Don't: use on white surfaces (use secondary buttons there), mix icons into labels, select more than one.
