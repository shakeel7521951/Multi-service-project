import React from 'react'
import { FaBullseye, FaRocket, FaUsers, FaHeart } from "react-icons/fa";

const OurMission = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="hidden md:flex absolute top-20 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        {/* MISSION & VISION SECTION - Reversed Layout */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section - Now on LEFT */}
          <div className="space-y-8">
            {/* Section Header */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <FaBullseye className="text-cyan-400 text-sm" />
                <span className="text-cyan-400 text-sm font-semibold">Our Purpose</span>
              </div>
              
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>

            {/* Mission Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group" data-aos="fade-right" data-aos-delay="100">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Empower Through Music</h3>
                  <p className="text-slate-300 leading-relaxed">
                    MusicStudents is an innovative online platform designed to bring together learners and artists
                    from around the world. We aim to make music education accessible, interactive,
                    and inspiring for everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group" data-aos="fade-right" data-aos-delay="200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Build Global Connections</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Whether you're just starting out or already performing, our mentors and community
                    help you refine your craft, showcase your talent, and connect with like-minded musicians worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group" data-aos="fade-right" data-aos-delay="300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Foster Creative Growth</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We believe every musician has a unique voice. Our platform nurtures creativity through
                    personalized learning paths, live feedback, and performance opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div data-aos="fade-right" data-aos-delay="400">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative flex items-center gap-2">
                  Join Our Journey
                  <FaRocket className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Image Section - Now on RIGHT */}
          <div className="relative" data-aos="fade-left">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-cyan-500/30 transition-all duration-500 group">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=60"
                alt="Music community collaboration"
                className="rounded-xl shadow-2xl border border-slate-600/50 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-2 -md:left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 md:px-6 py-3 rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm" />
                  <span className="font-bold">10K+ Students</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-2 -md:right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-white px-3 md:px-6 py-3 rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="600">
                <div className="flex items-center gap-2">
                  <FaHeart className="text-pink-400 text-sm" />
                  <span className="font-bold">Global Community</span>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default OurMission