import React, { useEffect } from "react";
import { FaTrophy, FaCalendarAlt, FaUsers, FaMusic } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const upcoming = [
    {
      title: "Solo Singing Challenge",
      date: "Nov 25, 2025",
      participants: 120,
      prize: "Cash + Trophy",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Online Band Battle",
      date: "Dec 10, 2025",
      participants: 80,
      prize: "Studio Recording Deal",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Digital Composition Contest",
      date: "Jan 5, 2026",
      participants: 60,
      prize: "Music Gear Pack",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const past = [
    {
      title: "Summer Talent Show 2025",
      winner: "Aisha Malik",
      prize: "Scholarship + Certificate",
    },
    {
      title: "Global Guitar Fest",
      winner: "Rohit Sharma",
      prize: "Recording Studio Session",
    },
    {
      title: "Virtual Piano Challenge",
      winner: "Sara Khan",
      prize: "Digital Keyboard",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* PAGE HEADER */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Music Competitions
        </h1>
        <p className="text-slate-300 mt-4 text-lg">
          Participate in thrilling online music events and showcase your talent to the world.
        </p>
      </div>

      {/* UPCOMING COMPETITIONS */}
      <section className="mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">🎤 Upcoming Competitions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {upcoming.map((comp, i) => (
            <div
              key={i}
              className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-slate-500/50 transition"
              data-aos="zoom-in"
            >
              <img
                src={comp.image}
                alt={comp.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{comp.title}</h3>
                <div className="flex justify-between text-slate-300 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> {comp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers /> {comp.participants} Participants
                  </div>
                </div>
                <p className="text-slate-400 mb-4">🏆 Prize: {comp.prize}</p>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAST COMPETITIONS */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">🏅 Past Competitions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {past.map((p, i) => (
            <div
              key={i}
              className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-500/50 transition"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaMusic className="text-cyan-400 text-xl" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="text-slate-300 text-sm mb-2">
                🥇 Winner: <span className="text-white font-medium">{p.winner}</span>
              </p>
              <p className="text-slate-400 text-sm">Prize: {p.prize}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div
        className="mt-20 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Compete and Show Your Talent?
        </h2>
        <p className="text-slate-300 mb-6">
          Register today and perform in front of thousands of music enthusiasts.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Join a Competition
        </button>
      </div>
    </div>
  );
}
