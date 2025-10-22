import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaTwitter, FaGraduationCap } from "react-icons/fa";

export default function TeamSection() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const teamMembers = [
      {
         name: "Dr. Ahmed Khan",
         role: "Founder & CEO",
         image: "/imgs/team/ceo.jpg",
         education: "PhD in Education, LUMS",
         experience: "15+ years in EdTech",
         social: { linkedin: "#", twitter: "#" },
      },
      {
         name: "Sarah Malik",
         role: "Head of Academics",
         image: "/imgs/team/academics.jpg",
         education: "MSc Mathematics, PU",
         experience: "12+ years teaching",
         social: { linkedin: "#", twitter: "#" },
      },
      {
         name: "Ali Raza",
         role: "CTO",
         image: "/imgs/team/cto.jpg",
         education: "MS Computer Science, FAST",
         experience: "10+ years in Tech",
         social: { linkedin: "#", twitter: "#" },
      },
      {
         name: "Fatima Noor",
         role: "Student Success Manager",
         image: "/imgs/team/success.jpg",
         education: "M.Ed, IER",
         experience: "8+ years counseling",
         social: { linkedin: "#", twitter: "#" },
      },
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
                  Meet Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Team
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our dedicated team of educators, technologists, and mentors
                  are committed to providing you with the best learning
                  experience.
               </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {teamMembers.map((member, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Member Image */}
                     <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                        <FaGraduationCap className="text-6xl text-white opacity-50" />
                        {/* Social Links */}
                        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <a
                              href={member.social.linkedin}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                           >
                              <FaLinkedin className="text-sm" />
                           </a>
                           <a
                              href={member.social.twitter}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300"
                           >
                              <FaTwitter className="text-sm" />
                           </a>
                        </div>
                     </div>

                     {/* Member Info */}
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                           {member.name}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                           {member.role}
                        </p>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                           <p>🎓 {member.education}</p>
                           <p>💼 {member.experience}</p>
                        </div>
                     </div>

                     {/* Hover Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
