import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

export default function ContactMap() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const locations = [
      {
         name: "Main Campus - Lahore",
         address: "123 Education Street, Gulberg III, Lahore, Punjab 54000",
         phone: "+92 300 123 4567",
         hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
         coordinates: "31.5204° N, 74.3587° E"
      },
      {
         name: "Branch Office - Karachi", 
         address: "456 Learning Avenue, Clifton, Karachi, Sindh 75500",
         phone: "+92 321 987 6543",
         hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-2PM",
         coordinates: "24.8607° N, 67.0011° E"
      }
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Campuses</span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Come visit us at our campuses for personalized counseling and course guidance
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Map Placeholder */}
               <div data-aos="fade-right" className="bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 h-96 flex items-center justify-center">
                  <div className="text-center">
                     <div className="text-6xl mb-4">🗺️</div>
                     <div className="text-gray-600 dark:text-gray-400 font-semibold">Interactive Map</div>
                     <div className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                        Google Maps integration would go here
                     </div>
                  </div>
               </div>

               {/* Locations Info */}
               <div className="space-y-6">
                  {locations.map((location, index) => (
                     <div
                        key={index}
                        data-aos="fade-left"
                        data-aos-delay={index * 100}
                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
                     >
                        <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                              <FaMapMarkerAlt />
                           </div>
                           <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                 {location.name}
                              </h3>
                              
                              <div className="space-y-2">
                                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                    <span>📍</span>
                                    <span>{location.address}</span>
                                 </div>
                                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                    <span>📞</span>
                                    <span>{location.phone}</span>
                                 </div>
                                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                    <span>🕒</span>
                                    <span>{location.hours}</span>
                                 </div>
                                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                    <span>🌐</span>
                                    <span>{location.coordinates}</span>
                                 </div>
                              </div>

                              <div className="flex space-x-3 mt-4">
                                 <a
                                    href={`https://maps.google.com/?q=${location.address}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                                 >
                                    <FaDirections />
                                    <span>Get Directions</span>
                                 </a>
                                 <a
                                    href={`tel:${location.phone.replace(/\s+/g, '')}`}
                                    className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                 >
                                    <span>Call Now</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}