gsap.registerPlugin(ScrollTrigger);

const slides = [".img1", ".img2", ".img3", ".img4"]; // img5 is the base, never clips

slides.forEach((selector, i) => {
  gsap.to(selector, {
    clipPath: "inset(0 0 100% 0)", // wipes upward

    ease: "none", // linear — scroll scrubs it 1:1

    scrollTrigger: {
      trigger: ".wrapper",
      start: `${i * 20}% top`,       // each slide owns 20% of scroll (100% / 5 slides)
      end: `${(i + 1) * 20}% top`,
      scrub: true,                    // ties animation to scroll position
      // markers: true,               // ← uncomment to debug
    }
  });
});