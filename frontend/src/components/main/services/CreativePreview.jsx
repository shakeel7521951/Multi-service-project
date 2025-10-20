// src/components/previews/CreativePreview.jsx
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
         className="py-16 px-6 md:px-20 bg-gradient-to-b from-pink-50 to-white"
      >
         <div className="max-w-6xl mx-auto">
            <div
               className="flex items-center justify-between mb-8"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold text-pink-700">
                  Creative Services
               </h3>
               <p className="text-gray-600">
                  Inspire, design and collaborate — full studio awaits.
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
                     <p className="text-sm text-gray-500 mb-4">{s.meta}</p>
                     <div className="text-right">
                        <Link
                           to="/creative"
                           className="text-sm font-medium text-pink-600 hover:underline"
                        >
                           Explore →
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
               <Link
                  to="/creative"
                  className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Open Creative Studio
               </Link>
            </div>
         </div>
      </section>
   );
}
