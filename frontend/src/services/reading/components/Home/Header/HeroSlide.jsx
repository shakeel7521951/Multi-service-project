import React from "react";

const HeroSlide = ({ slide }) => {
  if (!slide) return null; // Safety check

  return (
    <div
      className="relative flex items-center justify-center h-full px-6 md:px-10"
      style={{
        backgroundImage: `url(${slide.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>

      {/* Floating glow orbs */}
      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 blur-3xl top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 blur-3xl bottom-1/3 right-1/4 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
          <span className="text-indigo-300 text-sm font-semibold uppercase tracking-wider">
            {slide.subtitle}
          </span>
        </div>

        <h1 className="text-3xl  sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
          {slide.title}
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          {slide.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-5 py-2 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3">
            {slide.btnText}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
          <button className="group border-2 border-white/30 hover:border-white/60 hover:bg-white/10 px-5 py-2 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
