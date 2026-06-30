gsap.registerPlugin(MorphSVGPlugin) 


gsap.to("#v1", {
  morphSVG: "#v2",
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});