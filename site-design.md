# Site Design — Adam Rustad Portfolio

## Purpose

A personal site that earns trust in two acts: first make the reader want to be your friend, then show them you're genuinely capable. The goal is a warm email or a conversation, not a PDF download.

---

## Tone

**Friend first → capable second.**

The first half of the page is human: grateful, warm, simple. The second half earns credibility — research, timeline, real product launches. Never let either half crowd out the other.

Voice rules:
- Short sentences. Cut every sentence that earns nothing.
- Grateful, not boastful. "I've been lucky to work with people far sharper than me" is the emotional heart of this site — don't drift from that.
- No jargon unless you explain it in the same breath.
- No false or inflated claims. If you haven't presented on four continents, don't say four continents.

The test: would you say this to a sharp person you just met at a conference? If not, cut it.

---

## Visual Identity

### Palette

Two poles, scroll-interpolated:

| Name | Use |
|---|---|
| **Warm Cosmos** | Default. Dark amber-warm black `#0d0b09`, gold `#e6b25c`, rose `#e0876b`. |
| **Cool Nebula** | Reached near the bottom. Shifts to blue-tinted glow. |

The scroll lerp is intentional — warmth greets you; depth closes the page.

### Typography

| Role | Font | Notes |
|---|---|---|
| Headings | Spectral (serif) | Italic for emotional weight, roman for structure |
| Body | Hanken Grotesk | Light (300) for paragraphs, medium (500) for CTAs |
| Labels / metadata | JetBrains Mono | Dates, section tags, stats, code-adjacent content |

### Motion

- **Starfield**: constellation-style canvas animation. Density configurable.
- **Reveal on scroll**: `data-reveal` elements fade + translate up as they enter the viewport.
- **Photo carousel**: 4 photos, auto-advance every 5.5s, dots indicator, fade + zoom transition.
- **Parallax**: subtle `data-parallax` on decorative elements.
- **Scroll palette lerp**: CSS var interpolation tied to scroll position.
- **Prefers-reduced-motion**: all animation disabled when OS requests it.

---

## Section Goals

### Hero
One sentence that captures who Adam is as a person, not a resume line. Photo carousel anchors it visually — the four images should feel like glimpses into a life, not headshots.

### About
The gratitude paragraph (`"I've been lucky…"`) is the emotional center. Stats row (GPA, papers, products) is the credibility anchor — keep both in balance. Stats must always match actual listed content.

### Work
4 featured projects (full-width cards) + 3 smaller cards. Shows builder, not just researcher. Product launches, revenue, real users.

### Research
6 peer-reviewed papers. Default view shows the 3 most recent; "See 3 more ↓" reveals the rest. Nothing is hidden permanently — just deferred. Heading: "Six peer-reviewed papers." No claims about personal presentation geography.

### Path
Timeline, recent first. Default shows 3 entries (current ventures). "See full story ↓" reveals foundation (BYU research, mission, degree). Ordering matters: lead with what you're doing now.

### Beyond the Work
4 grid cells: Chess, The outdoors, Family & faith, Tinkering. Short — one or two sentences max. Purpose: humanize quickly before the connect section closes.

### Connect
Close on warmth + capability together. The final paragraph thanks the reader for being here — and means it.

---

## Content Rules

1. **Stats must match content.** If 6 papers are listed, the stat reads 6. If a new paper is added, update the stat.
2. **No inflated claims.** Only assert things that are literally true about Adam.
3. **Show-more preserves everything.** Nothing is deleted — only deferred behind a toggle. Every piece of content is still reachable.
4. **Brevity over completeness.** A shorter description that lands is better than a complete one that loses the reader.
5. **Desktop-first, mobile-equal.** Design decisions start from a wide viewport. Mobile must look and feel just as good — tap targets comfortable, layout clean, no overflow.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Deployed entry point — always keep in sync with dc.html |
| `Adam Rustad.dc.html` | Canonical source (Claude Design authoring format) |
| `support.js` | dc-runtime bundle — do not modify |
| `public/assets/` | All images: profile.jpg, photo-grad.jpg, photo-outdoors.jpg, photo-icecream.jpg, project assets |
