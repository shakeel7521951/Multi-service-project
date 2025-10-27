import React from "react";
import {
   SiEpicgames,
   SiFacebook,
   SiInstagram,
   SiDiscord,
   SiYoutube,
} from "react-icons/si";
import { FaGamepad, FaShieldAlt, FaHeadset, FaMobile } from "react-icons/fa";

const GamingFooter = () => {
   const currentYear = new Date().getFullYear();

   const footerSections = [
      {
         title: "Gaming",
         links: [
            "Action Games",
            "Adventure Games",
            "Sports Games",
            "Racing Games",
            "Puzzle Games",
            "All Games",
         ],
      },
      {
         title: "Support",
         links: [
            "Help Center",
            "Community",
            "Bug Reports",
            "Status",
            "Contact Us",
         ],
      },
      {
         title: "Company",
         links: ["About Us", "Careers", "News", "Partners", "Legal"],
      },
   ];

   const socialLinks = [
      { icon: <SiFacebook />, href: "#", color: "hover:text-blue-500" },
      { icon: <SiInstagram />, href: "#", color: "hover:text-pink-500" },
      { icon: <SiDiscord />, href: "#", color: "hover:text-indigo-400" },
      { icon: <SiYoutube />, href: "#", color: "hover:text-red-500" },
   ];

   const features = [
      { icon: <FaShieldAlt />, text: "Secure Gaming" },
      { icon: <FaHeadset />, text: "24/7 Support" },
      { icon: <FaMobile />, text: "Mobile Friendly" },
      { icon: <FaGamepad />, text: "1000+ Games" },
   ];

   return (
      <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
         {/* Features Section */}
         <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 py-8">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="flex flex-col items-center text-center space-y-2"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                     >
                        <div className="text-2xl text-cyan-400">
                           {feature.icon}
                        </div>
                        <span className="text-sm font-semibold">
                           {feature.text}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Main Footer Content */}
         <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
               {/* Brand Section */}
               <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                     <SiEpicgames className="text-3xl text-cyan-400" />
                     <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        GameZone
                     </span>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-md">
                     Your ultimate gaming destination with thousands of free
                     games, tournaments, and an amazing community of gamers.
                  </p>
                  <div className="flex space-x-4">
                     {socialLinks.map((social, index) => (
                        <a
                           key={index}
                           href={social.href}
                           className={`text-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Links Sections */}
               {footerSections.map((section, index) => (
                  <div
                     key={section.title}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <h3 className="text-lg font-bold text-white mb-4">
                        {section.title}
                     </h3>
                     <ul className="space-y-2">
                        {section.links.map((link) => (
                           <li key={link}>
                              <a
                                 href="#"
                                 className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                              >
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="border-t border-gray-700 py-6">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-gray-400 text-sm">
                     © {currentYear} GameZone. All rights reserved.

                  </div>
                  <div className="flex space-x-6 text-sm">
                     <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                     >
                        Terms of Service
                     </a>
                     <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                     >
                        Cookie Policy
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default GamingFooter;
