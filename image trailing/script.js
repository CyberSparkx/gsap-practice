gsap.registerPlugin(SplitText);

const splitText = new SplitText("h1", { type: "chars" });

const chars = splitText.chars;

const tl = gsap.timeline();
let fontcolor = document.querySelector("h1").style.color;

tl.from(chars, {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  color: "orange",
});

// image trailing effect

const imagearr = [
  "https://i.pinimg.com/736x/33/82/dd/3382dd7ec38bbafabc45b0c0bf09cef1.jpg",
  "https://i.pinimg.com/736x/07/51/1e/07511e458a3c7a592bf952901037a28a.jpg",
  "https://i.pinimg.com/736x/68/52/27/68522709f4b284259881e6c77c3aa9fc.jpg",
  "https://i.pinimg.com/736x/92/98/a6/9298a68eae24e63b34a4d40675ecfcc0.jpg",
  "https://i.pinimg.com/736x/91/89/c9/9189c9979f8129e49cd95bef5481970c.jpg",
  "https://i.pinimg.com/1200x/94/6c/41/946c416dd484b08eba72ba3f98408065.jpg",
];

const MAX_IMAGES = 6;
const images = [];

let mouseX = 0;
let mouseY = 0;

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function spawnImage(x, y) {
  const img = document.createElement("img");

  img.src = imagearr[Math.floor(Math.random() * imagearr.length)];

  Object.assign(img.style, {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: `${x - 150}px`,
    top: `${y - 150}px`,
    pointerEvents: "none",
    zIndex: images.length,
    willChange: "transform, opacity"
  });

  document.body.appendChild(img);

  images.push(img);

  // remove oldest if > 6
  if (images.length > MAX_IMAGES) {
    const oldest = images.shift();

    gsap.to(oldest, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => oldest.remove()
    });
  }

  gsap.fromTo(
    img,
    {
      opacity: 0,
      scale: 0.9,
      rotate: gsap.utils.random(-5, 5)
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    }
  );

  // update stack order
  images.forEach((img, i) => {
    img.style.zIndex = i;
  });
}

function tick() {
  const distance = Math.hypot(
    mouseX - lastX,
    mouseY - lastY
  );

  if (distance > 80) {
    spawnImage(mouseX, mouseY);

    lastX = mouseX;
    lastY = mouseY;
  }

  requestAnimationFrame(tick);
}

tick();
