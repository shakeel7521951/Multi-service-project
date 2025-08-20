import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Array_Iterations = () => {
  const methods = [
    "Array forEach()",
    "Array map()",
    "Array flatMap()",
    "Array filter()",
    "Array reduce()",
    "Array reduceRight()",
    "Array every()",
    "Array some()",
    "Array from()",
    "Array keys()",
    "Array entries()",
    "Array with()",
    "Array Spread (...)",
    "Array Rest (...)"
  ];

  const relatedLinks = [
    "Array Tutorial",
    "Array Basic Methods",
    "Array Search Methods",
    "Array Sort Methods",
    "Array Reference"
  ];

  const forEachExample = `const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}`;

  const mapExample = `const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}`;

  const filterExample = `const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}`;

  const [activeTab, setActiveTab] = useState("forEach");
  const [copied, setCopied] = useState("");

  const handleCopy = (code, method) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(method);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const renderExample = () => {
    switch (activeTab) {
      case "forEach":
        return (
          <>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{forEachExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(forEachExample, "forEach")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === "forEach" ? "Copied!" : "Copy Text"}
            </button>
          </>
        );
      case "map":
        return (
          <>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{mapExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(mapExample, "map")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === "map" ? "Copied!" : "Copy Text"}
            </button>
          </>
        );
      case "filter":
        return (
          <>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{filterExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(filterExample, "filter")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === "filter" ? "Copied!" : "Copy Text"}
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Iterations</h1>
          <p className="text-gray-600 text-lg">
            Master array iteration methods to manipulate and transform arrays efficiently.
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
          <h2 className="text-3xl font-bold mb-4">Array Iteration Methods</h2>
          <p className="text-gray-800 mb-3">
            Array iteration methods operate on every array item, allowing you to perform operations, transformations, and tests on array elements.
          </p>
          <p className="text-gray-800 mb-6">
            These methods provide powerful ways to work with arrays without the need for traditional loops.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Array Iteration Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {methods.map((method, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(method.split(' ')[1].toLowerCase().replace('()', ''))}
                className={`cursor-pointer text-center font-medium py-3 px-4 rounded transition ${
                  activeTab === method.split(' ')[1].toLowerCase().replace('()', '')
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            {activeTab === "forEach" && "Array forEach()"}
            {activeTab === "map" && "Array map()"}
            {activeTab === "filter" && "Array filter()"}
          </h2>
          <p className="text-gray-700 mb-4">
            {activeTab === "forEach" && "The forEach() method calls a function (a callback function) once for each array element."}
            {activeTab === "map" && "The map() method creates a new array by performing a function on each array element."}
            {activeTab === "filter" && "The filter() method creates a new array with array elements that pass a test."}
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            {renderExample()}
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-xl font-semibold mb-4">See Also</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedLinks.map((link, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {link}
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

export default Array_Iterations;
