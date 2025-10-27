import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const GamesHero = () => {
   return (
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
         <div className="container mx-auto px-4 text-center">
            <div data-aos="fade-up">
               <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Explore{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     All Games
                  </span>
               </h1>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Discover thousands of amazing games across all categories.
                  Find your next favorite adventure!
               </p>

               {/* Search Bar */}
               <div
                  className="max-w-2xl mx-auto mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search games..."
                        className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                     />
                     <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
               </div>

               {/* Quick Filter Buttons */}
               <div
                  className="flex flex-wrap gap-4 justify-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  {[
                     "All",
                     "Action",
                     "Adventure",
                     "Racing",
                     "Sports",
                     "Puzzle",
                     "Strategy",
                     "RPG",
                  ].map((category) => (
                     <button
                        key={category}
                        className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-gray-700"
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default GamesHero;
