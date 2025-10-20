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
         className="scroll-mt-24 relative overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
      >
         {/* Decorative gradient blur shapes */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full -z-10"></div>

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Left Image Section */}
            <div data-aos="fade-right" className="relative flex justify-center">
               <div className="relative w-72 sm:w-96 md:w-[420px]">
                  <img
                     src="/imgs/story.jpg"
                     alt="Our Story"
                     className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
               </div>
            </div>

            {/* Right Text Section */}
            <div data-aos="fade-left" className="text-center md:text-left">
               <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-700  ">
                  Our <span className="text-indigo-600">Story</span>
               </h2>
               <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
                  It all started with a simple idea — to create a single
                  platform that helps students and young minds not only learn
                  efficiently but also unwind and grow creatively.
               </p>
               <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  What began as a small project for smart studying soon evolved
                  into a digital space for learning, reading, music, and gaming
                  — built with passion and the goal of inspiring a balanced,
                  joyful lifestyle.
               </p>
            </div>
         </div>
      </section>
   );
}
