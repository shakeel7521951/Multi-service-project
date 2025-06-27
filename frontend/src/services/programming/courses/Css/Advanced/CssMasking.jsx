import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssMasking = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
.mask1 {
  -webkit-mask-image: url('w3logo.png');
  mask-image: url('w3logo.png');
  mask-repeat: no-repeat;
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
          <h1 className="text-4xl">CSS Masking</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3">
          With <code>CSS masking</code>, you can apply a mask layer over an
          element to partially or completely hide parts of it.
        </p>
        <p className="pb-3">
          The <code>mask-image</code> property lets you use an image or gradient
          to determine which parts of an element are visible.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Common mask image sources:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>PNG or SVG files</li>
          <li>CSS gradients</li>
          <li>SVG <code>{`<mask>`}</code> elements</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Browser Support:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-md mt-2 text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Property</th>
                <th className="px-4 py-2">Chrome</th>
                <th className="px-4 py-2">Edge</th>
                <th className="px-4 py-2">Firefox</th>
                <th className="px-4 py-2">Safari</th>
                <th className="px-4 py-2">iOS Safari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-medium">mask-image</td>
                <td className="px-4 py-2">120</td>
                <td className="px-4 py-2">120</td>
                <td className="px-4 py-2">53</td>
                <td className="px-4 py-2">15.4</td>
                <td className="px-4 py-2">15 -webkit-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex px-5 w-fit mt-6 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Practicing Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-3xl font-bold">Example with PNG Mask</h1>
        <p>
          The following image of Cinque Terre is masked using a PNG file to hide
          some of its parts.
        </p>
        <div className="relative w-[300px] h-[200px] border bg-gray-100 overflow-hidden">
          <img
            src="https://www.w3schools.com/css/img_5terre.jpg"
            alt="Cinque Terre"
            className="w-full h-full mask1"
            style={{
              WebkitMaskImage: "url('https://www.w3schools.com/css/w3logo.png')",
              maskImage: "url('https://www.w3schools.com/css/w3logo.png')",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center"
            }}
          />
        </div>
      </div>

      {/* CSS Code Example */}
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
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Reference Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore essential CSS topics with examples and browser support.
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

export default CssMasking;
