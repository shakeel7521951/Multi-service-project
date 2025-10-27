import React, { useState, useEffect } from "react";
import { FaSpinner, FaUsers, FaSignal, FaGamepad } from "react-icons/fa";

const GameLoadingScreen = () => {
   const [progress, setProgress] = useState(0);
   const [playersFound, setPlayersFound] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setProgress((prev) => {
            if (prev >= 100) {
               clearInterval(timer);
               return 100;
            }
            return prev + Math.random() * 10;
         });
      }, 500);

      const playerTimer = setInterval(() => {
         setPlayersFound((prev) => {
            if (prev >= 7) {
               clearInterval(playerTimer);
               return 8;
            }
            return prev + 1;
         });
      }, 800);

      return () => {
         clearInterval(timer);
         clearInterval(playerTimer);
      };
   }, []);

   return (
      <section className="py-20 bg-gray-900">
         <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
               <div data-aos="zoom-in">
                  <FaGamepad className="text-6xl text-cyan-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                     Finding Match...
                  </h2>
                  <p className="text-gray-400 mb-8">
                     Preparing your gaming experience
                  </p>

                  {/* Progress Bar */}
                  <div className="bg-gray-800 rounded-full h-4 mb-6 overflow-hidden">
                     <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                     ></div>
                  </div>
                  <div className="text-cyan-400 font-bold mb-8">
                     {Math.round(progress)}%
                  </div>

                  {/* Loading Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     <div className="bg-gray-800 rounded-2xl p-4">
                        <FaUsers className="text-2xl text-green-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-xl">
                           {playersFound}/8
                        </div>
                        <div className="text-gray-400 text-sm">
                           Players Found
                        </div>
                     </div>
                     <div className="bg-gray-800 rounded-2xl p-4">
                        <FaSignal className="text-2xl text-yellow-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-xl">24ms</div>
                        <div className="text-gray-400 text-sm">Ping</div>
                     </div>
                     <div className="bg-gray-800 rounded-2xl p-4">
                        <FaGamepad className="text-2xl text-purple-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-xl"></div>
                        <div className="text-gray-400 text-sm">Game Mode</div>
                     </div>
                  </div>

                  {/* Loading Animation */}
                  <div className="flex justify-center mb-8">
                     <FaSpinner className="text-4xl text-cyan-400 animate-spin" />
                  </div>

                  {/* Tips */}
                  <div className="bg-gray-800 rounded-2xl p-6">
                     <h4 className="text-white font-bold mb-3">Pro Tip</h4>
                     <p className="text-gray-400">
                        Use this time to stretch and hydrate. A refreshed mind
                        performs better in competitive matches!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default GameLoadingScreen;
