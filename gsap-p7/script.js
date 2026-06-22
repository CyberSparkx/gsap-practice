const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.crossOrigin = "anonymous";

img.src =
  "https://images.unsplash.com/photo-1781694949169-8dad95b59995?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let pixelSize = 100; // higher = more pixelated

img.onload = () => {
  resizeCanvas();
  render();
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
  resizeCanvas();
  render();
});

function render() {
  const w = canvas.width;
  const h = canvas.height;

  // Draw tiny version
  const scaledW = Math.max(1, Math.floor(w / pixelSize));
  const scaledH = Math.max(1, Math.floor(h / pixelSize));

  ctx.imageSmoothingEnabled = false;

  ctx.clearRect(0, 0, w, h);

  ctx.drawImage(
    img,
    0,
    0,
    scaledW,
    scaledH
  );

  ctx.drawImage(
    canvas,
    0,
    0,
    scaledW,
    scaledH,
    0,
    0,
    w,
    h
  );
}






// Animate using GSAP






const masking = document.querySelector(".masking");

const settings = {
  pixelSize: 100
};

function draw() {
  const w = canvas.width;
  const h = canvas.height;

  const scaledW = Math.max(1, Math.floor(w / settings.pixelSize));
  const scaledH = Math.max(1, Math.floor(h / settings.pixelSize));

  ctx.clearRect(0, 0, w, h);
  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(img, 0, 0, scaledW, scaledH);

  ctx.drawImage(
    canvas,
    0,
    0,
    scaledW,
    scaledH,
    0,
    0,
    w,
    h
  );
}

masking.addEventListener("mouseenter", () => {
  gsap.to(settings, {
    pixelSize: 1,
    duration: 1,
    ease: "power3.out",
    onUpdate: draw
  });
});

masking.addEventListener("mouseleave", () => {
  gsap.to(settings, {
    pixelSize: 50,
    duration: 1,
    ease: "power3.out",
    onUpdate: draw
  });
});