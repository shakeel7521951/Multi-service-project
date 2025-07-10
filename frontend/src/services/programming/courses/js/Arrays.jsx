import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrays = () => {
  const references = [
    "Array Methods",
    "Array Properties",
    "Array Sorting",
    "Array Iteration",
    "Array Search",
    "Array Const",
    "Array Destructuring",
    "Array Spread",
    "Array Reduce",
    "Array Map",
    "Array Filter",
    "Array Some/Every",
    "Array Find",
    "Array Includes",
    "Array From",
  ];

  const arrayExample = `const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // "Apple"
fruits.push("Mango"); // Adds "Mango" to the end
console.log(fruits.length); // 4`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(arrayExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Arrays</h1>
          <p className="text-gray-600 text-lg">
            Master the powerful array data structure in JavaScript with comprehensive examples and references.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Arrays</h2>
          <div className="bg-white p-4 rounded mb-4">
            <h3 className="font-bold mb-2">Example</h3>
            <pre className="bg-gray-100 p-2 rounded">
              <code>const cars = ["Saab", "Volvo", "BMW"];</code>
            </pre>
          </div>
          <p className="text-gray-800 mb-3">
            An Array is an object type designed for storing data collections.
          </p>
          <p className="text-gray-800 mb-6">
            <strong>Key characteristics of JavaScript arrays:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Elements:</strong> An array is a list of values, known as elements.</li>
              <li><strong>Ordered:</strong> Array elements are ordered based on their index.</li>
              <li><strong>Zero indexed:</strong> The first element is at index 0, the second at index 1, and so on.</li>
              <li><strong>Dynamic size:</strong> Arrays can grow or shrink as elements are added or removed.</li>
              <li><strong>Heterogeneous:</strong> Arrays can store elements of different data types.</li>
            </ul>
          </p>
        </section>

        {/* Why Use Arrays Section */}
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Why Use Arrays?</h2>
          <p className="text-gray-700 mb-4">
            If you have a list of items (a list of car names, for example), storing the names in single variables could look like this:
          </p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>
              {`let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";`}
            </code>
          </pre>
          <p className="text-gray-700">
            However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
          </p>
        </section>

        {/* Creating Arrays Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Creating an Array</h2>
          <p className="text-gray-700 mb-4">
            Using an array literal is the easiest way to create a JavaScript Array.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded">
              <code>const array_name = [item1, item2, ...];</code>
            </pre>
            <div className="bg-yellow-100 p-3 rounded mt-3">
              <p className="text-yellow-800 font-medium">Note</p>
              <p className="text-yellow-800">
                It is a common practice to declare arrays with the const keyword.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Example</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded">
                <code>{`const cars = ["Saab", "Volvo", "BMW"];`}</code>
              </pre>
              <p className="mt-3 text-gray-700">
                Spaces and line breaks are not important. A declaration can span multiple lines:
              </p>
            </div>

            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Multi-line Example</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded">
                <code>{`const cars = [
  "Saab",
  "Volvo",
  "BMW"
];`}</code>
              </pre>
              <p className="mt-3 text-gray-700">
                You can also create an empty array, and provide elements later.
              </p>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice with JavaScript Arrays
          </h2>
          <p className="text-gray-700 mb-4">
            Try out JavaScript array code examples directly in your browser.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{arrayExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Array References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Array References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our comprehensive JavaScript array references to find details about array methods, properties, and usage patterns.
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

export default Arrays;