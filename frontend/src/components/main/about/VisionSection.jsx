import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   return (
      <section
         id="our-vision"
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
         {/* Decorative blurred shapes - Changed positions */}
         <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-32 left-16 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
         <div className="absolute top-1/3 right-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Left Text Section */}
            <div data-aos="fade-right" className="order-2 md:order-1">
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Our <span className="text-white">Vision</span>
               </h2>
               <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-4">
                  We believe that balance is the key to growth. Learning should
                  be effective, reading should be inspiring, music should be
                  relaxing, and gaming should be fun — all seamlessly connected
                  in one space.
               </p>
               <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Our vision is to create a platform that nurtures both the mind
                  and the soul — empowering people to grow smarter, dream
                  bigger, and live happier.
               </p>
            </div>

            {/* Right Image Section */}
            <div
               data-aos="fade-left"
               className="flex justify-center md:justify-start order-1 md:order-2"
            >
               <div className="relative w-72 sm:w-[500px]">
                  <img
                     src="/imgs/vision.jpg"
                     alt="Vision"
                     className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 border-2 border-slate-700/50"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"></div>
               </div>
            </div>
         </div>
      </section>
   );
}