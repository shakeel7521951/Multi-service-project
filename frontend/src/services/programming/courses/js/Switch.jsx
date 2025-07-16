import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Switch = () => {
  const references = [
    "JavaScript Basics",
    "If...Else Statements",
    "For Loops",
    "While Loops",
    "Functions",
    "Arrays",
    "Objects",
    "Events",
    "Error Handling",
    "DOM Manipulation",
    "JSON",
    "Async/Await",
    "ES6 Features",
    "Best Practices",
    "Performance Tips"
  ];

  const switchExample = `switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}`;

  const defaultExample = `switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}`;

  const commonBlocksExample = `switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}`;

  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState("basic");

  const handleCopy = (code, exampleName) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(exampleName);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Switch Statement</h1>
          <p className="text-gray-600 text-lg">
            Learn how to control program flow with the switch statement - a powerful alternative to if/else chains.
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
          <h2 className="text-3xl font-bold mb-4">The JavaScript Switch Statement</h2>
          <p className="text-gray-800 mb-3">
            The switch statement is used to perform different actions based on different conditions.
          </p>
          <p className="text-gray-800 mb-3">
            Use the switch statement to select one of many code blocks to be executed.
          </p>
          <p className="text-gray-800 mb-6">
            Switch statements provide cleaner syntax when you need to handle multiple conditions compared to long if/else chains.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try It Yourself »
          </button>
        </section>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`}</code>
            </pre>
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">
                <strong>How it works:</strong> The switch expression is evaluated once. The value is compared with each case. 
                If there's a match, that code block executes. If no match, the default block executes.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="flex border-b mb-4">
            <button 
              onClick={() => setActiveTab("basic")}
              className={`px-4 py-2 font-medium ${activeTab === "basic" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
            >
              Basic Example
            </button>
            <button 
              onClick={() => setActiveTab("default")}
              className={`px-4 py-2 font-medium ${activeTab === "default" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
            >
              Default Case
            </button>
            <button 
              onClick={() => setActiveTab("common")}
              className={`px-4 py-2 font-medium ${activeTab === "common" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
            >
              Common Blocks
            </button>
          </div>

          {activeTab === "basic" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Basic Switch Example:</h3>
              <p className="text-gray-700 mb-3">
                The getDay() method returns the weekday as a number (0-6). This example converts it to a weekday name:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{switchExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(switchExample, "basic")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "basic" ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}

          {activeTab === "default" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Default Case Example:</h3>
              <p className="text-gray-700 mb-3">
                The default case executes when no other cases match:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{defaultExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(defaultExample, "default")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "default" ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}

          {activeTab === "common" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Common Code Blocks:</h3>
              <p className="text-gray-700 mb-3">
                Multiple cases can share the same code block:
              </p>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{commonBlocksExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(commonBlocksExample, "common")}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copied === "common" ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">The break Keyword</h3>
              <p className="text-gray-800">
                When JavaScript reaches a break keyword, it exits the switch block. Without break, execution will continue to the next case (called "fall-through").
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">The default Keyword</h3>
              <p className="text-gray-800">
                Specifies code to run when no cases match. The default case doesn't need to be last, but if it's not, remember to end it with break.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Strict Comparison</h3>
              <p className="text-gray-800">
                Switch cases use strict comparison (===). The values must be of the same type to match. For example, the string "0" doesn't match the number 0.
              </p>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our complete JavaScript reference with detailed explanations, examples, and browser compatibility information.
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

export default Switch;
