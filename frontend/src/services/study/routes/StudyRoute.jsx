// src/services/study/routes/StudyRoutes.jsx

import { Outlet } from "react-router-dom";

// Common layout components
import StudyNavBar from "../common/NavBar";
import StudyFooter from "../common/Footer";

// Pages
import StudyHome from "../pages/Home";
import StudyAbout from "../pages/About";
import StudyContact from "../pages/Contact";
import CourseDetails from "../pages/CourseDetails";
import CoursesPage from "../pages/Courses";

// ---------- Layout Component ----------
const StudyLayout = () => (
   <>
      <StudyNavBar />
      <Outlet />
      <StudyFooter />
   </>
);

// ---------- Route Configuration ----------
export const StudyRoutes = {
   path: "/study",
   element: <StudyLayout />,
   children: [
      { index: true, element: <StudyHome /> }, // /study
      { path: "study-about", element: <StudyAbout /> }, // /study/study-about
      { path: "study-courses", element: <CoursesPage /> }, // /study/study-courses
      { path: "course-details", element: <CourseDetails /> }, // /study/course-details
      { path: "study-contact", element: <StudyContact /> }, // /study/study-contact
   ],
};
