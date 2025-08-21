import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Let = () => {
  const references = [
    "JavaScript Const",
    "JavaScript Var",
    "Block Scope",
    "Function Scope",
    "Global Scope",
    "Hoisting",
    "Redeclaring",
    "Browser Support",
    "ES6 Features",
    "Variable Types",
    "Strict Mode",
    "Data Types",
    "Operators",
    "Best Practices",
    "Compatibility"
  ];

  const codeExamples = [
    {
      title: "Block Scope Example",
      code: `{
  let x = 2;
}
// x can NOT be used here`
    },
    {
      title: "Global Scope with var",
      code: `{
  var x = 2;
}
// x CAN be used here`
    },
    {
      title: "Redeclaring with let",
      code: `let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10`
    },
    {
      title: "Difference Between var, let and const",
      code: `// Scope
var: No block scope
let: Block scope
const: Block scope

// Redeclare
var: Allowed
let: Not allowed
const: Not allowed

// Reassign
var: Allowed
let: Allowed
const: Not allowed`
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className=" ">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">JavaScript Let</h1>
          <p className="text-gray-600 text-lg ">
            Understand block-scoped variables with the modern <code className="bg-gray-100 px-1.5 py-0.5 rounded">let</code> keyword in JavaScript.
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
        <section className="bg-[#FFF4A3] p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">The let Keyword</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-yellow-100 px-1.5 py-0.5 rounded">let</code> keyword was introduced in <strong>ES6 (2015)</strong> and provides block scope for variables in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            Unlike <code className="bg-yellow-100 px-1.5 py-0.5 rounded">var</code>, variables declared with <code className="bg-yellow-100 px-1.5 py-0.5 rounded">let</code> cannot be redeclared in the same scope and must be declared before use.
          </p>
          <p className="text-gray-800 mb-6">
            <code className="bg-yellow-100 px-1.5 py-0.5 rounded">let</code> and <code className="bg-yellow-100 px-1.5 py-0.5 rounded">const</code> have similar scoping rules and are preferred over <code className="bg-yellow-100 px-1.5 py-0.5 rounded">var</code> in modern JavaScript development.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg">
            Try Examples Below »
          </button>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            Key Features of let
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">Block Scope</h3>
              <p className="text-gray-700 mb-4">
                Variables declared inside a <code className="bg-gray-100 px-1.5 py-0.5 rounded">{`{ }`}</code> block cannot be accessed from outside:
              </p>
              <pre className="bg-gray-100 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{`{
  let x = 2;
}
// x can NOT be used here`}</code>
              </pre>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-[#04AA6D]">No Redeclaration</h3>
              <p className="text-gray-700 mb-4">
                Variables defined with <code className="bg-gray-100 px-1.5 py-0.5 rounded">let</code> cannot be redeclared in the same scope:
              </p>
              <pre className="bg-gray-100 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{`let x = "John";
let x = 0; // Error: Identifier 'x' already declared`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            Interactive Examples
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {codeExamples.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                    activeTab === idx
                      ? "bg-[#04AA6D] text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
            <div className="relative">
              <pre className="bg-gray-100 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
              <button
                onClick={() => handleCopy(codeExamples[activeTab].code)}
                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-md transition"
                title="Copy code"
              >
                {copied ? <FaCheck className="text-green-600" /> : <FaCopy className="text-gray-600" />}
              </button>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#04AA6D] pl-3">
            var vs let vs const
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#04AA6D] text-white">
                    <th className="py-4 px-6 text-left">Keyword</th>
                    <th className="py-4 px-6 text-left">Scope</th>
                    <th className="py-4 px-6 text-left">Redeclare</th>
                    <th className="py-4 px-6 text-left">Reassign</th>
                    <th className="py-4 px-6 text-left">Hoisted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-mono font-semibold">var</td>
                    <td className="py-4 px-6">No block scope</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-mono font-semibold">let</td>
                    <td className="py-4 px-6">Block scope</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-mono font-semibold">const</td>
                    <td className="py-4 px-6">Block scope</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">Browser Support</h2>
          <p className="text-gray-800 mb-6">
            The <code className="bg-green-100 px-1.5 py-0.5 rounded">let</code> and <code className="bg-green-100 px-1.5 py-0.5 rounded">const</code> keywords are not supported in Internet Explorer 11 or earlier.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-800">First browser versions with full support:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <li className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <div className="font-bold text-[#04AA6D]">Chrome 49</div>
                <div className="text-sm text-gray-600">Mar, 2016</div>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <div className="font-bold text-[#04AA6D]">Edge 12</div>
                <div className="text-sm text-gray-600">Jul, 2015</div>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <div className="font-bold text-[#04AA6D]">Firefox 36</div>
                <div className="text-sm text-gray-600">Jan, 2015</div>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <div className="font-bold text-[#04AA6D]">Safari 11</div>
                <div className="text-sm text-gray-600">Sep, 2017</div>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <div className="font-bold text-[#04AA6D]">Opera 36</div>
                <div className="text-sm text-gray-600">Mar, 2016</div>
              </li>
            </ul>
          </div>
        </section>

        {/* References Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">JavaScript References</h2>
          <p className="text-gray-700 mb-6">
            Explore more JavaScript concepts with our comprehensive references:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-2 rounded-lg transition text-sm shadow-sm"
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

export default Let;