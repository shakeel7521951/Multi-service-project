import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaRocket } from "react-icons/fa";

export default function MissionVision() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const cards = [
      {
         icon: <FaBullseye className="text-4xl" />,
         title: "Our Mission",
         description:
            "To make quality education accessible to every student in Pakistan through innovative technology and personalized learning experiences.",
         color: "from-blue-500 to-cyan-500",
      },
      {
         icon: <FaEye className="text-4xl" />,
         title: "Our Vision",
         description:
            "To become Pakistan's most trusted online learning platform, empowering millions of students to achieve their academic and career goals.",
         color: "from-purple-500 to-pink-500",
      },
      {
         icon: <FaRocket className="text-4xl" />,
         title: "Our Approach",
         description:
            "Combining expert instruction with cutting-edge technology to create engaging, effective, and affordable learning solutions.",
         color: "from-orange-500 to-red-500",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {cards.map((card, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 200}
                     className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Gradient Border on Hover */}
                     <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`}
                     ></div>

                     {/* Icon */}
                     <div
                        className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                     >
                        {card.icon}
                     </div>

                     {/* Content */}
                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-white transition-colors duration-300">
                        {card.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {card.description}
                     </p>
                  </div>
               ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center" data-aos="fade-up">
               <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                     Why Choose StudyHub?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { number: "25K+", label: "Students Enrolled" },
                        { number: "98%", label: "Success Rate" },
                        { number: "500+", label: "Expert Courses" },
                        { number: "24/7", label: "Support" },
                     ].map((item, index) => (
                        <div key={index} className="text-center">
                           <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                              {item.number}
                           </div>
                           <div className="text-gray-600 dark:text-gray-300 mt-2">
                              {item.label}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
