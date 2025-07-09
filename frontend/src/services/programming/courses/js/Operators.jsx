import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Operators = () => {
  const references = [
    "Arithmetic Operators",
    "Assignment Operators",
    "Comparison Operators",
    "String Operators",
    "Logical Operators",
    "Bitwise Operators",
    "Ternary Operators",
    "Type Operators",
    "Operator Precedence",
    "Operator Examples",
    "String Concatenation",
    "Type Conversion",
    "Truthy/Falsy Values",
    "Short-circuit Evaluation",
    "Nullish Coalescing"
  ];

  const jsExample = `// JavaScript Operators Examples
let x = 5;
let y = 2;

// Arithmetic Operators
let sum = x + y;
let product = x * y;

// Assignment Operators
x += 3; // x = x + 3

// Comparison Operators
let isGreater = x > y;

// String Concatenation
let message = "Hello" + " World!";

// Logical Operators
let isValid = x > 0 && y > 0;`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Operators</h1>
          <p className="text-gray-600 text-lg">
            JavaScript operators are used to perform different types of mathematical and logical computations.
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
          <h2 className="text-3xl font-bold mb-4">Understanding JavaScript Operators</h2>
          <p className="text-gray-800 mb-3">
            Operators are the building blocks of JavaScript expressions. They allow you to manipulate values, compare data, and control program flow.
          </p>
          <p className="text-gray-800 mb-6">
            Mastering operators is essential for writing efficient and effective JavaScript code.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Explore Operators »
          </button>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Operator Examples</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">The Assignment Operator <code>=</code> assigns values</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let x = 10;</code>
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">The Addition Operator <code>+</code> adds values</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let z = x + y;</code>
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">The Multiplication Operator <code>*</code> multiplies values</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let z = x * y;</code>
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">The Comparison Operator <code>&gt;</code> compares values</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let isGreater = x &gt; y;</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice with JavaScript Operators
          </h2>
          <p className="text-gray-700 mb-4">
            Try out these JavaScript operator examples in your browser.
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

        {/* Types of Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of JavaScript Operators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Arithmetic Operators */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Arithmetic Operators</h3>
              <p className="mb-3">Used to perform arithmetic on numbers:</p>
              <pre className="bg-white p-3 rounded mb-3">
                <code>let x = (100 + 50) * a;</code>
              </pre>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Operator</th>
                      <th className="p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">+</td>
                      <td className="p-2 border">Addition</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">-</td>
                      <td className="p-2 border">Subtraction</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">*</td>
                      <td className="p-2 border">Multiplication</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">**</td>
                      <td className="p-2 border">Exponentiation</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">/</td>
                      <td className="p-2 border">Division</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">%</td>
                      <td className="p-2 border">Modulus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignment Operators */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Assignment Operators</h3>
              <pre className="bg-white p-3 rounded mb-3">
                <code>x += 5; // x = x + 5</code>
              </pre>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Operator</th>
                      <th className="p-2 text-left">Example</th>
                      <th className="p-2 text-left">Same As</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">=</td>
                      <td className="p-2 border">x = y</td>
                      <td className="p-2 border">x = y</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">+=</td>
                      <td className="p-2 border">x += y</td>
                      <td className="p-2 border">x = x + y</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">*=</td>
                      <td className="p-2 border">x *= y</td>
                      <td className="p-2 border">x = x * y</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparison Operators */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Comparison Operators</h3>
              <pre className="bg-white p-3 rounded mb-3">
                <code>let result = x == y;</code>
              </pre>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Operator</th>
                      <th className="p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">==</td>
                      <td className="p-2 border">equal to</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">===</td>
                      <td className="p-2 border">equal value and type</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">!=</td>
                      <td className="p-2 border">not equal</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">&gt;</td>
                      <td className="p-2 border">greater than</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logical Operators */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Logical Operators</h3>
              <pre className="bg-white p-3 rounded mb-3">
                <code>let isValid = x &gt; 0 && y &gt; 0;</code>
              </pre>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Operator</th>
                      <th className="p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">&&</td>
                      <td className="p-2 border">logical and</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">||</td>
                      <td className="p-2 border">logical or</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">!</td>
                      <td className="p-2 border">logical not</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* String Operations Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">String Operations</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">String Concatenation</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let text3 = text1 + " " + text2;</code>
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">String Comparison</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>let result = text1 &lt; text2; // Compares alphabetically</code>
              </pre>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references for detailed information about operators and other language features.
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

export default Operators;