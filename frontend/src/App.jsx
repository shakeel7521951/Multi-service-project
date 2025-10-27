import "./App.css";
import Footer from "./components/common/programming/Footer";
import Navbar from "./components/common/programming/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/main/About";
import { htmlRoutes } from "./services/programming/routes/Html_routes";
import { cssRoutes } from "./services/programming/routes/css_routes";
import { JsRoutes } from "./services/programming/routes/Js_Routes";
import Services from "./pages/main/Services";
import { reactroutes } from "./services/programming/routes/react_routes";
import { BootstrapRoutes } from "./services/programming/routes/bootstrap_routes";
import SignIn from "./components/common/SignIn";
import { TailwindRoutes } from "./services/programming/routes/Tailwind_routes";
import { SQLRoutes } from "./services/programming/routes/Sql_Routes";
import Index from "./pages/programming/Index";
import MainNavbar from "./components/common/main/Navbar";
import MainFooter from "./components/common/main/Footer";
import MainHome from "./pages/main/Home";
import Contact from "./pages/main/Contact";
import TermsConditions from "./pages/main/TermsConditions";
import PrivacyPolicy from "./pages/main/PrivacyPolicy";
import LoginForm from "./pages/main/LoginForm";
import SignupForm from "./pages/main/SignupForm";
import { ReadingRoutes } from "./services/reading/routes/ReadingRoute";
import { MusicRoutes } from "./services/music/routes/MusicRoute";
import StudyNavBar from "./services/study/common/NavBar";
import StudyFooter from "./services/study/common/Footer";
import StudyHome from "./services/study/pages/Home";
import StudyAbout from "./services/study/pages/About";
import CoursesPage from "./services/study/pages/Courses";
import CourseDetails from "./services/study/pages/CourseDetails";
import StudyContact from "./services/study/pages/Contact";
import GamingNavBar from "./services/gaming/common/GamingNavBar";
import GamingFooter from "./services/gaming/common/GamingFooter";
import GamingHome from "./services/gaming/pages/GamingHome";
import GamesPage from "./services/gaming/pages/GamesPage";
import PlayNowPage from "./services/gaming/pages/PlayNowPage";
import SupportPage from "./services/gaming/pages/SupportPage";
import ProfilePage from "./services/gaming/pages/ProfilePage";

const MainLayout = () => (
   <>
      <MainNavbar />
      <Outlet />
      <MainFooter />
   </>
);

const ProgrammingLayout = () => (
   <>
      <Navbar />
      <Outlet />
      <Footer />
   </>
);
const StudyLayout = () => (
   <>
      <StudyNavBar />
      <Outlet />
      <StudyFooter />
   </>
);
const GamingLayout = () => (
   <>
      <GamingNavBar />
      <Outlet />
      <GamingFooter />
   </>
);
const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         { index: true, element: <MainHome /> },
         { path: "/about-us", element: <About /> },
         { path: "/services", element: <Services /> },
         { path: "/contact", element: <Contact /> },
         { path: "/termsconditions", element: <TermsConditions /> },
         { path: "/privacypolicy", element: <PrivacyPolicy /> },
         { path: "/loginform", element: <LoginForm /> },
         { path: "/signupform", element: <SignupForm /> },
         { path: "/signIn", element: <SignIn /> },
      ],
   },
   {
      path: "/programming",
      element: <ProgrammingLayout />,
      children: [
         { index: true, element: <Index /> },
         htmlRoutes,
         cssRoutes,
         JsRoutes,
         reactroutes,
         BootstrapRoutes,
         TailwindRoutes,
         SQLRoutes,
      ],
   },
   {
      path: "/study",
      element: <StudyLayout />,
      children: [
         { index: true, element: <StudyHome /> }, // /study
         { path: "study-about", element: <StudyAbout /> }, // /study/study-about
         { path: "study-courses", element: <CoursesPage /> }, // /study/study-courses
         { path: "course-details", element: <CourseDetails /> }, // /study/course-details
         { path: "study-contact", element: <StudyContact /> }, // /study/study-contact
      ],
   },
   {
      path: "/gaming",
      element: <GamingLayout />,
      children: [
         { index: true, element: <GamingHome /> }, // /study
         { path: "games", element: <GamesPage /> }, // /study/study-about
         { path: "play-now", element: <PlayNowPage /> }, // /study/study-courses
         { path: "support", element: <SupportPage /> }, // /study/course-details
         { path: "profile", element: <ProfilePage /> }, // /study/study-contact
      ],
   },
   ReadingRoutes,
   MusicRoutes,
]);

export default function App() {
   return <RouterProvider router={router} />;
}
