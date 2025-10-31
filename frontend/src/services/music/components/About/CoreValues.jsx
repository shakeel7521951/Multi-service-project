import React from 'react'
import { FaMusic, FaUsers, FaBullseye, FaStar, FaHeart, FaRocket } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: <FaMusic />,
      title: "Creativity",
      description: "We celebrate originality and artistic freedom in every student's journey.",
      color: "from-cyan-400 to-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      delay: 100
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "A supportive network of musicians learning and growing together.",
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      delay: 200
    },
    {
      icon: <FaBullseye />,
      title: "Excellence",
      description: "We aim to provide world-class guidance and tools for every musician.",
      color: "from-pink-400 to-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      delay: 300
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py- overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="hidden md:flex absolute top-20 left-10 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-5 h-5 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        {/* CORE VALUES SECTION */}
        <section className="mb-20">
          {/* Section Header */}
          <div className="text-center pt-10 mb-16" data-aos="fade-down">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Core Valuess</span>
            </h2>
            
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              These sprinciples guide everything we do at MusicStudents, from course creation to community building.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="flip-up"
                data-aos-delay={value.delay}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl text-center hover:border-slate-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 h-full">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-md opacity-30`}></div>
                    <div className={`relative bg-gradient-to-r ${value.color} p-5 rounded-2xl inline-flex group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <div className="text-white text-2xl">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
                    {value.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="flex justify-center">
                    <div className={`w-16 h-1 bg-gradient-to-r ${value.color} rounded-full opacity-60 group-hover:w-24 transition-all duration-300`}></div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <FaRocket className={`text-2xl bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <FaHeart className="text-pink-400 text-xl" />
              <span className="text-slate-300 font-semibold">
                Join a community built on <span className="text-cyan-400">trust</span> and <span className="text-purple-400">excellence</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CoreValues