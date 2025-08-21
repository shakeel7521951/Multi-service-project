import React from 'react'
import { NavLink } from "react-router-dom";



const Tailwindcss_sidebar = () => {
  const topics = [
    "Home",
  
  ];
  return (
    <div className="w-64 min-h-screen bg-gray-100 border-r border-gray-300 p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">TailwaindCss Tutorial</h2>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index}>
            {/* <NavLink
              to={path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {topic}
            </NavLink> */}
          </li>
        ))}
      </ul>
    </div >
  );

}

export default Tailwindcss_sidebar