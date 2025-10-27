import React, { useEffect } from "react";
import { FaMusic, FaUsers, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,
      easing: "ease-out-cubic"
    });
  }, []);

  const features = [
    { icon: FaMusic, text: "Share Music", desc: "Upload your performances" },
    { icon: FaUsers, text: "Connect", desc: "Meet fellow artists" },
    { icon: FaStar, text: "Grow", desc: "Get feedback & improve" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Floating Elements (set to absolute instead of fixed to stop overflow) */}
      <div
        className="hidden md:flex absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"
        data-aos="fade-down"
      ></div>
      <div
        className="hidden md:flex absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce"
        data-aos="fade-up"
      ></div>
      <div
        className="hidden md:flex absolute bottom-32 left-20 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse"
        data-aos="fade-right"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-25 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16 pt-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-pulse">
              Music Community
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Share your performances, connect with other artists, and grow together in our vibrant music community.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link to="/" className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-full top-0 bg-white opacity-20 group-hover:animate-shine"></div>
            </Link>

            <Link to="/music/courses" className="border border-slate-600/50 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-slate-500/50 transform hover:scale-105 transition-all duration-300">
              Watch Demo
            </Link>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-20" data-aos="fade-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-slate-500/50 transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <feature.icon className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.text}</h3>
              <p className="text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(400%) rotate(45deg);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
}
