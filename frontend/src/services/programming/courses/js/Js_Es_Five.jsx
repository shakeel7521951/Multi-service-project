import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Es_Five = () => {
  const references = [
    "Strict Mode",
    "String Access",
    "Array Methods",
    "JSON Handling",
    "Date Methods",
    "Object Methods",
    "Property Getters/Setters",
    "Function Binding",
    "Trailing Commas",
    "Browser Support"
  ];

  const jsExample = `"use strict";

// Array methods
var numbers = [45, 4, 9, 16, 25];
var doubled = numbers.map(function(value) {
  return value * 2;
});

// JSON handling
var jsonStr = '{"name":"John", "age":30}';
var obj = JSON.parse(jsonStr);
var str = JSON.stringify(obj);

// Object creation
var person = Object.create(null);
Object.defineProperty(person, "name", {
  value: "John",
  writable: true
});`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript ES5 (2009) Fundamentals</h1>
          <p className="text-gray-600 text-lg">
            Master the important features introduced in ECMAScript 5, the first major revision to JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">What is ES5?</h2>
          <p className="text-gray-800 mb-3">
            ECMAScript 5 (ES5) was the first major revision to JavaScript, standardized in 2009. It introduced many features that are now fundamental to modern JavaScript development.
          </p>
          <p className="text-gray-800 mb-3">
            ES5 brought strict mode, new array methods, JSON support, object property management, and many other improvements that made JavaScript more powerful and reliable.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding ES5 is crucial as it forms the foundation that later versions (ES6+) build upon.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key ES5 Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">Strict Mode</h3>
              <p className="text-gray-700">
                "use strict" enables stricter parsing and error handling in JavaScript, helping catch common coding mistakes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">Array Methods</h3>
              <p className="text-gray-700">
                New methods like forEach(), map(), filter(), reduce() made array manipulation much easier.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">JSON Support</h3>
              <p className="text-gray-700">
                Native JSON.parse() and JSON.stringify() methods for working with JSON data.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">Object Methods</h3>
              <p className="text-gray-700">
                Object.create(), Object.defineProperty(), and other methods for better object control.
              </p>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            ES5 Code Example
          </h2>
          <p className="text-gray-700 mb-4">
            Try out this ES5 code example to see some of the new features in action.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            ES5 is fully supported in all modern browsers since 2013:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Browser</th>
                  <th className="py-2 px-4 border-b">Version</th>
                  <th className="py-2 px-4 border-b">Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Chrome</td>
                  <td className="py-2 px-4 border-b">23</td>
                  <td className="py-2 px-4 border-b">Sep 2012</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IE/Edge</td>
                  <td className="py-2 px-4 border-b">10</td>
                  <td className="py-2 px-4 border-b">Sep 2012</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Firefox</td>
                  <td className="py-2 px-4 border-b">21</td>
                  <td className="py-2 px-4 border-b">Apr 2013</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Safari</td>
                  <td className="py-2 px-4 border-b">6</td>
                  <td className="py-2 px-4 border-b">Jul 2012</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Opera</td>
                  <td className="py-2 px-4 border-b">15</td>
                  <td className="py-2 px-4 border-b">Jul 2013</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ES5 References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">ES5 References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive ES5 references to find details about all the new features, methods, and syntax introduced in ECMAScript 5.
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


export default Js_Es_Five;
