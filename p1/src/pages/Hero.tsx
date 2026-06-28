import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
 
gsap.registerPlugin(useGSAP);


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
 
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
 
      tl
        // Navbar slides down
        .from(".nav-bar", { y: -60, autoAlpha: 0, duration: 0.9 })
 
        // Background image fades + subtle scale
        .from(".hero-img", { autoAlpha: 0, scale: 1.04, duration: 1.2 }, "-=0.5")
 
        // Title words stagger up
        .from(
          ".hero-word",
          { y: 60, autoAlpha: 0, duration: 0.75, stagger: 0.12 },
          "-=0.7"
        )
 
        // Right side slides in
        .from(".hero-right", { x: 40, autoAlpha: 0, duration: 0.7 }, "-=0.4")
 
        // Buttons pop in
        .from(
          ".hero-btn",
          { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.15 },
          "-=0.2"
        );

    },

    { scope: containerRef }
  );
 
  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {/* ── Background image ── */}
      <img
        className="hero-img absolute   object-top inset-0 w-[100vw] h-[150vh] "
        src="https://i.pinimg.com/736x/78/af/c9/78afc99af9ffeccab3cd7d2b54c6ccdf.jpg"
        alt="Hero background"
      />
 
      {/* ── Noise overlay (needs a tiny inline style — no Tailwind utility exists) ── */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />
 
      {/* ── Navbar ── */}
      <Navbar />
 
      {/* ── Hero content ── */}
      <div className="absolute inset-0 flex flex-col justify-end px-10 pb-[52px] z-[5]">
        <div className="flex items-end justify-between w-full">
 
          {/* Left — oversized title */}
          <div className="max-w-[62%]">
            {/* Line 1 */}
            <span className="block leading-[0.92] overflow-hidden">
              <span
                className="hero-word inline-block text-white tracking-[0.02em]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(60px, 7.5vw, 110px)",
                }}
              >
                CREATIVE&nbsp;
              </span>
              {/* Outlined serif italic word */}
              <span
                className="hero-word inline-block tracking-[0] text-transparent"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(54px, 7vw, 100px)",
                  WebkitTextStroke: "2px rgba(255,255,255,0.55)",
                }}
              >
                DESIGNER
              </span>
            </span>
 
            {/* Line 2 */}
            <span className="block leading-[0.92] overflow-hidden">
              <span
                className="hero-word inline-block text-white tracking-[0.02em]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(60px, 7.5vw, 110px)",
                }}
              >
                AND DEVELOPER.
              </span>
            </span>
          </div>
 
          {/* Right — description + tagline + CTA buttons */}
          <div className="hero-right max-w-[360px] text-left pb-1">
            <p
              className="text-white/80 text-[13.5px] leading-relaxed tracking-[0.01em] font-normal mb-[18px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              A designer who loves to code and a developer who loves to design.
              I create things that look simple, but feel alive. For me, a good
              website isn't just about pixels and performance, it's about how it
              makes people feel when they use it.
            </p>
 
            <p
              className="text-white text-[20px] tracking-[0.08em] leading-[1.2] mb-7"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MOVE PEOPLE, NOT JUST{" "}
              <span
                className="text-white/45 italic"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                SCREENS
              </span>
              .
            </p>
 
            <div className="flex gap-4">
              <span className="hero-btn inline-block">
                <Button
                  label="LET'S COLLABORATE"
                  variant="outline"
                  size="md"
                  fontSize="12px"
                  animDuration={0.65}
                  scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ-_•"
                />
              </span>
              <span className="hero-btn inline-block">
                <Button
                  label="HIRE ME"
                  variant="dark"
                  bg="#232120"
                  size="md"
                  fontSize="12px"
                  animDuration={0.45}
                />
              </span>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default Hero;
