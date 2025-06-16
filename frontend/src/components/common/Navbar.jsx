import React, { useState } from 'react';
import {
  FaSearch,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navItems = [
    { label: 'Tutorials', links: ['HTML', 'CSS', 'JavaScript'] },
    { label: 'Exercises', links: ['Quizzes', 'Projects'] },
    { label: 'Certificates', links: ['Web Dev', 'Data Science'] },
    { label: 'Services', links: ['Hosting', 'APIs'] },
  ];

  return (
    <nav className="bg-white text-black px-4 py-4 w-full shadow">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* LEFT SECTION */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-green-600 font-bold text-2xl">
              W<sup className="text-xs">3</sup>
            </span>
            <span className="text-green-600 text-xs ml-1">schools</span>
          </div>

          {/* Desktop Menu - show only on large screens */}
          <div className="hidden lg:flex items-center space-x-4 text-md font-medium">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className="flex items-center"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <MdArrowDropDown className="ml-1" />
                </div>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 text-sm z-50">
                    <ul className="p-2 space-y-1">
                      {item.links.map((link) => (
                        <li key={link} className="hover:bg-gray-100 px-2 py-1 rounded">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER SECTION: Search */}
        <div className="hidden lg:flex items-center space-x-2 w-full lg:w-[25%] max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none"
          />
          <FaSearch className="text-gray-600 cursor-pointer" />
        </div>

        {/* RIGHT SECTION: Icons */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1 text-purple-500 cursor-pointer text-nowrap">
            <FaCode className="text-xl" />
            <span className="text-black">Spaces</span>
          </div>
          <div className="flex items-center space-x-1 text-purple-500 cursor-pointer text-nowrap">
            <FaGraduationCap className="text-xl" />
            <span className="text-black">For Teachers</span>
          </div>
          <div className="flex items-center space-x-1 text-purple-500 cursor-pointer text-nowrap">
            <FaShoppingCart className="text-xl" />
            <span className="text-black">Get Certified</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-nowrap text-white px-4 py-2 rounded-sm flex items-center space-x-2 cursor-pointer">
            <FaUser className="text-base" />
            <span className="text-sm">Sign In</span>
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {/* Search */}
          <div className="flex items-center space-x-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none"
            />
            <FaSearch className="text-gray-600 cursor-pointer" />
          </div>

          {/* Navigation Dropdowns */}
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => toggleDropdown(item.label)}
                className="w-full flex justify-between items-center text-left font-medium"
              >
                {item.label}
                <MdArrowDropDown />
              </button>
              {activeDropdown === item.label && (
                <ul className="pl-4 py-1 space-y-1">
                  {item.links.map((link) => (
                    <li key={link} className="text-sm text-gray-700">
                      {link}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Right Section */}
          <div className="flex flex-col space-y-3 text-sm">
            <div className="flex items-center space-x-2 text-purple-500">
              <FaCode className="text-xl" />
              <span className="text-black">Spaces</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-500">
              <FaGraduationCap className="text-xl" />
              <span className="text-black">For Teachers</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-500">
              <FaShoppingCart className="text-xl" />
              <span className="text-black">Get Certified</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-sm flex items-center justify-center space-x-2">
              <FaUser className="text-base" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
