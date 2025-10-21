import React from "react";

const steps = [
  { step: "1", title: "Choose Your Level", desc: "Select 1st Year, 2nd Year, or University materials." },
  { step: "2", title: "Access Resources", desc: "View notes, PDFs, past papers, and study guides." },
  { step: "3", title: "Learn & Succeed", desc: "Follow study plans and improve your grades." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-indigo-700 mb-2">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
