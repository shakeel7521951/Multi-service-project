import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CssPXEMconvertor = () => {
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [pxValue, setPxValue] = useState(0);
  const [emValue, setEmValue] = useState(0);

  const pxToEm = (px) => (px / baseFontSize).toFixed(4);
  const emToPx = (em) => (em * baseFontSize).toFixed(2);

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
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">PX to EM Conversion</h1>
          <CiBookmark className="text-4xl text-green-400" />
        </div>
        <div className="flex px-3 cursor-pointer py-2 text-xl font-semibold rounded-lg text-white bg-[#03945F] items-center">
          <MdKeyboardArrowLeft className="text-3xl" />
          Home
        </div>
      </div>

      <div className="bg-[#D9EEE1] mt-6 px-6 py-10 rounded-md">
        <p className="pb-3">Set a base font size (usually 16px), then convert:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>Base Font Size (px):</label>
            <input
              type="number"
              value={baseFontSize}
              onChange={(e) => setBaseFontSize(Number(e.target.value))}
              className="block w-full mt-2 p-2 rounded border"
            />
          </div>
          <div>
            <label>PX to EM:</label>
            <input
              type="number"
              value={pxValue}
              onChange={(e) => setPxValue(Number(e.target.value))}
              className="block w-full mt-2 p-2 rounded border"
            />
            <p className="mt-2">Result: <strong>{pxToEm(pxValue)}em</strong></p>
          </div>
          <div>
            <label>EM to PX:</label>
            <input
              type="number"
              value={emValue}
              onChange={(e) => setEmValue(Number(e.target.value))}
              className="block w-full mt-2 p-2 rounded border"
            />
            <p className="mt-2">Result: <strong>{emToPx(emValue)}px</strong></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Common Conversion Table</h2>
        <table className="w-full text-left border mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">px</th>
              <th className="p-2 border">em</th>
              <th className="p-2 border">%</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, i) => {
              const px = i + 5;
              const em = (px / baseFontSize).toFixed(4);
              const percent = ((px / baseFontSize) * 100).toFixed(2);
              return (
                <tr key={px} className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 border">{px}px</td>
                  <td className="p-2 border">{em}em</td>
                  <td className="p-2 border">{percent}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <hr className="text-gray-400 my-6" />

      <div className="px-1 my-10">
        <h1 className="text-3xl font-semibold pb-4">CSS References</h1>
        <p className="max-w-3xl pb-5">Browse all the key CSS reference topics below:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {refArray.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="bg-[#F3F4F6] hover:bg-[#e5e7eb] transition-colors p-3 rounded-md font-semibold"
            >
              {item.name}
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

export default CssPXEMconvertor;
