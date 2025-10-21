import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Learning?</h2>
        <p className="mb-6">
          Join thousands of students who are achieving their goals with SmartStudy.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
