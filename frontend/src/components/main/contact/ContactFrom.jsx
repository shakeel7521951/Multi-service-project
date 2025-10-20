import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactFrom() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-12 xs:py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 xs:w-52 xs:h-52 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-44 h-44 xs:w-64 xs:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 xs:w-48 xs:h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping"></div>

      <div className="relative container mx-auto px-3 xs:px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-start z-10">
        {/* Left Side: Contact Info */}
        <div data-aos="fade-right">
          <div className="mb-6 xs:mb-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-white">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-16 xs:w-20 h-0.5 xs:h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4 xs:mb-6"></div>
            <p className="text-sm xs:text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions or ready to book? Reach out to us anytime — we're happy to help you find your perfect beauty essentials.
            </p>
          </div>

          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            {/* Contact Items with Enhanced Design */}
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                content: "Dilawar, Colony, Pakistan",
                delay: 100
              },
              {
                icon: FaPhoneAlt,
                title: "Phone",
                content: "+92 012345678",
                delay: 200
              },
              {
                icon: FaEnvelope,
                title: "Email",
                content: "hello@examplemail.com",
                delay: 300
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-2xl p-3 xs:p-4 hover:border-slate-500/50 transition-all duration-500 group-hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 xs:p-3 rounded-lg xs:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white text-sm xs:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base xs:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm xs:text-base">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-8 xs:mt-10 sm:mt-12">
            <h4 className="text-white font-semibold mb-3 xs:mb-4 text-center lg:text-left">Follow Us</h4>
            <div className="flex justify-center lg:justify-start space-x-2 xs:space-x-3">
              {[
                { icon: FaFacebookF, href: "#", gradient: "from-cyan-500 to-blue-600" },
                { icon: FaInstagram, href: "#", gradient: "from-purple-500 to-pink-600" },
                { icon: FaTwitter, href: "#", gradient: "from-cyan-400 to-blue-500" },
                { icon: FaLinkedinIn, href: "#", gradient: "from-cyan-600 to-blue-700" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`group relative w-10 h-10 xs:w-12 xs:h-12 rounded-xl xs:rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white transition-all duration-500 transform hover:scale-110 border border-slate-700/50 hover:border-slate-500/50`}
                >
                  <item.icon className="text-sm xs:text-lg group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Enhanced Contact Form */}
        <div
          className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 shadow-2xl"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="text-center mb-6 xs:mb-8">
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4">
              <FaPaperPlane className="text-white text-lg xs:text-xl sm:text-2xl" />
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">
              Send Us a Message
            </h3>
            <p className="text-slate-300 text-xs xs:text-sm sm:text-base mt-1 xs:mt-2">We'll get back to you soon</p>
          </div>
          
          <form className="space-y-4 xs:space-y-5 sm:space-y-6">
            {[
              { label: "Your Name", type: "text", id: "name", placeholder: "Enter your name" },
              { label: "Email Address", type: "email", id: "email", placeholder: "Enter your email" },
            ].map((field, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={300 + index * 100}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-slate-300 mb-1 xs:mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full px-3 xs:px-4 py-3 xs:py-4 rounded-lg xs:rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            
            <div data-aos="fade-up" data-aos-delay="500">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-1 xs:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 xs:px-4 py-3 xs:py-4 rounded-lg xs:rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="600"
              className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 xs:py-4 px-6 rounded-lg xs:rounded-xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="group-hover:scale-110 transition-transform" />
              Send Message
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-4 xs:top-10 left-4 xs:left-10 w-3 h-3 xs:w-4 xs:h-4 bg-cyan-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 xs:bottom-20 right-10 xs:right-20 w-4 h-4 xs:w-6 xs:h-6 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 xs:w-3 xs:h-3 bg-pink-400 rounded-full opacity-40 animate-ping"></div>
    </section>
  );
}