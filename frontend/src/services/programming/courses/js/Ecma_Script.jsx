import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Ecma_Script = () => {
  const features = [
    "Object.groupBy()",
    "Map.groupBy()",
    "String isWellFormed()",
    "String toWellFormed()",
    "Promise.withResolvers()",
    "Atomics.waitAsync",
    "Temporal API",
    "Records & Tuples",
    "Pattern Matching",
    "Decorators",
    "Top-level await",
    "Error Cause",
    "Array findLast()",
    "Array findLastIndex()",
    "Hashbang Grammar"
  ];

  const objectGroupByExample = `// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);`;

  const mapGroupByExample = `// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);`;

  const stringExamples = `// isWellFormed() example
let text1 = "Hello world!";
let result1 = text1.isWellFormed(); // true

let text2 = "Hello World \\uD800";
let result2 = text2.isWellFormed(); // false

// toWellFormed() example
let text3 = "Hello World \\uD800";
let result3 = text3.toWellFormed(); // "Hello World �"`;

  const [activeTab, setActiveTab] = useState("object");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const renderExample = () => {
    switch (activeTab) {
      case "object":
        return objectGroupByExample;
      case "map":
        return mapGroupByExample;
      case "string":
        return stringExamples;
      default:
        return objectGroupByExample;
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">ECMAScript 2024</h1>
          <p className="text-gray-600 text-lg">
            Explore the latest JavaScript features and enhancements in the 2024 update.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Warning Section */}
        <section className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Browser Compatibility Notice</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  These features are relatively new. Older browsers may need alternative code (polyfills).
                  Always check compatibility before using in production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Tabs */}
        <section>
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("object")}
              className={`py-2 px-4 font-medium text-sm ${activeTab === "object" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-500 hover:text-gray-700"}`}
            >
              Object.groupBy()
            </button>
            <button
              onClick={() => setActiveTab("map")}
              className={`py-2 px-4 font-medium text-sm ${activeTab === "map" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-500 hover:text-gray-700"}`}
            >
              Map.groupBy()
            </button>
            <button
              onClick={() => setActiveTab("string")}
              className={`py-2 px-4 font-medium text-sm ${activeTab === "string" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-500 hover:text-gray-700"}`}
            >
              String Methods
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-b-xl rounded-tr-xl">
            <h3 className="font-bold mb-3">
              {activeTab === "object" && "Object.groupBy() Example"}
              {activeTab === "map" && "Map.groupBy() Example"}
              {activeTab === "string" && "String.isWellFormed() & toWellFormed() Examples"}
            </h3>
            
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{renderExample()}</code>
              </pre>
              <button
                onClick={() => handleCopy(renderExample())}
                className="absolute top-2 right-2 p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700"
                title="Copy code"
              >
                <FaCopy />
              </button>
            </div>

            <div className="mt-4 p-4 bg-white rounded">
              <h4 className="font-semibold mb-2">Description:</h4>
              {activeTab === "object" && (
                <p className="text-gray-700">
                  The <code className="bg-gray-100 px-1 rounded">Object.groupBy()</code> method groups elements of an object according to string values returned from a callback function. The original object is not changed. Note that changes to elements will be reflected in both the original and returned objects.
                </p>
              )}
              {activeTab === "map" && (
                <p className="text-gray-700">
                  The <code className="bg-gray-100 px-1 rounded">Map.groupBy()</code> method groups elements of an object according to values returned from a callback function into a Map object. Like <code className="bg-gray-100 px-1 rounded">Object.groupBy()</code>, it doesn't change the original object but reflects changes in both.
                </p>
              )}
              {activeTab === "string" && (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <code className="bg-gray-100 px-1 rounded">isWellFormed()</code> returns <code className="bg-gray-100 px-1 rounded">true</code> if a string is well formed (contains no lone surrogates), otherwise <code className="bg-gray-100 px-1 rounded">false</code>.
                  </p>
                  <p className="text-gray-700">
                    <code className="bg-gray-100 px-1 rounded">toWellFormed()</code> returns a new string where all lone surrogates are replaced with the Unicode replacement character (U+FFFD).
                  </p>
                  <p className="text-gray-700">
                    <strong>Lone Surrogates:</strong> A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used in UTF-16 encoding.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        {activeTab !== "string" && (
          <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">
              {activeTab === "object" ? "Object.groupBy() vs Map.groupBy()" : "Map.groupBy() vs Object.groupBy()"}
            </h3>
            <p className="text-gray-800 mb-2">
              The main difference between <code className="bg-gray-100 px-1 rounded">Object.groupBy()</code> and <code className="bg-gray-100 px-1 rounded">Map.groupBy()</code> is:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li><code className="bg-gray-100 px-1 rounded">Object.groupBy()</code> groups elements into a plain JavaScript object with string keys</li>
              <li><code className="bg-gray-100 px-1 rounded">Map.groupBy()</code> groups elements into a Map object which can use any value as a key</li>
              <li>Map objects maintain insertion order of elements, while plain objects don't guarantee order</li>
              <li>Map objects are optimized for frequent additions and removals of key-value pairs</li>
            </ul>
          </section>
        )}

        {/* Feature References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">ECMAScript 2024 Features</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore all the new features and enhancements introduced in the latest JavaScript update:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {feature}
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

export default Ecma_Script;
