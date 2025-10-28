import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaUsers, FaHeart, FaComments, FaStar, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const CommunityCta = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "This community transformed my music journey. The feedback I received helped me improve my production skills dramatically!",
      author: "Alex, Music Producer",
      role: "Electronic Music"
    },
    {
      id: 2,
      text: "I've met incredible musicians and collaborators here. The weekly challenges keep me motivated and creative!",
      author: "Sarah, Vocalist",
      role: "R&B Singer"
    },
    {
      id: 3,
      text: "As a beginner, the supportive environment helped me gain confidence. Now I regularly share my guitar covers!",
      author: "Mike, Guitarist",
      role: "Rock Music"
    },
    {
      id: 4,
      text: "The production feedback I get here is invaluable. My tracks have improved so much since joining this community!",
      author: "Jessica, Beat Maker",
      role: "Hip-Hop Producer"
    },
    {
      id: 5,
      text: "I found my band members through this platform. We've been creating music together for 6 months now!",
      author: "David, Drummer",
      role: "Band Musician"
    }
  ];

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-10 md:py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating Animated Elements */}
      <div className="absolute top-10 left-5 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-pulse" data-aos="fade-right"></div>
      <div className="hidden md:flex absolute bottom-20 right-8 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-bounce" data-aos="fade-left"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-70 animate-ping" data-aos="zoom-in"></div>
      <div className="hidden md:flex absolute bottom-10 left-1/3 w-5 h-5 bg-cyan-300 rounded-full opacity-50 animate-pulse" data-aos="fade-up"></div>

      {/* Main CTA Container */}
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Join Our Vibrant
            </span>
            <br />
            <span className="text-white">Music Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Connect with musicians worldwide, share your creations, and grow together in an inspiring environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Features */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">10,000+ Creators</h3>
                  <p className="text-slate-300">
                    Join thousands of musicians, producers, and artists sharing their work daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaComments className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Constructive Feedback</h3>
                  <p className="text-slate-300">
                    Get meaningful feedback from fellow musicians to improve your craft.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaStar className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Weekly Challenges</h3>
                  <p className="text-slate-300">
                    Participate in creative challenges and showcase your talent to the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Main CTA */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-4 md:p-8 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <FaMusic className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Share Your Sound?
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Join thousands of musicians who are already sharing their music, getting feedback, and growing together.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10K+</div>
                    <div className="text-slate-400 text-sm">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">5K+</div>
                    <div className="text-slate-400 text-sm">Tracks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">50K+</div>
                    <div className="text-slate-400 text-sm">Comments</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center" data-aos="fade-right">
                  {/* Gradient CTA Button */}
                  <Link
                    to="/music/joinnow"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 overflow-hidden"
                  >
                    {/* Button Text & Icon */}
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Join the Community
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Shine Effect (optional custom animation) */}
                    <div className="absolute inset-0 shine-effect"></div>
                  </Link>

                  {/* Subtext */}
                  <p className="text-slate-400 text-sm mt-4">
                    Free forever. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonial Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              What Our Members Say
            </h3>
            <p className="text-slate-300">
              Join thousands of satisfied musicians
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Display */}
            <div className="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-4 md:p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Quote Icon */}
              <FaQuoteLeft className="hidden md:flex text-cyan-400/20 text-6xl absolute top-4 left-6" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                {/* Testimonial Content with Transition */}
                <div
                  key={currentTestimonial}
                  className="text-center transition-all duration-500 ease-in-out"
                >
                  <p className="text-slate-300 italic text-lg mb-6 min-h-[80px] flex items-center justify-center">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-cyan-400 text-sm mt-1">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                />
              ))}
            </div>

            {/* Auto-rotation Indicator */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${i === currentTestimonial % 5
                          ? ''
                          : ''
                        }`}
                    />
                  ))}
                </div>
                {/* <span>Auto-rotating every 3 seconds</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Shine Effect */}
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunityCta;