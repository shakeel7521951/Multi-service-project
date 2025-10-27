import React from 'react';
import { FaStar, FaUsers, FaPlay } from 'react-icons/fa';

const FeaturedGames = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Cyber Battle",
      category: "Action",
      rating: 4.9,
      players: "50K",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3",
      isNew: true
    },
    {
      id: 2,
      title: "Racing Extreme",
      category: "Racing",
      rating: 4.7,
      players: "35K",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3",
      isNew: false
    },
    {
      id: 3,
      title: "Magic Quest",
      category: "Adventure",
      rating: 4.8,
      players: "42K",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3",
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the most popular and trending games loved by millions of players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <div
              key={game.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {game.isNew && (
                  <div className="absolute top-4 left-4 bg-cyan-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <button className="absolute bottom-4 right-4 bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110">
                  <FaPlay />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-cyan-400 mb-4">{game.category}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <span className="text-white">{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaUsers />
                      <span>{game.players}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;