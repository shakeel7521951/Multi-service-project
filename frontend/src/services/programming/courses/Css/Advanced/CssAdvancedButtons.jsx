import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssAdvancedButtons = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
.button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button1 { background-color: #04AA6D; } /* Green */
.button2 { background-color: #008CBA; } /* Blue */
.button3 { background-color: #f44336; } /* Red */
.button4 { background-color: #e7e7e7; color: black; } /* Gray */
.button5 { background-color: #555555; } /* Black */
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
          <h1 className="text-4xl">CSS Advanced Buttons</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5  mt-5 py-10 rounded-md">
        <p className="pb-3">
          Learn how to create and style buttons using CSS. Buttons can be customized in many ways to fit your website's style.
        </p>
        <h2 className="text-xl font-semibold mb-2">Basic Button Styling</h2>
        <p className="pb-3">Below is a simple button with background color, padding, and text styling:</p>
        <div className="my-4">
          <button className="button bg-[#04AA6D] text-white py-3 px-6 rounded-md font-semibold">Default Button</button>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">Button Colors</h2>
        <p className="pb-3">Use the <code>background-color</code> property to change button colors:</p>
        <div className="space-x-4 my-3">
          <button className="button1 bg-[#04AA6D] text-white py-2 px-4 rounded">Green</button>
          <button className="button2 bg-[#008CBA] text-white py-2 px-4 rounded">Blue</button>
          <button className="button3 bg-[#f44336] text-white py-2 px-4 rounded">Red</button>
          <button className="button4 bg-[#e7e7e7] text-black py-2 px-4 rounded">Gray</button>
          <button className="button5 bg-[#555555] text-white py-2 px-4 rounded">Black</button>
        </div>

        <div className="flex px-5 w-fit mt-6 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Practicing Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      {/* Code Block */}
      <div className="mt-6 px-4 py-5 bg-[#E7E9EB] rounded-md">
        <h2 className="text-2xl mb-4">CSS Example</h2>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 rounded-md">
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

      <hr className="text-gray-400 my-8" />

      {/* References */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore other core CSS topics and sharpen your styling knowledge.
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

        {/* Navigation */}
        <div className="flex justify-between">
          <div className="flex mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssAdvancedButtons;
