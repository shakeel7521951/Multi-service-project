import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Assignments = () => {
  const assignmentOperators = [
    { operator: "=", example: "x = y", sameAs: "x = y" },
    { operator: "+=", example: "x += y", sameAs: "x = x + y" },
    { operator: "-=", example: "x -= y", sameAs: "x = x - y" },
    { operator: "*=", example: "x *= y", sameAs: "x = x * y" },
    { operator: "/=", example: "x /= y", sameAs: "x = x / y" },
    { operator: "%=", example: "x %= y", sameAs: "x = x % y" },
    { operator: "**=", example: "x **= y", sameAs: "x = x ** y" }
  ];

  const shiftAssignmentOperators = [
    { operator: "<<=", example: "x <<= y", sameAs: "x = x << y" },
    { operator: ">>=", example: "x >>= y", sameAs: "x = x >> y" },
    { operator: ">>>=", example: "x >>>= y", sameAs: "x = x >>> y" }
  ];

  const bitwiseAssignmentOperators = [
    { operator: "&=", example: "x &= y", sameAs: "x = x & y" },
    { operator: "^=", example: "x ^= y", sameAs: "x = x ^ y" },
    { operator: "|=", example: "x |= y", sameAs: "x = x | y" }
  ];

  const logicalAssignmentOperators = [
    { operator: "&&=", example: "x &&= y", sameAs: "x = x && (x = y)" },
    { operator: "||=", example: "x ||= y", sameAs: "x = x || (x = y)" },
    { operator: "??=", example: "x ??= y", sameAs: "x = x ?? (x = y)" }
  ];

  const examples = [
    {
      title: "The = Operator",
      description: "The Simple Assignment Operator assigns a value to a variable.",
      code: `let x = 10;\nlet x = 10 + y;`
    },
    {
      title: "The += Operator",
      description: "The Addition Assignment Operator adds a value to a variable.",
      code: `let x = 10;\nx += 5;\n\nlet text = "Hello";\ntext += " World";`
    },
    {
      title: "The -= Operator",
      description: "The Subtraction Assignment Operator subtracts a value from a variable.",
      code: `let x = 10;\nx -= 5;`
    },
    {
      title: "The *= Operator",
      description: "The Multiplication Assignment Operator multiplies a variable.",
      code: `let x = 10;\nx *= 5;`
    },
    {
      title: "The **= Operator",
      description: "The Exponentiation Assignment Operator raises a variable to the power of the operand.",
      code: `let x = 10;\nx **= 5;`
    },
    {
      title: "The /= Operator",
      description: "The Division Assignment Operator divides a variable.",
      code: `let x = 10;\nx /= 5;`
    },
    {
      title: "The %= Operator",
      description: "The Remainder Assignment Operator assigns a remainder to a variable.",
      code: `let x = 10;\nx %= 5;`
    },
    {
      title: "The <<= Operator",
      description: "The Left Shift Assignment Operator left shifts a variable.",
      code: `let x = -100;\nx <<= 5;`
    },
    {
      title: "The >>= Operator",
      description: "The Right Shift Assignment Operator right shifts a variable (signed).",
      code: `let x = -100;\nx >>= 5;`
    },
    {
      title: "The >>>= Operator",
      description: "The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).",
      code: `let x = -100;\nx >>>= 5;`
    },
    {
      title: "The &= Operator",
      description: "The Bitwise AND Assignment Operator does a bitwise AND operation on two operands.",
      code: `let x = 10;\nx &= 5;`
    },
    {
      title: "The |= Operator",
      description: "The Bitwise OR Assignment Operator does a bitwise OR operation on two operands.",
      code: `let x = 10;\nx |= 5;`
    },
    {
      title: "The ^= Operator",
      description: "The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands.",
      code: `let x = 10;\nx ^= 5;`
    },
    {
      title: "The &&= Operator",
      description: "The Logical AND assignment operator is used between two values. If the first value is true, the second value is assigned.",
      code: `let x = 10;\nx &&= 5;`
    },
    {
      title: "The ||= Operator",
      description: "The Logical OR assignment operator is used between two values. If the first value is false, the second value is assigned.",
      code: `let x = 10;\nx ||= 5;`
    },
    {
      title: "The ??= Operator",
      description: "The Nullish coalescing assignment operator is used between two values. If the first value is undefined or null, the second value is assigned.",
      code: `let x;\nx ??= 5;`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(examples[index].code)
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
            JavaScript Assignment Operators
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Assignment operators assign values to JavaScript variables.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Assignment Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Assignment Operators</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Operator</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Example</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Same As</th>
                </tr>
              </thead>
              <tbody>
                {assignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}>
                    <td className="py-3 px-4 border-b font-mono font-semibold">{op.operator}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shift Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Shift Assignment Operators</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Operator</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Example</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Same As</th>
                </tr>
              </thead>
              <tbody>
                {shiftAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}>
                    <td className="py-3 px-4 border-b font-mono font-semibold">{op.operator}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bitwise Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Bitwise Assignment Operators</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Operator</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Example</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Same As</th>
                </tr>
              </thead>
              <tbody>
                {bitwiseAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}>
                    <td className="py-3 px-4 border-b font-mono font-semibold">{op.operator}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Logical Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Logical Assignment Operators</h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-[#D9EEE1] to-[#c5e8d3]">
                <tr>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Operator</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Example</th>
                  <th className="py-3 px-4 border-b text-left font-bold text-gray-800">Same As</th>
                </tr>
              </thead>
              <tbody>
                {logicalAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}>
                    <td className="py-3 px-4 border-b font-mono font-semibold">{op.operator}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-3 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 border-l-4 border-[#04AA6D] pl-3">Operator Examples</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore practical examples of how each assignment operator works in JavaScript.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-[#E7E9EB] to-[#d9dcdd] p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{example.title}</h3>
                <p className="text-gray-700 mb-4">{example.description}</p>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow-inner">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(index)}
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
                <button
                  onClick={() => handleCopy(index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
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

export default Assignments;