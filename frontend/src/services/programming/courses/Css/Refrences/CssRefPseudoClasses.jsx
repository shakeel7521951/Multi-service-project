import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssRefPseudoClasses = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
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
          <h1 className="text-4xl font-bold">CSS Pseudo-classes</h1>
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
        <h2 className="text-2xl font-semibold mb-2">What are Pseudo-classes?</h2>
        <p className="mb-3">A pseudo-class is used to define a special state of an element.</p>
        <div>
          <h3 className="font-semibold mb-1">For example, it can be used to:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Style an element when a user moves the mouse over it</li>
            <li>Style visited and unvisited links differently</li>
            <li>Style an element when it gets focus</li>
            <li>Style valid/invalid/required/optional form elements</li>
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
        <h2 className="text-4xl font-bold">Examples in Each Chapter</h2>
        <p>This CSS tutorial contains hundreds of CSS examples.</p>
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

export default CssRefPseudoClasses;
