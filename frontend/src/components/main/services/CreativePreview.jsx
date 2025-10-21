import React from "react";
import { Link } from "react-router-dom";

export default function CreativePreview() {
   const samples = [
      { title: "Design Prompt Pack", meta: "Daily prompts" },
      { title: "Project Templates", meta: "Starter kits" },
      { title: "Showcase & Collab", meta: "Share work" },
   ];

   return (
      <section
         id="preview-creative"
         className="py-16 px-6 md:px-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      >
         {/* Background decorative elements */}
         <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
         <div className="absolute top-1/2 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div
               className="flex flex-col md:flex-row items-center justify-between mb-12"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
                  Creative Services
               </h3>
               <p className="text-slate-300 text-center md:text-right max-w-md">
                  Inspire, design and collaborate — full studio awaits.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {samples.map((s, i) => (
                  <div
                     key={i}
                     data-aos="zoom-in"
                     data-aos-delay={i * 80}
                     className="p-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:border-slate-500/50"
                  >
                     <h4 className="text-lg font-semibold text-white mb-2">
                        {s.title}
                     </h4>
                     <p className="text-sm text-slate-400 mb-4">{s.meta}</p>
                     <div className="text-right">
                        <Link
                           to="/creative"
                           className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
                        >
                           Explore →
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
               <Link
                  to="/creative"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
               >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">Open Creative Studio</span>
               </Link>
            </div>
         </div>
      </section>
   );
}