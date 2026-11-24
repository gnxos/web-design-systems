# Motion

Motion in Halftone is **smooth and ambient**: crisp 150–450ms responses to touch, and a few slow loops that make the page feel alive — a shimmer through eyebrows, a ticker, a turning dot sphere. Nothing bounces; nothing spins fast.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `ease-out` | cubic-bezier(0.215, 0.61, 0.355, 1) | Default: hover, opacity, transform |
| `ease-expo` | cubic-bezier(0.625, 0.05, 0, 1) | Big colour swaps (nav, white buttons), tab changes, panel slides |
| `ease-linear` | linear | Loops |
| `dur-fast` | 150ms | Button background, opacity |
| `dur-press` | 200ms | Transforms: press scale, arrow-disc nudge |
| `dur-base` | 300ms | Link colour |
| `dur-slow` | 450ms | Nav/white-button colour, tab pill fill |
| `dur-shimmer` | 3500ms | Eyebrow shimmer loop |
| `dur-ticker` | 10800ms | News ticker loop |
| `dur-orbit` | 36000ms | One turn of the dot sphere |

## The vocabulary

| Pattern | Spec | Class / API |
| --- | --- | --- |
| **Button hover** | pink → `pink-hover` in `dur-fast` `ease-out`; white → surface; ink → purple in `dur-slow` `ease-expo` | `ht-btn--*` |
| **Press** | scale 0.97, `dur-press` | `ht-btn:active` |
| **Arrow nudge** | the → disc slides 3px right on hover, `dur-press` | `ht-btn--arrow` |
| **Tab switch** | the selected pill fills pink and its number circle turns white, `dur-slow` `ease-expo`; the panel below cross-fades | `ht-tabs` + `Halftone.tabs()` |
| **Eyebrow shimmer** | a pink band sweeps through the letters left→right every 3.5s, linear, forever | `ht-eyebrow > span` |
| **News ticker** | headlines scroll left at a steady pace (one loop ≈ 10.8s), edges masked | `ht-ticker` + `Halftone.ticker()` |
| **Dot sphere** | rotates around its vertical axis once per 36s, tilted 22° | `<canvas data-ht-sphere>` / `Halftone.sphere()` |
| **Carousel** | proof and product cards slide horizontally, `dur-slow` `ease-expo`, with round arrow buttons | custom |
| **Glass reveal** | cards over photos fade + rise 16px as the section enters, `dur-slow` `ease-out`, staggered 80ms | custom |

## Rules

- **One loop per view:** a section has at most one ambient loop (shimmer, ticker or sphere).
- **Interaction is quick, ambience is slow:** never under 150ms for feedback, never under 3s for a loop.
- **No parallax on photography**; photos stay still, UI on top may rise in once.
- **Reduced motion:** under `prefers-reduced-motion: reduce`, the shimmer, ticker and sphere stop (the sphere draws one still frame), and transitions are instant. `bundle.css`/`bundle.js` handle this; custom motion must too.

## Snippet

```html
<p class="ht-eyebrow"><span>The workspace</span></p>
<div class="ht-ticker"><span class="ht-ticker__label">News</span>
  <div class="ht-ticker__window"><div class="ht-ticker__track"><span>Version 4 is live with shared playbooks</span></div></div>
  <a class="ht-btn__disc" href="#" aria-label="Read the news">&nearr;</a></div>
<canvas data-ht-sphere style="width:320px;height:320px"></canvas>
<script>Halftone.init();</script>
```
