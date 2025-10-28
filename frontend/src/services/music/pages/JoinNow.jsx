import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaMusic, 
  FaTrophy, 
  FaUsers, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPlay,
  FaStar,
  FaClock,
  FaLevelUpAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaCertificate,
  FaHeart,
  FaComments,
  FaShare,
  FaArrowRight,
  FaCheck,
  FaCrown,
  FaAward,
  FaFire,
  FaUserPlus
} from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";

export default function JoinNow() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", interest: "courses" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const courses = [
    {
      id: 1,
      title: "Music Production Masterclass",
      instructor: "David Chen",
      duration: "8 weeks",
      level: "Intermediate",
      students: "1.2K",
      rating: 4.9,
      price: "$199",
      featured: true,
      icon: <FaMusic className="text-xl" />,
      image: "🎛️"
    },
    {
      id: 2,
      title: "Vocal Training & Techniques",
      instructor: "Sarah Johnson",
      duration: "6 weeks",
      level: "All Levels",
      students: "2.4K",
      rating: 4.8,
      price: "$149",
      featured: false,
      icon: <FaGraduationCap className="text-xl" />,
      image: "🎤"
    },
    {
      id: 3,
      title: "Guitar for Beginners",
      instructor: "Mike Rodriguez",
      duration: "4 weeks",
      level: "Beginner",
      students: "3.1K",
      rating: 4.7,
      price: "$99",
      featured: true,
      icon: <IoMdMusicalNotes className="text-xl" />,
      image: "🎸"
    }
  ];

  const competitions = [
    {
      id: 1,
      title: "Global Music Championship",
      prize: "$50,000",
      participants: "2,500+",
      deadline: "Jan 15, 2024",
      status: "Registration Open",
      category: "All Genres",
      featured: true,
      icon: <FaTrophy className="text-xl" />
    },
    {
      id: 2,
      title: "Electronic Beat Battle",
      prize: "$25,000",
      participants: "1,800+",
      deadline: "Dec 20, 2024",
      status: "Upcoming",
      category: "Electronic",
      featured: false,
      icon: <FaFire className="text-xl" />
    },
    {
      id: 3,
      title: "Vocal Excellence Awards",
      prize: "$30,000",
      participants: "1,200+",
      deadline: "Feb 10, 2024",
      status: "Registration Open",
      category: "Vocals",
      featured: true,
      icon: <FaCrown className="text-xl" />
    }
  ];

  const communityFeatures = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "10,000+ Musicians",
      description: "Connect with artists worldwide",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaComments className="text-2xl" />,
      title: "Live Feedback",
      description: "Real-time feedback from experts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Supportive Community",
      description: "Positive growth environment",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FaShare className="text-2xl" />,
      title: "Collaboration",
      description: "Find band members & collaborators",
      color: "from-green-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 md:py-8 overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Features & Form */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-aos="fade-right">
              <FeatureCard 
                icon={<FaMusic />} 
                title="Courses" 
                desc="Structured lessons from pros — theory, production, performance." 
              />
              <FeatureCard 
                icon={<FaTrophy />} 
                title="Competitions" 
                desc="Compete, get judged, and win studio time & prizes." 
              />
              <FeatureCard 
                icon={<FaUsers />} 
                title="Community" 
                desc="Collaborate, share tracks, and get feedback." 
              />
            </div>

            {/* Form Section */}
            <section className="p-4 md:p-8 rounded-2xl bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm" data-aos="fade-up">
              <div className="max-w-2xl w-full mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to join?</h3>
                <p className="text-slate-300 mb-6">Select your path and get instant access to exclusive resources.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl px-4 py-3 bg-slate-700/50 border border-slate-600/50 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                      className="w-full rounded-xl px-4 py-3 bg-slate-700/50 border border-slate-600/50 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">I'm interested in</label>
                    <div className="grid grid-cols-2  md:grid-cols-3 gap-3">
                      <SelectPill active={form.interest === "courses"} onClick={() => setForm((s) => ({ ...s, interest: "courses" }))}>
                        Courses
                      </SelectPill>
                      <SelectPill active={form.interest === "competitions"} onClick={() => setForm((s) => ({ ...s, interest: "competitions" }))}>
                        Competitions
                      </SelectPill>
                      <SelectPill active={form.interest === "community"} onClick={() => setForm((s) => ({ ...s, interest: "community" }))}>
                        Community
                      </SelectPill>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-white font-bold bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg border border-transparent focus:outline-none hover:scale-105 transition-transform duration-300"
                    >
                      <span className="absolute -left-24 top-0 h-full w-24 transform -skew-x-12 opacity-30 animate-shine bg-white"></span>
                      <span className="relative flex items-center gap-3">
                        <FaUserPlus />
                        {submitted ? "You're in!" : "Join Now - It's Free"}
                      </span>
                    </button>
                  </div>

                  <div className="text-sm text-slate-400 text-center">
                    By joining you agree to our <a className="text-cyan-400 hover:underline cursor-pointer">Terms</a> & <a className="text-cyan-400 hover:underline cursor-pointer">Privacy</a>.
                  </div>
                </form>
              </div>
            </section>
          </div>

          {/* Right: Community Stats & Social */}
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="p-5 md:p-10 rounded-2xl bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Vibrant Community</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-3`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-slate-300 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10K+</div>
                  <div className="text-slate-300 text-sm">Active Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">5K+</div>
                  <div className="text-slate-300 text-sm">Music Projects</div>
                </div>
              </div>
            </div>

            {/* Social & Live Sessions */}
            <div className="hidden md:flex p-6 rounded-2xl bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                    <FaPlay />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Live sessions weekly</p>
                    <p className="text-slate-300 text-sm">Join masterclasses & collabs</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <SocialIcon icon={<FaFacebookF />} ariaLabel="Facebook" />
                  <SocialIcon icon={<FaTwitter />} ariaLabel="Twitter" />
                  <SocialIcon icon={<FaInstagram />} ariaLabel="Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

      {/* Shine Animation Styles */}
      <style jsx>{`
        .animate-shine { animation: shine 2s infinite; }
        @keyframes shine {
          0% { transform: translateX(-120%); opacity: 0; }
          50% { transform: translateX(120%); opacity: 0.35; }
          100% { transform: translateX(240%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ===== Subcomponents ===== */
function FeatureCard({ icon, title, desc }) {
  return (
    <div 
      className="p-4 rounded-xl bg-slate-900/20 border border-slate-700/40 hover:border-slate-500/60 transition-all duration-300 group hover:scale-105"
      data-aos="zoom-in"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  );
}

function SocialIcon({ icon, ariaLabel }) {
  return (
    <button 
      aria-label={ariaLabel} 
      className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
    >
      {icon}
    </button>
  );
}

function SelectPill({ children, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-inner border border-transparent"
          : "bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:border-slate-500/50"
      }`}
    >
      {children}
    </button>
  );
}