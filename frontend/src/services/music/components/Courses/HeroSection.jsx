import React, { useEffect, useState } from "react";
import { FaSearch, FaClock, FaPlayCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

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
  ];

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* HEADER SECTION */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Explore Our Music Courses
        </h1>
        <p className="text-slate-300 mt-4 text-lg">
          Learn from expert tutors and take your music skills to the next level.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-xl mx-auto mb-12" data-aos="fade-up">
        <div className="relative">
          <FaSearch className="absolute top-3 left-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-slate-500/50 transition"
            data-aos="zoom-in"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{course.level}</p>
              <div className="flex justify-between items-center text-slate-300 mb-4">
                <div className="flex items-center gap-2">
                  <FaClock /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <FaPlayCircle /> Lessons
                </div>
              </div>
              <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <div className="col-span-3 text-center text-slate-400" data-aos="fade-up">
            No courses found.
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <div
        className="mt-16 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your musical journey?
        </h2>
        <p className="text-slate-300 mb-6">
          Choose your course and begin learning from top mentors today.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </div>
    </div>
  );
}

