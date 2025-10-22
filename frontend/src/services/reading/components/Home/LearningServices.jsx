import React from "react";

const services = [
  { title: "Online Tutoring", desc: "1-on-1 sessions with experienced tutors." },
  { title: "Career Guidance", desc: "Plan your academic and professional future." },
  { title: "Study Plans", desc: "Smart and customizable study schedules." },
  { title: "Library Access", desc: "Read thousands of academic resources online." },
  { title: "Download PDFs", desc: "Save your materials for offline reading." },
];

const LearningServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Founded by students who struggled to find reliable, organized study materials online, 
              SmartStudy emerged from a simple need: to create a platform where every student can 
              access quality education resources without the frustration of scattered content.
            </p>
            <p className="text-lg text-gray-300">
              What started as a solution to our own academic challenges has grown into a comprehensive 
              learning ecosystem trusted by thousands of students worldwide.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">🎯 Our Mission</h3>
              <p className="text-gray-300">
                To democratize quality education by providing accessible, comprehensive, and personalized 
                learning resources for every student, from first year to university.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">🌍 Our Vision</h3>
              <p className="text-gray-300">
                A world where every student has equal access to the tools and guidance needed to achieve 
                their academic dreams, regardless of background or location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    // <section className="py-16 bg-indigo-50">
    //   <div className="container mx-auto px-6 text-center">
    //     <h2 className="text-3xl font-bold mb-8 text-indigo-700">
    //       Learning Services
    //     </h2>
    //     <div className="grid gap-6 md:grid-cols-3">
    //       {services.map((item, i) => (
    //         <div
    //           key={i}
    //           className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
    //         >
    //           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //           <p>{item.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default LearningServices;


