# Motion

Motion in Afterglow is **fast, small and functional**: things respond in ~120ms, content arrives by rising 4px, and the only continuous motion is live data (pulsing dots, a sweeping shimmer, a slow ticker). Nothing floats, bounces or parallaxes. The page itself moves one full-height section at a time with scroll snap.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `duration-fast` | 120ms | Hover colour/background |
| `duration-press` | 140ms | Button press scale |
| `duration-overlay` | 180ms | Menus, tooltips, node/card pop-in |
| `duration-drawer` | 220ms | Drawers, sheets |
| `duration-meter` | 300ms | Bars and meters filling |
| `duration-line-in` | 320ms | One line of a transcript or list rising in |
| `ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Anything that moves or resizes |
| `ease-drawer` | cubic-bezier(0.32, 0.72, 0, 1) | Drawers and sheets |
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | Colour changes and entrances |
| `scale-press` | 0.97 | Pressed button |
| `scale-pop` | 0.96 | Start scale of a popping card/node |

## The vocabulary

| Pattern | Spec | Where | Class |
| --- | --- | --- | --- |
| **Hover** | colour/background/ring, `duration-fast`, `ease-out` | buttons, rows, links, chips | built into `ag-btn`, `ag-row`, `ag-link` |
| **Press** | scale → 0.97, `duration-press` | every button | `ag-btn:active` |
| **Line-in** | each line: opacity 0 → 1, translateY 4px → 0, `duration-line-in`, `ease-out`; lines staggered ~90ms | terminal transcripts, agent output, feeds | `ag-line-in` + `Afterglow.lineIn()` |
| **Pop** | opacity 0 → 1, scale 0.96 → 1, `duration-overlay`, `ease-standard`; staggered ~70ms | graph nodes, cards appearing in a demo, popovers | `ag-node` (automatic), `@keyframes ag-pop` |
| **Pulse dot** | opacity 1 → 0.25 → 1 every 2s | "live"/"connected" status dots | `ag-dot ag-dot--live` |
| **Sonar** | a ring scales 0.2 → 4.2 while fading, 2.4s, two rings offset by half | a new signal arriving on a map or list | `ag-sonar` |
| **Sweep** | a faint white band slides across, 1.6s, `ease-standard` | loading/skeleton rows, "thinking" | `ag-sweep` |
| **Ticker** | a duplicated row translates −50% over ~40s, linear, infinite, edges masked | logo or integration strips | `ag-ticker` + `ag-ticker__track` |
| **Section snap** | `scroll-snap-type: y mandatory`; each `ag-section` is `100vh` with `scroll-snap-align: start` | the page | `ag-snap` on the scroller |
| **Drawer** | translate from the edge, `duration-drawer`, `ease-drawer` | side panels, mobile nav | custom |

## Rules

- **Small distances only:** 4px for content, a 4% scale step for pops. Nothing travels across the screen.
- **Demos replay, they don't loop:** a graph or transcript plays once when it comes into view; offer a "Replay" ghost button (with a ↻ icon) rather than looping.
- **One live element per tile** (a pulsing dot or a sweep), never several.
- **Gradient fields never move.** The light is still; only data moves.
- **Reduced motion:** under `prefers-reduced-motion: reduce` every keyframe stops and press-scaling is off; content is simply present. `bundle.css` handles the kit; custom animations must do the same.

## Snippets

```html
<div class="ag-term">
  <div class="ag-term__bar"><span>Terminal</span><span><i class="ag-dot ag-dot--live"></i> connected</span></div>
  <div class="ag-term__body ag-line-in" data-step="120">
    <div><span class="ag-term__prompt">&gt;</span> Brief me on Halden Labs</div>
    <div><span class="ag-term__tool">account_briefing</span></div>
    <div class="ag-term__muted">├ Read the account record and 12 recent activities</div>
  </div>
</div>
<script>Afterglow.init();</script>
```

## Exported motion (video, GIF, Lottie)

Same grammar: hard cuts between sections, 120–320ms eases on UI, text appearing line by line, gradient fields held still with grain animated at 12fps (a new noise seed every other frame) so the light feels filmic. No camera moves, no zooms through space.
