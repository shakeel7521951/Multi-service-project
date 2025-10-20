import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MissionSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   return (
      <section
         id="our-mission"
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white"
      >
         {/* Decorative gradient orbs */}
         <div className="absolute top-10 left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl -z-10"></div>
         <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
            {/* Left Text Section */}
            <div data-aos="fade-right">
               <h2 className="text-4xl sm:text-5xl font-bold mb-6 ">
                  Our <span className="text-yellow-300">Mission</span>
               </h2>
               <p className="text-lg sm:text-xl leading-relaxed text-white/90 mb-6">
                  Our mission is to build a digital sanctuary where learning,
                  creativity, and relaxation come together. We aim to make
                  knowledge accessible, entertainment meaningful, and personal
                  growth enjoyable for everyone.
               </p>
               <p className="text-white/80">
                  Whether you’re studying hard, reading for inspiration,
                  listening to music, or gaming for fun — we’re here to make
                  every moment count.
               </p>
            </div>

            {/* Right Image Section */}
            <div
               className="flex justify-center md:justify-end"
               data-aos="fade-left"
            >
               <div className="relative w-72 sm:w-96">
                  <img
                     src="/imgs/mission.jpg"
                     alt="Mission"
                     className="rounded-3xl w-100 h-100 object-cover shadow-2xl transform hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/30 to-transparent"></div>
               </div>
            </div>
         </div>
      </section>
   );
}
