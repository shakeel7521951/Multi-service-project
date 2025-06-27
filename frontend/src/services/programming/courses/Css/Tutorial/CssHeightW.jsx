import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssHeightW = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
p {
  color: red;
  text-align: center;
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
      {/* Hero Section */}
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">CSS Height, Width and Max-width</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      <div className="px-5  mt-5 py-10 rounded-md">
        <p className="pb-3">
          The CSS <span className="text-red-400">Height</span> and{" "}
          <span className="text-red-400">width</span> properties are used to set
          the height and width of an element.
        </p>
        <p className="mb-5">
          The CSS <span className="text-red-400">max-width</span> property is
          used to set the maximum width of an element.
        </p>
       <div>
         <h1 className="text-4xl">CSS Setting height and width</h1>
        <ul className="flex flex-col gap-3 my-5">
          <p className="pb-3">
          The CSS <span className="text-red-400">Height</span> and{" "}
          <span className="text-red-400">width</span> properties are used to set
          the height and width of an element.
        </p>
        <p>The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.</p>
          
        </ul>
       </div>
       <div>
         <h1 className="text-4xl">Setting max-width
 </h1>
        <ul className="flex flex-col gap-3 my-5">
          <p className="pb-3">
          The  <span className="text-red-400">max-width</span> and{" "}
         properties are used to set
          the height and width of an element.
        </p>
          <p className="pb-3">
          The  <span className="text-red-400">max-width</span> can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).
        </p>
        
          
        </ul>
       </div>
       
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

        {/* <!-- ========== Buttons  ========== --> */}
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
        {/* <!-- =========Buttons  ========== --> */}
      </div>
    </div>
  );
};

export default CssHeightW;
