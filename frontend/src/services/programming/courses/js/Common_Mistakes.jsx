import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Common_Mistakes = () => {
  const jsExample = `// Common JavaScript Mistakes

// Mistake: Assignment instead of comparison
let x = 0;
if (x = 10) {
  console.log("This will run unexpectedly!");
}

// Mistake: Loose vs Strict comparison
let a = 10;
let b = "10";
console.log(a == b);  // true
console.log(a === b); // false

// Mistake: Misunderstanding + operator
let num = 10;
let result = num + "5"; // "105"

// Mistake: Floating point precision
let sum = 0.1 + 0.2;
console.log(sum); // not exactly 0.3

// Fix:
let fixed = (0.1 * 10 + 0.2 * 10) / 10;

// Mistake: Misplaced semicolon
if (x == 19); {
  console.log("This runs regardless!");
}

// Mistake: Broken return statement
function broken() {
  return
    5 + 5; // returns undefined
}

// Mistake: Using named indexes in arrays
const person = [];
person["name"] = "John";
console.log(person.length); // 0 (not 1)
`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Common Mistakes</h1>
          <p className="text-gray-600 text-lg">
            Learn the most frequent JavaScript pitfalls and how to avoid them with practical examples.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Previous
          </button>
        </div>

        {/* Learning Section */}
        <section className="bg-[#FFF4E5] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Frequent JavaScript Mistakes</h2>

          <div className="space-y-2 text-gray-800">
            <p><strong>✅ Assignment vs. Comparison:</strong> <code>=</code> sets a value, <code>==</code>/<code>===</code> compares.</p>
            <p><strong>✅ Loose vs. Strict Equality:</strong> <code>==</code> allows type coercion, <code>===</code> does not.</p>
            <p><strong>✅ Addition vs. Concatenation:</strong> <code>10 + "5"</code> becomes <code>"105"</code>, not <code>15</code>.</p>
            <p><strong>✅ Floating Point Issues:</strong> <code>0.1 + 0.2 !== 0.3</code>; fix by multiplying first.</p>
            <p><strong>✅ Misplaced Semicolons:</strong> Avoid putting <code>;</code> after <code>if()</code> condition.</p>
            <p><strong>✅ Breaking Return:</strong> Never start a new line after <code>return</code>.</p>
            <p><strong>✅ Arrays vs Objects:</strong> Arrays use numbered indexes. Named indexes turn it into an object.</p>
            <p><strong>✅ Trailing Commas:</strong> Avoid in JSON. Causes crashes in some browsers.</p>
            <p><strong>✅ undefined ≠ null:</strong> Check type safely with <code>typeof myVar === "undefined"</code>.</p>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Code Examples</h2>
          <p className="text-gray-700 mb-4">Explore real examples of common issues and their fixes.</p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example Snippets:</h3>
            <pre className="bg-white border-l-4 border-yellow-500 p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Next Navigation */}
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

export default Common_Mistakes;
