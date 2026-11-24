# Button

Ink-and-outline buttons with 10px corners: one filled ink primary, one outline secondary, a small header pair, and the arrow text link.

**Use** `.ik-btn` plus one variant on an `<a>` or `<button>`; the consumer provides the label text only.

| Variant | Classes | When |
| --- | --- | --- |
| Primary, large | `ik-btn ik-btn--lg ik-btn--primary` | The one main action of a block: "GET STARTED". 272×60px, UPPERCASE `button` style. |
| Secondary, large | `ik-btn ik-btn--lg ik-btn--outline` | Beside the primary: "SEE HOW IT WORKS", or alone on ink/powder: "READ THE STORIES →". |
| Header CTA | `ik-btn ik-btn--sm ik-btn--primary` | Top-right of the header, sentence case "Get started". |
| Header outline | `ik-btn ik-btn--nav` | "Log in" next to the header CTA. |
| Text link | `ik-link` | "Learn more", "Read the story" — the arrow is added by CSS. |

- Primary sits left of secondary, 16px apart; centred under a centred headline.
- On an ink block use `data-theme="dark"` on the block: the primary becomes white with black text and the outline turns white.
- Hover: primary → opacity 0.8 (100ms linear); outline → fills ink. Focus: 2px `focus` ring, 2px offset.
- Don't: colour buttons powder, add icons inside CTAs, use more than two buttons in a row, or round them into pills.
