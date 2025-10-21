import React from "react";

const features = [
  { title: "Expert Tutors", desc: "Learn from experienced professionals who guide you every step." },
  { title: "Flexible Learning", desc: "Access resources anytime, anywhere on any device." },
  { title: "Comprehensive Materials", desc: "Notes, PDFs, past papers, and study plans in one place." },
  { title: "Student-Centered", desc: "Everything designed to help you succeed academically." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose SmartStudy?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
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

export default WhyChooseUs;
