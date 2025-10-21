import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClosingSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   return (
      <section className="relative overflow-hidden py-20 px-6 sm:px-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-center">
         {/* Background orbs - Changed positions */}
         <div className="absolute top-20 right-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
         <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
         <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-pink-400/15 rounded-full blur-3xl -z-10"></div>

         {/* Floating Elements */}
         <div className="absolute md:top-32 md:left-32 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
         <div className="absolute bottom-42 right-5 md:bottom-40 md:right-40 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce md:animate-pulse"></div>
         <div className="hidden md:flex absolute top-1/2 right-32 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping"></div>

         {/* Content */}
         <div className="relative z-20 max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
               Start <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Exploring</span> Today!
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
               Whether you're here to study, read, listen, or play — we're happy
               to have you as part of our growing community of curious and
               creative minds.
            </p>

            <a
               href="/"
               className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative overflow-hidden group"
               data-aos="flip-up"
            >
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
               <FaHome className="text-lg relative z-10" />
               <span className="relative z-10">Go to Home</span>
            </a>
         </div>

         {/* Gradient divider at bottom */}
         <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-purple-500 -z-10"></div>
      </section>
   );
}