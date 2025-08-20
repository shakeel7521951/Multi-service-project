import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Map_Methods = () => {
  const methods = [
    "new Map()",
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

  const basicExample = `// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);`;

  const groupByExample = `// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Group by Quantity
const result = Map.groupBy(fruits, ({ quantity }) => {
  return quantity > 200 ? "ok" : "low";
});`;

  const [copiedBasic, setCopiedBasic] = useState(false);
  const [copiedGroupBy, setCopiedGroupBy] = useState(false);

  const handleCopyBasic = () => {
    navigator.clipboard
      .writeText(basicExample)
      .then(() => {
        setCopiedBasic(true);
        setTimeout(() => setCopiedBasic(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyGroupBy = () => {
    navigator.clipboard
      .writeText(groupByExample)
      .then(() => {
        setCopiedGroupBy(true);
        setTimeout(() => setCopiedGroupBy(false), 1500);
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
          <h2 className="text-3xl font-bold mb-4">What are JavaScript Maps?</h2>
          <p className="text-gray-800 mb-3">
            A Map holds key-value pairs where the keys can be any datatype. Maps remember the original insertion order of the keys.
          </p>
          <p className="text-gray-800 mb-3">
            Maps have methods for setting, getting, and deleting elements, along with powerful iteration capabilities.
          </p>
          <p className="text-gray-800 mb-6">
            With ES2024, Maps gained even more functionality with methods like Map.groupBy().
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Explore Examples »
          </button>
        </section>

        {/* Basic Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Creating a Map
          </h2>
          <p className="text-gray-700 mb-4">
            You can create a Map by passing an array to the new Map() constructor:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{basicExample}</code>
            </pre>
            <button
              onClick={handleCopyBasic}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedBasic ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Essential Map Methods</h2>
          <div className="space-y-6">
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Map.get()</h3>
              <p className="mb-3">Get the value of a key:</p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>fruits.get("apples"); // Returns 500</code>
              </pre>
            </div>

            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Map.set()</h3>
              <p className="mb-3">Add or update elements:</p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`fruits.set("apples", 500);\nfruits.set("bananas", 300);`}</code>
              </pre>
            </div>

            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Map.size</h3>
              <p className="mb-3">Get the number of elements:</p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>fruits.size; // Returns 3</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Advanced Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            ES2024 Map.groupBy()
          </h2>
          <p className="text-gray-700 mb-4">
            The Map.groupBy() method groups elements of an object according to values returned from a callback function.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{groupByExample}</code>
            </pre>
            <button
              onClick={handleCopyGroupBy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedGroupBy ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support Section */}
        <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-semibold mb-3">Browser Support</h2>
          <p className="mb-4">
            Map.groupBy() is an ES2024 feature supported in these browser versions:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <li className="bg-white p-3 rounded shadow">
              <div className="font-bold">Chrome 117</div>
              <div className="text-sm">Sep 2023</div>
            </li>
            <li className="bg-white p-3 rounded shadow">
              <div className="font-bold">Edge 117</div>
              <div className="text-sm">Sep 2023</div>
            </li>
            <li className="bg-white p-3 rounded shadow">
              <div className="font-bold">Firefox 119</div>
              <div className="text-sm">Oct 2023</div>
            </li>
            <li className="bg-white p-3 rounded shadow">
              <div className="font-bold">Safari 17.4</div>
              <div className="text-sm">Oct 2024</div>
            </li>
            <li className="bg-white p-3 rounded shadow">
              <div className="font-bold">Opera 103</div>
              <div className="text-sm">May 2023</div>
            </li>
          </ul>
          <p className="mt-4 text-yellow-800 font-medium">
            Note: Older browsers may need a polyfill for ES2024 features.
          </p>
        </section>

        {/* Map References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Map Method References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore all available Map methods with detailed explanations and usage examples.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {methods.map((method, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {method}
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


export default Map_Methods;
