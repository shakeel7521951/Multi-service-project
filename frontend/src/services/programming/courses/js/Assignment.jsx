import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Assignment Operators</h1>
          <p className="text-gray-600 text-lg">
            Assignment operators assign values to JavaScript variables.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Assignment Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Assignment Operators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Operator</th>
                  <th className="py-2 px-4 border-b">Example</th>
                  <th className="py-2 px-4 border-b">Same As</th>
                </tr>
              </thead>
              <tbody>
                {assignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b font-mono">{op.operator}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shift Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shift Assignment Operators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Operator</th>
                  <th className="py-2 px-4 border-b">Example</th>
                  <th className="py-2 px-4 border-b">Same As</th>
                </tr>
              </thead>
              <tbody>
                {shiftAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b font-mono">{op.operator}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bitwise Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Bitwise Assignment Operators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Operator</th>
                  <th className="py-2 px-4 border-b">Example</th>
                  <th className="py-2 px-4 border-b">Same As</th>
                </tr>
              </thead>
              <tbody>
                {bitwiseAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b font-mono">{op.operator}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Logical Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Logical Assignment Operators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Operator</th>
                  <th className="py-2 px-4 border-b">Example</th>
                  <th className="py-2 px-4 border-b">Same As</th>
                </tr>
              </thead>
              <tbody>
                {logicalAssignmentOperators.map((op, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-4 border-b font-mono">{op.operator}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.example}</td>
                    <td className="py-2 px-4 border-b font-mono">{op.sameAs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Operator Examples</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore practical examples of how each assignment operator works in JavaScript.
          </p>
          
          {examples.map((example, index) => (
            <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">{example.title}</h3>
              <p className="text-gray-800 mb-4">{example.description}</p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example.code}</code>
              </pre>
              <button
                onClick={() => handleCopy(index)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedIndex === index ? "Copied!" : "Copy Code"}
              </button>
            </div>
          ))}
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

export default Assignments;