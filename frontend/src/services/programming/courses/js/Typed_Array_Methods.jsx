import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Typed_Array_Methods = () => {
  const references = [
    "Typed Array Overview",
    "ArrayBuffer",
    "DataView",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array",
    "Browser Compatibility"
  ];

  const examples = [
    {
      title: "The from() Method",
      description: "Creates a new typed array from any iterable object:",
      code: `// From a string
const myArr = Int16Array.from("1234567890");

// From an array
const myArr = Int16Array.from([1,2,3,4,5,6,7,8,9,0]);`
    },
    {
      title: "The of() Method",
      description: "Creates a new typed array from a number of arguments:",
      code: `const myArr = Int16Array.of(1,2,3,4,5,6,7,8,9,0);`
    },
    {
      title: "Common Array Methods",
      description: "Typed Arrays share many methods with Standard Arrays:",
      code: `// Iteration
myArr.forEach((x) => console.log(x));
const doubled = myArr.map((x) => x * 2);

// Searching
const hasValue = myArr.includes(5);
const index = myArr.indexOf(3);

// Manipulation
myArr.fill(200);
myArr.reverse();`
    }
  ];

  const browserSupport = [
    { browser: "Chrome 51", version: "May 2016", supported: "Yes" },
    { browser: "Edge 15", version: "Apr 2017", supported: "Yes" },
    { browser: "Firefox 54", version: "Jun 2017", supported: "Yes" },
    { browser: "Safari 10", version: "Sep 2016", supported: "Yes" },
    { browser: "Opera 38", version: "Jun 2016", supported: "Yes" },
    { browser: "Internet Explorer", version: "-", supported: "No" }
  ];

  const unavailableMethods = [
    { method: "pop()", array: "Yes", typedArray: "NO" },
    { method: "push()", array: "Yes", typedArray: "NO" },
    { method: "shift()", array: "Yes", typedArray: "NO" },
    { method: "unshift()", array: "Yes", typedArray: "NO" },
    { method: "splice()", array: "Yes", typedArray: "NO" },
    { method: "flat()", array: "Yes", typedArray: "NO" },
    { method: "flatMap()", array: "Yes", typedArray: "NO" },
    { method: "concat()", array: "Yes", typedArray: "NO" },
    { method: "toSpliced()", array: "Yes", typedArray: "NO" }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(examples[index].code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Typed Array Methods</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with binary data efficiently using JavaScript Typed Arrays.
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
          <h2 className="text-3xl font-bold mb-4">What are Typed Arrays?</h2>
          <p className="text-gray-800 mb-3">
            Typed Arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.
          </p>
          <p className="text-gray-800 mb-3">
            They are essential for working with complex data structures like audio, video, WebGL buffers, and more.
          </p>
          <p className="text-gray-800 mb-6">
            Unlike regular arrays, typed arrays have a fixed length and only store numbers of a specific type.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Explore Examples »
          </button>
        </section>

        {/* Code Examples Section */}
        <section className="space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{example.title}</h3>
              <p className="text-gray-700 mb-4">{example.description}</p>
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
        </section>

        {/* Unavailable Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Methods Not Available in Typed Arrays</h2>
          <p className="text-gray-700 mb-6">
            Due to their fixed-length nature, some array methods are not available for typed arrays:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Method</th>
                  <th className="py-2 px-4 border-b text-left">Array</th>
                  <th className="py-2 px-4 border-b text-left">Typed Array</th>
                </tr>
              </thead>
              <tbody>
                {unavailableMethods.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b">{item.method}</td>
                    <td className="py-2 px-4 border-b">{item.array}</td>
                    <td className="py-2 px-4 border-b text-red-600 font-medium">{item.typedArray}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-6">
            Typed Arrays are an ES6 feature (JavaScript 2015) and are supported in all modern browsers:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Browser</th>
                  <th className="py-2 px-4 border-b text-left">Version</th>
                  <th className="py-2 px-4 border-b text-left">Supported</th>
                </tr>
              </thead>
              <tbody>
                {browserSupport.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b">{item.browser}</td>
                    <td className="py-2 px-4 border-b">{item.version}</td>
                    <td className={`py-2 px-4 border-b font-medium ${item.supported === "Yes" ? "text-green-600" : "text-red-600"}`}>
                      {item.supported}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Typed Array References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for all typed array types and related concepts:
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


export default Typed_Array_Methods;
