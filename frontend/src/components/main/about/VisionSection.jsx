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
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-indigo-50 via-white to-blue-100"
      >
         {/* Decorative blurred shapes */}
         <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Left Text Section */}
            <div data-aos="fade-right">
               <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-700 ">
                  Our <span className="text-blue-600">Vision</span>
               </h2>
               <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
                  We believe that balance is the key to growth. Learning should
                  be effective, reading should be inspiring, music should be
                  relaxing, and gaming should be fun — all seamlessly connected
                  in one space.
               </p>
               <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Our vision is to create a platform that nurtures both the mind
                  and the soul — empowering people to grow smarter, dream
                  bigger, and live happier.
               </p>
            </div>

            {/* Right Image Section */}
            <div
               data-aos="fade-left"
               className="flex justify-center md:justify-end"
            >
               <div className="relative w-72 sm:w-96 md:w-[420px]">
                  <img
                     src="/imgs/vision.jpg"
                     alt="Vision"
                     className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
               </div>
            </div>
         </div>
      </section>
   );
}
