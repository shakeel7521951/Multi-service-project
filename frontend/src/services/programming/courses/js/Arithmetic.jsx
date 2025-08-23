import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Arithmetic
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Learn how to perform mathematical operations in JavaScript with arithmetic operators.
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
        <section className="bg-gradient-to-r from-[#FFF4A3] to-[#f9ec8e] p-8 rounded-2xl shadow-lg border border-[#f5e57a]">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">JavaScript Arithmetic Operators</h2>
          <p className="text-gray-700 mb-3 text-lg">
            Arithmetic operators perform arithmetic on numbers (literals or variables).
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            A typical arithmetic operation operates on two numbers. The numbers can be literals, variables, or expressions.
          </p>
        </section>

        {/* Operators Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Arithmetic Operators</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Operator</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Description</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((op, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}>

                    <td className="py-3 px-4 border-b font-mono font-semibold">{op.symbol}</td>
                    <td className="py-3 px-4 border-b">{op.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Arithmetic Operations</h2>
          <p className="text-gray-700 mb-6">
            The numbers in an arithmetic operation are called operands. The operation is defined by an operator.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-[#E7E9EB] to-[#d9dcdd] p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-bold mb-3 text-lg text-gray-800">{example.title}</h3>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow-inner">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(example.code, index)}
                    className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    title="Copy code"
                  >
                    {copiedIndex === index ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Operator Precedence Section */}
        <section className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3] p-8 rounded-2xl shadow-lg border border-[#b8e0c8]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Operator Precedence</h2>
          <p className="text-gray-700 mb-3">
            Operator precedence describes the order in which operations are performed in an arithmetic expression.
          </p>
          <p className="text-gray-700 mb-3">
            Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
          </p>
          <p className="text-gray-700 mb-3">
            When operations have the same precedence, they are computed from left to right.
          </p>
          <p className="text-gray-700">
            Parentheses can be used to change the precedence: <code className="bg-white px-2 py-1 rounded-lg border border-gray-300 font-mono">(100 + 50) * 3</code>
          </p>
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

export default Arithmetic;