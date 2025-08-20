import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Destructuring = () => {
  const destructuringExample = `// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;`;

  const references = [
    "Object Destructuring",
    "Array Destructuring",
    "String Destructuring",
    "Default Values",
    "Aliasing",
    "Rest Properties",
    "Map Destructuring",
    "Swapping Variables",
    "Browser Support",
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(destructuringExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Destructuring</h1>
          <p className="text-gray-600 text-lg">
            Simplify variable assignments with destructuring in JavaScript — from objects, arrays, and beyond.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Destructuring Assignment Syntax</h2>
          <p className="text-gray-800 mb-4">
            Destructuring makes it easy to extract values from arrays or properties from objects into distinct variables.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{destructuringExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </section>

        {/* Destructuring Details */}
        <section className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Object Destructuring</h3>
            <p className="text-gray-700 mb-2">You can extract specific properties from objects into variables.</p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let {firstName, lastName} = person;`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Default Values</h3>
            <p className="text-gray-700 mb-2">You can assign default values for missing object properties.</p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`let {country = "US"} = person;`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Aliasing Properties</h3>
            <p className="text-gray-700 mb-2">Rename a property while destructuring:</p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`let {lastName: name} = person;`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">String & Array Destructuring</h3>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-2">
              <code>{`let name = "W3Schools";
let [a1, a2, a3] = name;`}</code>
            </pre>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`const fruits = ["Bananas", "Oranges", "Apples"];
let [fruit1, , fruit3] = fruits;`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">The Rest Property</h3>
            <p className="text-gray-700 mb-2">Capture the remaining values in an array:</p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`const numbers = [10, 20, 30, 40];
const [a, b, ...rest] = numbers;`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Destructuring Maps</h3>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`const fruits = new Map([
  ["apples", 500],
  ["bananas", 300]
]);

for (const [key, value] of fruits) {
  console.log(key + ": " + value);
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Swapping Variables</h3>
            <p className="text-gray-700 mb-2">A clever trick using array destructuring:</p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`let firstName = "John", lastName = "Doe";
[firstName, lastName] = [lastName, firstName];`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Browser Support</h3>
            <p className="text-gray-700">
              Destructuring is fully supported in all modern browsers since ES6 (2015):
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Chrome 51 (May 2016)</li>
              <li>Edge 15 (Apr 2017)</li>
              <li>Firefox 54 (Jun 2017)</li>
              <li>Safari 10 (Sep 2016)</li>
              <li>Opera 38 (Jun 2016)</li>
            </ul>
          </div>
        </section>

        {/* Reference Buttons */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Destructuring References</h2>
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

export default Destructuring;
