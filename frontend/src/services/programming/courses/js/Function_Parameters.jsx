import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Function_Parameters = () => {
  const references = [
    "Function Declarations",
    "Function Expressions",
    "Arrow Functions",
    "Function Parameters",
    "Function Invocation",
    "Function Callbacks",
    "Function Closures",
    "Function Methods",
    "Function Properties",
    "Function Constructors",
    "Function Hoisting",
    "Self-Invoking Functions",
    "Function Objects",
    "Function Binding",
    "Function Context"
  ];

  const functionDeclarationExample = `function myFunction(a, b) {
  return a * b;
}`;

  const functionExpressionExample = `const x = function(a, b) {
  return a * b;
};`;

  const arrowFunctionExample = `const x = (a, b) => a * b;`;

  const [copied, setCopied] = useState({
    declaration: false,
    expression: false,
    arrow: false
  });

  const handleCopy = (type, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied({ ...copied, [type]: true });
        setTimeout(() => setCopied({ ...copied, [type]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Function Parameters</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript functions - the building blocks of interactive web applications.
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
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Understanding JavaScript Functions</h2>
          <p className="text-gray-800 mb-3">
            JavaScript functions are defined with the <code className="bg-gray-100 px-1 rounded">function</code> keyword.
            You can use a function declaration or a function expression.
          </p>
          <p className="text-gray-800 mb-6">
            Functions are first-class objects in JavaScript, meaning they can be passed around like any other value.
            Modern JavaScript also introduces arrow functions with a concise syntax.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Function Declaration Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Declarations</h2>
          <p className="text-gray-700 mb-4">
            Declared functions are not executed immediately. They are "saved for later use", and will be executed when invoked.
            Function declarations are hoisted to the top of their scope.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{functionDeclarationExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("declaration", functionDeclarationExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.declaration ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Function Expression Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Expressions</h2>
          <p className="text-gray-700 mb-4">
            A function expression can be stored in a variable. These functions can be anonymous (without a name)
            and are not hoisted like function declarations.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{functionExpressionExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("expression", functionExpressionExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.expression ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Arrow Function Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Arrow Functions (ES6)</h2>
          <p className="text-gray-700 mb-4">
            Arrow functions provide a concise syntax for writing function expressions. They don't have their own <code className="bg-gray-100 px-1 rounded">this</code>,
            and are always anonymous.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{arrowFunctionExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("arrow", arrowFunctionExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.arrow ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Key Function Concepts</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Function Hoisting</h3>
              <p className="text-gray-700">
                Function declarations are hoisted (moved to the top of their scope), allowing them to be called before they're defined.
                Function expressions are not hoisted.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Self-Invoking Functions</h3>
              <p className="text-gray-700">
                Function expressions can execute automatically when followed by <code className="bg-gray-100 px-1 rounded">()</code>.
                These are often used to create private scopes.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Functions as Objects</h3>
              <p className="text-gray-700">
                JavaScript functions are objects with properties and methods. The <code className="bg-gray-100 px-1 rounded">arguments.length</code> property
                returns the number of arguments received.
              </p>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Function References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to master all aspects of JavaScript functions.
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


export default Function_Parameters;
