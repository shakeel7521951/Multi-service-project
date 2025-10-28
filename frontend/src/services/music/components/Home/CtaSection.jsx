import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const CtaSection = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-6 md:py-10 overflow-x-hidden overflow-y-visible'>
      {/* CTA SECTION */}
      <section
        className="max-w-4xl mx-auto px-3 md:px-6 py-20 text-center"
        data-aos="zoom-in"
      >
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-slate-500/50 transition-all duration-300 overflow-visible">
          
          <h2
            className="text-xl md:text-4xl font-bold mb-6 text-white"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Ready to start your{" "}
            <span
              className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              musical journey
            </span>
            ?
          </h2>

          <p
            className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn from the best, compete in events, and grow with our music community.
          </p>

          <Link to="/music/joinnow"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CtaSection
