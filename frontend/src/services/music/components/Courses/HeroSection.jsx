import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaArrowRight, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* FLOATING ELEMENTS */}
      <div
        className="absolute top-20 left-10 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-bounce"
        data-aos="fade-down"
      ></div>
      <div
        className="hidden md:flex absolute top-1/3 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"
        data-aos="fade-left"
      ></div>
      <div
        className="hidden md:flex absolute bottom-32 left-20 w-6 h-6 bg-pink-400 rounded-full opacity-50 animate-bounce"
        data-aos="fade-up"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto pt-30 px-3 md:px-6 py-20 text-center">
        {/* HEADER TEXT */}
        <h1
          className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight"
          data-aos="fade-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Explore Our
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Music Courses
          </span>
        </h1>

        <p
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Learn from expert instructors, master your favorite instruments, and
          take your sound to the next level with our world-class curriculum.
        </p>

        {/* RATINGS */}
        <div
          className="flex justify-center items-center gap-3 mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>
          <span className="text-slate-300 text-sm md:text-base">
            4.9/5 from 2,000+ students
          </span>
        </div>

        {/* BUTTONS */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Primary Button with Shine */}
          <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center">
  <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
    Get Started Now
    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
  </span>

  {/* Shine Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></span>
</button>


          {/* Secondary Button */}
          <button className="relative flex items-center justify-center gap-2 border border-slate-600/50 text-slate-300 px-8 py-4 rounded-full font-semibold backdrop-blur-sm bg-slate-800/50 hover:border-slate-500/50 hover:text-white transition-all duration-300 group">
            <FaPlay className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
            View Free Lessons
          </button>
        </div>

        {/* ACCENT DIVIDER */}
        <div
          className="hidden md:flex mt-16 w-40 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
      </div>
    </section>
  );
}
