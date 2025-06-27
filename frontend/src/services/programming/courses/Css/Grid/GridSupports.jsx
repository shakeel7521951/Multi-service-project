import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const GridSupports = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `/* use this CSS if the browser does not support display: flex */
.container {
  float: left;
  width: 100%;
}

/* use this CSS if the browser supports display: flex */
@supports (display: flex) {
  .container {
    display: flex;
  }
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
    { id: 15, name: "CSS Entities", link: "/css/cssEntities" },
  ];

  return (
    <div className="px-4">
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS @supports Rule</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          The <code>@supports</code> rule lets you check if the browser supports a specific CSS property or value, and define fallback styles.
        </p>
        <p className="pb-3">
          This is useful for applying styles only when the browser can handle them.
        </p>
        <p className="pb-3">
          <strong>Basic Syntax:</strong><br />
          <code>@supports (property: value) &#123; &#47;* CSS rules *&#47; &#125;</code>
        </p>
        <p className="pb-3">
          In this example, if the browser supports <code>display: flex</code>, it will apply the flex layout. If not, it will fallback to float layout.
        </p>
      </div>

      <hr className="text-gray-400 my-6" />

      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">CSS @supports Example</h1>
        <p>Here is how you use the <code>@supports</code> rule to provide fallback CSS:</p>
      </div>

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

        <div className="pt-6">
          <h1 className="text-xl font-bold pb-2">Live Preview</h1>
          <div className="container-preview">
            <div>Content block</div>
          </div>
          <style>{`
            .container-preview {
              width: 100%;
              padding: 20px;
              background-color: #d1fae5;
              margin-top: 10px;
            }

            @supports (display: flex) {
              .container-preview {
                display: flex;
                justify-content: center;
                gap: 10px;
              }
            }
          `}</style>
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

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

export default GridSupports;
