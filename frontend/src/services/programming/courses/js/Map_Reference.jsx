import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Map_Reference = () => {
  const references = [
    "Map Constructor",
    "Map.get()",
    "Map.set()",
    "Map.size",
    "Map.delete()",
    "Map.clear()",
    "Map.has()",
    "Map.forEach()",
    "Map.entries()",
    "Map.keys()",
    "Map.values()",
    "Objects as Keys",
    "Map.groupBy()",
    "Browser Support",
    "Object.groupBy() vs Map.groupBy()"
  ];

  const mapExample = `// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Get a value
console.log(fruits.get("apples")); // 500

// Add/update a value
fruits.set("grapes", 400);

// Check size
console.log(fruits.size); // 4`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(mapExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Map Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript Map objects with comprehensive examples and references.
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
          <h2 className="text-3xl font-bold mb-4">Why Learn Map Methods?</h2>
          <p className="text-gray-800 mb-3">
            The Map object holds key-value pairs and remembers the original insertion order of the keys. 
            Any value (both objects and primitive values) may be used as either a key or a value.
          </p>
          <p className="text-gray-800 mb-3">
            Maps are frequently used in modern JavaScript development for data storage, 
            caching, and when you need keys that aren't strings.
          </p>
          <p className="text-gray-800 mb-6">
            Explore the complete set of Map methods with practical examples below.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Basic Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Basic Map Example
          </h2>
          <p className="text-gray-700 mb-4">
            Create and manipulate a Map with these fundamental methods.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{mapExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Methods Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Map Methods Explained</h2>
          
          {/* new Map() */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">The new Map() Method</h3>
            <p className="text-gray-700 mb-4">
              You can create a map by passing an array to the new Map() constructor:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-4">
              <code>{`// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);`}</code>
            </pre>
          </div>

          {/* get() */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Map.get()</h3>
            <p className="text-gray-700 mb-4">
              You get the value of a key in a map with the get() method:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-4">
              <code>fruits.get("apples"); // Returns 500</code>
            </pre>
          </div>

          {/* set() */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Map.set()</h3>
            <p className="text-gray-700 mb-4">
              You can add elements to a map with the set() method:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-2">
              <code>{`// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);`}</code>
            </pre>
            <p className="text-gray-700 mt-4">
              The set() method can also be used to change existing map values:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>fruits.set("apples", 600); // Updates apples to 600</code>
            </pre>
          </div>

          {/* Other methods would follow the same pattern */}
          {/* size */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Map.size</h3>
            <p className="text-gray-700 mb-4">
              The size property returns the number of elements in a map:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>fruits.size; // Returns 3</code>
            </pre>
          </div>

          {/* has() */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Map.has()</h3>
            <p className="text-gray-700 mb-4">
              The has() method returns true if a key exists in a map:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-2">
              <code>fruits.has("apples"); // Returns true</code>
            </pre>
            <p className="text-gray-700 mt-4">
              Try this combination:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm">
              <code>{`fruits.delete("apples");
fruits.has("apples"); // Now returns false`}</code>
            </pre>
          </div>

          {/* groupBy() */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Map.groupBy() (ES2024)</h3>
            <p className="text-gray-700 mb-4">
              The Map.groupBy() method groups elements of an object according to string values returned from a callback function:
            </p>
            <pre className="bg-[#E7E9EB] p-4 rounded font-mono text-sm mb-4">
              <code>{`// Create an Array
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
const result = Map.groupBy(fruits, myCallback);`}</code>
            </pre>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="text-gray-700 mb-2">
                Map.groupby() is an ES2024 feature. JavaScript 2024 is supported in new browsers since March 2024:
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Chrome 117 (Sep 2023)</li>
                <li>Edge 117 (Sep 2023)</li>
                <li>Firefox 119 (Oct 2023)</li>
                <li>Safari 17.4 (Oct 2024)</li>
                <li>Opera 103 (May 2023)</li>
              </ul>
              <p className="text-gray-700 mt-2 font-semibold">
                Warning: ES2024 features are relatively new. Older browsers may need an alternative code (Polyfill).
              </p>
            </div>
          </div>
        </section>

        {/* Map References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Map References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore all Map methods and features with our comprehensive reference guide.
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

export default Map_Reference;
