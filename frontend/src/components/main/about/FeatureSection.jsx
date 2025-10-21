import React, { useEffect } from "react";
import { FaGraduationCap, FaBook, FaMusic, FaGamepad } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturesSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   const features = [
      {
         title: "Study Section",
         icon: <FaGraduationCap className="text-2xl" />,
         desc: "Access notes, tutorials, and learning resources to boost your knowledge and performance.",
      },
      {
         title: "Reading Section",
         icon: <FaBook className="text-2xl" />,
         desc: "Explore engaging stories and thought-provoking articles that spark creativity.",
      },
      {
         title: "Music Section",
         icon: <FaMusic className="text-2xl" />,
         desc: "Relax or focus with our curated playlists to match your mood and boost productivity.",
      },
      {
         title: "Gaming Section",
         icon: <FaGamepad className="text-2xl" />,
         desc: "Take a break, play interactive games, and refresh your mind with fun challenges.",
      },
   ];

   return (
      <section
         id="features"
         className="scroll-mt-24 relative py-20 px-6 sm:px-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      >
         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10"></div>
         <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-400/15 blur-3xl rounded-full -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute md:top-20 md:right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
         <div className="absolute top-1/2 right-40 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         {/* Section Header */}
         <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
               What You'll Find Here
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto">
               Each section is carefully designed to help you learn, relax, and
               enjoy — all in one digital space.
            </p>
         </div>

         {/* Feature Cards */}
         <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            data-aos="zoom-in-up"
         >
            {features.map((item, i) => (
               <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="group relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] p-6 text-center hover:border-slate-500/50"
               >
                  {/* Icon Container */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-5 mx-auto transition-transform group-hover:scale-110">
                     {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                     {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
               </div>
            ))}
         </div>
      </section>
   );
}