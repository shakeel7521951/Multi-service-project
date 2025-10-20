import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { 
  HiOutlineMusicalNote, 
  HiOutlineMicrophone, 
  HiOutlineEnvelope 
} from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

function MusicSection() {
   useEffect(() => {
      AOS.init({
         duration: 1200,
         once: false,
         mirror: true,
         easing: "ease-out-cubic"
      });
   }, []);

   const features = [
      {
         title: "Focus & Productivity",
         desc: "Listen to curated playlists designed to improve focus and boost creativity.",
         icon: (
           <HiOutlineMusicalNote className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7" />

         ),
         gradient: "from-cyan-500 to-blue-600"
      },
      {
         title: "Relaxing Beats",
         desc: "Unwind after a busy day with calm and soothing instrumentals.",
         icon: (
            <HiOutlineMicrophone className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7" />

         ),
         gradient: "from-purple-500 to-pink-600"
      },
      {
         title: "Discover New Tunes",
         desc: "Explore genres and artists from around the world with our discovery engine.",
         icon: (
           <HiOutlineEnvelope className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7" />

         ),
         gradient: "from-cyan-400 to-purple-500"
      },
   ];

   return (
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute top-10 xs:top-20 left-4 xs:left-10 w-40 h-40 xs:w-64 xs:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
         <div className="absolute bottom-10 xs:bottom-20 right-4 xs:right-10 w-44 h-44 xs:w-72 xs:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
         <div className="absolute top-1/2 left-1/4 w-32 h-32 xs:w-56 xs:h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping"></div>

         {/* Heading */}
         <div className="text-center mb-8 xs:mb-12 sm:mb-16 relative z-10" data-aos="fade-up">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white inline-block relative pb-2 xs:pb-3">
               Feel the{" "}
               <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Music
               </span>
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 xs:w-24 sm:w-28 md:w-32 h-0.5 xs:h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></span>
            </h2>
            <p className="text-slate-300 text-sm xs:text-base sm:text-lg md:text-xl mt-4 xs:mt-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
               Music connects us deeply with our emotions. Whether you need
               focus, relaxation, or inspiration — the right tune can elevate
               your mood.
            </p>
         </div>

         {/* Grid Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Side - Feature Cards */}
            <div data-aos="fade-right" className="space-y-4 xs:space-y-5 sm:space-y-6 order-2 lg:order-1">
               {features.map((f, i) => (
                  <div
                     key={i}
                     className="group relative"
                     data-aos="fade-up"
                     data-aos-delay={i * 200}
                  >
                     {/* Glow Effect */}
                     <div className="absolute -inset-0.5 xs:-inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl xs:rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                     
                     {/* Feature Card */}
                     <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 hover:border-slate-500/50 transition-all duration-500 group-hover:scale-105">
                        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 xs:gap-4 sm:gap-5">
                           <div className={`bg-gradient-to-r ${f.gradient} p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <div className="text-white">
                                 {f.icon}
                              </div>
                           </div>
                           <div className="flex-1">
                              <h4 className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-1 xs:mb-2 sm:mb-3">
                                 {f.title}
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg">
                                 {f.desc}
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Floating Dot */}
                     <div className={`absolute -top-1 xs:-top-2 -right-1 xs:-right-2 w-2 h-2 xs:w-3 xs:h-3 bg-${f.gradient.split(' ')[0].replace('from-', '')} rounded-full animate-ping`}></div>
                  </div>
               ))}

               {/* CTA Button */}
               <div 
                  className="pt-4 xs:pt-5 sm:pt-6"
                  data-aos="fade-up"
                  data-aos-delay="600"
               >
                  <button className="group relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-sm xs:text-base px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-xl xs:rounded-2xl hover:from-purple-600 hover:to-pink-700 cursor-pointer transition-all duration-500 transform hover:scale-105 shadow-xl xs:shadow-2xl hover:shadow-purple-500/25 w-full">
                     <span className="relative z-10 flex items-center justify-center gap-2 xs:gap-3">
                        Start Listening
                        <FiArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />

                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
               </div>
            </div>

            {/* Right Side - Image */}
            <div data-aos="fade-left" className="relative order-1 lg:order-2">
               <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl shadow-xl xs:shadow-2xl border border-slate-700/50 group">
                  <img
                     src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=700"
                     alt="Listening to Music"
                     className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60 opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
                  <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6">
                     <h3 className="text-white text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2 drop-shadow-lg">
                        Let the Rhythm Flow
                     </h3>
                     <p className="text-slate-300 text-xs xs:text-sm">
                        Immerse yourself in soundscapes that move your soul
                     </p>
                  </div>
               </div>

               {/* Decorative floating shapes */}
               <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-6 h-6 xs:w-8 xs:h-8 bg-cyan-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
               <div className="absolute -bottom-2 xs:-bottom-4 -left-2 xs:-left-4 w-5 h-5 xs:w-6 xs:h-6 bg-purple-400 rounded-full blur-xl opacity-60 animate-bounce"></div>
               
               {/* Music Visualizer Effect */}
               <div className="absolute -bottom-4 xs:-bottom-6 left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-0.5 xs:gap-1">
                  {[2, 4, 6, 8, 6, 4, 2].map((height, index) => (
                     <div
                        key={index}
                        className="w-0.5 xs:w-1 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-t-lg animate-bounce"
                        style={{ 
                           height: `${height * (window.innerWidth < 375 ? 2 : 3)}px`,
                           animationDelay: `${index * 0.1}s`
                        }}
                     ></div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default MusicSection;