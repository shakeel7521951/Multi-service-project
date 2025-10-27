import React, { useState } from 'react';
import { FaFilter, FaStar, FaUsers, FaCalendar } from 'react-icons/fa';

const GamesFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Games', count: 500 },
    { id: 'action', label: 'Action', count: 150 },
    { id: 'adventure', label: 'Adventure', count: 90 },
    { id: 'racing', label: 'Racing', count: 80 },
    { id: 'sports', label: 'Sports', count: 60 },
    { id: 'puzzle', label: 'Puzzle', count: 120 },
    { id: 'strategy', label: 'Strategy', count: 70 },
    { id: 'rpg', label: 'RPG', count: 50 },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'players', label: 'Most Players' },
  ];

  return (
    <section className="py-8 bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2" data-aos="fade-right">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-80">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4" data-aos="fade-left">
            <FaFilter className="text-cyan-400" />
            <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesFilter;