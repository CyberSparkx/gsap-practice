# GSAP Practice

A collection of small, focused demos built while learning [GSAP](https://gsap.com/) (GreenSock Animation Platform) — covering core tweens, scroll-driven animation, and draggable interactions.

Each folder/file is a standalone experiment, not a single cohesive app. The goal is hands-on repetition of GSAP's API: timelines, easing, scrub-linked scroll effects, and physics-based dragging.

## What's inside

- **ScrollTrigger reveal animation** — a scroll-pinned section using `clip-path: circle()` to grow two "porthole" layers (top-down and bottom-up) until they fully cover the section, synced to scroll position via `scrub`.
- **Draggable + InertiaPlugin** — draggable elements with momentum/inertia on release, including rotation-type dragging and bounds-constrained dragging.
- **SVG animation experiments** — practicing path morphing, stroke-based reveals, and clip-path driven shape transitions using SVG as the drawing surface.
- *(more demos added as the project grows)*

## Plugins covered

- `ScrollTrigger` — scroll-linked animation, pinning, scrubbing
- `Draggable` — drag interactions (free, rotation, bounded)
- `InertiaPlugin` — momentum/throw physics on release

## Tech stack

- Vanilla HTML / CSS / JavaScript
- [GSAP](https://gsap.com/) core + plugins (via CDN)
- [Tailwind CSS](https://tailwindcss.com/) for quick styling in some demos

## Purpose

This repo exists purely for practice and reference — a sandbox to revisit specific GSAP techniques (pinning, clip-path reveals, draggable bounds, inertia) without the overhead of a full project setup.

## Running locally

Most demos are static files — open the `index.html` for a given demo directly in a browser, or serve the folder with a tool like VS Code's Live Server.

```bash
# Clone the repo
git clone https://github.com/<your-username>/gsap-practice.git
cd gsap-practice

# Option 1: just open a demo directly
open scroll-trigger-reveal/index.html

# Option 2: serve it (recommended, since some plugins/fetches
# behave better over http:// than file://)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or whichever port your server prints) and navigate into the demo folder you want.

## How to practice GSAP yourself

If you want to build up the same kind of muscle memory, here's a simple loop that works well:

1. **Start with the CDN, skip the build tooling.** Drop this in an HTML file and you're animating in under a minute:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/InertiaPlugin.min.js"></script>
   ```
   Register plugins once at the top of your script: `gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);`

2. **Rebuild small, known effects from scratch instead of copying.** Pick one technique — e.g. a pinned section with `clip-path: circle()` growing on scroll — and recreate it blind, only checking docs when stuck. Recall sticks better than copy-paste.

3. **Isolate one plugin per demo folder.** Keep each experiment to a single concept (one ScrollTrigger idea, one Draggable idea) so it's easy to revisit later without wading through unrelated code — this repo's own structure is a good template to copy.

4. **Use the GSAP docs + free plugin set as your reference loop:**
   - [GSAP docs](https://gsap.com/docs/v3/)
   - [ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
   - [Draggable docs](https://gsap.com/docs/v3/Plugins/Draggable/)
   - [GSAP CodePen collection](https://codepen.io/GreenSock) — huge source of official demos to deconstruct
   - As of GSAP 3.12+, all plugins (including previously "Club GreenSock" ones like InertiaPlugin, SplitText, MorphSVG) are free — no membership needed.

5. **Deliberately break things.** Change `ease`, flip `scrub` between `true` and a number (e.g. `scrub: 1`), swap `clip-path` shapes, toggle `Draggable` bounds — seeing *why* something looks different builds real intuition faster than only building things that work.

6. **Keep a "gotchas" note per demo.** Things like: ScrollTrigger needing a `markers: true` debug flag while tuning, `will-change` / `transform` for perf, or re-running `ScrollTrigger.refresh()` after layout shifts. Future-you will thank present-you.

7. **Commit often, one demo per commit.** Makes it easy to look back at how a technique evolved, and turns this repo into a timeline of your own learning, not just a folder of files.

## Contributing / extending this repo

This is a personal practice sandbox, but the pattern is easy to fork:

- Create a new folder per demo (e.g. `svg-path-morph/`, `draggable-bounds/`)
- Each folder gets its own `index.html` with everything self-contained (or a shared `/assets` folder for common CSS/JS)
- Update the **What's inside** section above with a one-line description whenever you add a new demo