import React from "react";
import { FaUserGraduate, FaClipboardList, FaGlobe, FaStar } from "react-icons/fa"; 

const stats = [
    { number: "15K+", label: "Active Students", icon: <FaUserGraduate size={28} />, aos: "fade-up", delay: 0 },
    { number: "500+", label: "Courses & Topics", icon: <FaClipboardList size={28} />, aos: "fade-up", delay: 150 },
    { number: "9.2/10", label: "Satisfaction Score", icon: <FaStar size={28} />, aos: "fade-up", delay: 300 },
    { number: "24/7", label: "Platform Access", icon: <FaGlobe size={28} />, aos: "fade-up", delay: 450 },
];

const StatsCTASection = () => (
  <section 
    className="relative py-14 overflow-hidden bg-cover bg-fixed bg-center"
    style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi1tF1E5PViJ26hoZkaw7b76IrLM9LMUiCQnChA4ZD-vhLFi9p1jcQqApO041eWVlzOE&usqp=CAU')" }}
    id="stats-cta"
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#2D1B50]/30 backdrop-blur-sm "></div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
      
      {/* Header */}
      <div data-aos="fade-down" className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          The Numbers Speak for Themselves
        </h2>
        <p className="text-lg text-gray-300">
          Join thousands of successful students achieving their academic goals with SmartStudy.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            data-aos={stat.aos}
            data-aos-delay={stat.delay}
            className="flex flex-col items-center p-3 transition-transform duration-300 hover:scale-105 rounded-2xl bg-white/10"
          >
            {/* Icon */}
            <div className="mb-2 text-3xl text-cyan-400 transition-colors duration-300 group-hover:text-purple-400">
                {stat.icon}
            </div>

            {/* Number */}
            <p className="text-4xl sm:text-5xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {stat.number}
            </p>

            {/* Label */}
            <h3 className="text-base font-semibold uppercase tracking-wide text-gray-200">
              {stat.label}
            </h3>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div data-aos="fade-up" data-aos-delay="400" className="mt-12">
        <a 
          href="#register" 
          className="inline-flex items-center justify-center px-5 py-2 text-lg font-semibold rounded-full text-white 
                     bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/40 
                     hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Start Your Free Trial &rarr;
        </a>
      </div>

    </div>
  </section>
);

export default StatsCTASection;
