import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Debugging = () => {
  const jsExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>`;

  const debuggerExample = `let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;`;

  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(type);
        setTimeout(() => setCopied(""), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Debugging</h1>
          <p className="text-gray-600 text-lg">
            Learn how to find and fix errors in your JavaScript code using the
            browser console and debugger.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is Debugging?</h2>
          <p className="text-gray-800 mb-3">
            Debugging is the process of identifying and fixing issues in your code.
            JavaScript debuggers help developers inspect variables, trace errors,
            and improve program behavior.
          </p>
          <p className="text-gray-800 mb-3">
            Use breakpoints and <code>console.log()</code> to trace logic step-by-step.
          </p>
        </section>

        {/* console.log() Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Using console.log()</h2>
          <p className="text-gray-700 mb-4">
            Output values and debug your JavaScript by printing variables to the
            browser console.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(jsExample, "js")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === "js" ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Breakpoints & Debugger Keyword */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Breakpoints and debugger</h2>
          <p className="text-gray-700 mb-4">
            Use <code>debugger</code> keyword to pause code execution at a certain point.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{debuggerExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(debuggerExample, "debugger")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === "debugger" ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Debugging Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Browser Debugging Tools</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Press <strong>F12</strong> in your browser and open the <strong>Console</strong> tab to begin
            debugging JavaScript.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Chrome:</strong> More Tools → Developer Tools → Console</li>
            <li><strong>Firefox:</strong> Web Developer → Web Console</li>
            <li><strong>Edge:</strong> Developer Tools → Console</li>
            <li><strong>Opera:</strong> Developer → Developer Tools → Console</li>
            <li><strong>Safari:</strong> Enable Develop Menu → Show Error Console</li>
          </ul>
        </section>

        {/* Fun Fact */}
        <section className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Did You Know?</h3>
          <p className="text-gray-800">
            The term "debugging" came from an actual bug (a moth) found in a computer circuit!
          </p>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js_Debugging;
