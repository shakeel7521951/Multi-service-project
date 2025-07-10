import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Array_Methods = () => {
  const categories = [
    "Basic Array Methods",
    "Array Search Methods",
    "Array Sort Methods",
    "Array Iteration Methods",
    "Array Reference"
  ];

  const basicMethods = [
    "Array length",
    "Array toString()",
    "Array at()",
    "Array join()",
    "Array pop()",
    "Array push()",
    "Array shift()",
    "Array unshift()",
    "Array delete()",
    "Array concat()",
    "Array copyWithin()",
    "Array flat()",
    "Array slice()",
    "Array splice()",
    "Array toSpliced()"
  ];

  const lengthExample = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;`;

  const toStringExample = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();`;

  const atExample = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);`;

  const [copied, setCopied] = useState("");
  const [activeMethod, setActiveMethod] = useState("Array length");

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

  const getExampleCode = (method) => {
    switch (method) {
      case "Array length":
        return lengthExample;
      case "Array toString()":
        return toStringExample;
      case "Array at()":
        return atExample;
      default:
        return `// Example for ${method} will be shown here`;
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript array manipulation with our comprehensive reference guide.
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
          <h2 className="text-3xl font-bold mb-4">Why Learn Array Methods?</h2>
          <p className="text-gray-800 mb-3">
            Arrays are fundamental to JavaScript programming. Mastering array methods will 
            dramatically improve your ability to manipulate and work with data.
          </p>
          <p className="text-gray-800 mb-3">
            Array methods provide powerful tools for adding, removing, searching, sorting, 
            and transforming data in arrays.
          </p>
          <p className="text-gray-800 mb-6">
            This reference covers all essential array methods with practical examples you 
            can try right in your browser.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Array Method Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                className="bg-gray-100 hover:bg-[#04AA6D] hover:text-white p-4 rounded-lg cursor-pointer transition"
              >
                <h3 className="font-bold text-center">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Methods List */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Array Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {basicMethods.map((method, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMethod(method)}
                className={`text-left p-3 rounded-lg transition ${activeMethod === method ? 'bg-[#04AA6D] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {/* Method Details */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">{activeMethod}</h2>
          <p className="text-gray-700 mb-4">
            {activeMethod === "Array length" && "The length property returns the length (size) of an array."}
            {activeMethod === "Array toString()" && "The toString() method returns the elements of an array as a comma separated string."}
            {activeMethod === "Array at()" && "The at() method returns an indexed element from an array. Introduced in ES2022."}
            {/* Add more descriptions for other methods */}
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{getExampleCode(activeMethod)}</code>
              <button
                onClick={() => handleCopy(getExampleCode(activeMethod), activeMethod)}
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded"
                title="Copy code"
              >
                {copied === activeMethod ? (
                  <span className="text-green-600">Copied!</span>
                ) : (
                  <FaCopy className="text-gray-600" />
                )}
              </button>
            </pre>
          </div>

          {activeMethod === "Array length" && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-bold mb-2">Note:</h4>
              <p>The length property can also be used to set the length of an array.</p>
              <pre className="bg-white p-3 mt-2 rounded font-mono text-sm">
                <code>fruits.length = 2; // Truncates the array</code>
              </pre>
            </div>
          )}

          {activeMethod === "Array at()" && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-bold mb-2">Browser Support:</h4>
              <p>The at() method is supported in all modern browsers since March 2022:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Chrome 92</li>
                <li>Edge 92</li>
                <li>Firefox 90</li>
                <li>Safari 15.4</li>
                <li>Opera 78</li>
              </ul>
            </div>
          )}
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

export default Array_Methods;
