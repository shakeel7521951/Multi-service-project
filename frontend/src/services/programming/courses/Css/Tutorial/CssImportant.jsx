import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssImportant = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
#myid {
  background-color: blue;
}

.myclass {
  background-color: gray;
}

p {
  background-color: red !important;
}`;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS !important Rule</h1>
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
          The <code>!important</code> rule in CSS is used to give a CSS
          property the highest priority. It overrides all other declarations,
          including inline styles.
        </p>
        <h1 className="text-2xl">What is !important?</h1>
        <ul className="flex flex-col gap-3 my-5">
          <li>
            It can be added to any CSS property to make sure it is applied
            regardless of other specificity rules.
          </li>
          <li>
            Useful for overriding styles from external stylesheets or
            frameworks.
          </li>
          <li>
            However, overuse of <code>!important</code> is considered bad
            practice.
          </li>
        </ul>
        <div className="flex px-5 w-fit cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Learn More About CSS Priority
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Example Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-4xl">CSS Example</h1>
        <p>
          Even though the element has a class and an ID with different
          background colors, the <code>!important</code> rule overrides them.
        </p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">CSS Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {cssCode}
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

      {/* Footer Navigation */}
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
  );
};

export default CssImportant;
