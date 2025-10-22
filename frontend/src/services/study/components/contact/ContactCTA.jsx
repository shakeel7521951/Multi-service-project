import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div
               className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse"
               style={{ animationDelay: "1s" }}
            ></div>
         </div>

         <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div data-aos="zoom-in">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Still Have <span className="text-yellow-300">Questions</span>?
               </h2>
               <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Don't hesitate to reach out to us. Our friendly support team
                  is always ready to help you with any questions about courses,
                  enrollment, or platform features.
               </p>

               {/* Quick Contact Options */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  {[
                     {
                        icon: <FaPhone className="text-2xl" />,
                        title: "Call Us",
                        detail: "+92 300 123 4567",
                        action: "tel:+923001234567",
                        color: "from-blue-500 to-cyan-500",
                     },
                     {
                        icon: <FaWhatsapp className="text-2xl" />,
                        title: "WhatsApp",
                        detail: "+92 300 123 4567",
                        action: "https://wa.me/923229549450",
                        color: "from-green-500 to-teal-500",
                     },
                     {
                        icon: <FaEnvelope className="text-2xl" />,
                        title: "Email Us",
                        detail: "info@studyhub.com",
                        action: "mailto:info@studyhub.com",
                        color: "from-purple-500 to-pink-500",
                     },
                  ].map((option, index) => (
                     <a
                        key={index}
                        href={option.action}
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 transform transition-all duration-500 hover:scale-105 hover:bg-white/20"
                     >
                        <div
                           className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500`}
                        >
                           {option.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                           {option.title}
                        </h3>
                        <p className="text-white/80">{option.detail}</p>
                     </a>
                  ))}
               </div>

               {/* Final CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                     href="#contact-form"
                     className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                     Send Another Message
                  </a>
                  <Link
                     to="/courses"
                     className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                     Browse Courses
                  </Link>
               </div>

               {/* Guarantee */}
               <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-white">
                     <div className="text-3xl">⚡</div>
                     <div className="text-left">
                        <div className="font-bold text-lg">
                           2-Hour Response Guarantee
                        </div>
                        <div className="text-sm opacity-90">
                           We promise to respond to your inquiry within 2 hours
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
