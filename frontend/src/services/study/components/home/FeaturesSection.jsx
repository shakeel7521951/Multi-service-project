import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
   FaBookOpen,
   FaLaptopCode,
   FaUserGraduate,
   FaClock,
} from "react-icons/fa";

export default function FeaturesSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const features = [
      {
         icon: <FaBookOpen className="text-4xl text-indigo-600 mb-4" />,
         title: "Interactive Lessons",
         desc: "Engage with fun and practical lessons designed to make learning easy and effective.",
         aos: "fade-up",
         bgColor: "bg-gradient-to-r from-indigo-500 to-purple-600",
      },
      {
         icon: <FaLaptopCode className="text-4xl text-purple-600 mb-4" />,
         title: "Learn Anywhere",
         desc: "Access all your courses from any device — study anytime, anywhere with full flexibility.",
         aos: "fade-up",
         bgColor: "bg-gradient-to-r from-purple-500 to-pink-600",
      },
      {
         icon: <FaUserGraduate className="text-4xl text-pink-600 mb-4" />,
         title: "Expert Mentors",
         desc: "Learn from top educators and industry experts who guide you every step of the way.",
         aos: "fade-up",
         bgColor: "bg-gradient-to-r from-pink-500 to-red-600",
      },
      {
         icon: <FaClock className="text-4xl text-yellow-500 mb-4" />,
         title: "Progress Tracking",
         desc: "Stay motivated with progress charts and badges as you master new skills.",
         aos: "fade-up",
         bgColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white z-10">
         {/* 👇 Light Gray Top Curve for Visible Separation */}
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg
               className="relative block w-[calc(100%+1.3px)] h-[80px]"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M985.66,92.83C906.67,72,823.78,31.05,743.84,14.25c-82.87-17.26-168.48-16.18-250.45.39C410.53,34.29,329.25,71.75,248.14,91.7,165.16,112.29,82.09,111.92,0,95.16V120H1200V95.8C1117.88,111.6,1039.6,108.46,985.66,92.83Z"
                  className="fill-gray-100"
               ></path>
            </svg>
         </div>

         <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
               Why Choose <span className="text-indigo-600">StudySmart</span>?
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
               Discover the key benefits that make our learning platform the
               perfect choice for students and lifelong learners.
            </p>
         </div>

         {/* ✅ Features Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
               <div
                  key={index}
                  data-aos={feature.aos}
                  className="group relative bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
               >
                  {/* 👇 Animated Background Overlay on HOVER */}
                  <div
                     className={`absolute inset-0 ${feature.bgColor} transition-transform duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100`}
                  />

                  {/* 👇 Content */}
                  <div className="relative z-10">
                     <div className="transition-colors duration-300 group-hover:text-white">
                        {React.cloneElement(feature.icon, {
                           className: `text-4xl mb-4 transition-colors duration-300 group-hover:text-white ${feature.icon.props.className}`,
                        })}
                     </div>

                     <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 text-gray-800 group-hover:text-white">
                        {feature.title}
                     </h3>

                     <p className="transition-colors duration-300 text-gray-600 group-hover:text-white">
                        {feature.desc}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
