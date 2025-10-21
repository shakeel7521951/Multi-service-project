import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
const ReadingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  const dropdowns = {
    Books: [
      "1st Year",
      "2nd Year",
      "University",
      "Past Papers",
      "Notes & PDFs",
    ],
    Services: [
      "Online Tutoring",
      "Career Guidance",
      "Study Plans",
      "Library Access",
      "Download PDFs",
    ],
  };

  return (
    <nav className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white fixed top-0 w-full z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold tracking-tight">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg w-10 h-10 flex items-center justify-center shadow-md text-white">
            R
          </div>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            ReadifyHub
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 items-center text-gray-200 font-medium">
          {["Home", "About"].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-400 transition cursor-pointer"
            >
              {item}
            </li>
          ))}

          {Object.entries(dropdowns).map(([title, items]) => (
            <li key={title} className="relative group cursor-pointer">
              <div className="flex items-center space-x-1 hover:text-indigo-400 transition">
                <span>{title}</span>
                <FaChevronDown className="text-sm mt-0.5" />
              </div>
              <ul className="absolute left-0 hidden group-hover:block bg-white text-gray-700 border border-gray-100 rounded-xl shadow-lg w-52 mt-2 overflow-hidden">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="hover:text-indigo-400 cursor-pointer transition">
            Facilities
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition">
            Contact
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books or notes..."
            className="hidden md:block border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full text-sm font-semibold transition">
            Sign In
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden text-gray-200 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-700 border-t border-gray-200 shadow-inner animate-slideDown">
          <ul className="flex flex-col items-center space-y-4 py-5 font-medium">
            {["Home", "About"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
            {Object.entries(dropdowns).map(([title, items]) => (
              <li key={title} className="flex flex-col items-center">
                <button
                  onClick={() => toggleDropdown(title)}
                  className="flex items-center space-x-1 hover:text-indigo-600 transition"
                >
                  <span>{title}</span>
                  <FaChevronDown
                    className={`text-sm transform transition-transform ${
                      openDropdown === title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === title && (
                  <ul className="flex flex-col items-center space-y-2 mt-2 text-gray-600">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="hover:text-indigo-600 cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {["Facilities", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ReadingNavbar;
