import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
   useEffect(() => {
      AOS.init({
         duration: 1200,
         once: false,
         easing: 'ease-out-cubic',
         mirror: true
      });

      document.body.style.overflowX = "hidden";

      return () => {
         document.body.style.overflowX = "auto";
      };
   }, []);

   return (
      <>
         <section
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 md:px-20 relative overflow-hidden"
            style={{
               clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
            }}
         >
            {/* Animatedes Backgroundes Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto relative z-10">
               {/* Left Content */}
               <div className="space-y-8">
                  <div data-aos="fade-right" data-aos-delay="200">
                     <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight mb-6">
                        Learn,{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                           Focus
                        </span>
                        ,{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                           Relax
                        </span>{" "}
                        & Enjoy
                     </h1>

                     <p className="text-gray-300 text-xl leading-relaxed mb-8">
                        Explore study materials, read books, listen to calming
                        music, download PDFs, and play mind-refreshing games — 
                         <span className="text-cyan-300 font-semibold">calm space</span>.
                     </p>
                  </div>

                  <div 
                     className="flex flex-col sm:flex-row gap-4"
                     data-aos="fade-up" 
                     data-aos-delay="400"
                  >
                     <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-blue-700 cursor-pointer transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                     </button>
                     
                     <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/50 cursor-pointer backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group">
                        <span className="flex items-center justify-center gap-2">
                           Explore All
                           <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                           </svg>
                        </span>
                     </button>
                  </div>

                  {/* Stats */}
                  <div 
                     className="hidden md:grid grid-cols-3 gap-6 pt-8"
                     data-aos="fade-up"
                     data-aos-delay="600"
                  >
                     <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">50K+</div>
                        <div className="text-gray-400 text-sm">Active Users</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">10K+</div>
                        <div className="text-gray-400 text-sm">Resources</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold text-pink-400">99%</div>
                        <div className="text-gray-400 text-sm">Satisfaction</div>
                     </div>
                  </div>
               </div>

               {/* Right Illustration - Enhanced Grid */}
               <div className="relative">
                  <div 
                     className="grid grid-cols-2 gap-6 relative z-10"
                     data-aos="zoom-in"
                     data-aos-delay="300"
                  >
                     {/* Floating Cards with Staggered Animation */}
                     {[
                        {
                           src: "https://images.unsplash.com/photo-1664188613064-7eea761238f0?auto=format&fit=crop&q=80&w=500",
                           alt: "Reading",
                           delay: 0
                        },
                        {
                           src: "https://images.unsplash.com/photo-1647288020413-dc15f04ce1a2?auto=format&fit=crop&q=80&w=500",
                           alt: "Study",
                           delay: 100
                        },
                        {
                           src: "https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&q=80&w=500",
                           alt: "Music",
                           delay: 200
                        },
                        {
                           src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=500",
                           alt: "Gaming",
                           delay: 300
                        }
                     ].map((image, index) => (
                        <div
                           key={index}
                           data-aos="fade-up"
                           data-aos-delay={400 + index * 100}
                           className="relative group"
                        >
                           <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                           <img
                              src={image.src}
                              alt={image.alt}
                              className="relative object-cover rounded-2xl w-full h-48 md:h-64 shadow-2xl group-hover:scale-105 transition-all duration-500 group-hover:rotate-1"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     ))}
                  </div>

                  {/* Floating Elements */}
                  <div 
                     className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"
                     data-aos="fade-down"
                     data-aos-delay="800"
                  ></div>
                  <div 
                     className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"
                     data-aos="fade-up"
                     data-aos-delay="900"
                  ></div>
               </div>
            </div>

         </section>
      </>
   );
}

export default Hero;