import React from 'react';
import { FaTrophy, FaUsers, FaClock, FaMoneyBillWave, FaPlay } from 'react-icons/fa';

const LiveTournaments = () => {
  const liveTournaments = [
    {
      id: 1,
      name: "Weekend Championship",
      game: "Cyber Battle",
      prize: "$10,000",
      participants: "1,245/2,000",
      timeLeft: "2:15:30",
      entryFee: "Free",
      status: "filling"
    },
    {
      id: 2,
      name: "Speed Racing Cup",
      game: "Extreme Racing",
      prize: "$5,000",
      participants: "800/1,000",
      timeLeft: "1:30:45",
      entryFee: "$5",
      status: "filling"
    },
    {
      id: 3,
      name: "Magic Duel Masters",
      game: "Magic Quest",
      prize: "$7,500",
      participants: "1,500/1,500",
      timeLeft: "LIVE",
      entryFee: "$10",
      status: "live"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-red-500';
      case 'filling': return 'bg-green-500';
      case 'upcoming': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live': return 'LIVE NOW';
      case 'filling': return 'FILLING';
      case 'upcoming': return 'UPCOMING';
      default: return 'CLOSED';
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Live Tournaments
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join competitive tournaments and win amazing prizes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {liveTournaments.map((tournament, index) => (
            <div
              key={tournament.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border-2 border-gray-700"
            >
              {/* Tournament Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(tournament.status)} text-white`}>
                  {getStatusText(tournament.status)}
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaTrophy />
                  <span className="font-bold">{tournament.prize}</span>
                </div>
              </div>

              {/* Tournament Info */}
              <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
              <p className="text-cyan-400 mb-4">{tournament.game}</p>

              {/* Tournament Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaUsers />
                    <span>Participants</span>
                  </div>
                  <span className="text-white">{tournament.participants}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaClock />
                    <span>Time Left</span>
                  </div>
                  <span className={
                    tournament.status === 'live' ? 'text-red-400 font-bold' : 'text-white'
                  }>
                    {tournament.timeLeft}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMoneyBillWave />
                    <span>Entry Fee</span>
                  </div>
                  <span className={
                    tournament.entryFee === 'Free' ? 'text-green-400 font-bold' : 'text-cyan-400'
                  }>
                    {tournament.entryFee}
                  </span>
                </div>
              </div>

              {/* Join Button */}
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <FaPlay />
                {tournament.status === 'live' ? 'Join Tournament' : 'Register Now'}
              </button>
            </div>
          ))}
        </div>

        {/* View All Tournaments */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
            View All Tournaments
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveTournaments;