import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Array_Sort = () => {
  const references = [
    "Array Tutorial",
    "Array Basic Methods",
    "Array Search Methods",
    "Array Iteration Methods",
    "Array Reference"
  ];

  const examples = {
    sort: `const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();`,
    reverse: `const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();`,
    sortReverse: `const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();`,
    toSorted: `const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();`,
    toReversed: `const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();`,
    numericSort: `const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});`,
    numericDesc: `const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});`,
    randomSort: `const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});`,
    fisherYates: `const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}`,
    mathMin: `function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}`,
    mathMax: `function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}`,
    homemadeMin: `function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}`,
    homemadeMax: `function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}`,
    objectSort: `const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});`,
    stringSort: `cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});`
  };

  const [copiedExample, setCopiedExample] = useState(null);

  const handleCopy = (exampleKey) => {
    navigator.clipboard
      .writeText(examples[exampleKey])
      .then(() => {
        setCopiedExample(exampleKey);
        setTimeout(() => setCopiedExample(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Sort</h1>
          <p className="text-gray-600 text-lg">
            Master array sorting techniques in JavaScript with comprehensive examples and references.
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
          <h2 className="text-3xl font-bold mb-4">Array Sorting in JavaScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript provides powerful methods to sort and manipulate arrays. Understanding these methods is crucial for efficient data handling.
          </p>
          <p className="text-gray-800 mb-6">
            Below you'll find all the essential array sorting methods with practical examples you can try and copy.
          </p>
        </section>

        {/* Sorting Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sorting Methods</h2>
          
          <div className="space-y-8">
            {/* Alphabetic Sort */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Alphabetic Sort</h3>
              <p className="text-gray-700 mb-4">
                The <code className="bg-gray-200 px-1 rounded">sort()</code> method sorts an array alphabetically:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.sort}</code>
              </pre>
              <button
                onClick={() => handleCopy('sort')}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedExample === 'sort' ? "Copied!" : "Copy Example"}
              </button>
            </div>

            {/* Reverse */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Reversing an Array</h3>
              <p className="text-gray-700 mb-4">
                The <code className="bg-gray-200 px-1 rounded">reverse()</code> method reverses the elements in an array:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.reverse}</code>
              </pre>
              <button
                onClick={() => handleCopy('reverse')}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedExample === 'reverse' ? "Copied!" : "Copy Example"}
              </button>
            </div>

            {/* Numeric Sort */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Numeric Sort</h3>
              <p className="text-gray-700 mb-4">
                For numeric sorting, provide a compare function:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.numericSort}</code>
              </pre>
              <button
                onClick={() => handleCopy('numericSort')}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedExample === 'numericSort' ? "Copied!" : "Copy Example"}
              </button>
            </div>

            {/* toSorted and toReversed */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Safe Sorting (ES2023)</h3>
              <p className="text-gray-700 mb-4">
                <code className="bg-gray-200 px-1 rounded">toSorted()</code> and <code className="bg-gray-200 px-1 rounded">toReversed()</code> create new arrays without altering the original:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.toSorted}</code>
              </pre>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mt-4">
                <code>{examples.toReversed}</code>
              </pre>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleCopy('toSorted')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'toSorted' ? "Copied!" : "Copy toSorted"}
                </button>
                <button
                  onClick={() => handleCopy('toReversed')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'toReversed' ? "Copied!" : "Copy toReversed"}
                </button>
              </div>
            </div>

            {/* Random Sort */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Random Sort</h3>
              <p className="text-gray-700 mb-4">
                For random sorting (Fisher Yates method recommended):
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.fisherYates}</code>
              </pre>
              <button
                onClick={() => handleCopy('fisherYates')}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedExample === 'fisherYates' ? "Copied!" : "Copy Example"}
              </button>
            </div>

            {/* Min/Max */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Finding Min/Max Values</h3>
              <p className="text-gray-700 mb-4">
                Methods to find minimum and maximum values in an array:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.mathMin}</code>
              </pre>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mt-4">
                <code>{examples.homemadeMax}</code>
              </pre>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleCopy('mathMin')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'mathMin' ? "Copied!" : "Copy Math.min"}
                </button>
                <button
                  onClick={() => handleCopy('homemadeMax')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'homemadeMax' ? "Copied!" : "Copy Homemade Max"}
                </button>
              </div>
            </div>

            {/* Object Sorting */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Sorting Object Arrays</h3>
              <p className="text-gray-700 mb-4">
                Sorting arrays of objects by their properties:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples.objectSort}</code>
              </pre>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mt-4">
                <code>{examples.stringSort}</code>
              </pre>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleCopy('objectSort')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'objectSort' ? "Copied!" : "Copy Numeric Sort"}
                </button>
                <button
                  onClick={() => handleCopy('stringSort')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
                >
                  {copiedExample === 'stringSort' ? "Copied!" : "Copy String Sort"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">See Also</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more about JavaScript arrays with these references:
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

export default Array_Sort;
