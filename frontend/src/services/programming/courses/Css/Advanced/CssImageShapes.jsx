import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssImageShapes = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
img {
  clip-path: circle(50%);
}
  `;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
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

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Image Shapes</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-5  mt-5 py-10 rounded-md">
        <p className="pb-3">
          With CSS, it is easy to shape (clip) images into <strong>circles</strong>, <strong>ellipses</strong>, and even <strong>polygons</strong> using the <code className="bg-gray-100 px-2 py-1 rounded text-purple-600">clip-path</code> property.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">The CSS <code>clip-path</code> Property</h2>
        <p className="mb-4 text-lg">
          The <code className="bg-gray-100 px-2 py-1 rounded text-purple-600">clip-path</code> property lets you clip an element to a basic shape like a circle, ellipse, or polygon.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">The <code>circle()</code> Function</h2>
        <p className="mb-4 text-lg">
          The <code className="bg-gray-100 px-2 py-1 rounded text-purple-600">circle()</code> function defines a circle using a radius and a position. It is commonly used with <code className="bg-gray-100 px-2 py-1 rounded text-purple-600">clip-path</code> to clip images into circular shapes.
        </p>

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

      
      </div>

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties and selectors with syntax, examples, browser support, and more.
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

export default CssImageShapes;
