import React from "react";
import { FaRocket, FaUsers, FaHeart, FaLock } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8 text-cyan-400" />,
      title: "Fast & Efficient Learning",
      description:
        "Accelerate your study process with smart tools and organized resources that save you hours of preparation time.",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-400" />,
      title: "Built by Students, For Students",
      description:
        "Every feature is designed based on real student needs and feedback. We understand your challenges because we've faced them too.",
    },
    {
      icon: <FaLock className="w-8 h-8 text-indigo-400" />,
      title: "Quality You Can Trust",
      description:
        "All our resources are verified by subject matter experts and top educators to ensure accuracy and reliability.",
    },
    {
      icon: <FaHeart className="w-8 h-8 text-pink-400" />,
      title: "We Genuinely Care",
      description:
        "Your success is our success. We're passionate about helping you achieve your academic goals and dreams.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <div data-aos="fade-down" className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Why Students Love SmartStudy
          </h2>
          <p className="text-lg text-gray-300">
            We’re more than just a platform — we’re your partner in academic
            success. Here’s what makes us different and why thousands of
            students choose us every day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
