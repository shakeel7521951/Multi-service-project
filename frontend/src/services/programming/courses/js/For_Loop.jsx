import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const For_Loop = () => {
  const references = [
    "For Loop",
    "For/In Loop",
    "For/Of Loop",
    "While Loop",
    "Do/While Loop",
    "Break Statement",
    "Continue Statement",
    "Array Iteration",
    "Object Iteration",
    "Loop Scope",
    "Nested Loops",
    "Performance Tips",
    "Common Mistakes",
    "Functional Alternatives",
    "Browser Compatibility"
  ];

  const loopExamples = [
    {
      title: "Basic For Loop",
      code: `for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}`
    },
    {
      title: "For Loop with Array",
      code: `const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}`
    },
    {
      title: "Omitted Expressions",
      code: `let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(loopExamples[index].code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript For Loops</h1>
          <p className="text-gray-600 text-lg">
            Learn how to efficiently repeat code execution with JavaScript's loop structures.
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
          <h2 className="text-3xl font-bold mb-4">Why Use Loops?</h2>
          <p className="text-gray-800 mb-3">
            Loops can execute a block of code a number of times. They're essential when you want to run the same code repeatedly, each time with a different value.
          </p>
          <p className="text-gray-800 mb-3">
            Instead of writing repetitive code for array operations or other repetitive tasks, loops provide a clean and efficient solution.
          </p>
          <p className="text-gray-800 mb-6">
            Master different loop types to write more concise and maintainable JavaScript code.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Loops Now »
          </button>
        </section>

        {/* Loop Types Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Different Kinds of Loops</h2>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="mb-4">JavaScript supports different kinds of loops:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>for</strong> - loops through a block of code a number of times</li>
              <li><strong>for/in</strong> - loops through the properties of an object</li>
              <li><strong>for/of</strong> - loops through the values of an iterable object</li>
              <li><strong>while</strong> - loops through a block of code while a specified condition is true</li>
              <li><strong>do/while</strong> - also loops through a block of code while a specified condition is true</li>
            </ul>
          </div>
        </section>

        {/* The For Loop Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">The For Loop</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">for</code> statement creates a loop with 3 optional expressions:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`for (expression 1; expression 2; expression 3) {
  // code block to be executed
}`}</code>
            </pre>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expression 1</h3>
              <p className="mb-3">Executed (one time) before the execution of the code block. Used to initialize variables.</p>
              <div className="bg-[#E7E9EB] p-4 rounded-lg">
                <pre className="bg-white p-3 rounded overflow-x-auto text-sm">
                  <code>{`// Initialize variable
for (let i = 0; i < 5; i++) {
  // code
}

// Multiple variables
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  // code
}

// Can be omitted
let i = 0;
for (; i < 5; i++) {
  // code
}`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Expression 2</h3>
              <p className="mb-3">Defines the condition for executing the code block. If omitted, you must provide a break inside the loop.</p>
              <div className="bg-[#E7E9EB] p-4 rounded-lg">
                <pre className="bg-white p-3 rounded overflow-x-auto text-sm">
                  <code>{`// Standard condition
for (let i = 0; i < 5; i++) {
  // code
}

// Omitting requires break
for (let i = 0; ; i++) {
  if (i > 5) break;
  // code
}`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Expression 3</h3>
              <p className="mb-3">Executed (every time) after the code block has been executed. Typically increments/decrements the counter.</p>
              <div className="bg-[#E7E9EB] p-4 rounded-lg">
                <pre className="bg-white p-3 rounded overflow-x-auto text-sm">
                  <code>{`// Standard increment
for (let i = 0; i < 5; i++) {
  // code
}

// Custom increment
for (let i = 0; i < 100; i += 10) {
  // code
}

// Can be omitted
let i = 0;
for (; i < 5; ) {
  // code
  i++;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Practical Examples</h2>
          <p className="text-gray-700 mb-6">
            Try out these common for loop patterns in your projects:
          </p>
          
          <div className="space-y-6">
            {loopExamples.map((example, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(idx)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === idx ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Loop Scope Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Loop Scope Considerations</h2>
          <p className="mb-4">
            Using <code className="bg-gray-100 px-1 py-0.5 rounded">var</code> vs <code className="bg-gray-100 px-1 py-0.5 rounded">let</code> in loops affects variable scope:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Using var:</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm">
                <code>{`var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10`}</code>
              </pre>
              <p className="mt-2 text-sm">The variable is redeclared and accessible outside the loop.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Using let:</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm">
                <code>{`let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5`}</code>
              </pre>
              <p className="mt-2 text-sm">The variable is block-scoped and only accessible within the loop.</p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Loop References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more about JavaScript loops with these comprehensive references:
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

export default For_Loop;
