import React from 'react';
import { FaGamepad, FaCar, FaFutbol, FaPuzzlePiece, FaMagic, FaChess } from 'react-icons/fa';

const GameCategories = () => {
  const categories = [
    { name: "Action", icon: <FaGamepad />, games: "150+", color: "from-red-500 to-pink-600" },
    { name: "Racing", icon: <FaCar />, games: "80+", color: "from-blue-500 to-cyan-600" },
    { name: "Sports", icon: <FaFutbol />, games: "60+", color: "from-green-500 to-emerald-600" },
    { name: "Puzzle", icon: <FaPuzzlePiece />, games: "120+", color: "from-purple-500 to-indigo-600" },
    { name: "Adventure", icon: <FaMagic />, games: "90+", color: "from-yellow-500 to-orange-600" },
    { name: "Strategy", icon: <FaChess />, games: "70+", color: "from-gray-500 to-gray-700" }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Game Categories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore games by your favorite categories and discover new adventures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-2xl font-bold">{category.games}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="opacity-80">Explore amazing {category.name.toLowerCase()} games</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;