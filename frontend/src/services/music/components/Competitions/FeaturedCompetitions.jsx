import React, { useEffect } from 'react';
import { FaTrophy, FaCalendarAlt, FaUsers, FaMusic, FaStar, FaGem, FaCrown, FaRegClock, FaAward, FaFire } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedCompetitions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const competitions = [
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Global Music Championship",
      date: "Jan 15-20, 2024",
      participants: "2,500+",
      prize: "$50,000",
      category: "All Instruments",
      status: "Upcoming",
      featured: true,
      daysLeft: 15,
      difficulty: "Advanced"
    },
    {
      icon: <FaCrown className="text-2xl" />,
      title: "Vocal Excellence Awards",
      date: "Dec 10-12, 2024",
      participants: "1,800+",
      prize: "$25,000",
      category: "Vocals",
      status: "Registration Open",
      featured: false,
      daysLeft: 8,
      difficulty: "Intermediate"
    },
    {
      icon: <IoMdMusicalNotes className="text-2xl" />,
      title: "Electronic Beat Contest",
      date: "Feb 5-8, 2024",
      participants: "3,200+",
      prize: "$30,000",
      category: "Electronic",
      status: "Upcoming",
      featured: true,
      daysLeft: 22,
      difficulty: "All Levels"
    },
    {
      icon: <FaMusic className="text-2xl" />,
      title: "Classical Masters",
      date: "Nov 20-25, 2024",
      participants: "950+",
      prize: "$20,000",
      category: "Classical",
      status: "Registration Open",
      featured: false,
      daysLeft: 5,
      difficulty: "Expert"
    },
    {
      icon: <FaFire className="text-2xl" />,
      title: "Rock Band Showdown",
      date: "Mar 1-5, 2024",
      participants: "1,500+",
      prize: "$35,000",
      category: "Rock Bands",
      status: "Upcoming",
      featured: true,
      daysLeft: 45,
      difficulty: "Intermediate"
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Jazz Improv Battle",
      date: "Apr 10-12, 2024",
      participants: "800+",
      prize: "$15,000",
      category: "Jazz",
      status: "Registration Open",
      featured: false,
      daysLeft: 12,
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-cyan-500';
      case 'Intermediate': return 'from-cyan-500 to-blue-500';
      case 'Advanced': return 'from-purple-500 to-pink-500';
      case 'Expert': return 'from-red-500 to-orange-500';
      default: return 'from-cyan-500 to-purple-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-2 md:px-4 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse" data-aos="fade-down"></div>
      <div className="hidden md:flex absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce" data-aos="fade-up"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse" data-aos="fade-right"></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-cyan-300 rounded-full opacity-30 animate-ping" data-aos="zoom-in"></div>

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              Featured Competitions
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Showcase your talent in global music competitions and win amazing prizes
          </p>
        </div>

        {/* COMPETITIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <div 
              key={index}
              className={`group relative bg-slate-800/80 backdrop-blur-sm border rounded-2xl p-3 md:p-6 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 ${
                competition.featured 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-slate-700/50'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* FEATURED BADGE */}
              {competition.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg" data-aos="zoom-in">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-300 animate-pulse" />
                    <span>Featured Event</span>
                  </div>
                </div>
              )}

              {/* HEADER SECTION */}
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {competition.icon}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    competition.status === 'Upcoming' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {competition.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getDifficultyColor(competition.difficulty)} text-white`}>
                    {competition.difficulty}
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {competition.title}
              </h3>

              {/* COMPETITION DETAILS */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <FaCalendarAlt className="text-cyan-400 flex-shrink-0" />
                  <span>{competition.date}</span>
                  <div className="flex items-center gap-1 ml-auto text-amber-400 text-sm">
                    <FaRegClock className="text-sm" />
                    <span>{competition.daysLeft}d left</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <FaUsers className="text-purple-400 flex-shrink-0" />
                  <span>{competition.participants} Participants</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <FaGem className="text-yellow-400 flex-shrink-0" />
                  <span className="font-semibold text-cyan-400">{competition.prize} Prize Pool</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <FaMusic className="text-pink-400 flex-shrink-0" />
                  <span>{competition.category}</span>
                </div>
              </div>

              {/* PROGRESS BAR - For Registration Open */}
              {competition.status === 'Registration Open' && (
                <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Registration Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex gap-3">
                <button className="group relative flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 overflow-hidden">
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-full top-0 bg-white/20 group-hover:animate-shine"></div>
                </button>
                <button className="px-4 border border-slate-600/50 text-slate-300 rounded-xl font-semibold text-sm backdrop-blur-sm bg-slate-800/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
                  Details
                </button>
              </div>

              {/* HOVER GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM ANIMATION STYLES */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(400%) rotate(45deg); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default FeaturedCompetitions;