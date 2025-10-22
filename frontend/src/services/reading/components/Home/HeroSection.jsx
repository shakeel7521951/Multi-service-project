import React from "react";
import { FaRocket, FaBookOpen, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="py-20 text-center relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/video/reading_video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img
          src="/images/hero-fallback.jpg"
          alt="Student studying with laptop"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute z-10 inset-0 bg-black opacity-60"></div>

      {/* Animated gradient overlay for brand colors */}
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/40 to-slate-900/40"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight !text-white">
          Welcome to SmartStudy
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white leading-relaxed max-w-3xl mx-auto">
          Access Notes, Past Papers, Study Plans & Expert Guidance —
          from 1st Year to University!
        </p>

        {/* CTA Buttons with Glass Effect */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
          {/* Primary Button with Gradient and Shine Effect */}
          <button className=" group relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gradient-to-br hover:from-slate-800 hover:via-purple-800 hover:to-slate-800 cursor-pointer transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
           <span className="relative z-10 flex items-center justify-center gap-2">
              <FaRocket className="w-5 h-5" />
              Get Started Free
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
          {/* Secondary Button with Glass Effect */}
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 cursor-pointer backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group">
            <span className="flex items-center justify-center gap-2">
              <FaBookOpen className="w-5 h-5" />
              Browse Resources
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-white">
          <p className="text-sm">Trusted by students from 100+ institutions</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;