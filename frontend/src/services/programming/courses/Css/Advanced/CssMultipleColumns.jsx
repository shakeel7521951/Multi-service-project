import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssMultipleColumns = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
.multicolumn {
  column-count: 3;
  column-gap: 40px;
  column-rule: 2px solid #04AA6D;
}
`;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
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
      {/* Header */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Multiple Columns</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-5 bg-[#D9EEE1] mt-5 py-10 rounded-md">
        <p className="pb-4">
          The CSS Multi-column Layout allows you to create text that is divided into
          multiple columns, similar to how newspapers and magazines format content.
        </p>

        <h2 className="text-xl font-semibold mb-2">Example:</h2>
        <div className="bg-white text-black p-4 rounded-md border border-gray-300 my-4">
          <div className="multicolumn" style={{
            columnCount: 3,
            columnGap: "40px",
            columnRule: "2px solid #04AA6D"
          }}>
            <h3 className="font-bold">Daily Ping</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum.
            </p>
          </div>
        </div>

        <div className="flex px-5 w-fit mt-6 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          Try It Yourself
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </div>
      </div>

      {/* CSS Code Block */}
      <div className="mt-6 px-4 py-5 bg-[#E7E9EB] rounded-md">
        <h2 className="text-2xl mb-4">CSS Example</h2>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 rounded-md">
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

      <div className="my-10 px-5">
        <h2 className="text-2xl font-semibold mb-2">Multi-column Properties</h2>
        <ul className="list-disc list-inside">
          <li><code>column-count</code>: Specifies the number of columns.</li>
          <li><code>column-gap</code>: Specifies the gap between columns.</li>
          <li><code>column-rule</code>: Shorthand for style, width, and color of column line.</li>
          <li><code>column-width</code>: Specifies the width of each column.</li>
          <li><code>column-span</code>: Specifies how many columns an element should span.</li>
        </ul>
      </div>

      <hr className="text-gray-400 my-8" />

      {/* References */}
      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">
          Continue learning CSS with these related topics:
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

        {/* Navigation */}
        <div className="flex justify-between">
          <div className="flex mt-6 px-3 cursor-pointer py-2 text-md font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Previous
          </div>
          <div className="flex mt-6 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            Next
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssMultipleColumns;
