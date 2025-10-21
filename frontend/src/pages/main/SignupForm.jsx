import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaCrown, FaCheck } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi';
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-8 md:px-12 lg:px-16  py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c57?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Luxury Card */}
      <div 
        className="w-full max-w-xl bg-slate-800/80 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-slate-700/50 relative z-10"
        data-aos="zoom-in"
      >
        
        {/* Elegant Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 py-8 px-6 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>
          
          <div className="relative z-10">
            <FaCrown className="mx-auto text-white mb-3 text-2xl" />
            <h1 className="text-white font-serif text-3xl font-bold" data-aos="fade-down">
              Join Our Community
            </h1>
            <p className="text-slate-300 mt-2 font-light" data-aos="fade-up" data-aos-delay="200">
              Create your account
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-3 md:p-8 pt-10 md:pt-8">
          {/* Full Name Field */}
          <div className="mb-6" data-aos="fade-right" data-aos-delay="300">
            <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Full Name
            </label>
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300" size={18} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-slate-500/50"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6" data-aos="fade-left" data-aos-delay="400">
            <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-slate-500/50"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6" data-aos="fade-right" data-aos-delay="500">
            <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-slate-500/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6" data-aos="fade-left" data-aos-delay="600">
            <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Confirm Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300" size={18} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-slate-500/50"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="700">
            <label className="flex items-start text-slate-300 text-sm cursor-pointer">
              <input 
                type="checkbox" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mr-3 mt-1 w-4 h-4 text-cyan-500 bg-slate-700/50 border-slate-600/50 rounded focus:ring-cyan-500 focus:ring-2" 
              />
              <span>
                I agree to the{" "}
                <Link to="/termsconditions" className="text-cyan-400 hover:text-cyan-300 underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacypolicy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          {/* Signup Button */}
          <button 
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            data-aos="zoom-in" 
            data-aos-delay="800"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <FiLogIn className="text-lg relative z-10" />
            <span className="relative z-10">Sign Up</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6" data-aos="fade-in" data-aos-delay="900">
            <div className="flex-grow border-t border-slate-700/50"></div>
            <span className="mx-4 text-slate-300 text-sm">Or sign up with</span>
            <div className="flex-grow border-t border-slate-700/50"></div>
          </div>

          {/* Social Signup Options */}
          <div className="grid grid-cols-2 gap-4 mb-8" data-aos="fade-up" data-aos-delay="1000">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-700/50 rounded-xl text-white hover:border-cyan-400 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              <FaUser className="text-sm" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-700/50 rounded-xl text-white hover:border-blue-400 transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              <FaUser className="text-sm" />
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center" data-aos="fade-in" data-aos-delay="1100">
            <span className="text-slate-300">Already have an account? </span>
            <Link to="/loginform"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-ping"></div>
    </div>
  );
}