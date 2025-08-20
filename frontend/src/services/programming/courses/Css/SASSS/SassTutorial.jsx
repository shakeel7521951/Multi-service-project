import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const SassTutorial = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const sassCode = `/* Define standard variables and values for website */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* Use the variables */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}`;

  const copyText = () => {
    navigator.clipboard.writeText(sassCode).then(() => {
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
    <div className="px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Sass Tutorial</h1>
        <CiBookmark className="text-4xl text-green-500" />
      </div>

      {/* Info Section */}
      <div className="bg-[#D9EEE1] p-6 rounded-lg mb-8">
        <p className="mb-4">
          Sass is a <strong>CSS pre-processor</strong> that helps write cleaner, more
          maintainable stylesheets. It allows you to use variables, nested rules,
          mixins, functions, and more.
        </p>
        <p className="mb-4">
          Sass reduces repetition of CSS and saves time during development.
        </p>
        <p>
          <strong>Examples in Each Chapter:</strong> Our tutorial provides interactive
          Sass examples with output.
        </p>
      </div>

      {/* Example Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Sass Example</h2>
        <pre className="bg-[#f3f4f6] text-black p-5 rounded-md whitespace-pre-wrap font-mono">
          {sassCode}
        </pre>
        <button
          onClick={copyText}
          className="mt-4 px-5 py-2 text-white bg-[#03945F] rounded-md font-semibold flex items-center"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-2xl ml-2" />
        </button>
      </div>

      {/* Explanation */}
      <div className="mt-10 text-gray-700">
        <p>
          This example defines variables for background color, text color, and font
          size, then applies them in the <code>body</code> style. This is a common
          practice in Sass to maintain consistent and easily adjustable styling.
        </p>
      </div>

      <hr className="text-gray-400 my-10" />

      {/* Reference Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties and
          selectors with syntax, examples, browser support, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((ref) => (
            <Link
              to={ref.link}
              key={ref.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {ref.name.trim()}
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <div className="flex mt-6 px-4 py-2 cursor-pointer text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex mt-6 px-5 py-2 cursor-pointer text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SassTutorial;
