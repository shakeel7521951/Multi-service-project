import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  FaChrome,
  FaEdge,
  FaFirefoxBrowser,
  FaSafari,
  FaOpera,
} from "react-icons/fa";

const htmlSupportData = [
  { element: "a", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "abbr", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "acronym", chrome: "No", edge: "No", firefox: "No", safari: "No", opera: "No" },
  { element: "address", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "applet", chrome: "No", edge: "No", firefox: "No", safari: "No", opera: "No" },
  { element: "area", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "article", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "aside", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "audio", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "b", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "base", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "basefont", chrome: "No", edge: "No", firefox: "No", safari: "No", opera: "No" },
  { element: "bdi", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "bdo", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
  { element: "big", chrome: "No", edge: "No", firefox: "No", safari: "No", opera: "No" },
  { element: "blockquote", chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes", opera: "Yes" },
];

const getColor = (support) =>
  support === "Yes" ? "text-green-600 font-semibold" : "text-red-500 font-semibold";

const Html_Browser_Support = () => {
  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-start text-gray-800 mb-6">
        HTML Browser Support
      </h1>
<div className="flex justify-between mb-10">
                  <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                    <FaChevronLeft />
                    Previous
                  </button>
                </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4">Element</th>
              <th className="py-3 px-4"><div className="flex items-center gap-2"><FaChrome /> Chrome</div></th>
              <th className="py-3 px-4"><div className="flex items-center gap-2"><FaEdge /> Edge</div></th>
              <th className="py-3 px-4"><div className="flex items-center gap-2"><FaFirefoxBrowser /> Firefox</div></th>
              <th className="py-3 px-4"><div className="flex items-center gap-2"><FaSafari /> Safari</div></th>
              <th className="py-3 px-4"><div className="flex items-center gap-2"><FaOpera /> Opera</div></th>
            </tr>
          </thead>
          <tbody>
            {htmlSupportData.map((item, index) => (
              <tr key={index} className="border-t border-gray-300 hover:bg-gray-50">
                <td className="py-2 px-4 font-mono text-gray-700">{`<${item.element}>`}</td>
                <td className={`py-2 px-4 ${getColor(item.chrome)}`}>{item.chrome}</td>
                <td className={`py-2 px-4 ${getColor(item.edge)}`}>{item.edge}</td>
                <td className={`py-2 px-4 ${getColor(item.firefox)}`}>{item.firefox}</td>
                <td className={`py-2 px-4 ${getColor(item.safari)}`}>{item.safari}</td>
                <td className={`py-2 px-4 ${getColor(item.opera)}`}>{item.opera}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-10">
                        <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                          Next
                          <FaChevronRight />
                        </button>
                      </div>
      </div>
    </div>
  );
};

export default Html_Browser_Support;
