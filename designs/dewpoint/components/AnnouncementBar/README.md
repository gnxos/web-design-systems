# AnnouncementBar

A 40px full-width strip under the nav: solid badge, one message, one link, and a dismiss button.

**Consumer provides:** a message under about 60 characters, a link label ("Read post"), and a dismiss handler (`data-dp-dismiss` inside `data-dp-dismissible` works with `Dewpoint.init()`).

- Ground `announce-fill`, text `on-surface` 16/24, `shadow-pill`, 1px `outline-hairline` below. Colour, shadow and border ease over 200ms.
- Badge: `primary` pill, 12.5px 600 caps with 0.6px tracking, 8-ray burst icon. Always a word, never icon-only.
- The link is 14.5px 600 with a hairline divider on its left; underline on hover.
- Dismiss is a 28px circle at the right, 6px inset.
- One bar at a time. Emergency messages are not styled here: use plain text on `surface-container-high` with a word like "Notice".
