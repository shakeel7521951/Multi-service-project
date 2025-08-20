import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Math_Reference = () => {
  const mathMethods = [
    { name: "abs(x)", description: "Returns the absolute value of x" },
    { name: "acos(x)", description: "Returns the arccosine of x, in radians" },
    { name: "acosh(x)", description: "Returns the hyperbolic arccosine of x" },
    { name: "asin(x)", description: "Returns the arcsine of x, in radians" },
    { name: "asinh(x)", description: "Returns the hyperbolic arcsine of x" },
    { name: "atan(x)", description: "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians" },
    { name: "atan2(y, x)", description: "Returns the arctangent of the quotient of its arguments" },
    { name: "atanh(x)", description: "Returns the hyperbolic arctangent of x" },
    { name: "cbrt(x)", description: "Returns the cubic root of x" },
    { name: "ceil(x)", description: "Returns x, rounded upwards to the nearest integer" },
    { name: "clz32(x)", description: "Returns the number of leading zeros in a 32-bit binary representation of x" },
    { name: "cos(x)", description: "Returns the cosine of x (x is in radians)" },
    { name: "cosh(x)", description: "Returns the hyperbolic cosine of x" },
    { name: "E", description: "Returns Euler's number (approx. 2.718)" },
    { name: "exp(x)", description: "Returns the value of Ex" },
    { name: "expm1(x)", description: "Returns the value of Ex minus 1" },
    { name: "floor(x)", description: "Returns x, rounded downwards to the nearest integer" },
    { name: "fround(x)", description: "Returns the nearest (32-bit single precision) float representation of a number" },
    { name: "LN2", description: "Returns the natural logarithm of 2 (approx. 0.693)" },
    { name: "LN10", description: "Returns the natural logarithm of 10 (approx. 2.302)" },
    { name: "log(x)", description: "Returns the natural logarithm of x" },
    { name: "log10(x)", description: "Returns the base-10 logarithm of x" },
    { name: "log1p(x)", description: "Returns the natural logarithm of 1 + x" },
    { name: "log2(x)", description: "Returns the base-2 logarithm of x" },
    { name: "max(x1,x2,..)", description: "Returns the number with the highest value" },
    { name: "min(x1,x2,..)", description: "Returns the number with the lowest value" },
    { name: "PI", description: "Returns PI (approx. 3.14)" },
    { name: "pow(x, y)", description: "Returns the value of x to the power of y" },
    { name: "random()", description: "Returns a random number between 0 and 1" },
    { name: "round(x)", description: "Rounds x to the nearest integer" },
    { name: "sign(x)", description: "Returns the sign of a number (checks whether it is positive, negative or zero)" },
    { name: "sin(x)", description: "Returns the sine of x (x is in radians)" },
    { name: "sinh(x)", description: "Returns the hyperbolic sine of x" },
    { name: "sqrt(x)", description: "Returns the square root of x" },
    { name: "tan(x)", description: "Returns the tangent of an angle" },
    { name: "tanh(x)", description: "Returns the hyperbolic tangent of a number" },
    { name: "trunc(x)", description: "Returns the integer part of a number (x)" }
  ];

  const exampleCode = `// Math examples
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
const randomNum = Math.random();
const rounded = Math.round(3.7);

console.log(\`Area: \${area}, Random: \${randomNum}, Rounded: \${rounded}\`);
`;

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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Math Reference</h1>
          <p className="text-gray-600 text-lg">
            Complete reference guide for all JavaScript Math properties and methods.
          </p>
          <p className="text-gray-500 text-sm mt-1">Revised July 2025</p>
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Math Object</h2>
          <p className="text-gray-800 mb-3">
            The Math object allows you to perform mathematical tasks and includes properties and methods for mathematical constants and functions.
          </p>
          <p className="text-gray-800 mb-6">
            Unlike other objects, the Math object has no constructor. All properties and methods of Math are static.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Math Examples »
          </button>
        </section>

        {/* Reference Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Math Methods and Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Name</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {mathMethods.map((method, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b font-mono text-[#04AA6D]">{method.name}</td>
                    <td className="py-3 px-4 border-b">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Math Usage Examples
          </h2>
          <p className="text-gray-700 mb-4">
            See how to use Math methods in real JavaScript code.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
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

        {/* Full Reference Link */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Complete JavaScript Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples:
          </p>
          <a 
            href="https://www.w3schools.com/jsref/" 
            className="text-[#04AA6D] hover:underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools' Full JavaScript Reference
          </a>
          <p className="text-gray-600 mt-2">
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

export default Math_Reference;