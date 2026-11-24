# GlassCard

A frosted card (24px radius) for a stat or a short quote over photographic or sky art.

**Consumer provides:** a stat (2–6 characters) with one caption sentence, or a quote under 160 characters with a name, a role and an optional link.

- Fill `glass-card-fill` (10% blue-grey), 1px `glass-card-border` (50% white), `backdrop-filter: blur(20px)`; padding 24px 32px.
- Softer variant `cr-glass--soft` uses `glass-card-border-soft` and a heavier blur (94px).
- Text is white. **Contrast depends on the image behind**: over bright art add a deeper tint (`#1d2a5ccc` here) or a `photo-scrim`; never rely on the 10% fill alone.
- Stat 48/57.6 600; caption 16/24; name 20/30; role 16/24.
