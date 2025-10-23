import React from 'react';
import { FaQuestionCircle, FaBook, FaUsers, FaBug, FaCog, FaShieldAlt } from 'react-icons/fa';

const SupportCategories = () => {
  const categories = [
    {
      icon: <FaQuestionCircle className="text-4xl" />,
      title: "FAQs",
      description: "Find quick answers to common questions",
      count: "50+ Articles",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: "Guides & Tutorials",
      description: "Step-by-step guides and video tutorials",
      count: "200+ Guides",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaBug className="text-4xl" />,
      title: "Bug Reports",
      description: "Report issues and technical problems",
      count: "Quick Response",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Help",
      description: "Get help from other players",
      count: "10K+ Members",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaCog className="text-4xl" />,
      title: "Technical Support",
      description: "Hardware and software issues",
      count: "24/7 Available",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Account & Security",
      description: "Password, privacy, and security help",
      count: "Secure Support",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              How Can We Help?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our support categories to find the help you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="opacity-90 mb-4">{category.description}</p>
              <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-all duration-300">
                Browse Articles
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;