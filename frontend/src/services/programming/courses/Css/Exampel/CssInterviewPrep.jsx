import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssInterviewPrep = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const exampleCode = `<body>

<h1>Hello, welcome to our website!</h1>

</body>`;

  const copyText = () => {
    navigator.clipboard.writeText(exampleCode).then(() => {
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
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Interview Preparation</h1>
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
        <p className="mb-4 text-lg">
          Try W3Schools' comprehensive Front-End interview preparation feature.
        </p>
        <p className="mb-4 text-lg">
          A tool that will help you get ready for your next interview.
        </p>
        <p className="mb-6 text-lg">
          W3Schools interview preparation is an interactive feature powered by
          AI, where you can select the role of the interviewer, ask questions,
          and receive guidance.
        </p>
        <p className="mb-6 text-lg">
          After the interview training you will get an evaluation of your
          performance that you can use to improve yourself.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          What to expect in a Front-End interview
        </h2>
        <p className="mb-6 text-lg">
          If you are going to a Front-End interview, there are a few things you
          can expect:
        </p>

        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Coding Questions:
        </h3>
        <p className="mb-6 text-lg">
          You will be asked coding questions, and you possibly also get a task
          to solve.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-blue-600">
          Examples of technical questions:
        </h3>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Tell me about your experience as a Front-End developer.</li>
          <li>
            Tell me about a personal project where you worked on implementing
            the user interface for a website.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-blue-600">
          Examples of a task:
        </h3>
        <p className="mb-4 text-lg">
          Create a webpage that shows a greeting message to the user. Use HTML
          and CSS to structure and style it. You can add a JavaScript function
          to change the message based on the time of the day.
        </p>
      </div>

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6 mt-10">
        <h1 className="text-4xl">Example </h1>
        <pre className="px-3 py-5 bg-[#E7E9EB] rounded-md whitespace-pre-wrap font-mono text-sm">
          {exampleCode}
        </pre>

      
      </div>

      <hr className="text-gray-400 my-6" />

      {/* References Section */}
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
              {path.name.trim()}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Link
            to="/css/cssPseudoClasses"
            className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </Link>
          <Link
            to="/css/cssPseudoElements"
            className="flex float-right mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CssInterviewPrep;
