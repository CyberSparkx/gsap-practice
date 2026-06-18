import React from 'react'
import Pages from './Pages'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const App = () => {
  return (
    <ReactLenis root>
      <div>
        <Pages />
      </div>
    </ReactLenis>
  )
}

export default App