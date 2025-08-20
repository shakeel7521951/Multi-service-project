import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactTutorialHome = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const reactCode = `
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
  `;

  const copyText = () => {
    navigator.clipboard.writeText(reactCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

const refArray = [
  { id: 1, name: "React Introduction", link: "/react/reactIntro" },
  { id: 2, name: "React JSX", link: "/react/reactJSX" },
  { id: 3, name: "React Components", link: "/react/reactComponents" },
  { id: 4, name: "React Props", link: "/react/reactProps" },
  { id: 5, name: "React State", link: "/react/reactState" },
  { id: 6, name: "React Events", link: "/react/reactEvents" },
  { id: 7, name: "React Conditional Rendering", link: "/react/reactConditionalRendering" },
  { id: 8, name: "React Lists", link: "/react/reactLists" },
  { id: 9, name: "React Forms", link: "/react/reactForms" },
  { id: 10, name: "React UseEffect", link: "/react/reactUseEffect" },
  { id: 11, name: "React UseState", link: "/react/reactUseState" },
  { id: 12, name: "React Custom Hooks", link: "/react/reactCustomHooks" },
  { id: 13, name: "React Router", link: "/react/reactRouter" },
  { id: 14, name: "React Context", link: "/react/reactContext" },
  { id: 15, name: "React Memo", link: "/react/reactMemo" },
];


  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">React Tutorial</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <h1 className="text-2xl pb-2">Learn React</h1>
        <p className="pb-3">
          React is a JavaScript library for building user interfaces.
        </p>
        <ul className="flex flex-col gap-3 my-5">
          <li>React is used to build single-page applications.</li>
          <li>React allows us to create reusable UI components.</li>
        </ul>
        <div className="flex px-5 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning React Now
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">Learning by Examples</h1>
        <p>Our "Show React" tool makes it easy to demonstrate React.</p>
        <p>It shows both the code and the result.</p>
        <p>Example: Get your own React.js Server</p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">React Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {reactCode}
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

      {/* References Section */}
      <div className="px-1 my-10">
           <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          At W3Schools you will find complete React references of all properties
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

export default ReactTutorialHome;

