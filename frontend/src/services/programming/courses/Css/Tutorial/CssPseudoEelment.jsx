import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssPseudoElements = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
/* Add content before an element */
p::before {
  content: "Note: ";
  color: red;
  font-weight: bold;
}

/* Add content after an element */
p::after {
  content: " ✔";
  color: green;
}

/* Style the first letter of a paragraph */
p::first-letter {
  font-size: 200%;
  color: #8A2BE2;
}

/* Style the first line of a paragraph */
p::first-line {
  font-weight: bold;
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
      {/* Header */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-bold">CSS Pseudo-elements</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-start">
          <div className="flex items-center px-3 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] cursor-pointer">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="px-5 mt-5 py-10 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">What are Pseudo-elements?</h2>
        <p className="mb-3">
          A pseudo-element allows you to style specific parts of an element.
        </p>
        <div>
          <h3 className="font-semibold mb-1">Common uses include:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Styling the first letter or line of a text block</li>
            <li>Inserting content before or after an element</li>
            <li>Creating custom bullets or quotes</li>
          </ul>
        </div>
        <div className="flex mt-5 w-fit px-5 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center cursor-pointer">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-4xl font-bold">CSS Pseudo-element Examples</h2>
        <p>This section demonstrates how pseudo-elements enhance your styling.</p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h3 className="text-2xl font-semibold mb-3">CSS Example</h3>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 rounded-md">
          {cssCode}
        </pre>
        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Reference Section */}
      <div className="px-1 my-10">
        <h2 className="text-3xl font-semibold pb-4">CSS References</h2>
        <p className="max-w-3xl pb-5">
          Learn more about CSS pseudo-elements and other important concepts from the reference section below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((path) => (
            <Link
              to={path.link}
              key={path.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {path.name}
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <div className="flex items-center px-3 py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] cursor-pointer">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex items-center px-5 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] cursor-pointer">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssPseudoElements;
