import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Break_Continue = () => {
  const references = [
    "JavaScript Basics",
    "Loops and Iteration",
    "Switch Statements",
    "Function Reference",
    "Error Handling",
    "Array Methods",
    "Object Methods",
    "String Methods",
    "Number Methods",
    "Math Object",
    "Date Object",
    "DOM Manipulation",
    "Events Reference",
    "JSON Methods",
    "ES6 Features"
  ];

  const breakExample = `for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}`;

  const continueExample = `for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}`;

  const labelExample = `const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}`;

  const [copied, setCopied] = useState({
    break: false,
    continue: false,
    label: false
  });

  const handleCopy = (type) => {
    let textToCopy;
    switch (type) {
      case "break":
        textToCopy = breakExample;
        break;
      case "continue":
        textToCopy = continueExample;
        break;
      case "label":
        default:
        textToCopy = labelExample;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied({ ...copied, [type]: true });
        setTimeout(() => setCopied({ ...copied, [type]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Break and Continue</h1>
          <p className="text-gray-600 text-lg">
            Control your loops and code execution flow with break and continue statements in JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">Loop Control Statements</h2>
          <p className="text-gray-800 mb-3">
            The <strong>break</strong> statement "jumps out" of a loop, while the <strong>continue</strong> statement "jumps over" one iteration in the loop.
          </p>
          <p className="text-gray-800 mb-3">
            These statements give you precise control over loop execution, allowing you to optimize performance and handle edge cases effectively.
          </p>
          <p className="text-gray-800 mb-6">
            JavaScript also supports labeled statements that work with break and continue for more complex control flow scenarios.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Break Statement Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The Break Statement</h2>
          <p className="text-gray-700 mb-4">
            You've seen break used in switch statements. It can also be used to exit loops prematurely when a condition is met.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{breakExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("break")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.break ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* Continue Statement Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The Continue Statement</h2>
          <p className="text-gray-700 mb-4">
            The continue statement skips the current iteration when a condition is met, but continues with the next iteration.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{continueExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("continue")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.continue ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* Labels Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">JavaScript Labels</h2>
          <p className="text-gray-700 mb-4">
            You can label JavaScript statements to reference them with break or continue. Labeled statements are useful for nested loops.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{labelExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("label")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.label ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references for comprehensive documentation on all JavaScript features, methods, and best practices.
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

export default Break_Continue;
