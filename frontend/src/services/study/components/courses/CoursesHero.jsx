import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function CoursesHero() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   return (
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div
               className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse"
               style={{ animationDelay: "1s" }}
            ></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div data-aos="fade-down">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Explore Our <span className="text-yellow-300">Courses</span>
               </h1>
               <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover comprehensive courses for Matric, Intermediate, and
                  competitive exams. Learn from expert educators and transform
                  your academic journey.
               </p>

               {/* Quick Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
                  {[
                     { number: "500+", label: "Courses" },
                     { number: "25K+", label: "Students" },
                     { number: "98%", label: "Success Rate" },
                     { number: "150+", label: "Mentors" },
                  ].map((stat, index) => (
                     <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white">
                           {stat.number}
                        </div>
                        <div className="text-white/80 text-sm">
                           {stat.label}
                        </div>
                     </div>
                  ))}
               </div>

               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                     to="/free-trial"
                     className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                     Start Free Trial
                  </Link>
                  <a
                     href="#courses-grid"
                     className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
                     Browse All Courses
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
