import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssRefDefaultValues = () => {
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

  const defaultStyles = [
    {
      element: "a:link",
      value: [
        "color: (internal value);",
        "text-decoration: underline;",
        "cursor: auto;",
      ],
    },
    {
      element: "a:visited",
      value: [
        "color: (internal value);",
        "text-decoration: underline;",
        "cursor: auto;",
      ],
    },
    {
      element: "a:link:active",
      value: ["color: (internal value);"],
    },
    {
      element: "a:visited:active",
      value: ["color: (internal value);"],
    },
    {
      element: "abbr",
      value: ["None."],
    },
    {
      element: "address",
      value: ["display: block;", "font-style: italic;"],
    },
    {
      element: "area",
      value: ["display: none;"],
    },
    {
      element: "article",
      value: ["display: block;"],
    },
  ];

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Default Values</h1>
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
          All HTML elements have default styling set by the browser. These can
          be overridden with your own CSS.
        </p>
        <h1 className="text-2xl">Default CSS Values for HTML Elements</h1>
        <p className="mt-4">
          The table below shows some common default values applied to HTML
          elements by modern browsers.
        </p>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Element</th>
              <th className="px-4 py-2 border border-gray-300">Default CSS Value</th>
            </tr>
          </thead>
          <tbody>
            {defaultStyles.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="px-4 py-3 border border-gray-300 font-mono font-semibold">
                  {item.element}
                </td>
                <td className="px-4 py-3 border border-gray-300 font-mono whitespace-pre-line">
                  {item.value.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
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
          Explore all of our CSS reference topics below, each with examples and
          best practices.
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
            to="/css/cssAnimatable"
            className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </Link>
          <Link
            to="/css/cssEntities"
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

export default CssRefDefaultValues;
