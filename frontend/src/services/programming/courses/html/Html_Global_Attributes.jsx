import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Global_Attributes = () => {
  const attributes = [
    { name: "accesskey", desc: "Specifies a shortcut key to activate/focus an element" },
    { name: "class", desc: "Specifies one or more classnames for an element (refers to a class in a style sheet)" },
    { name: "contenteditable", desc: "Specifies whether the content of an element is editable or not" },
    { name: "data-*", desc: "Used to store custom data private to the page or application" },
    { name: "dir", desc: "Specifies the text direction for the content in an element" },
    { name: "draggable", desc: "Specifies whether an element is draggable or not" },
    { name: "enterkeyhint", desc: "Specifies the text of the enter-key on a virtual keyboard" },
    { name: "hidden", desc: "Specifies that an element is not yet, or is no longer, relevant" },
    { name: "id", desc: "Specifies a unique id for an element" },
    { name: "inert", desc: "Specifies that the browser should ignore this section" },
    { name: "inputmode", desc: "Specifies the mode of a virtual keyboard" },
    { name: "lang", desc: "Specifies the language of the element's content" },
    { name: "popover", desc: "Specifies a popover element" },
    { name: "spellcheck", desc: "Specifies whether the element is to have its spelling and grammar checked or not" },
    { name: "style", desc: "Specifies an inline CSS style for an element" },
    { name: "tabindex", desc: "Specifies the tabbing order of an element" },
    { name: "title", desc: "Specifies extra information about an element" },
    { name: "translate", desc: "Specifies whether the content of an element should be translated or not" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">HTML Global Attributes</h1>
         <div className="flex justify-between mb-10">
                          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                            <FaChevronLeft />
                            Previous
                          </button>
                        </div>
        <p className="text-gray-700 mb-8">
          Global attributes are standard attributes that can be used with all HTML elements.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-5 text-left font-semibold text-gray-700 border-b">Attribute</th>
                <th className="py-3 px-5 text-left font-semibold text-gray-700 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map((attr, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <td className="py-3 px-5 text-sm text-[#d63384] font-mono border-b">
                    &lt;{attr.name}&gt;
                  </td>
                  <td className="py-3 px-5 text-sm text-gray-800 border-b">
                    {attr.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

export default Html_Global_Attributes;
