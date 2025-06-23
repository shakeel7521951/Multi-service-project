import React from 'react';
import { Link } from 'react-router-dom';

const TutorialArray = [
  { id: 1, topic: "CSS HOME", link: "homecss", category: "CSS Tutorial" },
  { id: 2, topic: "CSS Introduction", link: "cssintroduction", category: "CSS Tutorial" },
  { id: 3, topic: "CSS Syntax", link: "cssSyntax", category: "CSS Tutorial" },
  { id: 4, topic: "CSS Selectors", link: "cssSelectors", category: "CSS Tutorial" },
  { id: 5, topic: "CSS How To", link: "", category: "CSS Tutorial" },
  { id: 6, topic: "CSS Comments", link: "", category: "CSS Tutorial" },
  { id: 7, topic: "CSS Colors", link: "cssColors", category: "CSS Tutorial" },
  { id: 8, topic: "CSS Backgrounds", link: "cssBackgound", category: "CSS Tutorial" },
  { id: 9, topic: "CSS Borders", link: "cssBorders", category: "CSS Tutorial" },
  { id: 10, topic: "CSS Margins", link: "", category: "CSS Tutorial" },

  { id: 11, topic: "CSS Rounded Corner", link: "cssRounded", category: "CSS Advanced" },
  { id: 12, topic: "CSS Borders Images", link: "", category: "CSS Advanced" },
  { id: 13, topic: "CSS Backgrounds", link: "cssBackgound", category: "CSS Advanced" },
  { id: 14, topic: "CSS Colors", link: "cssColors", category: "CSS Advanced" },
  { id: 15, topic: "CSS Gradients", link: "", category: "CSS Advanced" },

  { id: 16, topic: "Flexbox Intro", link: "flexintro", category: "CSS Flexbox" },
  { id: 17, topic: "Flex Container", link: "flexcontainer", category: "CSS Flexbox" },
  { id: 18, topic: "Flex Items", link: "", category: "CSS Flexbox" },
  { id: 19, topic: "Flex Responsive", link: "", category: "CSS Flexbox" },

  { id: 20, topic: "Grid Intro", link: "gridintro", category: "CSS Grid" },
  { id: 21, topic: "Grid Columns", link: "gridcolumn", category: "CSS Grid" },
  { id: 22, topic: "Grid Container", link: "", category: "CSS Grid" },
  { id: 23, topic: "Grid Items", link: "", category: "CSS Grid" },

  { id: 24, topic: "RWD Intro", link: "rwdintro", category: "CSS Responsive" },
  { id: 25, topic: "RWD Viewport", link: "rwdviewport", category: "CSS Responsive" },
  { id: 26, topic: "RWD Images", link: "", category: "CSS Responsive" },
  { id: 27, topic: "RWD Media Queries", link: "", category: "CSS Responsive" },

  { id: 28, topic: "CSS Templates", link: "cssTemplate", category: "CSS Example" },
  { id: 29, topic: "CSS Example", link: "cssExample", category: "CSS Example" },
  { id: 30, topic: "CSS Editor", link: "", category: "CSS Example" },
  { id: 31, topic: "CSS Snippet", link: "", category: "CSS Example" },
  { id: 32, topic: "CSS Quiz", link: "", category: "CSS Example" },
  { id: 33, topic: "CSS Exercise", link: "", category: "CSS Example" },

  { id: 34, topic: "CSS Web Safe Font", link: "cssProperties", category: "CSS References" },
  { id: 35, topic: "CSS Aural Refrence", link: "cssbrowseSupport", category: "CSS References" },
  { id: 36, topic: "CSS Selectors", link: "cssSelectors", category: "CSS References" },
  { id: 37, topic: "CSS Combinators", link: "", category: "CSS References" },
  { id: 38, topic: "CSS Pseudo-classes", link: "", category: "CSS References" },
  { id: 39, topic: "CSS Pseudo-elements", link: "", category: "CSS References" },
  { id: 40, topic: "CSS At-rules", link: "", category: "CSS References" },
  { id: 41, topic: "CSS Functions", link: "", category: "CSS References" },
  { id: 42, topic: "CSS Web Safe Fonts", link: "", category: "CSS References" },
  { id: 43, topic: "CSS Units", link: "", category: "CSS References" },
  { id: 44, topic: "Px to Em Conversion", link: "", category: "CSS References" },
  { id: 45, topic: "CSS Colors", link: "cssColors", category: "CSS References" },
  { id: 46, topic: "CSS Animatable", link: "", category: "CSS References" },
  { id: 47, topic: "CSS Default Values", link: "", category: "CSS References" },
  { id: 48, topic: "CSS Entities", link: "", category: "CSS References" }
];

const categories = [
  "CSS Tutorial",
  "CSS Advanced",
  "CSS Flexbox",
  "CSS Grid",
  "CSS Responsive",
  "CSS Example",
  "CSS References"
];

const Css_sidebar = () => {
  return (
   <div className="w-[20vw] hidden lg:block sticky top-0 p-3 overflow-y-auto h-screen bg-[#E7E9EB]">
  {categories.map((category, idx) => (
    <div key={idx}>
      <h1 className="my-3 font-semibold text-lg">{category}</h1>
      <ul className="flex flex-col gap-2">
        {TutorialArray.filter(link => link.category === category).map(link => (
          <li className="hover:bg-[#CCCCCC] px-3 w-full" key={link.id}>
            <Link to={link.link ? `/css/${link.link}` : "/css"}>
              {link.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  );
};

export default Css_sidebar;
