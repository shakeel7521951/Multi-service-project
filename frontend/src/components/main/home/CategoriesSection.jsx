import React, { useEffect } from "react";
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
         color: "#3b82f6", // blue-500
         gradient: "from-cyan-500 to-blue-600"
      },
      {
         title: "Reading",
         desc: "Dive into engaging articles, stories, and insightful reads.",
         img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600",
         color: "#22d3ee", // cyan-400
         gradient: "from-cyan-400 to-blue-500"
      },
      {
         title: "Music",
         desc: "Listen to relaxing tunes to stay calm and improve focus.",
         img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
         color: "#a855f7", // purple-400
         gradient: "from-purple-400 to-pink-500"
      },
      {
         title: "Gaming",
         desc: "Play fun and mindful games that refresh your mind.",
         img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
         color: "#ec4899", // pink-500
         gradient: "from-pink-500 to-purple-600"
      },
   ];

   return (
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 md:px-20 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute top-20 left-20 w-52 h-52 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
         <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
         <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping"></div>

         {/* Heading */}
         <div className="text-center mb-16 relative z-10">
            <div data-aos="fade-up">
               <h2 className="text-4xl md:text-6xl font-bold text-white inline-block relative pb-3">
                  Explore Your{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     World
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></span>
               </h2>
            </div>
            <p
               className="text-slate-300 text-xl mt-6 max-w-3xl mx-auto leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="200"
            >
               Discover study materials, books, music, and games to boost your
               focus, creativity, and relaxation in one{" "}
               <span className="text-cyan-300 font-semibold">calm space</span>.
            </p>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {categories.map((cat, index) => (
               <div
                  key={index}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
               >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 group-hover:border-slate-500/50 transition-all duration-500 group-hover:scale-105">
                     {/* Image */}
                     <div className="overflow-hidden relative">
                        <img
                           src={cat.img}
                           alt={cat.title}
                           className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                        <div className="absolute top-4 right-4">
                           <div className={`w-3 h-3 rounded-full bg-${cat.gradient.split(' ')[0].replace('from-', '')} shadow-lg`}></div>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 flex flex-col justify-between h-48">
                        <div>
                           <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                              {cat.title}
                           </h3>
                           <p className="text-slate-300 text-sm leading-relaxed">
                              {cat.desc}
                           </p>
                        </div>

                        {/* Button */}
                        <button
                           className={`group relative bg-gradient-to-r ${cat.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mt-4`}
                        >
                           <span className="relative z-10 flex items-center justify-center gap-2">
                              Explore
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={2}
                                 stroke="currentColor"
                                 className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                 />
                              </svg>
                           </span>
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                     </div>
                  </div>

                  {/* Floating Icon */}
                  <div 
                     className={`absolute -top-2 -right-2 w-6 h-6 bg-${cat.gradient.split(' ')[0].replace('from-', '')} rounded-full animate-bounce`}
                     style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
               </div>
            ))}
         </div>

         {/* Bottom CTA */}
         <div 
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-delay="600"
         >
            <button className="border-2 border-slate-400/30 text-white px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-slate-200/50 cursor-pointer backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group">
               <span className="flex items-center justify-center gap-3 text-lg">
                  View All Categories
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
               </span>
            </button>
         </div>
      </section>
   );
}

export default CategoriesSection;