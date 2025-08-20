import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Keyword = () => {
  const thisExample = `const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(thisExample)
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
          <h1 className="text-3xl font-extrabold mb-2">
            The JavaScript <code>this</code> Keyword
          </h1>
          <p className="text-gray-600 text-lg">
            Understand how <code>this</code> behaves in different contexts and how it can be used effectively.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            HTML Basics
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is <code>this</code>?</h2>
          <p className="text-gray-800 mb-3">
            In JavaScript, the <code>this</code> keyword refers to an object — the object that is executing the current function.
          </p>
          <ul className="list-disc text-gray-800 pl-5 space-y-2">
            <li>In an object method, <code>this</code> refers to the object.</li>
            <li>Alone or in a regular function, <code>this</code> refers to the global object (or <code>undefined</code> in strict mode).</li>
            <li>In event handlers, <code>this</code> refers to the HTML element that received the event.</li>
            <li>Using <code>call()</code>, <code>apply()</code>, or <code>bind()</code>, you can set <code>this</code> to any object.</li>
          </ul>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Example of <code>this</code> in an Object</h2>
          <p className="text-gray-700 mb-4">
            Below is an example of how <code>this</code> refers to the object in a method:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{thisExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Explanation Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Use Cases of <code>this</code></h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">1. <code>this</code> in a Method</h3>
            <p className="text-gray-700">
              In a method, <code>this</code> refers to the object the method belongs to.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">2. <code>this</code> Alone</h3>
            <p className="text-gray-700">
              When used outside of any function (in the global scope), <code>this</code> refers to the global object (<code>window</code> in browsers).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">3. <code>this</code> in Strict Mode</h3>
            <p className="text-gray-700">
              In strict mode, <code>this</code> is <code>undefined</code> if used in a function.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">4. <code>this</code> in Event Handlers</h3>
            <p className="text-gray-700">
              In HTML event handlers, <code>this</code> refers to the HTML element receiving the event.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">5. Explicit Binding with <code>call()</code>, <code>apply()</code>, <code>bind()</code></h3>
            <p className="text-gray-700">
              These methods allow you to manually set the value of <code>this</code> to a specific object.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">6. Function Borrowing</h3>
            <p className="text-gray-700">
              One object can borrow another object's method using <code>bind()</code>.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">7. Precedence of <code>this</code></h3>
            <p className="text-gray-700">
              Precedence order: <code>bind() &gt; apply()/call() &gt; method &gt; global</code>.
            </p>
          </div>
        </section>

        {/* Navigation Bottom */}
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


export default Js_Keyword;
