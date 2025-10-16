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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <MainHome /> },
      { path: "about-us", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/signIn", element: <SignIn /> },]
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
