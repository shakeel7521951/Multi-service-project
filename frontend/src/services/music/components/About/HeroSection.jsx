import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMusic, FaUsers, FaBullseye } from "react-icons/fa";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const team = [
    {
      name: "Ali Khan",
      role: "Founder & Vocal Coach",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Sara Malik",
      role: "Music Producer",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Rohit Sharma",
      role: "Instrumental Trainer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADER SECTION */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          About MusicStudents
        </h1>
        <p className="text-slate-300 mt-4 text-lg">
          Empowering students to learn, perform, and grow through the art of music.
        </p>
      </div>

      {/* MISSION & VISION SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=60"
            alt="About us"
            className="rounded-2xl shadow-lg border border-slate-700/50"
          />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-300 mb-4">
            MusicStudents is an online platform designed to bring together learners and artists
            from around the world. We aim to make music education accessible, interactive,
            and inspiring for everyone.
          </p>
          <p className="text-slate-300 mb-6">
            Whether you’re just starting out or already performing, our mentors and community
            help you refine your craft, showcase your talent, and connect with others.
          </p>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
            Join Our Journey
          </button>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm text-center hover:border-slate-500/50 transition">
            <FaMusic className="text-4xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-slate-300 text-sm">
              We celebrate originality and artistic freedom in every student’s journey.
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm text-center hover:border-slate-500/50 transition">
            <FaUsers className="text-4xl text-purple-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-slate-300 text-sm">
              A supportive network of musicians learning and growing together.
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm text-center hover:border-slate-500/50 transition">
            <FaBullseye className="text-4xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-slate-300 text-sm">
              We aim to provide world-class guidance and tools for every musician.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm text-center hover:border-slate-500/50 transition"
              data-aos="zoom-in"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-cyan-500/30"
              />
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-slate-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div
        className="mt-20 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">Join the Music Revolution 🎵</h2>
        <p className="text-slate-300 mb-6">
          Become part of a global movement that’s transforming how music is learned and shared.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
