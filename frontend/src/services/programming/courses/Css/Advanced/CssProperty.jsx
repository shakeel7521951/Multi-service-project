import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CssProperty = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `@property --my-bg-color {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}

@property --my-txt-color {
  syntax: "<color>";
  inherits: true;
  initial-value: darkblue;
}

div {
  width: 300px;
  height: 150px;
  padding: 15px;
  background-color: var(--my-bg-color);
  color: var(--my-txt-color);
}`;

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
    { id: 15, name: "CSS Entities", link: "/css/cssEntities" }
  ];

  return (
    <div className="px-4">
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS @property Rule</h1>
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
        <h2 className="text-xl font-semibold mb-3">What is @property?</h2>
        <p className="mb-4">
          The <code>@property</code> rule allows defining custom CSS properties (variables) directly in your stylesheet with type-checking, default values, and inheritance control.
        </p>
        <p className="mb-4">
          It improves styling reliability and flexibility without the need for JavaScript.
        </p>

        <h3 className="text-lg font-semibold mt-5 mb-2">Example Syntax</h3>
        <div className="bg-white border-l-4 border-green-500 pl-4 py-3 text-sm">
          @property --myColor &#123;<br />
          &nbsp;&nbsp;syntax: "&lt;color&gt;";<br />
          &nbsp;&nbsp;inherits: true;<br />
          &nbsp;&nbsp;initial-value: lightgray;<br />
          &#125;
        </div>

        <div className="flex px-5 mt-6 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Try It Yourself
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

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

      <div className="my-10 px-5">
        <h2 className="text-2xl font-semibold mb-2">Benefits of Using @property</h2>
        <ul className="list-disc list-inside">
          <li>Type checking for variables</li>
          <li>Default value fallback</li>
          <li>Explicit control over inheritance</li>
        </ul>
      </div>

      <hr className="text-gray-400 my-8" />

      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore more essential CSS concepts from our reference library:
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

export default CssProperty;