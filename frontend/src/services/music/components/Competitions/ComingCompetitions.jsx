import React, { useEffect } from "react";
import { FaCalendarAlt, FaUsers, FaTrophy, FaClock, FaArrowRight, FaMusic, FaMicrophone, FaGuitar, FaDrum, FaRegStar, FaStar } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const ComingCompetitions = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const upcoming = [
    {
      title: "Solo Singing Challenge",
      date: "Nov 25, 2025",
      participants: 120,
      prize: "Cash + Trophy",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60",
      category: "Vocals",
      deadline: "Nov 20, 2025",
      status: "Registration Open",
      featured: true,
      icon: <FaMicrophone />
    },
    {
      title: "Online Band Battle",
      date: "Dec 10, 2025",
      participants: 80,
      prize: "Studio Recording Deal",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
      category: "Bands",
      deadline: "Dec 5, 2025",
      status: "Early Bird",
      featured: true,
      icon: <FaUsers />
    },
    {
      title: "Digital Composition Contest",
      date: "Jan 5, 2026",
      participants: 60,
      prize: "Music Gear Pack",
      image: "https://cdn.pixabay.com/photo/2015/08/26/10/03/synthesizer-908298_640.jpg",
      category: "Production",
      deadline: "Dec 28, 2025",
      status: "Coming Soon",
      featured: false,
      icon: <IoMdMusicalNote />
    },
    {
      title: "Guitar Virtuoso Showdown",
      date: "Feb 15, 2026",
      participants: 95,
      prize: "Signature Guitar",
      image: "https://cdn.pixabay.com/photo/2023/02/06/01/29/man-7770930_640.jpg",
      category: "Strings",
      deadline: "Feb 10, 2026",
      status: "Registration Open",
      featured: false,
      icon: <FaGuitar />
    },
    {
      title: "Electronic Music Festival",
      date: "Mar 8, 2026",
      participants: 150,
      prize: "DJ Equipment Set",
      image: "https://cdn.pixabay.com/photo/2021/04/07/13/09/headphones-6159058_640.jpg",
      category: "Electronic",
      deadline: "Mar 1, 2026",
      status: "Early Bird",
      featured: true,
      icon: <FaDrum />
    },
    {
      title: "Classical Piano Masters",
      date: "Apr 22, 2026",
      participants: 75,
      prize: "Concert Performance",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=60",
      category: "Classical",
      deadline: "Apr 15, 2026",
      status: "Coming Soon",
      featured: false,
      icon: <FaMusic />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Early Bird":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "Coming Soon":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden md:py-10">
      {/* Floating Elements */}
      <div className="hidden md:flex absolute top-32 left-8 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce" data-aos="fade-down"></div>
      <div className="hidden md:flex absolute top-1/2 right-12 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-pulse" data-aos="fade-left"></div>
      <div className="hidden md:flex absolute bottom-48 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-bounce" data-aos="fade-up"></div>
      <div className="hidden md:flex absolute top-64 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-ping" data-aos="zoom-in"></div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-6 pt-10 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16" data-aos="fade-up">

<h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              Upcoming Competitions
            </span>
          </h2>

<div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" data-aos="fade-up" data-aos-delay="200"></div>


        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Get ready for the most exciting music competitions of the year. Showcase your talent, win amazing prizes, and make your mark in the music world.
          </p>

          {/* Countdown Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="300">
            {[
              { number: "6", label: "Events" },
              { number: "580+", label: "Expected Participants" },
              { number: "$150K+", label: "Total Prizes" },
              { number: "12", label: "Categories" }
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

        {/* UPCOMING COMPETITIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {upcoming.map((comp, index) => (
            <div
              key={index}
              className={`bg-slate-800/80 backdrop-blur-sm border rounded-2xl overflow-hidden hover:border-slate-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl ${
                comp.featured 
                  ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10' 
                  : 'border-slate-700/50'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(comp.status)}`}>
                    {comp.status}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                    {comp.icon}
                  </div>
                </div>
                {comp.featured && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-semibold border border-cyan-500/30">
                    <FaStar className="text-xs" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-3 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors duration-300">
                    {comp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FaMusic className="text-pink-400" />
                    <span>{comp.category}</span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-300">
                    <FaCalendarAlt className="text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-400">Event Date</div>
                      <div className="text-sm font-medium">{comp.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FaClock className="text-purple-400" />
                    <div>
                      <div className="text-xs text-slate-400">Deadline</div>
                      <div className="text-sm font-medium">{comp.deadline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FaUsers className="text-green-400" />
                    <div>
                      <div className="text-xs text-slate-400">Participants</div>
                      <div className="text-sm font-medium">{comp.participants}+</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FaTrophy className="text-yellow-400" />
                    <div>
                      <div className="text-xs text-slate-400">Prize</div>
                      <div className="text-sm font-medium text-cyan-400">{comp.prize}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Register Now
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingCompetitions;