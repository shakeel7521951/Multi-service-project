import React from "react";
import { FaPlay, FaUsers, FaSignal, FaCrown } from "react-icons/fa";

const QuickPlayGames = () => {
   const quickPlayGames = [
      {
         id: 1,
         name: "Cyber Battle Royale",
         players: "2.5K Online",
         difficulty: "Medium",
         avgTime: "15 min",
         image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
         mode: "Battle Royale",
         rank: "Gold",
      },
      {
         id: 2,
         name: "Extreme Racing",
         players: "1.8K Online",
         difficulty: "Easy",
         avgTime: "8 min",
         image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
         mode: "Racing",
         rank: "Silver",
      },
      {
         id: 3,
         name: "Magic Quest Arena",
         players: "3.2K Online",
         difficulty: "Hard",
         avgTime: "25 min",
         image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
         mode: "Strategy",
         rank: "Platinum",
      },
      {
         id: 4,
         name: "Zombie Survival",
         players: "1.5K Online",
         difficulty: "Medium",
         avgTime: "12 min",
         image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
         mode: "Survival",
         rank: "Gold",
      },
   ];

   return (
      <section className="py-20 bg-gray-900">
         <div className="container mx-auto px-4">
            <div data-aos="fade-up" className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     Quick Play Games
                  </span>
               </h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Jump into these popular games instantly. No downloads
                  required!
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {quickPlayGames.map((game, index) => (
                  <div
                     key={game.id}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group"
                  >
                     <div className="flex flex-col sm:flex-row">
                        {/* Game Image - Fixed Size Container */}
                        <div className="sm:w-2/5 relative">
                           <div className="aspect-video sm:aspect-auto sm:h-full">
                              <img
                                 src={game.image}
                                 alt={game.name}
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                           </div>
                           <div className="absolute top-3 left-3 bg-cyan-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                              LIVE
                           </div>
                        </div>

                        {/* Game Info - Fixed Content Area */}
                        <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                           <div>
                              <div className="flex items-start justify-between mb-3">
                                 <h3 className="text-xl font-bold text-white line-clamp-1">
                                    {game.name}
                                 </h3>
                                 <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-sm whitespace-nowrap ml-2">
                                    <FaCrown />
                                    {game.rank}
                                 </span>
                              </div>

                              <p className="text-cyan-400 mb-4">{game.mode}</p>

                              {/* Game Stats */}
                              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                 <div className="flex items-center gap-2 text-gray-400">
                                    <FaUsers className="text-green-400 flex-shrink-0" />
                                    <span className="truncate">
                                       {game.players}
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2 text-gray-400">
                                    <FaSignal
                                       className={
                                          game.difficulty === "Easy"
                                             ? "text-green-400 flex-shrink-0"
                                             : game.difficulty === "Medium"
                                             ? "text-yellow-400 flex-shrink-0"
                                             : "text-red-400 flex-shrink-0"
                                       }
                                    />
                                    <span className="truncate">
                                       {game.difficulty}
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span className="truncate">
                                       {game.avgTime} avg
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                                    <span className="truncate">
                                       No Download
                                    </span>
                                 </div>
                              </div>
                           </div>

                           {/* Play Button */}
                           <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mt-2">
                              <FaPlay />
                              Play Now
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default QuickPlayGames;
