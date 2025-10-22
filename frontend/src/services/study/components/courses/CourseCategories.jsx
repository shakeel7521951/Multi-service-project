import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function CourseCategories() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const categories = [
      {
         icon: "🔬",
         title: "Matriculation",
         courses: "45 Courses",
         description: "Complete preparation for Grade 9-10 Science and Arts",
         color: "from-blue-500 to-cyan-500",
         link: "/courses/matric",
      },
      {
         icon: "🎓",
         title: "FSC Pre-Medical",
         courses: "32 Courses",
         description: "Biology, Chemistry, Physics for medical colleges",
         color: "from-green-500 to-teal-500",
         link: "/courses/fsc-medical",
      },
      {
         icon: "⚡",
         title: "FSC Pre-Engineering",
         courses: "38 Courses",
         description: "Mathematics, Physics, Chemistry for engineering",
         color: "from-orange-500 to-red-500",
         link: "/courses/fsc-engineering",
      },
      {
         icon: "💻",
         title: "ICS Computer Science",
         courses: "28 Courses",
         description: "Computer science and programming courses",
         color: "from-indigo-500 to-purple-500",
         link: "/courses/ics",
      },
      {
         icon: "📊",
         title: "I.Com Commerce",
         courses: "25 Courses",
         description: "Accounting, business, and commerce subjects",
         color: "from-yellow-500 to-orange-500",
         link: "/courses/icom",
      },
      {
         icon: "🎨",
         title: "FA Arts & Humanities",
         courses: "22 Courses",
         description: "Arts, humanities, and social sciences",
         color: "from-pink-500 to-rose-500",
         link: "/courses/fa",
      },
      {
         icon: "🏥",
         title: "Medical Entry Tests",
         courses: "18 Courses",
         description: "Preparation for MBBS, BDS entrance exams",
         color: "from-red-500 to-pink-500",
         link: "/courses/medical-entry",
      },
      {
         icon: "🔧",
         title: "Engineering Entry Tests",
         courses: "20 Courses",
         description: "ECAT, NUST, FAST test preparation",
         color: "from-purple-500 to-blue-500",
         link: "/courses/engineering-entry",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Course{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Categories
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Browse through our comprehensive course categories designed
                  for every academic level and career path
               </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {categories.map((category, index) => (
                  <Link
                     key={index}
                     to={category.link}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  >
                     {/* Category Icon */}
                     <div
                        className={`w-16 h-16 mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                     >
                        {category.icon}
                     </div>

                     {/* Category Content */}
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300">
                        {category.title}
                     </h3>
                     <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-3">
                        {category.courses}
                     </p>
                     <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {category.description}
                     </p>

                     {/* Hover Arrow */}
                     <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                           <svg
                              className="w-4 h-4 text-gray-600 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M9 5l7 7-7 7"
                              />
                           </svg>
                        </div>
                     </div>

                     {/* Hover Gradient Border */}
                     <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`}
                     ></div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
