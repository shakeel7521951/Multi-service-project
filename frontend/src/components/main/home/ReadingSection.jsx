import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ReadingSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   const features = [
      {
         title: "Engaging Stories",
         desc: "Immerse yourself in meaningful stories that expand imagination and creativity.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#14B8A6]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m0 0l-3-3m3 3l3-3M9 6h6"
               />
            </svg>
         ),
      },
      {
         title: "Book Summaries",
         desc: "Save time with quick summaries and highlights of popular books.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#14B8A6]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0 0L8.5 16.253m3.5 3L15.5 16.253M4.5 6.75l7.5-4.5 7.5 4.5"
               />
            </svg>
         ),
      },
      {
         title: "Reading Habits",
         desc: "Develop a consistent reading routine to improve knowledge and focus.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#14B8A6]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18M3 12h18M3 19h18"
               />
            </svg>
         ),
      },
   ];

   return (
      <section className="py-20 px-6 md:px-20 bg-[#F9FAFB]">
         {/* Section Heading */}
         <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] inline-block relative pb-2">
               Dive Into Reading
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full"></span>
            </h2>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
               Reading is not just about words — it’s about ideas, emotions, and
               imagination. Build a habit of reading to boost your creativity,
               focus, and emotional well-being.
            </p>
         </div>

         {/* Content Grid */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div data-aos="fade-right" className="relative">
               <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=60&w=700"
                  alt="Reading Books"
                  className="rounded-2xl shadow-lg"
               />
               <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#14B8A6] opacity-20 rounded-full blur-xl"></div>
            </div>

            {/* Right Text */}
            <div data-aos="fade-left">
               <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">
                  Why Reading Matters
               </h3>
               <p className="text-[#475569] mb-8 leading-relaxed">
                  Books are a gateway to knowledge and imagination. Whether you
                  prefer fiction, biographies, or self-help, reading shapes your
                  thoughts and helps you grow both personally and
                  professionally.
               </p>

               <div className="space-y-5">
                  {features.map((f, i) => (
                     <div
                        key={i}
                        className="relative bg-white shadow-md rounded-xl p-5 pl-16 hover:shadow-lg transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                     >
                        <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-[#E0F2F1] rounded-full p-3 shadow-md">
                           {f.icon}
                        </div>
                        <h4 className="font-semibold text-lg text-[#0F172A] mb-1">
                           {f.title}
                        </h4>
                        <p className="text-sm text-[#475569]">{f.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ReadingSection;
