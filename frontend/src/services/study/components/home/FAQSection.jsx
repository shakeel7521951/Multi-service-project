import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
   FaChevronDown,
   FaChevronUp,
   FaGraduationCap,
   FaRupeeSign,
   FaUserFriends,
   FaMobileAlt,
} from "react-icons/fa";

export default function FAQSection() {
   const [activeIndex, setActiveIndex] = useState(null);
   const navigate = useNavigate();

   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   const faqs = [
      {
         question:
            "What courses do you offer for Matric and Intermediate students?",
         answer:
            "We offer comprehensive courses for Matric (Science & Arts), FSC (Pre-Medical, Pre-Engineering), ICS, I.Com, and FA. Each course includes video lectures, practice materials, and doubt-solving sessions.",
         icon: <FaGraduationCap className="text-indigo-500 text-xl" />,
      },
      {
         question: "How much do your courses cost?",
         answer:
            "Our courses start from ₹6,999 for Matric programs and go up to ₹15,999 for FSC programs. We offer flexible payment options and discounts for early enrollment.",
         icon: <FaRupeeSign className="text-green-500 text-xl" />,
      },
      {
         question: "Can I learn at my own pace?",
         answer:
            "Absolutely! All our courses are self-paced with lifetime access. You can learn anytime, anywhere, and revisit the content as needed.",
         icon: <FaMobileAlt className="text-purple-500 text-xl" />,
      },
      {
         question: "Do you provide certificate after course completion?",
         answer:
            "Yes, we provide industry-recognized certificates for all our courses that you can share on your LinkedIn profile and resume.",
         icon: <FaGraduationCap className="text-blue-500 text-xl" />,
      },
      {
         question: "How do I get help if I have doubts?",
         answer:
            "We provide 24/7 doubt support through live chat, dedicated Q&A forums, and weekly live sessions with expert mentors.",
         icon: <FaUserFriends className="text-pink-500 text-xl" />,
      },
      {
         question: "What makes StudyHub different from other platforms?",
         answer:
            "We focus specifically on Pakistani curriculum with local context, provide personalized learning paths, and offer career guidance along with academic preparation.",
         icon: <FaGraduationCap className="text-orange-500 text-xl" />,
      },
   ];

   const features = [
      {
         icon: "📚",
         title: "Curriculum Aligned",
         description: "Perfectly aligned with Pakistani educational boards",
      },
      {
         icon: "👨‍🏫",
         title: "Expert Teachers",
         description: "Learn from experienced educators and industry experts",
      },
      {
         icon: "💻",
         title: "Live Classes",
         description: "Interactive live sessions with real-time doubt solving",
      },
      {
         icon: "📱",
         title: "Mobile App",
         description: "Learn on-the-go with our dedicated mobile application",
      },
   ];

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-30"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-30"></div>

         <div className="relative z-10 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Frequently Asked{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Questions
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Find answers to common questions about our courses, pricing,
                  and learning platform
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Left Side - FAQ Items */}
               <div className="space-y-6">
                  {faqs.map((faq, index) => (
                     <div
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
                     >
                        <button
                           onClick={() => toggleFAQ(index)}
                           className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                        >
                           <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">{faq.icon}</div>
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                                 {faq.question}
                              </h3>
                           </div>
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

               {/* Right Side - Features & Contact */}
               <div className="space-y-8">
                  {/* Features Grid */}
                  <div data-aos="fade-left">
                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        Why Choose StudyHub?
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                           <div
                              key={index}
                              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                           >
                              <div className="text-2xl mb-2">
                                 {feature.icon}
                              </div>
                              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                                 {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                 {feature.description}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Contact Card */}
                  <div
                     data-aos="fade-left"
                     data-aos-delay="200"
                     className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white"
                  >
                     <h3 className="text-2xl font-bold mb-4">
                        Still have questions?
                     </h3>
                     <p className="mb-6 opacity-90">
                        Our support team is here to help you with any questions
                        about our courses or platform.
                     </p>
                     <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              📞
                           </div>
                           <div>
                              <div className="font-semibold">Call Us</div>
                              <div className="text-sm opacity-90">
                                 +92 300 1234567
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              💬
                           </div>
                           <div>
                              <div className="font-semibold">Live Chat</div>
                              <div className="text-sm opacity-90">
                                 24/7 Available
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              ✉️
                           </div>
                           <div>
                              <div className="font-semibold">Email</div>
                              <div className="text-sm opacity-90">
                                 support@studyhub.com
                              </div>
                           </div>
                        </div>
                     </div>

                     <button
                        onClick={() => {
                           navigate("/study/study-contact");
                        }}
                        className="w-full mt-6 bg-white cursor-pointer text-indigo-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                     >
                        Contact Support
                     </button>
                  </div>

                  {/* Quick Stats */}
                  <div
                     data-aos="fade-left"
                     data-aos-delay="400"
                     className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
                  >
                     <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                        Quick Facts
                     </h4>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                           <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                              98%
                           </div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">
                              Success Rate
                           </div>
                        </div>
                        <div className="text-center">
                           <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              24/7
                           </div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">
                              Support
                           </div>
                        </div>
                        <div className="text-center">
                           <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                              500+
                           </div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">
                              Courses
                           </div>
                        </div>
                        <div className="text-center">
                           <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              25K+
                           </div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">
                              Students
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16" data-aos="fade-up">
               <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                     Ready to Start Your Learning Journey?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                     Join thousands of successful students and achieve your
                     academic goals with our expert-guided courses
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                        Browse All Courses
                     </button>
                     <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        Book Free Demo
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
