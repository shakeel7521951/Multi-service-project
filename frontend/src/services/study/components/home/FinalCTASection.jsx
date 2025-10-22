import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaCertificate, FaAward, FaHeadset } from "react-icons/fa";

export default function FinalCTASection() {
   return (
      <section className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
         {/* Background Patterns */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div
               className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse"
               style={{ animationDelay: "1s" }}
            ></div>
            <div
               className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse"
               style={{ animationDelay: "2s" }}
            ></div>
         </div>

         <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div data-aos="zoom-in">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Start Your{" "}
                  <span className="text-yellow-300">Success Journey</span>{" "}
                  Today!
               </h2>
               <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join <span className="font-semibold">25,000+</span> students
                  who have already transformed their academic performance with
                  StudyHub. Your dream results are just one click away.
               </p>

               {/* Features Grid */}
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {[
                     {
                        icon: <FaRocket className="text-2xl" />,
                        text: "Fast Learning",
                     },
                     {
                        icon: <FaCertificate className="text-2xl" />,
                        text: "100% Safe",
                     },
                     {
                        icon: <FaAward className="text-2xl" />,
                        text: "Certified",
                     },
                     {
                        icon: <FaHeadset className="text-2xl" />,
                        text: "24/7 Support",
                     },
                  ].map((feature, index) => (
                     <div
                        key={index}
                        className="flex items-center justify-center space-x-3 text-white/90"
                     >
                        <div className="bg-white/20 p-2 rounded-lg">
                           {feature.icon}
                        </div>
                        <span className="font-semibold">{feature.text}</span>
                     </div>
                  ))}
               </div>

               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link
                     to="/courses"
                     className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-3xl text-lg"
                  >
                     🚀 Explore All Courses
                  </Link>
                  <Link
                     to="/free-trial"
                     className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
                  >
                     ✨ Start Free Trial
                  </Link>
               </div>

               {/* Guarantee Badge */}
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-white">
                     <div className="text-3xl">🏆</div>
                     <div className="text-left">
                        <div className="font-bold text-lg">
                           7-Day Money Back Guarantee
                        </div>
                        <div className="text-sm opacity-90">
                           Not satisfied? Get full refund within 7 days
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
