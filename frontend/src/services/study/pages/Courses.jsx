import React from "react";
import CoursesHero from "../components/courses/CoursesHero";
import CoursesFilter from "../components/courses/CoursesFilter";
import CoursesGrid from "../components/courses/CoursesGrid";
import CourseCategories from "../components/courses/CourseCategories";
import LearningPath from "../components/courses/LearningPath";
import CourseTestimonials from "../components/courses/CourseTestimonials";
import CourseFAQ from "../components/courses/CourseFAQ";
import CourseBenefits from "../components/courses/CourseBenifits";

export default function CoursesPage() {
   return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
         <CoursesHero />
         <CourseCategories />
         <CoursesFilter />
         <CoursesGrid />
         <LearningPath />
         <CourseBenefits/>
         <CourseTestimonials />
         <CourseFAQ />
      </div>
   );
}
