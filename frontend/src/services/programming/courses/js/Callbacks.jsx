import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Callbacks = () => {
  const references = [
    "Function Basics",
    "Arrow Functions",
    "Function Parameters",
    "Function Invocation",
    "Function Closures",
    "Function Methods",
    "Function Objects",
    "Function Expressions",
    "IIFE Functions",
    "Higher-Order Functions",
    "Callback Patterns",
    "Promise API",
    "Async/Await",
    "Error Handling",
    "Functional Programming"
  ];

  const example1 = `function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();`;

  const example2 = `function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);`;

  const example3 = `function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);`;

  const example4 = `// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}`;

  const [activeTab, setActiveTab] = useState(0);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Callbacks</h1>
          <p className="text-gray-600 text-lg">
            Master the power of callback functions in JavaScript for asynchronous programming.
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
          <h2 className="text-3xl font-bold mb-4">"I will call back later!"</h2>
          <p className="text-gray-800 mb-3">
            A callback is a function passed as an argument to another function.
          </p>
          <p className="text-gray-800 mb-3">
            This technique allows a function to call another function. A callback function can run after another function has finished.
          </p>
          <p className="text-gray-800 mb-6">
            Callbacks are essential for handling asynchronous operations in JavaScript.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn Callbacks »
          </button>
        </section>

        {/* Function Sequence Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Sequence</h2>
          <p className="text-gray-700 mb-4">
            JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">This example will end up displaying "Goodbye":</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy(example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Sequence Control Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Sequence Control</h2>
          <p className="text-gray-700 mb-4">
            Sometimes you would like to have better control over when to execute a function.
          </p>
          
          <div className="flex border-b mb-4">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 0 ? 'border-b-2 border-[#04AA6D] text-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(0)}
            >
              Basic Example
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 1 ? 'border-b-2 border-[#04AA6D] text-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(1)}
            >
              Callback Solution
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 2 ? 'border-b-2 border-[#04AA6D] text-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(2)}
            >
              Array Example
            </button>
          </div>

          {activeTab === 0 && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Basic Calculation Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example2}</code>
              </pre>
              <button
                onClick={() => handleCopy(example2)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}

          {activeTab === 1 && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Callback Solution:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example3}</code>
              </pre>
              <div className="mt-4 p-4 bg-yellow-50 rounded">
                <p className="font-semibold">Note:</p>
                <p>When you pass a function as an argument, remember not to use parenthesis.</p>
                <p className="mt-2 font-mono text-sm">Right: myCalculator(5, 5, myDisplayer);</p>
                <p className="font-mono text-sm">Wrong: myCalculator(5, 5, myDisplayer());</p>
              </div>
              <button
                onClick={() => handleCopy(example3)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}

          {activeTab === 2 && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Array Filtering with Callback:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example4}</code>
              </pre>
              <p className="mt-3">In this example, <code>(x) = x = 0</code> is a callback function (arrow function).</p>
              <button
                onClick={() => handleCopy(example4)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}
        </section>

        {/* When to Use Callbacks */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">When to Use a Callback?</h2>
          <p className="text-gray-800">
            Callbacks are commonly used:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>For asynchronous operations (like fetching data)</li>
            <li>When you need to execute code after an operation completes</li>
            <li>For event handling (click events, keyboard events, etc.)</li>
            <li>In array methods (like forEach, map, filter, reduce)</li>
            <li>For customizing function behavior</li>
          </ul>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references for in-depth information about functions, callbacks, and other essential concepts.
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

export default Callbacks;