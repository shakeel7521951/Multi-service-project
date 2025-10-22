import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ContactFAQ() {
   const [activeIndex, setActiveIndex] = useState(null);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   const faqs = [
      {
         question:
            "What is the best way to contact StudyHub for course inquiries?",
         answer:
            "For course-related inquiries, we recommend using our contact form above or calling our main helpline. This ensures your query reaches the right department quickly.",
      },
      {
         question: "How long does it take to get a response?",
         answer:
            "We typically respond within 2 hours during business hours. For urgent matters, please call our helpline for immediate assistance.",
      },
      {
         question: "Do you offer in-person counseling sessions?",
         answer:
            "Yes! We offer free in-person counseling sessions at both our Lahore and Karachi campuses. You can schedule an appointment through our website or by calling us.",
      },
      {
         question: "What information should I include in my inquiry?",
         answer:
            "Please include your name, contact details, educational background, course interests, and any specific questions you have. This helps us provide personalized assistance.",
      },
      {
         question:
            "Do you have different contact numbers for different courses?",
         answer:
            "We have a centralized helpline, but you can mention your course interest and we'll connect you with the relevant course counselor for specialized guidance.",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Contact{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     FAQ
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300">
                  Common questions about contacting us and getting support
               </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                     <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                     >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                           {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                           {activeIndex === index ? (
                              <FaChevronUp className="text-indigo-500 text-lg" />
                           ) : (
                              <FaChevronDown className="text-gray-400 text-lg" />
                           )}
                        </div>
                     </button>

                     <div
                        className={`px-6 pb-6 transition-all duration-300 ${
                           activeIndex === index ? "block" : "hidden"
                        }`}
                     >
                        <div className="flex">
                           <div className="flex-shrink-0 w-1 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full mr-4"></div>
                           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
