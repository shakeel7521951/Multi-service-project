import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
    <div className="relative">
      {/* Toggle button for the  (mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md shadow"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`sm:relative fixed top-0 left-0 h-screen w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Bootstrap Tutorial
        </h2>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index}>
              <NavLink
                to={`/bootstrap/${topic.toLowerCase().replace(/ & | /g, "-")}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md hover:bg-gray-200 transition ${
                    isActive ? "bg-blue-500 text-white" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)} // close sidebar after click
              >
                {topic}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bootstrap_sidebar;
