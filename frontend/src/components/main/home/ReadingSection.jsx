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
         desc: "Immerse yourself in meaningful stories that spark imagination and creativity.",
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
         desc: "Quick insights from popular books — save time and gain key takeaways easily.",
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
         desc: "Build a daily reading habit to improve knowledge, focus, and clarity of thought.",
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
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#ECFEFF] via-[#F0FDFA] to-[#E0F7FA] overflow-hidden">
         {/* Heading */}
         <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] inline-block relative pb-2">
               Dive Into Reading
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full"></span>
            </h2>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
               Reading is not just a habit — it’s a way to travel through ideas,
               emotions, and imagination. Discover the joy of getting lost in
               words.
            </p>
         </div>

         {/* Content Grid */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div
               data-aos="fade-right"
               className="relative group order-1 md:order-1"
            >
               <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                     src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=60&w=700"
                     alt="Reading Books"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14B8A6]/60 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
                     Read • Imagine • Grow
                  </h3>
               </div>

               {/* glowing blur shapes */}
               <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#5EEAD4] opacity-40 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#99F6E4] opacity-40 rounded-full blur-3xl"></div>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="space-y-6 order-2 md:order-2">
               <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">
                  Why Reading Matters
               </h3>
               <p className="text-[#475569] mb-8 leading-relaxed">
                  Books are timeless companions that open your mind to new
                  worlds, knowledge, and experiences. From classic novels to
                  modern insights — reading enhances creativity, emotional
                  intelligence, and focus.
               </p>

               <div className="space-y-5">
                  {features.map((f, i) => (
                     <div
                        key={i}
                        className="relative bg-white/80 backdrop-blur-md border border-[#14B8A6]/30 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all p-6 flex items-start gap-5"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                     >
                        <div className="bg-[#E0F2F1] p-4 rounded-full shadow-sm border border-[#14B8A6]/40">
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
         </div>
      </section>
   );
}

export default ReadingSection;
