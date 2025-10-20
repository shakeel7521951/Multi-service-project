import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; 
import AOS from "aos";
import "aos/dist/aos.css";

function CategoriesSection() {
   useEffect(() => {
      AOS.init({
         duration: 1200,
         once: false,
         easing: "ease-out-cubic",
         mirror: true
      });
   }, []);

   const categories = [
      {
         title: "Study",
         desc: "Access focused study guides, notes, and educational resources.",
         img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
         color: "#3b82f6",
         gradient: "from-cyan-500 to-blue-600"
      },
      {
         title: "Reading",
         desc: "Dive into engaging articles, stories, and insightful reads.",
         img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600",
         color: "#22d3ee",
         gradient: "from-cyan-400 to-blue-500"
      },
      {
         title: "Music",
         desc: "Listen to relaxing tunes to stay calm and improve focus.",
         img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
         color: "#a855f7",
         gradient: "from-purple-400 to-pink-500"
      },
      {
         title: "Gaming",
         desc: "Play fun and mindful games that refresh your mind.",
         img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
         color: "#ec4899",
         gradient: "from-pink-500 to-purple-600"
      },
   ];

   return (
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute top-10 xs:top-20 left-4 xs:left-10 w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
         <div className="absolute bottom-10 xs:bottom-20 right-4 xs:right-10 w-36 h-36 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
         <div className="absolute top-1/2 left-1/2 w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping"></div>

         {/* Heading */}
         <div className="text-center mb-8 xs:mb-12 sm:mb-16 relative z-10">
            <div data-aos="fade-up">
               <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white inline-block relative pb-2 xs:pb-3">
                  Explore Your{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     World
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 xs:w-24 sm:w-28 md:w-32 h-0.5 xs:h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></span>
               </h2>
            </div>
            <p
               className="text-slate-300 text-sm xs:text-base sm:text-lg md:text-xl mt-4 xs:mt-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="200"
            >
               Discover study materials, books, music, and games to boost your
               focus, creativity, and relaxation in one{" "}
               <span className="text-cyan-300 font-semibold">calm space</span>.
            </p>
         </div>

         {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 relative z-10">
  {categories.map((cat, index) => {
    // Define animation directions in order
    const directions = ["fade-left", "fade-down", "fade-up", "fade-right"];
    const animation = directions[index % directions.length]; // cycle through

    return (
      <div
        key={index}
        className="group relative"
        data-aos={animation}
        data-aos-delay={index * 150}
        data-aos-duration="800"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 xs:-inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl xs:rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

        {/* Card */}
        <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden border border-slate-700/50 group-hover:border-slate-500/50 transition-all duration-500 group-hover:scale-105">
          {/* Image */}
          <div className="overflow-hidden relative">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-32 xs:h-36 sm:h-40 md:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
            <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4">
              <div
                className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-${cat.gradient
                  .split(" ")[0]
                  .replace("from-", "")} shadow-lg`}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col justify-between h-36 xs:h-40 sm:h-44 md:h-48">
            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {cat.title}
              </h3>
              <p className="text-slate-300 text-xs xs:text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>

            {/* Button */}
            <button
              className={`group relative bg-gradient-to-r ${cat.gradient} text-white font-semibold text-xs xs:text-sm py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg xs:rounded-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mt-2 xs:mt-3 sm:mt-4`}
            >
              <span className="relative z-10 flex items-center justify-center gap-1 xs:gap-2">
                Explore
                <FiArrowRight className="w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>

        {/* Floating Icon */}
        <div
          className={`absolute -top-1 xs:-top-2 -right-1 xs:-right-2 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-${cat.gradient
            .split(" ")[0]
            .replace("from-", "")} rounded-full animate-bounce`}
          style={{ animationDelay: `${index * 0.5}s` }}
        ></div>
      </div>
    );
  })}
</div>
{/* Bottom CTA */}
         <div 
            className="text-center mt-8 xs:mt-12 sm:mt-16"
            data-aos="fade-up"
            data-aos-delay="600"
         >
            <button className="border-2 border-slate-400/30 text-white text-sm xs:text-base px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-xl xs:rounded-2xl hover:bg-white/10 hover:border-slate-200/50 cursor-pointer backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group w-68 xs:w-auto">
               <span className="flex items-center justify-center gap-2 xs:gap-3">
                  View All Categories
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 xs:group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
               </span>
            </button>
         </div>
      </section>
   );
}

export default CategoriesSection;