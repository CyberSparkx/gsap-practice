const Hero = () => {
  const PHOTOS = [
    "https://picsum.photos/seed/sgp1/200/200",
    "https://picsum.photos/seed/sgp2/200/200",
    "https://picsum.photos/seed/sgp3/200/200",
    "https://picsum.photos/seed/sgp4/200/200",
    "https://picsum.photos/seed/sgp5/200/200",
    "https://picsum.photos/seed/sgp6/200/200",
    "https://picsum.photos/seed/sgp7/200/200",
    "https://picsum.photos/seed/sgp8/200/200",
  ];

  return (
    <div className="relative w-screen h-screen  overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">
     <div className="[clip-path:circle(0vmax_at_50%_0%)] bg-white">
         {/* top bar — stacks on mobile, row from sm+ */}
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-1 sm:gap-4 absolute top-0 left-0 px-4 sm:px-6 py-3 sm:py-0 sm:h-32 font-semibold text-center ">
        <p className="text-xs sm:text-base lg:text-lg flex-1 min-w-[70px]">SGP Web Library</p>
        <p className="text-xs sm:text-base lg:text-lg flex-1 min-w-[70px]">Created by</p>
        <p className="text-xs sm:text-base lg:text-lg flex-1 min-w-[70px]">Naren Roy</p>
        <p className="text-xs sm:text-base lg:text-lg flex-1 min-w-[70px]">2023-26</p>
      </div>

      {/* rotating layer — capped with min(), so wide screens don't fling photos to the edges */}
      <div
        className="absolute inset-0 m-auto animate-[spin_28s_linear_infinite] -z-10 [container-type:size]"
        style={{ width: "min(60vmin, 420px)", height: "min(60vmin, 420px)" }}
      >
        {PHOTOS.map((src, i) => {
          const angle = (360 / PHOTOS.length) * i;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[22cqw] h-[22cqw]"
              style={{
                transform: `rotate(${angle}deg) translate(70cqw) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              <div className="w-full h-full rounded-lg overflow-hidden animate-[spin_28s_linear_infinite_reverse]">
                <img
                  src={src}
                  alt={`SGP memory ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* center text */}
      <div className="relative z-10 text-center px-2 max-w-[92vw] sm:max-w-2xl">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-[#633ea3] leading-tight">
          Welcome to SGP Web Library
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-xl lg:text-xl font-semibold">
          A small part of memories in the form of code.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Hero;