# Motion

Things resolve: they arrive blurred and sharpen. Movement is small and fast; ambient loops are very slow.

| Pattern | Timing | Easing | Source |
| --- | --- | --- | --- |
| Button and chip colour | 200ms | `ease-standard` | measured |
| Nav link colour | 300ms | `ease-out` | measured |
| Nav primary fade | 100ms | `ease-standard` | measured |
| Footer link colour | 150ms | `ease-standard` | measured |
| Rise and resolve (opacity 0, blur 8px, y 6px, rotateX 26deg) | 300ms | ease-out | measured |
| Resolve only (blur 12px) | 300ms | ease-out | measured |
| Rotating headline word (blur 20px cross-fade) | 600ms every 3s | ease-in-out | measured |
| Word-by-word headline, 90ms apart | 300ms each | ease-out | stagger inferred (the source ties it to scroll) |
| Announcement drop | 1.4s | `ease-expo` | duration measured, curve inferred |
| Card enter (y 6px) | 320ms | ease-out | measured |
| Working shimmer sweep | 1s loop | linear | measured |
| Tool steps appear, 450ms apart | 320ms each | ease-out | stagger inferred |
| Chart bars grow, lines draw | 8s loop: in by 4%, hold to 85%, out by 95% | ease-in-out | measured (not built into the static art) |
| Marquee | 50s loop | linear | measured |
| Constellation drift and scroll reveal | scroll linked | n/a | seen, not measured; shipped as static art |

## Reduced motion
`bundle.css` and `bundle.js` stop the swap on its first word, show every word and step at once, stop the shimmer and wrap the marquee into a static row. The source also reduces motion in places.
