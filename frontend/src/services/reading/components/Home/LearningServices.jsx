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
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700">
          Learning Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningServices;
