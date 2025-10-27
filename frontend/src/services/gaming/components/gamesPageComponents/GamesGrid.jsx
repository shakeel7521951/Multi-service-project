import React from 'react';
import { FaStar, FaUsers, FaDownload, FaPlay } from 'react-icons/fa';

const GamesGrid = () => {
  const games = [
    {
      id: 1,
      title: "Cyber Battle Royale",
      category: "Action",
      rating: 4.9,
      players: "250K",
      downloads: "1.2M",
      size: "2.4 GB",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: true
    },
    {
      id: 2,
      title: "Extreme Racing 2024",
      category: "Racing",
      rating: 4.7,
      players: "180K",
      downloads: "950K",
      size: "1.8 GB",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: false
    },
    {
      id: 3,
      title: "Magic Kingdom Quest",
      category: "Adventure",
      rating: 4.8,
      players: "220K",
      downloads: "1.1M",
      size: "3.1 GB",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3",
      isOnline: false,
      isNew: true
    },
    {
      id: 4,
      title: "Soccer Champions",
      category: "Sports",
      rating: 4.6,
      players: "150K",
      downloads: "800K",
      size: "2.1 GB",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: false
    },
    {
      id: 5,
      title: "Brain Puzzle Master",
      category: "Puzzle",
      rating: 4.5,
      players: "120K",
      downloads: "600K",
      size: "450 MB",
      image: "https://images.unsplash.com/photo-1585504198191-3bd121625c78?ixlib=rb-4.0.3",
      isOnline: false,
      isNew: false
    },
    {
      id: 6,
      title: "Space Strategy Pro",
      category: "Strategy",
      rating: 4.8,
      players: "95K",
      downloads: "550K",
      size: "1.5 GB",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: true
    },
    {
      id: 7,
      title: "Dragon RPG Legends",
      category: "RPG",
      rating: 4.9,
      players: "300K",
      downloads: "1.5M",
      size: "4.2 GB",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: false
    },
    {
      id: 8,
      title: "Zombie Survival",
      category: "Action",
      rating: 4.7,
      players: "210K",
      downloads: "1.0M",
      size: "2.8 GB",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3",
      isOnline: true,
      isNew: false
    }
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={game.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {game.isNew && (
                    <span className="bg-cyan-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {game.isOnline && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ONLINE
                    </span>
                  )}
                </div>

                {/* Play Button */}
                <button className="absolute bottom-3 right-3 bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100">
                  <FaPlay />
                </button>
              </div>

              {/* Game Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 truncate">{game.title}</h3>
                <p className="text-cyan-400 text-sm mb-4">{game.category}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-400">
                    <FaStar className="text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <FaUsers />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <FaDownload />
                    <span>{game.downloads}</span>
                  </div>
                  <div className="text-gray-400">
                    {game.size}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    Play Now
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
            Load More Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;