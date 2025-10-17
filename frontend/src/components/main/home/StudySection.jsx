import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StudySection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   const features = [
      {
         title: "Smart Study Guides",
         desc: "Access concise, easy-to-follow guides to simplify complex topics.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#2563EB]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
               />
            </svg>
         ),
      },
      {
         title: "Time Management",
         desc: "Learn how to plan your study hours and stay consistent every day.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#2563EB]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
               />
            </svg>
         ),
      },
      {
         title: "Focus Techniques",
         desc: "Discover simple ways to improve concentration and reduce distractions.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#2563EB]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-7-9 7-9-9 2L3 12l9 7z"
               />
            </svg>
         ),
      },
   ];

   return (
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#EFF6FF] via-[#F0F9FF] to-[#E0F2FE] overflow-hidden">
         {/* Heading */}
         <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] inline-block relative pb-2">
               Study Smarter, Not Harder
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-full"></span>
            </h2>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
               Improve your learning efficiency with practical tools, tips, and
               techniques designed to keep you focused and organized during your
               study sessions.
            </p>
         </div>

         {/* Content Grid */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div data-aos="fade-right" className="space-y-6 order-2 md:order-1">
               <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">
                  Achieve More With Smart Study Methods
               </h3>
               <p className="text-[#475569] mb-8 leading-relaxed">
                  Unlock tools and techniques that help you study more
                  efficiently. Whether it's time management, structured notes,
                  or staying focused, we provide what you need to succeed.
               </p>

               <div className="space-y-5">
                  {features.map((f, i) => (
                     <div
                        key={i}
                        className="relative bg-white/80 backdrop-blur-md border border-[#2563EB]/30 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all p-6 flex items-start gap-5"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                     >
                        <div className="bg-[#DBEAFE] p-4 rounded-full shadow-sm border border-[#2563EB]/40">
                           {f.icon}
                        </div>
                        <div>
                           <h4 className="font-semibold text-lg text-[#0F172A] mb-1">
                              {f.title}
                           </h4>
                           <p className="text-sm text-[#475569]">{f.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Content */}
            <div
               data-aos="fade-left"
               className="relative group order-1 md:order-2 overflow-hidden"
            >
               <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                     src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=60&w=700"
                     alt="Study"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/60 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
                     Learn • Plan • Excel
                  </h3>
               </div>

               {/* glowing blur shapes */}
               <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#93C5FD] opacity-40 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#BFDBFE] opacity-40 rounded-full blur-3xl"></div>
            </div>
         </div>
      </section>
   );
}

export default StudySection;
