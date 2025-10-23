import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   FaGamepad,
   FaHome,
   FaUser,
   FaHeadset,
   FaPlay,
   FaBars,
   FaTimes,
} from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const GamingNavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });

      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const navItems = [
      { name: "Home", icon: <FaHome />, href: "/gaming/" },
      { name: "Games", icon: <FaGamepad />, href: "/gaming/games" },
      { name: "Play Now", icon: <FaPlay />, href: "/gaming/play-now" },
      { name: "Profile", icon: <FaUser />, href: "/gaming/profile" },
      { name: "Support", icon: <FaHeadset />, href: "/gaming/support" },
   ];

   return (
      <>
         <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
               isScrolled
                  ? "bg-gray-900/95 backdrop-blur-md shadow-2xl"
                  : "bg-transparent"
            }`}
         >
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-between h-16 md:h-20">
                  {/* Logo */}
                  <Link
                     to=""
                     className="flex items-center space-x-2 cursor-pointer"
                     data-aos="fade-right"
                  >
                     <SiEpicgames className="text-3xl text-cyan-400" />
                     <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        GameZone
                     </span>
                  </Link>

                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-8">
                     {navItems.map((item, index) => (
                        <Link
                           key={item.name}
                           to={item.href}
                           className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                           data-aos="fade-down"
                           data-aos-delay={index * 100}
                        >
                           <span>{item.icon}</span>
                           <span className="font-semibold">{item.name}</span>
                        </Link>
                     ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                     className="md:hidden text-2xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     {isMenuOpen ? <FaTimes /> : <FaBars />}
                  </button>
               </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
               <div
                  className="md:hidden absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
                  data-aos="fade-down"
               >
                  <div className="flex flex-col space-y-6 p-6">
                     {navItems.map((item) => (
                        <Link
                           key={item.name}
                           to={item.href}
                           className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg font-semibold"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           <span className="text-xl">{item.icon}</span>
                           <span>{item.name}</span>
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </nav>

         {/* Spacer */}
         <div className="h-16 md:h-20"></div>
      </>
   );
};

export default GamingNavBar;
