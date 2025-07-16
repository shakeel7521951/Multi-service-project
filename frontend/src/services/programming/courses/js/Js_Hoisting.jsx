import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Hoisting = () => {
  const hoistingExamples = [
    {
      title: "Example 1 (Hoisted Declaration)",
      code: `x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x;

var x;`,
    },
    {
      title: "Example 2 (Normal Order)",
      code: `var x;
x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x;`,
    },
    {
      title: "Temporal Dead Zone - let",
      code: `carName = "Volvo";
let carName; // ReferenceError`,
    },
    {
      title: "Temporal Dead Zone - const",
      code: `carName = "Volvo";
const carName; // SyntaxError`,
    },
    {
      title: "Initialization Not Hoisted (Example 1)",
      code: `var x = 5;
var y = 7;

elem = document.getElementById("demo");
elem.innerHTML = x + " " + y;`,
    },
    {
      title: "Initialization Not Hoisted (Example 2)",
      code: `var x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x + " " + y;

var y = 7; // y is undefined`,
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      })
      .catch((err) => console.error("Copy failed:", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Hoisting</h1>
          <p className="text-gray-600 text-lg">
            Understand JavaScript's hoisting behavior and how it affects variable declarations and initializations.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            HTML Guide
          </button>
        </div>

        {/* Explanation Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is Hoisting?</h2>
          <p className="text-gray-800 mb-3">
            Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
          </p>
          <p className="text-gray-800 mb-3">
            This means you can use variables before declaring them when using <code>var</code>, but not with <code>let</code> or <code>const</code>.
          </p>
          <p className="text-gray-800 mb-3">
            However, **only declarations** are hoisted – **not initializations**.
          </p>
          <p className="text-gray-800">
            Understanding hoisting helps avoid common bugs and improves code predictability.
          </p>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
          <div className="space-y-8">
            {hoistingExamples.map((example, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(example.code, idx)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === idx ? "Copied!" : "Copy Text"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-[#FFF4E5] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Always declare variables at the top of their scope.</li>
            <li>Avoid using <code>var</code>; prefer <code>let</code> or <code>const</code>.</li>
            <li>Understand the "temporal dead zone" with <code>let</code> and <code>const</code>.</li>
            <li>Use `"use strict"` to catch undeclared variables.</li>
          </ul>
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


export default Js_Hoisting;
