import { Outlet } from "react-router-dom";
import Home from "../courses/tailwindcss/Home";
import Tailwindcss_sidebar from "../side_bars/Tailwindcss_sidebar";
import InstallationSetup from "../courses/tailwindcss/InstallationSetup";
import Typography from "../courses/tailwindcss/Typography";
import ColorsPage from "../courses/tailwindcss/ColorsPage";
import Layout from "../courses/tailwindcss/Layout";
import CSSGrid from "../courses/tailwindcss/CssGrid";
import BordersEffect from "../courses/tailwindcss/BorderEffect";
import Customization from "../courses/tailwindcss/Customization";
import Forms from "../courses/tailwindcss/Forms";
import Performance from "../courses/tailwindcss/performance";
import AdvancedTechniques from "../courses/tailwindcss/AdvanceTechnologies";
import ProjectImplementation from "../courses/tailwindcss/ProjectImplementation";

const TailwindLayout = () => (
  <div className="flex">
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
    {path: "home", element: <Home /> },
    {path: "installation-setup", element: <InstallationSetup /> },
    {path: "typography", element: <Typography />},
    {path: "colors", element: <ColorsPage />},
    {path: "layout", element: <Layout />},
    {path: "cssgrid", element: <CSSGrid />},
    {path: "border-effect", element: <BordersEffect />},
    {path: "customization", element: <Customization />},
    {path: "forms", element: <Forms />},
    {path: "performance", element: <Performance />},
    {path: "advance-technologies", element: <AdvancedTechniques />},
    {path: "project-implementation", element: <ProjectImplementation />}
  ],
};
