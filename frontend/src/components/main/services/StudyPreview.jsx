// src/components/previews/StudyPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function StudyPreview() {
   const samples = [
      { title: "Quick Math Tricks", meta: "10 min read" },
      { title: "React Hooks Cheatsheet", meta: "15 min read" },
      { title: "Pomodoro Study Template", meta: "5 min read" },
   ];

   return (
      <section
         id="preview-study"
         className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white"
      >
         <div className="max-w-6xl mx-auto">
            <div
               className="flex items-center justify-between mb-8"
               data-aos="fade-up"
            >
               <h3 className="text-3xl font-bold text-blue-700">
                  Study Services
               </h3>
               <p className="text-gray-600">
                  Short samples to boost your learning — click to explore full
                  hub.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {samples.map((s, i) => (
                  <article
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
                           to="/study"
                           className="text-sm font-medium text-blue-600 hover:underline"
                        >
                           Read more →
                        </Link>
                     </div>
                  </article>
               ))}
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
               <Link
                  to="/study"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Go to Full Study Hub
               </Link>
            </div>
         </div>
      </section>
   );
}
