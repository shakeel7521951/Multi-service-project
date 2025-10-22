import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CourseFAQ() {
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
         question: "How do I enroll in a course?",
         answer:
            "You can enroll in any course by clicking the 'Enroll Now' button on the course page. You'll need to create an account, choose your payment method, and complete the enrollment process.",
      },
      {
         question: "Can I access courses on mobile?",
         answer:
            "Yes! All our courses are fully optimized for mobile devices. You can access them through our mobile app or any web browser on your smartphone or tablet.",
      },
      {
         question: "What is the course duration?",
         answer:
            "Course durations vary depending on the program. Matric courses typically take 12 months, FSC courses 24 months, and entry test preparation courses 6 months. However, you can learn at your own pace.",
      },
      {
         question: "Do you provide certificates?",
         answer:
            "Yes, we provide industry-recognized certificates upon successful completion of all course requirements, including assignments and assessments.",
      },
      {
         question: "What if I have doubts during the course?",
         answer:
            "We provide 24/7 doubt support through live chat, dedicated Q&A forums, and weekly live sessions with expert mentors.",
      },
      {
         question: "Is there a money-back guarantee?",
         answer:
            "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course within the first 7 days, you can request a full refund.",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Frequently Asked{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Questions
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300">
                  Find answers to common questions about our courses and
                  learning platform
               </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
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

            {/* Additional Help */}
            <div className="text-center mt-12" data-aos="fade-up">
               <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                     Still have questions?
                  </h3>
                  <p className="mb-6 opacity-90">
                     Our support team is here to help you with any questions
                     about courses, enrollment, or platform features.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                        Contact Support
                     </button>
                     <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300">
                        Schedule Call
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
