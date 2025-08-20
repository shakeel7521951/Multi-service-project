import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Array_Search = () => {
  const references = [
    "Array Tutorial",
    "Array Basic Methods",
    "Array Sort Methods",
    "Array Iteration Methods",
    "Array Reference"
  ];

  const exampleIndexOf = `const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;`;

  const exampleLastIndexOf = `const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;`;

  const exampleIncludes = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true`;

  const exampleFind = `const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}`;

  const exampleFindIndex = `const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}`;

  const exampleFindLast = `const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);`;

  const exampleFindLastIndex = `const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);`;

  const [copied, setCopied] = useState("");

  const handleCopy = (code, method) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(method);
        setTimeout(() => setCopied(""), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Search</h1>
          <p className="text-gray-600 text-lg">
            Learn how to search for elements in JavaScript arrays using various methods.
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
          <h2 className="text-3xl font-bold mb-4">Array Search Methods</h2>
          <p className="text-gray-800 mb-3">
            JavaScript provides several methods to search through arrays. Each method has its own use case and behavior.
          </p>
          <p className="text-gray-800 mb-6">
            Below you'll find detailed explanations and examples of all array search methods.
          </p>
        </section>

        {/* Methods Sections */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Search Methods</h2>
          
          {/* indexOf */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array indexOf()</h3>
            <p className="text-gray-700 mb-3">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">indexOf()</code> method searches an array for an element value and returns its position.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Note:</strong> The first item has position 0, the second item has position 1, and so on.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleIndexOf}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleIndexOf, "indexOf")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "indexOf" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">Syntax</h4>
              <p className="font-mono mb-2">array.indexOf(item, start)</p>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold py-1">item</td>
                    <td className="py-1">Required. The item to search for.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-1">start</td>
                    <td className="py-1">Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3">
                <code className="bg-gray-200 px-1 py-0.5 rounded">Array.indexOf()</code> returns -1 if the item is not found.
              </p>
              <p>
                If the item is present more than once, it returns the position of the first occurrence.
              </p>
            </div>
          </div>

          {/* lastIndexOf */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array lastIndexOf()</h3>
            <p className="text-gray-700 mb-3">
              <code className="bg-gray-100 px-1 py-0.5 rounded">Array.lastIndexOf()</code> is the same as <code className="bg-gray-100 px-1 py-0.5 rounded">Array.indexOf()</code>, but returns the position of the last occurrence of the specified element.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleLastIndexOf}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleLastIndexOf, "lastIndexOf")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "lastIndexOf" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">Syntax</h4>
              <p className="font-mono mb-2">array.lastIndexOf(item, start)</p>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold py-1">item</td>
                    <td className="py-1">Required. The item to search for</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-1">start</td>
                    <td className="py-1">Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* includes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array includes()</h3>
            <p className="text-gray-700 mb-3">
              ECMAScript 2016 introduced <code className="bg-gray-100 px-1 py-0.5 rounded">Array.includes()</code> to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleIncludes}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleIncludes, "includes")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "includes" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">Syntax</h4>
              <p className="font-mono mb-2">array.includes(search-item)</p>
              <p className="mb-3">
                <code className="bg-gray-200 px-1 py-0.5 rounded">Array.includes()</code> allows to check for NaN values. Unlike <code className="bg-gray-200 px-1 py-0.5 rounded">Array.indexOf()</code>.
              </p>
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="mb-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">includes()</code> is an ECMAScript 2016 feature.
              </p>
              <p className="mb-2">
                ES 2016 is fully supported in all modern browsers since March 2017:
              </p>
              <table className="w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 text-left">Chrome 52</th>
                    <th className="p-2 text-left">Edge 15</th>
                    <th className="p-2 text-left">Firefox 52</th>
                    <th className="p-2 text-left">Safari 10.1</th>
                    <th className="p-2 text-left">Opera 39</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Jul 2016</td>
                    <td className="p-2">Apr 2017</td>
                    <td className="p-2">Mar 2017</td>
                    <td className="p-2">May 2017</td>
                    <td className="p-2">Aug 2016</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">includes()</code> is not supported in Internet Explorer.
              </p>
            </div>
          </div>

          {/* find */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array find()</h3>
            <p className="text-gray-700 mb-3">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">find()</code> method returns the value of the first array element that passes a test function.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleFind}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleFind, "find")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "find" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="mb-3">
                Note that the function takes 3 arguments:
              </p>
              <ul className="list-disc pl-5 mb-3">
                <li>The item value</li>
                <li>The item index</li>
                <li>The array itself</li>
              </ul>
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="mb-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">find()</code> is an ES6 feature (JavaScript 2015).
              </p>
              <p className="mb-2">
                ES6 is fully supported in all modern browsers since June 2017:
              </p>
              <table className="w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 text-left">Chrome 51</th>
                    <th className="p-2 text-left">Edge 15</th>
                    <th className="p-2 text-left">Firefox 54</th>
                    <th className="p-2 text-left">Safari 10</th>
                    <th className="p-2 text-left">Opera 38</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">May 2016</td>
                    <td className="p-2">Apr 2017</td>
                    <td className="p-2">Jun 2017</td>
                    <td className="p-2">Sep 2016</td>
                    <td className="p-2">Jun 2016</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">find()</code> is not supported in Internet Explorer.
              </p>
            </div>
          </div>

          {/* findIndex */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array findIndex()</h3>
            <p className="text-gray-700 mb-3">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">findIndex()</code> method returns the index of the first array element that passes a test function.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleFindIndex}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleFindIndex, "findIndex")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "findIndex" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="mb-3">
                Note that the function takes 3 arguments:
              </p>
              <ul className="list-disc pl-5 mb-3">
                <li>The item value</li>
                <li>The item index</li>
                <li>The array itself</li>
              </ul>
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="mb-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">findIndex()</code> is an ES6 feature (JavaScript 2015).
              </p>
              <p className="mb-2">
                ES6 is fully supported in all modern browsers since June 2017:
              </p>
              <table className="w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 text-left">Chrome 51</th>
                    <th className="p-2 text-left">Edge 15</th>
                    <th className="p-2 text-left">Firefox 54</th>
                    <th className="p-2 text-left">Safari 10</th>
                    <th className="p-2 text-left">Opera 38</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">May 2016</td>
                    <td className="p-2">Apr 2017</td>
                    <td className="p-2">Jun 2017</td>
                    <td className="p-2">Sep 2016</td>
                    <td className="p-2">Jun 2016</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">findIndex()</code> is not supported in Internet Explorer.
              </p>
            </div>
          </div>

          {/* findLast */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array findLast() Method</h3>
            <p className="text-gray-700 mb-3">
              ES2023 added the <code className="bg-gray-100 px-1 py-0.5 rounded">findLast()</code> method that will start from the end of an array and return the value of the first element that satisfies a condition.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleFindLast}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleFindLast, "findLast")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "findLast" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="mb-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">findLast()</code> is an ES2023 feature.
              </p>
              <p className="mb-2">
                JavaScript 2023 is supported in all modern browsers since July 2023:
              </p>
              <table className="w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 text-left">Chrome 110</th>
                    <th className="p-2 text-left">Edge 110</th>
                    <th className="p-2 text-left">Firefox 115</th>
                    <th className="p-2 text-left">Safari 16.4</th>
                    <th className="p-2 text-left">Opera 96</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Feb 2023</td>
                    <td className="p-2">Feb 2023</td>
                    <td className="p-2">Jul 2023</td>
                    <td className="p-2">Mar 2023</td>
                    <td className="p-2">May 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* findLastIndex */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Array findLastIndex() Method</h3>
            <p className="text-gray-700 mb-3">
              The <code className="bg-gray-100 px-1 py-0.5 rounded">findLastIndex()</code> method finds the index of the last element that satisfies a condition.
            </p>
            <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{exampleFindLastIndex}</code>
              </pre>
              <button
                onClick={() => handleCopy(exampleFindLastIndex, "findLastIndex")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "findLastIndex" ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">Browser Support</h4>
              <p className="mb-2">
                <code className="bg-gray-200 px-1 py-0.5 rounded">findLastIndex()</code> is an ES2023 feature.
              </p>
              <p className="mb-2">
                JavaScript 2023 is supported in all modern browsers since July 2023:
              </p>
              <table className="w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 text-left">Chrome 110</th>
                    <th className="p-2 text-left">Edge 110</th>
                    <th className="p-2 text-left">Firefox 115</th>
                    <th className="p-2 text-left">Safari 16.4</th>
                    <th className="p-2 text-left">Opera 96</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Feb 2023</td>
                    <td className="p-2">Feb 2023</td>
                    <td className="p-2">Jul 2023</td>
                    <td className="p-2">Mar 2023</td>
                    <td className="p-2">May 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* See Also Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">See Also:</h2>
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

export default Array_Search;
