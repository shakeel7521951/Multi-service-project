import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const refArray = [
  { id: 1, name: "CSS Properties", link: "/cssProperties" },
  { id: 2, name: "CSS Browser Support", link: "/cssBrowserSupport" },
  { id: 3, name: "CSS Selectors", link: "/cssSelectors" },
  { id: 4, name: "CSS Combinators", link: "/cssCombinators" },
  { id: 5, name: "CSS Pseudo-classes", link: "/cssPseudoClasses" },
  { id: 6, name: "CSS Pseudo-elements", link: "/cssPseudoElements" },
  { id: 7, name: "CSS At-rules", link: "/cssAtRules" },
  { id: 8, name: "CSS Functions", link: "/cssFunctions" },
  { id: 9, name: "CSS Web Safe Fonts", link: "/cssWebSafeFonts" },
  { id: 10, name: "CSS Units", link: "/cssUnits" },
  { id: 11, name: "Px to Em Conversion", link: "/pxToEmConversion" },
  { id: 12, name: "CSS Colors", link: "/cssColors" },
  { id: 13, name: "CSS Animatable", link: "/cssAnimatable" },
  { id: 14, name: "CSS Default Values", link: "/cssDefaultValues" },
  { id: 15, name: "CSS Entities", link: "/cssEntities" },
];

const CssRefrences = () => {
  return (
    <div className="px-5  my-10">
      <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
      <p className="max-w-3xl pb-5">
        At W3Schools you will find complete CSS references of all properties and
        selectors with syntax, examples, browser support, and more.
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
      <div className="flex float-right mt-4 px-5 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
        Next
        <MdOutlineKeyboardArrowRight className="text-3xl" />
      </div>
    </div>
  );
};

export default CssRefrences;
