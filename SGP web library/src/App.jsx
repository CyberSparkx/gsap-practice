import Hero from "./components/hero"
import Swipers from "./components/swipers"


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Hero />
      <Swipers/>
    </div>
  )
}

export default App