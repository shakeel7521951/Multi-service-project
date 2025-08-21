import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Operators
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            JavaScript operators are used to perform different types of mathematical and logical computations.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3] p-8 rounded-2xl shadow-lg border border-[#b8e0c8]">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Understanding JavaScript Operators</h2>
          <p className="text-gray-700 mb-3 text-lg">
            Operators are the building blocks of JavaScript expressions. They allow you to manipulate values, compare data, and control program flow.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Mastering operators is essential for writing efficient and effective JavaScript code.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
            Explore Operators »
          </button>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Operator Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">The Assignment Operator <code className="bg-gray-200 px-2 py-1 rounded">=</code> assigns values</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let x = 10;</code>
              </pre>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">The Addition Operator <code className="bg-gray-200 px-2 py-1 rounded">+</code> adds values</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let z = x + y;</code>
              </pre>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">The Multiplication Operator <code className="bg-gray-200 px-2 py-1 rounded">*</code> multiplies values</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let z = x * y;</code>
              </pre>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">The Comparison Operator <code className="bg-gray-200 px-2 py-1 rounded">&gt;</code> compares values</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let isGreater = x &gt; y;</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            Practice with JavaScript Operators
          </h2>
          <p className="text-gray-700 mb-4">
            Try out these JavaScript operator examples in your browser.
          </p>
          <div className="bg-gradient-to-b from-[#E7E9EB] to-[#d9dcdd] p-6 rounded-2xl shadow-md border border-gray-300">
            <h3 className="font-bold mb-3 text-gray-700">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow-inner">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {copied ? (
                <>
                  <FaCheck className="text-sm" /> Copied!
                </>
              ) : (
                <>
                  <FaCopy className="text-sm" /> Copy Code
                </>
              )}
            </button>
          </div>
        </section>

        {/* Types of Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Types of JavaScript Operators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Arithmetic Operators */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Arithmetic Operators</h3>
              <p className="mb-3 text-gray-700">Used to perform arithmetic on numbers:</p>
              <pre className="bg-white p-3 rounded-lg mb-4 border border-gray-300">
                <code>let x = (100 + 50) * a;</code>
              </pre>
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                      <th className="p-3 text-left font-bold text-gray-800">Operator</th>
                      <th className="p-3 text-left font-bold text-gray-800">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["+", "Addition"],
                      ["-", "Subtraction"],
                      ["*", "Multiplication"],
                      ["**", "Exponentiation"],
                      ["/", "Division"],
                      ["%", "Modulus"]
                    ].map(([operator, description], index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 border-b border-gray-200 font-mono">{operator}</td>
                        <td className="p-3 border-b border-gray-200">{description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignment Operators */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Assignment Operators</h3>
              <pre className="bg-white p-3 rounded-lg mb-4 border border-gray-300">
                <code>x += 5; // x = x + 5</code>
              </pre>
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                      <th className="p-3 text-left font-bold text-gray-800">Operator</th>
                      <th className="p-3 text-left font-bold text-gray-800">Example</th>
                      <th className="p-3 text-left font-bold text-gray-800">Same As</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["=", "x = y", "x = y"],
                      ["+=", "x += y", "x = x + y"],
                      ["*=", "x *= y", "x = x * y"]
                    ].map(([operator, example, sameAs], index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 border-b border-gray-200 font-mono">{operator}</td>
                        <td className="p-3 border-b border-gray-200 font-mono">{example}</td>
                        <td className="p-3 border-b border-gray-200 font-mono">{sameAs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparison Operators */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Comparison Operators</h3>
              <pre className="bg-white p-3 rounded-lg mb-4 border border-gray-300">
                <code>let result = x == y;</code>
              </pre>
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                      <th className="p-3 text-left font-bold text-gray-800">Operator</th>
                      <th className="p-3 text-left font-bold text-gray-800">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["==", "equal to"],
                      ["===", "equal value and type"],
                      ["!=", "not equal"],
                      [">", "greater than"]
                    ].map(([operator, description], index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 border-b border-gray-200 font-mono">{operator}</td>
                        <td className="p-3 border-b border-gray-200">{description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logical Operators */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Logical Operators</h3>
              <pre className="bg-white p-3 rounded-lg mb-4 border border-gray-300">
                <code>let isValid = x &gt; 0 && y &gt; 0;</code>
              </pre>
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                      <th className="p-3 text-left font-bold text-gray-800">Operator</th>
                      <th className="p-3 text-left font-bold text-gray-800">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["&&", "logical and"],
                      ["||", "logical or"],
                      ["!", "logical not"]
                    ].map(([operator, description], index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 border-b border-gray-200 font-mono">{operator}</td>
                        <td className="p-3 border-b border-gray-200">{description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* String Operations Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">String Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">String Concatenation</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let text3 = text1 + " " + text2;</code>
              </pre>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-700">String Comparison</h3>
              <pre className="bg-white p-3 rounded-lg overflow-x-auto border border-gray-300">
                <code>let result = text1 &lt; text2; // Compares alphabetically</code>
              </pre>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references for detailed information about operators and other language features.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gradient-to-b from-gray-50 to-gray-100 hover:from-[#04AA6D] hover:to-[#03945f] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200 hover:border-[#03945f]"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Operators;