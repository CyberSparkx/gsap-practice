gsap.registerPlugin(Flip);

const container = document.querySelector(".container");
const btn = document.querySelector("#swap");

btn.addEventListener("click", () => {
  const state = Flip.getState(".flip");

  const [blue, green] = document.querySelectorAll(".flip");

  // swap positions in DOM
  container.insertBefore(green, blue);

  Flip.from(state, {
    duration: 1,
    ease: "power2.inOut",
    absolute: true
  });
});

