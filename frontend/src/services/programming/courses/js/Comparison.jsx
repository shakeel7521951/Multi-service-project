import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Comparison = () => {
  const comparisonExamples = [
    {
      operator: "==",
      description: "equal to",
      examples: [
        { comparison: "x == 8", result: "false" },
        { comparison: "x == 5", result: "true" },
        { comparison: 'x == "5"', result: "true" }
      ]
    },
    {
      operator: "===",
      description: "equal value and equal type",
      examples: [
        { comparison: "x === 5", result: "true" },
        { comparison: 'x === "5"', result: "false" }
      ]
    },
    {
      operator: "!=",
      description: "not equal",
      examples: [
        { comparison: "x != 8", result: "true" },
        { comparison: "x != 5", result: "false" }
      ]
    },
    {
      operator: "!==",
      description: "not equal value or not equal type",
      examples: [
        { comparison: "x !== 5", result: "false" },
        { comparison: 'x !== "5"', result: "true" },
        { comparison: "x !== 8", result: "true" }
      ]
    },
    {
      operator: ">",
      description: "greater than",
      examples: [
        { comparison: "x > 8", result: "false" }
      ]
    },
    {
      operator: "<",
      description: "less than",
      examples: [
        { comparison: "x < 8", result: "true" }
      ]
    },
    {
      operator: ">=",
      description: "greater than or equal to",
      examples: [
        { comparison: "x >= 8", result: "false" }
      ]
    },
    {
      operator: "<=",
      description: "less than or equal to",
      examples: [
        { comparison: "x <= 8", result: "true" }
      ]
    }
  ];

  const logicalExamples = [
    {
      operator: "&&",
      description: "and",
      example: "(x < 10 && y > 1)",
      result: "true"
    },
    {
      operator: "||",
      description: "or",
      example: "(x == 5 || y == 5)",
      result: "false"
    },
    {
      operator: "!",
      description: "not",
      example: "!(x == y)",
      result: "true"
    }
  ];

  const ternaryExample = `let voteable = (age < 18) ? "Too young" : "Old enough";`;
  const nullishExample = `let name = null;
let text = "missing";
let result = name ?? text;`;
  const optionalChainingExample = `const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo").innerHTML = car?.name;`;

  const [copied, setCopied] = useState({
    ternary: false,
    nullish: false,
    chaining: false
  });

  const handleCopy = (type, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => {
          setCopied(prev => ({ ...prev, [type]: false }));
        }, 1500);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Comparison and Logical Operators</h1>
          <p className="text-gray-600 text-lg">
            Learn how to compare values and combine conditions in JavaScript with comparison and logical operators.
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
          <h2 className="text-3xl font-bold mb-4">Understanding Operators</h2>
          <p className="text-gray-800 mb-3">
            Comparison and Logical operators are used to test for true or false values in JavaScript.
          </p>
          <p className="text-gray-800 mb-6">
            These operators are fundamental for controlling program flow through conditional statements and loops.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Comparison Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Comparison Operators</h2>
          <p className="text-gray-700 mb-4">
            Comparison operators are used in logical statements to determine equality or difference between variables or values. (Given that x = 5)
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Operator</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Comparing</th>
                  <th className="py-3 px-4 text-left font-semibold">Returns</th>
                </tr>
              </thead>
              <tbody>
                {comparisonExamples.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 border-r border-gray-200 font-mono">{item.operator}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{item.description}</td>
                    <td className="py-3 px-4 border-r border-gray-200">
                      {item.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="font-mono">{ex.comparison}</div>
                      ))}
                    </td>
                    <td className="py-3 px-4">
                      {item.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="font-mono">{ex.result}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Usage Example */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h3 className="font-bold mb-3">Usage in Conditional Statements:</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{`if (age < 18) text = "Too young to buy alcohol";`}</code>
          </pre>
        </section>

        {/* Logical Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Logical Operators</h2>
          <p className="text-gray-700 mb-4">
            Logical operators are used to determine the logic between variables or values. (Given that x = 6 and y = 3)
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Operator</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Example</th>
                  <th className="py-3 px-4 text-left font-semibold">Returns</th>
                </tr>
              </thead>
              <tbody>
                {logicalExamples.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 border-r border-gray-200 font-mono">{item.operator}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{item.description}</td>
                    <td className="py-3 px-4 border-r border-gray-200 font-mono">{item.example}</td>
                    <td className="py-3 px-4 font-mono">{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Ternary Operator Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conditional (Ternary) Operator</h2>
          <p className="text-gray-700 mb-4">
            Assigns a value to a variable based on some condition.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>variablename = (condition) ? value1 : value2</code>
            </pre>
            
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{ternaryExample}</code>
              </pre>
              <button
                onClick={() => handleCopy("ternary", ternaryExample)}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-[#04AA6D]"
              >
                {copied.ternary ? "Copied!" : <FaCopy />}
              </button>
            </div>
          </div>
        </section>

        {/* Advanced Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Operators</h2>
          
          <div className="space-y-6">
            {/* Nullish Coalescing Operator */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">The Nullish Coalescing Operator (??)</h3>
              <p className="mb-4">
                The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
              </p>
              <div className="relative">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{nullishExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy("nullish", nullishExample)}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-[#04AA6D]"
                >
                  {copied.nullish ? "Copied!" : <FaCopy />}
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Supported in all browsers since March 2020: Chrome 80, Edge 80, Firefox 72, Safari 13.1, Opera 67
              </p>
            </div>
            
            {/* Optional Chaining Operator */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">The Optional Chaining Operator (?.)</h3>
              <p className="mb-4">
                The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
              </p>
              <div className="relative">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{optionalChainingExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy("chaining", optionalChainingExample)}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-[#04AA6D]"
                >
                  {copied.chaining ? "Copied!" : <FaCopy />}
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Supported in all browsers since March 2020: Chrome 80, Edge 80, Firefox 72, Safari 13.1, Opera 67
              </p>
            </div>
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

export default Comparison;