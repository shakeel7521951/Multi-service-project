import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserGraduate, FaBook, FaAward, FaStar } from "react-icons/fa";

export default function AchievementStats() {
   const [counters, setCounters] = useState({
      students: 0,
      courses: 0,
      success: 0,
      rating: 0,
   });

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });

      // Animated counters
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targetValues = {
         students: 25000,
         courses: 500,
         success: 98,
         rating: 4.9,
      };

      let step = 0;
      const timer = setInterval(() => {
         step++;
         const progress = step / steps;

         setCounters({
            students: Math.floor(targetValues.students * progress),
            courses: Math.floor(targetValues.courses * progress),
            success: Math.floor(targetValues.success * progress),
            rating: Math.floor(targetValues.rating * progress * 10) / 10,
         });

         if (step >= steps) {
            clearInterval(timer);
         }
      }, stepDuration);

      return () => clearInterval(timer);
   }, []);

   const achievements = [
      {
         icon: <FaUserGraduate className="text-4xl" />,
         number: counters.students.toLocaleString() + "+",
         label: "Students Enrolled",
         color: "from-blue-500 to-cyan-500",
      },
      {
         icon: <FaBook className="text-4xl" />,
         number: counters.courses + "+",
         label: "Expert Courses",
         color: "from-purple-500 to-pink-500",
      },
      {
         icon: <FaAward className="text-4xl" />,
         number: counters.success + "%",
         label: "Success Rate",
         color: "from-green-500 to-teal-500",
      },
      {
         icon: <FaStar className="text-4xl" />,
         number: counters.rating + "/5",
         label: "Student Rating",
         color: "from-orange-500 to-red-500",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full blur-3xl opacity-30"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-30"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {achievements.map((achievement, index) => (
                  <div
                     key={index}
                     data-aos="zoom-in"
                     data-aos-delay={index * 200}
                     className="group relative bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-white/20 dark:border-gray-700/50 p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                  >
                     {/* Icon */}
                     <div
                        className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500`}
                     >
                        {achievement.icon}
                     </div>

                     {/* Numbers */}
                     <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                        {achievement.number}
                     </div>

                     {/* Label */}
                     <div className="text-gray-600 dark:text-gray-300 font-semibold">
                        {achievement.label}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
