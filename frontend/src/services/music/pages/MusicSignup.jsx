import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaUserPlus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MusicSignup() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Welcome to MusicStudents, ${formData.name}! 🎶`);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-20">
      <div
        className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-8 md:p-10 w-full max-w-md backdrop-blur-sm shadow-lg"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Create an Account 🎵
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Join the MusicStudents family and start your musical journey!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-slate-300 mb-2">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-300 mb-2">Email Address</label>
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

          {/* Password */}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-slate-300 mb-2">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-slate-400" />
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition"
          >
            <FaUserPlus /> Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <div className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
