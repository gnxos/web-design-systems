# Chip

Small 4px-radius labels: neutral tags, mono source tags, state badges, outline link-chips and a live dot.

**Consumer provides:** 1–3 words (or a short mono token) and the variant.

- `ag-chip` neutral ("Coming soon") · `ag-chip--mono` data source tags inside transcripts ("CRM", "Email · 6 replies") · `ag-chip--signal | --success | --danger` states (always a word, never a bare colour) · `ag-chip--outline` the link-chips after "Learn" at a tile's foot.
- Status dot: `ag-dot` (6px, `signal`), `ag-dot--live` pulses every 2s; for an arriving signal use `ag-sonar`.
