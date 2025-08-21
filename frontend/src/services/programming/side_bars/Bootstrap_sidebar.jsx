import React from "react";
import { NavLink } from "react-router-dom";

const Bootstrap_sidebar = () => {
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
    <div className="relative top-0 left-0 h-screen w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
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
            >
              {topic}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bootstrap_sidebar;
