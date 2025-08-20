import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Expression_Methods = () => {
  const regexMethods = [
    { name: "compile()", description: "Compiles a regular expression (Deprecated)" },
    { name: "constructor", description: "Returns the function that created the RegExp prototype" },
    { name: "dotAll", description: "Returns true if the s modifier is set in the expression (new in 2018)" },
    { name: "escape()", description: "Returns a string where characters that belongs to the regular expression syntax are escaped" },
    { name: "exec()", description: "Returns a result array for a matches in a string" },
    { name: "flags", description: "Returns the modifiers set in the expression (new in 2015)" },
    { name: "global", description: "Returns true if the g modifier is set in the expression" },
    { name: "hasIndices", description: "Returns true if the d modifier is set in the expression (new in 2022)" },
    { name: "ignoreCase", description: "Returns true if the i modifier is set in the expression" },
    { name: "lastIndex", description: "Specifies the index at which to start the next match" },
    { name: "multiline", description: "Returns true if the m modifier is set" },
    { name: "source", description: "Returns the text of the RegExp pattern" },
    { name: "sticky", description: "Returns true if the y modifier is set" },
    { name: "test()", description: "Tests for a match in a string. Returns true or false" },
    { name: "toString()", description: "Returns the string value of the regular expression" },
    { name: "unicode", description: "Returns true if the u modifier is set in the expression (new in 2018)" },
    { name: "unicodeSets", description: "Returns true if the v modifier is set in the expression (new in 2023)" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">Regular Expression Methods</h1>
          <p className="text-gray-600 text-lg">
            Complete RegExp Reference - Revised July 2025
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Intro Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Master RegExp in JavaScript</h2>
          <p className="text-gray-800">
            Regular Expressions allow powerful pattern matching and string processing. Below is a reference of the built-in RegExp methods and properties available in JavaScript.
          </p>
        </section>

        {/* Method Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Available Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-sm">Name</th>
                  <th className="text-left px-6 py-3 font-semibold text-sm">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {regexMethods.map((method, idx) => (
                  <tr
                    key={idx}
                    className={`border-b hover:bg-[#f1f5f9] ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="px-6 py-4 font-mono text-sm">{method.name}</td>
                    <td className="px-6 py-4">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Expression_Methods;
