

document.getElementById("trigger").addEventListener("click", () => {
  gsap.to("#slide1", {
    clipPath: "inset(0 0 100% 0)",   // bottom inset grows → wipes upward
    duration: 1.4,
    ease: "power3.inOut",
    onComplete: () => {
      // slide-1 is now gone — do whatever comes next
    }
  });
});