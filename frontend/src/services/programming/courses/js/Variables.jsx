import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Variables = () => {
  const references = [
    "Data Types",
    "Operators",
    "Functions",
    "Objects",
    "Arrays",
    "Scope",
    "Hoisting",
    "Closures",
    "ES6 Features",
    "Type Conversion",
    "Strict Mode",
    "Best Practices",
    "Common Mistakes",
    "Debugging",
    "Performance"
  ];

  const examples = [
    {
      title: "Automatic Declaration",
      code: `x = 5;\ny = 6;\nz = x + y;`,
      note: "Undeclared variables are automatically global"
    },
    {
      title: "Using var",
      code: `var x = 5;\nvar y = 6;\nvar z = x + y;`,
      note: "Function-scoped declaration"
    },
    {
      title: "Using let",
      code: `let x = 5;\nlet y = 6;\nlet z = x + y;`,
      note: "Block-scoped declaration"
    },
    {
      title: "Using const",
      code: `const x = 5;\nconst y = 6;\nconst z = x + y;`,
      note: "Block-scoped constant that can't be reassigned"
    },
    {
      title: "Mixed Example",
      code: `const price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;`,
      note: "Constants for fixed values, let for changeable ones"
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Variables</h1>
          <p className="text-gray-600 text-lg">
            Learn how to store and manipulate data using JavaScript variables.
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
          <h2 className="text-3xl font-bold mb-4">Variables are Containers for Storing Data</h2>
          <p className="text-gray-800 mb-3">
            JavaScript Variables can be declared in 4 ways: Automatically, using var, using let, or using const.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding variables is fundamental to programming in JavaScript. They allow you to store, retrieve, and manipulate data throughout your application.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Variable Declaration Examples
          </h2>
          
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                {example.note && (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mt-3">
                    <p className="text-yellow-800">{example.note}</p>
                  </div>
                )}
                <button
                  onClick={() => handleCopy(index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">When to Use var, let, or const?</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Always declare variables</li>
            <li>Always use const if the value should not be changed</li>
            <li>Always use const if the type should not be changed (Arrays and Objects)</li>
            <li>Only use let if you can't use const</li>
            <li>Only use var if you MUST support old browsers.</li>
          </ol>
        </section>

        {/* Concepts Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">JavaScript Identifiers</h3>
              <p>All JavaScript variables must be identified with unique names. Rules for identifiers:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Can contain letters, digits, underscores, and dollar signs</li>
                <li>Must begin with a letter</li>
                <li>Can also begin with $ and _</li>
                <li>Are case sensitive (y and Y are different)</li>
                <li>Reserved words cannot be used as names</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">The Assignment Operator</h3>
              <p>In JavaScript, = is an "assignment" operator (not "equal to"). For example:</p>
              <p className="font-mono bg-white p-2 mt-2 rounded">x = x + 5 // Valid in JavaScript (assigns new value to x)</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Data Types</h3>
              <p>JavaScript variables can hold different data types:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Numbers (let age = 25)</li>
                <li>Strings (let name = "John")</li>
                <li>Booleans (let active = true)</li>
                <li>Objects (let person = {"{firstName: 'John', lastName: 'Doe'}"})</li>
                <li>Arrays (let colors = ["red", "green", "blue"])</li>
              </ul>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to deepen your understanding of variables and other concepts.
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

export default Variables;