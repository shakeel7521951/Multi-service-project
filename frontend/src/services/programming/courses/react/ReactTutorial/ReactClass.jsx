import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactClass = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const code1 = `class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`;

  const code2 = `const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);`;

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
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
          <h1 className="text-4xl">React Class Components</h1>
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
        <p className="pb-3">
          Before React 16.8, Class components were the only way to track state and lifecycle. This section explains how to use them.
        </p>
        <h1 className="text-2xl">React Class Component Overview</h1>
        <ul className="flex flex-col gap-3 my-5">
          <li>Introduced before React Hooks</li>
          <li>Still supported in modern React</li>
          <li>Useful for understanding older codebases</li>
          <li>Contain state and lifecycle methods</li>
        </ul>
        <div className="flex px-5 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Start Learning React Classes
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">Class Component Example</h1>
        <p>This example defines a class component named Car that renders a heading:</p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">React Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {code1}
        </pre>

        <button
          onClick={() => copyText(code1)}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <p className="mt-5 mb-3">
        The component can be rendered to the DOM using ReactDOM as follows:
      </p>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {code2}
        </pre>

        <button
          onClick={() => copyText(code2)}
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

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Link
            to="/reactcomponent"
            className="flex float-left mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </Link>
          <Link
            to="/reactprops"
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

export default ReactClass;