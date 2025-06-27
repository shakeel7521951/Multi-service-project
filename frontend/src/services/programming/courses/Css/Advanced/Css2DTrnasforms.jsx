import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Css2DTransforms = () => {
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
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS 2D Transforms</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-4">
          CSS transforms allow you to move, rotate, scale, and skew elements.
        </p>
        <p className="pb-4">
          Mouse over the element below to see a 2D transformation:
        </p>

        {/* Transform Demo Box */}
        <div className="flex justify-center my-6">
          <div className="bg-white p-10 text-lg font-semibold rounded-md transition-transform duration-500 hover:rotate-12 shadow-md">
            Hover to Rotate Me
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          CSS 2D Transform Property
        </h2>
        <p className="pb-4">
          The <code>transform</code> property is used to apply 2D (and 3D)
          transformation functions to elements.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Available 2D Transform Functions:
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <code>translate()</code> – Moves the element from its current
            position.
          </li>
          <li>
            <code>rotate()</code> – Rotates the element clockwise or
            counter-clockwise.
          </li>
          <li>
            <code>scaleX()</code> – Scales the element along the X-axis.
          </li>
          <li>
            <code>scaleY()</code> – Scales the element along the Y-axis.
          </li>
          <li>
            <code>scale()</code> – Scales the element in both directions.
          </li>
          <li>
            <code>skewX()</code> – Skews the element along the X-axis.
          </li>
          <li>
            <code>skewY()</code> – Skews the element along the Y-axis.
          </li>
          <li>
            <code>skew()</code> – Skews the element in both directions.
          </li>
          <li>
            <code>matrix()</code> – Allows you to combine all 2D transform
            methods into one.
          </li>
        </ul>

        <p className="mt-6 italic text-gray-700">
          Tip: You will learn about 3D transformations in the next chapter.
        </p>
      </div>

      {/* Reference Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
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

export default Css2DTransforms;
