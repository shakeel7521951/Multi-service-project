import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Comments = () => {
  const references = [
    "JavaScript Basics",
    "Variables",
    "Operators",
    "Data Types",
    "Functions",
    "Objects",
    "Events",
    "Strings",
    "Arrays",
    "Date Objects",
    "Math Object",
    "Number Methods",
    "DOM Manipulation",
    "Browser Objects",
    "AJAX",
  ];

  const singleLineExample1 = `// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";`;

  const singleLineExample2 = `let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2`;

  const multiLineExample = `/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";`;

  const preventExecutionExample1 = `//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";`;

  const preventExecutionExample2 = `/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/`;

  const [copied, setCopied] = useState({
    single1: false,
    single2: false,
    multi: false,
    prevent1: false,
    prevent2: false,
  });

  const handleCopy = (code, key) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied({ ...copied, [key]: true });
        setTimeout(() => setCopied({ ...copied, [key]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Comments</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use comments to explain your code and prevent execution during testing.
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
        <section className="bg-[#E7F3FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Comments</h2>
          <p className="text-gray-800 mb-3">
            JavaScript comments can be used to explain JavaScript code, and to make it more readable.
          </p>
          <p className="text-gray-800 mb-6">
            JavaScript comments can also be used to prevent execution, when testing alternative code.
          </p>
        </section>

        {/* Single Line Comments Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Single Line Comments</h2>
          <p className="text-gray-700 mb-4">
            Single line comments start with <code className="bg-gray-200 px-1 rounded">//</code>.
            Any text between <code className="bg-gray-200 px-1 rounded">//</code> and the end of the line will be ignored by JavaScript.
          </p>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{singleLineExample1}</code>
              </pre>
              <button
                onClick={() => handleCopy(singleLineExample1, "single1")}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                <FaCopy /> {copied.single1 ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{singleLineExample2}</code>
              </pre>
              <button
                onClick={() => handleCopy(singleLineExample2, "single2")}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                <FaCopy /> {copied.single2 ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </section>

        {/* Multi-line Comments Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Multi-line Comments</h2>
          <p className="text-gray-700 mb-4">
            Multi-line comments start with <code className="bg-gray-200 px-1 rounded">/*</code> and end with <code className="bg-gray-200 px-1 rounded">*/</code>.
            Any text between them will be ignored by JavaScript.
          </p>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{multiLineExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(multiLineExample, "multi")}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                <FaCopy /> {copied.multi ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </section>

        {/* Prevent Execution Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Using Comments to Prevent Execution</h2>
          <p className="text-gray-700 mb-4">
            Using comments to prevent execution of code is suitable for code testing.
            Adding <code className="bg-gray-200 px-1 rounded">//</code> in front of a code line changes it from executable to a comment.
          </p>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{preventExecutionExample1}</code>
              </pre>
              <button
                onClick={() => handleCopy(preventExecutionExample1, "prevent1")}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                <FaCopy /> {copied.prevent1 ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{preventExecutionExample2}</code>
              </pre>
              <button
                onClick={() => handleCopy(preventExecutionExample2, "prevent2")}
                className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                <FaCopy /> {copied.prevent2 ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references for detailed information about all JavaScript concepts.
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

export default Comments;