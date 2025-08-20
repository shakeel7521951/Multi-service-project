import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Booleans = () => {
  const references = [
    "Boolean Basics",
    "Comparison Operators",
    "Logical Operators",
    "Truthy/Falsy Values",
    "Conditional Statements",
    "Loops with Booleans",
    "Boolean Conversion",
    "Boolean Object",
    "Short-circuit Evaluation",
    "Ternary Operator",
    "Boolean Methods",
    "Complete Boolean Reference"
  ];

  const booleanExample = `let isActive = true;
let hasPermission = false;

// Using in conditions
if (isActive) {
  console.log("User is active");
}

// Using in comparisons
let x = 5;
console.log(x > 3); // true`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(booleanExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Booleans</h1>
          <p className="text-gray-600 text-lg">
            Understand the fundamental Boolean data type that powers all JavaScript logic and decision-making.
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
          <h2 className="text-3xl font-bold mb-4">The Boolean Data Type</h2>
          <p className="text-gray-800 mb-3">
            In JavaScript, a Boolean is a primitive data type that can only have one of two values: <code className="bg-gray-200 px-1 rounded">true</code> or <code className="bg-gray-200 px-1 rounded">false</code>.
          </p>
          <p className="text-gray-800 mb-3">
            The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
          </p>
          <div className="bg-white p-4 rounded-lg my-4">
            <h3 className="font-bold mb-2">Key Boolean Characteristics</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><code>true</code> and <code>false</code> are boolean data types</li>
              <li>They are the only possible boolean values</li>
              <li>Must be written in lowercase</li>
              <li>Must be written without quotes</li>
            </ul>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Boolean Use Cases</h2>
          <p className="text-gray-700 mb-4">
            Very often, in programming, you will need a data type that can represent one of two values:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["yes/no", "on/off", "true/false", "enabled/disabled"].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Comparisons Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Comparisons</h2>
          <p className="text-gray-700 mb-4">
            All JavaScript comparison operators (like <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>) return <code>true</code> or <code>false</code>.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Example</th>
                  <th className="py-2 px-4 border">Returns</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Not equal to", "(x == 8)", "false"],
                  ["Unequal to", "(x != 8)", "true"],
                  ["Greater than", "(x > 8)", "false"],
                  ["Less than", "(x < 8)", "true"]
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-2 px-4 border">
                        {cellIdx === 1 ? <code>{cell}</code> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Conditions</h2>
          <p className="text-gray-700 mb-4">
            Booleans are extensively used in <code>if</code> statements to determine the code blocks to execute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              ["if (day == \"Monday\")", "true or false"],
              ["if (salary > 9000)", "true or false"],
              ["if (age < 18)", "true or false"]
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded">
                <code className="block mb-1">{item[0]}</code>
                <span className="text-gray-600">{item[1]}</span>
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-2">Example:</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{`if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`}</code>
          </pre>
        </section>

        {/* Loops Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Loops</h2>
          <p className="text-gray-700 mb-4">
            Booleans are extensively used in loops to determine conditions for looping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["For loop", "for (i = 0; i < 5; i++)"],
              ["While loop", "while (i < 10)"],
              ["For...in loop", "for (x in person)"],
              ["For...of loop", "for (x of cars)"]
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-100 p-3 rounded">
                <h4 className="font-semibold">{item[0]}</h4>
                <code>{item[1]}</code>
              </div>
            ))}
          </div>
        </section>

        
        {/* Truthy/Falsy Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Truthy and Falsy Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Truthy Values (Evaluate to true)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {["100", "3.14", "-15", "\"Hello\"", "\"false\"", "(7 + 1 + 3.14)"].map((item, idx) => (
                  <li key={idx}><code>{item}</code></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold text-red-800 mb-2">Falsy Values (Evaluate to false)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {["0", "-0", "\"\" (empty string)", "undefined", "null", "false", "NaN"].map((item, idx) => (
                  <li key={idx}><code>{item}</code></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Boolean Objects Section */}
        <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold mb-3">JavaScript Booleans as Objects</h2>
          <p className="text-gray-700 mb-4">
            Normally JavaScript booleans are primitive values created from literals:
          </p>
          <pre className="bg-white p-4 rounded mb-4"><code>let x = false;</code></pre>
          <p className="text-gray-700 mb-4">
            But booleans can also be defined as objects with the keyword <code>new</code>:
          </p>
          <pre className="bg-white p-4 rounded mb-4"><code>let y = new Boolean(false);</code></pre>
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 mb-2">Warning</h3>
            <p className="text-red-700">
              Do not create Boolean objects. The <code>new</code> keyword complicates the code and slows down execution speed.
              Boolean objects can produce unexpected results when compared.
            </p>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Boolean Examples
          </h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{booleanExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Boolean References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Boolean References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive Boolean references covering all aspects of JavaScript boolean operations.
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

export default Booleans;
