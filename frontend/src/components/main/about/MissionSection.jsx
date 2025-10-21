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
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
         {/* Decorative gradient orbs */}
         <div className="absolute top-20 right-20 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
         <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
         <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-pink-400/15 rounded-full blur-3xl -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute top-32 left-32 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-40 right-40 w-6 h-6 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
         <div className="absolute top-1/2 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
            {/* Left Image Section */}
            <div
               className="flex justify-center md:justify-start order-1"
               data-aos="fade-right"
            >
               <div className="relative w-72 sm:w-[500px]">
                  <img
                     src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3VyJTIwTWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                     alt="Mission"
                     className="rounded-3xl w-full h-full object-cover shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-slate-700/50"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"></div>
               </div>
            </div>

            {/* Right Text Section */}
            <div data-aos="fade-left" className="order-2">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Our <span className="text-white">Mission</span>
               </h2>
               <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-6">
                  Our mission is to build a digital sanctuary where learning,
                  creativity, and relaxation come together. We aim to make
                  knowledge accessible, entertainment meaningful, and personal
                  growth enjoyable for everyone.
               </p>
               <p className="text-slate-300">
                  Whether you're studying hard, reading for inspiration,
                  listening to music, or gaming for fun — we're here to make
                  every moment count.
               </p>
            </div>
         </div>
      </section>
   );
}