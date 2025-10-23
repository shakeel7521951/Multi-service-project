import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Go to Settings > Account > Change Password. You'll receive an email with a reset link. Make sure to check your spam folder if you don't see it."
    },
    {
      question: "Why is my game lagging?",
      answer: "Game lag can be caused by slow internet, outdated graphics drivers, or background applications. Try closing other apps, updating your drivers, and checking your internet connection."
    },
    {
      question: "How do I report a player?",
      answer: "Click on the player's name in the game lobby or scoreboard and select 'Report Player'. Provide as much detail as possible about the issue."
    },
    {
      question: "Can I play on multiple devices?",
      answer: "Yes! Your progress syncs across all devices. Just log in with the same account on any supported device."
    },
    {
      question: "How do I purchase in-game items?",
      answer: "Navigate to the Store section in the game, select the item you want, and follow the payment instructions. All transactions are secure and encrypted."
    },
    {
      question: "What are the system requirements?",
      answer: "Minimum requirements: Windows 10, 8GB RAM, 2GB GPU. Recommended: Windows 11, 16GB RAM, 4GB GPU for optimal gaming experience."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quick answers to the most common questions we receive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-700 rounded-2xl mb-4 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-600 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <span className="text-cyan-400">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-600/50 border-t border-gray-600">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;