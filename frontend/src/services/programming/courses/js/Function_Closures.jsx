import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Function_Closures = () => {
  const references = [
    "Variable Scope",
    "Global Variables",
    "Local Variables",
    "Function Scope",
    "Block Scope",
    "Lexical Scoping",
    "IIFE Patterns",
    "Module Patterns",
    "Currying",
    "Memoization",
    "Private Methods",
    "Event Handlers",
    "Callbacks",
    "Timers",
    "Encapsulation"
  ];

  const closureExample = `function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
add(); // Returns 1
add(); // Returns 2
add(); // Returns 3`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(closureExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Closures</h1>
          <p className="text-gray-600 text-lg">
            Understand one of JavaScript's most powerful concepts with practical examples
            and clear explanations.
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
        <section className="bg-[#E7F5FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Understanding Closures</h2>
          <p className="text-gray-800 mb-3">
            JavaScript variables can belong to the <strong>local scope</strong> or the <strong>global scope</strong>.
          </p>
          <p className="text-gray-800 mb-3">
            Global variables can be made local (private) with closures. Closures make it possible
            for functions to have "private" variables that persist between function calls.
          </p>
          <p className="text-gray-800 mb-6">
            Closures are created every time a function is created, at function creation time.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More About Scope »
          </button>
        </section>

        {/* Variable Scope Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variable Scope</h2>
          
          <div className="space-y-6">
            <div className="bg-[#FFF4CE] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Local Variables</h3>
              <p className="text-gray-700 mb-3">
                A local variable is a "private" variable defined inside a function.
                A function can access all variables in its local scope.
              </p>
              <pre className="bg-white border-l-4 border-[#FFC107] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`function myFunction() {
  let a = 4;
  return a * a;
}`}</code>
              </pre>
            </div>

            <div className="bg-[#E8F5E9] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Global Variables</h3>
              <p className="text-gray-700 mb-3">
                A global variable is a "public" variable defined outside any function.
                All scripts on the page can access and modify global variables.
              </p>
              <pre className="bg-white border-l-4 border-[#4CAF50] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`let a = 4;
function myFunction() {
  return a * a;
}`}</code>
              </pre>
            </div>

            <div className="bg-[#FFEBEE] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Variable Lifetime</h3>
              <p className="text-gray-700 mb-3">
                Global variables live until the page is discarded. Local variables
                are created when the function is invoked and deleted when it finishes.
              </p>
              <p className="text-gray-700 font-semibold">
                Note: Undeclared variables (without var, let, const) are always global.
              </p>
            </div>
          </div>
        </section>

        {/* Closure Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practical Closure Example
          </h2>
          <p className="text-gray-700 mb-4">
            This example demonstrates how closures can maintain private state between function calls.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Counter Using Closure:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{closureExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <div className="mt-6 bg-[#F3E5F5] p-6 rounded-xl">
            <h3 className="font-bold mb-3">How It Works:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><code>myCounter()</code> runs once and initializes <code>counter</code> to 0</li>
              <li>It returns a function expression that has access to the <code>counter</code></li>
              <li>The variable <code>add</code> becomes a function with "private" access to <code>counter</code></li>
              <li>Each time <code>add()</code> is called, it increments its private <code>counter</code></li>
              <li>The counter is protected by the closure and can only be modified through <code>add()</code></li>
            </ul>
          </div>
        </section>

        {/* Uses of Closures */}
        <section className="bg-[#E8EAF6] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Practical Uses of Closures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Data Privacy</h3>
              <p>Create private variables that can only be accessed through specific functions.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">State Preservation</h3>
              <p>Maintain state between function calls in event handlers and callbacks.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Module Pattern</h3>
              <p>Implement the module pattern to create encapsulated components.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Currying</h3>
              <p>Create functions that return functions with preset arguments.</p>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to deepen your understanding of closures,
            scope, and other advanced concepts.
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

export default Function_Closures;
