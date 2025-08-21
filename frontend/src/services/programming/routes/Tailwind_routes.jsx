import { Outlet } from "react-router-dom";
import Home from "../courses/tailwindcss/Home";
import Tailwindcss_sidebar from "../side_bars/Tailwindcss_sidebar";
import InstallationSetup from "../courses/tailwindcss/InstallationSetup";
import CoreConcept from "../courses/tailwindcss/CoreConcept";
import Flexbox from "../courses/tailwindcss/FlexBox";
import ResponsiveDesign from "../courses/tailwindcss/ResponsiveDesign";
import TransformsTransitions from "../courses/tailwindcss/TransformsTransition";
import Components from "../courses/tailwindcss/Componenets";
import Navigation from "../courses/tailwindcss/Navigation";
import CardGrid from "../courses/tailwindcss/CardGrid";
import HeroSections from "../courses/tailwindcss/HeroSections";
import DarkMode from "../courses/tailwindcss/DarkMode";

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
    { path: "installation-setup", element: <InstallationSetup /> },
    { path: "core-concepts", element: <CoreConcept /> },
    { path: "flexbox", element: <Flexbox /> },
    { path: "responsive-design", element: <ResponsiveDesign /> },
    { path: "transforms-transitions", element: <TransformsTransitions /> },
    { path: "components", element: <Components /> },
    { path: "navigation", element: <Navigation /> },
    { path: "cards-grids", element: <CardGrid /> },
    { path: "hero-sections", element: <HeroSections /> },
    { path: "dark-mode", element: <DarkMode /> },
  ],
};
