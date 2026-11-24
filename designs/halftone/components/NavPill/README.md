# NavPill

The floating black pill navigation: product name left, sans links centre, a white "SIGN IN" and a pink "GET STARTED" pill right.

**Consumer provides:** product name (text, no invented mark), 3–5 links, the two actions.

- Markup: `nav.ht-nav > span.ht-nav__brand + div.ht-nav__links + div.ht-nav__actions`.
- Stays black over every section, inset `grid-margin` from the edges, sticky at the top.
- Link hover turns pink in `dur-base`.
