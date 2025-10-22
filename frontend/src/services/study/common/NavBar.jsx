import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function StudyNavBar() {
   const [isOpen, setIsOpen] = useState(false);
   const [darkMode, setDarkMode] = useState(false);

   // Toggle dark mode class on root
   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [darkMode]);

   const toggleMenu = () => setIsOpen(!isOpen);
   const toggleTheme = () => setDarkMode(!darkMode);

   return (
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg transition-all duration-500">
         <div className="max-w-7xl mx-auto px-6 py-4  flex justify-between items-center">
            {/* Logo */}
            <Link
               to="/"
               className="text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform"
            >
               Study<span className="text-yellow-300">Hub</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-white font-medium">
               <li>
                  <Link
                     to="/study/"
                     className="hover:text-yellow-300 transition-colors"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to="/study/study-about"
                     className="hover:text-yellow-300 transition-colors"
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     to="/study/study-courses"
                     className="hover:text-yellow-300 transition-colors"
                  >
                     Courses
                  </Link>
               </li>
               <li>
                  <Link
                     to="/study/study-contact"
                     className="hover:text-yellow-300 transition-colors"
                  >
                     Contact
                  </Link>
               </li>
            </ul>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
               {/* Theme Toggler */}
               <button
                  onClick={toggleTheme}
                  className="text-white text-xl hover:text-yellow-300 transition-transform transform hover:rotate-180"
               >
                  {darkMode ? <FaSun /> : <FaMoon />}
               </button>

               {/* Mobile Menu Icon */}
               <button
                  onClick={toggleMenu}
                  className="text-white text-2xl md:hidden focus:outline-none"
               >
                  {isOpen ? <FaTimes /> : <FaBars />}
               </button>
            </div>
         </div>

         {/* Mobile Dropdown Menu */}
         <div
            className={`md:hidden bg-gradient-to-b from-purple-600 to-pink-500 dark:from-gray-800 dark:to-gray-900 transition-all duration-500 ease-in-out overflow-hidden ${
               isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
         >
            <ul className="flex flex-col items-center space-y-4 py-4 text-white font-medium">
               <li>
                  <Link
                     to="/"
                     className="hover:text-yellow-300 transition-colors"
                     onClick={() => setIsOpen(false)}
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to="/about"
                     className="hover:text-yellow-300 transition-colors"
                     onClick={() => setIsOpen(false)}
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     to="/courses"
                     className="hover:text-yellow-300 transition-colors"
                     onClick={() => setIsOpen(false)}
                  >
                     Courses
                  </Link>
               </li>
               <li>
                  <Link
                     to="/contact"
                     className="hover:text-yellow-300 transition-colors"
                     onClick={() => setIsOpen(false)}
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}
