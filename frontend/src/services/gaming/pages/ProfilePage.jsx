import React, { useState } from "react";
import ProfileHero from "../components/profilePageComponents/ProfileHero";
import ProfileNav from "../components/profilePageComponents/ProfileNav";
import ProfileOverview from "../components/profilePageComponents/ProfileOverview";


function ProfilePage() {
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

   const handleSaveProfile = (updatedData) => {
      setUserData(updatedData);
   };

   return (
      <div className="min-h-screen bg-gray-900 pt-20">
         <ProfileHero userData={userData} onSave={handleSaveProfile} />
         <ProfileNav />
         <ProfileOverview userData={userData} />
      </div>
   );
}

export default ProfilePage;
