import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const For_In = () => {
  const references = [
    "For Of Loop",
    "While Loop",
    "Do While Loop",
    "Array Methods",
    "Object Methods",
    "Map Function",
    "Filter Function",
    "Reduce Function",
    "Callback Functions",
    "Arrow Functions",
    "ES6 Features",
    "Array Destructuring",
    "Object Destructuring",
    "Spread Operator",
    "Rest Parameters"
  ];

  const forInExample = `const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}`;

  const arrayExample = `const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}`;

  const forEachExample = `const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}`;

  const [copied, setCopied] = useState({
    forIn: false,
    array: false,
    forEach: false
  });

  const handleCopy = (code, type) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript For In Loop</h1>
          <p className="text-gray-600 text-lg">
            Learn how to iterate through object properties and arrays with the JavaScript for...in statement.
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
          <h2 className="text-3xl font-bold mb-4">The For In Loop</h2>
          <p className="text-gray-800 mb-3">
            The JavaScript <code className="bg-gray-200 px-1 rounded">for...in</code> statement loops through the properties of an Object.
          </p>
          <p className="text-gray-800 mb-6">
            This loop is particularly useful when you need to enumerate all properties of an object, including inherited ones from the prototype chain.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try It Yourself »
          </button>
        </section>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`for (key in object) {\n  // code block to be executed\n}`}</code>
            </pre>
          </div>
        </section>

        {/* Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Example</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Object Iteration:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{forInExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(forInExample, 'forIn')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.forIn ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Example Explained</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>The <code className="bg-gray-200 px-1 rounded">for...in</code> loop iterates over a person object</li>
              <li>Each iteration returns a key (x)</li>
              <li>The key is used to access the value of the key</li>
              <li>The value of the key is <code className="bg-gray-200 px-1 rounded">person[x]</code></li>
            </ul>
          </div>
        </section>

        {/* For In Over Arrays */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">For In Over Arrays</h2>
          <p className="text-gray-700 mb-4">
            The JavaScript <code className="bg-gray-200 px-1 rounded">for...in</code> statement can also loop over the properties of an Array:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`for (variable in array) {\n  code\n}`}</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{arrayExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(arrayExample, 'array')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.array ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <h3 className="font-bold text-yellow-800 mb-2">Important Note:</h3>
            <p className="text-yellow-800">
              Do not use <code className="bg-yellow-200 px-1 rounded">for...in</code> over an Array if the index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect. It is better to use a <code className="bg-yellow-200 px-1 rounded">for</code> loop, a <code className="bg-yellow-200 px-1 rounded">for...of</code> loop, or <code className="bg-yellow-200 px-1 rounded">Array.forEach()</code> when the order is important.
            </p>
          </div>
        </section>

        {/* Array.forEach() Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Array.forEach()</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">forEach()</code> method calls a function (a callback function) once for each array element.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{forEachExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(forEachExample, 'forEach')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.forEach ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Notes:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>The function takes 3 arguments: the item value, the item index, and the array itself</li>
              <li>The example above uses only the value parameter</li>
              <li><code className="bg-gray-200 px-1 rounded">forEach()</code> is generally preferred over <code className="bg-gray-200 px-1 rounded">for...in</code> for array iteration</li>
            </ul>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more JavaScript concepts with our comprehensive references covering loops, functions, and array methods.
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

export default For_In;
