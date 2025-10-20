import React from 'react';
import { FaChevronDown, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
if (typeof window !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

export default function HeroContact() {
  return (
    <section className="relative overflow-hidden w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 pt-0 md:pt-0">
        {/* Badge */}
        <div
          className="hidden md:flex mb-8 px-4 py-2 rounded-full border border-cyan-400 bg-slate-800/60 backdrop-blur-sm"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="text-cyan-400 text-sm font-medium">We'd Love to Hear from You</span>
        </div>

        {/* Heading */}
        <h1
          className="text-white text-3xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-8 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
           We're Here for {" "}
          
           <span
            className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
                Every Creative Mind
</span>
        </h1>

        {/* Description */}
        <p
          className="text-sm xs:text-base sm:text-lg md:text-xl max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mb-6 xs:mb-8 leading-relaxed text-slate-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
           Whether you’re a student sharpening your focus, a reader exploring new stories, 
    a music lover tuning into calm vibes, or a gamer seeking mindful fun — 
    we’d love to hear your thoughts, suggestions, and ideas.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col sm:flex-row justify-center items-center gap-3 xs:gap-4 mb-6 xs:mb-8 w-full xs:w-auto"
        >
          <a
            href="tel:+92 012345678"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 xs:px-8 py-3 xs:py-4 rounded-xl xs:rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-xl xs:shadow-2xl hover:shadow-cyan-500/25 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaPhoneAlt className="group-hover:scale-110 transition-transform" />
              Call Us
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          <a
            href="mailto:hello@examplemail.com"
            className="border-2 border-slate-400/30 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-xl xs:rounded-2xl hover:bg-white/10 hover:border-slate-200/50 font-semibold transition-all duration-500 transform hover:scale-105 group w-full sm:w-auto text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <FaEnvelope className="group-hover:scale-110 transition-transform" />
              Email Us
            </span>
          </a>
        </div>

        {/* Contact Features */}
        <div
          className="hidden md:flex flex-wrap justify-center gap-4 xs:gap-6 mt-3 px-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {[
            { icon: FaMapMarkerAlt, text: 'Find a Store Near You' },
            { icon: FaPhoneAlt, text: 'Talk to Our Support Team' },
            { icon: FaEnvelope, text: '24/7 Email Assistance' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 xs:px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white text-sm" />
              </div>
              <span className="text-xs xs:text-sm font-medium text-slate-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="1500"
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center animate-bounce">
          <FaChevronDown size={20} className="text-cyan-400" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.8) 0%, transparent 100%)'
        }}
      />
    </section>
  );
}