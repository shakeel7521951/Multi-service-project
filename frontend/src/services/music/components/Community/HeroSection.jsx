import React, { useEffect } from "react";
import { FaHeart, FaComment, FaUpload, FaUserCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const posts = [
    {
      id: 1,
      user: "Ali Khan",
      title: "My Guitar Solo 🎸",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60",
      likes: 152,
      comments: 18,
    },
    {
      id: 2,
      user: "Sara Malik",
      title: "Vocal Warm-up Session 🎤",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=60",
      likes: 220,
      comments: 25,
    },
    {
      id: 3,
      user: "Rohit Sharma",
      title: "Remix Beat Experiment 🎧",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
      likes: 97,
      comments: 9,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADER SECTION */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Music Community
        </h1>
        <p className="text-slate-300 mt-4 text-lg">
          Share your performances, connect with other artists, and grow together.
        </p>
      </div>

      {/* UPLOAD SECTION */}
      <div
        className="bg-slate-800/80 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm mb-16"
        data-aos="zoom-in"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-5xl text-cyan-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">Upload your music</h3>
              <p className="text-slate-400 text-sm">
                Share your performance or recording with the community.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
            <FaUpload /> Upload Now
          </button>
        </div>
      </div>

      {/* POSTS FEED */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-slate-500/50 transition"
            data-aos="fade-up"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <FaUserCircle className="text-3xl text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{post.user}</h3>
              </div>
              <p className="text-slate-300 mb-4">{post.title}</p>
              <div className="flex justify-between items-center text-slate-400">
                <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition">
                  <FaHeart /> {post.likes}
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition">
                  <FaComment /> {post.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div
        className="mt-20 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">Be a Part of Our Music Family</h2>
        <p className="text-slate-300 mb-6">
          Upload your tracks, get feedback, and inspire others with your art.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Join the Community
        </button>
      </div>
    </div>
  );
}
