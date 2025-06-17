import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import { htmlRoutes } from "./services/programming/routes/Html_routes";

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
      {path:"/servicesPage" , element:<Services/>},
      
      htmlRoutes,
      cssRoutes,
      JsRoutes,
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
