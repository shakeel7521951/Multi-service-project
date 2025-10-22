import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
   FaVideo,
   FaUsers,
   FaMobileAlt,
   FaCertificate,
   FaHeadset,
   FaRocket,
} from "react-icons/fa";

export default function CourseBenefits() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const benefits = [
      {
         icon: <FaVideo className="text-3xl" />,
         title: "High-Quality Video Lectures",
         description:
            "Crystal clear HD video lessons with expert instructors and detailed explanations",
         color: "from-blue-500 to-cyan-500",
      },
      {
         icon: <FaUsers className="text-3xl" />,
         title: "Expert Instructors",
         description:
            "Learn from experienced educators and industry professionals with proven track records",
         color: "from-purple-500 to-pink-500",
      },
      {
         icon: <FaMobileAlt className="text-3xl" />,
         title: "Learn Anywhere, Anytime",
         description:
            "Access courses on mobile, tablet, or desktop with lifetime access to all materials",
         color: "from-green-500 to-teal-500",
      },
      {
         icon: <FaCertificate className="text-3xl" />,
         title: "Industry-Recognized Certificates",
         description:
            "Get certified upon completion to boost your academic and career prospects",
         color: "from-orange-500 to-red-500",
      },
      {
         icon: <FaHeadset className="text-3xl" />,
         title: "24/7 Doubt Support",
         description:
            "Get your questions answered quickly with round-the-clock support from mentors",
         color: "from-indigo-500 to-purple-500",
      },
      {
         icon: <FaRocket className="text-3xl" />,
         title: "Interactive Learning",
         description:
            "Engage with quizzes, assignments, and interactive content for better retention",
         color: "from-pink-500 to-rose-500",
      },
   ];

   const stats = [
      { number: "98%", label: "Completion Rate" },
      { number: "4.9/5", label: "Student Satisfaction" },
      { number: "50K+", label: "Video Lessons" },
      { number: "10K+", label: "Practice Questions" },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Why Learn with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     StudyHub
                  </span>
                  ?
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Discover the unique advantages that make StudyHub the
                  preferred choice for thousands of students across Pakistan
               </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {benefits.map((benefit, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Icon */}
                     <div
                        className={`w-16 h-16 mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                     >
                        {benefit.icon}
                     </div>

                     {/* Content */}
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300">
                        {benefit.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                     </p>

                     {/* Hover Gradient */}
                     <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                     ></div>
                  </div>
               ))}
            </div>

            {/* Stats Section */}
            <div
               className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-center"
               data-aos="fade-up"
            >
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Join Thousands of Successful Students
               </h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                     <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                           {stat.number}
                        </div>
                        <div className="text-white/80">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Additional Features */}
            <div className="mt-16" data-aos="fade-up">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                        Comprehensive Learning Experience
                     </h3>
                     <div className="space-y-4">
                        {[
                           "Structured curriculum aligned with Pakistani educational boards",
                           "Regular assessments and progress tracking",
                           "Personalized learning recommendations",
                           "Community forums for peer learning",
                           "Career guidance and counseling",
                           "Scholarship opportunities for top performers",
                        ].map((feature, index) => (
                           <div
                              key={index}
                              className="flex items-center space-x-3"
                           >
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                 <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={3}
                                       d="M5 13l4 4L19 7"
                                    />
                                 </svg>
                              </div>
                              <span className="text-gray-700 dark:text-gray-300">
                                 {feature}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Right Content */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                     <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Start Your Learning Journey Today
                     </h4>
                     <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Join our community of learners and take the first step
                        towards academic excellence
                     </p>
                     <div className="space-y-4">
                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                           Enroll in Free Trial
                        </button>
                        <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                           Schedule Demo Class
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
