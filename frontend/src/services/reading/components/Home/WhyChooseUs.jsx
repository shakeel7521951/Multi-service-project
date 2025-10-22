import React from "react";
import { FaChalkboardTeacher, FaClock, FaBook, FaUserGraduate } from "react-icons/fa";

const features = [
  { title: "Expert Tutors", desc: "Learn from experienced professionals who guide you every step.", icon: <FaChalkboardTeacher size={28} />, aos: "fade-up-right" },
  { title: "Flexible Learning", desc: "Access resources anytime, anywhere on any device.", icon: <FaClock size={28} />, aos: "fade-up" },
  { title: "Comprehensive Materials", desc: "Notes, PDFs, past papers, and study plans in one place.", icon: <FaBook size={28} />, aos: "fade-up" },
  { title: "Student-Centered", desc: "Everything designed to help you succeed academically.", icon: <FaUserGraduate size={28} />, aos: "fade-up-left" },
];

const WhyChooseUs = () => {
  return (
    // Switched to a solid dark background for contrast with other gradient sections
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden" id="why-us">
      
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Section Header with Gradient Text */}
        <div data-aos="fade-down" className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose SmartStudy?
            </h2>
            <p className="text-xl text-gray-400">
                Unlock your potential with key features built for modern academic excellence.
            </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <div
              key={i}
              data-aos={item.aos}
              data-aos-delay={i * 150}
              // Card Styling: Dark, glass effect, border, strong hover shadow
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 duration-500 z-10"
            >
              
              {/* Icon Container - Vibrant Gradient */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center 
                          text-white 
                          bg-gradient-to-r from-indigo-500 to-purple-500 
                          shadow-xl shadow-indigo-500/30 
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-500/50"
              >
                {item.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-white group-hover:bg-clip-text transition-colors duration-300">
                {item.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Animated Accent Line */}
              <div 
                className="mt-6 h-1 w-0 mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 
                           transition-all duration-500 group-hover:w-1/2"
              ></div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;