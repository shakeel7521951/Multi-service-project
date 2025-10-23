import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaUserPlus, FaMusic, FaGuitar, FaHeadphones, FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Calculate password strength
    if (name === "password") {
      let strength = 0;
      if (value.length >= 8) strength += 25;
      if (/[A-Z]/.test(value)) strength += 25;
      if (/[0-9]/.test(value)) strength += 25;
      if (/[^A-Za-z0-9]/.test(value)) strength += 25;
      setPasswordStrength(strength);
    }
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

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-orange-500";
    if (passwordStrength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-3 md:px-6 py-20 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse" data-aos="zoom-in"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-bounce" data-aos="zoom-in" data-aos-delay="300"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse" data-aos="zoom-in" data-aos-delay="600"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-20 animate-ping" data-aos="zoom-in" data-aos-delay="900"></div>

      {/* Floating Music Icons */}
      <div className="absolute top-32 left-32 text-cyan-400/20 text-4xl" data-aos="fade-down-right">
        <FaMusic />
      </div>
      <div className="absolute top-1/4 right-40 text-purple-400/20 text-3xl" data-aos="fade-down-left">
        <FaGuitar />
      </div>
      <div className="absolute bottom-40 left-40 text-pink-400/20 text-5xl" data-aos="fade-up-right">
        <FaHeadphones />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div
        className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl mt-8 p-5 md:p-10 w-full max-w-2xl shadow-2xl hover:border-slate-500/50 transition-all duration-500 relative z-10"
        data-aos="zoom-in"
      >
        {/* Header Section */}
        <div className="text-center mb-8" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <FaUserPlus className="text-purple-400 text-sm" />
            <span className="text-purple-400 text-sm font-semibold">Join Our Community</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
            Create Account 🎵
          </h1>
          <p className="text-slate-300 text-lg">
            Start your musical journey today
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div data-aos="fade-right" data-aos-delay="200">
            <label className="block text-slate-300 mb-3 font-medium">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-slate-400 text-lg" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div data-aos="fade-left" data-aos-delay="300">
            <label className="block text-slate-300 mb-3 font-medium">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-slate-400 text-lg" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div data-aos="fade-right" data-aos-delay="400">
            <label className="block text-slate-300 mb-3 font-medium">Password</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-slate-400 text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300 focus:border-cyan-500/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            {/* Password Strength Meter */}
            {formData.password && (
              <div className="mt-3" data-aos="fade-up" data-aos-delay="450">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Password strength</span>
                  <span>{passwordStrength}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                    style={{ width: `${passwordStrength}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Input */}
          <div data-aos="fade-left" data-aos-delay="500">
            <label className="block text-slate-300 mb-3 font-medium">Confirm Password</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-slate-400 text-lg" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-300 focus:border-cyan-500/50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            {/* Password Match Indicator */}
            {formData.confirmPassword && (
              <div className="mt-2 flex items-center gap-2" data-aos="fade-up" data-aos-delay="550">
                {formData.password === formData.confirmPassword ? (
                  <>
                    <FaCheck className="text-green-400 text-sm" />
                    <span className="text-green-400 text-sm">Passwords match</span>
                  </>
                ) : (
                  <span className="text-red-400 text-sm">Passwords do not match</span>
                )}
              </div>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start gap-3 text-sm" data-aos="fade-up" data-aos-delay="600">
            <input 
              type="checkbox" 
              required
              className="w-5 h-5 rounded bg-slate-700/50 border border-slate-600/50 text-cyan-500 focus:ring-cyan-500 focus:ring-2 mt-1 flex-shrink-0"
            />
            <label className="text-slate-300 leading-relaxed">
              I agree to the <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Privacy Policy</a>
            </label>
          </div>

          {/* Sign Up Button */}
          <div data-aos="zoom-in" data-aos-delay="700">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group shadow-2xl"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <FaUserPlus className="relative text-xl group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Create Your Account</span>
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8" data-aos="fade-up" data-aos-delay="800"></div>

        {/* Login Link */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="900">
          <p className="text-slate-300 mb-4">
            Already have an account?
          </p>
          <Link
            to="/music/login" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <FaUser className="group-hover:scale-110 transition-transform duration-300" />
            <span>Sign In Instead</span>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}