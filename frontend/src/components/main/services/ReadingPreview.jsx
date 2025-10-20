// src/components/previews/ReadingPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ReadingPreview() {
   const samples = [
      { title: "Short Story: The Lamp", meta: "Fiction • 8 min" },
      { title: "Essay: Why Reading Matters", meta: "Opinion • 6 min" },
      { title: "Poetry: Morning Light", meta: "Poem • 3 min" },
   ];

   return (
      <section
         id="preview-reading"
         className="py-16 px-6 md:px-20 bg-gradient-to-b from-amber-50 to-white"
      >
         <div className="max-w-6xl mx-auto">
            <div
               className="flex items-center justify-between mb-8"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold text-amber-700">
                  Reading Services
               </h3>
               <p className="text-gray-600">
                  Short reads to inspire — jump to the full reading lounge for
                  everything.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {samples.map((s, i) => (
                  <article
                     key={i}
                     data-aos="fade-up"
                     data-aos-delay={i * 90}
                     className="p-5 bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
                  >
                     <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {s.title}
                     </h4>
                     <p className="text-sm text-gray-500 mb-4">{s.meta}</p>
                     <div className="text-right">
                        <Link
                           to="/reading"
                           className="text-sm font-medium text-amber-600 hover:underline"
                        >
                           Read more →
                        </Link>
                     </div>
                  </article>
               ))}
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
               <Link
                  to="/reading"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Open Reading Lounge
               </Link>
            </div>
         </div>
      </section>
   );
}
