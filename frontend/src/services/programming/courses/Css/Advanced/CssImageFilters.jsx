import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssImageFilters = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
img {
  filter: blur(5px);
  filter: brightness(150%);
  filter: contrast(200%);
  filter: drop-shadow(8px 8px 10px gray);
  filter: grayscale(100%);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: opacity(50%);
  filter: saturate(200%);
  filter: sepia(100%);
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
          <h1 className="text-4xl">CSS Image Filter Effects</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          The <code>filter</code> property in CSS is used to add visual effects
          (like blur, brightness, and contrast) to elements such as images.
        </p>
        <h2 className="text-2xl font-semibold pb-3">Available CSS Filters</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>blur()</code></li>
          <li><code>brightness()</code></li>
          <li><code>contrast()</code></li>
          <li><code>drop-shadow()</code></li>
          <li><code>grayscale()</code></li>
          <li><code>hue-rotate()</code></li>
          <li><code>invert()</code></li>
          <li><code>opacity()</code></li>
          <li><code>saturate()</code></li>
          <li><code>sepia()</code></li>
        </ul>
        <div className="flex px-5 w-fit cursor-pointer mt-6 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning CSS Filters
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      {/* Example Section */}
      <div className="my-10">
        <h2 className="text-3xl font-semibold pb-4">CSS Filter Example</h2>
        <p className="pb-3">Apply multiple filters to an image:</p>
        <pre className="bg-[#E7E9EB] rounded-md p-5 overflow-auto text-sm font-mono whitespace-pre-wrap text-black">
          {cssCode}
        </pre>
        <button
          onClick={copyText}
          className="flex items-center my-4 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white"
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

export default CssImageFilters;
