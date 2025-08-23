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
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            JavaScript ES5 (2009) Fundamentals
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Master the important features introduced in ECMAScript 5, the first major
            revision to JavaScript.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg shadow hover:shadow-md hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What is ES5?</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            ECMAScript 5 (ES5) was the first major revision to JavaScript, standardized in 2009. It introduced many features that are now fundamental to modern JavaScript development.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            ES5 brought strict mode, new array methods, JSON support, object property management, and many other improvements that made JavaScript more powerful and reliable.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Understanding ES5 is crucial as it forms the foundation that later versions (ES6+) build upon.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Start Learning Now »
          </button>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key ES5 Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[ 
              {title: "Strict Mode", desc: '"use strict" enables stricter parsing and error handling in JavaScript, helping catch common coding mistakes.'},
              {title: "Array Methods", desc: "New methods like forEach(), map(), filter(), reduce() made array manipulation much easier."},
              {title: "JSON Support", desc: "Native JSON.parse() and JSON.stringify() methods for working with JSON data."},
              {title: "Object Methods", desc: "Object.create(), Object.defineProperty(), and other methods for better object control."}
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl shadow transition">
                <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">ES5 Code Example</h2>
          <p className="text-gray-700 mb-4">
            Try out this ES5 code example to see some of the new features in action.
          </p>
          <div className="bg-[#1e1e1e] text-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold mb-3 text-white">Example:</h3>
            <pre className="bg-[#2d2d2d] border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg shadow transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support */}
        <section className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 ">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            ES5 is fully supported in all modern browsers since 2013:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-center">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="py-2 px-4 border-b">Browser</th>
                  <th className="py-2 px-4 border-b">Version</th>
                  <th className="py-2 px-4 border-b">Release Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[ 
                  {browser: "Chrome", version: "23", date: "Sep 2012"},
                  {browser: "IE/Edge", version: "10", date: "Sep 2012"},
                  {browser: "Firefox", version: "21", date: "Apr 2013"},
                  {browser: "Safari", version: "6", date: "Jul 2012"},
                  {browser: "Opera", version: "15", date: "Jul 2013"}
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{row.browser}</td>
                    <td className="py-2 px-4 border-b">{row.version}</td>
                    <td className="py-2 px-4 border-b">{row.date}</td>
                  </tr>
                ))}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg shadow transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg shadow hover:shadow-md hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js_Es_Five;
