import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Function_Bind = () => {
  const references = [
    "Function Borrowing",
    "Preserving 'this'",
    "Call vs Apply vs Bind",
    "Arrow Functions & 'this'",
    "Method Chaining",
    "Object Methods",
    "Event Handlers",
    "Class Methods",
    "Strict Mode Effects",
    "Common 'this' Pitfalls"
  ];

  const example1 = `const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);`;

  const example2 = `const person = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

// Without bind - loses 'this'
setTimeout(person.display, 3000); // Shows "undefined undefined"

// With bind - preserves 'this'
let display = person.display.bind(person);
setTimeout(display, 3000); // Shows "John Doe"`;

  const [copied, setCopied] = useState({ example1: false, example2: false });

  const handleCopy = (example, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied({ ...copied, [example]: true });
        setTimeout(() => setCopied({ ...copied, [example]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Function bind()</h1>
          <p className="text-gray-600 text-lg">
            Master the powerful bind() method to control the 'this' keyword in your JavaScript applications.
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
        <section className="bg-[#E7F5FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Understanding bind()</h2>
          <p className="text-gray-800 mb-3">
            The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value.
          </p>
          <p className="text-gray-800 mb-3">
            It's particularly useful for:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-800">
            <li>Borrowing methods between objects</li>
            <li>Preserving context in callbacks and event handlers</li>
            <li>Creating partially applied functions</li>
            <li>Fixing 'this' reference issues in asynchronous code</li>
          </ul>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More About 'this' »
          </button>
        </section>

        {/* Function Borrowing Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Borrowing</h2>
          <p className="text-gray-700 mb-4">
            With bind(), an object can borrow a method from another object without copying it.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy('example1', example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Preserving this Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Preserving 'this' Context</h2>
          <p className="text-gray-700 mb-4">
            bind() solves common 'this' reference issues in callbacks and asynchronous operations.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy('example2', example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* this Keyword Explanation */}
        <section className="bg-[#FFF4CE] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Understanding 'this' in JavaScript</h2>
          <p className="text-gray-800 mb-4">
            The 'this' keyword refers to different objects depending on context:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li><strong>In object methods:</strong> 'this' refers to the object</li>
            <li><strong>Alone:</strong> 'this' refers to the global object (window in browsers)</li>
            <li><strong>In regular functions:</strong> 'this' refers to the global object</li>
            <li><strong>In strict mode functions:</strong> 'this' is undefined</li>
            <li><strong>In events:</strong> 'this' refers to the element that received the event</li>
            <li><strong>With call()/apply()/bind():</strong> 'this' refers to the specified object</li>
          </ul>
          <p className="text-gray-800 mt-4 font-medium">
            Note: 'this' is not a variable - it's a keyword that you can't reassign.
          </p>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Related References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore these related concepts to deepen your understanding of function context and binding in JavaScript.
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
            Next: call() and apply()
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Function_Bind;
