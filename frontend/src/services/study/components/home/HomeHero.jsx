import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   return (
      <section className="relative w-full h-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 overflow-hidden">
         {/* ✅ Left Text Section */}
         <div
            data-aos="fade-right"
            className="flex flex-col items-start text-center md:text-left mt-10 md:mt-0 max-w-xl"
         >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
               Unlock Your <span className="text-yellow-300">Potential</span>{" "}
               with
               <br />
               <span className="text-yellow-200">Smart Learning</span>
            </h1>

            <p className="text-lg text-white/90 mt-4">
               Learn anything, anytime, anywhere. Interactive lessons, video
               tutorials, and quizzes designed to make learning fun and
               effective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
               <Link
                  to="/courses"
                  className="bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
               >
                  Start Learning
               </Link>

               <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300"
               >
                  Learn More
               </Link>
            </div>
         </div>

         {/* ✅ Right Image Section */}
         <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex justify-center"
         >
            <img
               src="/imgs/study3.jpg"
               alt="Study Illustration"
               className="w-80 md:w-[480px] drop-shadow-2xl rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
         </div>
      </section>
   );
}
