import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Type_Conversion = () => {
  const references = [
    "Converting Strings to Numbers",
    "Converting Numbers to Strings",
    "Converting Dates to Numbers",
    "Converting Numbers to Dates",
    "Converting Booleans to Numbers",
    "Converting Numbers to Booleans",
  ];

  const jsExample = `let y = "5";      // y is a string
let x = +y;       // x is a number`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">
            JavaScript Type Conversion
          </h1>
          <p className="text-gray-600 text-lg">
            Understand how JavaScript handles type conversion and how you can
            convert data types manually and automatically.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Why Learn Type Conversion?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript is a loosely typed language, meaning variables can hold
            any data type. Understanding how type conversion works helps you
            avoid unexpected bugs and write cleaner code.
          </p>
          <p className="text-gray-800 mb-6">
            Conversion can happen explicitly using built-in functions or
            implicitly during operations. Let’s explore both.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Example: Unary + Operator
          </h2>
          <p className="text-gray-700 mb-4">
            The unary <code>+</code> operator can convert a string to a number.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* References Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Conversion Topics</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore different conversion techniques and built-in JavaScript
            methods to convert values between types.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Explanation Section */}
        <section className="bg-[#f9fafb] p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-bold">Quick Reference Table</h2>
          <p className="text-gray-700">
            Here’s how various types are converted in JavaScript:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border rounded">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 border">Original Value</th>
                  <th className="p-3 border">To Number</th>
                  <th className="p-3 border">To String</th>
                  <th className="p-3 border">To Boolean</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["false", "0", `"false"`, "false"],
                  ["true", "1", `"true"`, "true"],
                  ["0", "0", `"0"`, "false"],
                  ["1", "1", `"1"`, "true"],
                  [`""`, "0", `""`, "false"],
                  ['"twenty"', "NaN", `"twenty"`, "true"],
                  ["[]", "0", `""`, "true"],
                  ["[20]", "20", `"20"`, "true"],
                  ["[10,20]", "NaN", `"10,20"`, "true"],
                  ["{}", "NaN", `"[object Object]"`, "true"],
                  ["null", "0", `"null"`, "false"],
                  ["undefined", "NaN", `"undefined"`, "false"],
                ].map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    {row.map((cell, i) => (
                      <td key={i} className="p-3 border whitespace-nowrap">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Bottom */}
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


export default Type_Conversion;
