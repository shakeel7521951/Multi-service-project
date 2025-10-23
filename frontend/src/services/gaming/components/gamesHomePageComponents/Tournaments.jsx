import React from 'react';
import { FaTrophy, FaUsers, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Cyber Championship",
      game: "Cyber Battle",
      prize: "$10,000",
      participants: "2,500",
      timeLeft: "2 days",
      entryFee: "Free",
      status: "ongoing"
    },
    {
      id: 2,
      title: "Racing Grand Prix",
      game: "Racing Extreme",
      prize: "$5,000",
      participants: "1,800",
      timeLeft: "1 day",
      entryFee: "$10",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Magic Duel Masters",
      game: "Magic Quest",
      prize: "$7,500",
      participants: "3,200",
      timeLeft: "3 days",
      entryFee: "Free",
      status: "upcoming"
    }
  ];

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
            Compete with players worldwide and win amazing cash prizes and rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament, index) => (
            <div
              key={tournament.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  tournament.status === 'ongoing' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-gray-900'
                }`}>
                  {tournament.status === 'ongoing' ? 'LIVE' : 'UPCOMING'}
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaTrophy />
                  <span className="text-white font-bold">{tournament.prize}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
              <p className="text-cyan-400 mb-4">{tournament.game}</p>

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
                  <span className="text-white">{tournament.timeLeft}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMoneyBillWave />
                    <span>Entry Fee</span>
                  </div>
                  <span className={`font-bold ${
                    tournament.entryFee === 'Free' ? 'text-green-400' : 'text-cyan-400'
                  }`}>
                    {tournament.entryFee}
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Join Tournament
              </button>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
            View All Tournaments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;