import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReactSassStyling = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const sassCode = `$myColor: red;

h1 {
  color: $myColor;
}`;

  const indexCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);`;

  const copyText = () => {
    navigator.clipboard.writeText(indexCode).then(() => {
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
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">React Sass Styling</h1>
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
        <p className="pb-3">
          Sass is a CSS pre-processor. Sass files are executed on the server and send CSS to the browser.
        </p>
        <p className="pb-3">
          If you're using <code>create-react-app</code>, you can install Sass using:
        </p>
        <div className="bg-white p-3 rounded-md font-mono text-sm mb-4">
          npm i sass
        </div>
        <p className="pb-3">
          You can now include Sass files in your project. Sass files use the <code>.scss</code> extension and can include variables and functions.
        </p>
        <p className="pb-2 font-semibold">my-sass.scss:</p>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-4 rounded-md mb-4">
          {sassCode}
        </pre>
        <p className="pb-2 font-semibold">index.js:</p>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-4 rounded-md">
          {indexCode}
        </pre>
        <button
          onClick={copyText}
          className="flex items-center mt-4 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white"
        >
          {copySuccess ? "Copied!" : "Copy index.js"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>

      <hr className="text-gray-400 my-6" />

      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">React References</h1>
        <p className="max-w-3xl pb-5">
          Use these references to explore more about styling, components, and state management in React.
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

export default ReactSassStyling;
