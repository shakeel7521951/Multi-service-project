import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Type_Of = () => {
  const references = [
    "JavaScript Data Types",
    "Primitive Types",
    "Complex Types",
    "typeof Examples",
    "instanceof Operator",
    "Array Detection",
    "Null vs Undefined",
    "Constructor Property",
    "Void Operator",
    "Type Conversion",
    "Strict vs Loose Equality",
    "NaN Properties",
    "BigInt Usage",
    "Symbol Usage",
    "Object Prototypes"
  ];

  const codeExample1 = `typeof "John"          // Returns "string"
typeof 3.14            // Returns "number"
typeof true            // Returns "boolean"
typeof undefined       // Returns "undefined"
typeof null            // Returns "object" (historical bug)
typeof Symbol()        // Returns "symbol"
typeof 123n            // Returns "bigint"`;

  const codeExample2 = `// Arrays
typeof [1,2,3]         // Returns "object"
Array.isArray([1,2,3]) // Returns true

// Dates
typeof new Date()      // Returns "object"
date instanceof Date   // Returns true

// Functions
typeof function() {}   // Returns "function"`;

  const [copied, setCopied] = useState(null);

  const handleCopy = (exampleNum) => {
    const textToCopy = exampleNum === 1 ? codeExample1 : codeExample2;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(exampleNum);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript typeof Operator</h1>
          <p className="text-gray-600 text-lg">
            Understand JavaScript data types and how to check them with the typeof operator.
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
          <h2 className="text-3xl font-bold mb-4">The typeof Operator</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-100 px-1 rounded">typeof</code> operator returns a string indicating the type of the unevaluated operand.
          </p>
          <p className="text-gray-800 mb-3">
            It's essential for type checking in JavaScript, especially in dynamically typed code where variable types can change.
          </p>
          <p className="text-gray-800 mb-6">
            JavaScript has 7 primitive data types and 1 complex data type (object). The <code className="bg-gray-100 px-1 rounded">typeof</code> operator helps identify these types at runtime.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Now »
          </button>
        </section>

        {/* Primitive Types Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Primitive Data Types</h2>
          <p className="text-gray-700 mb-4">
            JavaScript has 7 primitive data types:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded">string</code> - textual data</li>
            <li><code className="bg-gray-100 px-1 rounded">number</code> - numeric values (including <code className="bg-gray-100 px-1 rounded">NaN</code>)</li>
            <li><code className="bg-gray-100 px-1 rounded">boolean</code> - <code className="bg-gray-100 px-1 rounded">true</code> or <code className="bg-gray-100 px-1 rounded">false</code></li>
            <li><code className="bg-gray-100 px-1 rounded">bigint</code> - arbitrary precision integers</li>
            <li><code className="bg-gray-100 px-1 rounded">symbol</code> - unique identifiers</li>
            <li><code className="bg-gray-100 px-1 rounded">null</code> - intentional absence of value (but returns "object")</li>
            <li><code className="bg-gray-100 px-1 rounded">undefined</code> - uninitialized variables</li>
          </ul>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Primitive Type Examples:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample1}</code>
            </pre>
            <button
              onClick={() => handleCopy(1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Complex Types Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Complex Data Types</h2>
          <p className="text-gray-700 mb-4">
            For complex types, <code className="bg-gray-100 px-1 rounded">typeof</code> mostly returns "object":
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Objects: <code className="bg-gray-100 px-1 rounded">typeof {}</code> → "object"</li>
            <li>Arrays: <code className="bg-gray-100 px-1 rounded">typeof []</code> → "object"</li>
            <li>Dates: <code className="bg-gray-100 px-1 rounded">typeof new Date()</code> → "object"</li>
            <li>Functions: <code className="bg-gray-100 px-1 rounded">typeof function(){}</code> → "function"</li>
          </ul>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Checking Complex Types:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample2}</code>
            </pre>
            <button
              onClick={() => handleCopy(2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Special Cases Section */}
        <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Special Cases</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-yellow-700">Null</h3>
              <p className="text-yellow-800">
                <code className="bg-yellow-100 px-1 rounded">typeof null</code> returns "object" due to a historical bug in JavaScript.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-700">Undefined vs Null</h3>
              <p className="text-yellow-800">
                <code className="bg-yellow-100 px-1 rounded">undefined == null</code> → true (loose equality)<br />
                <code className="bg-yellow-100 px-1 rounded">undefined === null</code> → false (strict equality)
              </p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-700">NaN</h3>
              <p className="text-yellow-800">
                Despite meaning "Not a Number", <code className="bg-yellow-100 px-1 rounded">typeof NaN</code> returns "number".
              </p>
            </div>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Type References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore these references to deepen your understanding of JavaScript's type system and related operators.
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

export default Type_Of;
