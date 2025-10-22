import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
   FaBook,
   FaStar,
   FaClock,
   FaUserGraduate,
   FaHeart,
   FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CoursesGrid({ filters = {} }) {
   const [courses, setCourses] = useState([]);
   const [favorites, setFavorites] = useState(new Set());
   const [sortBy, setSortBy] = useState("popular");

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });

      // Mock data - in real app, this would come from API
      const mockCourses = [
         {
            id: 1,
            title: "Matric Physics Complete Course",
            instructor: "Dr. Ahmed Khan",
            category: "matric",
            level: "beginner",
            price: 8999,
            originalPrice: 12999,
            rating: 4.8,
            students: 2500,
            duration: "12 Months",
            image: "/imgs/courses/physics.jpg",
            isFeatured: true,
            subjects: ["Mechanics", "Waves", "Electricity", "Modern Physics"],
         },
         {
            id: 2,
            title: "FSC Biology - Cell Biology & Genetics",
            instructor: "Prof. Sarah Malik",
            category: "fsc-medical",
            level: "intermediate",
            price: 7499,
            originalPrice: 9999,
            rating: 4.9,
            students: 1800,
            duration: "8 Months",
            image: "/imgs/courses/biology.jpg",
            isFeatured: true,
            subjects: ["Cell Structure", "Genetics", "Molecular Biology"],
         },
         // Add more course objects...
      ];

      setCourses(mockCourses);
   }, []);

   const toggleFavorite = (courseId) => {
      setFavorites((prev) => {
         const newFavorites = new Set(prev);
         if (newFavorites.has(courseId)) {
            newFavorites.delete(courseId);
         } else {
            newFavorites.add(courseId);
         }
         return newFavorites;
      });
   };

   const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, index) => (
         <FaStar
            key={index}
            className={`text-sm ${
               index < Math.floor(rating)
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
            }`}
         />
      ));
   };

   const formatPrice = (price) => {
      return `₹${price.toLocaleString()}`;
   };

   const filteredCourses = courses.filter((course) => {
      // Apply filters here based on filters prop
      return true; // Simplified for this example
   });

   return (
      <section
         id="courses-grid"
         className="relative w-full py-24 px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden"
      >
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header with Sort */}
            <div
               className="flex flex-col md:flex-row justify-between items-center mb-12"
               data-aos="fade-down"
            >
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                     All Courses
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                     {filteredCourses.length} courses found
                  </p>
               </div>

               <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-gray-600 dark:text-gray-300">
                     Sort by:
                  </span>
                  <select
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                     <option value="popular">Most Popular</option>
                     <option value="rating">Highest Rated</option>
                     <option value="newest">Newest</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                  </select>
               </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredCourses.map((course, index) => (
                  <div
                     key={course.id}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                     {/* Course Image */}
                     <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                           <FaBook className="text-6xl text-white opacity-50" />
                        </div>

                        {/* Favorite Button */}
                        <button
                           onClick={() => toggleFavorite(course.id)}
                           className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                           {favorites.has(course.id) ? (
                              <FaHeart className="text-red-500" />
                           ) : (
                              <FaRegHeart className="text-gray-400" />
                           )}
                        </button>

                        {/* Featured Badge */}
                        {course.isFeatured && (
                           <div className="absolute top-4 left-4">
                              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                                 Featured
                              </span>
                           </div>
                        )}

                        {/* Discount Badge */}
                        <div className="absolute bottom-4 left-4">
                           <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                              SAVE{" "}
                              {Math.round(
                                 (1 - course.price / course.originalPrice) * 100
                              )}
                              %
                           </span>
                        </div>
                     </div>

                     {/* Course Content */}
                     <div className="p-6">
                        {/* Category & Level */}
                        <div className="flex items-center justify-between mb-3">
                           <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                              {course.category.toUpperCase()}
                           </span>
                           <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                              {course.level}
                           </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                           {course.title}
                        </h3>

                        {/* Instructor */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                           By {course.instructor}
                        </p>

                        {/* Rating and Students */}
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center space-x-1">
                              {renderStars(course.rating)}
                              <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                                 ({course.rating})
                              </span>
                           </div>
                           <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <FaUserGraduate className="mr-1" />
                              {course.students.toLocaleString()}
                           </div>
                        </div>

                        {/* Subjects */}
                        <div className="mb-4">
                           <div className="flex flex-wrap gap-1">
                              {course.subjects
                                 .slice(0, 2)
                                 .map((subject, idx) => (
                                    <span
                                       key={idx}
                                       className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                                    >
                                       {subject}
                                    </span>
                                 ))}
                              {course.subjects.length > 2 && (
                                 <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                                    +{course.subjects.length - 2} more
                                 </span>
                              )}
                           </div>
                        </div>

                        {/* Duration and Price */}
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <FaClock className="mr-1" />
                              {course.duration}
                           </div>
                           <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-gray-800 dark:text-white">
                                 {formatPrice(course.price)}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                 {formatPrice(course.originalPrice)}
                              </span>
                           </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                           <Link
                              to={`/course/${course.id}`}
                              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg text-center hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                           >
                              View Course
                           </Link>
                           <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                              <FaRegHeart />
                           </button>
                        </div>
                     </div>

                     {/* Hover Gradient Border */}
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"></div>
                  </div>
               ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12" data-aos="fade-up">
               <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  Load More Courses
               </button>
            </div>
         </div>
      </section>
   );
}
