import React, { useEffect } from "react";
import { 
  FaMedal,      // 🥇 replaced FaTrophy with FaMedal
  FaCrown, 
  FaAward, 
  FaMusic, 
  FaCalendarAlt, 
  FaStar, 
  FaRegClock, 
  FaGift, 
  FaUser, 
  FaArrowRight 
} from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const PastCompetitions = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const past = [
    {
      title: "Summer Talent Show 2025",
      winner: "Aisha Malik",
      prize: "Scholarship + Certificate",
      date: "Aug 15, 2025",
      participants: "1,200+",
      category: "Vocals",
      winnerAvatar: "🎤",
      featured: true,
      icon: <FaCrown />
    },
    {
      title: "Global Guitar Fest",
      winner: "Rohit Sharma",
      prize: "Recording Studio Session",
      date: "Jun 22, 2025",
      participants: "850+",
      category: "Strings",
      winnerAvatar: "🎸",
      featured: false,
      icon: <FaMusic />
    },
    {
      title: "Virtual Piano Challenge",
      winner: "Sara Khan",
      prize: "Digital Keyboard",
      date: "Apr 10, 2025",
      participants: "950+",
      category: "Keys",
      winnerAvatar: "🎹",
      featured: true,
      icon: <IoMdRibbon />
    },
    {
      title: "Electronic Beat Masters",
      winner: "DJ Nova",
      prize: "Music Production Kit",
      date: "Feb 28, 2025",
      participants: "1,500+",
      category: "Electronic",
      winnerAvatar: "🎧",
      featured: false,
      icon: <FaAward />
    },
    {
      title: "Rhythm Nation Drums",
      winner: "Marcus Chen",
      prize: "Professional Drum Set",
      date: "Jan 15, 2025",
      participants: "720+",
      category: "Percussion",
      winnerAvatar: "🥁",
      featured: true,
      icon: <FaMedal />   // ✅ replaced here too
    },
    {
      title: "Classical Symphony",
      winner: "Elena Petrova",
      prize: "Orchestra Performance",
      date: "Dec 5, 2024",
      participants: "680+",
      category: "Classical",
      winnerAvatar: "🎻",
      featured: false,
      icon: <FaStar />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-5  md:py-10">
      {/* Floating Elements */}
      <div className="absolute top-20 left-5 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce" data-aos="fade-down"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse" data-aos="fade-left"></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-bounce" data-aos="fade-up"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-ping" data-aos="zoom-in"></div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16" data-aos="fade-up">
          
         <h2 className="text-4xl pt-5 md:pt-0 md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              Past Competitions
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Relive the glory of our previous musical battles and get inspired by the incredible talents that have graced our stage .
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="300">
            {[
              { number: "24", label: "Events" },
              { number: "5K+", label: "Participants" },
              { number: "$500K", label: "Prize Money" },
              { number: "18", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAST COMPETITIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {past.map((competition, index) => (
            <div
              key={index}
              className={`bg-slate-800/80 backdrop-blur-sm border rounded-2xl p-3 md:p-6 hover:border-slate-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl ${
                competition.featured 
                  ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10' 
                  : 'border-slate-700/50'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {competition.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {competition.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{competition.date}</span>
                    </div>
                  </div>
                </div>
                {competition.featured && (
                  <div className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-semibold border border-cyan-500/30">
                    Featured
                  </div>
                )}
              </div>

              {/* Winner Section */}
              <div className="bg-slate-700/50 rounded-xl p-4 mb-4 border border-slate-600/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-lg">
                    {competition.winnerAvatar}
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm">Champion</div>
                    <div className="text-white font-semibold flex items-center gap-2">
                      {competition.winner}
                      <FaCrown className="text-yellow-400 text-sm" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <FaGift className="text-purple-400" />
                    <span>{competition.prize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <FaUser className="text-cyan-400" />
                    <span>{competition.participants}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <FaMusic className="text-pink-400" />
                  <span>{competition.category}</span>
                </div>
                <Link to="/music/courses" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  View Highlights
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastCompetitions;
