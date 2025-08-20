import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssAlign = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
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
      <header className="mt-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-4xl font-bold">
            CSS Layout - Horizontal & Vertical Align
          </h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-white text-xl font-semibold bg-[#03945F] rounded-lg hover:bg-green-600 transition"
        >
          <MdKeyboardArrowLeft className="text-3xl" />
          Home
        </Link>
      </header>

      {/* Centering Example Text */}
      <section className="px-5 mt-5 py-10 rounded-md">
        <div className="flex bg-gray-500 justify-center items-center p-10 my-10 rounded-lg">
          <p className="text-white bg-green-600 px-6 py-4 text-center text-2xl rounded border-2 border-green-300">
            Center elements horizontally and vertically
          </p>
        </div>
        <button className="flex items-center px-5 py-2 text-xl font-semibold text-white bg-[#03945F] rounded-lg hover:bg-green-700 transition">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </section>

      {/* Explanation Section */}
      <section>
        <h2 className="text-3xl font-semibold pb-3">Center Align Elements</h2>
        <p>
          To horizontally center a block element{" "}
          <code className="bg-gray-200 px-1 rounded">{"<div>"}</code>, use{" "}
          <span className="text-red-400 font-semibold">margin: auto</span>;
        </p>
        <p className="my-4">
          Setting the width of the element will prevent it from stretching out
          to the edges of its container.
        </p>
        <p>
          The element will then take up the specified width, and the remaining
          space will be split equally between the two margins:{" "}
          <span className="text-red-400 font-semibold">margin: auto</span>.
        </p>
      </section>

      {/* Visual Example */}
      <div className="flex justify-center items-center py-5">
        <div className="px-4 py-3 border-2 border-green-400 bg-white shadow-sm">
          This div element is centered.
        </div>
      </div>

      <hr className="border-gray-300 my-6" />

      {/* Code Example */}
      <section className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h2 className="text-2xl font-semibold">Example</h2>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md border">
          {cssCode}
        </pre>
        <button
          onClick={copyText}
          className="flex items-center mt-4 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white hover:bg-green-700 transition"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </section>

      <hr className="border-gray-300 my-6" />

      {/* Reference Links */}
      <section className="my-10">
        <h2 className="text-3xl font-semibold pb-4">CSS References</h2>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties
          and selectors with syntax, examples, browser support, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((ref) => (
            <Link
              to={ref.link}
              key={ref.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {ref.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center px-4 py-2 text-md font-semibold text-white bg-[#03945F] rounded-lg hover:bg-green-700 transition">
          <MdKeyboardArrowLeft className="text-3xl" />
          Previous
        </button>
        <button className="flex items-center px-4 py-2 text-md font-semibold text-white bg-[#03945F] rounded-lg hover:bg-green-700 transition">
          Next
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default CssAlign;
