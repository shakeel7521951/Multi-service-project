import React from 'react';
import { FaPlay, FaUsers, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Ultimate Gaming
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of players in the most exciting gaming platform. 
            Play, compete, and win amazing prizes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <FaPlay className="text-sm" />
              Play Now Free
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Browse Games
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div data-aos="fade-up" data-aos-delay="400" className="text-center">
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                <FaUsers className="text-2xl" />
                <span className="text-3xl font-bold">2M+</span>
              </div>
              <p className="text-gray-400">Active Players</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="600" className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                <FaStar className="text-2xl" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-gray-400">Games Available</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="800" className="text-center">
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                <FaPlay className="text-2xl" />
                <span className="text-3xl font-bold">50K+</span>
              </div>
              <p className="text-gray-400">Daily Tournaments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;