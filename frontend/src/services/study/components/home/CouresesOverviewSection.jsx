import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
   FaBook,
   FaUserGraduate,
   FaClock,
   FaStar,
   FaSearch,
   FaFilter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AcademicCoursesSection() {
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedLevel, setSelectedLevel] = useState("All");
   const [priceRange, setPriceRange] = useState("All");
   const [showFilters, setShowFilters] = useState(false);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const courses = [
      {
         id: 1,
         image: "/imgs/matric-science.jpg",
         title: "Matriculation Science",
         category: "Matriculation",
         level: "Grade 9-10",
         duration: "12 Months",
         students: "2.5K+ Students",
         rating: 4.8,
         price: 8999,
         originalPrice: 12999,
         subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
         color: "from-blue-500 to-cyan-500",
      },
      {
         id: 2,
         image: "/imgs/matric-arts.jpg",
         title: "Matriculation Arts",
         category: "Matriculation",
         level: "Grade 9-10",
         duration: "10 Months",
         students: "1.8K+ Students",
         rating: 4.6,
         price: 6999,
         originalPrice: 9999,
         subjects: [
            "English",
            "Urdu",
            "Islamiat",
            "Pakistan Studies",
            "General Math",
         ],
         color: "from-purple-500 to-pink-500",
      },
      {
         id: 3,
         image: "/imgs/fsc-pre-medical.jpg",
         title: "FSC Pre-Medical",
         category: "Intermediate",
         level: "FSC",
         duration: "24 Months",
         students: "3.2K+ Students",
         rating: 4.9,
         price: 14999,
         originalPrice: 19999,
         subjects: ["Biology", "Chemistry", "Physics", "English"],
         color: "from-green-500 to-teal-500",
      },
      {
         id: 4,
         image: "/imgs/fsc-pre-engineering.jpg",
         title: "FSC Pre-Engineering",
         category: "Intermediate",
         level: "FSC",
         duration: "24 Months",
         students: "4.1K+ Students",
         rating: 4.7,
         price: 15999,
         originalPrice: 21999,
         subjects: ["Mathematics", "Physics", "Chemistry", "English"],
         color: "from-orange-500 to-red-500",
      },
      {
         id: 5,
         image: "/imgs/ics.jpg",
         title: "ICS (Computer Science)",
         category: "Intermediate",
         level: "ICS",
         duration: "24 Months",
         students: "2.8K+ Students",
         rating: 4.8,
         price: 13999,
         originalPrice: 17999,
         subjects: ["Computer Science", "Mathematics", "Physics", "English"],
         color: "from-indigo-500 to-purple-500",
      },
      {
         id: 6,
         image: "/imgs/icom.jpg",
         title: "I.Com (Commerce)",
         category: "Intermediate",
         level: "I.Com",
         duration: "24 Months",
         students: "1.9K+ Students",
         rating: 4.5,
         price: 11999,
         originalPrice: 15999,
         subjects: ["Accounting", "Business Studies", "Economics", "Computer"],
         color: "from-yellow-500 to-orange-500",
      },
      {
         id: 7,
         image: "/imgs/fa.jpg",
         title: "FA (Arts & Humanities)",
         category: "Intermediate",
         level: "FA",
         duration: "24 Months",
         students: "1.5K+ Students",
         rating: 4.4,
         price: 9999,
         originalPrice: 13999,
         subjects: ["English Literature", "Psychology", "Sociology", "History"],
         color: "from-pink-500 to-rose-500",
      },
      {
         id: 8,
         image: "/imgs/medical-entrance.jpg",
         title: "Medical Entry Test Prep",
         category: "Competitive",
         level: "Entry Test",
         duration: "6 Months",
         students: "5.2K+ Students",
         rating: 4.9,
         price: 7999,
         originalPrice: 11999,
         subjects: ["Biology", "Chemistry", "Physics", "English"],
         color: "from-red-500 to-pink-500",
      },
   ];

   // Filter courses based on search and filters
   const filteredCourses = courses.filter((course) => {
      const matchesSearch =
         course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.subjects.some((subject) =>
            subject.toLowerCase().includes(searchTerm.toLowerCase())
         );

      const matchesCategory =
         selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel =
         selectedLevel === "All" || course.level === selectedLevel;

      const matchesPrice =
         priceRange === "All" ||
         (priceRange === "Under 10K" && course.price < 10000) ||
         (priceRange === "10K-15K" &&
            course.price >= 10000 &&
            course.price <= 15000) ||
         (priceRange === "Above 15K" && course.price > 15000);

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
   });

   const categories = ["All", "Matriculation", "Intermediate", "Competitive"];
   const levels = [
      "All",
      "Grade 9-10",
      "FSC",
      "ICS",
      "I.Com",
      "FA",
      "Entry Test",
   ];
   const priceRanges = ["All", "Under 10K", "10K-15K", "Above 15K"];

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

   return (
      <section className="relative w-full py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-20"></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-down">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
                  Featured{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                     Academic Courses
                  </span>
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                  Comprehensive preparation for Matric, Intermediate, and
                  competitive exams with expert faculty
               </p>
            </div>

            {/* Search and Filters Section */}
            <div className="mb-12" data-aos="fade-up">
               {/* Search Bar */}
               <div className="relative max-w-2xl mx-auto mb-6">
                  <div className="relative">
                     <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                     <input
                        type="text"
                        placeholder="Search courses by name or subject (e.g., Physics, Mathematics, Computer Science...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                     />
                  </div>
               </div>

               {/* Filters Bar */}
               <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                     <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                     >
                        <FaFilter className="text-indigo-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                           Filters
                        </span>
                     </button>

                     {/* Active Filters Display */}
                     <div className="flex flex-wrap gap-2">
                        {selectedCategory !== "All" && (
                           <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {selectedCategory}
                              <button
                                 onClick={() => setSelectedCategory("All")}
                              >
                                 ×
                              </button>
                           </span>
                        )}
                        {selectedLevel !== "All" && (
                           <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {selectedLevel}
                              <button onClick={() => setSelectedLevel("All")}>
                                 ×
                              </button>
                           </span>
                        )}
                        {priceRange !== "All" && (
                           <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {priceRange}
                              <button onClick={() => setPriceRange("All")}>
                                 ×
                              </button>
                           </span>
                        )}
                     </div>
                  </div>

                  <div className="text-gray-600 dark:text-gray-400">
                     Showing {filteredCourses.length} of {courses.length}{" "}
                     courses
                  </div>
               </div>

               {/* Expandable Filters */}
               {showFilters && (
                  <div
                     className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                     data-aos="fade-up"
                  >
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Category Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Category
                           </label>
                           <div className="space-y-2">
                              {categories.map((category) => (
                                 <button
                                    key={category}
                                    onClick={() =>
                                       setSelectedCategory(category)
                                    }
                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                       selectedCategory === category
                                          ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold"
                                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                 >
                                    {category}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Level Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Education Level
                           </label>
                           <div className="space-y-2">
                              {levels.map((level) => (
                                 <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                       selectedLevel === level
                                          ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold"
                                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                 >
                                    {level}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Price Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Price Range
                           </label>
                           <div className="space-y-2">
                              {priceRanges.map((range) => (
                                 <button
                                    key={range}
                                    onClick={() => setPriceRange(range)}
                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                       priceRange === range
                                          ? "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 font-semibold"
                                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                 >
                                    {range}
                                 </button>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Clear All Filters */}
                     <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button
                           onClick={() => {
                              setSelectedCategory("All");
                              setSelectedLevel("All");
                              setPriceRange("All");
                              setSearchTerm("");
                           }}
                           className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                        >
                           Clear all filters
                        </button>
                     </div>
                  </div>
               )}
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {filteredCourses.map((course, index) => (
                  <div
                     key={course.id}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  >
                     {/* Course Image */}
                     <div className="relative h-48 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                           <FaBook className="text-6xl text-white opacity-50" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                           <span className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                              {course.category}
                           </span>
                        </div>

                        {/* Discount Badge */}
                        <div className="absolute top-4 right-4">
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
                        {/* Title and Rating */}
                        <div className="mb-3">
                           <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                              {course.title}
                           </h3>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1">
                                 {renderStars(course.rating)}
                                 <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                                    ({course.rating})
                                 </span>
                              </div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                 {course.students}
                              </span>
                           </div>
                        </div>

                        {/* Subjects */}
                        <div className="mb-4">
                           <div className="flex flex-wrap gap-1">
                              {course.subjects
                                 .slice(0, 3)
                                 .map((subject, idx) => (
                                    <span
                                       key={idx}
                                       className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                                    >
                                       {subject}
                                    </span>
                                 ))}
                              {course.subjects.length > 3 && (
                                 <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                                    +{course.subjects.length - 3} more
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

                        {/* Enroll Button */}
                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                           Enroll Now
                        </button>
                     </div>

                     {/* Hover Gradient Border */}
                     <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`}
                     ></div>
                  </div>
               ))}
            </div>

            {/* No Results Message */}
            {filteredCourses.length === 0 && (
               <div className="text-center py-12" data-aos="fade-up">
                  <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
                     🔍
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                     No courses found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                     Try adjusting your search or filters to find what you're
                     looking for.
                  </p>
               </div>
            )}

            {/* View All Button */}
            <div className="text-center mt-18" data-aos="fade-up">
               <Link
                  to={"/study/study-courses"}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
               >
                  View All Academic Courses
               </Link>
            </div>
         </div>
      </section>
   );
}
