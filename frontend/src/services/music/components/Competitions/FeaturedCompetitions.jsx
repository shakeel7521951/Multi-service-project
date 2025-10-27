import React from 'react'
import { FaCalendarAlt, FaUsers, FaMusic, FaStar,FaGem,FaCrown,FaCalendarAlt } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";


const FeaturedCompetitions = () => {
    const competitions = [
        {
          icon: <FaTrophy className="text-2xl" />,
          title: "Global Music Championship",
          date: "Jan 15-20, 2024",
          participants: "2,500+",
          prize: "$50,000",
          category: "All Instruments",
          status: "Upcoming",
          featured: true
        },
        {
          icon: <FaCrown className="text-2xl" />,
          title: "Vocal Excellence Awards",
          date: "Dec 10-12, 2024",
          participants: "1,800+",
          prize: "$25,000",
          category: "Vocals",
          status: "Registration Open",
          featured: false
        },
        {
          icon: <IoMdMusicalNotes className="text-2xl" />,
          title: "Electronic Beat Contest",
          date: "Feb 5-8, 2024",
          participants: "3,200+",
          prize: "$30,000",
          category: "Electronic",
          status: "Upcoming",
          featured: true
        },
        {
          icon: <FaMusic className="text-2xl" />,
          title: "Classical Masters",
          date: "Nov 20-25, 2024",
          participants: "950+",
          prize: "$20,000",
          category: "Classical",
          status: "Registration Open",
          featured: false
        }
      ];
  return (
    <div>
       {/* COMPETITIONS GRID */}
              <div className="mb-16">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Competitions</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
      
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {competitions.map((competition, index) => (
                    <div 
                      key={index}
                      className={`bg-slate-800/80 backdrop-blur-sm border rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300 group hover:scale-105 ${
                        competition.featured 
                          ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                          : 'border-slate-700/50'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                    >
                      {competition.featured && (
                        <div className="flex items-center gap-2 mb-4">
                          <FaStar className="text-yellow-400" />
                          <span className="text-cyan-400 text-sm font-semibold">Featured Event</span>
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {competition.icon}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          competition.status === 'Upcoming' 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {competition.status}
                        </span>
                      </div>
      
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {competition.title}
                      </h3>
      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-300">
                          <FaCalendarAlt className="text-cyan-400" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                          <FaUsers className="text-purple-400" />
                          <span>{competition.participants} Participants</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                          <FaGem className="text-yellow-400" />
                          <span className="font-semibold text-cyan-400">{competition.prize} Prize Pool</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                          <FaMusic className="text-pink-400" />
                          <span>{competition.category}</span>
                        </div>
                      </div>
      
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          Register Now
                        </button>
                        <button className="px-4 border border-slate-600/50 text-slate-300 rounded-xl font-semibold text-sm backdrop-blur-sm bg-slate-800/50 hover:border-slate-500/50 hover:text-white transition-all duration-300">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    </div>
  )
}

export default FeaturedCompetitions
