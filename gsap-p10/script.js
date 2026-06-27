gsap.registerPlugin(ScrollTrigger, SplitText);

const split = new SplitText(".text", { type: "lines, words, chars" });

const scrollTween = gsap.to(".text", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap",
    pin: true,
    end: "+=4000px",
    scrub: true,
  }
});

split.chars.forEach((char) => {
  gsap.from(char, {
    yPercent: "random(-200, 200)",
    rotation: "random(-20, 20)",
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: char,
      containerAnimation: scrollTween,
      start: "left 100%",
      end: "left 90%",
      scrub: 1
    }
  });
});