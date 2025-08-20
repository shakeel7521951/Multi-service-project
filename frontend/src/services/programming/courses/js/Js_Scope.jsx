import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Scope = () => {
  const examples = [
    {
      title: "Block Scope with let",
      code: `{
  let x = 2;
}
// x can NOT be used here`,
    },
    {
      title: "Block Scope with var",
      code: `{
  var x = 2;
}
// x CAN be used here`,
    },
    {
      title: "Local Scope in Function",
      code: `function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName`,
    },
    {
      title: "Function Scope with var, let, const",
      code: `function myFunction() {
  var carName = "Volvo";
}
function myFunction() {
  let carName = "Volvo";
}
function myFunction() {
  const carName = "Volvo";
}`,
    },
    {
      title: "Global Variable Example",
      code: `let carName = "Volvo";

function myFunction() {
  // code here can also use carName
}`,
    },
    {
      title: "Automatically Global Variable",
      code: `function myFunction() {
  carName = "Volvo";
}

myFunction();
// carName is now GLOBAL`,
    },
    {
      title: "Global Variables in Window Object",
      code: `var carName = "Volvo";
// window.carName → accessible

let carName = "Volvo";
// window.carName → undefined`,
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Scope</h1>
          <p className="text-gray-600 text-lg">
            Understand how scope works in JavaScript: Global, Function, and Block scopes explained with examples.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is JavaScript Scope?</h2>
          <p className="text-gray-800 mb-3">
            Scope determines the accessibility (visibility) of variables. JavaScript has:
          </p>
          <ul className="list-disc pl-6 text-gray-800 mb-6 space-y-1">
            <li>Block Scope</li>
            <li>Function Scope</li>
            <li>Global Scope</li>
          </ul>
          <p className="text-gray-800 mb-3">
            Variables declared with <code>let</code> and <code>const</code> (introduced in ES6) have block scope, while those with <code>var</code> may behave differently.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn By Examples »
          </button>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Code Examples</h2>
          <p className="text-gray-700 mb-4">
            Explore how different scopes work using practical JavaScript code snippets.
          </p>
          <div className="space-y-8">
            {examples.map((ex, index) => (
              <div
                key={index}
                className="bg-[#E7E9EB] p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-bold mb-3">{ex.title}</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{ex.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(ex.code, index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Reference */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Summary: Scope Types</h2>
          <p className="text-gray-700 mb-4">
            Here’s a quick reference for the different types of scope in JavaScript:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>Block Scope</strong>: Available within <code>{`{}`}</code>. Introduced with <code>let</code> and <code>const</code>.</li>
            <li><strong>Function Scope</strong>: Variables defined inside a function.</li>
            <li><strong>Global Scope</strong>: Variables accessible from anywhere.</li>
            <li><strong>Automatically Global</strong>: Undeclared variables become global (not in strict mode).</li>
            <li><strong>Window Object</strong>: <code>var</code> variables attach to <code>window</code>, <code>let</code> and <code>const</code> do not.</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
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


export default Js_Scope;
