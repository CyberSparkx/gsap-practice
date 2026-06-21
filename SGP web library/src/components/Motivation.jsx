import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Motivation = () => {
  const containerRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from(".reveal-text", {
  //     clipPath: "inset(0 100% 0 0)",
  //     duration: 1.5,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".reveal-text",
  //       start: "top bottom",
  //       end: "bottom top",   
  //       scrub: 1,       
  //       markers: true
  //     }
  //   });
  // }, { scope: containerRef });

  return (
    <div ref={containerRef} className="motivation w-full h-screen flex flex-col justify-center items-center text-center">
        <div className="lg:w-1/2 w-full px-4 h-1/2">
            <p 
              className="reveal-text lg:text-5xl text-2xl font-semibold leading-relaxed"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              A batch where we have gamer and game developer. music listener to sound designer , DJ.  AI user and AI developer , web developer this is not a normal batch this is something else
            </p>
        </div>
    </div>
  )
}

export default Motivation
