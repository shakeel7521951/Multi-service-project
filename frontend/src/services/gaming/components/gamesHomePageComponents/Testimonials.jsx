import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      role: "Pro Gamer",
      rating: 5,
      comment: "This platform revolutionized my gaming experience. The tournaments are amazing!",
      game: "Cyber Battle"
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3",
      role: "Streamer",
      rating: 5,
      comment: "Best gaming community ever! Made so many friends and won my first tournament here.",
      game: "Magic Quest"
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      role: "Game Developer",
      rating: 4,
      comment: "As a developer, I appreciate the smooth gameplay and excellent user interface.",
      game: "Racing Extreme"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              What Players Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who love our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              <FaQuoteLeft className="text-cyan-400 text-2xl mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">Plays {testimonial.game}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;