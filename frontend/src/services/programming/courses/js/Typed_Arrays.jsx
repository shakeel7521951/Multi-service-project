import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Typed_Arrays = () => {
  const references = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Browser Support",
    "Performance Benefits",
    "Use Cases"
  ];

  const codeExample = `const myArr = new Int8Array(10);`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const typedArrayTypes = [
    { name: "Int8Array", min: "-128", max: "127", bytes: "1", type: "byte" },
    { name: "Uint8Array", min: "0", max: "255", bytes: "1", type: "octet" },
    { name: "Uint8ClampedArray", min: "0", max: "255", bytes: "1", type: "octet" },
    { name: "Int16Array", min: "-32768", max: "32767", bytes: "2", type: "short" },
    { name: "Uint16Array", min: "0", max: "65535", bytes: "2", type: "unsigned short" },
    { name: "Int32Array", min: "-2147483648", max: "2147483647", bytes: "4", type: "long" },
    { name: "Uint32Array", min: "0", max: "4294967295", bytes: "4", type: "unsigned long" },
    { name: "BigInt64Array", min: "-2^63", max: "2^63 - 1", bytes: "8", type: "bigint" },
    { name: "BigUint64Array", min: "0", max: "2^64 - 1", bytes: "8", type: "unsigned bigint" },
    { name: "Float16Array", min: "-65504", max: "65504", bytes: "2", type: "unrestricted half" },
    { name: "Float32Array", min: "-3.4e38", max: "3.4e38", bytes: "4", type: "unrestricted float" },
    { name: "Float64Array", min: "-1.8e308", max: "1.8e308", bytes: "8", type: "unrestricted double" }
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Typed Arrays</h1>
          <p className="text-gray-600 text-lg">
            Efficiently handle binary data with JavaScript's Typed Arrays for high-performance applications.
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
            Typed Arrays were designed for handling raw binary data efficiently in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            Unlike standard arrays, typed arrays are array buffers of fixed length that store elements of specific numeric types.
          </p>
          <p className="text-gray-800 mb-6">
            They provide a way to work with binary data directly, enabling high-performance operations for graphics, file handling, and more.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Typed Array Example
          </h2>
          <p className="text-gray-700 mb-4">
            Create a typed array of 10 signed 8-bit integers:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Typed Array Benefits</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Efficient binary data handling compared to traditional arrays</li>
            <li>Direct memory access without data conversion</li>
            <li>Significantly faster for operations with raw binary data</li>
            <li>Essential for performance-critical applications</li>
          </ul>
        </section>

        {/* Use Cases Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">WebGL & Canvas</h3>
              <p>Fast graphics rendering and image processing</p>
            </div>
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">File APIs</h3>
              <p>Efficient reading and writing of local files</p>
            </div>
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Media APIs</h3>
              <p>High-performance handling of audio and video data</p>
            </div>
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">WebSockets</h3>
              <p>Binary data transfer over network connections</p>
            </div>
          </div>
        </section>

        {/* Differences Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Differences from Regular Arrays</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fixed Length:</strong> Cannot be dynamically resized with push() or pop()</li>
              <li><strong>Type Restriction:</strong> Elements must adhere to the specified data type</li>
              <li><strong>Underlying Buffer:</strong> Views into an ArrayBuffer for direct binary manipulation</li>
              <li><strong>Not Arrays:</strong> isArray() returns false, many array methods not supported</li>
            </ul>
          </div>
        </section>

        {/* Typed Array Types Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Typed Array Types</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Min</th>
                  <th className="py-2 px-4 text-left">Max</th>
                  <th className="py-2 px-4 text-left">Bytes</th>
                  <th className="py-2 px-4 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {typedArrayTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b">{type.name}</td>
                    <td className="py-2 px-4 border-b">{type.min}</td>
                    <td className="py-2 px-4 border-b">{type.max}</td>
                    <td className="py-2 px-4 border-b">{type.bytes}</td>
                    <td className="py-2 px-4 border-b">{type.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">More Examples</h2>
          <div className="space-y-4">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">16-bit Integers</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>const myArr = new Int16Array(10); // Signed 16-bit</code>
              </pre>
              <pre className="bg-white p-3 rounded overflow-x-auto mt-2">
                <code>const myArr = new Uint16Array(10); // Unsigned 16-bit</code>
              </pre>
            </div>
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">64-bit Integers</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>const myArr = new BigInt64Array(10); // Signed 64-bit</code>
              </pre>
              <pre className="bg-white p-3 rounded overflow-x-auto mt-2">
                <code>const myArr = new BigUint64Array(10); // Unsigned 64-bit</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            Typed Arrays were introduced in ECMAScript 2015 (ES6) and are supported in all modern browsers:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {browserSupport.map((browser, index) => (
              <div key={index} className="bg-[#E7E9EB] p-4 rounded-lg text-center">
                <div className="font-bold">{browser.browser}</div>
                <div>{browser.date}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">
            Note: Typed Arrays are not supported in Internet Explorer.
          </p>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Typed Array References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore detailed information about each typed array type and their specific use cases.
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

export default Typed_Arrays;
