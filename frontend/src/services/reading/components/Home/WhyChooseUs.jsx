import React from "react";
import { FaChalkboardTeacher, FaClock, FaBook, FaUserGraduate } from "react-icons/fa";

const features = [
  { title: "Expert Tutors", desc: "Learn from experienced professionals who guide you every step.", icon: <FaChalkboardTeacher size={28} />, aos: "fade-up-right" },
  { title: "Flexible Learning", desc: "Access resources anytime, anywhere on any device.", icon: <FaClock size={28} />, aos: "fade-up" },
  { title: "Comprehensive Materials", desc: "Notes, PDFs, past papers, and study plans in one place.", icon: <FaBook size={28} />, aos: "fade-up" },
  { title: "Student-Centered", desc: "Everything designed to help you succeed academically.", icon: <FaUserGraduate size={28} />, aos: "fade-up-left" },
];
import { FaRocket, FaUsers, FaHeart, FaStar, FaLock, FaAward } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: "Fast & Efficient Learning",
      description: "Accelerate your study process with smart tools and organized resources that save you hours of preparation time."
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: "Built by Students, For Students",
      description: "Every feature is designed based on real student needs and feedback. We understand your challenges because we've faced them too."
    },
    {
      icon: <FaLock className="w-5 h-5" />,
      title: "Quality You Can Trust",
      description: "All our resources are verified by subject matter experts and top educators to ensure accuracy and reliability."
    },
    {
      icon: <FaHeart className="w-5 h-5" />,
      title: "We Genuinely Care",
      description: "Your success is our success. We're passionate about helping you achieve your academic goals and dreams."
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Why Students Love SmartStudy
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're more than just a platform - we're your partner in academic success. 
            Here's what makes us different and why thousands of students choose us every day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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
              
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-start space-x-6">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-500">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warm Message */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <FaHeart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Success is Our Priority
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe every student deserves access to quality education. That's why we've built SmartStudy 
              with love, care, and a deep understanding of what it takes to succeed academically. 
              We're not just providing resources - we're building a community where students can thrive together.
            </p>
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-sm">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">99%</div>
              <div className="text-sm">Student Satisfaction</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;