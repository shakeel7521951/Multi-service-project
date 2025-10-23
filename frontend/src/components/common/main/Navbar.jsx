import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);
   const [hoveredService, setHoveredService] = useState(null);
   const location = useLocation();
   const navigate = useNavigate();

   const toggleDropdown = (menu) => {
      setActiveDropdown(activeDropdown === menu ? null : menu);
   };

   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      const navbarHeight = document.querySelector("nav").offsetHeight;
      if (section) {
         const topPosition =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

         window.scrollTo({
            top: topPosition,
            behavior: "smooth",
         });
      }
   };

   const handleScrollClick = (id) => {
      if (location.pathname === "/about-us") {
         scrollToSection(id);
      } else {
         window.location.href = `/about-us#${id}`;
         setTimeout(() => scrollToSection(id), 500);
      }
   };

   const handleServiceHover = (serviceName) => {
      setHoveredService(serviceName);
      localStorage.setItem("activeService", serviceName);
   };

   return (
      <nav className="bg-gradient-to-br fixed top-0 from-slate-900 via-purple-900 to-slate-900 w-full z-50 border-b border-slate-700/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18">
               {/* Logo */}
               <Link to="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                     <span className="text-white font-bold text-lg relative z-10">
                        T
                     </span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                     Tab Studio
                  </span>
               </Link>

               {/* Desktop Menu */}
               <div className="hidden md:flex space-x-4 items-center">
                  <Link
                     to="/"
                     className="px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
                  >
                     Home
                  </Link>

                  {/* About Dropdown */}
                  <div className="relative group">
                     <button
                        onClick={() => toggleDropdown("about")}
                        className="flex items-center px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
                     >
                        About{" "}
                        <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                     </button>
                     <div className="absolute left-0 mt-2 w-56 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="p-3">
                           {[
                              { name: "Introduction", id: "introduction" },
                              { name: "Our Vision", id: "our-vision" },
                              { name: "Our Mission", id: "our-mission" },
                              { name: "Our Story", id: "our-story" },
                              { name: "Features", id: "features" },
                           ].map((item) => (
                              <button
                                 key={item.name}
                                 onClick={() => handleScrollClick(item.id)}
                                 className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
                              >
                                 {item.name}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Services Dropdown */}
                  <div className="relative group">
                     <Link
                        to="/services"
                        className="flex items-center px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
                     >
                        Services{" "}
                        <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                     </Link>
                     <div className="absolute left-0 mt-2 w-56 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="p-3">
                           {[
                              { name: "Study", path: "/study/" },
                              {
                                 name: "Reading",
                                 path: "/reading/",
                              },
                              {
                                 name: "Music",
                                 path: "/music/",
                              },
                              {
                                 name: "Gaming",
                                 path: "/gaming/",
                              },
                           ].map((item) => (
                              <Link
                                 key={item.name}
                                 to={item.path}
                                 onMouseEnter={() =>
                                    handleServiceHover(item.name)
                                 }
                                 className={`block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200 ${
                                    hoveredService === item.name
                                       ? "bg-slate-700/50 text-white"
                                       : ""
                                 }`}
                              >
                                 {item.name}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>

                  <Link
                     to="/contact"
                     className="px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
                  >
                     Contact
                  </Link>
               </div>

               {/* Auth Buttons (Desktop) */}
               <div className="hidden md:flex items-center space-x-3">
                  <Link
                     to="/loginform"
                     className="px-6 py-2 text-slate-200 font-semibold border rounded-lg hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
                  >
                     Login
                  </Link>
                  <Link
                     to="/signupform"
                     className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md relative overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                     <span className="relative z-10">Sign Up</span>
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden">
                  <button
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     className="p-3 rounded-xl text-white hover:bg-slate-700/50 transition duration-200"
                  >
                     {mobileMenuOpen ? (
                        <FaTimes size={20} />
                     ) : (
                        <FaBars size={20} />
                     )}
                  </button>
               </div>
            </div>
         </div>

         {/* ✅ Mobile Menu */}
         {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50 shadow-inner">
               <div className="px-4 py-3 space-y-2">
                  <Link
                     to="/"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
                  >
                     Home
                  </Link>

                  {/* About */}
                  <div className="border-t border-slate-700/50 pt-2">
                     <button
                        onClick={() => toggleDropdown("about")}
                        className="w-full flex justify-between items-center px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
                     >
                        About
                        <FaChevronDown
                           className={`transition-transform duration-300 ${
                              activeDropdown === "about" ? "rotate-180" : ""
                           }`}
                        />
                     </button>
                     {activeDropdown === "about" && (
                        <div className="px-4 pb-2 space-y-1">
                           {[
                              { name: "Introduction", id: "introduction" },
                              { name: "Our Vision", id: "our-vision" },
                              { name: "Our Mission", id: "our-mission" },
                              { name: "Our Story", id: "our-story" },
                              { name: "Features", id: "features" },
                           ].map((item) => (
                              <button
                                 key={item.name}
                                 onClick={() => {
                                    handleScrollClick(item.id);
                                    setMobileMenuOpen(false);
                                 }}
                                 className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
                              >
                                 {item.name}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Services */}
                  <div className="border-t border-slate-700/50 pt-2">
                     <button
                        onClick={() => toggleDropdown("services")}
                        className="w-full flex justify-between items-center px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
                     >
                        Services
                        <FaChevronDown
                           className={`transition-transform duration-300 ${
                              activeDropdown === "services" ? "rotate-180" : ""
                           }`}
                        />
                     </button>
                     {activeDropdown === "services" && (
                        <div className="px-4 pb-2 space-y-1">
                           {[
                              { name: "Study", path: "/study-services" },
                              {
                                 name: "Reading",
                                 path: "#reading-services",
                              },
                              {
                                 name: "Music",
                                 path: "#music-services",
                              },
                              {
                                 name: "Gaming",
                                 path: "#gaming-services",
                              },
                           ].map((item) => (
                              <button
                                 key={item.name}
                                 onClick={() => {
                                    handleServiceHover(item.name);
                                    navigate(item.path);
                                    setMobileMenuOpen(false);
                                 }}
                                 className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
                              >
                                 {item.name}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Contact */}
                  <Link
                     to="/contact"
                     onClick={() => setMobileMenuOpen(false)}
                     className="block px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200 border-t border-slate-700/50"
                  >
                     Contact
                  </Link>

                  {/* ✅ Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-2 border-t border-slate-700/50 pt-3">
                     <Link
                        to="/loginform"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-center px-4 py-2 text-slate-200 font-semibold border rounded-lg hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                     >
                        Login
                     </Link>
                     <Link
                        to="/signupform"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 relative overflow-hidden group"
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Sign Up</span>
                     </Link>
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
