import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Performance = () => {
  const references = [
    "Loops Optimization",
    "DOM Access",
    "DOM Size",
    "Variable Use",
    "Script Loading",
    "Strict Mode",
    "Avoid 'with' Keyword",
    "Performance Tips",
  ];

  const performanceExample = `// Reduce Activity in Loops
let arr = [1, 2, 3, 4, 5];
let l = arr.length;
for (let i = 0; i < l; i++) {
  console.log(arr[i]);
}

// Reduce DOM Access
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";

// Avoid Unnecessary Variables
document.getElementById("demo").innerHTML = firstName + " " + lastName;

// Defer Script Loading
window.onload = function() {
  const element = document.createElement("script");
  element.src = "myScript.js";
  document.body.appendChild(element);
};`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(performanceExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Performance</h1>
          <p className="text-gray-600 text-lg">
            Learn how to write faster, cleaner, and more efficient JavaScript code.
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
          <h2 className="text-3xl font-bold mb-4">Optimize JavaScript for Speed</h2>
          <p className="text-gray-800 mb-3">
            JavaScript performance can greatly affect user experience. Learn how to reduce
            unnecessary operations, minimize DOM access, and write cleaner code.
          </p>
          <p className="text-gray-800 mb-3">
            This guide walks through best practices that help your code run faster and avoid common slowdowns.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Improving Performance »
          </button>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Performance Code Examples</h2>
          <p className="text-gray-700 mb-4">
            See the most effective JavaScript performance techniques in action.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto whitespace-pre-wrap">
              <code>{performanceExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Performance References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Review the following tips and concepts to make your JavaScript faster and more efficient.
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

export default Performance;
