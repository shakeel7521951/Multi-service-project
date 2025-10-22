import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurStory() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const timeline = [
      {
         year: "2020",
         title: "Foundation",
         description:
            "StudyHub was founded with a vision to revolutionize online education in Pakistan.",
         icon: "🚀",
      },
      {
         year: "2021",
         title: "First 1000 Students",
         description:
            "Reached our first milestone of 1000 enrolled students across Pakistan.",
         icon: "🎯",
      },
      {
         year: "2022",
         title: "Platform Expansion",
         description:
            "Launched mobile app and expanded course catalog to 200+ courses.",
         icon: "📱",
      },
      {
         year: "2023",
         title: "25,000 Students",
         description:
            "Celebrated 25,000 successful students and 98% satisfaction rate.",
         icon: "🏆",
      },
      {
         year: "2024",
         title: "AI Integration",
         description:
            "Integrated AI-powered learning and personalized study paths.",
         icon: "🤖",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full blur-3xl opacity-30"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-30"></div>

         <div className="relative z-10 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Journey
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  From a small startup to Pakistan's leading online learning
                  platform, our journey has been fueled by passion for education
                  and commitment to student success.
               </p>
            </div>

            {/* Timeline */}
            <div className="relative">
               {/* Timeline Line */}
               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-pink-500"></div>

               {/* Timeline Items */}
               <div className="space-y-12">
                  {timeline.map((item, index) => (
                     <div
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay={index * 200}
                        className={`relative flex items-center ${
                           index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                     >
                        {/* Content */}
                        <div
                           className={`w-1/2 ${
                              index % 2 === 0
                                 ? "pr-8 text-right"
                                 : "pl-8 text-left"
                           }`}
                        >
                           <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                              <div className="text-2xl mb-2">{item.icon}</div>
                              <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                                 {item.year}
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                 {item.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                 {item.description}
                              </p>
                           </div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
