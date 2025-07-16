import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow_Function = () => {
  const codeExample = `let myFunction = (a, b) => a * b;`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Arrow Functions</h1>
          <p className="text-gray-600 text-lg">
            Learn how arrow functions simplify JavaScript syntax and handle the <code>this</code> keyword differently.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Previous
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What Are Arrow Functions?</h2>
          <p className="text-gray-800 mb-3">
            Arrow functions were introduced in ES6 and allow for shorter syntax when writing functions in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            For example:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{codeExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </section>

        {/* Arrow Function Details */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Syntax Variations</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Before Arrow:</strong><br />
              <code>hello = function() &#123; return "Hello World!"; &#125;</code>
            </li>
            <li>
              <strong>With Arrow Function:</strong><br />
              <code>hello = () = &#123; return "Hello World!"; &#125;</code>
            </li>
            <li>
              <strong>Return by Default:</strong><br />
              <code>hello = () = "Hello World!";</code>
            </li>
            <li>
              <strong>With Parameter:</strong><br />
              <code>hello = val = "Hello " + val;</code>
            </li>
          </ul>
        </section>

        {/* Arrow Function vs Regular - this */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Arrow Functions and <code>this</code></h2>
          <p className="text-gray-700 mb-3">
            Regular functions bind <code>this</code> to the caller. Arrow functions do not bind <code>this</code>; it uses the enclosing scope.
          </p>
          <h3 className="font-bold">Example: Regular Function</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
{`hello = function() {
  document.getElementById("demo").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);`}
          </pre>

          <h3 className="font-bold">Example: Arrow Function</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
{`hello = () => {
  document.getElementById("demo").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);`}
          </pre>
        </section>

        {/* Browser Support */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            Arrow functions are supported in all modern browsers:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm text-gray-900 font-medium">
            <div className="bg-[#D9EEE1] p-3 rounded shadow">Chrome 45</div>
            <div className="bg-[#D9EEE1] p-3 rounded shadow">Edge 12</div>
            <div className="bg-[#D9EEE1] p-3 rounded shadow">Firefox 22</div>
            <div className="bg-[#D9EEE1] p-3 rounded shadow">Safari 10</div>
            <div className="bg-[#D9EEE1] p-3 rounded shadow">Opera 32</div>
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


export default Arrow_Function;
