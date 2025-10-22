import React, { useEffect } from "react";
import { FaMusic, FaAward, FaUserGraduate } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <FaMusic />,
      title: "Learn Music",
      desc: "Join structured courses designed by top musicians and certified tutors.",
    },
    {
      icon: <FaAward />,
      title: "Compete & Win",
      desc: "Take part in online music competitions and showcase your talent globally.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Connect with Mentors",
      desc: "Book live sessions with professional tutors for feedback and coaching.",
    },
  ];

  const courses = [
    { title: "Vocal Training - Beginner", duration: "6 Weeks" },
    { title: "Guitar Chords & Rhythm", duration: "5 Weeks" },
    { title: "Music Production Basics", duration: "8 Weeks" },
  ];

  const competitions = [
    { title: "Solo Singing Challenge", date: "Nov 25, 2025", prize: "Cash + Trophy" },
    { title: "Online Band Battle", date: "Dec 10, 2025", prize: "Studio Recording" },
  ];

  return (
    <div className="pt-10">
      {/* HERO SECTION */}
      <section
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Discover, Learn & Compete in Music
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            Join MusicStudents — an online platform for music learners and performers.
            Practice, upload, and participate in live competitions.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md hover:scale-105 transition">
              Join Now
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-700/50 text-slate-300 hover:text-white">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400 blur-3xl opacity-20 rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="music hero"
            className="relative rounded-2xl shadow-lg border border-slate-700/50"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join MusicStudents?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-500/50 transition"
            >
              <div className="p-3 text-3xl bg-cyan-400/10 border border-slate-700/40 rounded-lg inline-block mb-3">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-500/50 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-slate-300 text-sm mb-4">Duration: {course.duration}</p>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING COMPETITIONS */}
      <section className="max-w-7xl mx-auto px-6 py-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Competitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-500/50 transition flex justify-between items-center"
              data-aos="fade-right"
            >
              <div>
                <h3 className="text-lg font-semibold">{comp.title}</h3>
                <p className="text-slate-300 text-sm">
                  {comp.date} • Prize: {comp.prize}
                </p>
              </div>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="max-w-5xl mx-auto px-6 py-16 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your musical journey?
        </h2>
        <p className="text-slate-300 mb-6">
          Learn from the best, compete in events, and grow with our music community.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold">
          Join MusicStudents Now
        </button>
      </section>
    </div>
  );
}

