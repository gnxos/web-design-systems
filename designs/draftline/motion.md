# Motion

Motion is mechanical and brief: things decode, type, fill and step into place.

| Pattern | Timing | Easing | Source |
| --- | --- | --- | --- |
| Primary fill change | 400ms | `ease-out` | measured |
| Quiet button and link colour | 200ms | `ease-standard` | measured |
| Elements appear (y 8px), 100ms apart | 400 to 600ms | `ease-out` | durations measured, offset and stagger inferred |
| Caret blink | 1s | step-end | measured |
| Marquee | 20 to 24s loop | linear | measured |
| Command typing, 45ms a character | once | steps | seen in the stylesheet, speed inferred |
| Label decode from random glyphs | 700ms | linear | seen on screen, timing inferred |
| Data packets, drifting lines, layer assembly | looping or scroll linked | n/a | present in source, not measured; shipped as static art |

## Reduced motion
`bundle.css` and `bundle.js` show final text and positions at once, stop the caret and wrap the marquee into a static row. The source also reduces motion in places.
