import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBookOpen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-gray-300 border-t border-slate-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md text-white">
              <FaBookOpen size={20} />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ReadifyHub
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted companion for learning — providing books, notes, and
            study materials tailored for every level of student.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Facilities", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-indigo-400 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "1st Year Books",
              "2nd Year Books",
              "University Notes",
              "Past Papers",
              "Study Guides",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Join our newsletter and receive free resources, study notes, and
            updates directly to your inbox.
          </p>

          {/* ✅ Fixed Subscribe Section */}
          {/* ✅ Professional Subscribe Section */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex w-full max-w-md mt-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm text-gray-100 placeholder-gray-400 bg-slate-800/70 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full transition-all"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 ml-1">
            No spam — only valuable learning content.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800/50" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-medium">ReadifyHub</span>. All
          rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 sm:mt-0">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 text-gray-300 hover:text-white transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
