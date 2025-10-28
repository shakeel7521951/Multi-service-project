import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaClock, FaPlayCircle, FaAward } from "react-icons/fa";

const CoursesCards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const courses = [
    {
      id: 1,
      title: "Vocal Training - Beginner",
      level: "Beginner",
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Guitar Chords & Rhythm",
      level: "Intermediate",
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Music Production Basics",
      level: "Beginner",
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Advanced Piano Skills",
      level: "Advanced",
      duration: "10 Weeks",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: "Digital Music Composition",
      level: "Intermediate",
      duration: "7 Weeks",
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      title: "Electronic Music Production",
      level: "Intermediate",
      duration: "9 Weeks",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      title: "Acoustic Guitar Masterclass",
      level: "Advanced",
      duration: "12 Weeks",
      image:
        "https://images.unsplash.com/photo-1529625051060-0bcd6c6e7a8f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      title: "Songwriting & Composition",
      level: "Beginner",
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 9,
      title: "Mixing & Mastering Essentials",
      level: "Intermediate",
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      title: "Live Performance Techniques",
      level: "Advanced",
      duration: "10 Weeks",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 11,
      title: "Piano for Beginners",
      level: "Beginner",
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 12,
      title: "DJ Mixing & Live Set Design",
      level: "Intermediate",
      duration: "9 Weeks",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-3 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Find Your Perfect Course
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our wide range of expertly designed courses for every
            musician — from beginner to pro.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-16" data-aos="fade-up">
          <div className="relative">
            <FaSearch className="absolute top-3.5 left-4 text-slate-400 text-lg" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-slate-500/50 hover:scale-105 transition-all duration-500 group shadow-lg relative"
            >
              {/* BADGE */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <FaAward className="text-yellow-300" />
                {course.level}
              </div>

              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 capitalize">
                  {course.level} • {course.duration}
                </p>

                <div className="flex justify-between items-center text-slate-300 text-sm mb-5">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-cyan-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPlayCircle className="text-purple-400" /> Lessons
                  </div>
                </div>

                {/* ENROLL BUTTON WITH SHINE EFFECT */}
               <div className="w-full sm:w-auto" data-aos="fade-right">
      <Link
        to="/music/joinnow"
        className="relative block w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03] group"
      >
        {/* Text Layer */}
        <span className="relative z-10">Enroll Now</span>

        {/* Inner Glow */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>

        {/* Outer Blur Glow */}
        <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></span>
      </Link>
    </div>
              </div>
            </div>
          ))}

          {filteredCourses.length === 0 && (
            <div
              className="col-span-3 text-center text-slate-400 py-10"
              data-aos="fade-up"
            >
              No courses found.
            </div>
          )}
        </div>

        {/* ACCENT DIVIDER */}
        <div
          className="hidden md:flex mt-20 h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          data-aos="fade-up"
        ></div>
      </div>
    </section>
  );
};

export default CoursesCards;
