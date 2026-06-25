gsap.registerPlugin(SplitText);

const splitText = new SplitText("h1", { type: "chars" });

const chars = splitText.chars;

const tl = gsap.timeline();
let fontcolor = document.querySelector("h1").style.color;

tl.from(chars,{y: 100, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", color: "orange"});
