import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to SmartStudy Platform
        </h1>
        <p className="text-lg mb-8">
          Access Notes, Past Papers, Study Plans & Expert Guidance — from
          1st Year to University!
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
