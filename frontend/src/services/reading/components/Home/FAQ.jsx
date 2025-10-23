import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imagefaq from '../../../../assets/faqimg.webp'

const ReadingFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I download books as PDF?",
      answer:
        "Yes! Every book listed on the platform has a downloadable PDF version for offline reading.",
    },
    {
      question: "Are the resources available for all grades?",
      answer:
        "We provide study materials for both Intermediate and University students across multiple subjects.",
    },
    {
      question: "Can I access past exam papers?",
      answer:
        "Absolutely. You can view and download past papers for practice and exam preparation.",
    },
    {
      question: "Is registration required to access materials?",
      answer:
        "No, most resources are free to access. Some premium resources may require registration.",
    },
    {
      question: "Can I suggest books or notes to be added?",
      answer:
        "Yes, you can contact us via the support form to suggest new materials for the platform.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-gray-300">
            All your questions about accessing books, PDFs, and past papers answered here.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Illustration */}
          <div className="lg:w-1/2 w-full" data-aos="fade-right">
            <img
              src={imagefaq}
              alt="Student Reading Illustration"
              className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-xl text-white">
              <h3 className="font-bold text-xl mb-3">Still have questions?</h3>
              <p className="mb-4">
                Can't find what you're looking for? Contact our support team for help.
              </p>
              <button className="px-5 py-2 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:w-1/2 w-full space-y-4" data-aos="fade-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01] duration-300"
              >
                <button
                  className={`w-full text-left px-6 py-5 flex justify-between items-center ${
                    activeIndex === index ? "bg-slate-700" : "bg-slate-800"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-5 bg-slate-700 text-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingFAQSection;
