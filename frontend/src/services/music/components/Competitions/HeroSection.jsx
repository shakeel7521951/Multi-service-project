import React, { useEffect } from "react";
import {
  FaTrophy,
  FaUsers,
  FaMusic,
  FaArrowRight,
  FaGlobe,
  FaGem,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const stats = [
    { number: "50+", label: "Competitions", icon: <FaTrophy /> },
    { number: "10K+", label: "Participants", icon: <FaUsers /> },
    { number: "$2M+", label: "Prize Money", icon: <FaGem /> },
    { number: "15+", label: "Countries", icon: <FaGlobe /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden text-center">
      {/* Floating gradient orbs */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"
        data-aos="fade-down"
      ></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"
        data-aos="fade-left"
      ></div>
      <div
        className="absolute bottom-40 left-20 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-bounce"
        data-aos="fade-up"
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-ping"
        data-aos="zoom-in"
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div data-aos="fade-up" className="mb-16">
          <div
            className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-full mb-6 hover:border-slate-500/50 transition-all duration-300"
            data-aos="zoom-in"
          >
            <FaTrophy className="text-cyan-400" />
            <span className="text-slate-300 text-sm">
              Showcase Your Talent Globally
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            data-aos="fade-up"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Music
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Competitions
            </span>
          </h1>

          <p
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Participate in thrilling online music events and showcase your
            talent to the world. Win amazing prizes and get recognized by
            industry professionals.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Register Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            <button className="border border-slate-600/50 text-slate-300 px-8 py-4 rounded-full font-semibold backdrop-blur-sm bg-slate-800/50 hover:border-slate-500/50 hover:text-white transition-all duration-300">
              View Schedule
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 justify-items-center"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 w-full max-w-[180px] text-center hover:border-slate-500/50 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Judges */}
        <div className="text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            <span className="text-slate-300 uppercase tracking-wider text-sm">
              Meet Our Judges
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            World-Class{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Judging Panel
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
            {[
              { name: "Industry Professionals", icon: <FaUsers /> },
              { name: "Award-Winning Artists", icon: <FaTrophy /> },
              { name: "Music Producers", icon: <FaMusic /> },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 w-full hover:border-slate-500/50 transition-all duration-300 text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold text-lg">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
