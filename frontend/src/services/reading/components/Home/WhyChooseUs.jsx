import React from "react";
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