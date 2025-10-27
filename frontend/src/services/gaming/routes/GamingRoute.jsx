// src/services/study/routes/StudyRoutes.jsx

import { Outlet } from "react-router-dom";

// Common layout components
import GamingNavBar from "../common/GamingNavBar";
import GamingFooter from "../common/GamingFooter";
import GamingHome from "../pages/GamingHome";
import GamesPage from "../pages/GamesPage";
import PlayNowPage from "../pages/PlayNowPage";
import SupportPage from "../pages/SupportPage";
import ProfilePage from "../pages/ProfilePage";


// Pages


// ---------- Layout Component ----------
const GamingLayout = () => (
   <>
      <GamingNavBar/>
      <Outlet />
      <GamingFooter/>
   </>
);

// ---------- Route Configuration ----------
export const GamingRoutes = {
   path: "/gaming",
   element: <GamingLayout />,
   children: [
      { index: true, element: <GamingHome/> }, // /study
      { path: "games", element: <GamesPage/> }, // /study/study-about
      { path: "play-now", element: <PlayNowPage/> }, // /study/study-courses
      { path: "support", element: <SupportPage/> }, // /study/course-details
      { path: "profile", element: <ProfilePage/> }, // /study/study-contact
   ],
};
