import React from "react";

export default function HeroSection() {
   return (
      <section
         className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-b from-blue-900 via-indigo-800 to-gray-900 text-white overflow-hidden"
         id="about-hero"
      >
         {/* 🌈 Decorative Background Blur Circles */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>

         {/* 📝 Text Section */}
         <div
            data-aos="fade-right"
            className="relative z-10 md:w-1/2 text-center md:text-left space-y-6"
         >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
               About <span className="text-[#FFD700]">Us</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
               Learn. Read. Play. Relax — All in One Place. Discover how we
               combine study, reading, music, and gaming into one powerful
               experience built for balance and growth.
            </p>
            <button
               data-aos="zoom-in"
               className="mt-6 px-6 py-3 bg-[#FFD700] text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform duration-500"
            >
               Explore More
            </button>
         </div>

         {/* 🎨 Image Section */}
         <div
            data-aos="fade-left"
            className="relative z-10 md:w-1/2 flex justify-center mt-12 md:mt-0"
         >
            <img
               src="/imgs/about.jpg"
               alt="About illustration"
               className="w-80 md:w-[420px] hover:scale-110 rounded-full transition-transform duration-700 drop-shadow-2xl"
            />
         </div>
      </section>
   );
}
