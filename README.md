# GSAP Practice

A collection of small, focused demos built while learning [GSAP](https://gsap.com/) (GreenSock Animation Platform) — covering core tweens, scroll-driven animation, and draggable interactions.

Each folder/file is a standalone experiment, not a single cohesive app. The goal is hands-on repetition of GSAP's API: timelines, easing, scrub-linked scroll effects, and physics-based dragging.

## What's inside

- **ScrollTrigger reveal animation** — a scroll-pinned section using `clip-path: circle()` to grow two "porthole" layers (top-down and bottom-up) until they fully cover the section, synced to scroll position via `scrub`.
- **Draggable + InertiaPlugin** — draggable elements with momentum/inertia on release, including rotation-type dragging and bounds-constrained dragging.
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