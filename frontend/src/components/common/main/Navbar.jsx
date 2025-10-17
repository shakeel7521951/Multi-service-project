import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tab Studio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            >
              Home
            </a>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold transition duration-200">
                About <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3">
                  {[
                    "Our Mission",
                    "Our Vision", 
                    "Our Team",
                    "Career Opportunities",
                    "Client Testimonials",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold transition duration-200">
                Services <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3">
                  {[
                    "Web & App Development",
                    "Recording Studio",
                    "Event Production", 
                    "Creative Branding",
                    "Photography & Videography",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <a
              href="#"
              className="px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="px-5 py-2 text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <div className="px-4 py-3 space-y-2">
            {/* Home */}
            <a
              href="#"
              className="block px-4 py-3 text-gray-800 font-semibold rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
            >
              Home
            </a>

            {/* About */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full flex justify-between items-center px-4 py-3 text-gray-800 font-semibold rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
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
                    "Our Mission",
                    "Our Vision",
                    "Our Team",
                    "Career Opportunities", 
                    "Client Testimonials",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center px-4 py-3 text-gray-800 font-semibold rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
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
                    "Web & App Development",
                    "Recording Studio",
                    "Event Production",
                    "Creative Branding",
                    "Photography & Videography",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="#"
              className="block px-4 py-3 text-gray-800 font-semibold rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200 border-t border-gray-100"
            >
              Contact
            </a>

            {/* Auth Buttons (Mobile) */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <a
                href="#"
                className="block text-center px-4 py-3 text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition duration-200"
              >
                Login
              </a>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;