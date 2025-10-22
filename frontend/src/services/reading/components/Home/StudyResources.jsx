import React, { useState } from "react";

const StudyResources = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const resources = [
    {
      title: "1st Year",
      desc: "Curated notes, lectures, and solved past papers.",
      aos: "fade-up",
      icon: "📘",
      category: "academic",
      color: "from-blue-500 to-cyan-500",
      link: "#1st-year", // Added link property
    },
    {
      title: "2nd Year",
      desc: "Comprehensive resources to help you excel.",
      aos: "fade-up",
      icon: "📗",
      category: "academic",
      color: "from-green-500 to-emerald-500",
      link: "#2nd-year",
    },
    {
      title: "University",
      desc: "High-quality study materials & exam prep guides.",
      aos: "fade-up",
      icon: "🎓",
      category: "academic",
      color: "from-purple-500 to-pink-500",
      link: "#university",
    },
    {
      title: "Past Papers",
      desc: "Solve and analyze previous year question papers.",
      aos: "zoom-in",
      icon: "📝",
      category: "practice",
      color: "from-orange-500 to-red-500",
      link: "#past-papers",
    },
    {
      title: "Notes & PDFs",
      desc: "Download well-organized notes anytime.",
      aos: "zoom-in",
      icon: "📄",
      category: "materials",
      color: "from-gray-500 to-blue-500",
      link: "#notes",
    },
    {
      title: "Quizzes & Tests",
      desc: "Practice tests to evaluate your understanding.",
      aos: "fade-up",
      icon: "🧪",
      category: "practice",
      color: "from-yellow-500 to-orange-500",
      link: "#quizzes",
    },
    {
      title: "AI Study Plans",
      desc: "Personalized AI-guided learning plans for efficiency.",
      aos: "fade-up",
      icon: "🤖",
      category: "tools",
      color: "from-teal-500 to-blue-500",
      link: "#ai-plans",
    },
    {
      title: "Community Support",
      desc: "Connect with peers and mentors for guidance.",
      aos: "zoom-in",
      icon: "🤝",
      category: "community",
      color: "from-indigo-500 to-purple-500",
      link: "#community",
    },
    {
      title: "Video Lectures",
      desc: "High-quality video lessons from experts.",
      aos: "zoom-in",
      icon: "🎥",
      category: "materials",
      color: "from-red-500 to-pink-500",
      link: "#videos",
    },
  
  ];

  const categories = [
    { id: "all", name: "All Resources", count: resources.length },
    { id: "academic", name: "Academic", count: resources.filter(r => r.category === "academic").length },
    { id: "practice", name: "Practice", count: resources.filter(r => r.category === "practice").length },
    { id: "materials", name: "Materials", count: resources.filter(r => r.category === "materials").length },
    { id: "tools", name: "Tools", count: resources.filter(r => r.category === "tools").length },
    { id: "community", name: "Community", count: resources.filter(r => r.category === "community").length },
  ];

  const filteredResources = resources.filter(
    resource => activeCategory === "all" || resource.category === activeCategory
  );

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      id="resources"
    >
      {/* Animated background elements (moved custom styles into a standard class name for clarity) */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl top-10 left-10 custom-float-1"></div>
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10 custom-float-2"></div>
      <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Essential <span className="text-white/80">Study Resources</span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Access comprehensive learning materials, practice tools, and community support 
            to excel in your academic journey.
          </p>
        </div>

        {/* Category Filter */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              id={`tab-${category.id}`}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border-2 backdrop-blur-sm shadow-xl ${
                activeCategory === category.id
                  ? "bg-purple-600/70 text-white border-purple-400 shadow-purple-500/50 scale-105" // More distinct active state
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs md:text-sm bg-white/20 px-2 py-0.5 rounded-full font-medium">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredResources.length > 0 ? (
            filteredResources.map((item, i) => (
              <a // Changed div to anchor tag for better UX/SEO (assuming these link somewhere)
                key={i}
                href={item.link || "#"}
                data-aos={item.aos}
                data-aos-delay={(i % 5) * 100}
                className="group relative block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 hover:scale-[1.01] overflow-hidden" // Added hover transform/scale
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Icon with Gradient Background */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl md:text-4xl transform group-hover:scale-105 transition-all duration-500 shadow-xl`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300 text-center">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-300 group-hover:text-gray-100 text-center leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Animated Link Text (Replaced button for better semantic HTML in a card link) */}
                <div className="w-full text-center mt-2 text-purple-400 font-semibold group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center">
                  View Resource 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>

                {/* Hover Effect Line (Kept but simplified) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
              </a>
            ))
          ) : (
            <div className="lg:col-span-3 xl:col-span-5 text-center py-10">
              <p className="text-xl text-gray-400">
                No resources found in the **{categories.find(c => c.id === activeCategory)?.name}** category.
              </p>
              <button 
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                &larr; View All Resources
              </button>
            </div>
          )}
        </div>

       
      </div>

      {/* Custom Styles for Floating Animation */}
      <style jsx>{`
        @keyframes custom-float-1-animation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); } /* Increased amplitude */
        }
        @keyframes custom-float-2-animation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-180deg); } /* Changed rotation for variety */
        }
        .custom-float-1 {
          animation: custom-float-1-animation 10s ease-in-out infinite;
        }
        .custom-float-2 {
          animation: custom-float-2-animation 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default StudyResources;