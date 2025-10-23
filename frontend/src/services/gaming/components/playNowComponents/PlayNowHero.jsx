import React from "react";
import { FaPlay, FaUsers, FaTrophy, FaClock } from "react-icons/fa";

const PlayNowHero = () => {
   return (
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
         <div className="container mx-auto px-4 text-center">
            <div data-aos="fade-up">
               <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     Play Now
                  </span>
               </h1>
               <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Jump into action! Choose your game and start playing
                  instantly. Compete with players worldwide.
               </p>

               {/* Quick Stats */}
               <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <div className="text-center">
                     <FaUsers className="text-3xl text-cyan-400 mx-auto mb-2" />
                     <div className="text-2xl font-bold text-white">15K+</div>
                     <div className="text-gray-400 text-sm">Online Now</div>
                  </div>
                  <div className="text-center">
                     <FaTrophy className="text-3xl text-yellow-400 mx-auto mb-2" />
                     <div className="text-2xl font-bold text-white">500+</div>
                     <div className="text-gray-400 text-sm">Tournaments</div>
                  </div>
                  <div className="text-center">
                     <FaPlay className="text-3xl text-green-400 mx-auto mb-2" />
                     <div className="text-2xl font-bold text-white">50+</div>
                     <div className="text-gray-400 text-sm">Games Ready</div>
                  </div>
                  <div className="text-center">
                     <FaClock className="text-3xl text-purple-400 mx-auto mb-2" />
                     <div className="text-2xl font-bold text-white">
                        Instant
                     </div>
                     <div className="text-gray-400 text-sm">Play</div>
                  </div>
               </div>

               {/* Quick Play Button */}
               <div data-aos="fade-up" data-aos-delay="300">
                  <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
                     <FaPlay />
                     Quick Play - Find Match
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PlayNowHero;
