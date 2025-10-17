import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MusicSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   const features = [
      {
         title: "Focus & Productivity",
         desc: "Listen to curated playlists designed to improve focus and boost creativity.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-7 h-7 text-[#6366F1]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19V6l12-2v13"
               />
            </svg>
         ),
      },
      {
         title: "Relaxing Beats",
         desc: "Unwind after a busy day with calm and soothing instrumentals.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-7 h-7 text-[#6366F1]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 1.343-3 3v6a3 3 0 106 0v-6c0-1.657-1.343-3-3-3z"
               />
            </svg>
         ),
      },
      {
         title: "Discover New Tunes",
         desc: "Explore genres and artists from around the world with our discovery engine.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-7 h-7 text-[#6366F1]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V5"
               />
            </svg>
         ),
      },
   ];

   return (
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] overflow-hidden">
         {/* Heading */}
         <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] inline-block relative pb-2">
               Feel the Music
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"></span>
            </h2>
            <p className="text-[#4B5563] mt-4 max-w-2xl mx-auto">
               Music connects us deeply with our emotions. Whether you need
               focus, relaxation, or inspiration — the right tune can elevate
               your mood.
            </p>
         </div>

         {/* Grid Layout */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text + Cards */}
            <div data-aos="fade-right" className="space-y-6">
               {features.map((f, i) => (
                  <div
                     key={i}
                     className="relative bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all rounded-2xl p-6 flex items-start gap-4"
                     data-aos="fade-up"
                     data-aos-delay={i * 150}
                  >
                     <div className="bg-[#EEF2FF] p-4 rounded-full shadow-sm">
                        {f.icon}
                     </div>
                     <div>
                        <h4 className="font-semibold text-lg text-[#1E1B4B] mb-1">
                           {f.title}
                        </h4>
                        <p className="text-sm text-[#4B5563]">{f.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Right Side - Image */}
            <div data-aos="fade-left" className="relative">
               <div className="overflow-hidden rounded-2xl shadow-lg group">
                  <img
                     src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=60&w=700"
                     alt="Listening to Music"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/60 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold tracking-wide">
                     Let the Rhythm Flow
                  </h3>
               </div>

               {/* Decorative floating shapes */}
               <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#A5B4FC] opacity-30 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-6 -right-8 w-28 h-28 bg-[#C4B5FD] opacity-30 rounded-full blur-3xl"></div>
            </div>
         </div>
      </section>
   );
}

export default MusicSection;
