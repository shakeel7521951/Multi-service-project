import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Precedence = () => {
  const jsExample = `let x = 100 + 50 * 3;
let y = (100 + 50) * 3;
let z = 100 / 50 * 3;`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const operatorTable = [
    {
      val: 18,
      operator: "( )",
      description: "Expression Grouping",
      example: "(100 + 50) * 3",
    },
    {
      val: 17,
      operator: ". [] ?. () new",
      description: "Member Access, Optional Chaining, Function Calls, Object Creation",
      example: 'person.name | person["name"] | x?.y | new Date()',
    },
    {
      val: 15,
      operator: "++ --",
      description: "Postfix Increment/Decrement",
      example: "i++ | i--",
    },
    {
      val: 14,
      operator: "++ -- ! ~ + - typeof void delete",
      description: "Prefix/Unary Operators",
      example: "++i | !x | typeof x",
    },
    {
      val: 13,
      operator: "**",
      description: "Exponentiation",
      example: "10 ** 2",
    },
    {
      val: 12,
      operator: "* / %",
      description: "Multiplication / Division / Modulo",
      example: "10 * 5 | 10 / 2",
    },
    {
      val: 11,
      operator: "+ -",
      description: "Addition / Subtraction / Concatenation",
      example: '"Hello" + "World" | 10 - 5',
    },
    {
      val: 10,
      operator: "<< >> >>>",
      description: "Bitwise Shift Operators",
      example: "x << 2",
    },
    {
      val: 9,
      operator: "< <= > >= in instanceof",
      description: "Comparison / Relational",
      example: 'x < y | "PI" in Math | x instanceof Array',
    },
    {
      val: 8,
      operator: "== === != !==",
      description: "Equality Comparison",
      example: "x === y",
    },
    {
      val: 7,
      operator: "&",
      description: "Bitwise AND",
      example: "x & y",
    },
    {
      val: 6,
      operator: "^",
      description: "Bitwise XOR",
      example: "x ^ y",
    },
    {
      val: 5,
      operator: "|",
      description: "Bitwise OR",
      example: "x | y",
    },
    {
      val: 4,
      operator: "&&",
      description: "Logical AND",
      example: "x && y",
    },
    {
      val: 3,
      operator: "|| ??",
      description: "Logical OR / Nullish Coalescing",
      example: "x || y | x ?? y",
    },
    {
      val: 2,
      operator: "? : = += -= *= **= /= %= <<= >>= >>>= &= |= ^= &&= ||= => yield",
      description: "Conditional & Assignment",
      example: "x = y | x += y | x ? 'yes' : 'no'",
    },
    {
      val: 1,
      operator: ",",
      description: "Comma",
      example: "x, y",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">
            JavaScript Operator Precedence
          </h1>
          <p className="text-gray-600 text-lg">
            Understand the order in which JavaScript evaluates different operators in expressions.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Explanation Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Why Operator Precedence?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript evaluates expressions based on operator precedence.
            Understanding this helps you avoid logical bugs and write cleaner code.
          </p>
          <p className="text-gray-800 mb-3">
            Multiplication and division take priority over addition and subtraction.
            Parentheses can override the default order.
          </p>
          <p className="text-gray-800 mb-6">
            Use this knowledge to predict how expressions will behave during execution.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Explore More »
          </button>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Try It Yourself</h2>
          <p className="text-gray-700 mb-4">
            Play around with examples and observe how operator precedence changes the result.
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
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Operator Precedence Table */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Operator Precedence Table</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            The following table shows operators from highest to lowest precedence.
            Operations with the same precedence are evaluated left to right.
          </p>
          <div className="overflow-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100 font-bold">
                <tr>
                  <th className="border p-2">Val</th>
                  <th className="border p-2">Operator</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Example</th>
                </tr>
              </thead>
              <tbody>
                {operatorTable.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border p-2 text-center">{item.val}</td>
                    <td className="border p-2">{item.operator}</td>
                    <td className="border p-2">{item.description}</td>
                    <td className="border p-2 font-mono text-xs text-gray-700">
                      {item.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Bottom */}
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


export default Precedence;
