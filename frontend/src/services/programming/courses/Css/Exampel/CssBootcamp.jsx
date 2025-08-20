import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssBootcamp = () => {
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
          <h1 className="text-4xl">CSS Bootcamp</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <h1 className="text-2xl mb-4">W3Schools CSS Bootcamp</h1>
        <p className="pb-2">
          <strong>HTML & CSS Bootcamp</strong>
          <br />
          Learn Front-end with W3Schools.
          <br />
          Self-paced online courses.
          <br />
          Duration: Around 80 hours.
        </p>
        <p className="font-bold text-lg mt-3 tracking-widest text-[#03945F]">
          w3schoolsBOOTCAMP.2025
        </p>

        <div className="mt-5">
          <h2 className="text-xl font-semibold">What You Will Learn</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>HTML</strong>: Create your own Website using HTML5, format
              text, add images, create forms, tables, links, etc.
            </li>
            <li>
              <strong>CSS</strong>: Style and control layout of multiple pages
              simultaneously.
            </li>
            <li>
              <strong>JavaScript</strong>: Add interactivity and control page
              behavior dynamically.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Self-paced Courses</h2>
          <p className="mt-2">
            This program helps you build solid foundations in HTML, CSS, and
            JavaScript through structured, interactive modules. Learn at your
            own pace with text lessons, interactive examples, and certification
            exams.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">What You Get</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Certified HTML Developer</li>
            <li>Certified CSS Developer</li>
            <li>Certified JavaScript Developer</li>
            <li>Certified Front-End Developer</li>
            <li>
              Certificate of Completion (shareable on LinkedIn, CV, Resume)
            </li>
          </ul>
        </div>

        <div className="flex px-5 w-fit mt-8 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Reference Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Explore complete CSS references for all properties and selectors with
          examples and browser support.
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

export default CssBootcamp;
