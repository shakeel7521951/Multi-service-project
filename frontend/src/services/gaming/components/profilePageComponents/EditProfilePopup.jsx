import React, { useState } from "react";
import { FaTimes, FaUser, FaCamera, FaSave } from "react-icons/fa";

const EditProfilePopup = ({ isOpen, onClose, userData, onSave }) => {
   const [formData, setFormData] = useState({
      username: userData.username,
      fullName: userData.fullName,
      email: userData.email,
      location: userData.location,
      bio: userData.bio,
      twitchUrl: userData.twitchUrl,
      youtubeUrl: userData.youtubeUrl,
      favoriteGenres: userData.favoriteGenres,
   });

   const [selectedImage, setSelectedImage] = useState(userData.profileImage);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleGenreToggle = (genre) => {
      setFormData((prev) => ({
         ...prev,
         favoriteGenres: prev.favoriteGenres.includes(genre)
            ? prev.favoriteGenres.filter((g) => g !== genre)
            : [...prev.favoriteGenres, genre],
      }));
   };

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = (e) => {
            setSelectedImage(e.target.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSave({
         ...formData,
         profileImage: selectedImage,
      });
      onClose();
   };

   if (!isOpen) return null;

   const gamingGenres = [
      "Action",
      "Adventure",
      "Racing",
      "Sports",
      "Puzzle",
      "Strategy",
      "RPG",
      "Shooter",
      "Simulation",
      "Horror",
   ];

   return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
         <div
            className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            data-aos="zoom-in"
         >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
               <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FaUser className="text-cyan-400" />
                  Edit Profile
               </h2>
               <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
               >
                  <FaTimes />
               </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
               {/* Profile Picture Upload */}
               <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                     <img
                        src={selectedImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
                     />
                     <label className="absolute bottom-0 right-0 bg-cyan-500 text-white p-2 rounded-full cursor-pointer hover:bg-cyan-400 transition-all duration-300">
                        <FaCamera />
                        <input
                           type="file"
                           accept="image/*"
                           onChange={handleImageChange}
                           className="hidden"
                        />
                     </label>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                     Click camera icon to change photo
                  </p>
               </div>

               {/* Form Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                     <label className="block text-gray-300 mb-2">
                        Username
                     </label>
                     <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Enter username"
                     />
                  </div>

                  <div>
                     <label className="block text-gray-300 mb-2">
                        Full Name
                     </label>
                     <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Enter full name"
                     />
                  </div>

                  <div>
                     <label className="block text-gray-300 mb-2">Email</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Enter email"
                     />
                  </div>

                  <div>
                     <label className="block text-gray-300 mb-2">
                        Location
                     </label>
                     <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Enter location"
                     />
                  </div>
               </div>

               {/* Bio */}
               <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Bio</label>
                  <textarea
                     name="bio"
                     value={formData.bio}
                     onChange={handleInputChange}
                     rows="3"
                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                     placeholder="Tell us about yourself..."
                  />
               </div>

               {/* Social Links */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                     <label className="block text-gray-300 mb-2">
                        Twitch URL
                     </label>
                     <input
                        type="url"
                        name="twitchUrl"
                        value={formData.twitchUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="https://twitch.tv/username"
                     />
                  </div>

                  <div>
                     <label className="block text-gray-300 mb-2">
                        YouTube URL
                     </label>
                     <input
                        type="url"
                        name="youtubeUrl"
                        value={formData.youtubeUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="https://youtube.com/username"
                     />
                  </div>
               </div>

               {/* Favorite Genres */}
               <div className="mb-6">
                  <label className="block text-gray-300 mb-3">
                     Favorite Gaming Genres
                  </label>
                  <div className="flex flex-wrap gap-2">
                     {gamingGenres.map((genre) => (
                        <button
                           key={genre}
                           type="button"
                           onClick={() => handleGenreToggle(genre)}
                           className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                              formData.favoriteGenres.includes(genre)
                                 ? "bg-cyan-500 text-white"
                                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                           }`}
                        >
                           {genre}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="flex gap-4 pt-6 border-t border-gray-700">
                  <button
                     type="button"
                     onClick={onClose}
                     className="flex-1 px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                  >
                     Cancel
                  </button>
                  <button
                     type="submit"
                     className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                     <FaSave />
                     Save Changes
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default EditProfilePopup;
