import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <FaEnvelope className="text-5xl text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about new games, tournaments, and exclusive rewards
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <FaPaperPlane />
                Subscribe
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              No spam ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;