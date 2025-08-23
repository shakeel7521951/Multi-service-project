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

  const CodeBlock = ({ code, copyKey }) => (
    <div className="relative bg-[#F9FAFB] p-4 rounded-xl border border-gray-200 shadow-sm">
      <pre className="overflow-x-auto text-sm font-mono leading-6">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => handleCopy(code, copyKey)}
        className="absolute top-3 right-3 flex items-center gap-1 bg-[#04AA6D] hover:bg-[#03945f] text-white text-xs font-medium px-3 py-1 rounded-md transition"
      >
        <FaCopy /> {copied[copyKey] ? "Copied!" : "Copy"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-extrabold mb-3 text-gray-900">
            JavaScript Comments
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Learn how to use comments to explain your code and prevent execution during testing.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 shadow-md hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Intro Section */}
        <section className="bg-[#E7F3FE] p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            JavaScript Comments
          </h2>
          <p className="text-gray-700 mb-3">
            JavaScript comments can be used to explain JavaScript code, and to make it more readable.
          </p>
          <p className="text-gray-700">
            JavaScript comments can also be used to prevent execution, when testing alternative code.
          </p>
        </section>

        {/* Single Line Comments */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Single Line Comments
          </h2>
          <p className="text-gray-700">
            Single line comments start with <code className="bg-gray-200 px-1 rounded">//</code>. Any text between them and the end of the line will be ignored by JavaScript.
          </p>

          <div>
            <h3 className="font-bold mb-2">Example:</h3>
            <CodeBlock code={singleLineExample1} copyKey="single1" />
          </div>

          <div>
            <h3 className="font-bold mb-2">Example:</h3>
            <CodeBlock code={singleLineExample2} copyKey="single2" />
          </div>
        </section>

        {/* Multi-line Comments */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Multi-line Comments
          </h2>
          <p className="text-gray-700">
            Multi-line comments start with <code className="bg-gray-200 px-1 rounded">/*</code> and end with <code className="bg-gray-200 px-1 rounded">*/</code>. Any text between them will be ignored by JavaScript.
          </p>

          <div>
            <h3 className="font-bold mb-2">Example:</h3>
            <CodeBlock code={multiLineExample} copyKey="multi" />
          </div>
        </section>

        {/* Prevent Execution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Using Comments to Prevent Execution
          </h2>
          <p className="text-gray-700">
            Comments are useful for testing. Adding <code className="bg-gray-200 px-1 rounded">//</code> in front of a code line changes it from executable to a comment.
          </p>

          <div>
            <h3 className="font-bold mb-2">Example:</h3>
            <CodeBlock code={preventExecutionExample1} copyKey="prevent1" />
          </div>

          <div>
            <h3 className="font-bold mb-2">Example:</h3>
            <CodeBlock code={preventExecutionExample2} copyKey="prevent2" />
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            JavaScript References
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references for detailed information about all JavaScript concepts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-white border border-gray-200 hover:bg-[#04AA6D] hover:text-white hover:shadow-md text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 shadow-md hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
