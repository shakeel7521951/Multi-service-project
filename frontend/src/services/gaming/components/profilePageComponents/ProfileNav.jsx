import React, { useState } from 'react';
import { FaUser, FaGamepad, FaTrophy, FaCog, FaHistory} from 'react-icons/fa';

const ProfileNav = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaUser /> },
    { id: 'games', label: 'My Games', icon: <FaGamepad /> },
    { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> },
    { id: 'history', label: 'Game History', icon: <FaHistory /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;