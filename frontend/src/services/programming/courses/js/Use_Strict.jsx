import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Use_Strict = () => {
  const [copied, setCopied] = useState(false);

  const strictExample = `"use strict";
x = 3.14; // This will cause an error because x is not declared`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(strictExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const notAllowed = [
    "Undeclared variables",
    "Undeclared objects",
    "Deleting variables or functions",
    "Duplicate parameter names",
    "Octal literals and escape sequences",
    "Writing to read-only or getter-only properties",
    "Deleting undeletable properties",
    "Using 'eval' or 'arguments' as variables",
    "The 'with' statement",
    "Accessing variables declared in eval()",
    "Using undeclared variables (hoisting restrictions)",
    "Using future-reserved keywords as variable names",
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript: Use Strict</h1>
          <p className="text-gray-600 text-lg">
            Learn how to enforce stricter parsing and error handling in your
            JavaScript code with <code>"use strict"</code>.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            JavaScript Home
          </button>
        </div>

        {/* Introduction */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">The "use strict" Directive</h2>
          <p className="text-gray-800 mb-3">
            The <code>"use strict"</code> directive enables a strict mode of
            JavaScript, which helps catch common coding mistakes and unsafe actions.
          </p>
          <p className="text-gray-800 mb-3">
            Introduced in ECMAScript 5, it prevents the use of undeclared variables,
            forbids deletion of variables, and avoids silent errors in assignments.
          </p>
          <p className="text-gray-800 mb-6">
            All modern browsers support it—except Internet Explorer 9 and below.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Strict Mode »
          </button>
        </section>

        {/* Example Code Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Strict Mode Example
          </h2>
          <p className="text-gray-700 mb-4">
            Copy and try this example in your browser's developer console:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{strictExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Declaring Strict Mode */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How to Declare Strict Mode</h2>
          <div className="bg-[#f3f4f6] p-4 rounded-lg">
            <p>
              🔹 At the top of a script for global scope:
              <pre className="mt-2 bg-white p-3 rounded font-mono text-sm border-l-4 border-green-500">
{`"use strict";
x = 3.14; // Error: x is not declared`}
              </pre>
            </p>
            <p className="mt-4">
              🔹 Inside a function for local scope:
              <pre className="mt-2 bg-white p-3 rounded font-mono text-sm border-l-4 border-green-500">
{`function myFunc() {
  "use strict";
  y = 3.14; // Error: y is not declared
}`}
              </pre>
            </p>
          </div>
        </section>

        {/* Restrictions */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Not Allowed in Strict Mode</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Strict mode disallows certain actions that are normally allowed in
            JavaScript, helping catch errors early.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notAllowed.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 hover:bg-black hover:text-white text-gray-800 font-medium text-center px-4 py-3 rounded transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Final Notes */}
        <section className="mt-8 bg-[#FEF3C7] border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-900">
            ⚠️ Only place <code>"use strict";</code> at the beginning of scripts or
            functions. Placing it elsewhere will have no effect.
          </p>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next Topic
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Use_Strict;
