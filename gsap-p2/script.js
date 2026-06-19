gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".reveal-section",
    start: "top top",
    end: "+=150%",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

tl.to(
  ".reveal-circle.top",
  { clipPath: "circle(140vmax at 50% 0%)", ease: "none" },
  0,
)
  .to(
    ".reveal-circle.bottom",
    { clipPath: "circle(140vmax at 50% 100%)", ease: "none" },
    0,
  )
