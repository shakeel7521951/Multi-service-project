import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMusic,
  FaGuitar,
  FaDrum,
  FaMicrophone,
  FaHeadphones,
  FaRecordVinyl,
  FaArrowRight,
} from "react-icons/fa";

const CoursesProvide = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const courses = [
    {
      icon: <FaGuitar className="text-2xl" />,
      title: "Guitar Mastery",
      description: "Learn from basic chords to advanced solos",
    },
    {
      icon: <FaDrum className="text-2xl" />,
      title: "Drum Techniques",
      description: "Master rhythm and complex patterns",
    },
    {
      icon: <FaMicrophone className="text-2xl" />,
      title: "Vocal Training",
      description: "Develop your unique singing voice",
    },
    {
      icon: <FaHeadphones className="text-2xl" />,
      title: "Music Production",
      description: "Create professional quality tracks",
    },
    {
      icon: <FaRecordVinyl className="text-2xl" />,
      title: "DJ Skills",
      description: "Learn mixing and mastering",
    },
    {
      icon: <FaMusic className="text-2xl" />,
      title: "Music Theory",
      description: "Understand the language of music",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-3 md:px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          data-aos="fade-down"
        >
          Explore Our Music Courses
        </h2>
        <p
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you're a beginner or a professional, our expert-led courses
          help you refine your skills and master the art of music.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {courses.map((course, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 
      hover:border-slate-500/50 hover:scale-105 transition-all duration-500 shadow-lg group
      flex flex-col items-center sm:items-start text-center sm:text-left"
    >
      {/* ICON */}
      <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {course.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {course.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-slate-300 mb-4 leading-relaxed">
        {course.description}
      </p>

      {/* BUTTON WITH SHINE EFFECT */}
      <button
        className="relative inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-2 rounded-full 
        bg-gradient-to-r from-cyan-500 to-purple-600 overflow-hidden 
        transition-all duration-300 group-hover:scale-105 w-full sm:w-auto"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Learn More
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-sm animate-pulse transition-opacity duration-500"></span>
      </button>
    </div>
  ))}
</div>


      {/* Accent Divider */}
      <div
        className="hidden md:flex mt-20 h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
        data-aos="fade-up"
      ></div>
    </section>
  );
};

export default CoursesProvide;
