import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaperPlane, FaUser, FaEnvelope, FaBook, FaPhone } from "react-icons/fa";

export default function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      subject: "",
      message: ""
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
         setIsSubmitting(false);
         setSubmitStatus('success');
         setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            subject: "",
            message: ""
         });
      }, 2000);
   };

   const courses = [
      "Select Course Interest",
      "Matriculation Science",
      "Matriculation Arts", 
      "FSC Pre-Medical",
      "FSC Pre-Engineering",
      "ICS Computer Science",
      "I.Com Commerce",
      "FA Arts & Humanities",
      "Medical Entry Test",
      "Engineering Entry Test"
   ];

   return (
      <section id="contact-form" className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               {/* Left Content */}
               <div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                     Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Message</span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                     Have questions about our courses or need assistance with enrollment? 
                     Fill out the form and our team will get back to you within 2 hours.
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                     {[
                        "Quick response within 2 hours",
                        "Expert guidance on course selection", 
                        "Personalized learning recommendations",
                        "Scholarship and fee structure details",
                        "Career counseling available"
                     ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                           <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                           </div>
                           <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                     ))}
                  </div>

                  {/* Emergency Contact */}
                  <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                     <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Need Immediate Help?</h4>
                     <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Call us now for urgent inquiries
                     </p>
                     <a href="tel:+923001234567" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                        +92 300 123 4567
                     </a>
                  </div>
               </div>

               {/* Right Content - Form */}
               <div data-aos="fade-left">
                  <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                     {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300">
                          Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.
                        </div>
                     )}

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name */}
                        <div className="relative">
                           <FaUser className="absolute left-3 top-3 text-gray-400" />
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Full Name"
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              required
                           />
                        </div>

                        {/* Email */}
                        <div className="relative">
                           <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your Email Address"
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                              required
                           />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Phone */}
                        <div className="relative">
                           <FaPhone className="absolute left-3 top-3 text-gray-400" />
                           <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Your Phone Number"
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                           />
                        </div>

                        {/* Course Interest */}
                        <div className="relative">
                           <FaBook className="absolute left-3 top-3 text-gray-400" />
                           <select
                              name="course"
                              value={formData.course}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white appearance-none"
                           >
                              {courses.map((course, index) => (
                                 <option key={index} value={course}>{course}</option>
                              ))}
                           </select>
                        </div>
                     </div>

                     {/* Subject */}
                     <div className="mb-6">
                        <input
                           type="text"
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           placeholder="Subject of Your Message"
                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                           required
                        />
                     </div>

                     {/* Message */}
                     <div className="mb-6">
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Your Message..."
                           rows="6"
                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                           required
                        ></textarea>
                     </div>

                     {/* Submit Button */}
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                     >
                        {isSubmitting ? (
                           <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending...</span>
                           </>
                        ) : (
                           <>
                              <FaPaperPlane />
                              <span>Send Message</span>
                           </>
                        )}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}