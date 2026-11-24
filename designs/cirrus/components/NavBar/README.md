# NavBar

A 43px utility strip (right-aligned small links) over a 66px sticky bar: plain-type name, five links, two buttons.

**Consumer provides:** the name as text (no logo), three to six links (up to three with chevrons), one outline and one primary button.

- Margins `page-margin` (72px at 1440, 40px at 1024, 16px on phones).
- Links are 16/27.2 `on-surface`, 16px padding, no pill; hover turns `primary` over 200ms. Chevrons are 16px.
- Background fades from `surface` to transparent with a 12px backdrop blur (inferred; the source blurs content scrolled beneath).
- Utility links 12.8/19.2, 20px apart, hairline below.
- Under 767px hide the links behind a menu button and keep only the primary button.
