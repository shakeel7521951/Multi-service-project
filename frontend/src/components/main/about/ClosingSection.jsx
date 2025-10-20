import React, { useEffect } from "react";
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
      <section className="relative overflow-hidden py-20 px-6 sm:px-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white text-center">
         {/* Background orbs */}
         <div className="absolute top-10 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10"></div>
         <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>

         {/* Content */}
         <div className="relative z-20 max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
               Start <span className="text-yellow-300">Exploring</span> Today!
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
               Whether you’re here to study, read, listen, or play — we’re happy
               to have you as part of our growing community of curious and
               creative minds.
            </p>

            <a
               href="/"
               className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-yellow-300 hover:text-blue-900 transition-all transform hover:-translate-y-1 duration-300"
               data-aos="flip-up"
            >
               Go to Home
            </a>
         </div>

         {/* Decorative wave divider at bottom */}
         <svg
            className="absolute bottom-0 left-0 w-full -z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
         >
            <path
               fill="#ffffff"
               fillOpacity="1"
               d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,122.7C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            ></path>
         </svg>
      </section>
   );
}
