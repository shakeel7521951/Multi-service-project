import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Maps = () => {
  const [copied, setCopied] = useState({
    setExample1: false,
    setExample2: false,
    mapExample1: false,
    mapExample2: false
  });

  const setExamples = {
    setExample1: `// Create a Set
const letters = new Set();

// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");`,
    setExample2: `// Create a Set from an Array
const letters = new Set(["a","b","c"]);

// Check if value exists
letters.has("a"); // Returns true

// Get size of Set
letters.size; // Returns 3`
  };

  const mapExamples = {
    mapExample1: `// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);`,
    mapExample2: `// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// Get value
fruits.get("apples"); // Returns 500

// Check type
typeof fruits; // Returns "object"`
  };

  const handleCopy = (exampleKey) => {
    navigator.clipboard
      .writeText(setExamples[exampleKey] || mapExamples[exampleKey])
      .then(() => {
        setCopied({...copied, [exampleKey]: true});
        setTimeout(() => setCopied({...copied, [exampleKey]: false}), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const setMethods = [
    { method: "new Set()", description: "Creates a new set" },
    { method: "add()", description: "Adds a new element to a set" },
    { method: "clear()", description: "Removes all elements from a set" },
    { method: "delete()", description: "Removes an element from a set" },
    { method: "difference()", description: "Returns the difference between two sets" },
    { method: "entries()", description: "Returns an Iterator with the [value,value] pairs from a set" },
    { method: "forEach()", description: "Invokes a callback for each element in a set" },
    { method: "has()", description: "Returns true if a value exists" },
    { method: "intersection()", description: "Returns the intersection of two sets" },
    { method: "isDisjointFrom()", description: "Returns true if no elements in a set are elements in another set" },
    { method: "isSubsetOf()", description: "Returns true if a set is a subset of another set" },
    { method: "isSupersetOf()", description: "Returns true if a set is a superset of another set" },
    { method: "keys()", description: "Same as values()" },
    { method: "symmetricDifference()", description: "Returns the symmetric difference between two sets" },
    { method: "union()", description: "Returns the union of two sets" },
    { method: "values()", description: "Returns an Iterator with the values in a set" }
  ];

  const mapMethods = [
    { method: "new Map()", description: "Creates a new Map object" },
    { method: "set()", description: "Sets the value for a key in a Map" },
    { method: "get()", description: "Gets the value for a key in a Map" },
    { method: "delete()", description: "Removes a Map element specified by the key" },
    { method: "has()", description: "Returns true if a key exists in a Map" },
    { method: "clear()", description: "Removes all the elements from a Map" },
    { method: "forEach()", description: "Invokes a callback for each key/value pair in a Map" },
    { method: "entries()", description: "Returns an iterator object with the [key, value] pairs in a Map" },
    { method: "keys()", description: "Returns an iterator object with the keys in a Map" },
    { method: "values()", description: "Returns an iterator object of the values in a Map" }
  ];

  const browserSupport = [
    { browser: "Chrome 51", date: "May 2016" },
    { browser: "Edge 15", date: "Apr 2017" },
    { browser: "Firefox 54", date: "Jun 2017" },
    { browser: "Safari 10", date: "Sep 2016" },
    { browser: "Opera 38", date: "Jun 2016" }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Set & Map Reference</h1>
          <p className="text-gray-600 text-lg">
            Comprehensive guide to JavaScript Sets and Maps with examples and browser compatibility.
          </p>
          <p className="text-gray-500 text-sm mt-1">Revised July 2025</p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* JavaScript Sets Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Set Reference</h2>
          <p className="text-gray-800 mb-3">
            A Set is a collection of unique values. Each value can only occur once in a Set.
          </p>
          <p className="text-gray-800 mb-6">
            Sets are useful when you need to store distinct values and check for their existence efficiently.
          </p>
        </section>

        {/* Set Methods Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Method</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {setMethods.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b font-mono">{item.method}</td>
                    <td className="py-3 px-4 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Set Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Property</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Property</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-mono">size</td>
                  <td className="py-3 px-4 border-b">Returns the number of elements in a Set</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Set Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(setExamples).map((exampleKey, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">Example {index + 1}:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{setExamples[exampleKey]}</code>
                </pre>
                <button
                  onClick={() => handleCopy(exampleKey)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied[exampleKey] ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* JavaScript Maps Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow mt-12">
          <h2 className="text-3xl font-bold mb-4">JavaScript Map Reference</h2>
          <p className="text-gray-800 mb-3">
            A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.
          </p>
          <p className="text-gray-800 mb-6">
            Maps are similar to Objects but with some important differences that make them useful in specific situations.
          </p>
        </section>

        {/* Map Methods Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Map Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Method</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {mapMethods.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b font-mono">{item.method}</td>
                    <td className="py-3 px-4 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Map Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Map Property</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Property</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b font-mono">size</td>
                  <td className="py-3 px-4 border-b">Returns the number of elements in a Map</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Map Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Map Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(mapExamples).map((exampleKey, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">Example {index + 1}:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{mapExamples[exampleKey]}</code>
                </pre>
                <button
                  onClick={() => handleCopy(exampleKey)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied[exampleKey] ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Objects vs Maps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Objects vs Maps</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Object</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Map</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b">Not directly iterable</td>
                  <td className="py-3 px-4 border-b">Directly iterable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b">Do not have a size property</td>
                  <td className="py-3 px-4 border-b">Have a size property</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b">Keys must be Strings (or Symbols)</td>
                  <td className="py-3 px-4 border-b">Keys can be any datatype</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b">Keys are not well ordered</td>
                  <td className="py-3 px-4 border-b">Keys are ordered by insertion</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b">Have default keys</td>
                  <td className="py-3 px-4 border-b">Do not have default keys</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            Map is an ES6 feature (JavaScript 2015). ES6 is fully supported in all modern browsers since June 2017:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-semibold">Browser</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Version</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {browserSupport.map((browser, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b">{browser.browser.split(' ')[0]}</td>
                    <td className="py-3 px-4 border-b">{browser.browser.split(' ')[1]}</td>
                    <td className="py-3 px-4 border-b">{browser.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            Note: Map is not supported in Internet Explorer.
          </p>
        </section>

        {/* Complete Reference Link */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Complete JavaScript Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples, go to:
          </p>
          <a href="#" className="text-[#04AA6D] font-semibold hover:underline">
            W3Schools' Full JavaScript Reference
          </a>
          <p className="text-gray-800 mt-2">
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


export default Maps;
