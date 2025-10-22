import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function AboutHero() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   return (
      <section className="relative w-full py-20 md:py-32 px-6 md:px-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div
               className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse"
               style={{ animationDelay: "1s" }}
            ></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div data-aos="fade-right">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                     About <span className="text-yellow-300">StudyHub</span>
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                     We are Pakistan's premier online learning platform,
                     dedicated to transforming education through innovative
                     technology and expert guidance. Since 2020, we've been
                     empowering students to achieve academic excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link
                        to="/courses"
                        className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 text-center"
                     >
                        Explore Courses
                     </Link>
                     <Link
                        to="/contact"
                        className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center"
                     >
                        Contact Us
                     </Link>
                  </div>
               </div>

               {/* Right Content */}
               <div data-aos="fade-left" className="flex justify-center">
                  <div className="relative">
                     <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                           <div className="text-6xl mb-4">🎓</div>
                           <div className="text-2xl font-bold">25,000+</div>
                           <div className="text-lg">Successful Students</div>
                        </div>
                     </div>
                     {/* Floating Elements */}
                     <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center transform rotate-12">
                        <span className="text-gray-900 font-bold">98%</span>
                     </div>
                     <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center transform -rotate-12">
                        <span className="text-white font-bold">500+</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
