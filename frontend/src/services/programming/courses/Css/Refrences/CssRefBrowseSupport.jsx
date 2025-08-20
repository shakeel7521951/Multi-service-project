import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssRefBrowseSupport = () => {
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

  const supportData = [
    { property: "accent-color", edge: "93", firefox: "92", chrome: "93", safari: "15.4", opera: "79" },
    { property: "align-content", edge: "16", firefox: "52", chrome: "57", safari: "10.1", opera: "44" },
    { property: "align-items", edge: "16", firefox: "52", chrome: "57", safari: "10.1", opera: "44" },
    { property: "align-self", edge: "16", firefox: "52", chrome: "57", safari: "10.1", opera: "44" },
    { property: "all", edge: "79", firefox: "27", chrome: "37", safari: "9.1", opera: "24" },
    { property: "animation", edge: "10", firefox: "16", chrome: "43", safari: "9", opera: "30" },
    { property: "animation-delay", edge: "10", firefox: "16", chrome: "43", safari: "9", opera: "30" },
    { property: "animation-direction", edge: "10", firefox: "16", chrome: "43", safari: "9", opera: "30" },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Browser Support</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <Link
            to="/"
            className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </Link>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-3 text-lg">
          Learn which CSS properties are supported in which browsers.
        </p>
        <h1 className="text-2xl">CSS Reference With Browser Support</h1>
        <p className="mt-4">
          The table below lists all CSS properties and their initial support across major browsers.
        </p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Property</th>
              <th className="px-4 py-2 border border-gray-300">Edge</th>
              <th className="px-4 py-2 border border-gray-300">Firefox</th>
              <th className="px-4 py-2 border border-gray-300">Chrome</th>
              <th className="px-4 py-2 border border-gray-300">Safari</th>
              <th className="px-4 py-2 border border-gray-300">Opera</th>
            </tr>
          </thead>
          <tbody>
            {supportData.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="px-4 py-3 border border-gray-300 font-mono font-semibold">
                  {item.property}
                </td>
                <td className="px-4 py-3 border border-gray-300">{item.edge}</td>
                <td className="px-4 py-3 border border-gray-300">{item.firefox}</td>
                <td className="px-4 py-3 border border-gray-300">{item.chrome}</td>
                <td className="px-4 py-3 border border-gray-300">{item.safari}</td>
                <td className="px-4 py-3 border border-gray-300">{item.opera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore all of our CSS reference topics below, each with examples and browser compatibility.
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
          <Link
            to="/css/cssProperties"
            className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </Link>
          <Link
            to="/css/cssSelectors"
            className="flex float-right mt-6 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white items-center"
          >
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CssRefBrowseSupport;
