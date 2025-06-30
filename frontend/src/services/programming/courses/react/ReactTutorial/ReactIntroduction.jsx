import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ReactIntroduction = () => {
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
          <h1 className="text-4xl">React Introduction</h1>
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
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md space-y-6">
        <section>
          <h2 className="text-2xl font-semibold pb-2">What is React?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React is a front-end JavaScript library.</li>
            <li>
              React was developed by the Facebook Software Engineer Jordan Walke.
            </li>
            <li>React is also known as React.js or ReactJS.</li>
            <li>React is a tool for building UI components.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">How does React Work?</h2>
          <p>React creates a <strong>VIRTUAL DOM</strong> in memory.</p>
          <p>
            Instead of manipulating the browser's DOM directly, React creates a
            virtual DOM in memory, where it does all the necessary manipulating,
            before making the changes in the browser DOM.
          </p>
          <p>React only changes what needs to be changed!</p>
          <p>
            React finds out what changes have been made, and changes only what
            needs to be changed.
          </p>
          <p>
            You will learn the various aspects of how React does this in the rest
            of this tutorial.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">What You Should Already Know</h2>
          <p>Before you continue you should have a basic understanding of the following:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p className="mt-2">
            If you want to study these subjects first, find the tutorials on our Home page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold pb-2">React.JS History</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Latest version of React.JS is 19.0.0 (December 2024).</li>
            <li>Initial release to the Public (version 0.3.0) was in July 2013.</li>
            <li>React.JS was first used in 2011 for Facebook's Newsfeed feature.</li>
            <li>Facebook Software Engineer, Jordan Walke, created it.</li>
          </ul>
        </section>
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

export default ReactIntroduction;
