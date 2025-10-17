import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function GamingSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         mirror: true,
      });
   }, []);

   const features = [
      {
         title: "Mindful Gaming",
         desc: "Play games designed to relax your mind and improve focus — not just for fun, but for mental sharpness.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#F59E0B]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17a.75.75 0 01-.75-.75V7.75a.75.75 0 011.5 0v8.5a.75.75 0 01-.75.75zm4.5 0a.75.75 0 01-.75-.75V7.75a.75.75 0 011.5 0v8.5a.75.75 0 01-.75.75z"
               />
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 4.5H4.5A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5z"
               />
            </svg>
         ),
      },
      {
         title: "Fun Competitions",
         desc: "Join friendly tournaments and challenge yourself with puzzles and strategic games.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#F59E0B]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m0 0l3-3m-3 3l-3-3m0-6h6"
               />
            </svg>
         ),
      },
      {
         title: "Team Play",
         desc: "Collaborate with friends, build strategies, and enjoy teamwork-based challenges.",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-8 h-8 text-[#F59E0B]"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a4 4 0 11-8 0 4 4 0 018 0zm-8 8a6 6 0 0112 0v2H8v-2z"
               />
            </svg>
         ),
      },
   ];

   return (
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-[#FFFBEB] overflow-hidden">
         {/* Heading */}
         <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#78350F] inline-block relative pb-2">
               Level Up Your Mind
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full"></span>
            </h2>
            <p className="text-[#92400E] mt-4 max-w-2xl mx-auto">
               Gaming isn’t just entertainment — it’s a mental workout. Enhance
               your reflexes, memory, and creativity while having fun!
            </p>
         </div>

         {/* Grid Layout */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div data-aos="fade-right" className="relative group">
               <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                     src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=60&w=700"
                     alt="Gaming"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F59E0B]/60 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
                     Play • Compete • Grow
                  </h3>
               </div>

               {/* glowing decorative shapes */}
               <div className="absolute -top-8 -left-8 w-28 h-28 bg-[#FBBF24] opacity-40 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FDBA74] opacity-40 rounded-full blur-3xl"></div>
            </div>

            {/* Right - Features */}
            <div data-aos="fade-left" className="space-y-6">
               {features.map((f, i) => (
                  <div
                     key={i}
                     className="relative bg-white/80 backdrop-blur-md border border-[#FCD34D]/50 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all p-6 flex items-start gap-5"
                     data-aos="fade-up"
                     data-aos-delay={i * 150}
                  >
                     <div className="bg-[#FFF7ED] p-4 rounded-full shadow-sm border border-[#FBBF24]/40">
                        {f.icon}
                     </div>
                     <div>
                        <h4 className="font-semibold text-lg text-[#78350F] mb-1">
                           {f.title}
                        </h4>
                        <p className="text-sm text-[#92400E]">{f.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default GamingSection;
