import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);

   const toggleDropdown = (menu) => {
      setActiveDropdown(activeDropdown === menu ? null : menu);
   };

  return (
    <nav className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="text-white font-bold text-lg relative z-10">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tab Studio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to=""
              className="px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link to="/about-us" className="flex items-center px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200">
                About <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </Link >
            
<div className="absolute left-0 mt-2 w-56 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
  <div className="p-3">
    {[
      { name: "Our Mission", path: "/mission" },
      { name: "Our Vision", path: "/vision" },
      { name: "Our Team", path: "/team" },
      { name: "Career Opportunities", path: "/careers" },
      { name: "Client Testimonials", path: "/testimonials" },
    ].map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="flex items-center px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200">
                Services <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </Link>
             <div className="absolute left-0 mt-2 w-56 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
  <div className="p-3">
    {[
      { name: "Web & App Development", path: "/web-app-development" },
      { name: "Recording Studio", path: "/recording-studio" },
      { name: "Event Production", path: "/event-production" },
      { name: "Creative Branding", path: "/creative-branding" },
      { name: "Photography & Videography", path: "/photography-videography" },
    ].map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
            </div>

            {/* Contact */}
            <Link to="/contact"
              className="px-4 py-2 text-white hover:text-slate-300 font-semibold transition duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/loginform"
              className="px-6 py-2 text-slate-200 font-semibold border rounded-lg  hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Login
            </Link>
            <Link to="/signupform"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md relative overflow-hidden group"
            >
              {/* Shine effect */}
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
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50 shadow-inner">
          <div className="px-4 py-3 space-y-2">
            {/* Home */}
            <Link to=""
              className="block px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
            >
              Home
            </Link>

            {/* About */}
            <div className="border-t border-slate-700/50 pt-2">
              <Link to="/about-us"
                onClick={() => toggleDropdown("about")}
                className="w-full flex justify-between items-center px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
              >
                About
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {activeDropdown === "about" && (
               <div className="px-4 pb-2 space-y-1">
  {[
    { name: "Our Mission", path: "/our-mission" },
    { name: "Our Vision", path: "/our-vision" },
    { name: "Our Team", path: "/our-team" },
    { name: "Career Opportunities", path: "/career-opportunities" },
    { name: "Client Testimonials", path: "/client-testimonials" },
  ].map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
    >
      {item.name}
    </Link>
  ))}
</div>
              )}
            </div>

            {/* Services */}
            <div className="border-t border-slate-700/50 pt-2">
              <Link to="/services"
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200"
              >
                Services
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {activeDropdown === "services" && (
               <div className="px-4 pb-2 space-y-1">
  {[
    { name: "Web & App Development", path: "/web-app-development" },
    { name: "Recording Studio", path: "/recording-studio" },
    { name: "Event Production", path: "/event-production" },
    { name: "Creative Branding", path: "/creative-branding" },
    { name: "Photography & Videography", path: "/photography-videography" },
  ].map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm transition duration-200"
    >
      {item.name}
    </Link>
  ))}
</div>
              )}
            </div>

            {/* Contact */}
            <Link to="/contact"
              className="block px-4 py-3 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition duration-200 border-t border-slate-700/50"
            >
              Contact
            </Link>

            {/* Auth Buttons (Mobile) */}
            <div className="border-t border-slate-700/50 pt-4 space-y-3">
              <Link to="/loginform"
                className="block text-center px-4 py-3 text-slate-300 font-semibold rounded-lg border-2 border-slate-700/50 hover:border-cyan-500 hover:text-white transition duration-200"
              >
                Login
              </Link>
              <Link to="/signupform"
                className="block text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md relative overflow-hidden group"
              >
                {/* Shine effect */}
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
