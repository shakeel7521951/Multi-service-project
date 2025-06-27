import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssOpacity = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
/* Example 1: Basic opacity */
img.transparent {
  opacity: 0.5;
}

/* Example 2: Full visibility on hover */
img.transparent:hover {
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* Example 3: Opacity on a div */
div.box {
  background-color: #4CAF50;
  padding: 20px;
  color: white;
  opacity: 0.7;
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
    { id: 7, name: "CSS Opacity", link: "/css/cssOpacity" },
    { id: 8, name: "CSS At-rules", link: "/css/cssAtRules" },
    { id: 9, name: "CSS Units", link: "/css/cssUnits" },
    { id: 10, name: "CSS Colors", link: "/css/cssColors" },
  ];

  return (
    <div className="px-4">
      {/* Header */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-bold">CSS Opacity</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-start">
          <div className="flex items-center px-3 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] cursor-pointer">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-5 mt-5 py-10 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">What is Opacity in CSS?</h2>
        <p className="mb-3">
          The <code className="bg-gray-200 px-1">opacity</code> property in CSS
          specifies the transparency level of an element. It accepts a value
          from <strong>0.0 (fully transparent)</strong> to{" "}
          <strong>1.0 (fully opaque)</strong>.
        </p>
        <p className="mb-3">
          You can use opacity to make images, text, or entire containers
          semi-transparent. Opacity is often combined with transitions or hover
          effects to create interactive designs.
        </p>
        <p className="mb-3">
          In the example below, we apply{" "}
          <code className="bg-gray-200 px-1">opacity: 0.5</code> to an image by
          default, and when hovered, the image returns to full opacity using{" "}
          <code className="bg-gray-200 px-1">opacity: 1</code>.
        </p>
        <div className="flex mt-5 w-fit px-5 py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center cursor-pointer">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-4xl font-bold">CSS Opacity Example</h2>
        <p>
          The first CSS block applies <code>opacity: 0.5</code> to an image.
          When the user hovers over the image, it becomes fully visible again
          using <code>opacity: 1</code>.
        </p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h3 className="text-2xl font-semibold mb-3">CSS Code</h3>
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
          Learn more about CSS opacity and other essential CSS features from the
          references below.
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

export default CssOpacity;
