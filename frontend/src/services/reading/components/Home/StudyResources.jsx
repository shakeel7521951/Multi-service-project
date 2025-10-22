import React from "react";
import {
  FaBook,
  FaUniversity,
  FaFileAlt,
  FaDownload,
  FaArrowRight,
  FaStar,
  FaChartLine

} from "react-icons/fa";

const resources = [
  {
    title: "1st Year Resources",
    desc: "Perfectly curated foundation materials including comprehensive notes, video lectures, and step-by-step solved past papers to establish strong academic basics.",
    icon: <FaBook className="w-5 h-5" />
  },
  {
    title: "2nd Year Excellence",
    desc: "Specialized advanced resources and in-depth study materials designed to help you master complex subjects and achieve academic excellence.",
    icon: <FaStar className="w-5 h-5" />
  },
  {
    title: "University Level",
    desc: "Professional academic resources including research papers, expert-curated study guides, and comprehensive exam preparation materials for higher education.",
    icon: <FaUniversity className="w-5 h-5" />
  },
  {
    title: "Past Papers Archive",
    desc: "Complete collection of previous years' examination papers with detailed solutions, answer keys, and performance tracking analytics.",
    icon: <FaFileAlt className="w-5 h-5" />
  },
  {
    title: "Digital Notes Library",
    desc: "Extensive library of well-organized digital notes, printable PDFs, and study materials available for instant download and offline access.",
    icon: <FaDownload className="w-5 h-5" />
  },
  {
    title: "Smart Study Plans",
    desc: "AI-powered personalized study schedules, customizable learning paths, and progress tracking tools to optimize your study efficiency.",
    icon: <FaChartLine className="w-5 h-5" />
  }
];

const StudyResources = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="relative inline-block mb-4">
          <div className="flex items-center justify-center gap-4">
            {/* Left line */}
            <span className="mt-3 w-14 h-0.5 xs:h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Study Resources
            </h2>

            {/* Right line */}
            <span className="mt-3 w-14 h-0.5 xs:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
          </div>
        </div>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Access comprehensive learning materials tailored for every academic level
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, i) => (
            <div
              key={i}
              className=" group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="border border-purple-400/30 bg-gradient-to-r from-blue-500 to-purple-600  rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:bg-purple-400/30 group-hover:border-purple-400/50 transition-all duration-500">
                <div className="text-white text-2xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 text-center">
                {item.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-purple-700 cursor-pointer transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore All Resources
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyResources;