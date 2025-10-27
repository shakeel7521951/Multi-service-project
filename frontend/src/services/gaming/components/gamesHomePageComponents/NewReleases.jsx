import React from 'react';
import { FaStar, FaDownload, FaCalendar } from 'react-icons/fa';

const NewReleases = () => {
  const newGames = [
    {
      id: 1,
      title: "Space Odyssey",
      category: "Adventure",
      rating: 4.8,
      downloads: "10K+",
      releaseDate: "2024",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3",
      isFeatured: true
    },
    {
      id: 2,
      title: "Neon Racing",
      category: "Racing",
      rating: 4.6,
      downloads: "8K+",
      releaseDate: "2024",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3",
      isFeatured: false
    },
    {
      id: 3,
      title: "Dragon Saga",
      category: "RPG",
      rating: 4.9,
      downloads: "15K+",
      releaseDate: "2024",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3",
      isFeatured: true
    },
    {
      id: 4,
      title: "Puzzle Masters",
      category: "Puzzle",
      rating: 4.5,
      downloads: "6K+",
      releaseDate: "2024",
      image: "https://images.unsplash.com/photo-1585504198191-3bd121625c78?ixlib=rb-4.0.3",
      isFeatured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              New Releases
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Check out the latest and hottest games just added to our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newGames.map((game, index) => (
            <div
              key={game.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {game.isFeatured && (
                  <div className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-cyan-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{game.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{game.category}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaDownload />
                    <span>{game.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <span>{game.releaseDate}</span>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;