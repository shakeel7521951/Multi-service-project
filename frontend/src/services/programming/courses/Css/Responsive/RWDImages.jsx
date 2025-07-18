import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const RWDImages = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `img {
  width: 100%;
  height: auto;
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
          <h1 className="text-4xl">Responsive Web Design - Images</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          Resize the browser window to see how the image scales to fit the page.
        </p>
        <p className="pb-3">
          <strong>Using The width Property:</strong><br />
          If the <code>width</code> property is set to a percentage and the <code>height</code> property is set to <code>auto</code>, the image will be responsive and scale up and down.
        </p>
      </div>

      <div className="flex flex-col gap-4 my-6">
        <h1 className="text-3xl">Example</h1>
        <pre className="bg-[#E7E9EB] text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 rounded-md">
          {cssCode}
        </pre>
        <button
          onClick={copyText}
          className="flex items-center w-max my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
        <p className="text-gray-700 max-w-3xl">
          Notice that in the example above, the image can be scaled up to be larger than its original size. A better solution, in many cases, will be to use the <code>max-width</code> property instead.
        </p>
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
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
  );
};

export default RWDImages;
