import React from 'react';
import { FaUsers, FaGamepad, FaTrophy, FaGlobe } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: "2.5M",
      label: "Active Players",
      color: "text-cyan-400"
    },
    {
      icon: <FaGamepad />,
      number: "500+",
      label: "Games Available",
      color: "text-purple-400"
    },
    {
      icon: <FaTrophy />,
      number: "50K+",
      label: "Tournaments Won",
      color: "text-yellow-400"
    },
    {
      icon: <FaGlobe />,
      number: "150+",
      label: "Countries",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="text-center"
            >
              <div className={`text-5xl mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-xl text-gray-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;