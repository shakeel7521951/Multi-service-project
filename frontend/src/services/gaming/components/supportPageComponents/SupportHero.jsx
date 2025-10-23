import React from 'react';
import { FaHeadset, FaSearch, FaLifeRing } from 'react-icons/fa';

const SupportHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      <div className="container mx-auto px-4 text-center">
        <div data-aos="fade-up">
          <FaHeadset className="text-5xl md:text-6xl text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Support Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help! Get instant answers, contact support, or browse our knowledge base.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-lg"
              />
              <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <FaLifeRing className="text-3xl text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mx-auto mb-3">📚</div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400">Help Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mx-auto mb-3">⏱️</div>
              <div className="text-2xl font-bold text-white">2 min</div>
              <div className="text-gray-400">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;