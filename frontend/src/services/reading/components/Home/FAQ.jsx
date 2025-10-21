import React, { useState } from "react";

const faqs = [
  { question: "How do I access the notes and PDFs?", answer: "Simply select your study level and click on the materials you want to download or view online." },
  { question: "Can I get 1-on-1 tutoring?", answer: "Yes! You can book online tutoring sessions with our expert tutors." },
  { question: "Are the past papers updated?", answer: "Absolutely, we provide the latest past papers for each academic year." },
  { question: "Is there a free trial?", answer: "Yes, you can access limited resources for free to explore our platform." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 mb-4 rounded-2xl shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => toggleFAQ(i)}
            >
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              {openIndex === i && <p className="text-gray-700">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
