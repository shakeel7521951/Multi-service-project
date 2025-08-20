import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Let</h1>
          <p className="text-gray-600 text-lg">
            Understand block-scoped variables with the modern <code>let</code> keyword in JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">The let Keyword</h2>
          <p className="text-gray-800 mb-3">
            The <code>let</code> keyword was introduced in <strong>ES6 (2015)</strong> and provides block scope for variables in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            Unlike <code>var</code>, variables declared with <code>let</code> cannot be redeclared in the same scope and must be declared before use.
          </p>
          <p className="text-gray-800 mb-6">
            <code>let</code> and <code>const</code> have similar scoping rules and are preferred over <code>var</code> in modern JavaScript development.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features of let</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Block Scope</h3>
              <p className="text-gray-700 mb-3">
                Variables declared inside a <code>{`{ }`}</code> block cannot be accessed from outside:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded">
                <code>{`{
  let x = 2;
}
// x can NOT be used here`}</code>
              </pre>
            </div>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">No Redeclaration</h3>
              <p className="text-gray-700 mb-3">
                Variables defined with <code>let</code> cannot be redeclared in the same scope:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded">
                <code>{`let x = "John";
let x = 0; // Error: Identifier 'x' already declared`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Examples</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="flex gap-4 mb-4 overflow-x-auto">
              {codeExamples.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded font-medium whitespace-nowrap ${
                    activeTab === idx
                      ? "bg-[#04AA6D] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExamples[activeTab].code}</code>
            </pre>
            <button
              onClick={() => handleCopy(codeExamples[activeTab].code)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">var vs let vs const</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="py-3 px-4 text-left">Keyword</th>
                  <th className="py-3 px-4 text-left">Scope</th>
                  <th className="py-3 px-4 text-left">Redeclare</th>
                  <th className="py-3 px-4 text-left">Reassign</th>
                  <th className="py-3 px-4 text-left">Hoisted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono">var</td>
                  <td className="py-3 px-4">No block scope</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono">let</td>
                  <td className="py-3 px-4">Block scope</td>
                  <td className="py-3 px-4">No</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono">const</td>
                  <td className="py-3 px-4">Block scope</td>
                  <td className="py-3 px-4">No</td>
                  <td className="py-3 px-4">No</td>
                  <td className="py-3 px-4">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Browser Support</h2>
          <p className="text-gray-800 mb-4">
            The <code>let</code> and <code>const</code> keywords are not supported in Internet Explorer 11 or earlier.
          </p>
          <div className="bg-white p-4 rounded">
            <h3 className="font-semibold mb-2">First browser versions with full support:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <li className="bg-gray-100 p-3 rounded text-center">
                <div className="font-bold">Chrome 49</div>
                <div className="text-sm">Mar, 2016</div>
              </li>
              <li className="bg-gray-100 p-3 rounded text-center">
                <div className="font-bold">Edge 12</div>
                <div className="text-sm">Jul, 2015</div>
              </li>
              <li className="bg-gray-100 p-3 rounded text-center">
                <div className="font-bold">Firefox 36</div>
                <div className="text-sm">Jan, 2015</div>
              </li>
              <li className="bg-gray-100 p-3 rounded text-center">
                <div className="font-bold">Safari 11</div>
                <div className="text-sm">Sep, 2017</div>
              </li>
              <li className="bg-gray-100 p-3 rounded text-center">
                <div className="font-bold">Opera 36</div>
                <div className="text-sm">Mar, 2016</div>
              </li>
            </ul>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more JavaScript concepts with our comprehensive references:
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

export default Let;