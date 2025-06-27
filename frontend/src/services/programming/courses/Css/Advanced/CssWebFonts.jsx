import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssWebFonts = () => {
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
          <h1 className="text-4xl">CSS Web Fonts</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex justify-between">
          <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
            <MdKeyboardArrowLeft className="text-3xl" />
            Home
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mt-5 py-10 rounded-md">
        <p className="pb-4">
          Web fonts allow web designers to use fonts that are not installed on the user's computer.
        </p>
        <p className="pb-4">
          When you have found or purchased the font you want to use, just include the font file on your web server. It will automatically download to the user when needed.
        </p>
        <p className="pb-4">
          Your custom fonts are defined within the CSS <code>@font-face</code> rule.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">The CSS <code>@font-face</code> Rule</h2>
        <p className="pb-2">
          With <code>@font-face</code>, you don't need to use one of the "web-safe" fonts anymore. Instead, you can use any font you like by referencing its file.
        </p>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 my-4 rounded-md border border-gray-300">
{`@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2"),
       url("myfont.woff") format("woff");
}

body {
  font-family: "MyFont", sans-serif;
}`}
        </pre>
      </div>

      {/* Font Format Details */}
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Different Font Formats</h2>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">TrueType Fonts (TTF)</h3>
            <p className="mt-1">
              Developed in the late 1980s by Apple and Microsoft, TrueType is the most common font format for both Mac OS and Windows.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">OpenType Fonts (OTF)</h3>
            <p className="mt-1">
              Built on TrueType, OpenType is a scalable font format developed by Microsoft. It's widely used across modern platforms.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">Web Open Font Format (WOFF)</h3>
            <p className="mt-1">
              WOFF is a compressed format based on TrueType/OpenType with extra metadata. Developed in 2009, it's a W3C recommendation.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">Web Open Font Format (WOFF 2.0)</h3>
            <p className="mt-1">
              WOFF 2.0 improves compression over WOFF 1.0 while retaining compatibility with web use.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">SVG Fonts / Shapes</h3>
            <p className="mt-1">
              SVG fonts allow the use of SVG graphics as glyphs. The <code>@font-face</code> rule can be applied to SVG documents as well.
            </p>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-semibold">Embedded OpenType Fonts (EOT)</h3>
            <p className="mt-1">
              EOT is a compact format developed by Microsoft for embedding fonts in web pages, especially for Internet Explorer.
            </p>
          </div>
        </div>
      </div>

      <hr className="text-gray-400 my-6" />

      {/* Reference Section */}
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

export default CssWebFonts;
