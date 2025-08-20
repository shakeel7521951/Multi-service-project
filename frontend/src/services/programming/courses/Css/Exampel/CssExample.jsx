import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssExample = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
h1 {
  color: blue;
  text-align: center;
}
  `;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const cssTopics = [
    "CSS Syntax",
    "CSS Selectors",
    "CSS How To / Where To",
    "CSS Comments",
    "CSS Colors",
    "CSS Backgrounds",
    "CSS Borders",
    "CSS Margins",
    "CSS Padding",
    "CSS Height/Width",
    "CSS Box Model",
    "CSS Outline",
    "CSS Text",
    "CSS Fonts",
    "CSS Icons",
    "CSS Links",
    "CSS Lists",
    "CSS Tables",
    "CSS Display",
    "CSS Positioning",
    "CSS Overflow",
    "CSS Floating",
    "CSS Inline-block",
    "CSS Aligning Elements",
    "CSS Combinators",
    "CSS Pseudo-classes",
    "CSS Pseudo-elements",
    "CSS Opacity",
    "CSS Navigation Bars",
    "CSS Dropdowns",
    "CSS Image Gallery",
    "CSS Image Sprites",
    "CSS Attribute Selectors",
    "CSS Forms",
    "CSS Counters",
    "CSS Website Layout",
    "CSS Rounded Corners",
    "CSS Border Images",
    "CSS Gradients",
    "CSS Shadow Effects",
    "CSS Text Effects",
    "CSS Web Fonts",
    "CSS 2D Transforms",
    "CSS 3D Transforms",
    "CSS Transitions",
    "CSS Animations",
    "CSS Tooltips",
    "CSS Style Images",
    "CSS Image Centering",
    "CSS Image Filters",
    "CSS Image Shapes",
    "CSS Object-fit",
    "CSS Object-position",
    "CSS Buttons",
    "CSS Pagination",
    "CSS Multiple Columns",
    "CSS User Interface",
    "CSS Variables",
    "CSS Box Sizing",
    "CSS Media Queries",
    "CSS Media Queries - More Examples",
    "CSS Flexbox",
    "CSS Flex Items",
    "CSS Flexbox Responsive",
    "CSS Grid Intro",
    "CSS Grid Columns, Rows and Gap",
    "CSS Grid Container",
    "CSS Grid Item",
    "CSS Responsive Webdesign",
  ];

  const refArray = [
    { id: 1, name: "CSS Properties", link: "/css/cssProperties" },
    { id: 2, name: "CSS Browser Support", link: "/css/cssbrowseSupport" },
    { id: 3, name: "CSS Selectors", link: "/css/cssSelectors" },
    { id: 4, name: "CSS Combinators", link: "/css/cssCombinators" },
    { id: 5, name: "CSS Pseudo-classes", link: "/css/cssPseudoClasses" },
    { id: 6, name: "CSS Pseudo-elements", link: "/css/cssPseudoElements" },
    { id: 7, name: "CSS At-rules", link: "/css/cssAtRules" },
    { id: 8, name: "CSS Functions", link: "/css/cssFunctions" },
    { id: 9, name: "CSS Web Safe Fonts", link: "/css/cssWebSafeFonts" },
    { id: 10, name: "CSS Units", link: "/css/cssUnits" },
    { id: 11, name: "Px to Em Conversion", link: "/css/pxToEmConversion" },
    { id: 12, name: "CSS Colors", link: "/css/cssColors" },
    { id: 13, name: "CSS Animatable", link: "/css/cssAnimatable" },
    { id: 14, name: "CSS Default Values", link: "/css/cssDefaultValues" },
    { id: 15, name: "CSS Entities", link: "/css/cssEntities" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Examples</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="px-5  mt-5 py-10 rounded-md">
        <p className="pb-3">
          Explore various CSS examples to master web styling techniques.
        </p>
        <h1 className="text-2xl font-bold mb-4">CSS Topics</h1>
        <ul className="list-disc ml-6 flex flex-col gap-2">
          {cssTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <div className="flex px-5 mt-6 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">Basic CSS Example</h1>
        <p>This example shows how to style a heading element:</p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">CSS Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {cssCode}
        </pre>

        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore core CSS references including properties, selectors,
          functions, and values.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((path) => (
            <Link
              to={path.link}
              key={path.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {path.name.trim()}
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <div className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex float-right mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssExample;
