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







{/* <div
        className="mt-20 text-center bg-slate-800/80 border border-slate-700/50 rounded-2xl p-10 backdrop-blur-sm"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Compete and Show Your Talent?
        </h2>
        <p className="text-slate-300 mb-6">
          Register today and perform in front of thousands of music enthusiasts.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition">
          Join a Competition
        </button>
      </div> */}
















// bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 Text Colors: Primary: text-white Secondary: text-slate-300 Placeholder: text-slate-400 Gradient Text: from-cyan-400 to-purple-500 Form Elements: Input Background: bg-slate-700/50 Input Border: border-slate-600/50 Focus Ring: focus:ring-cyan-500 Buttons & Icons: Primary Button: from-cyan-500 to-purple-600 with shine effect Social Icons: Various cyan-to-blue gradients Contact Icons: from-cyan-500 to-purple-600 Cards & Containers: Background: bg-slate-800/80 backdrop-blur-sm Border: border-slate-700/50 Hover: hover:border-slate-500/50 Accent Elements: Divider: from-cyan-500 to-purple-500 Floating Elements: bg-cyan-400, bg-purple-400, bg-pink-400.