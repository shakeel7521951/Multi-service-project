import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MusicLogin() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${formData.email}! 🎶`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-20">
      <div
        className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-8 md:p-10 w-full max-w-md backdrop-blur-sm shadow-lg"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Welcome Back 🎵
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Log in to your MusicStudents account
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-slate-300 mb-2">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-slate-400" />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-500" />
              Remember me
            </label>
            <a href="#" className="hover:text-cyan-400 transition">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition"
          >
            <FaSignInAlt /> Log In
          </button>
        </form>

        <div className="text-center text-slate-400 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
