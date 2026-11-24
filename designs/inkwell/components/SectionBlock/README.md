# SectionBlock

The rounded colour field every section lives in: inset 20px from the page edge, 20px corners, stacked with 20px gaps.

**Use** `<div class="ik-page">` around the page, then one `<section class="ik-block …">` per section with an `.ik-block__inner` (max 1480px, centred) inside. The consumer provides the section content.

| Tone | Markup | Typical content |
| --- | --- | --- |
| Powder | `ik-block ik-block--powder` | Hero, feature explainer with diagram, product cards, benchmark/report promo |
| Ink | `ik-block` + `data-theme="dark"` | Logo strip, review strip, testimonials, stats, footer |
| Fog | `ik-block ik-block--fog` | 3-up feature grid, "toolkit" list |
| Paper | `ik-block` | Stat + chart, closing CTA with confetti |

- Alternate tones down the page; never two of the same tone adjacent.
- Vertical padding `space-section` (≈138px desktop, 64px mobile); short strips (logos, reviews) use `ik-block--compact`.
- Add `data-ik-confetti` to a powder or paper block to scatter moving doodles near its edges.
