import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ValuesSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const values = [
      {
         icon: "🎯",
         title: "Excellence",
         description:
            "We strive for the highest standards in education and student outcomes.",
         color: "from-indigo-500 to-purple-500",
      },
      {
         icon: "🤝",
         title: "Integrity",
         description:
            "Honest, transparent, and ethical in all our interactions.",
         color: "from-green-500 to-teal-500",
      },
      {
         icon: "💡",
         title: "Innovation",
         description:
            "Continuously improving and adapting to new technologies.",
         color: "from-blue-500 to-cyan-500",
      },
      {
         icon: "❤️",
         title: "Student First",
         description:
            "Every decision is made with our students' success in mind.",
         color: "from-pink-500 to-rose-500",
      },
      {
         icon: "🌍",
         title: "Accessibility",
         description: "Making quality education accessible to all students.",
         color: "from-orange-500 to-red-500",
      },
      {
         icon: "🚀",
         title: "Growth",
         description: "Helping students grow academically and personally.",
         color: "from-purple-500 to-pink-500",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Values
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and represent what we
                  stand for as an organization.
               </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {values.map((value, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Icon */}
                     <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {value.icon}
                     </div>

                     {/* Content */}
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        {value.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                     </p>

                     {/* Hover Gradient */}
                     <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                     ></div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
