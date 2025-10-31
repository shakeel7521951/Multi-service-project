import React from 'react';
import { FaMusic, FaGuitar, FaDrum, FaHeadphones, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating music icons */}
      <div className="hidden md:flex absolute top-10 left-10 text-cyan-400 opacity-20" data-aos="fade-down-right">
        <FaMusic size={40} />
      </div>
      <div className="hidden md:flex absolute top-20 right-20 text-purple-400 opacity-20" data-aos="fade-down-left">
        <FaGuitar size={40} />
      </div>
      <div className="hidden md:flex absolute bottom-20 left-20 text-pink-400 opacity-20" data-aos="fade-up-right">
        <FaDrum size={40} />
      </div>
      <div className="hidden md:flex absolute bottom-10 right-10 text-cyan-400 opacity-20" data-aos="fade-up-left">
        <FaHeadphones size={40} />
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-xl animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-3 md:px-6">
        <div
          className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-slate-500/50 transition-all duration-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Header with staggered animation */}
          <div className="text-center mb-8" data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Join the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Musics Revolution</span>
            </h2>
          </div>

          {/* Description with animation */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="300">
            <p className="md:text-xl text-slate-300 md:max-w-2xl mx-auto leading-relaxed">
              Become part of a global movement that's transforming how music is learned, created, and shared across the world.
            </p>
          </div>

          {/* CTA Button with enhanced effects */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="700">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16" data-aos="fade-up">
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-2xl"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Button content */}
        <span className="relative flex items-center justify-center gap-3 text-nowrap">
          Get Started Free
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Link>
    </div>
            
            {/* Secondary text */}
            <p className="text-slate-400 text-sm mt-4" data-aos="fade-up" data-aos-delay="800">
              No credit card required • Start learning in minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};     

export default CtaSection;