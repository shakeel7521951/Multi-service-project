import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaDirections } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            Visit us at our conveniently located store. We're here to welcome you with the best beauty experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
            <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                Store Information
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Our Address</h4>
                    <p className="text-slate-300 text-sm">
                      Dilawar, Colony<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <FaPhoneAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-300 text-sm">+92 012345678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-300 text-sm">hello@examplemail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gradient-to-r from-cyan-500 to-purple-500">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, gradient: "from-cyan-400 to-blue-500" },
                    { icon: FaInstagram, gradient: "from-cyan-400 to-purple-500" },
                    { icon: FaTwitter, gradient: "from-cyan-400 to-blue-400" },
                    { icon: FaLinkedinIn, gradient: "from-cyan-500 to-blue-600" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg relative overflow-hidden group`}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <social.icon className="text-sm relative z-10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Store Hours Card */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <h4 className="font-bold text-white mb-4">Store Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Mon - Fri</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Saturday</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Sunday</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/50 hover:border-slate-500/50 transition-all duration-300">
              {/* Map Header */}
              <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-b border-slate-700/50 flex justify-between items-center">
                <h3 className="text-sm md:text-xl font-semibold text-white flex items-center gap-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  Our Location
                </h3>
                <a
                  href="https://maps.google.com/?q=Wickenburggasse+1,+1080+Wien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <FaDirections className="relative z-10" />
                  <span className="relative z-10">Get Directions</span>
                </a>
              </div>

              {/* Google Map */}
              <div className="relative w-full h-96">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7348798801772!2d16.35163787672688!3d48.211722345995994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07956d1df595%3A0x6463d8612555dd77!2sWickenburggasse%201%2C%201080%20Wien!5e0!3m2!1sen!2sat!4v1750836942491!5m2!1sen!2sat"
                  allowFullScreen=""
                  loading="lazy"
                  title="Credo Beauty Vienna Location"
                ></iframe>
              </div>

              {/* Map Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-cyan-400 rounded-full opacity-20 animate-pulse" data-aos="zoom-in"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-bounce" data-aos="zoom-in" data-aos-delay="300"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse" data-aos="zoom-in" data-aos-delay="600"></div>
    </section>
  );
};

export default ContactMap;