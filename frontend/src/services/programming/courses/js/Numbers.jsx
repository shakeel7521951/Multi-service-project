import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Numbers = () => {
  const references = [
    "Number Methods",
    "Number Properties",
    "Math Object",
    "Random Numbers",
    "Boolean Values",
    "Comparison Operators",
    "Type Conversion",
    "Bitwise Operations",
    "BigInt",
    "Number Systems",
    "Precision Handling",
    "Rounding Methods",
    "Exponential Notation",
    "Number Object",
    "NaN Handling"
  ];

  const numberExamples = [
    `// Numbers with decimals
let x = 3.14;    
let y = 3;`,

    `// Scientific notation
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123`,

    `// Integer precision
let x = 999999999999999;   // 999999999999999
let y = 9999999999999999;  // 10000000000000000`,

    `// Floating precision issue
let x = 0.2 + 0.1;  // 0.30000000000000004

// Solution:
let x = (0.2 * 10 + 0.1 * 10) / 10;  // 0.3`,

    `// Adding numbers vs strings
let x = 10 + 20;      // 30 (number)
let y = "10" + "20";  // "1020" (string)
let z = "10" + 20;    // "1020" (string)`
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(numberExamples[index])
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Numbers</h1>
          <p className="text-gray-600 text-lg">
            Understand how JavaScript handles numbers, including special cases and common pitfalls.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Number System</h2>
          <p className="text-gray-800 mb-3">
            JavaScript has only one type of number. Numbers can be written with or without decimals.
          </p>
          <p className="text-gray-800 mb-3">
            Unlike many other programming languages, JavaScript does not define different types of numbers like integers, short, long, etc.
          </p>
          <p className="text-gray-800 mb-6">
            JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Key Concepts Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Integer Precision</h3>
              <p className="text-gray-700 mb-3">
                Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Floating Precision</h3>
              <p className="text-gray-700 mb-3">
                Floating point arithmetic is not always 100% accurate. To solve precision issues, it helps to multiply and divide.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Numbers and Strings</h3>
              <p className="text-gray-700 mb-3">
                JavaScript uses the + operator for both addition and concatenation. Be careful when mixing numbers and strings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Special Values</h3>
              <p className="text-gray-700 mb-3">
                JavaScript has special number values like <code className="bg-gray-200 px-1 rounded">NaN</code> (Not a Number) and <code className="bg-gray-200 px-1 rounded">Infinity</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            JavaScript Number Examples
          </h2>
          <p className="text-gray-700 mb-4">
            Explore these common number operations and behaviors in JavaScript.
          </p>
          
          <div className="space-y-6">
            {numberExamples.map((example, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">Example {idx + 1}:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example}</code>
                </pre>
                <button
                  onClick={() => handleCopy(idx)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === idx ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Number References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Number References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore JavaScript's number-related methods, properties, and concepts.
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

export default Numbers;