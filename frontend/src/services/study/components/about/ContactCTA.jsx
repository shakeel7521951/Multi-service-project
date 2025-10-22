import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

         <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div data-aos="fade-right">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                     Ready to Start Your{" "}
                     <span className="text-yellow-300">Learning Journey</span>?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                     Join thousands of successful students who have transformed
                     their academic performance with StudyHub. Get in touch with
                     us today!
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center space-x-4 text-white/90">
                        <FaPhone className="text-yellow-400 text-xl" />
                        <span>+92 300 123 4567</span>
                     </div>
                     <div className="flex items-center space-x-4 text-white/90">
                        <FaEnvelope className="text-yellow-400 text-xl" />
                        <span>info@studyhub.com</span>
                     </div>
                     <div className="flex items-center space-x-4 text-white/90">
                        <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                        <span>123 Education Street, Lahore, Pakistan</span>
                     </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link
                        to="/contact"
                        className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 text-center"
                     >
                        Contact Us Now
                     </Link>
                     <Link
                        to="/courses"
                        className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                     >
                        Browse Courses
                     </Link>
                  </div>
               </div>

               {/* Right Content */}
               <div data-aos="fade-left" className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 max-w-md w-full">
                     <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Quick Inquiry
                     </h3>
                     <form className="space-y-4">
                        <input
                           type="text"
                           placeholder="Your Name"
                           className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                        />
                        <input
                           type="email"
                           placeholder="Your Email"
                           className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                        />
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400">
                           <option value="">Select Course Interest</option>
                           <option value="matric">Matriculation</option>
                           <option value="fsc">FSC</option>
                           <option value="ics">ICS</option>
                           <option value="entry-test">Entry Test</option>
                        </select>
                        <button
                           type="submit"
                           className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300"
                        >
                           Send Inquiry
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
