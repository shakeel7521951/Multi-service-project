import React from "react";
import {
   FaCalendar,
   FaMapMarkerAlt,
   FaTrophy,
   FaClock,
   FaTwitch,
   FaYoutube,
} from "react-icons/fa";

const ProfileOverview = ({ userData }) => {
   const recentGames = [
      {
         id: 1,
         name: "Cyber Battle Royale",
         time: "2 hours ago",
         score: "15,240",
         image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3",
      },
      {
         id: 2,
         name: "Extreme Racing 2024",
         time: "5 hours ago",
         score: "1st Place",
         image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3",
      },
      {
         id: 3,
         name: "Magic Kingdom Quest",
         time: "1 day ago",
         score: "Level 45",
         image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3",
      },
   ];

   const achievements = [
      { name: "First Blood", icon: "🩸", progress: 100 },
      { name: "Game Master", icon: "🎮", progress: 75 },
      { name: "Speed Demon", icon: "⚡", progress: 60 },
      { name: "Social Butterfly", icon: "🦋", progress: 90 },
   ];

   return (
      <section className="py-8 bg-gray-900">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Left Column - Personal Info */}
               <div className="lg:col-span-1" data-aos="fade-right">
                  <div className="bg-gray-800 rounded-2xl p-6">
                     <h3 className="text-xl font-bold text-white mb-4">
                        Personal Info
                     </h3>

                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                           <FaCalendar className="text-cyan-400" />
                           <span>Member since: Jan 2023</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                           <FaMapMarkerAlt className="text-cyan-400" />
                           <span>{userData.location}</span>
                        </div>
                        {userData.twitchUrl && (
                           <div className="flex items-center gap-3 text-gray-300">
                              <FaTwitch className="text-purple-400" />
                              <a
                                 href={userData.twitchUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-cyan-400 hover:underline"
                              >
                                 {userData.twitchUrl}
                              </a>
                           </div>
                        )}
                        {userData.youtubeUrl && (
                           <div className="flex items-center gap-3 text-gray-300">
                              <FaYoutube className="text-red-400" />
                              <a
                                 href={userData.youtubeUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-cyan-400 hover:underline"
                              >
                                 {userData.youtubeUrl}
                              </a>
                           </div>
                        )}
                     </div>

                     <div className="mt-6 pt-6 border-t border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-3">
                           Gaming Preferences
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {userData.favoriteGenres.map((genre) => (
                              <span
                                 key={genre}
                                 className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                              >
                                 {genre}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Middle Column - Recent Activity */}
               <div className="lg:col-span-2" data-aos="fade-up">
                  <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                     <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaClock className="text-cyan-400" />
                        Recent Activity
                     </h3>

                     <div className="space-y-4">
                        {recentGames.map((game) => (
                           <div
                              key={game.id}
                              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300"
                           >
                              <img
                                 src={game.image}
                                 alt={game.name}
                                 className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                 <h4 className="text-white font-semibold">
                                    {game.name}
                                 </h4>
                                 <p className="text-gray-400 text-sm">
                                    {game.time}
                                 </p>
                              </div>
                              <div className="text-cyan-400 font-bold">
                                 {game.score}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-gray-800 rounded-2xl p-6">
                     <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaTrophy className="text-yellow-400" />
                        Achievements
                     </h3>

                     <div className="grid grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                           <div
                              key={index}
                              className="bg-gray-700/50 rounded-lg p-4"
                           >
                              <div className="flex items-center gap-3 mb-2">
                                 <span className="text-2xl">
                                    {achievement.icon}
                                 </span>
                                 <span className="text-white font-semibold">
                                    {achievement.name}
                                 </span>
                              </div>
                              <div className="w-full bg-gray-600 rounded-full h-2">
                                 <div
                                    className="bg-cyan-400 h-2 rounded-full transition-all duration-500"
                                    style={{
                                       width: `${achievement.progress}%`,
                                    }}
                                 ></div>
                              </div>
                              <div className="text-right text-gray-400 text-sm mt-1">
                                 {achievement.progress}%
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProfileOverview;
