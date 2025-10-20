import React, { useState, useEffect } from "react";

export default function ServicesHero() {
   // Background images array (use your own URLs or local imports)
   const bgImages = [
      "/imgs/study1.jpg", // Study background
      "/imgs/reading1.jpg", // Reading background
      "/imgs/music1.jpg", // Music background
      "/imgs/gaming1.jpg", // Gaming background
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   // Every 2 seconds, change background
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % bgImages.length);
      }, 2000); // 2000 ms = 2 seconds

      return () => clearInterval(interval);
   }, [bgImages.length]);

   return (
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
         {/* Background images (all stacked, only one visible at a time) */}
         {bgImages.map((img, index) => (
            <div
               key={index}
               className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
               }`}
               style={{
                  backgroundImage: `url(${img})`,
               }}
            />
         ))}

         {/* Overlay (dark layer for text readability) */}
         <div className="absolute inset-0 bg-black/50"></div>

         {/* Hero content */}
         <div className="relative z-10 px-6 md:px-12 text-white max-w-3xl">
            <h1
               className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
               data-aos="fade-up"
            >
               Discover, Learn, Play & Create
            </h1>
            <p
               className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="100"
            >
               Explore our world of <span className="font-semibold">Study</span>
               , <span className="font-semibold">Reading</span>,{" "}
               <span className="font-semibold">Music</span> and{" "}
               <span className="font-semibold">Gaming</span> — where creativity
               meets curiosity.
            </p>
            <button
               className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-medium shadow-lg"
               data-aos="zoom-in"
               data-aos-delay="200"
            >
               Explore All Services
            </button>
         </div>
      </section>
   );
}
