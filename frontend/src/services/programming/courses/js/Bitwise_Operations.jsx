import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bitwise_Operations = () => {
  const bitwiseOperators = [
    { symbol: "&", name: "AND", desc: "Sets each bit to 1 if both bits are 1" },
    { symbol: "|", name: "OR", desc: "Sets each bit to 1 if one of two bits is 1" },
    { symbol: "^", name: "XOR", desc: "Sets each bit to 1 if only one of two bits is 1" },
    { symbol: "~", name: "NOT", desc: "Inverts all the bits" },
    {
      symbol: "<<",
      name: "Zero fill left shift",
      desc: "Shifts left by pushing zeros in from the right and let the leftmost bits fall off",
    },
    {
      symbol: ">>",
      name: "Signed right shift",
      desc: "Shifts right by pushing copies of the leftmost bit in from the left",
    },
    {
      symbol: ">>>",
      name: "Zero fill right shift",
      desc: "Shifts right by pushing zeros in from the left",
    },
  ];

  const exampleCode = `function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}`;

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Bitwise Operations</h1>
          <p className="text-gray-600 text-lg">
            Master low-level operations with JavaScript's powerful bitwise operators.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Bitwise Overview */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What are Bitwise Operators?</h2>
          <p className="text-gray-800 mb-3">
            Bitwise operators work on 32-bit binary representations of numbers. They allow low-level manipulation of bits using binary logic.
          </p>
          <p className="text-gray-800 mb-3">
            JavaScript stores numbers as 64-bit floating-point numbers but converts them to 32-bit integers for bitwise operations.
          </p>
        </section>

        {/* Operators Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Operators and Descriptions</h2>
          <div className="overflow-auto rounded-lg border">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 font-bold">Operator</th>
                  <th className="p-3 font-bold">Name</th>
                  <th className="p-3 font-bold">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {bitwiseOperators.map((op, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3 font-mono">{op.symbol}</td>
                    <td className="p-3">{op.name}</td>
                    <td className="p-3">{op.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <ul className="space-y-3 text-sm bg-[#f8f9fa] p-6 rounded-lg border">
            <li><strong>5 & 1</strong> → 1 <span className="text-gray-500">(0101 & 0001 = 0001)</span></li>
            <li><strong>5 | 1</strong> → 5 <span className="text-gray-500">(0101 | 0001 = 0101)</span></li>
            <li><strong>~5</strong> → -6 <span className="text-gray-500">(~0101 = 1010 → 32-bit = -6)</span></li>
             <li><strong>5 ^ 1</strong> → 4 <span className="text-gray-500">(0101 ^ 0001 = 0100)</span></li>
          </ul>
        </section>

        {/* Explanation */}
        <section className="bg-[#fff8dc] p-6 rounded-lg border space-y-4 text-sm leading-relaxed">
          <p><strong>JavaScript Uses 32-bit Operands:</strong> Bitwise operations are applied to 32-bit signed integers, even if the number is stored as 64-bit floating point.</p>
          <p><strong>Why ~5 = -6?</strong> Because ~ flips all 32 bits and JavaScript interprets it as a signed integer using two’s complement format.</p>
          <p><strong>Binary Joke:</strong> There are only 10 types of people in the world: those who understand binary and those who don’t.</p>
        </section>

        {/* Code Snippet */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conversion Functions</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Decimal ↔ Binary</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
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


export default Bitwise_Operations;
