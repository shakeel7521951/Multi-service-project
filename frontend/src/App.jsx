import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import { htmlRoutes } from "./services/programming/routes/Html_routes";
import { cssRoutes } from "./services/programming/routes/css_routes";
import { JsRoutes } from "./services/programming/routes/Js_Routes";
import Services from "./pages/main/Services";
import { reactroutes } from "./services/programming/routes/react_routes";
import { BootstrapRoutes } from "./services/programming/routes/bootstrap_routes";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "/services", element: <Services /> },
      htmlRoutes,
      cssRoutes,
      JsRoutes,
      reactroutes,
      BootstrapRoutes,
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
