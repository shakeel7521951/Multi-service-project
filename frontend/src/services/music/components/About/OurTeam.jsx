import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaMusic, FaUserTie, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import mt1 from '../../../../assets/mt1.avif'
import mt2 from '../../../../assets/mt2.avif'
import mt3 from '../../../../assets/mt3.avif'


const OurTeam = () => {
  const team = [
    {
      name: "Kinza Fatima",
      role: "Founder & Vocal Coach",
      img: mt1,
      bio: "15+ years in vocal training and music education. Passionate about making music accessible everyone.",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Rohit Sharma",
      role: "Instrumental Trainer",
      img: mt2,
      bio: "Multi-instrumentalist with 10+ years teaching experience. Specializes in guitar and piano.",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Sara Malik",
      role: "Music Producer",
      img: mt3,
      bio: "Award-winning producer with expertise in digital music production and sound engineering.",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        {/* TEAM SECTION */}
        <section>
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full mb-6">
              <FaUserTie className="text-cyan-400 text-sm" />
              <span className="text-cyan-400 text-sm font-semibold">Expert Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h2>
            
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Passionate musicians and educators dedicated to helping you achieve your musical dreams.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative"
                data-aos="flip-up"
                data-aos-delay={i * 150}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-cyan-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 text-center">
                  
                  {/* Image Container */}
                  <div className="relative mb-6" data-aos="zoom-in" data-aos-delay={i * 150 + 100}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-30"></div>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg" data-aos="fade-up" data-aos-delay={i * 150 + 200}>
                      <FaStar className="inline mr-1 text-yellow-300" />
                      Expert
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div data-aos="fade-up" data-aos-delay={i * 150 + 250}>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm mb-3">{member.role}</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay={i * 150 + 300}>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3" data-aos="fade-up" data-aos-delay={i * 150 + 350}>
                      <a href={member.social.twitter} className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110">
                        <FaTwitter className="text-sm" />
                      </a>
                      <a href={member.social.linkedin} className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110">
                        <FaLinkedin className="text-sm" />
                      </a>
                      <a href={member.social.instagram} className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110">
                        <FaInstagram className="text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Hover Music Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <FaMusic className="text-cyan-400 text-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-slate-300 mb-6">
                We're always looking for passionate musicians and educators to help us grow.
              </p>
              <Link to="/music/competitions" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative">View Open Positions</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  )
}

export default OurTeam