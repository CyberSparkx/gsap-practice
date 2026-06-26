gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

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
    //   markers: true,               // ← uncomment to debug
    }
  });
});