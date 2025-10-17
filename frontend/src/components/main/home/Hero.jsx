import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
      });
   }, []);

   return (
      <>
         <section
            className="bg-black py-10 md:py-25 px-4 md:px-20 relative"
            style={{
               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 95%)",
            }}
         >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
               {/* Left Content */}
               <div data-aos="fade-right">
                  <h1 className="text-white font-bold text-center md:text-left text-4xl md:text-5xl mb-4">
                     Learn, Focus, Relax and Enjoy
                  </h1>

                  <p className="text-blue-50 text-lg mb-6 text-justify">
                     Explore study materials, read books, listen to calming
                     music, download PDFs, and play mind-refreshing games — all
                     in one calm space.
                  </p>

                  <div className="flex gap-4 justify-between md:justify-start">
                     <button className="bg-[#FF6347] text-white font-semibold border-none px-6 py-3 rounded-lg hover:bg-[#FF6320] cursor-pointer transition-all">
                        Get Started
                     </button>
                     <button className="border border-white cursor-pointer text-white hover:text-black px-6 py-3 rounded-lg hover:bg-white hover:text-[#2563EB] transition-all">
                        Explore All
                     </button>
                  </div>
               </div>

               {/* Right Illustration */}
               <div
                  className="grid grid-cols-2 gap-4 pt-8 pb-20 md:py-0"
                  data-aos="fade-left"
               >
                  <img
                     src="https://images.unsplash.com/photo-1664188613064-7eea761238f0?auto=format&fit=crop&q=60&w=500"
                     alt="Reading"
                     className="object-cover rounded-2xl w-50 h-28 md:h-45 md:w-80 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                     src="https://images.unsplash.com/photo-1647288020413-dc15f04ce1a2?auto=format&fit=crop&q=60&w=500"
                     alt="Study"
                     className="object-cover rounded-2xl w-50 h-28 md:h-45 md:w-80 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                     src="https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&q=60&w=500"
                     alt="Music"
                     className="object-cover rounded-2xl w-50 h-28 md:h-45 md:w-80 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                     src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=60&w=500"
                     alt="Gaming"
                     className="object-cover rounded-2xl w-50 h-28 md:h-45 md:w-80 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
               </div>
            </div>
         </section>
      </>
   );
}

export default Hero;
