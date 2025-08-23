import { Form, Outlet } from "react-router-dom";
import Home from "../courses/tailwindcss/Home";
import Tailwindcss_sidebar from "../side_bars/Tailwindcss_sidebar";
import InstallationSetup from "../courses/tailwindcss/InstallationSetup";
import CoreConcept from '../courses/tailwindcss/CoreConcept'
import Typography from '../courses/tailwindcss/Typography'
import ColorsPage from '../courses/tailwindcss/ColorsPage'
import Layout from '../courses/tailwindcss/Layout'
import FlexBox from '../courses/tailwindcss/FlexBox'
import CSSGrid from '../courses/tailwindcss/CSSGrid'
import ResponsiveDesign from '../courses/tailwindcss/ResponsiveDesign'
import BorderEffect from '../courses/tailwindcss/BorderEffect'
import TransformsTransitions from "../courses/tailwindcss/TransformsTransition";
import Customization from "../courses/tailwindcss/Customization";
import Componenets from "../courses/tailwindcss/Componenets";
import Forms from "../courses/tailwindcss/Forms";
import Navigation from "../courses/tailwindcss/Navigation";
import CardGrid from "../courses/tailwindcss/CardGrid";
import HeroSections from "../courses/tailwindcss/HeroSections";
import DarkMode from "../courses/tailwindcss/DarkMode";
import Performance from "../courses/tailwindcss/Performance";
import AdvancedTechniques from "../courses/tailwindcss/AdvanceTechniques";
import ProjectImplementation from "../courses/tailwindcss/ProjectImplementation";



import { Component } from "react";

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
    { path: "typography", element: <Typography /> },
    { path: "colors-backgrounds", element: <ColorsPage /> },
    { path: "layout-box-model", element: <Layout /> },
    { path: "flexbox", element: <FlexBox /> },
    { path: "css-grid", element: <CSSGrid /> },
    { path: "responsive-design", element: <ResponsiveDesign /> },
    { path: "borders-effects", element: <BorderEffect /> },
    { path: "transforms-transitions", element: <TransformsTransitions /> },
    { path: "customization", element: <Customization /> },
    { path: "components", element: <Componenets /> },
    { path: "forms", element: <Forms /> },
    { path: "navigation", element: <Navigation /> },
    { path: "cards-grids", element: <CardGrid /> },
    { path: "hero-sections", element: <HeroSections /> },
    { path: "dark-mode", element: <DarkMode /> },
    { path: "performance", element: <Performance /> },
    { path: "advanced-techniques", element: <AdvancedTechniques /> },
    { path: "project-implementation", element: <ProjectImplementation /> },
  ],
};
