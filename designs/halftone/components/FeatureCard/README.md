# FeatureCard

A large surface card: a pink-dot title, a short description, a "+" mono list, a stat with its tag, and a photo panel with floating UI cards on the right.

**Consumer provides:** title (one sentence), description (≤ 3 lines), 2–4 capability lines, one stat + outcome, and a photo with 2–4 UI steps.

- Markup: `div.ht-card` (two columns) > text column + `div.ht-photo` holding stacked `ht-ui` cards joined by a pink line.
- Used in a horizontal carousel under `TabPills`.
