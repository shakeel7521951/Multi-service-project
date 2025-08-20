import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Set_Reference = () => {
  const methods = [
    { name: "new Set()", description: "Creates a new set" },
    { name: "add()", description: "Adds a new element to a set" },
    { name: "clear()", description: "Removes all elements from a set" },
    { name: "delete()", description: "Removes an element from a set" },
    { name: "difference()", description: "Returns the difference between two sets" },
    { name: "entries()", description: "Returns an Iterator with the [value,value] pairs from a set" },
    { name: "forEach()", description: "Invokes a callback for each element in a set" },
    { name: "has()", description: "Returns true if a value exists" },
    { name: "intersection()", description: "Returns the intersection of two sets" },
    { name: "isDisjointFrom()", description: "Returns true if no elements in a set are elements in another set" },
    { name: "isSubsetOf()", description: "Returns true if a set is a subset of another set" },
    { name: "isSupersetOf()", description: "Returns true if a set is a superset of another set" },
    { name: "keys()", description: "Same as values()" },
    { name: "symmetricDifference()", description: "Returns the symmetric difference between two sets" },
    { name: "union()", description: "Returns the union of two sets" },
    { name: "values()", description: "Returns an Iterator with the values in a set" }
  ];

  const properties = [
    { name: "size", description: "Returns the number of elements in a Set" }
  ];

  const setExample = `// Create a Set
const letters = new Set();

// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Check if value exists
letters.has("a"); // true

// Get Set size
letters.size; // 3`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(setExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Set Reference</h1>
          <p className="text-gray-600 text-lg">
            Comprehensive guide to JavaScript Sets with detailed method references and examples.
          </p>
          <p className="text-gray-500 text-sm mt-2">Revised July 2025</p>
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Sets</h2>
          <p className="text-gray-800 mb-3">
            A Set is a collection of unique values. Each value can only occur once in a Set.
          </p>
          <p className="text-gray-800 mb-3">
            Set objects are collections of values where you can store unique values of any type.
          </p>
          <p className="text-gray-800 mb-6">
            This reference contains all Set methods and properties with detailed explanations.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Set Examples »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Method</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 font-mono text-sm">{method.name}</td>
                    <td className="py-3 px-4">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Property</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 font-mono text-sm">{property.name}</td>
                    <td className="py-3 px-4">{property.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Set Example
          </h2>
          <p className="text-gray-700 mb-4">
            Try out this basic Set example in your browser.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{setExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Full Reference Link */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Complete JavaScript Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples:
          </p>
          <a 
            href="https://www.w3schools.com/jsref/" 
            className="text-[#04AA6D] font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools' Full JavaScript Reference
          </a>
          <p className="text-gray-700 mt-3">
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

export default Set_Reference;
