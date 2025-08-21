import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Statements = () => {
  const references = [
    "JavaScript Syntax",
    "Variables",
    "Operators",
    "Data Types",
    "Functions",
    "Objects",
    "Events",
    "Strings",
    "Arrays",
    "Loops",
    "Conditionals",
    "Error Handling",
    "Scope",
    "Hoisting",
    "Strict Mode"
  ];

  const jsExample = `let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4`;

  const demoExample = `document.getElementById("demo").innerHTML = "Hello Dolly.";`;

  const [copied, setCopied] = useState(false);
  const [copiedDemo, setCopiedDemo] = useState(false);

  const handleCopy = (text, setter) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setter(true);
        setTimeout(() => setter(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight text-gray-900">
            JavaScript Statements
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Learn how to write and structure JavaScript code with statements, programs, and code blocks.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-2 rounded-xl shadow hover:scale-105 hover:shadow-md hover:bg-[#03945f] transition-all">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">JavaScript Programs</h2>
          <p className="text-gray-700 mb-3">
            A computer program is a list of "instructions" to be "executed" by a computer.
          </p>
          <p className="text-gray-700 mb-3">
            In a programming language, these programming instructions are called statements.
          </p>
          <p className="text-gray-700 mb-6">
            A JavaScript program is a list of programming statements.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition">
            Try It Yourself »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            JavaScript Statements
          </h2>
          <p className="text-gray-600 mb-5">
            JavaScript statements are composed of values, operators, expressions, keywords, and comments.
          </p>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-6">
            <h3 className="font-semibold mb-3 text-gray-900">Example:</h3>
            <pre className="bg-gray-900 text-green-200 border border-gray-800 p-4 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(jsExample, setCopied)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-xl shadow hover:scale-105 transition-all"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-3 text-gray-900">Browser Interaction Example:</h3>
            <pre className="bg-gray-900 text-green-200 border border-gray-800 p-4 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
              <code>{demoExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(demoExample, setCopiedDemo)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-xl shadow hover:scale-105 transition-all"
            >
              {copiedDemo ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="space-y-8">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Semicolons</h2>
            <p className="text-gray-700 mb-4">
              Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement:
            </p>
            <div className="bg-gray-100 p-4 rounded-xl">
              <pre className="bg-gray-900 text-green-200 p-3 font-mono text-sm rounded-xl overflow-x-auto">
                <code>let a, b, c;  // Declare 3 variables\na = 5;        // Assign the value 5 to a\nb = 6;        // Assign the value 6 to b\nc = a + b;    // Assign the sum of a and b to c</code>
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">White Space</h2>
            <p className="text-gray-700 mb-4">
              JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
            </p>
            <p className="text-gray-700 mb-4">
              A good practice is to put spaces around operators ( = + - * / ):
            </p>
            <div className="bg-gray-100 p-4 rounded-xl">
              <pre className="bg-gray-900 text-green-200 p-3 font-mono text-sm rounded-xl overflow-x-auto">
                <code>let x = y + z;</code>
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Line Length and Breaks</h2>
            <p className="text-gray-700 mb-4">
              For best readability, programmers often like to avoid code lines longer than 80 characters.
            </p>
            <p className="text-gray-700 mb-4">
              If a JavaScript statement doesn't fit on one line, the best place to break it is after an operator:
            </p>
            <div className="bg-gray-100 p-4 rounded-xl">
              <pre className="bg-gray-900 text-green-200 p-3 font-mono text-sm rounded-xl overflow-x-auto">
                <code>document.getElementById("demo").innerHTML =\n"Hello Dolly!";</code>
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Code Blocks</h2>
            <p className="text-gray-700 mb-4">
              JavaScript statements can be grouped together in code blocks, inside curly brackets {"{}"}.
            </p>
            <p className="text-gray-700 mb-4">
              One place you will find statements grouped together in blocks is in JavaScript functions:
            </p>
            <div className="bg-gray-100 p-4 rounded-xl">
              <pre className="bg-gray-900 text-green-200 p-3 font-mono text-sm rounded-xl overflow-x-auto">
                <code>{`function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">JavaScript Keywords</h2>
            <p className="text-gray-700 mb-4">
              JavaScript statements often start with a keyword to identify the JavaScript action to be performed:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Keyword</th>
                    <th className="py-2 px-4 border-b text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">var</td>
                    <td className="py-2 px-4 border-b">Declares a variable</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">let</td>
                    <td className="py-2 px-4 border-b">Declares a block variable</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">const</td>
                    <td className="py-2 px-4 border-b">Declares a block constant</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">if</td>
                    <td className="py-2 px-4 border-b">Marks a block of statements to be executed on a condition</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">switch</td>
                    <td className="py-2 px-4 border-b">Marks a block of statements to be executed in different cases</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">for</td>
                    <td className="py-2 px-4 border-b">Marks a block of statements to be executed in a loop</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">function</td>
                    <td className="py-2 px-4 border-b">Declares a function</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">return</td>
                    <td className="py-2 px-4 border-b">Exits a function</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">try</td>
                    <td className="py-2 px-4 border-b">Implements error handling to a block of statements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">JavaScript References</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Explore our complete JavaScript references to find details about syntax, methods, objects, and best practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-white border border-gray-200 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-2 rounded-xl shadow hover:scale-105 hover:shadow-md hover:bg-[#03945f] transition-all">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statements;
