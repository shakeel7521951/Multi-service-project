import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserGraduate, FaBook, FaAward, FaRocket } from "react-icons/fa";

export default function StatsAchievementSection() {
   const [counters, setCounters] = useState({
      students: 0,
      courses: 0,
      success: 0,
      mentors: 0,
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
         mentors: 150,
      };

      let step = 0;
      const timer = setInterval(() => {
         step++;
         const progress = step / steps;

         setCounters({
            students: Math.floor(targetValues.students * progress),
            courses: Math.floor(targetValues.courses * progress),
            success: Math.floor(targetValues.success * progress),
            mentors: Math.floor(targetValues.mentors * progress),
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
         label: "Happy Students",
         color: "from-blue-500 to-cyan-500",
         description: "Join our growing community of learners",
      },
      {
         icon: <FaBook className="text-4xl" />,
         number: counters.courses + "+",
         label: "Expert Courses",
         color: "from-purple-500 to-pink-500",
         description: "Comprehensive curriculum for all levels",
      },
      {
         icon: <FaAward className="text-4xl" />,
         number: counters.success + "%",
         label: "Success Rate",
         color: "from-green-500 to-teal-500",
         description: "Students achieving their goals",
      },
      {
         icon: <FaRocket className="text-4xl" />,
         number: counters.mentors + "+",
         label: "Expert Mentors",
         color: "from-orange-500 to-red-500",
         description: "Industry professionals guiding you",
      },
   ];

   const features = [
      {
         title: "Personalized Learning",
         description:
            "AI-powered recommendations based on your learning style and progress",
         icon: "🎯",
         gradient: "from-indigo-500 to-purple-600",
      },
      {
         title: "Live Interactive Classes",
         description:
            "Real-time doubt solving with expert teachers and peer collaboration",
         icon: "💬",
         gradient: "from-purple-500 to-pink-600",
      },
      {
         title: "Progress Analytics",
         description:
            "Detailed insights and performance tracking with smart recommendations",
         icon: "📊",
         gradient: "from-pink-500 to-rose-600",
      },
      {
         title: "Certificate Programs",
         description:
            "Industry-recognized certifications to boost your career prospects",
         icon: "🏆",
         gradient: "from-blue-500 to-cyan-600",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-10"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20" data-aos="fade-down">
               <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                     StudyHub
                  </span>{" "}
                  Stands Out
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of successful students who have transformed
                  their academic journey with our innovative learning platform
                  and expert guidance
               </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
               {achievements.map((achievement, index) => (
                  <div
                     key={index}
                     data-aos="zoom-in"
                     data-aos-delay={index * 200}
                     className="group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl p-8 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
                  >
                     {/* Animated Gradient Border */}
                     <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg`}
                     ></div>

                     {/* Floating Icon */}
                     <div
                        className={`relative mb-6 w-20 h-20 mx-auto bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                     >
                        <div className="text-white">{achievement.icon}</div>
                     </div>

                     {/* Counter */}
                     <div className="mb-4">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-all duration-500">
                           {achievement.number}
                        </div>
                     </div>

                     {/* Label */}
                     <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {achievement.label}
                     </h3>

                     {/* Description */}
                     <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {achievement.description}
                     </p>

                     {/* Animated Dots */}
                     <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[1, 2, 3].map((dot) => (
                           <div
                              key={dot}
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} animate-bounce`}
                              style={{ animationDelay: `${dot * 0.2}s` }}
                           ></div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  <div data-aos="fade-right">
                     <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                        Experience{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                           Next-Gen
                        </span>{" "}
                        Learning
                     </h3>
                     <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Our platform combines cutting-edge technology with
                        proven educational methodologies to deliver an
                        unparalleled learning experience that adapts to your
                        needs and accelerates your growth.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                           Start Free Trial
                        </button>
                        <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                           Watch Demo
                        </button>
                     </div>
                  </div>
               </div>

               {/* Right Features Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        data-aos="fade-left"
                        data-aos-delay={index * 200}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                     >
                        {/* Gradient Overlay */}
                        <div
                           className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                        ></div>

                        {/* Icon */}
                        <div className="text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                           {feature.icon}
                        </div>

                        {/* Content */}
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
                           {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                           {feature.description}
                        </p>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                           <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center">
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
                     </div>
                  ))}
               </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20" data-aos="fade-up">
               <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12">
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Ready to Transform Your Learning Journey?
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful students and start your
                        path to academic excellence today
                     </p>
                     <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                        Get Started Now - It's Free!
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
