import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Iterables = () => {
  const references = [
    "String Iteration",
    "Array Iteration",
    "Set Iteration",
    "Map Iteration",
    "Iterator Protocol",
    "next() Method",
    "Symbol.iterator",
    "Custom Iterables",
    "Typed Arrays",
    "Iterator Helpers"
  ];

  const codeExamples = [
    {
      title: "Iterating Over a String",
      code: `const name = "W3Schools";

for (const x of name) {
  console.log(x);
}`
    },
    {
      title: "Iterating Over an Array",
      code: `const letters = ["a","b","c"];

for (const x of letters) {
  console.log(x);
}`
    },
    {
      title: "Iterating Over a Set",
      code: `const letters = new Set(["a","b","c"]);

for (const x of letters) {
  console.log(x);
}`
    },
    {
      title: "Iterating Over a Map",
      code: `const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  console.log(x);
}`
    },
    {
      title: "Home Made Iterable",
      code: `function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30`
    },
    {
      title: "Custom Iterable Object",
      code: `myNumbers = {};

myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

for (const num of myNumbers) {
  console.log(num);
}`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(codeExamples[index].code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Iterables</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with iterable objects and the iterator protocol in JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">Understanding JavaScript Iterables</h2>
          <p className="text-gray-800 mb-3">
            An <strong>Iterable</strong> is an object that can be iterated over with <code>for..of</code> loops.
          </p>
          <p className="text-gray-800 mb-3">
            The <strong>iterator protocol</strong> defines how to produce a sequence of values from an object.
            An object becomes an iterator when it implements a <code>next()</code> method.
          </p>
          <p className="text-gray-800 mb-6">
            In JavaScript, strings, arrays, sets, and maps are all iterables because their prototype objects
            have a <code>Symbol.iterator</code> method.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The For..Of Loop Syntax</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`for (variable of iterable) {
  // code block to be executed
}`}</code>
            </pre>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Iteration Examples</h2>
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-yellow-800">Important Notes</h3>
          <ul className="space-y-2 text-yellow-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Technically, iterables must implement the <code>Symbol.iterator</code> method.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Home made iterables do not automatically support the JavaScript <code>for..of</code> statement.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>The <code>Symbol.iterator</code> method is called automatically by <code>for..of</code>.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Iterators provide a controlled way to work with data sequences, enabling custom iteration logic.</span>
            </li>
          </ul>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Iterables References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for JavaScript iterables and iterators.
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

export default Iterables;
