import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Syntax = () => {
  const references = [
    "Variables",
    "Data Types",
    "Operators",
    "Functions",
    "Objects",
    "Arrays",
    "Events",
    "Strings",
    "Numbers",
    "Dates",
    "Math",
    "Booleans",
    "Comparisons",
    "Conditions",
    "Loops"
  ];

  const jsExample = `// JavaScript Example
// Variables and operations
let x = 5;
let y = 6;
let z = x + y;

// Function example
function greet(name) {
  return "Hello " + name;
}

// Output
console.log(greet("John"), z);`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Syntax</h1>
          <p className="text-gray-600 text-lg">
            Learn the fundamental syntax rules that power JavaScript programming.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Syntax Basics</h2>
          <p className="text-gray-800 mb-3">
            JavaScript syntax is the set of rules that define how programs are constructed.
            It includes how to create variables, functions, and how to write values.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding syntax is crucial for writing error-free code that browsers can execute properly.
          </p>
          <button className="bg-[#FFC0C7] hover:bg-[#ffa8b1] text-black font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Syntax Sections */}
        <section className="space-y-8">
          {/* Values */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Values</h2>
            <p className="mb-4">The JavaScript syntax defines two types of values:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Fixed values</strong> (called Literals)</li>
              <li><strong>Variable values</strong> (called Variables)</li>
            </ul>
          </div>

          {/* Literals */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Literals</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">1. Numbers:</h3>
              <pre className="bg-gray-100 p-2 rounded">10.50<br/>1001</pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Strings:</h3>
              <pre className="bg-gray-100 p-2 rounded">"John Doe"<br/>'John Doe'</pre>
            </div>
          </div>

          {/* Variables */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Variables</h2>
            <p className="mb-4">
              JavaScript uses <code className="bg-gray-100 px-1 rounded">var</code>, <code className="bg-gray-100 px-1 rounded">let</code> and <code className="bg-gray-100 px-1 rounded">const</code> to declare variables.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              let x;<br/>
              x = 6;
            </pre>
          </div>

          {/* Operators */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Operators</h2>
            <p className="mb-2">Arithmetic operators:</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">(5 + 6) * 10</pre>
            <p className="mb-2">Assignment operator:</p>
            <pre className="bg-gray-100 p-2 rounded">
              let x, y;<br/>
              x = 5;<br/>
              y = 6;
            </pre>
          </div>

          {/* Expressions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Expressions</h2>
            <p className="mb-4">An expression is a combination of values, variables, and operators that computes to a value.</p>
            <pre className="bg-gray-100 p-2 rounded mb-2">5 * 10</pre>
            <pre className="bg-gray-100 p-2 rounded">"John" + " " + "Doe"  // Evaluates to "John Doe"</pre>
          </div>

          {/* Keywords */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Keywords</h2>
            <p className="mb-4">Keywords identify actions to be performed:</p>
            <pre className="bg-gray-100 p-2 rounded">
              let x, y;<br/>
              x = 5 + 6;<br/>
              y = x * 10;
            </pre>
          </div>

          {/* Comments */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Comments</h2>
            <pre className="bg-gray-100 p-2 rounded">
              let x = 5;   // This will execute<br/><br/>
              // let x = 6; This won't execute<br/><br/>
              /*<br/>
              Multi-line<br/>
              comment<br/>
              */
            </pre>
          </div>

          {/* Identifiers */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Identifiers</h2>
            <p className="mb-2">Must begin with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>A letter (A-Z or a-z)</li>
              <li>A dollar sign ($)</li>
              <li>Or an underscore (_)</li>
            </ul>
            <p className="font-semibold mb-2">JavaScript is Case Sensitive:</p>
            <pre className="bg-gray-100 p-2 rounded">
              let lastname, lastName;  // Different variables<br/>
              lastName = "Doe";<br/>
              lastname = "Peterson";
            </pre>
          </div>

          {/* Camel Case */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Naming Conventions</h2>
            <p className="mb-2">Programmers use different styles for multi-word variables:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Underscore:</strong> first_name, last_name</li>
              <li><strong>Pascal Case:</strong> FirstName, LastName</li>
              <li><strong>Camel Case:</strong> firstName, lastName (most common in JavaScript)</li>
            </ul>
            <p className="mt-4 text-red-600">Note: Hyphens are not allowed in variable names.</p>
          </div>

          {/* Character Set */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">JavaScript Character Set</h2>
            <p>JavaScript uses the Unicode character set covering (almost) all characters, punctuations, and symbols in the world.</p>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice Live with JavaScript
          </h2>
          <p className="text-gray-700 mb-4">
            Try out JavaScript code directly in your browser and see the results instantly.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references covering all aspects of the language.
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

export default Syntax;