const masking = document.querySelector('.masking');

const noOfStrips = masking.offsetHeight /34.6;

console.log(masking.offsetHeight);

for (let i = 0; i < noOfStrips; i++) {
    const strip = document.createElement('div');
    strip.classList.add('strip');
    masking.appendChild(strip);
}

const strips = document.querySelectorAll('.strip');
strips.forEach((strip, i) => {
  strip.style.height = `${masking.offsetHeight / noOfStrips}px`;
  strip.style.width = `100vw`;
  strip.style.backgroundColor = 'black';
  strip.style.position = 'absolute';
  strip.style.top = `${i * (masking.offsetHeight / noOfStrips)}px`;
  strip.style.left = '0';
});

gsap.to('.strip', {
    duration: 0.7,
    opacity: 0,
    y: -5,
    stagger: -0.1,
    ease: 'power2.inOut',
})




