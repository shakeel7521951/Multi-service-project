import React from "react";

const resources = [
  { title: "1st Year", desc: "Curated notes, lectures, and solved past papers." },
  { title: "2nd Year", desc: "Comprehensive resources to help you excel." },
  { title: "University", desc: "High-quality study materials & exam prep guides." },
  { title: "Past Papers", desc: "Solve and analyze previous year question papers." },
  { title: "Notes & PDFs", desc: "Download well-organized notes anytime." },
];

const StudyResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
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

export default StudyResources;
