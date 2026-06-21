import Hero from "./components/Hero"
import Motivation from "./components/Motivation"
import Swipers from "./components/Swipers"


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Hero />
      <Swipers/>
      <Motivation />
    </div>
  )
}

export default App