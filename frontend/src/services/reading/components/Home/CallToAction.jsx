import React from "react";

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE — TEXT CONTENT */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <p className="text-indigo-300 text-sm uppercase tracking-wider mb-3">
            Join SmartStudy Today
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-[#4F8FFF]">Boost</span> Your Learning Journey
          </h2>
          <div className="w-20 h-1 bg-[#4F8FFF] mx-auto lg:mx-0 mb-10"></div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            Access free notes, updated past papers, and books for your Inter &
            University studies. Learn smarter and faster with{" "}
            <b className="text-white">SmartStudy</b>.
          </p>

          <button className="bg-[#4F8FFF] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#3675e0] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div
          className="lg:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="shine-wrapper relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://intersoft.ai/images/misc/itconsulting.jpg"
              alt="Learning Illustration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <style jsx>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }
        .shine-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          opacity: 0;
          transition: all 0.8s;
        }
        .shine-wrapper:hover::before {
          left: 150%;
          opacity: 1;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
