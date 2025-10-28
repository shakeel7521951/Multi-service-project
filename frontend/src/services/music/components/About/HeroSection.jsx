import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-[60vh] flex items-center justify-center overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="hidden md:flex absolute top-20 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse" data-aos="zoom-in"></div>
      <div className="hidden md:flex absolute top-1/3 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-bounce" data-aos="zoom-in" data-aos-delay="300"></div>
      <div className="hidden md:flex absolute bottom-20 left-1/4 w-4 h-4 bg-cyan-200 rounded-full opacity-50 animate-pulse" data-aos="zoom-in" data-aos-delay="600"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 md:px-6 pt-30 py-20 text-center relative z-10">

{/* Main Heading */}
        <div data-aos="fade-up">
          <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MusicStudents
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering the next generation of musicians through{" "}
            <span className="text-cyan-400 font-semibold">innovative learning</span>,{" "}
            <span className="text-purple-400 font-semibold">global competitions</span>, and{" "}
            <span className="text-cyan-300 font-semibold">expert mentorship</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-12" data-aos="fade-up" data-aos-delay="200"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-slate-400 text-sm">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-slate-400 text-sm">Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-slate-400 text-sm">Countries</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link to="/music/community" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="relative">Join Community</span>
          </Link>
          
          <Link to="/music/joinnow" className="px-8 py-4 rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-500/50 transition-all duration-300 hover:scale-105">
           Join Now
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-800/60 to-transparent"></div>
    </div>
  );
}