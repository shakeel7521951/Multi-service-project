import React from "react";

const steps = [
  { step: "1", title: "Choose Your Level", desc: "Select 1st Year, 2nd Year, or University materials.", aos: "fade-right" },
  { step: "2", title: "Access Resources", desc: "View notes, PDFs, past papers, and study guides.", aos: "fade-up" },
  { step: "3", title: "Learn & Succeed", desc: "Follow study plans and improve your grades.", aos: "fade-left" },
];

const HowItWorks = () => {
  return (
    // Switched to dark gradient background
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" id="how-it-works">
      
      {/* Dynamic background glow (similar to previous components) */}
      <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl top-10 left-1/4 animate-pulse-slow"></div>
      <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl bottom-10 right-1/4 animate-pulse-slow-delay"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header with Gradient Text */}
        <div data-aos="fade-down" className="max-w-xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Your Path to Success
            </h2>
            <p className="text-lg text-gray-400">
                Getting started is simple. Follow these three steps to unlock a world of academic resources.
            </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-10 md:grid-cols-3">
          
          {/* CONNECTOR LINES (Desktop Only) - Now using a vibrant gradient */}
          {/* Line 1 */}
          <div className="hidden md:block absolute top-1/2 left-[16.66%] w-[33.33%] h-1 bg-gradient-to-r from-purple-400/50 to-indigo-400/50 transform -translate-y-1/2 z-0 opacity-70"></div>
          {/* Line 2 */}
          <div className="hidden md:block absolute top-1/2 left-[50%] w-[33.33%] h-1 bg-gradient-to-r from-indigo-400/50 to-cyan-400/50 transform -translate-y-1/2 z-0 opacity-70"></div>
          
          {steps.map((item, i) => (
            <div
              key={i}
              data-aos={item.aos}
              data-aos-delay={i * 200}
              // Card Styling: Dark background, glass effect, subtle border, strong hover shadow
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 pt-10 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 duration-500 z-10"
            >
              
              {/* Step Number Badge */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-extrabold 
                           text-white 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           ring-4 ring-slate-800 shadow-xl 
                           transition-all duration-500 group-hover:from-cyan-500 group-hover:to-indigo-500 group-hover:scale-110"
              >
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-colors duration-300">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-md text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Animated Accent Line (uses a gradient now) */}
              <div 
                className="mt-6 h-1 w-0 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 
                           transition-all duration-500 group-hover:w-2/3"
              ></div>

              {/* Animated Icon Arrow (Mobile/Small Screen Connector) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-4xl text-cyan-400 animate-bounce">
                    &darr;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for slow pulsing animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;