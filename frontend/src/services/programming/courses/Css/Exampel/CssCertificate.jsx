import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssCertificate = () => {
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
          <h1 className="text-4xl">CSS Certificate</h1>
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
        <h2 className="text-2xl mb-4">W3Schools CSS Certificate - 2025</h2>
        <p className="pb-3">W3Schools offers an Online Certification Program.</p>
        <ul className="list-disc ml-6 mb-4">
          <li>The perfect solution for busy professionals who need to balance work, family, and career building.</li>
          <li>More than 50,000 certificates already issued!</li>
        </ul>
        <h3 className="text-xl font-semibold mt-5 mb-2">Why Get Certified?</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Document your skills</li>
          <li>Improve your career</li>
          <li>Study at your own pace</li>
          <li>Save time and money</li>
          <li>Known brand</li>
          <li>Trusted by top companies</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5 mb-2">Who Should Consider Getting Certified?</h3>
        <p>
          Any student or professional within the digital industry. Certifications are valuable assets to gain trust and
          demonstrate knowledge to your clients, current or future employers in a competitive market.
        </p>

        <h3 className="text-xl font-semibold mt-5 mb-2">Exam Overview</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Fee:</strong> 95 USD</li>
          <li><strong>Certification Levels:</strong> Intermediate (40%), Advanced (75%), Professional (90%)</li>
          <li><strong>Number of Questions:</strong> Adaptive, ~60 questions</li>
          <li><strong>Requirement to Pass:</strong> Minimum 40% - Intermediate level</li>
          <li><strong>Time Limit:</strong> 60 minutes</li>
          <li><strong>Number of Attempts:</strong> 3</li>
          <li><strong>Exam Deadline:</strong> None</li>
          <li><strong>Certification Expiration:</strong> None</li>
          <li><strong>Format:</strong> Online, multiple choice</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5 mb-2">Advance Faster in Your Career</h3>
        <p className="pb-3">
          Getting certified proves your commitment to upgrading your skills. The certificate can be added to your CV,
          Resume, or LinkedIn profile. It shows you’re ready for more responsibilities, bigger projects, and better pay.
        </p>

        <div className="flex px-5 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning CSS Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete CSS references of all properties and selectors with syntax, examples,
          browser support, and more.
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

export default CssCertificate;
