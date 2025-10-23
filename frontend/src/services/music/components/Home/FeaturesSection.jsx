import React, { useEffect } from 'react';
import { FaMusic, FaAward, FaUserGraduate, FaClock, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <FaMusic />,
      title: "Learn Music",
      desc: "Join structured courses designed by top musicians and certified tutors.",
    },
    {
      icon: <FaAward />,
      title: "Compete & Win",
      desc: "Take part in online music competitions and showcase your talent globally.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Connect with Mentors",
      desc: "Book live sessions with professional tutors for feedback and coaching.",
    },
  ];

  const courses = [
    { 
      title: "Vocal Training - Beginner", 
      duration: "6 Weeks",
      level: "Beginner",
      students: "1.2k enrolled"
    },
    { 
      title: "Guitar Chords & Rhythm", 
      duration: "5 Weeks",
      level: "Intermediate", 
      students: "890 enrolled"
    },
    { 
      title: "Music Production Basics", 
      duration: "8 Weeks",
      level: "Beginner",
      students: "2.1k enrolled"
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-5 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-10" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-down">
            Why Join <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">MusicStudents</span>?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Experience the perfect blend of learning, competition, and mentorship in one platform
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full">
                
                {/* Icon Container */}
                <div className="relative mb-6" data-aos="zoom-in" data-aos-delay={i * 200}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-md opacity-50"></div>
                  <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-2xl inline-flex group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <div className="text-white text-2xl">{f.icon}</div>
                  </div>
                </div>
                
                <h3 className="md:text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300" data-aos="fade-right" data-aos-delay={i * 250}>
                  {f.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base" data-aos="fade-up" data-aos-delay={i * 300}>
                  {f.desc}
                </p>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <FaArrowRight className="text-cyan-400 text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-15" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-down">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Start your musical journey with our most popular courses designed for all skill levels
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Course Header */}
                <div className="flex-1" data-aos="fade-right" data-aos-delay={i * 150}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <FaClock className="text-cyan-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="md:text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300" data-aos="fade-up" data-aos-delay={i * 200}>
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6" data-aos="fade-up" data-aos-delay={i * 250}>
                    {course.students}
                  </p>
                </div>
                
                {/* Enroll Button */}
                <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn" data-aos="zoom-in" data-aos-delay={i * 300}>
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Enroll Now
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Courses Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="px-8 py-3 rounded-full border border-slate-600/80  text-slate-300 hover:text-white hover:border-slate-500/80 transition-all duration-300 hover:scale-105">
            View All Courses
          </button>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;
