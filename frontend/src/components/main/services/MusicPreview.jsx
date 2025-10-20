// src/components/previews/MusicPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MusicPreview() {
   const samples = [
      { title: "Lo-fi Focus Mix", length: "30 min" },
      { title: "Uplift Beats", length: "45 min" },
      { title: "Study Ambient", length: "2 hrs" },
   ];

   return (
      <section
         id="preview-music"
         className="py-16 px-6 md:px-20 bg-gradient-to-b from-green-50 to-white"
      >
         <div className="max-w-6xl mx-auto">
            <div
               className="flex items-center justify-between mb-8"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold text-emerald-700">
                  Music Services
               </h3>
               <p className="text-gray-600">
                  Curated playlists & tools to create and listen.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {samples.map((s, i) => (
                  <div
                     key={i}
                     data-aos="zoom-in"
                     data-aos-delay={i * 80}
                     className="p-5 bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
                  >
                     <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {s.title}
                     </h4>
                     <p className="text-sm text-gray-500 mb-4">{s.length}</p>
                     <div className="text-right">
                        <Link
                           to="/music"
                           className="text-sm font-medium text-green-600 hover:underline"
                        >
                           Listen / Create →
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
               <Link
                  to="/music"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Open Music Studio
               </Link>
            </div>
         </div>
      </section>
   );
}
