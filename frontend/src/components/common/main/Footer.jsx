import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaHeart,
  FaLinkedinIn,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-300 pt-12 md:pt-20 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-ping"></div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Logo / About */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Tab Creative Studio
          </h2>
          <p className="mb-6 text-sm leading-relaxed opacity-80">
            Your creative hub for music, production, and content creation. We
            empower artists and brands to bring their ideas to life with
            high-quality production spaces and professional support.
          </p>

          <div className="flex space-x-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,].map((Icon, i) => {
              const isEven = (i + 1) % 2 === 0;

              return (
                <a
                  key={i}
                  href="#"
                  className="group relative w-10 h-10 border border-slate-700 flex items-center justify-center rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110"
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 100}
                >
                  {/* Background overlay animation */}
                  <span
                    className={`absolute inset-0 ${
                      isEven
                        ? "bg-gradient-to-b from-cyan-500 to-purple-600 -translate-y-full group-hover:translate-y-0"
                        : "bg-gradient-to-t from-cyan-500 to-purple-600 translate-y-full group-hover:translate-y-0"
                    } transition-transform duration-500 ease-in-out`}
                  ></span>

                  {/* Icon */}
                  <Icon className="relative text-white text-sm transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
  {[
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
  ].map((item, i) => (
    <li key={i} data-aos="fade-right" data-aos-delay={300 + i * 100}>
      <Link
        to={item.path}
        className="group flex items-center gap-3 transition-all duration-500 hover:translate-x-2"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <FaChevronRight className="text-white text-xs group-hover:rotate-90 transition-all duration-300" />
        </div>
        <span className="relative text-slate-300 group-hover:text-white font-medium">
          {item.name}
          {/* Underline animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
        </span>
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
          <ul className="space-y-4 text-sm">
  {[
    { name: "Recording Studio", path: "/recording-studio" },
    { name: "Theatre Room", path: "/theatre-room" },
    { name: "Workshop Space", path: "/workshop-space" },
    { name: "Photoshoot Studio", path: "/photoshoot-studio" },
    { name: "Event Hosting", path: "/event-hosting" },
  ].map((service, i) => (
    <li key={i} data-aos="fade-right" data-aos-delay={400 + i * 100}>
      <Link
        to={service.path}
        className="group flex items-center gap-3 transition-all duration-500 hover:translate-x-2"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <FaChevronRight className="text-white text-xs group-hover:rotate-90 transition-all duration-300" />
        </div>
        <span className="relative text-slate-300 group-hover:text-white font-medium">
          {service.name}
          {/* Underline animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
        </span>
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Contact + Newsletter */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm mb-6">
            {/* Location */}
            <li data-aos="fade-left" data-aos-delay="500">
              <div className="flex items-start gap-3 group transition-all duration-500">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-all duration-300 pt-1">
                  Pakistan
                </span>
              </div>
            </li>

            {/* Phone */}
            <li data-aos="fade-left" data-aos-delay="550">
              <div className="flex items-start gap-3 group transition-all duration-500">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <a
                  href="tel:+92023456789"
                  className="text-slate-300 group-hover:text-white transition-all duration-300 pt-1 relative"
                >
                  +92 023456789
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              </div>
            </li>

            {/* Email */}
            <li data-aos="fade-left" data-aos-delay="600">
              <div className="flex items-start gap-3 group transition-all duration-500">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <a
                  href="mailto:bhattirajput333@gmail.com"
                  className="text-slate-300 group-hover:text-white transition-all duration-300 pt-1 relative"
                >
                  bhattirajput333@gmail.com
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              </div>
            </li>
          </ul>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="650">
            <p className="text-sm mb-4 opacity-80">
              Subscribe for updates and new offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed successfully!");
              }}
              className="flex group"
            >
              <input
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 p-3 text-sm border border-slate-700 rounded-l-2xl bg-slate-800/50 backdrop-blur-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-r-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-cyan-500/25"
              >
                <FaPaperPlane className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div 
        className="p-3 not-only:md:p-0 mt-16 pt-6 border-t border-slate-700/70 text-center text-sm opacity-70 relative z-10"
      >
        © 2024 Tab Creative Studio | Designed with{" "}
        <FaHeart className="inline text-pink-500 mx-1 animate-pulse" /> by Your Team
      </div>
    </footer>
  );
};

export default Footer;