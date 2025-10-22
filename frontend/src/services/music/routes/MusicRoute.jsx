// src/services/music/routes/MusicRoute.jsx

import { Outlet } from "react-router-dom";

// Common layout components
import MusicNavbar from "../common/navbar/MusicNavbar";
import MusicFooter from "../common/footer/MusicFooter";

// Pages
import MusicHome from "../pages/MusicHome";
import MusicAbout from "../pages/MusicAbout";
import CoursesMusic from "../pages/CoursesMusic";
import MusicCompetitions from "../pages/MusicCompetitions";
import MusicCommunity from "../pages/MusicCommunity";
import MusicContact from "../pages/MusicContact";
import MusicLogin from "../pages/MusicLogin";
import MusicSignup from "../pages/MusicSignup";

// ---------- Layout Component ----------
const MusicLayout = () => (
  <>
    <MusicNavbar />
    <Outlet />
    <MusicFooter />
  </>
);

// ---------- Route Configuration ----------
export const MusicRoutes = {
  path: "/music",
  element: <MusicLayout />,
  children: [
    { index: true, element: <MusicHome /> },              // /music
    { path: "about", element: <MusicAbout /> },           // /music/about
    { path: "courses", element: <CoursesMusic /> },       // /music/courses
    { path: "competitions", element: <MusicCompetitions /> }, // /music/competitions
    { path: "community", element: <MusicCommunity /> },   // /music/community
    { path: "contact", element: <MusicContact /> },       // /music/contact
    { path: "login", element: <MusicLogin /> },           // /music/login
    { path: "signup", element: <MusicSignup /> },         // /music/signup
  ],
};
