import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Math = () => {
  const mathConstants = [
    { name: "Math.E", desc: "returns Euler's number" },
    { name: "Math.PI", desc: "returns PI" },
    { name: "Math.SQRT2", desc: "returns the square root of 2" },
    { name: "Math.SQRT1_2", desc: "returns the square root of 1/2" },
    { name: "Math.LN2", desc: "returns the natural logarithm of 2" },
    { name: "Math.LN10", desc: "returns the natural logarithm of 10" },
    { name: "Math.LOG2E", desc: "returns base 2 logarithm of E" },
    { name: "Math.LOG10E", desc: "returns base 10 logarithm of E" },
  ];

  const roundingMethods = [
    { 
      name: "Math.round(x)", 
      desc: "Returns x rounded to its nearest integer",
      examples: [
        "Math.round(4.6); // 5",
        "Math.round(4.5); // 5",
        "Math.round(4.4); // 4"
      ]
    },
    { 
      name: "Math.ceil(x)", 
      desc: "Returns x rounded up to its nearest integer",
      examples: [
        "Math.ceil(4.9); // 5",
        "Math.ceil(4.7); // 5",
        "Math.ceil(4.4); // 5",
        "Math.ceil(-4.2); // -4"
      ]
    },
    { 
      name: "Math.floor(x)", 
      desc: "Returns x rounded down to its nearest integer",
      examples: [
        "Math.floor(4.9); // 4",
        "Math.floor(4.7); // 4",
        "Math.floor(4.4); // 4",
        "Math.floor(-4.2); // -5"
      ]
    },
    { 
      name: "Math.trunc(x)", 
      desc: "Returns the integer part of x (new in ES6)",
      examples: [
        "Math.trunc(4.9); // 4",
        "Math.trunc(4.7); // 4",
        "Math.trunc(4.4); // 4",
        "Math.trunc(-4.2); // -4"
      ]
    }
  ];

  const otherMethods = [
    { 
      name: "Math.sign(x)", 
      desc: "Returns if x is negative (-1), null (0) or positive (1)",
      examples: [
        "Math.sign(-4); // -1",
        "Math.sign(0); // 0",
        "Math.sign(4); // 1"
      ]
    },
    { 
      name: "Math.pow(x, y)", 
      desc: "Returns the value of x to the power of y",
      examples: ["Math.pow(8, 2); // 64"]
    },
    { 
      name: "Math.sqrt(x)", 
      desc: "Returns the square root of x",
      examples: ["Math.sqrt(64); // 8"]
    },
    { 
      name: "Math.abs(x)", 
      desc: "Returns the absolute (positive) value of x",
      examples: ["Math.abs(-4.7); // 4.7"]
    },
    { 
      name: "Math.min()", 
      desc: "Returns the lowest value in a list of arguments",
      examples: ["Math.min(0, 150, 30, 20, -8, -200); // -200"]
    },
    { 
      name: "Math.max()", 
      desc: "Returns the highest value in a list of arguments",
      examples: ["Math.max(0, 150, 30, 20, -8, -200); // 150"]
    },
    { 
      name: "Math.random()", 
      desc: "Returns a random number between 0 (inclusive) and 1 (exclusive)",
      examples: ["Math.random(); // e.g. 0.123456789"]
    },
    { 
      name: "Math.sin(x)", 
      desc: "Returns the sine of angle x (in radians)",
      examples: ["Math.sin(90 * Math.PI / 180); // 1 (sine of 90 degrees)"]
    },
    { 
      name: "Math.cos(x)", 
      desc: "Returns the cosine of angle x (in radians)",
      examples: ["Math.cos(0 * Math.PI / 180); // 1 (cosine of 0 degrees)"]
    },
    { 
      name: "Math.log(x)", 
      desc: "Returns the natural logarithm of x",
      examples: [
        "Math.log(1); // 0",
        "Math.log(2); // 0.6931471805599453",
        "Math.log(10); // 2.302585092994046"
      ]
    },
    { 
      name: "Math.log2(x)", 
      desc: "Returns the base 2 logarithm of x",
      examples: ["Math.log2(8); // 3"]
    },
    { 
      name: "Math.log10(x)", 
      desc: "Returns the base 10 logarithm of x",
      examples: ["Math.log10(1000); // 3"]
    }
  ];

  const [copied, setCopied] = useState(null);

  const handleCopy = (text, methodName) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(methodName);
        setTimeout(() => setCopied(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Math Object</h1>
          <p className="text-gray-600 text-lg">
            Perform mathematical tasks with the powerful JavaScript Math object and its methods.
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
          <h2 className="text-3xl font-bold mb-4">The Math Object</h2>
          <p className="text-gray-800 mb-3">
            The JavaScript Math object allows you to perform mathematical tasks.
          </p>
          <p className="text-gray-800 mb-3">
            The Math object is static. All methods and properties can be used without creating a Math object first.
          </p>
          <div className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mt-4">
            <code>Math.PI; // Example usage</code>
          </div>
        </section>

        {/* Math Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Math Properties (Constants)</h2>
          <p className="text-gray-700 mb-4">
            JavaScript provides 8 mathematical constants that can be accessed as Math properties:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mathConstants.map((constant, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded">
                <code className="font-mono text-sm block mb-2">{constant.name}</code>
                <p className="text-gray-700 text-sm">{constant.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rounding Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Number to Integer Methods</h2>
          <p className="text-gray-700 mb-4">
            There are 4 common methods to round a number to an integer:
          </p>
          <div className="space-y-6">
            {roundingMethods.map((method, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="mb-4">{method.desc}</p>
                <h4 className="font-semibold mb-2">Examples:</h4>
                <div className="space-y-2">
                  {method.examples.map((example, exIdx) => (
                    <div key={exIdx} className="relative">
                      <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm rounded overflow-x-auto">
                        <code>{example}</code>
                      </pre>
                      <button
                        onClick={() => handleCopy(example, `${method.name}-${exIdx}`)}
                        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {copied === `${method.name}-${exIdx}` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Math Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Math Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherMethods.map((method, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="mb-4">{method.desc}</p>
                <h4 className="font-semibold mb-2">Examples:</h4>
                <div className="space-y-2">
                  {method.examples.map((example, exIdx) => (
                    <div key={exIdx} className="relative">
                      <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm rounded overflow-x-auto">
                        <code>{example}</code>
                      </pre>
                      <button
                        onClick={() => handleCopy(example, `${method.name}-${exIdx}`)}
                        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {copied === `${method.name}-${exIdx}` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <p className="font-semibold">Note:</p>
          <p>Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.</p>
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

export default Math;