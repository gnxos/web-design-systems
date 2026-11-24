# Motion

Motion in Hairline is **quick and quiet**: colour changes in 150ms, small arrivals in 250–450ms, and a few slow ambient loops in the work graph. Nothing bounces, nothing overshoots, nothing spins.

The 75–450ms range and the 150ms hover come from the source site. The easing curves and the work-graph timings (`dur-draw`, `dur-pulse`, `dur-float`) are this system's own additions.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `ease-standard` | cubic-bezier(0.25, 0.1, 0.25, 1) | Default: colour, opacity, small moves |
| `ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Arrivals: menus, callouts, wires drawing in |
| `ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Panel swaps, the callout float loop |
| `ease-linear` | linear | Pulses and other loops |
| `dur-instant` | 75ms | Press feedback, focus ring |
| `dur-fast` | 150ms | Hover colour on buttons, tabs, links and fields |
| `dur-base` | 250ms | Menu open, tab-panel cross-fade |
| `dur-slow` | 450ms | Callout entrance, larger panels |
| `dur-draw` | 900ms | One connector wire drawing in |
| `dur-pulse` | 2400ms | One pulse of the live node |
| `dur-float` | 6000ms | One cycle of the callout float |

## The vocabulary

| Pattern | Spec | Class / API |
| --- | --- | --- |
| **Button hover** | fill and label colour change, `dur-fast` `ease-standard`. No scale, no lift. | `hl-btn--*` |
| **Link hover** | underline appears (4px offset); dark theme turns `coral` | `hl-nav__links a` |
| **Tab switch** | selected pill fills `orchid` in `dur-fast`; the new panel fades in over `dur-base` | `hl-pilltabs` + `Hairline.tabs()` |
| **Menu open** | panel fades in and drops 4px from 0.98 scale, `dur-base` `ease-out`; chevron flips in `dur-fast` | `hl-menu` + `Hairline.menus()` |
| **Callout entrance** | fade + 12px rise, `dur-slow` `ease-out`; stagger siblings by 120ms | `hl-callout--enter` |
| **Wire draw-in** | each wire draws from its start to its end once, when the graph is 30% in view; `dur-draw` `ease-out`, 120ms stagger in DOM order | `.hl-graph[data-hl-draw]` + `Hairline.graph()` |
| **Callout float** | ±6px vertical drift, `dur-float` `ease-in-out`, forever; every other item starts half a cycle later | `hl-float` |
| **Live node pulse** | scale 1 → 1.5 → 1 and opacity 1 → 0.55 → 1, `dur-pulse` linear, forever; one per graph | `hl-node--live` |

## Rules

- Hover and focus change colour only. Never move or scale a control on hover.
- At most one ambient loop type per view beyond the work graph (there is normally none).
- Entrances happen once. Don't replay them on scroll back.
- Stagger groups by 120ms, never more than five items.
- Under `prefers-reduced-motion: reduce` every animation and transition stops: wires appear fully drawn, callouts sit still, the live node stays solid, panels and menus appear instantly. `bundle.css` and `bundle.js` already do this.

## Snippet

```html
<div class="hl-graph" data-hl-draw role="img" aria-label="Four updates connected to one plan">
  <svg class="hl-graph__wires" viewBox="0 0 960 540" aria-hidden="true">
    <path class="hl-wire" d="M480 290 V200 H230 V120"/>
    <circle class="hl-node" cx="230" cy="200" r="5"/>
    <circle class="hl-node hl-node--live" cx="480" cy="200" r="5"/>
  </svg>
  <div class="hl-graph__item hl-float" style="left:24%;top:22%">
    <div class="hl-callout"><span class="hl-orb hl-orb--sm"></span>
      <div><span class="hl-label hl-label--mint">Release planner</span>
      <p class="hl-callout__text">Moved the beta to <strong>Thursday</strong>.</p></div></div>
  </div>
</div>
<script>Hairline.init();</script>
```
