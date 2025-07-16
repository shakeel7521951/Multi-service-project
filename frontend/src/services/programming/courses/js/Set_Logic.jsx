import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Set_Logic = () => {
  const methods = [
    "union()",
    "difference()",
    "intersection()",
    "isDisjointFrom()",
    "isSubsetOf()",
    "isSupersetOf()",
    "symmetricDifference()"
  ];

  const browserSupport = [
    { name: "Chrome 122", supported: true, date: "Feb 2024" },
    { name: "Edge 122", supported: true, date: "Feb 2024" },
    { name: "Firefox 127", supported: true, date: "Jun 2024" },
    { name: "Safari 17", supported: true, date: "Sep 2023" },
    { name: "Opera 108", supported: true, date: "Mar 2024" }
  ];

  const examples = {
    union: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);`,
    intersection: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);`,
    difference: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.difference(B);`,
    symmetricDifference: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symmetricDifference(B);`,
    isSubsetOf: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSubsetOf(B);`,
    isSupersetOf: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSupersetOf(B);`,
    isDisjointFrom: `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);`
  };

  const [activeMethod, setActiveMethod] = useState("union");
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Set Logic</h1>
          <p className="text-gray-600 text-lg">
            Explore the powerful new Set methods introduced in JavaScript 2025 for advanced set operations.
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
          <h2 className="text-3xl font-bold mb-4">Logic Methods</h2>
          <p className="text-gray-800 mb-3">
            In JavaScript 2025, 7 new logical methods were added to the Set object:
          </p>
          <ul className="list-disc pl-5 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {methods.map((method, idx) => (
              <li key={idx} className="font-mono">{method}</li>
            ))}
          </ul>
          <p className="text-gray-800">
            The new Set methods are supported all modern browsers since June 2024:
          </p>
        </section>

        {/* Browser Support Section */}
        <section>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Browser</th>
                  <th className="py-2 px-4 border-b">Supported</th>
                  <th className="py-2 px-4 border-b">Since</th>
                </tr>
              </thead>
              <tbody>
                {browserSupport.map((browser, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b">{browser.name}</td>
                    <td className="py-2 px-4 border-b text-green-600 font-semibold">
                      {browser.supported ? "Yes" : "No"}
                    </td>
                    <td className="py-2 px-4 border-b">{browser.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Method Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Set Method Examples</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(examples).map((method) => (
              <button
                key={method}
                onClick={() => setActiveMethod(method)}
                className={`px-4 py-2 rounded font-medium ${activeMethod === method ? 'bg-[#04AA6D] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {method}()
              </button>
            ))}
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg capitalize">{activeMethod}() Method</h3>
              <button
                onClick={() => handleCopy(examples[activeMethod])}
                className="flex items-center gap-1 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-3 py-1 rounded transition text-sm"
              >
                {copied ? "Copied!" : <><FaCopy size={12} /> Copy</>}
              </button>
            </div>
            
            <p className="text-gray-700 mb-4">
              {activeMethod === "union" && "The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both."}
              {activeMethod === "intersection" && "The intersection() method returns a new set containing the elements which are in this set and in the argument set."}
              {activeMethod === "difference" && "The difference() method returns a new set containing elements which are in this set but not in the argument set."}
              {activeMethod === "symmetricDifference" && "The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both."}
              {activeMethod === "isSubsetOf" && "The isSubsetOf() method returns true if all elements in this set are also elements in the argument set."}
              {activeMethod === "isSupersetOf" && "The isSupersetOf() method returns true if all elements in the argument set are also in this set."}
              {activeMethod === "isDisjointFrom" && "The isDisjointFrom() method returns true if this set has no elements in common with the argument set."}
            </p>

            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples[activeMethod]}</code>
            </pre>
          </div>
        </section>

        {/* Complete Reference */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Complete Set Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete reference, go to our Complete JavaScript Set Reference.
          </p>
          <p className="text-gray-800">
            The reference contains descriptions and examples of all Set Properties and Methods.
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

export default Set_Logic;
