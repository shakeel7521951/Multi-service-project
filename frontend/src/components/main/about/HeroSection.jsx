import React from "react";

export default function HeroSection() {
   return (
      <section
         className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
         id="about-hero"
      >
         {/* 🌈 Decorative Background Blur Circles */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-400/15 rounded-full blur-3xl animate-pulse"></div>

         {/* 📝 Text Section */}
         <div
            className="relative z-10 md:w-1/2 text-center md:text-left space-y-6"
         >
            <h1
               className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
               About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
               Learn. Read. Play. Relax — All in One Place. Discover how we
               combine study, reading, music, and gaming into one powerful
               experience built for balance and growth.
            </p>
            <button
               className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-500 shadow-lg relative overflow-hidden group"
            >
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
               <span className="relative z-10">Explore More</span>
            </button>
         </div>

         {/* 🎨 Image Section */}
         <div
            className="relative z-10 md:w-1/2 flex justify-center mt-12 md:mt-0"
         >
            <div className="relative">
               <img
                  src="/imgs/about.jpg"
                  alt="About illustration"
                  className="w-64 sm:w-80 md:w-[420px] hover:scale-105 rounded-2xl transition-transform duration-700 shadow-2xl border-2 border-slate-700/50"
               />
               {/* Floating elements around image */}
               <div className="absolute -top-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
               <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
               <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-ping"></div>
            </div>
         </div>
      </section>
   );
}