import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import mh from '../../../../assets/mh.jpg'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-10 md:pt-16 md:pb-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Floating Background Elements */}
      <div
        className="fixed top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-40 animate-pulse"
        data-aos="zoom-in"
      ></div>
      <div
        className="fixed top-1/3 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-bounce"
        data-aos="zoom-in"
        data-aos-delay="300"
      ></div>

      {/* HERO SECTION */}
      <section
        className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        <div className="text-center md:text-left">
          <h1
            className="text-3xl md:text-6xl text-white font-extrabold leading-tight"
            data-aos="fade-right"
          >
            Discover, Learn &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Compete
            </span>{" "}
            in Music
          </h1>

          <p
            className="mt-6 text-slate-300 text-lg max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join MusicStudents — an online platform for music learners and
            performers. Practice, upload, and participate in live competitions.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="/music/joinnow" className="cursor-pointer px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              Join Now Free
            </Link>
            <Link to="/music/courses" className="cursor-pointer px-8 py-4 rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-500/80 transition-all duration-300">
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="relative group" data-aos="fade-left">
          {/* Glowing blobs */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-400 blur-3xl opacity-20 rounded-full" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 blur-3xl opacity-20 rounded-full" />

          {/* Image with gentle zoom effect */}
          <img
            src={mh}
            alt="music hero"
            className="relative rounded-3xl shadow-2xl border border-slate-700/50 hover:border-slate-500/80 w-full max-w-xl mx-auto transform transition duration-700 ease-in-out group-hover:scale-[1.03] group-hover:shadow-cyan-500/20"
          />
        </div>
      </section>
    </div>
  );
}
