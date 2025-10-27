import React, { useState } from "react";
import {
   FaUser,
   FaEdit,
   FaShare,
   FaTrophy,
   FaGamepad,
   FaStar,
} from "react-icons/fa";
import EditProfilePopup from "./EditProfilePopUp";

const ProfileHero = () => {
   const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
   const [userData, setUserData] = useState({
      username: "John Gaming",
      fullName: "John Gaming",
      email: "john.gaming@email.com",
      location: "New York, USA",
      bio: "Professional gamer and streamer. Love competitive gaming and exploring new games!",
      twitchUrl: "twitch.tv/johngaming",
      youtubeUrl: "youtube.com/johngaming",
      profileImage:
         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      favoriteGenres: ["Action", "Racing", "RPG", "Strategy"],
   });

   const userStats = [
      { icon: <FaTrophy />, value: "25", label: "Tournaments Won" },
      { icon: <FaGamepad />, value: "156", label: "Games Played" },
      { icon: <FaStar />, value: "4.8", label: "Average Rating" },
   ];

   const handleSaveProfile = (updatedData) => {
      setUserData(updatedData);
   };

   return (
      <>
         <section className="relative py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Profile Picture */}
                  <div className="relative" data-aos="fade-right">
                     <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 overflow-hidden">
                        <img
                           src={userData.profileImage}
                           alt="Profile"
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>

                  {/* Profile Info */}
                  <div
                     className="flex-1 text-center md:text-left"
                     data-aos="fade-left"
                  >
                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                           <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                              {userData.username}
                           </h1>
                           <p className="text-cyan-400 text-lg">Pro Gamer</p>
                           <p className="text-gray-300 mt-2 max-w-md">
                              {userData.bio}
                           </p>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0 justify-center md:justify-start">
                           <button
                              onClick={() => setIsEditPopupOpen(true)}
                              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2"
                           >
                              <FaEdit />
                              Edit Profile
                           </button>
                           <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center gap-2">
                              <FaShare />
                              Share
                           </button>
                        </div>
                     </div>

                     {/* Stats */}
                     <div className="grid grid-cols-3 gap-6 max-w-md">
                        {userStats.map((stat, index) => (
                           <div key={index} className="text-center">
                              <div className="text-cyan-400 text-2xl mb-1">
                                 {stat.icon}
                              </div>
                              <div className="text-2xl font-bold text-white">
                                 {stat.value}
                              </div>
                              <div className="text-gray-400 text-sm">
                                 {stat.label}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Edit Profile Popup */}
         <EditProfilePopup
            isOpen={isEditPopupOpen}
            onClose={() => setIsEditPopupOpen(false)}
            userData={userData}
            onSave={handleSaveProfile}
         />
      </>
   );
};

export default ProfileHero;
