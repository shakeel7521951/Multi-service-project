import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Best_Practices = () => {
  const [copied, setCopied] = useState(false);

  const jsExample = `// Declare and initialize variables
let firstName = "John";
let lastName = "Doe";
let price = 19.90;
let discount = 0.10;
let fullPrice = price - discount;

// Declare arrays and objects with const
const myArray = [];
const myObject = {};

// Avoid using 'new' for primitives
let x1 = "";             // string
let x2 = 0;              // number
let x3 = false;          // boolean
const x4 = {};           // object
const x5 = [];           // array
const x6 = /()/;         // regexp
const x7 = function(){}; // function

// Use strict comparison
console.log(1 === "1"); // false

// Default parameters
function myFunction(x, y = 0) {
  return x + y;
}

// Switch with default
switch (new Date().getDay()) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  case 2: day = "Tuesday"; break;
  case 3: day = "Wednesday"; break;
  case 4: day = "Thursday"; break;
  case 5: day = "Friday"; break;
  case 6: day = "Saturday"; break;
  default: day = "Unknown";
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Best Practices</h1>
          <p className="text-gray-600 text-lg">
            Follow these best practices to write clean, efficient, and error-free JavaScript code.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Best Practices Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Best Practices Summary</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Avoid global variables.</li>
            <li>Always declare local variables using <code>let</code>, <code>const</code>, or <code>var</code>.</li>
            <li>Put all declarations at the top of your scripts/functions.</li>
            <li>Initialize variables when declaring them.</li>
            <li>Use <code>const</code> for declaring objects and arrays.</li>
            <li>Avoid using <code>new</code> for primitives like String, Number, and Boolean.</li>
            <li>Beware of automatic type conversions.</li>
            <li>Use <code>===</code> instead of <code>==</code> for strict comparison.</li>
            <li>Use default values for function parameters.</li>
            <li>Always include a <code>default</code> case in <code>switch</code> statements.</li>
            <li>Avoid treating primitives as objects.</li>
          </ul>
        </section>

        {/* Code Practice Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Practice Clean JavaScript</h2>
          <p className="text-gray-700 mb-4">
            Here's an example combining some of the best practices in action:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Best_Practices;
