import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMusic,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function MusicFooter() {
  const links = [
    { name: "Home", path: "/music" },
    { name: "About", path: "/music/about" },
    { name: "Courses", path: "/music/courses" },
    { name: "Competitions", path: "/music/competitions" },
    { name: "Community", path: "/music/community" },
    { name: "Join Now", path: "/music/joinnow" },
  ];

  const resources = [
    { name: "Guitar Mastery", path: "/music/courses" },
    { name: "Drum Techniques", path: "/music/courses" },
    { name: "Vocal Training", path: "/music/courses" },
    { name: "Music Production", path: "/music/courses" },
    { name: "DJ Skills", path: "/music/courses" },
    { name: "Music Theory", path: "/music/courses" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900/80 to-slate-950 text-slate-300 border-t border-slate-800/50">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.08),transparent_60%)]"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-75"></div>
                <FaMusic className="relative text-white text-2xl p-2 bg-slate-900 rounded-full shadow-md" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                MusicStudents
              </span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Empowering music learners worldwide with top-tier courses,
              competitions, and a vibrant community of artists.
            </p>

            <div className="flex gap-4 mt-6">
              {[
                { icon: FaTwitter, gradient: "from-cyan-500 to-blue-500" },
                { icon: FaInstagram, gradient: "from-pink-500 to-purple-600" },
                { icon: FaFacebook, gradient: "from-blue-500 to-cyan-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative p-3 rounded-xl bg-gradient-to-r ${social.gradient} text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-cyan-500/30 overflow-hidden group`}
                >
                  <social.icon className="relative z-10 text-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" items={links} />

          {/* Resources */}
          <FooterColumn title="Resources" items={resources} />

          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="space-y-5">
              {[
                {
                  icon: FaEnvelope,
                  label: "Email",
                  value: "hello@musicstudents.com",
                  color: "cyan",
                },
                {
                  icon: FaPhone,
                  label: "Phones",
                  value: "+92 300 0000000",
                  color: "purple",
                },
                {
                  icon: FaMapMarkerAlt,
                  label: "Address",
                  value: "Music Street, Karachi, Pakistan",
                  color: "pink",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group transition-all duration-300"
                >
                  <div
                    className={`p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-${item.color}-500/50 transition-all duration-300`}
                  >
                    <item.icon
                      className={`text-${item.color}-400 transition-colors duration-300`}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">{item.label}</p>
                    <p
                      className={`text-white group-hover:text-${item.color}-400 transition-colors duration-300`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/50 shadow-inner">
              <p className="text-white font-semibold mb-2">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-slate-800 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
                <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-cyan-500/30">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-300">
          <span>© {new Date().getFullYear()} MusicStudents. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-slate-300 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Subcomponents for cleaner structure */
function FooterHeading({ children }) {
  return (
    <h4 className="text-white text-xl font-bold mb-6 relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
    </h4>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-3">
        {items.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              className="flex items-center gap-2 text-slate-300 hover:text-white group transition-all duration-300 hover:translate-x-2"
            >
              <FaArrowRight className="text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
