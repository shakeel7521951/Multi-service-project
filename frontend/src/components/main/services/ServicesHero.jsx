import React from "react";

export default function ServicesHero() {
   return (
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 md:px-16 py-12">
         <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
            {/* Left Column: Hero Content */}
            <div className="space-y-6 text-center md:text-left">
               <h1
                  className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
                  data-aos="fade-up"
               >
                  Discover, Learn, Play & Create
               </h1>
               <p
                  className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl mx-auto md:mx-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  Explore our world of{" "}
                  <span className="font-semibold">Study</span>,{" "}
                  <span className="font-semibold">Reading</span>,{" "}
                  <span className="font-semibold">Music</span>, and{" "}
                  <span className="font-semibold">Gaming</span> — where
                  creativity meets curiosity.
               </p>
               <button
                  className="bg-white text-blue-700 hover:bg-gray-100 transition px-8 py-3 rounded-full font-semibold shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="200"
               >
                  Explore All Services
               </button>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center md:justify-end">
               <img
                  src="/imgs/study-read-listen-play.png"
                  alt="Study Read Listen Play"
                  className="w-full max-w-md md:max-w-lg drop-shadow-2xl rounded-2xl transition-transform duration-500 hover:scale-105"
                  data-aos="fade-left"
               />
            </div>
         </div>
      </section>
   );
}
