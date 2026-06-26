// registering the plugin scrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

// initializing lenis smooth scrolling
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);




// from here we will create the scroll-triggered animations for each of the slides. The idea is to animate the clip-path of each slide so that it "wipes" away as the user scrolls down, revealing the next slide underneath. The last slide (img5) is the base layer and will not be clipped.
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