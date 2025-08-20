import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssExercises = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const sampleText = `
/* CSS Exercises */

body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
}
  `;

  const copyText = () => {
    navigator.clipboard.writeText(sampleText).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

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

  const exerciseCategories = [
    "Syntax",
    "Selectors",
    "How To",
    "Comments",
    "Colors",
    "RGB",
    "HEX",
    "HSL",
    "Background Color",
    "Background Image",
    "Background Repeat",
    "Background Attachment",
    "Background Shorthand",
    "Border",
    "Border Width",
    "Border Color",
    "Border Sides",
    "Border Shorthand",
    "Rounded Borders",
    "Margins",
    "Margin Collapse",
    "Padding",
    "Height and Width",
    "Box Model",
    "Outline",
    "Outline Width",
    "Outline Color",
    "Outline Shorthand",
    "Outline Offset",
    "Text",
    "Text Alignment",
    "Text Decoration",
    "Text Transformation",
    "Text Spacing",
    "Text Shadow",
    "Font Family",
    "Web Safe Fonts",
    "Font Style",
    "Font Size",
    "Font Shorthand",
    "Icons",
    "Links",
    "Lists",
    "Tables",
    "Table Size",
    "Table Alignment",
    "Table Style",
    "Table Responsive",
    "Display",
    "Max Width",
    "Position",
    "Z-index",
    "Overflow",
    "Float",
    "Clear",
    "Inline-block",
    "Align",
    "Combinators",
    "Pseudo Classes",
    "Pseudo Elements",
    "Opacity",
    "Attribute Selectors",
    "Forms",
    "Counters",
    "Units",
    "Specificity",
    "!important",
    "Math Functions",
    "Rounded Corners",
    "Border Images",
    "Multiple Backgrounds",
    "Colors",
    "Color Keywords",
    "Linear Gradients",
    "Radial Gradients",
    "Conic Gradients",
    "Shadow Effects",
    "Box Shadow",
    "Text Effects",
    "Web Fonts",
    "2D Transforms",
    "3D Transforms",
    "Transitions",
    "Animations",
    "Images",
    "Image Centering",
    "Image Filters",
    "Image Shapes",
    "Object Fit",
    "Object Position",
    "Masking",
    "Multiple Columns",
    "User Interface",
    "Variables",
    "The property Rule",
    "Box Sizing",
    "Media Queries",
    "Flexbox",
    "Flex Container",
    "Flex Items",
    "Flex Responsive",
    "RWD Intro",
    "RWD Viewport",
    "RWD Grid View",
    "RWD Media Queries",
    "RWD Images",
    "RWD Videos",
    "Grid Columns and Rows",
    "Grid Container",
    "Grid Item",
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Exercises</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          Test your CSS skills with exercises from all categories:
        </p>
        <ul className="list-disc pl-5 space-y-1 max-w-xl text-gray-700 mb-4">
          {exerciseCategories.map((cat, i) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>

        <p className="mb-3">
          The exercises are a mix of "multiple choice" and "fill in the blanks"
          questions. The answer can be found in the corresponding tutorial
          chapter. If you're stuck, you can try again or hit the "Show Answer"
          button to see the correct answer.
        </p>
        <p className="mb-3">
          Log in to track your progress and get points for every exercise you
          complete.
        </p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">Example Exercise Snippet</h1>
        <p>
          Here is a simple CSS snippet to get you started practicing CSS
          exercises:
        </p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {sampleText}
        </pre>

        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy code"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties
          and selectors with syntax, examples, browser support, and more.
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

        {/* Buttons */}
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

export default CssExercises;
