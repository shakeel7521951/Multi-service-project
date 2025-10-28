import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosRocket } from "react-icons/io";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const features = [
    {
      title: "Expert Instructors",
      desc: "Learn from industry professionals who bring real-world experience to every lesson.",
    },
    {
      title: "Flexible Schedule",
      desc: "Access lessons anytime, anywhere — learn at your own pace with full control.",
    },
    {
      title: "Lifetime Access",
      desc: "Enjoy unlimited access to your course materials, updates, and new content.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-3 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* ICON HEADER */}
        <div
          className="mx-auto mb-8 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="bg-gradient-to-br from-cyan-500 to-purple-600 p-4 rounded-2xl shadow-lg">
            <IoIosRocket className="text-white text-4xl animate-pulse" />
          </div>
        </div>

        {/* TITLE */}
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
          data-aos="fade-up"
        >
          Why Choose Us
        </h2>

        <p
          className="text-slate-300 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our platform combines expert guidance, flexibility, and long-term value
          to help you master your musical journey — wherever you are.
        </p>

        {/* ACCENT DIVIDER */}
        <div
          className="hidden md:flex w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-16 rounded-full"
          data-aos="fade-right"
        ></div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 
              rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-500 
              hover:scale-105 group shadow-lg"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <IoIosRocket className="text-white text-2xl" />
              </div>

              <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h4>

              <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
