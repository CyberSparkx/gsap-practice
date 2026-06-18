import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Pages = () => {
    const pathRef = useRef<SVGPathElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength()

            // Set initial dash array and offset so it's completely hidden
            gsap.set(pathRef.current, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            })

            // Animate it drawn across the entire scroll of the container
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2, // Increased scrub smoothing to remove lag
                }
            })
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* The SVG overlay, absolutely positioned to span the full scroll height */}
            <div className="absolute top-3 left-0 w-full h-full pointer-events-none z-50">
                <svg width="100%" height="100%" viewBox="0 0 281 687" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        ref={pathRef}
                        d="M26.2924 14.0034C26.2924 14.0034 219.792 64.5034 254.792 155.003C289.792 245.503 42.7924 595.503 26.2924 354.003C9.79241 112.503 315.292 355.503 254.792 462.503C194.292 569.503 -61.7076 462.503 42.7924 665.003"
                        stroke="#E3A41D"
                        strokeWidth="28"
                        strokeLinecap="round"
                        shapeRendering="crispEdges"
                        vectorEffect="nonScalingStroke"
                    />
                </svg>
            </div>

            <div className='w-screen h-screen text-zinc-50 flex justify-center items-center bg-zinc-900 font-semibold text-2xl'>Pages 1</div>
            <div className='w-screen h-screen text-zinc-50 flex justify-center items-center bg-zinc-800 font-semibold text-2xl'>Pages 2</div>
            <div className='w-screen h-screen text-zinc-50 flex justify-center items-center bg-zinc-900 font-semibold text-2xl'>Pages 3</div>
            <div className='w-screen h-screen text-zinc-50 flex justify-center items-center bg-zinc-800 font-semibold text-2xl'>Pages 4</div>
        </div>
    )
}

export default Pages