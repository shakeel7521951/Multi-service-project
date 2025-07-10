import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Array_Reference = () => {
  const arrayMethods = [
    { name: "[]", description: "Creates a new Array" },
    { name: "new Array()", description: "Creates a new Array" },
    { name: "at()", description: "Returns an indexed element of an array" },
    { name: "concat()", description: "Joins arrays and returns an array with the joined arrays" },
    { name: "constructor", description: "Returns the function that created the Array prototype" },
    { name: "copyWithin()", description: "Copies array elements within the array, to and from specified positions" },
    { name: "entries()", description: "Returns a key/value pair Array Iteration Object" },
    { name: "every()", description: "Checks if every element in an array pass a test" },
    { name: "fill()", description: "Fill the elements in an array with a static value" },
    { name: "filter()", description: "Creates a new array with every element in an array that pass a test" },
    { name: "find()", description: "Returns the value of the first element in an array that pass a test" },
    { name: "findIndex()", description: "Returns the index of the first element in an array that pass a test" },
    { name: "findLast()", description: "Returns the value of the last element in an array that pass a test" },
    { name: "findLastIndex()", description: "Returns the index of the last element in an array that pass a test" },
    { name: "flat()", description: "Concatenates sub-array elements" },
    { name: "flatMap()", description: "Maps all array elements and creates a new flat array" },
    { name: "forEach()", description: "Calls a function for each array element" },
    { name: "from()", description: "Creates an array from an object" },
    { name: "includes()", description: "Check if an array contains the specified element" },
    { name: "indexOf()", description: "Search the array for an element and returns its position" },
    { name: "isArray()", description: "Checks whether an object is an array" },
    { name: "join()", description: "Joins all elements of an array into a string" },
    { name: "keys()", description: "Returns a Array Iteration Object, containing the keys of the original array" },
    { name: "lastIndexOf()", description: "Search the array for an element, starting at the end, and returns its position" },
    { name: "length", description: "Sets or returns the number of elements in an array" },
    { name: "map()", description: "Creates a new array with the result of calling a function for each array element" },
    { name: "of()", description: "Creates an array from a number of arguments" },
    { name: "pop()", description: "Removes the last element of an array, and returns that element" },
    { name: "prototype", description: "Allows you to add properties and methods to an Array object" },
    { name: "push()", description: "Adds new elements to the end of an array, and returns the new length" },
    { name: "reduce()", description: "Reduce the values of an array to a single value (going left-to-right)" },
    { name: "reduceRight()", description: "Reduce the values of an array to a single value (going right-to-left)" },
    { name: "reverse()", description: "Reverses the order of the elements in an array" },
    { name: "shift()", description: "Removes the first element of an array, and returns that element" },
    { name: "slice()", description: "Selects a part of an array, and returns the new array" },
    { name: "some()", description: "Checks if any of the elements in an array pass a test" },
    { name: "sort()", description: "Sorts the elements of an array" },
    { name: "splice()", description: "Adds or Removes array elements" },
    { name: "toReversed()", description: "Reverses the order of array elements (to a new array)" },
    { name: "toSorted()", description: "Sorts the elements of an array (to a new array)" },
    { name: "toSpliced()", description: "Adds or Removes array elements (to a new array)" },
    { name: "toString()", description: "Converts an array to a string, and returns the result" },
    { name: "unshift()", description: "Adds new elements to the beginning of an array, and returns the new length" },
    { name: "valueOf()", description: "Returns the primitive value of an array" },
    { name: "with()", description: "Returns a new array with updated elements" }
  ];

  const exampleCode = `// Array example
const fruits = ["Apple", "Banana", "Orange"];

// Using array methods
const newFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(newFruits); // ["APPLE", "BANANA", "ORANGE"]

// Filter example
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Banana", "Orange"]`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(exampleCode)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Reference</h1>
          <p className="text-gray-600 text-lg">
            Complete reference for all JavaScript Array methods and properties with examples.
          </p>
          <div className="text-sm text-gray-500 mt-1">Revised July 2025</div>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Complete Array Reference</h2>
          <p className="text-gray-800 mb-6">
            This reference contains all JavaScript Array properties and methods with detailed descriptions.
            Learn how to manipulate arrays efficiently with these built-in methods.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try It Yourself »
          </button>
        </section>

        {/* Methods Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Array Methods and Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Name</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {arrayMethods.map((method, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-mono text-[#04AA6D]">{method.name}</td>
                    <td className="py-3 px-4">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Array Examples</h2>
          <p className="text-gray-700 mb-4">
            See JavaScript arrays in action with these practical examples.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              <FaCopy /> {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Full Reference Link */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Complete JavaScript Reference</h2>
          <p className="text-gray-700 mb-4">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples:
          </p>
          <a 
            href="#" 
            className="text-[#04AA6D] hover:underline font-medium"
          >
            W3Schools' Full JavaScript Reference
          </a>
          <p className="text-gray-600 mt-2 text-sm">
            The reference includes all JavaScript updates from 1999 to 2025.
          </p>
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

export default Array_Reference;