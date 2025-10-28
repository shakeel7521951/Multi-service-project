import React, { useEffect } from 'react'
import { FaTrophy, FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ComingCompetitions = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const competitions = [
    { 
      title: "Solo Singing Challenge", 
      date: "Nov 25, 2025", 
      prize: "Cash + Trophy",
      participants: "500+ Registered",
      type: "Vocal",
      status: "Upcoming"
    },
    { 
      title: "Online Band Battle", 
      date: "Dec 10, 2025", 
      prize: "Studio Recording",
      participants: "300+ Registered", 
      type: "Band",
      status: "Upcoming"
    },
    { 
      title: "Piano Masters Competition", 
      date: "Jan 15, 2026", 
      prize: "Grand Piano + $5,000",
      participants: "200+ Registered",
      type: "Instrumental",
      status: "Early Registration"
    },
  ];

  // Different AOS animations for each card
  const animations = ["fade-up-right", "fade-up", "fade-up-left"];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-5 w-4 h-4 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-5 h-5 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>

      {/* UPCOMING COMPETITIONS */}
      <section className="max-w-6xl mx-auto px-3 md:px-6" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-down">
            Upcoming <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Competitions</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6" data-aos="fade-up" data-aos-delay="200">
            Showcase your talent and compete with musicians from around the world
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" data-aos="zoom-in" data-aos-delay="400"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="group relative"
              data-aos={animations[i % animations.length]}
              data-aos-delay={i * 150}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-6" data-aos="fade-down" data-aos-delay={i * 200}>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                    {comp.type}
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                    {comp.status}
                  </span>
                </div>

                {/* Competition Title */}
                <h3 className="md:text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300" data-aos="fade-right" data-aos-delay={i * 250}>
                  {comp.title}
                </h3>

                {/* Competition Details */}
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-center gap-3 text-slate-300" data-aos="zoom-in" data-aos-delay={i * 300}>
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <FaCalendarAlt className="text-cyan-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Date</p>
                      <p className="font-semibold">{comp.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300" data-aos="zoom-in" data-aos-delay={i * 350}>
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <FaTrophy className="text-purple-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Prize</p>
                      <p className="font-semibold">{comp.prize}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300" data-aos="zoom-in" data-aos-delay={i * 400}>
                    <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-pink-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Participants</p>
                      <p className="font-semibold">{comp.participants}</p>
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <Link to="/music/joinnow"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
                  data-aos="fade-up"
                  data-aos-delay={i * 450}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Register Now
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Competitions */}
          <div className="text-center mt-12" data-aos="fade-up">
      <Link
        to="/music/competitions"
        className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-600/80 text-slate-300 hover:text-white hover:border-slate-500/50 transition-all duration-300 hover:scale-105 mx-auto"
      >
        View All Competitions
        <FaArrowRight className="text-sm" />
      </Link>
    </div>
      </section>
    </div>
  )
}

export default ComingCompetitions
