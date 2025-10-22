import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaMusic, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function MusicFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-300 border-t border-slate-700/50 ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-75"></div>
                <FaMusic className="relative text-white text-2xl p-2 bg-slate-800 rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                MusicStudents
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Empowering music students worldwide through innovative learning, competitions, and community connection.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: FaTwitter, gradient: "from-cyan-500 to-blue-500" },
                { icon: FaInstagram, gradient: "from-cyan-500 to-purple-600" },
                { icon: FaFacebook, gradient: "from-cyan-500 to-purple-600" }
              ].map((social, index) => (
                <a 
                  key={index}
                  className={`p-3 rounded-xl bg-gradient-to-r ${social.gradient} text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group`}
                  href="#"
                >
                  <social.icon className="text-lg relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {["Home", "Courses", "Competitions", "Community", "About", "Contact"].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-slate-400 hover:text-white group transition-all duration-300 hover:translate-x-2"
                  >
                    <FaArrowRight className="text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-xl font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {["Blog", "Tutorials", "Webinars", "E-books", "Sheet Music", "Instruments"].map((resource, index) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-slate-400 hover:text-white group transition-all duration-300 hover:translate-x-2"
                  >
                    <FaArrowRight className="text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">hello@musicstudents.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <FaPhone className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white group-hover:text-purple-400 transition-colors duration-300">+92 300 0000000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-pink-500/50 transition-all duration-300">
                  <FaMapMarkerAlt className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Address</p>
                  <p className="text-white group-hover:text-pink-400 transition-colors duration-300">Music Street, Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
              <p className="text-white font-semibold mb-2">Stay Updated</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
                <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} MusicStudents. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-ping"></div>
    </footer>
  );
}