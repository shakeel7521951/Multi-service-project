import React, { useEffect } from "react";
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
         icon: "🎓",
         color: "from-blue-500/10 to-blue-100",
         textColor: "text-blue-700",
         borderColor: "border-blue-400",
         desc: "Access notes, tutorials, and learning resources to boost your knowledge and performance.",
      },
      {
         title: "Reading Section",
         icon: "📚",
         color: "from-pink-500/10 to-pink-100",
         textColor: "text-pink-700",
         borderColor: "border-pink-400",
         desc: "Explore engaging stories and thought-provoking articles that spark creativity.",
      },
      {
         title: "Music Section",
         icon: "🎵",
         color: "from-green-500/10 to-green-100",
         textColor: "text-green-700",
         borderColor: "border-green-400",
         desc: "Relax or focus with our curated playlists to match your mood and boost productivity.",
      },
      {
         title: "Gaming Section",
         icon: "🎮",
         color: "from-yellow-500/10 to-yellow-100",
         textColor: "text-yellow-700",
         borderColor: "border-yellow-400",
         desc: "Take a break, play interactive games, and refresh your mind with fun challenges.",
      },
   ];

   return (
      <section className="relative py-20 px-6 sm:px-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
         {/* Soft background decoration */}
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]"></div>

         {/* Section Header */}
         <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
               What You’ll Find Here
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
               Each section is carefully designed to help you learn, relax, and
               enjoy — all in one digital space.
            </p>
         </div>

         {/* Feature Cards */}
         <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            data-aos="zoom-in-up"
         >
            {features.map((item, i) => (
               <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className={`group relative bg-gradient-to-br ${item.color} rounded-3xl border ${item.borderColor} shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-[1.03] p-8 text-center backdrop-blur-md`}
               >
                  {/* Icon */}
                  <div className="text-5xl mb-5 transition-transform group-hover:scale-125">
                     {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                     className={`text-2xl font-semibold mb-3 ${item.textColor}`}
                  >
                     {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-3xl"></div>
               </div>
            ))}
         </div>
      </section>
   );
}
