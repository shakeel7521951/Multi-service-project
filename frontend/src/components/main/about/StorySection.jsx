import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StorySection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   return (
      <section
         id="our-story"
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
         {/* Decorative gradient blur shapes - Changed positions */}
         <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute md:top-24 md:left-24 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-48 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
         <div className="absolute top-96 left-10 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Left Text Section */}
            <div data-aos="fade-right" className="text-center md:text-left">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Our <span className="text-white">Story</span>
               </h2>
               <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-4">
                  It all started with a simple idea — to create a single
                  platform that helps students and young minds not only learn
                  efficiently but also unwind and grow creatively.
               </p>
               <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  What began as a small project for smart studying soon evolved
                  into a digital space for learning, reading, music, and gaming
                  — built with passion and the goal of inspiring a balanced,
                  joyful lifestyle.
               </p>
            </div>

            {/* Right Image Section */}
            <div data-aos="fade-left" className="relative flex justify-center">
               <div className="relative w-72 sm:w-[500px]">
                  <img
                     src="/imgs/story.jpg"
                     alt="Our Story"
                     className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 border-2 border-slate-700/50"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"></div>
               </div>
            </div>
         </div>
      </section>
   );
}