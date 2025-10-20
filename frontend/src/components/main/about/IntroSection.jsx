import React from "react";

export default function IntroSection() {
   return (
      <section
         id="introduction"
         className="scroll-mt-24 relative py-24 px-6 md:px-20 bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden"
      >
         {/* 🌈 Animated background shapes */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

         {/* 🌊 Wavy top divider */}
         <svg
            className="absolute top-0 left-0 w-full text-indigo-900"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fill="currentColor"
               fillOpacity="1"
               d="M0,128L60,117.3C120,107,240,85,360,74.7C480,64,600,64,720,90.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
         </svg>

         {/* 🧠 Content Section */}
         <div
            data-aos="fade-up"
            className=" relative z-10 max-w-5xl mx-auto text-center"
         >
            <h2 className=" text-4xl md:text-5xl font-bold mb-6 text-[#FFD700]">
               Welcome to Your World of Creativity
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
               Here at{" "}
               <span className="text-blue-400 font-semibold">Your Website</span>
               , we believe learning and fun should go hand in hand. Study with
               focus, read to inspire your mind, relax with music, and refresh
               with games — all crafted to help you grow and unwind at your own
               pace.
            </p>
         </div>

         {/* 🧩 Floating Info Cards */}
         <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
               {
                  title: "📚 Study Smart",
                  desc: "Access powerful learning tools and study materials to enhance your knowledge.",
                  aos: "fade-right",
               },
               {
                  title: "📖 Read & Relax",
                  desc: "Dive into inspiring articles, stories, and wisdom that fuel your creativity.",
                  aos: "fade-up",
               },
               {
                  title: "🎵 Music Mode",
                  desc: "Boost focus or unwind with curated playlists designed to match your mood.",
                  aos: "fade-up",
               },
               {
                  title: "🎮 Play & Refresh",
                  desc: "Take breaks the fun way with engaging and mindful mini-games.",
                  aos: "fade-left",
               },
            ].map((card, i) => (
               <div
                  key={i}
                  data-aos={card.aos}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500"
               >
                  <h3 className="text-xl font-semibold mb-3 text-[#FFD700]">
                     {card.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                     {card.desc}
                  </p>
               </div>
            ))}
         </div>

         {/* 🌊 Wavy bottom divider */}
         <svg
            className="absolute bottom-0 left-0 w-full text-gray-900"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fill="currentColor"
               fillOpacity="1"
               d="M0,128L60,133.3C120,139,240,149,360,160C480,171,600,181,720,186.7C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
         </svg>
      </section>
   );
}
