import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Number_Reference = () => {
  const numberProperties = [
    { name: "constructor", description: "Returns the function that created JavaScript's Number prototype" },
    { name: "EPSILON", description: "Returns the difference between 1 and the smallest number greater than 1" },
    { name: "isFinite()", description: "Checks whether a value is a finite number" },
    { name: "isInteger()", description: "Checks whether a value is an integer" },
    { name: "isNaN()", description: "Checks whether a value is Number.NaN" },
    { name: "isSafeInteger()", description: "Checks whether a value is a safe integer" },
    { name: "MAX_SAFE_INTEGER", description: "Returns the maximum safe integer in JavaScript" },
    { name: "MIN_SAFE_INTEGER", description: "Returns the minimum safe integer in JavaScript" },
    { name: "MAX_VALUE", description: "Returns the largest number possible in JavaScript" },
    { name: "MIN_VALUE", description: "Returns the smallest number possible in JavaScript" },
    { name: "NaN", description: "Represents a 'Not-a-Number' value" },
    { name: "NEGATIVE_INFINITY", description: "Represents negative infinity (returned on overflow)" },
    { name: "POSITIVE_INFINITY", description: "Represents infinity (returned on overflow)" },
    { name: "parseFloat()", description: "Parses a string and returns a number" },
    { name: "parseInt()", description: "Parses a string and returns a whole number" },
    { name: "prototype", description: "Allows you to add properties and methods to an object" },
    { name: "toExponential(x)", description: "Converts a number into an exponential notation" },
    { name: "toFixed(x)", description: "Formats a number with x numbers of digits after the decimal point" },
    { name: "toLocaleString()", description: "Converts a number into a string, based on the locale settings" },
    { name: "toPrecision(x)", description: "Formats a number to x length" },
    { name: "toString()", description: "Converts a number to a string" },
    { name: "valueOf()", description: "Returns the primitive value of a number" }
  ];

  const exampleCode = `// Number methods examples
let num = 123.456;

console.log(num.toFixed(2)); // "123.46"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(Number.isInteger(num)); // false
console.log(Number.parseFloat("123.45abc")); // 123.45`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(exampleCode)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Number Reference</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-lg">
              Complete reference for JavaScript Number properties and methods
            </p>
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Revised July 2025</span>
          </div>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Note Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="font-medium">NOTE</p>
          <p>All number methods return a new value. They do not change the original number.</p>
        </div>

        {/* Reference Table */}
        <section>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {numberProperties.map((prop, index) => (
                  <tr 
                    key={index} 
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="py-3 px-4 font-mono text-blue-700">{prop.name}</td>
                    <td className="py-3 px-4">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Number Methods Examples</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Try it yourself:</h3>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-4 py-1 rounded transition text-sm"
              >
                {copied ? "Copied!" : <><FaCopy size={12} /> Copy</>}
              </button>
            </div>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
          </div>
        </section>

        {/* Full Reference Link */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Complete JavaScript Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples, go to:
          </p>
          <p className="font-bold mb-4">W3Schools' Full JavaScript Reference.</p>
          <p className="text-gray-800">
            The reference includes all JavaScript updates from 1999 to 2025.
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

export default Number_Reference;
