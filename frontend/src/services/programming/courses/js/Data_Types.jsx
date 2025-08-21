import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Data_Types = () => {
  const references = [
    "String Methods",
    "Number Methods",
    "Array Methods",
    "Object Methods",
    "Date Methods",
    "Math Object",
    "Type Conversion",
    "Bitwise Operations",
    "Regular Expressions",
    "Error Handling",
    "JSON Methods",
    "Set Objects",
    "Map Objects",
    "Typeof Reference",
    "ECMAScript Versions"
  ];

  const jsExample = `// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");`;

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
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Data Types
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Understand the building blocks of JavaScript with our comprehensive data types guide.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#FFF4A3] p-8 rounded-xl shadow-lg border-l-4 border-[#ffd966]">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">JavaScript Has 8 Data Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {["String", "Number", "Bigint", "Boolean", "Undefined", "Null", "Symbol", "Object"].map((type, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow text-center font-medium transition-transform hover:scale-105 cursor-default">
                {type}
              </div>
            ))}
          </div>
          <p className="text-gray-800 mb-3 leading-relaxed">
            JavaScript variables can hold different data types: numbers, strings, objects and more.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Understanding data types is crucial for proper variable manipulation and operations.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md">
            Learn More »
          </button>
        </section>

        {/* The Object Datatype Section */}
        <section className="bg-[#D9EEE1] p-7 rounded-xl shadow-md border-l-4 border-[#04AA6D]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">The Object Datatype</h2>
          <p className="text-gray-800 mb-5 leading-relaxed">
            The object data type can contain both built-in objects, and user defined objects:
          </p>
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-bold mb-3 text-gray-800">Built-in object types can be:</h3>
            <p className="text-gray-700">
              objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
            </p>
          </div>
        </section>

        {/* Code Editor Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            JavaScript Data Type Examples
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            See how different data types are declared and used in JavaScript.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <h3 className="font-bold mb-3 text-gray-800">Example:</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{jsExample}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Dynamic Types Section */}
        <section className="bg-[#F3ECEA] p-7 rounded-xl shadow-md border-l-4 border-[#c4a88a]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">JavaScript Types are Dynamic</h2>
          <p className="text-gray-800 mb-5 leading-relaxed">
            JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
          </p>
          <div className="bg-white p-5 rounded-xl font-mono text-sm shadow-sm">
            <p className="mb-2">let x;       // Now x is undefined</p>
            <p className="mb-2">x = 5;       // Now x is a Number</p>
            <p>x = "John";  // Now x is a String</p>
          </div>
        </section>

        {/* Type Conversion Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">The Concept of Data Types</h2>
          <p className="text-gray-800 mb-5 leading-relaxed">
            When adding a number and a string, JavaScript will treat the number as a string.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">JavaScript:</h3>
              <pre className="bg-white p-4 rounded-lg font-mono text-sm shadow-inner">
                let x = 16 + "Volvo";
              </pre>
              <h3 className="font-bold mt-4 mb-2 text-gray-800">Result:</h3>
              <div className="bg-white p-3 rounded-lg font-medium shadow-inner">
                "16Volvo"
              </div>
            </div>
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">JavaScript:</h3>
              <pre className="bg-white p-4 rounded-lg font-mono text-sm shadow-inner">
                let x = "Volvo" + 16 + 4;
              </pre>
              <h3 className="font-bold mt-4 mb-2 text-gray-800">Result:</h3>
              <div className="bg-white p-3 rounded-lg font-medium shadow-inner">
                "Volvo164"
              </div>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript References
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Explore our complete JavaScript references for methods, objects, and advanced concepts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data_Types;