import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CategoriesSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const categories = [
      {
         title: "Study",
         desc: "Access focused study guides, notes, and educational resources.",
         img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=60&w=600",
         color: "#2563EB",
      },
      {
         title: "Reading",
         desc: "Dive into engaging articles, stories, and insightful reads.",
         img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=60&w=600",
         color: "#14B8A6",
      },
      {
         title: "Music",
         desc: "Listen to relaxing tunes to stay calm and improve focus.",
         img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=60&w=600",
         color: "#6366F1",
      },
      {
         title: "Gaming",
         desc: "Play fun and mindful games that refresh your mind.",
         img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=60&w=600",
         color: "#F59E0B",
      },
   ];

   return (
      <section className="bg-[#F8FAFC] py-20 px-6 md:px-20">
         {/* Heading */}
         <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] inline-block relative pb-2">
               Explore Your World
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-full"></span>
            </h2>
            <p
               className="text-[#475569] mt-4 max-w-2xl mx-auto"
               data-aos="fade-up"
               data-aos-delay="100"
            >
               Discover study materials, books, music, and games to boost your
               focus, creativity, and relaxation.
            </p>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
               <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 150} // Stagger effect
               >
                  {/* Image */}
                  <div className="overflow-hidden">
                     <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                     />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                     <div>
                        <h3
                           className="text-xl font-semibold mb-2"
                           style={{ color: cat.color }}
                        >
                           {cat.title}
                        </h3>
                        <p className="text-[#475569] text-sm mb-4">
                           {cat.desc}
                        </p>
                     </div>

                     {/* Button */}
                     <button
                        className="flex items-center justify-center gap-2 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
                        style={{ backgroundColor: cat.color }}
                     >
                        Explore
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={2}
                           stroke="currentColor"
                           className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M18.72 5.28l1.06-1.06M12 8l4 4-4 4m0-8v8"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default CategoriesSection;
