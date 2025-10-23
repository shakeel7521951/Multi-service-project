import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMusic, FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MusicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const navLinks = [
    { name: "Home", path: "/music" },
    { name: "About", path: "/music/about" },
    { name: "Courses", path: "/music/courses" },
    { name: "Competitions", path: "/music/competitions" },
    { name: "Community", path: "/music/community" },
    { name: "Contact", path: "/music/contact" },
  ];

  return (
    <nav
      data-aos="fade-down"
      className="fixed w-full top-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-slate-700/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/music" 
          className="flex items-center gap-3 group relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
            <FaMusic className="relative text-white text-2xl p-1.5 bg-slate-800 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-500">
            MusicStudents
          </span>
          {/* Logo Hover Effect */}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-sm font-medium transition-all duration-500 group ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 group-hover:scale-105 group-hover:translate-y-[-2px] transition-transform duration-300">
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                    )}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500 rounded-full"></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to='/music/login' className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-600/50 rounded-full hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:bg-cyan-500/10 relative overflow-hidden group">
            <span className="relative z-10">Login</span>
            {/* Button Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            {/* Border Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10"></div>
          </Link>
          
          <Link to='/music/signup' className="px-6 py-2.5 text-sm font-semibold text-white rounded-full relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Join Now</span>
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div 
          className="md:hidden text-xl p-2 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/* Mobile Icon Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-lg border-t border-slate-700/50">
          <ul className="flex flex-col gap-0 py-2">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-slate-300 hover:text-white transition-all duration-500 border-l-2 hover:bg-slate-700/50 hover:translate-x-2 hover:pl-8 ${
                      isActive
                        ? "text-white bg-slate-700/50 border-gradient-to-b from-cyan-500 to-purple-500"
                        : "border-transparent"
                    }`
                  }
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </span>
                </NavLink>
              </li>
            ))}
            <div className="flex gap-3 px-6 py-4 border-t border-slate-700/50 mt-2">
              <Link to='/music/login'  className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-600/50 rounded-full hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:bg-cyan-500/10">
                Login
              </Link>
              <Link to='/music/signup' className="flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Join Now
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}