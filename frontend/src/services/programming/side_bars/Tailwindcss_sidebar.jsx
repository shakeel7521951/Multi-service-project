import React from "react";
import { Link } from "react-router-dom";

const TutorialArray = [
  { topic: "Home", path: "home" },
  { topic: "Installation & Setup", path: "installation-setup" },
  { topic: "Core Concepts", path: "core-concepts" },
  { topic: "Typography", path: "typography" },
  { topic: "Colors & Backgrounds", path: "colors-backgrounds" },
  { topic: "Layout & Box Model", path: "layout-box-model" },
  { topic: "Flexbox", path: "flexbox" },
  { topic: "CSS Grid", path: "css-grid" },
  { topic: "Responsive Design", path: "responsive-design" },
  { topic: "Borders & Effects", path: "borders-effects" },
  { topic: "Transforms & Transitions", path: "transforms-transitions" },
  { topic: "Customization", path: "customization" },
  { topic: "Components", path: "components" },
  { topic: "Forms", path: "forms" },
  { topic: "Navigation", path: "navigation" },
  { topic: "Cards & Grids", path: "cards-grids" },
  { topic: "Hero Sections", path: "hero-sections" },
  { topic: "Dark Mode", path: "dark-mode" },
  { topic: "Performance", path: "performance" },
  { topic: "Advanced Techniques", path: "advanced-techniques" },
  { topic: "Project Implementation", path: "project-implementation" },
];

const TailwindcssSidebar = () => {
  return (
    <div className="w-[20vw] hidden lg:block sticky top-0 p-3 overflow-y-auto h-screen bg-[#E7E9EB]">
      <ul className="flex flex-col gap-2">
        {TutorialArray.map((link, index) => (
          <li key={index} className="hover:bg-[#CCCCCC] px-3 w-full rounded">
            <Link to={link.path} className="w-full block py-1">
              {link.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TailwindcssSidebar;
