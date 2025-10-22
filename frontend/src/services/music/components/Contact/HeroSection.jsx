import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! 🎵");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Contact Us
        </h1>
        <p className="text-slate-300 mt-4 text-lg">
          Have questions, feedback, or collaboration ideas? We’d love to hear from you!
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/80 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <div className="mb-4">
            <label className="block text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-8" data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-slate-400 text-sm">support@musicstudents.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-slate-400 text-sm">+92 300 1234567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-slate-400 text-sm">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div
        className="mt-20 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Make Music Happen Together 🎵
        </h2>
        <p className="text-slate-300 mb-6">
          Get in touch with our team for collaborations, courses, or event participation.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Contact Our Team
        </button>
      </div>
    </div>
  );
}