import React from "react";

export default function ServicesHero() {
   return (
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 md:px-16 py-12 relative overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
         <div className="absolute top-1/2 right-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full relative z-10">
            {/* Left Column: Hero Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-1">
               <h1
                  className="text-4xl md:text-6xl font-extrabold leading-tight"
                  data-aos="fade-up"
               >
                  Discover,{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     Learn
                  </span>
                  , Play & Create
               </h1>
               <p
                  className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  Explore our world of{" "}
                  <span className="font-semibold text-white">Study</span>,{" "}
                  <span className="font-semibold text-white">Reading</span>,{" "}
                  <span className="font-semibold text-white">Music</span>, and{" "}
                  <span className="font-semibold text-white">Gaming</span> — where
                  creativity meets curiosity.
               </p>
               <button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  data-aos="zoom-in"
                  data-aos-delay="200"
               >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">Explore All Services</span>
               </button>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center md:justify-start order-1 md:order-2 pt-10">
               <img
                  src="/imgs/study-read-listen-play.png"
                  alt="Study Read Listen Play"
                  className="w-full max-w-md md:max-w-lg drop-shadow-2xl rounded-2xl border-2 border-slate-200/50 "
                  data-aos="fade-left"
               />
            </div>
         </div>
      </section>
   );
}