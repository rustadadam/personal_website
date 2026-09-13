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

Two poles, scroll-interpolated — **cool at the top, warm at the bottom**:

| Name | Use |
|---|---|
| **Cool Nebula** | The hero. Blue-black `#080a0f`, cold and vast. |
| **Warm Cosmos** | Reached at Connect. Amber-warm black `#0d0b09`, gold `#e6b25c`, rose `#e0876b`. |

The direction is load-bearing and was deliberately flipped from warm→cool. Connect is
the one screen whose job is to make a stranger want to send a warm email; ending the
page on the coldest palette on the site worked against it. Depth greets you; warmth
closes the page.

**The accent travels the full distance.** `--gold`/`--rose`/`--glow` run cold at the
hero and reach full gold at the fire, so the inversion is complete rather than a warm
accent sitting on a cold sky. A straight lerp between blue and gold washes through grey
at the midpoint, so each accent follows a quadratic Bézier through a vivid rose-magenta
control point instead — that control point is load-bearing, don't remove it.

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

### Motion — "the descent"

The background is one tall photographic plate you travel *down* through as you scroll:
a cold starfield at the hero, near-flat dark through the reading sections, firelight on
the ground at Connect. It replaced a three-layer canvas starfield with authored
constellations — well engineered, but it read as the generic particle-web look this
document was already trying to avoid. Fidelity on the sites this is measured against
comes from large soft photographic forms and one dominant light source, not from
particle count.

**The rule everything else hangs on: imagery lives at the two ENDS of the plate.** The
middle ~55% stays near-flat dark. This was established empirically — four rounds of
composites showed that a photograph left visible behind the reading sections either
washes out body copy or has to be graded down until it is functionally black. Sites
that appear to run photography the full page length are in fact running it in the hero
only. Do not brighten the middle of the plate.

- **Three parallax speeds.** The plate pans at 0.10, a far ridge at ~0.22, a near
  treeline at ~0.38. One image panning is a pan; three speeds read as travel through
  space. The silhouettes are ground-level objects, so they stay below the fold until
  ~70% / ~85% of the page and rise into frame as you approach the fire — the hero is
  pure sky.
- **Every layer needs its own source photo.** The first build cut the mid band, the
  floor band *and* the ridge silhouette all from the same fog photograph, so the same
  ridges appeared at three depths and crossfaded into themselves — the stars→fog
  transition looked great precisely because it was the only one between genuinely
  different content. Ridge, treeline and plate now come from three different photos,
  and the floor carries **no landform at all** (a smooth warm wash — ground haze beside
  a fire). If a transition ever reads muddy, check for a repeated source first.
- **Silhouettes are ground, not bands.** Two separate seams came out of treating them
  as strips. Their *top* edge is ~50% opaque where the crop cuts through solid forest,
  so the build ramps alpha out over the top (ridge 75%, treeline 42%) — which doubles
  as aerial haze. Their *bottom* edge is worse: once a band rises above the viewport
  floor its hard bottom draws a rule across the page. So each element runs 2.4 viewports
  tall with the image anchored at the top and a second background layer, offset to start
  exactly where the image ends, carrying that band's own bottom-row colour down off
  screen. Do **not** use `background-color` for this — it paints behind the image too,
  tinting the ramped-transparent sky and re-introducing a seam at the element's top.
- **Embers** are ash lifted off the fire and carried up past you, so they are born at
  the **lower edge of what you can see**, not at the fire's own position. Within about a
  screen of the page foot that edge *is* the fire, so the same rule tightens them into a
  plume over the flame; higher up they drift in broadly from the bottom of the screen.
  They live in *document* space, so they hold their place in the scene while you scroll,
  but are recycled once burnt out or once well clear of the viewport — the population
  always belongs to the screen you are on. A `gate` keyed to scroll progress keeps them
  out of the hero entirely and ramps them in from ~28%: nothing rises while you are
  still up among the stars.
- **Variation is what keeps them from reading as a particle system.** All per-ember,
  all cheap. Tone runs a five-sprite ramp from white-hot through the palette's own glow
  to a dead red, indexed by the ember's starting heat *plus* how far it has cooled, so a
  spark leaves the fire pale and reddens on the way up. Brightness carries a slow sine,
  so tumbling ash shows brighter and duller faces, and about one in eleven is a genuine
  bright spark rather than dull ash. The ramp is weighted hard toward the cool end —
  about three-quarters of ember-frames land on the reddest sprite, because a fire throws
  far more dull ash than live sparks; the handful of hot ones are what sell it. Measured
  live: hue spans 14°-45°, alpha runs p50 19 to a max of ~180.
- **Buoyancy bleeds off as ash cools.** Effective climb is
  `vy · (0.16 + 0.84·(1-k)^1.7)`, so an ember drives hard just above the flame and hangs
  lazily once it is high. This deceleration is most of what separates ash from particles
  riding a conveyor — don't flatten it back to a constant velocity.
- **No ember holds a steady rate.** Two incommensurate sines are added to its *velocity*
  (not nudged onto its position, which does not accumulate), so it surges, stalls and
  sinks back. 98% reverse direction at least once, spending a median quarter of their
  life descending, with rates swinging roughly -55 to +129 px/s. High up, where drag has
  bled most of the lift away, the gust dominates and the ash genuinely hovers.
- **Just under half are born already aloft**, at up to a screen above the spawn edge,
  with `life`, horizontal spread and accumulated glide all set to match where they start.
  Without this the top of the screen stays empty: everything is either freshly lit at the
  bottom or burnt out before it climbs. The two easy mistakes here are giving an
  aloft-born ember `life = 0` (it appears white-hot at altitude) and leaving its `xoff`
  at zero (the plume stays a narrow column up high and only fans out lower down).
- **Sideways glide is its own velocity** (`e.lat`, integrated into `e.xoff`), not a
  function of height. About a quarter visibly float off to one side, and integrating it
  is also what fans the plume with height — which is why there is no separate spread
  term any more.
- **They are deliberately lazy.** ~34-140 px/s at launch falling to a fraction of that,
  with a 22-50s lifetime.
  Rise height and laziness trade against each other — making them faster to "rise
  higher" loses the hot-ash feel; extend the lifetime or seed more aloft instead.
  ~480 of them, and they hold 60fps at that count (p95 16.8ms across three runs).
  Reuses the old starfield's `makeSprite()` — already the right soft warm spark.
  The sprite ramp is rebuilt on a *quantised* colour key: the palette lerps every frame,
  and keying it on the exact colour would repaint five canvases most frames for nothing.

- **The fire** is a 9s loop at the foot of the document, `mix-blend-mode: screen` so it
  contributes light rather than a rectangle of footage, masked to an oval at 0.88
  opacity. It sits **below the footer rule**: pushed any higher its bright core lands on
  the social-links row and takes that text under 4.5:1. An earlier pass hid the flames
  almost entirely below the fold, which made the fire look frozen — it has to be visibly
  burning, just not behind copy.
- **Set `loop` and `muted` as JS properties, never as HTML attributes.** The dc-runtime
  renders the markup through React, which drops bare HTML boolean attributes — `<video
  muted loop playsinline>` arrives in the DOM with `loop` and `muted` both **false**
  (only `playsinline` survives). Two bugs came from this: the clip played once and froze
  on its last frame, and because the element was not actually muted, browser autoplay
  policy would refuse to start it at all for most visitors. `setupFire()` sets
  `v.loop/muted/defaultMuted/playsInline` directly and keeps an `ended` handler as a
  fallback. If you ever add another element that relies on a bare boolean attribute,
  assume it will be dropped and set the property in JS.
- **The glow is a sibling of `#fire`, never a child.** `#fire` clips its overflow to
  contain the video; a glow inside it gets clipped into a rectangle with hard sides.
  Outside, it also spills up to light the ground between the viewer and the treeline,
  which would otherwise be a dead black slab. The CSS glow renders with or without the
  clip, so the page is finished if the video never loads.
- **The floor glow peaks AT the plate's bottom edge.** A radial sized to its own strip
  centres its hotspot *inside* that strip, so the light rose and then fell back to black
  before the plate ended — a hard band under the fire. The build generates the radial at
  double height and keeps the top half, so the brightest row lands on the last row of
  the plate and the warmth only ever ramps upward into the blue-black.
- **The brightest star in the source is removed.** One star sat far above the rest and
  read as a focal point competing with the headline. `tools/build-bg-assets.sh` finds the
  largest bright blob automatically and clone-stamps neighbouring sky over it. A median
  or blur is the wrong tool here: it takes out the core but not the halo, because over
  any window wide enough the halo *is* the local background, and it leaves a smooth grey
  smudge. Clone-stamping keeps star density and grain intact.
- **Warmth comes from hue, not luminance.** Every time the warm floor got brighter,
  body copy at Connect dropped below 4.5:1. A dark amber still reads warm. Verified by
  hiding all copy, screenshotting the bare background and measuring each text run
  against what sits behind it: 33 AA failures on the old site, 32 now, zero elements
  that passed before and fail now. The remaining failures are the deliberately faint
  monospace kickers and tags, and predate this work.
- **Reveal on scroll**, **Path git-line scrub**, **photo carousel**, `data-parallax`,
  and **film grain** are unchanged from the previous design.
- **Prefers-reduced-motion**: no animation and no video, but not a blank scene — the
  plate and silhouettes still sit at the right depth and re-align on scroll, and embers
  render as a still scatter.
- **Performance floor**: transform-only layer writes with a sub-pixel skip guard,
  offscreen embers cost nothing, no per-frame allocations, rAF paused when hidden.
  Four rules were added after the scroll was measured at a flat 30fps (p50 33.3ms) in
  a throttled profile — the frame budget was going to *rendering*, not to JS, which
  accounted for under 4% of wall time:
  - **The loop performs no layout reads at all.** `getBoundingClientRect()` and
    `document.body.scrollHeight` inside the loop each forced a synchronous layout of
    the whole page every frame. Document-space geometry is measured in
    `measureAnchors()` — on mount, on resize, on any state change, and from a
    `ResizeObserver` on `<body>` so late web-font layout cannot leave it stale. It was
    stale height that silently skewed every scroll-progress read by ~1%.
  - **Never read the rect of an element you are about to transform.** `data-parallax`
    measured a rect that already contained its own offset, feeding the previous frame's
    transform back into the next frame's input. Effective travel was `s/(1+s)`, ~4.5%
    short of each element's declared `data-speed`.
  - **CSS custom properties are written only when the lerped colour actually rounds to
    something new.** Every `var()` consumer re-rasterises when the palette changes, and
    both full-bleed radial overlays are painted from `--glow` — so a per-frame write
    repainted the whole viewport for a change too small to see.
  - **The ember canvas caps DPR at 1.5, not 2.** Embers are soft radial sprites, so 2x
    buys nothing visible, and the per-frame canvas texture upload is main-thread commit
    time: 917ms → 520ms across a 5s scroll.

  Measured after: p50 frame time 16.7ms (60fps), commit time down 43%, and down ~60%
  from the original once the layers moved to the compositor. Caveat for anyone
  re-running this: the profile was taken in headless Chromium with software
  rasterisation, so absolute milliseconds are pessimistic and run-to-run raster totals
  vary by 20%+. Trust the ratios and the ranking of causes, not the absolute numbers,
  and confirm the feel on real hardware.
- **The three layers are driven by the compositor, not by rAF.** All three positions
  are linear in scroll progress, which is exactly what a scroll-driven animation
  expresses, so `writeLayerTimelines()` emits two-keyframe `@keyframes` with absolute
  pixel endpoints and hands them to `animation-timeline: scroll(root block)`.
  `updateLayers()` returns immediately when that is live. The motion is identical —
  verified pixel-exact against the rAF version at seven scroll positions — but it no
  longer shares a thread with the embers, the reveals and the palette, so a busy main
  thread cannot make the background slip against text that is scrolling on the
  compositor. That mismatch is what read as lag.
  - Endpoints are absolute pixels, so `writeLayerTimelines()` is called from
    `buildLayers()` and re-runs on resize. The timeline itself spans the document's own
    scroll range, so a show-more toggle needs no re-measure.
  - The `animation` shorthand resets `animation-timeline`, so the timeline is always
    declared *after* it.
  - rAF stays the path for reduced motion (where `*{animation:none!important}` would
    kill the animation anyway) and for browsers without scroll timelines. All three
    paths were verified to produce identical layer positions.
- **Do not freeze the plate to save raster.** It was measured as a diagnostic, not
  proposed as a fix: the plate *is* the descent. Frozen, Connect sits against the hero's
  starfield instead of firelit ground, and the closing copy loses its contrast.
- **The plate is still the largest raster cost, and that is inherent to the asset.**
  `#sky-plate` is a 1400x3600 webp upscaled to cover a viewport-width element ~3700px
  tall — ~21 megapixels at DPR 2, far past the max texture size, so it is tiled and the
  tiles are rasterised as the pan exposes them. Freezing it drops total raster ~37% and
  swapping the image for its placeholder gradient ~45%, so it is roughly 40% of raster
  during a scroll. This is now compositor-side rather than main-thread, so it costs
  smoothness far less than it did. If it ever needs to come down further: this doc
  already says imagery lives at the two ENDS of the plate, so the middle could be the
  gradient alone with two short image bands top and bottom, each small enough to raster
  once into a single texture and then only composite.

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
| `index.html` | The deployed site. Hand-authored; this is the only source. |
| `support.js` | dc-runtime bundle — do not modify |
| `tools/build-bg-assets.sh` | Regenerates the sky plate + silhouettes from their Unsplash sources |
| `tools/build-fire-video.sh` | Encodes the campfire loop (watermark removal, shadow crush, crossfade loop) |
| `public/assets/` | All images and video |

> `src/` holds a Vite + React app that is **not** deployed — `index.html` has no
> `#root` and no module entry, so nothing in `src/` is bundled. Don't edit it expecting
> the site to change.

## Background asset credits

Derived assets are built by `tools/build-bg-assets.sh` from Unsplash sources
(Unsplash License — commercial use, no attribution required; credited anyway). Only
`images.unsplash.com/photo-*` IDs are used; `plus.unsplash.com/premium_photo-*` are
paid and must never be used.

| Asset | Source |
|---|---|
| sky plate, hero band | `photo-1788237860001-e2c9466c604a` (starfield) |
| sky plate, mid + floor; `ridge.webp` | `photo-1545717603-7eee1b49c4f3` (B&W fog ridges) |
| `treeline.webp` | `photo-1662556224729-9424e2bfa76c` (pine treeline at dusk) |
| `fire-loop.webm` / `.mp4` | AI-generated clip supplied by Adam; source kept out of `public/` |

The fog source is greyscale, which is why it duotones cleanly to either palette pole.
