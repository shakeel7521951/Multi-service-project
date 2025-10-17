import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brand
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Services <FaChevronDown className="ml-1 text-xs" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-70 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-4 flex gap-20">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Software
                    </h3>
                    <ul className="space-y-2">
                      {["Web Development", "Mobile Apps", "API Services"].map((item) => (
                        <li key={item}>
                          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Hardware
                    </h3>
                    <ul className="space-y-2">
                      {["Laptops", "Desktops", "Accessories"].map((item) => (
                        <li key={item}>
                          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fadeIn">
          <div className="px-4 py-3 space-y-1">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Services
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {mobileDropdownOpen && (
                <div className="px-4 py-2 space-y-4 animate-slideDown">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Software</h4>
                    <ul className="space-y-2">
                      {["Web Development", "Mobile Apps", "API Services"].map((item) => (
                        <li key={item}>
                          <a href="#" className="text-gray-600 text-sm block py-2 px-4 rounded-lg hover:bg-gray-50">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Hardware</h4>
                    <ul className="space-y-2">
                      {["Laptops", "Desktops", "Accessories"].map((item) => (
                        <li key={item}>
                          <a href="#" className="text-gray-600 text-sm block py-2 px-4 rounded-lg hover:bg-gray-50">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <a
                href="#"
                className="block text-center px-4 py-3 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
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