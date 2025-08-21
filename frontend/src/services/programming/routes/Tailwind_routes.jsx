import { Outlet } from "react-router-dom";
import Home from "../courses/tailwindcss/Home";
import Tailwindcss_sidebar from "../side_bars/Tailwindcss_sidebar";
import InstallationSetup from "../courses/tailwindcss/InstallationSetup";

const TailwindLayout = () => (
  <div className="flex ">
    <Tailwindcss_sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export const TailwindRoutes = {
  path: "tailwindcss",
  element: <TailwindLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "installationsetup", element: <InstallationSetup /> },
  ],
};
