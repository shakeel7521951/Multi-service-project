import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function LearningPath() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const learningPaths = [
      {
         title: "Medical Career Path",
         description: "Complete journey to become a doctor",
         duration: "36 Months",
         courses: 45,
         steps: [
            "Matric Science (Biology Group)",
            "FSC Pre-Medical",
            "Medical Entry Test Preparation",
            "MBBS/BDS Professional"
         ],
         color: "from-green-500 to-teal-500",
         icon: "🏥"
      },
      {
         title: "Engineering Career Path",
         description: "Pathway to become an engineer",
         duration: "36 Months",
         courses: 52,
         steps: [
            "Matric Science (Computer Group)",
            "FSC Pre-Engineering", 
            "Engineering Entry Test Preparation",
            "B.E/B.Sc Engineering"
         ],
         color: "from-blue-500 to-cyan-500",
         icon: "🔧"
      },
      {
         title: "Computer Science Path",
         description: "Become a software developer",
         duration: "30 Months", 
         courses: 38,
         steps: [
            "Matric Science",
            "ICS Computer Science",
            "Programming Fundamentals",
            "BS Computer Science"
         ],
         color: "from-purple-500 to-pink-500",
         icon: "💻"
      },
      {
         title: "Commerce & Business",
         description: "Path to business and finance",
         duration: "30 Months",
         courses: 35,
         steps: [
            "Matric Arts/Science",
            "I.Com Commerce",
            "Business Fundamentals", 
            "B.Com/BS Business"
         ],
         color: "from-orange-500 to-red-500",
         icon: "📊"
      }
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Recommended <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Learning Paths</span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Follow structured learning paths designed by experts to achieve your career goals efficiently
               </p>
            </div>

            {/* Learning Paths Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {learningPaths.map((path, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Header */}
                     <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                           <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center text-2xl text-white`}>
                              {path.icon}
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                 {path.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                 {path.description}
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Stats */}
                     <div className="flex items-center space-x-6 mb-6">
                        <div className="text-center">
                           <div className="text-lg font-bold text-gray-800 dark:text-white">{path.courses}</div>
                           <div className="text-sm text-gray-600 dark:text-gray-400">Courses</div>
                        </div>
                        <div className="text-center">
                           <div className="text-lg font-bold text-gray-800 dark:text-white">{path.duration}</div>
                           <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                        </div>
                     </div>

                     {/* Steps */}
                     <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Learning Steps:</h4>
                        <div className="space-y-3">
                           {path.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-center space-x-3">
                                 <div className={`w-6 h-6 bg-gradient-to-r ${path.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                    {stepIndex + 1}
                                 </div>
                                 <span className="text-gray-700 dark:text-gray-300">{step}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* CTA Button */}
                     <Link
                        to="/learning-path"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg text-center hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 block"
                     >
                        Start This Path
                     </Link>

                     {/* Hover Gradient */}
                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${path.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                  </div>
               ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12" data-aos="fade-up">
               <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                     Not Sure Which Path to Choose?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                     Take our career assessment test to discover the perfect learning path for your interests and goals
                  </p>
                  <Link
                     to="/career-assessment"
                     className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 inline-block"
                  >
                     Take Career Assessment
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}