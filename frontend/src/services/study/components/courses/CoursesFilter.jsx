import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

export default function CoursesFilter({ onFilterChange }) {
   const [filters, setFilters] = useState({
      search: "",
      category: "all",
      level: "all",
      price: "all",
      rating: "all",
      duration: "all",
   });

   const [showFilters, setShowFilters] = useState(false);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         easing: "ease-in-out",
      });
   }, []);

   const handleFilterChange = (key, value) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      if (onFilterChange) {
         onFilterChange(newFilters);
      }
   };

   const clearFilters = () => {
      const clearedFilters = {
         search: "",
         category: "all",
         level: "all",
         price: "all",
         rating: "all",
         duration: "all",
      };
      setFilters(clearedFilters);
      if (onFilterChange) {
         onFilterChange(clearedFilters);
      }
   };

   const categories = [
      { value: "all", label: "All Categories" },
      { value: "matric", label: "Matriculation" },
      { value: "fsc-medical", label: "FSC Pre-Medical" },
      { value: "fsc-engineering", label: "FSC Pre-Engineering" },
      { value: "ics", label: "ICS Computer Science" },
      { value: "icom", label: "I.Com Commerce" },
      { value: "fa", label: "FA Arts" },
      { value: "entry-test", label: "Entry Tests" },
   ];

   const levels = [
      { value: "all", label: "All Levels" },
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
   ];

   const prices = [
      { value: "all", label: "All Prices" },
      { value: "free", label: "Free" },
      { value: "paid", label: "Paid" },
      { value: "under-10k", label: "Under ₹10,000" },
      { value: "10k-15k", label: "₹10,000 - ₹15,000" },
      { value: "above-15k", label: "Above ₹15,000" },
   ];

   const ratings = [
      { value: "all", label: "All Ratings" },
      { value: "4.5", label: "4.5+ Stars" },
      { value: "4.0", label: "4.0+ Stars" },
      { value: "3.5", label: "3.5+ Stars" },
   ];

   const durations = [
      { value: "all", label: "Any Duration" },
      { value: "1-3", label: "1-3 Months" },
      { value: "3-6", label: "3-6 Months" },
      { value: "6-12", label: "6-12 Months" },
      { value: "12+", label: "12+ Months" },
   ];

   const activeFiltersCount = Object.values(filters).filter(
      (value) => value !== "all" && value !== ""
   ).length;

   return (
      <section className="relative w-full py-12 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">
         <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up">
               {/* Search Bar */}
               <div className="relative max-w-2xl mx-auto mb-6">
                  <div className="relative">
                     <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                     <input
                        type="text"
                        placeholder="Search courses by name, subject, or instructor..."
                        value={filters.search}
                        onChange={(e) =>
                           handleFilterChange("search", e.target.value)
                        }
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                     />
                  </div>
               </div>

               {/* Filters Bar */}
               <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                     <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                     >
                        <FaFilter className="text-indigo-600 dark:text-indigo-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                           Filters{" "}
                           {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                        </span>
                     </button>

                     {/* Active Filters Display */}
                     <div className="flex flex-wrap gap-2">
                        {filters.category !== "all" && (
                           <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {
                                 categories.find(
                                    (c) => c.value === filters.category
                                 )?.label
                              }
                              <button
                                 onClick={() =>
                                    handleFilterChange("category", "all")
                                 }
                              >
                                 <FaTimes className="text-xs" />
                              </button>
                           </span>
                        )}
                        {filters.level !== "all" && (
                           <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {
                                 levels.find((l) => l.value === filters.level)
                                    ?.label
                              }
                              <button
                                 onClick={() =>
                                    handleFilterChange("level", "all")
                                 }
                              >
                                 <FaTimes className="text-xs" />
                              </button>
                           </span>
                        )}
                        {filters.price !== "all" && (
                           <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                              {
                                 prices.find((p) => p.value === filters.price)
                                    ?.label
                              }
                              <button
                                 onClick={() =>
                                    handleFilterChange("price", "all")
                                 }
                              >
                                 <FaTimes className="text-xs" />
                              </button>
                           </span>
                        )}
                     </div>
                  </div>

                  {activeFiltersCount > 0 && (
                     <button
                        onClick={clearFilters}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                     >
                        Clear All
                     </button>
                  )}
               </div>

               {/* Expandable Filters */}
               {showFilters && (
                  <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Category Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Category
                           </label>
                           <select
                              value={filters.category}
                              onChange={(e) =>
                                 handleFilterChange("category", e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              {categories.map((category) => (
                                 <option
                                    key={category.value}
                                    value={category.value}
                                 >
                                    {category.label}
                                 </option>
                              ))}
                           </select>
                        </div>

                        {/* Level Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Level
                           </label>
                           <select
                              value={filters.level}
                              onChange={(e) =>
                                 handleFilterChange("level", e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              {levels.map((level) => (
                                 <option key={level.value} value={level.value}>
                                    {level.label}
                                 </option>
                              ))}
                           </select>
                        </div>

                        {/* Price Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Price
                           </label>
                           <select
                              value={filters.price}
                              onChange={(e) =>
                                 handleFilterChange("price", e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              {prices.map((price) => (
                                 <option key={price.value} value={price.value}>
                                    {price.label}
                                 </option>
                              ))}
                           </select>
                        </div>

                        {/* Rating Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Rating
                           </label>
                           <select
                              value={filters.rating}
                              onChange={(e) =>
                                 handleFilterChange("rating", e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              {ratings.map((rating) => (
                                 <option
                                    key={rating.value}
                                    value={rating.value}
                                 >
                                    {rating.label}
                                 </option>
                              ))}
                           </select>
                        </div>

                        {/* Duration Filter */}
                        <div>
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              Duration
                           </label>
                           <select
                              value={filters.duration}
                              onChange={(e) =>
                                 handleFilterChange("duration", e.target.value)
                              }
                              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              {durations.map((duration) => (
                                 <option
                                    key={duration.value}
                                    value={duration.value}
                                 >
                                    {duration.label}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}
