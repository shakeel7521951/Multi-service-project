import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Number_Methods = () => {
  const references = [
    "Number Methods",
    "Number Properties",
    "Math Object",
    "Random Numbers",
    "Number Conversions",
    "BigInt",
    "Number Systems",
    "Floating Point",
    "Infinity",
    "NaN",
    "Number Objects",
    "Global Methods",
    "Type Conversion",
    "Bitwise Operations",
    "Number Constants"
  ];

  const basicMethods = [
    {
      name: "toString()",
      description: "Returns a number as a string",
      example: `let x = 123;\nx.toString();\n(123).toString();\n(100 + 23).toString();`
    },
    {
      name: "toExponential()",
      description: "Returns a string with exponential notation",
      example: `let x = 9.656;\nx.toExponential(2);  // "9.66e+0"\nx.toExponential(4);  // "9.6560e+0"`
    },
    {
      name: "toFixed()",
      description: "Returns a string with specified decimals (great for money)",
      example: `let x = 9.656;\nx.toFixed(0);  // "10"\nx.toFixed(2);  // "9.66"\nx.toFixed(4);  // "9.6560"`
    },
    {
      name: "toPrecision()",
      description: "Returns a string with specified length",
      example: `let x = 9.656;\nx.toPrecision();   // "9.656"\nx.toPrecision(2);  // "9.7"\nx.toPrecision(4);  // "9.656"`
    },
    {
      name: "valueOf()",
      description: "Returns a number as a number (rarely used directly)",
      example: `let x = 123;\nx.valueOf();\n(123).valueOf();\n(100 + 23).valueOf();`
    }
  ];

  const staticMethods = [
    {
      name: "Number.isFinite()",
      description: "Checks if value is finite (not Infinity or NaN)",
      example: `Number.isFinite(123);  // true\nNumber.isFinite(Infinity);  // false`
    },
    {
      name: "Number.isInteger()",
      description: "Checks if value is an integer",
      example: `Number.isInteger(10);  // true\nNumber.isInteger(10.5);  // false`
    },
    {
      name: "Number.isNaN()",
      description: "Checks if value is NaN (Not a Number)",
      example: `Number.isNaN(NaN);  // true\nNumber.isNaN(123);  // false`
    },
    {
      name: "Number.isSafeInteger()",
      description: "Checks if value is a safe integer (-(2⁵³-1) to 2⁵³-1)",
      example: `Number.isSafeInteger(10);  // true\nNumber.isSafeInteger(12345678901234567890);  // false`
    },
    {
      name: "Number.parseInt()",
      description: "Converts string to a whole number (same as global parseInt())",
      example: `Number.parseInt("10");  // 10\nNumber.parseInt("10.33");  // 10\nNumber.parseInt("years 10");  // NaN`
    },
    {
      name: "Number.parseFloat()",
      description: "Converts string to a number (same as global parseFloat())",
      example: `Number.parseFloat("10.33");  // 10.33\nNumber.parseFloat("10 20 30");  // 10\nNumber.parseFloat("years 10");  // NaN`
    }
  ];

  const conversionExamples = `// Number() conversions
Number(true);        // 1
Number(false);       // 0
Number("10");        // 10
Number("10.33");     // 10.33
Number("10,33");     // NaN
Number("10 33");     // NaN
Number(new Date());  // milliseconds since 1970

// parseInt() examples
parseInt("-10");       // -10
parseInt("-10.33");    // -10
parseInt("10 years");  // 10

// parseFloat() examples
parseFloat("10.33");    // 10.33
parseFloat("10 20 30"); // 10
parseFloat("years 10"); // NaN`;

  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Number Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript number manipulation with these essential methods and conversion techniques.
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
          <h2 className="text-3xl font-bold mb-4">Working with Numbers in JavaScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript provides powerful methods to work with numbers, including conversion, formatting, and validation.
          </p>
          <p className="text-gray-800 mb-3">
            Numbers in JavaScript can be primitive values (typeof = number) or objects (typeof = object). All number methods can be used on any type of numbers.
          </p>
          <p className="text-gray-800 mb-6">
            Learn to manipulate numbers effectively with these comprehensive references and examples.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Live »
          </button>
        </section>

        {/* Basic Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Number Methods</h2>
          <p className="text-gray-700 mb-6">
            These methods can be used on any JavaScript number (literals, variables, or expressions):
          </p>
          
          <div className="space-y-6">
            {basicMethods.map((method, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="text-gray-700 mb-3">{method.description}</p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{method.example}</code>
                </pre>
                <button
                  onClick={() => handleCopy(method.example)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Example"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Static Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Static Number Methods</h2>
          <p className="text-gray-700 mb-6">
            These methods belong to the Number object and must be called as Number.method():
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticMethods.map((method, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="text-gray-700 mb-3">{method.description}</p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{method.example}</code>
                </pre>
                <button
                  onClick={() => handleCopy(method.example)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Example"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Number Conversion Methods</h2>
          <p className="text-gray-700 mb-4">
            Convert strings and other types to numbers with these global methods:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Conversion Examples:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{conversionExamples}</code>
            </pre>
            <button
              onClick={() => handleCopy(conversionExamples)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy All Examples"}
            </button>
          </div>
        </section>

        {/* Number References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Number References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our complete JavaScript number references for detailed information about all number-related features:
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


export default Number_Methods;
