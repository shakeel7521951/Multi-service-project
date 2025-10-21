import React from "react";

const testimonials = [
  { name: "Ali Khan", feedback: "SmartStudy made my exam prep so easy. Loved the notes and past papers!" },
  { name: "Sara Ahmed", feedback: "The online tutoring helped me understand tough topics clearly." },
  { name: "Zain Malik", feedback: "I could download PDFs and follow the study plan anywhere. Amazing!" },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700">What Students Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="italic mb-4">"{item.feedback}"</p>
              <h4 className="font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
