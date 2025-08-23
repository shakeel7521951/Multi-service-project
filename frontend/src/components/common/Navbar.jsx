import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import {
  FaSearch,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const blaKnavArray = [
  { id: 1, name: "HTML", link: "/html" },
  { id: 2, name: "CSS", link: "/css" },
  { id: 3, name: "JavaScript", link: "/javaScript" },
  { id: 4, name: "React", link: "/react" },
  { id: 5, name: "Tailwind CSS", link: "/tailwindCss" },
  { id: 6, name: "Bootstrap", link: "/bootstrap" },
  { id: 7, name: "Node.js", link: "/nodeJs" },
  { id: 8, name: "Express.js", link: "/expressJs" },
  { id: 9, name: "Next.js", link: "/nextJs" },
  { id: 10, name: "MongoDB", link: "/mongoDb" },
  { id: 11, name: "Angular.js", link: "/angularJs" },
  { id: 12, name: "PHP", link: "/php" },
  { id: 13, name: "MySQL", link: "/mySql" },
  { id: 14, name: "JQuery", link: "/jQuery" },
  { id: 15, name: "Excel", link: "/excel" },
  { id: 16, name: "Python", link: "/python" },
  { id: 17, name: "Java", link: "/java" },
  { id: 18, name: "C", link: "/c" },
  { id: 19, name: "C++", link: "/cpp" },
  { id: 20, name: "C#", link: "/cSharp" },
  { id: 21, name: "XML", link: "/xml" },
  { id: 22, name: "Django", link: "/django" },
  { id: 23, name: "Numpy", link: "/numpy" },
  { id: 24, name: "Pandas", link: "/pandas" },
  { id: 25, name: "Data Structure", link: "/dataStructure" },
  { id: 26, name: "TypeScript", link: "/typeScript" },
  { id: 27, name: "ASP", link: "/asp" },
  { id: 28, name: "AI", link: "/ai" },
  { id: 29, name: "R", link: "/r" },
  { id: 30, name: "Go", link: "/go" },
  { id: 31, name: "Kotlin", link: "/kotlin" },
  { id: 32, name: "SASS", link: "/sass" },
  { id: 33, name: "Vue", link: "/vue" },
  { id: 34, name: "Cybersecurity", link: "/cybersecurity" },
  { id: 35, name: "Data Science", link: "/dataScience" },
  { id: 36, name: "Gen AI", link: "/genAi" },
  { id: 37, name: "Intro to Programming", link: "/introToProgramming" },
  { id: 38, name: "GIT", link: "/git" },
  { id: 39, name: "Bash", link: "/bash" },
  { id: 40, name: "Rust", link: "/rust" },
];

const navItems = [
  {
    label: "Tutorials",
    links: [
      { name: "HTML", path: "/html" },
      { name: "CSS", path: "/css" },
      { name: "JavaScript", path: "/javaScript" },
    ],
  },
  {
    label: "Exercises",
    links: [
      { name: "Quizzes", path: "/quizzes" },
      { name: "Projects", path: "/projects" },
    ],
  },
  {
    label: "Certificates",
    links: [
      { name: "Web Dev", path: "/certWebDev" },
      { name: "Data Science", path: "/certDataScience" },
    ],
  },
  {
    label: "Services",
    links: [
      { name: "Hosting", path: "/hosting" },
      { name: "APIs", path: "/apis" },
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const scrollContainerRef = useRef(null);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const scrollXright = () => {
  scrollContainerRef.current?.scrollBy({left:200,behavior:"smooth"})
  };

  const scrollXleft = () => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <nav className="fixed mb-11 bg-white text-black px-4 py-4 w-full shadow z-100">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* LEFT */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-green-600 font-bold text-2xl">
              W<sup className="text-xs">3</sup>
            </span>
            <span className="text-green-600 text-xs ml-1">schools</span>
          </div>

          {/* Desktop Dropdowns */}
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
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-44 text-sm z-50">
                    <ul className="p-2 space-y-1">
                      {item.links.map((link) => (
                        <li
                          key={link.name}
                          className="hover:bg-gray-100 px-2 py-1 rounded"
                        >
                          <Link to={link.path}>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: Search */}
        <div className="hidden lg:flex items-center space-x-2 w-full lg:w-[25%] max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none"
          />
          <FaSearch className="text-gray-600 cursor-pointer" />
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-sm flex items-center space-x-2 cursor-pointer">
            <FaUser />
            <Link to="/signIn"><span>Sign In</span></Link>
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none"
            />
            <FaSearch className="text-gray-600 cursor-pointer" />
          </div>

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
                    <li key={link.name} className="text-sm text-gray-700">
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-3 text-sm">
            <div className="flex items-center space-x-2 text-purple-500">
              <FaCode />
              <span className="text-black">Spaces</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-500">
              <FaGraduationCap />
              <span className="text-black">For Teachers</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-500">
              <FaShoppingCart />
              <span className="text-black">Get Certified</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-sm flex items-center justify-center space-x-2">
              <FaUser />
             <Link to="/signIn"> <span>Sign In</span></Link>
            </button>
          </div>
        </div>
      )}

      {/* Black Sub-Nav */}
      <div className="absolute top-[4.5rem] z-10 w-full left-0 px-2 bg-black py-2 overflow-hidden">
        <div className="relative text-white">
          <div
            className="absolute right-0 top-0 bg-black px-1 h-full py-2 cursor-pointer"
            onClick={scrollXright}
          >
            <SlArrowRight />
          </div>
          <div
            className="absolute left-0 top-0 bg-black px-1 h-full py-2 cursor-pointer"
            onClick={scrollXleft}
          >
            <SlArrowLeft />
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-scroll overflow-x-hidden no-scrollbar px-10"
          >
            {blaKnavArray.map((item) => (
              <ul key={item.id}>
                <li className="whitespace-nowrap font-semibold hover:underline">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
