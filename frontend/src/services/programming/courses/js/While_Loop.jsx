import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const While_Loop = () => {
  const references = [
    "For Loop",
    "Do While Loop",
    "Break Statement",
    "Continue Statement",
    "Loop Control",
    "Array Iteration",
    "Object Iteration",
    "Nested Loops",
    "Infinite Loops",
    "Performance Tips",
    "Functional Loops",
    "Async Loops",
    "Loop Patterns",
    "Recursion",
    "Iterators"
  ];

  const whileExample = `let i = 0;
while (i < 10) {
  console.log("The number is " + i);
  i++;
}`;

  const doWhileExample = `let i = 0;
do {
  console.log("The number is " + i);
  i++;
}
while (i < 10);`;

  const comparisonExample = `// For Loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

for (let i = 0; cars[i]; i++) {
  text += cars[i];
}

// While Loop
let i = 0;
text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}`;

  const [copied, setCopied] = useState({
    while: false,
    doWhile: false,
    comparison: false
  });

  const handleCopy = (type) => {
    let textToCopy;
    switch (type) {
      case "while":
        textToCopy = whileExample;
        break;
      case "doWhile":
        textToCopy = doWhileExample;
        break;
      case "comparison":
        textToCopy = comparisonExample;
        break;
      default:
        return;
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript While Loop</h1>
          <p className="text-gray-600 text-lg">
            Learn how to create and control loops in JavaScript with while and do-while statements.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Loops</h2>
          <p className="text-gray-800 mb-3">
            Loops can execute a block of code as long as a specified condition is true.
          </p>
          <p className="text-gray-800 mb-6">
            The <code className="bg-gray-200 px-1 rounded">while</code> loop loops through a block of code as long as a specified condition is true.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try it Yourself »
          </button>
        </section>

        {/* While Loop Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The While Loop</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Syntax</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>while (condition) {'{\n'}  // code block to be executed\n{'}'}</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example</h3>
            <p className="text-gray-700 mb-4">
              In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{whileExample}</code>
            </pre>
            <div className="text-red-600 mb-4">
              <strong>Note:</strong> If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
            </div>
            <button
              onClick={() => handleCopy("while")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.while ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* Do While Loop Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The Do While Loop</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">do while</code> loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Syntax</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>do {'{\n'}  // code block to be executed\n{'}'}\nwhile (condition);</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example</h3>
            <p className="text-gray-700 mb-4">
              The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{doWhileExample}</code>
            </pre>
            <div className="text-red-600 mb-4">
              <strong>Note:</strong> Do not forget to increase the variable used in the condition, otherwise the loop will never end!
            </div>
            <button
              onClick={() => handleCopy("doWhile")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.doWhile ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Comparing For and While</h2>
          <p className="text-gray-700 mb-4">
            A <code className="bg-gray-200 px-1 rounded">while</code> loop is much the same as a <code className="bg-gray-200 px-1 rounded">for</code> loop, with the initialization and increment statements moved outside the loop.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{comparisonExample}</code>
            </pre>
            <button
              onClick={() => handleCopy("comparison")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.comparison ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Loop References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript loop references to master different looping techniques and patterns.
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

export default While_Loop;
