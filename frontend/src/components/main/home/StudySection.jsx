import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StudySection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 100,
         once: false,
      });
   }, []);

   return (
      <section className="py-20 px-6 md:px-20 overflow-hidden">
         {/* Heading Section */}
         <div className="text-center mb-26" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-[#0F172A] inline-block relative pb-3">
               Study Smarter, Not Harder
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-full"></span>
            </h2>
            <p className="text-justify md:text-left text-[#475569] mt-5 max-w-2xl mx-auto leading-relaxed">
               Improve your learning efficiency with practical tools, tips, and
               techniques designed to keep you focused and organized during your
               study sessions.
            </p>
         </div>

         {/* Two Column Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
               <h3 className="text-center md:text-left text-2xl border-l-4 pl-4 border-[#2563EB] font-semibold text-[#2563EB] mb-6">
                  Everything You Need to Excel in Your Studies
               </h3>
               <p className="text-justify md:text-left text-[#475569] mb-8 leading-relaxed">
                  Unlock study materials, structured notes, and focus techniques
                  that make your learning experience smoother and more
                  productive. From time management to smart note-taking — we’ve
                  got you covered.
               </p>

               <div className="space-y-10 relative">
                  {/* Smart Study Guides */}
                  <div
                     data-aos="fade-up"
                     className="relative bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                     {/* Floating SVG Icon */}
                     <div className="absolute -top-6 -left-6 bg-[#2563EB] p-3 rounded-xl shadow-lg">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={2}
                           stroke="white"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                           />
                        </svg>
                     </div>

                     <h4 className="font-semibold text-[#0F172A] text-lg mb-1">
                        Smart Study Guides
                     </h4>
                     <p className="text-[#475569] text-sm">
                        Access concise, easy-to-follow guides to simplify
                        complex topics.
                     </p>
                  </div>

                  {/* Time Management */}
                  <div
                     data-aos="fade-up"
                     data-aos-delay="150"
                     className="relative bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                     {/* Floating SVG Icon */}
                     <div className="absolute -top-6 -left-6 bg-[#2563EB] p-3 rounded-xl shadow-lg">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={2}
                           stroke="white"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                        </svg>
                     </div>

                     <h4 className="font-semibold text-[#0F172A] text-lg mb-1">
                        Time Management
                     </h4>
                     <p className="text-[#475569] text-sm">
                        Learn how to plan your study hours and stay consistent
                        every day.
                     </p>
                  </div>

                  {/* Focus Techniques */}
                  <div
                     data-aos="fade-up"
                     data-aos-delay="300"
                     className="relative bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                     {/* Floating SVG Icon */}
                     <div className="absolute -top-6 -left-6 bg-[#2563EB] p-3 rounded-xl shadow-lg">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={2}
                           stroke="white"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 19l9 2-7-9 7-9-9 2L3 12l9 7z"
                           />
                        </svg>
                     </div>

                     <h4 className="font-semibold text-[#0F172A] text-lg mb-1">
                        Focus Techniques
                     </h4>
                     <p className="text-[#475569] text-sm">
                        Discover simple ways to improve concentration and reduce
                        distractions.
                     </p>
                  </div>
               </div>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="flex justify-center">
               <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=60&w=600"
                  alt="Study"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
               />
            </div>
         </div>
      </section>
   );
}

export default StudySection;
