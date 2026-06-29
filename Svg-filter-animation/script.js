gsap.registerPlugin(ScrollTrigger) ;

gsap.to('.displacement',{
    r:500,
    scrollTrigger:{
        trigger:".wrapper",
        start : "top 40%",
        end: "bottom 80%",
        scrub: true,
    }
})