import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Arithmetic = () => {
  const examples = [
    {
      title: "Addition",
      code: `let x = 5;
let y = 2;
let z = x + y;  // z = 7`
    },
    {
      title: "Subtraction",
      code: `let x = 5;
let y = 2;
let z = x - y;  // z = 3`
    },
    {
      title: "Multiplication",
      code: `let x = 5;
let y = 2;
let z = x * y;  // z = 10`
    },
    {
      title: "Division",
      code: `let x = 5;
let y = 2;
let z = x / y;  // z = 2.5`
    },
    {
      title: "Modulus",
      code: `let x = 5;
let y = 2;
let z = x % y;  // z = 1`
    },
    {
      title: "Exponentiation",
      code: `let x = 5;
let z = x ** 2;  // z = 25`
    },
    {
      title: "Increment",
      code: `let x = 5;
x++;
let z = x;  // z = 6`
    },
    {
      title: "Decrement",
      code: `let x = 5;
x--;
let z = x;  // z = 4`
    },
    {
      title: "Operator Precedence",
      code: `let x = 100 + 50 * 3;  // x = 250 (multiplication first)
let y = (100 + 50) * 3; // y = 450 (parentheses first)`
    }
  ];

  const operators = [
    { symbol: "+", name: "Addition" },
    { symbol: "-", name: "Subtraction" },
    { symbol: "*", name: "Multiplication" },
    { symbol: "**", name: "Exponentiation (ES2016)" },
    { symbol: "/", name: "Division" },
    { symbol: "%", name: "Modulus (Remainder)" },
    { symbol: "++", name: "Increment" },
    { symbol: "--", name: "Decrement" }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Arithmetic</h1>
          <p className="text-gray-600 text-lg">
            Learn how to perform mathematical operations in JavaScript with arithmetic operators.
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
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Arithmetic Operators</h2>
          <p className="text-gray-800 mb-3">
            Arithmetic operators perform arithmetic on numbers (literals or variables).
          </p>
          <p className="text-gray-800 mb-6">
            A typical arithmetic operation operates on two numbers. The numbers can be literals, variables, or expressions.
          </p>
        </section>

        {/* Operators Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Arithmetic Operators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Operator</th>
                  <th className="py-3 px-4 border-b text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((op, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-mono">{op.symbol}</td>
                    <td className="py-3 px-4 border-b">{op.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Arithmetic Operations</h2>
          <p className="text-gray-700 mb-6">
            The numbers in an arithmetic operation are called operands. The operation is defined by an operator.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
                  <code>{example.code}</code>
                  <button
                    onClick={() => handleCopy(example.code, index)}
                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                    title="Copy code"
                  >
                    {copiedIndex === index ? (
                      <span className="text-green-500">Copied!</span>
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Operator Precedence Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Operator Precedence</h2>
          <p className="text-gray-800 mb-3">
            Operator precedence describes the order in which operations are performed in an arithmetic expression.
          </p>
          <p className="text-gray-800 mb-3">
            Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
          </p>
          <p className="text-gray-800 mb-3">
            When operations have the same precedence, they are computed from left to right.
          </p>
          <p className="text-gray-800">
            Parentheses can be used to change the precedence: <code className="bg-gray-200 px-1 rounded">(100 + 50) * 3</code>
          </p>
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

export default Arithmetic;