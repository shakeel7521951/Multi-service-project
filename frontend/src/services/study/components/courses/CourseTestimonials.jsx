import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function CourseTestimonials() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const testimonials = [
      {
         name: "Ayesha Khan",
         course: "FSC Pre-Medical",
         result: "Scored 1045/1100 in FSC",
         rating: 5,
         text: "StudyHub transformed my learning experience. The biology and chemistry courses were exceptional!",
         image: "/imgs/students/student1.jpg",
      },
      {
         name: "Ali Ahmed",
         course: "Medical Entry Test",
         result: "Got 190/200 in MDCAT",
         rating: 5,
         text: "The entry test preparation course was a game-changer. Expert teachers and comprehensive material!",
         image: "/imgs/students/student2.jpg",
      },
      {
         name: "Sara Malik",
         course: "Matric Science",
         result: "Achieved 1050/1100",
         rating: 5,
         text: "Physics and mathematics concepts became so clear with StudyHub's interactive approach.",
         image: "/imgs/students/student3.jpg",
      },
   ];

   const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, index) => (
         <FaStar
            key={index}
            className={`text-yellow-400 ${
               index < rating ? "opacity-100" : "opacity-30"
            }`}
         />
      ));
   };

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Success{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                     Stories
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Hear from our students who have achieved remarkable results
                  with StudyHub courses
               </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                  <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-delay={index * 200}
                     className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Quote Icon */}
                     <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-white text-sm" />
                     </div>

                     {/* Rating */}
                     <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                     </div>

                     {/* Testimonial Text */}
                     <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        "{testimonial.text}"
                     </p>

                     {/* Student Info */}
                     <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           {testimonial.image ? (
                              <img
                                 src={testimonial.image}
                                 alt={testimonial.name}
                                 className="w-full h-full rounded-full object-cover"
                              />
                           ) : (
                              testimonial.name.charAt(0)
                           )}
                        </div>
                        <div className="flex-1">
                           <h4 className="font-semibold text-gray-800 dark:text-white">
                              {testimonial.name}
                           </h4>
                           <p className="text-sm text-indigo-600 dark:text-indigo-400">
                              {testimonial.course}
                           </p>
                           <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.result}
                           </p>
                        </div>
                     </div>

                     {/* Hover Gradient */}
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                  </div>
               ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16" data-aos="fade-up">
               <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                     Ready to Create Your Success Story?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                     Join thousands of students who have transformed their
                     academic journey with StudyHub
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300">
                        Start Free Trial
                     </button>
                     <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                        View All Success Stories
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
