

const Hero = () => {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col">
        <div>
            <div className="w-full h-32  flex items-center justify-between absolute top-0 left-0 px-6 text-semibold ">
            <p className="text-lg text-center">SGP Web Library</p>
            <p className="text-center text-lg">Created by</p>
            <p className="text-lg text-center">Naren Roy</p>
            <p className="text-lg text-center">2023-26</p>
        </div>
        </div>

        <div>
            <h1 className="text-5xl font-bold text-center text-[#633ea3]">Welcome to SGP Web Library</h1>
            <p className="text-center mt-4 text-2xl text-semibold">A small part of memories in the form of code.</p>
        </div>

    </div>
  )
}

export default Hero