// src/components/previews/GamingPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function GamingPreview() {
   const samples = [
      { title: "Focus Puzzle", meta: "Brain training" },
      { title: "Relax Runner", meta: "Casual" },
      { title: "Memory Match", meta: "Short & fun" },
   ];

   return (
      <section
         id="preview-gaming"
         className="py-16 px-6 md:px-20 bg-gradient-to-b from-violet-50 to-white"
      >
         <div className="max-w-6xl mx-auto">
            <div
               className="flex items-center justify-between mb-8"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold text-violet-700">
                  Gaming Services
               </h3>
               <p className="text-gray-600">
                  Play short games that refresh the mind — open full gaming zone
                  for more.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {samples.map((s, i) => (
                  <div
                     key={i}
                     data-aos="fade-up"
                     data-aos-delay={i * 80}
                     className="p-5 bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
                  >
                     <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {s.title}
                     </h4>
                     <p className="text-sm text-gray-500 mb-4">{s.meta}</p>
                     <div className="text-right">
                        <Link
                           to="/gaming"
                           className="text-sm font-medium text-violet-600 hover:underline"
                        >
                           Play →
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
               <Link
                  to="/gaming"
                  className="inline-block bg-violet-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Open Gaming Zone
               </Link>
            </div>
         </div>
      </section>
   );
}
