import React, { useEffect, useState } from "react";
import vidio from '../../../../../assets/readingvidio.mp4'
const IntroVideo = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 1000);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`absolute inset-0 transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source
          src={vidio}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/30 to-black/90 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl pt-3 sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              SmartStudy
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            Your all-in-one learning ecosystem for modern education.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access notes, past papers, AI-guided plans, and interactive
            mentorship — helping you{" "}
            <span className="text-indigo-400 font-semibold italic">
              study smarter, not longer.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-5 py-2 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-indigo-500/30 transition-all transform hover:scale-105 hover:-translate-y-1">
              Get Started Free
            </button>
            <button className="border-2 border-indigo-400/60 hover:bg-indigo-600/30 hover:border-indigo-300 px-5 py-2  rounded-xl text-lg font-semibold backdrop-blur-sm transition-all transform hover:scale-105 hover:-translate-y-1">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 text-sm text-gray-400 animate-bounce">
            <p>Loading your experience...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
