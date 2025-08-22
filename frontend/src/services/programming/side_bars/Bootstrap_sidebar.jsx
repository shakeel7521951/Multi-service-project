import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Bootstrap_sidebar = () => {
  const [open, setOpen] = useState(false);

  const topics = [
    "Introduction",
    "Installation & Setup",
    "Containers",
    "Grid System",
    "Typography",
    "Colors & Backgrounds",
    "Tables",
    "Images",
    "Alerts",
    "Buttons",
    "Badges",
    "Cards",
    "Forms",
    "Form Validation",
    "Input Groups",
    "Navbar",
    "Dropdowns",
    "Modals",
    "Carousel",
    "Utilities",
    "Flexbox",
  ];

  return (
    <>
      {/* Mobile/Tablet Toggle Button (hidden on lg and above) */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#04AA6D] text-white p-2 rounded-md shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-screen w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto transition-transform duration-300 ease-in-out z-40
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-xl font-bold text-gray-800">
            Bootstrap Tutorial
          </h2>

          {/* Close button only on mobile/tablet */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-gray-600 hover:text-black"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation */}
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index}>
              <NavLink
                to={`/bootstrap/${topic.toLowerCase().replace(/ & | /g, "-")}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm lg:text-base transition ${
                    isActive
                      ? "bg-[#04AA6D] text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
                onClick={() => setOpen(false)} // close sidebar on mobile after click
              >
                {topic}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Dark overlay when sidebar open (only for mobile/tablet) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Bootstrap_sidebar;
