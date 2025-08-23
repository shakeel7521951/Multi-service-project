import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="">
          <h1 className="text-4xl font-bold mb-5 text-gray-800">JavaScript Variables</h1>
          <p className="text-gray-600 text-lg ">
            Learn how to store and manipulate data using JavaScript variables with comprehensive examples and best practices.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Variables are Containers for Storing Data</h2>
          <p className="text-gray-700 mb-3 text-lg">
            JavaScript Variables can be declared in 4 ways: Automatically, using var, using let, or using const.
          </p>
          <p className="text-gray-700 mb-6">
            Understanding variables is fundamental to programming in JavaScript. They allow you to store, retrieve, and manipulate data throughout your application.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg">
            Start Learning JavaScript »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            Variable Declaration Examples
          </h2>
          
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="font-bold text-xl mb-4 text-[#04AA6D]">{example.title}</h3>
                <div className="relative">
                  <pre className="bg-gray-100 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(index)}
                    className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-md transition"
                    title="Copy code"
                  >
                    {copiedIndex === index ? <FaCheck className="text-green-600" /> : <FaCopy className="text-gray-600" />}
                  </button>
                </div>
                {example.note && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-r">
                    <p className="text-yellow-800">{example.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-[#FFF4A3] p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">When to Use var, let, or const?</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800">
            <li className="pb-2 border-b border-yellow-300"><span className="font-semibold">Always declare variables</span> - Avoid using undeclared variables</li>
            <li className="pb-2 border-b border-yellow-300"><span className="font-semibold">Always use const</span> if the value should not be changed</li>
            <li className="pb-2 border-b border-yellow-300"><span className="font-semibold">Always use const</span> if the type should not be changed (Arrays and Objects)</li>
            <li className="pb-2 border-b border-yellow-300"><span className="font-semibold">Only use let</span> if you can't use const</li>
            <li><span className="font-semibold">Only use var</span> if you MUST support old browsers.</li>
          </ol>
        </section>

        {/* Concepts Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            Key Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">JavaScript Identifiers</h3>
              <p className="text-gray-700 mb-3">All JavaScript variables must be identified with unique names. Rules for identifiers:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Can contain letters, digits, underscores, and dollar signs</li>
                <li>Must begin with a letter</li>
                <li>Can also begin with $ and _</li>
                <li>Are case sensitive (y and Y are different)</li>
                <li>Reserved words cannot be used as names</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">The Assignment Operator</h3>
              <p className="text-gray-700 mb-3">In JavaScript, = is an "assignment" operator (not "equal to"). For example:</p>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                x = x + 5 // Valid in JavaScript (assigns new value to x)
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 md:col-span-2">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">Data Types</h3>
              <p className="text-gray-700 mb-3">JavaScript variables can hold different data types:</p>
              <ul className="list-disc pl-5 columns-2 space-y-2 text-gray-700">
                <li>Numbers (let age = 25)</li>
                <li>Strings (let name = "John")</li>
                <li>Booleans (let active = true)</li>
                <li>Objects (let person = {"{firstName: 'John', lastName: 'Doe'}"})</li>
                <li>Arrays (let colors = ["red", "green", "blue"])</li>
                <li>Null (let data = null)</li>
                <li>Undefined (let value; // value is undefined)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">JavaScript References</h2>
          <p className="text-gray-700 mb-6">
            Explore our JavaScript references to deepen your understanding of variables and other concepts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-2 rounded-lg transition text-sm"
              >
                {ref}
              </div>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Variables;