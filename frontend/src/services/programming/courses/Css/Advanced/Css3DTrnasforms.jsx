import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Css3DTransforms = () => {
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
          <h1 className="text-4xl">CSS 3D Transforms</h1>
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
          CSS also supports <strong>3D transformations</strong> that allow elements to be transformed in 3D space.
        </p>

        <p className="pb-4">
          Mouse over the elements below to see the difference between a 2D and a 3D transformation:
        </p>

        {/* 2D vs 3D Box */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          <div className="bg-white p-10 text-center font-semibold transition-transform duration-500 hover:rotate-45 shadow-md rounded-md">
            2D rotate
          </div>
          <div className="bg-white p-10 text-center font-semibold transition-transform duration-500 hover:rotate-y-180 shadow-md rounded-md">
            3D rotate
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          CSS 3D Transform Property
        </h2>
        <p className="pb-4">
          The <code>transform</code> property is used to apply 3D transformations in addition to 2D effects.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Common 3D Transform Functions:
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <code>rotateX()</code> – Rotates the element around the X-axis.
          </li>
          <li>
            <code>rotateY()</code> – Rotates the element around the Y-axis.
          </li>
          <li>
            <code>rotateZ()</code> – Rotates the element around the Z-axis.
          </li>
        </ul>

        <p className="mt-6 italic text-gray-700">
          Tip: Use the <code>transform-style</code> and <code>perspective</code> properties for better 3D control.
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

export default Css3DTransforms;
