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
- **Wit is load-bearing, not garnish.** Adam is silly and ironic in person — the site should have at least a few real jokes (the MASH & SPUD potato-pun reveal, the git-log commit messages, the console.log easter egg), not just earnest warmth. A site that's only sincere reads as generic-AI-nice. Personality-forward jokes go in narrative copy; UI controls (buttons, toggles) stay plainly labeled — see Signature System below.

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
| Headings | Spectral (serif) | Italic reserved for the handful of real emotional beats (hero "here", gratitude line, Connect "friends") — not a default heading treatment |
| Body | Hanken Grotesk | Light (300) for paragraphs, medium (500) for CTAs |
| Structural / builder voice | JetBrains Mono | Section kickers, dates, tags, git-log entries — see Signature System |

### Signature System — "Adam's annotated source"

The whole page reads as if you're looking at Adam's own source/notebook, not a marketing template. This is the throughline that replaced the generic "uppercase-tracked eyebrow label above every heading" pattern:

- **Section kickers are code comments**, not shouty tracked caps: `// about`, `// selected work`, `// the path`, styled via the `.kicker` class (lowercase, `//` in gold, rest in faint). Never revert to `text-transform:uppercase` eyebrow labels — that's the single most common "AI-portfolio" tell and the whole reason this system exists.
- **The Path section is a git-log**, not a dot-and-line timeline. Each career entry is a conventional-commit-style line (`job(axo):`, `ship(lumitube):`, `serve(mission):`, `init(byu):`) via `.log-node` (open-ring marker) + `.commit-type`/`.commit-scope` spans. This is the site's one big signature swing — keep it disciplined; don't also add competing "clever" devices elsewhere (see restraint note below).
- **Tag chips use `.tag-chip`** (monospace, sharp corners, subtle tint) instead of pill-shaped badges — pills are reserved for actual CTA buttons so the two don't visually collide.
- **Featured work items don't use fake sequence numbers** (no `01/02/03/04`) — only real role tags (`> co-founder · product`). Numbering implies a sequence; these projects aren't one.
- **Restraint**: this motif lives in the hero, section kickers, Path, and the 3 secondary work cards' file-path labels. It deliberately does NOT invade "Beyond the work" (kept purely warm serif-italic + prose) — that section is the "friend" register and doesn't need the engineer wink layered on top.

### Motion — "the authored sky"

The background is not a random particle web (that's the #1 AI-portfolio tell). It's a three-layer starfield with hand-authored constellations:

- **Three depth layers**: far field (hundreds of tiny cool-white stars, pre-rendered to an offscreen texture — nearly free per frame), mid field (~150 simulated stars with rare, short link lines via spatial-grid lookup — never O(n²)), near field (~16 large warm-gold stars with the strongest mouse/scroll parallax). Depth doubles as a color story: near = warm gold, far = cool white, matching the palette's two poles.
- **Authored constellations** — each section's sky forms a figure that is *true* for it, assembling from scatter and drawing its lines like a pen stroke as the section scrolls in. Purely decorative background — no per-star animation on any figure (a hand that waves or a shape that morphs pulls the eye where the headline should own it):
  - Hero: **Orion**, tucked low in the corner. Deliberately quiet (55% opacity, small, draws *after* the headline lands) — it must never compete with the headline for the eye.
  - Research: a **potato outline** — the shape behind the papers (MASH & SPUD are manifold-alignment algorithms named after potato dishes). A quiet callback, not a literal cartoon.
  - Path: no sky figure — the git-log timeline itself (with its `.log-node` markers) carries the section; the sky stays out of the way.
  - Beyond: a **ridgeline under one bright star**.
  - Connect: **Polaris alone** — the north star closes the page.
  Every figure has a parallax factor (`par` < 1) so it scrolls *slower than the text* — true background depth. Figures hide themselves when the viewport has no safe margin for them.
- **Nebulae**: four soft color washes (gold/rose → violet → blue, following the palette journey) anchored at document depths, drifting past at ~⅓ scroll speed. Implemented as GPU-composited divs behind the canvas — painted once as CSS gradients, moved with `translate3d` only, hidden when offscreen, transform writes skipped for sub-pixel moves. Never draw these on the canvas per frame.
- **Rare meteor**: one at a time, roughly every 16s, subtle.
- No scroll-velocity or transition effects on the starfield — section-to-section navigation is plain smooth-scroll. Tried a hyperspace-style streak-on-fast-scroll effect and cut it; too much for a page whose personality is warmth and restraint, not spectacle.
- **Reveal on scroll**: body blocks fade + rise 20px; display headings (`data-reveal-words`) rise word-by-word with a 60ms stagger — the one reveal that reads "designed".
- **Path git-line draws with scroll**: the timeline's gradient line scaleY-scrubs with section progress.
- **Photo carousel**: 4 photos, auto-advance every 5.5s, dots indicator, fade + zoom transition.
- **Parallax**: subtle `data-parallax` on decorative elements.
- **Scroll palette lerp**: CSS var interpolation tied to scroll position (accents route through a saturated rose midpoint).
- **Film grain**: static SVG-noise overlay (~5% opacity) so the sky never reads as a flat gradient. Zero per-frame cost.
- **Prefers-reduced-motion**: no animation, but not a blank page — a fully-formed static sky renders and re-aligns on scroll.
- **Performance floor**: pre-rendered textures + star sprites + spatial grid, no per-frame allocations, layout reads batched before writes, DPR capped at 2, rAF paused when the tab is hidden. The sky must hold 60fps.

---

## Section Goals

### Hero
One sentence that captures who Adam is as a person, not a resume line. Photo carousel anchors it visually — the four images should feel like glimpses into a life, not headshots.

### About
The gratitude paragraph (`"I've been lucky…"`) is the emotional center. Stats row (GPA, papers, products) is the credibility anchor — keep both in balance. Stats must always match actual listed content.

### Work
4 featured projects (full-width cards) + 3 smaller cards. Shows builder, not just researcher. Product launches, revenue, real users. No fake sequence numbers on featured items — role tags only. The MASH & SPUD entry explicitly names the potato-dish pun; don't let that joke go back to being a silent image-only easter egg.

### Research
6 peer-reviewed papers. Default view shows the 3 most recent; "See 3 more ↓" reveals the rest. Nothing is hidden permanently — just deferred. Heading: "Six peer-reviewed papers." No claims about personal presentation geography.

### Path
Rendered as a git-log (see Signature System), recent first. Default shows 4 entries (current ventures). "See full story ↓" reveals foundation (BYU research, mission, degree). Ordering matters: lead with what you're doing now. Each entry's conventional-commit tag (`job(...)`, `ship(...)`, `serve(...)`, `init(...)`) should describe what actually happened — don't force a tag that doesn't fit just to keep the pattern going.

### Beyond the Work
4 grid cells: Reading, The outdoors, Family & faith, Tinkering. Short — one or two sentences max. Purpose: humanize quickly before the connect section closes. Kept deliberately free of the git/terminal motif — this section is pure "friend" register.

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
