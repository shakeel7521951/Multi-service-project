import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Typed_Array_Reference = () => {
  const typedArrayTypes = [
    { name: "Int8Array", range: "-128 / 127", type: "1 byte signed integer" },
    { name: "Uint8Array", range: "0 / 255", type: "1 byte unsigned integer" },
    { name: "Uint8ClampedArray", range: "0 / 255", type: "1 byte unsigned integer" },
    { name: "Int16Array", range: "-32768 / 32767", type: "2 bytes signed short" },
    { name: "Uint16Array", range: "0 / 65535", type: "2 bytes unsigned short" },
    { name: "Int32Array", range: "-2³¹ / 2³¹ - 1", type: "4 bytes signed long" },
    { name: "Uint32Array", range: "0 / 2³² - 1", type: "4 bytes unsigned long" },
    { name: "BigInt64Array", range: "-2⁶³ / 2⁶³ - 1", type: "8 bytes signed big integer" },
    { name: "BigUint64Array", range: "0 / 2⁶⁴ - 1", type: "8 bytes unsigned big integer" },
    { name: "Float16Array", range: "-65504 / 65504", type: "2 bytes floating point" },
    { name: "Float32Array", range: "-3.4e38 / 3.4e38", type: "4 bytes floating point" },
    { name: "Float64Array", range: "-1.8e308 / 1.8e308", type: "8 bytes floating point" }
  ];

  const typedArrayMethods = [
    { method: "at()", description: "Returns one indexed element from a typed array" },
    { method: "byteLength", description: "Returns the length (in bytes) of a typed array" },
    { method: "byteOffset", description: "Returns the offset (in bytes) of a typed array from the start of its ArrayBuffer" },
    { method: "BYTES_PER_ELEMENT", description: "Returns the number of bytes used to store one element in a typed array" },
    { method: "copyWithin()", description: "Copies array elements to another position in the array" },
    { method: "entries()", description: "Returns an iterator object with the key/value pairs from the array" },
    { method: "every()", description: "Executes a function for each typed array element" },
    { method: "fill()", description: "Fill all array elements with a value" },
    { method: "filter()", description: "Returns a new array filled with elements that pass a test" },
    { method: "find()", description: "Returns the first element that satisfies a condition" },
    { method: "findIndex()", description: "Returns the index of the first element that satisfies a condition" },
    { method: "findLast()", description: "Returns the last element that satisfies a condition" },
    { method: "findLastIndex()", description: "Returns the index of the last element that satisfies a condition" },
    { method: "forEach()", description: "Executes a function for each typed array element" },
    { method: "from()", description: "Returns a typed array from any object with a length property" },
    { method: "includes()", description: "Returns true if an array includes a specified value" },
    { method: "indexOf()", description: "Returns the first index (position) of a specified value" },
    { method: "join()", description: "Returns the elements of an array as a string" },
    { method: "keys()", description: "Returns the keys of a typed array" },
    { method: "lastIndexOf()", description: "Returns the last index (position) of a specified value" },
    { method: "length", description: "Returns the length of the typed array" },
    { method: "map()", description: "Returns a new array from calling a function for every array element" },
    { method: "name", description: "Returns the name of the typed array" },
    { method: "of()", description: "Returns a new typed array from an existing array" },
    { method: "reduce()", description: "Reduce the values of an array to a single value" },
    { method: "reduceRight()", description: "Reduce the values of an array to a single value (right-to-left)" },
    { method: "reverse()", description: "Reverses a typed array in place" },
    { method: "set()", description: "Stores values in a typed array from another array" },
    { method: "slice()", description: "Returns a new typed array sliced out of a typed array" },
    { method: "some()", description: "Returns true if one element satisfies a condition" },
    { method: "sort()", description: "Sorts an array in place" },
    { method: "subarray()", description: "Returns a subarray in the same memory space" },
    { method: "toLocaleString()", description: "Returns all elements converted with their toLocaleString methods" },
    { method: "toReversed()", description: "Reverses an array in place" },
    { method: "toSorted()", description: "Sorts an array in place" },
    { method: "toString()", description: "Returns a string of all typed array elements" },
    { method: "values()", description: "Returns an iterator object with the values of a typed array" },
    { method: "with()", description: "Returns a new typed array with an updated array element" }
  ];

  const browserSupport = [
    { browser: "Chrome 51", version: "May 2016" },
    { browser: "Edge 15", version: "Apr 2017" },
    { browser: "Firefox 54", version: "Jun 2017" },
    { browser: "Safari 10", version: "Sep 2016" },
    { browser: "Opera 38", version: "Jun 2016" }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">Typed Array Reference</h1>
          <p className="text-gray-600 text-lg">
            Comprehensive guide to JavaScript Typed Arrays, their types, methods, and browser support.
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
            They are designed to work with raw binary data efficiently, which makes them particularly useful for handling graphics, audio/video processing, and network protocols.
          </p>
          <p className="text-gray-800 mb-6">
            JavaScript typed arrays are divided into buffers and views. A buffer is an object representing a chunk of data, while a view provides a context to interpret that data.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Typed Array Types Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Typed Array Types</h2>
            <span className="text-gray-500 text-sm">Revised July 2025</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Name</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Range</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Type</th>
                </tr>
              </thead>
              <tbody>
                {typedArrayTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b font-mono">{type.name}</td>
                    <td className="py-3 px-4 border-b">{type.range}</td>
                    <td className="py-3 px-4 border-b">{type.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Typed Array Methods Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Typed Array Methods</h2>
            <span className="text-gray-500 text-sm">Revised July 2025</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Method</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {typedArrayMethods.map((method, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b font-mono">{method.method}</td>
                    <td className="py-3 px-4 border-b">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
            <p className="text-gray-800 mb-4">
              Typed Arrays is an ES6 feature (JavaScript 2015). ES6 is fully supported in all modern browsers since June 2017.
            </p>
            <p className="text-gray-800 font-semibold">
              Note: Typed Arrays is not supported in Internet Explorer.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Browser</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Version Supported Since</th>
                </tr>
              </thead>
              <tbody>
                {browserSupport.map((browser, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b">{browser.browser}</td>
                    <td className="py-3 px-4 border-b">{browser.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Typed_Array_Reference;
