import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Data Types</h1>
          <p className="text-gray-600 text-lg">
            Understand the building blocks of JavaScript with our comprehensive data types guide.
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
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Has 8 Data Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {["String", "Number", "Bigint", "Boolean", "Undefined", "Null", "Symbol", "Object"].map((type, idx) => (
              <div key={idx} className="bg-white p-3 rounded shadow text-center font-medium">
                {type}
              </div>
            ))}
          </div>
          <p className="text-gray-800 mb-3">
            JavaScript variables can hold different data types: numbers, strings, objects and more.
          </p>
          <p className="text-gray-800 mb-3">
            JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding data types is crucial for proper variable manipulation and operations.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* The Object Datatype Section */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">The Object Datatype</h2>
          <p className="text-gray-800 mb-4">
            The object data type can contain both built-in objects, and user defined objects:
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold mb-2">Built-in object types can be:</h3>
            <p className="text-gray-700">
              objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
            </p>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            JavaScript Data Type Examples
          </h2>
          <p className="text-gray-700 mb-4">
            See how different data types are declared and used in JavaScript.
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

        {/* Dynamic Types Section */}
        <section className="bg-[#F3ECEA] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">JavaScript Types are Dynamic</h2>
          <p className="text-gray-800 mb-4">
            JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
          </p>
          <div className="bg-white p-4 rounded-lg font-mono text-sm">
            <p>let x;       // Now x is undefined</p>
            <p>x = 5;       // Now x is a Number</p>
            <p>x = "John";  // Now x is a String</p>
          </div>
        </section>

        {/* Type Conversion Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3">The Concept of Data Types</h2>
          <p className="text-gray-800 mb-4">
            When adding a number and a string, JavaScript will treat the number as a string.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">JavaScript:</h3>
              <pre className="bg-white p-3 rounded font-mono text-sm">
                let x = 16 + "Volvo";
              </pre>
              <h3 className="font-bold mt-3 mb-2">Result:</h3>
              <p>"16Volvo"</p>
            </div>
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">JavaScript:</h3>
              <pre className="bg-white p-3 rounded font-mono text-sm">
                let x = "Volvo" + 16 + 4;
              </pre>
              <h3 className="font-bold mt-3 mb-2">Result:</h3>
              <p>"Volvo164"</p>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our complete JavaScript references for methods, objects, and advanced concepts.
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

export default Data_Types;