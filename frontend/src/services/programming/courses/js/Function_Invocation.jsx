import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Function_Invocation = () => {
  const references = [
    "Function Declaration",
    "Function Expression",
    "Arrow Functions",
    "Function Parameters",
    "Function Invocation",
    "Function Methods",
    "Function Context",
    "Closures",
    "Callbacks",
    "IIFE",
    "Higher-Order Functions",
    "Recursion",
    "Function Binding",
    "Function Composition",
    "Currying"
  ];

  const example1 = `function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Will return 20`;

  const example2 = `const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"`;

  const example3 = `// Constructor function
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// Create new object
const person1 = new Person("John", "Doe");

// Will return "John"
person1.firstName;`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false
  });

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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Function Invocation</h1>
          <p className="text-gray-600 text-lg">
            Understand how JavaScript functions are invoked and how the execution context works.
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
          <h2 className="text-3xl font-bold mb-4">Function Invocation Basics</h2>
          <p className="text-gray-800 mb-3">
            The code inside a JavaScript function will execute when "something" invokes it.
          </p>
          <p className="text-gray-800 mb-3">
            The code inside a function is not executed when the function is defined. It's executed when the function is invoked.
          </p>
          <p className="text-gray-800 mb-6">
            It's common to use terms like "call a function", "invoke a function", or "execute a function" interchangeably.
          </p>
        </section>

        {/* Invoking as Function */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Invoking a Function as a Function</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy("example1", example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            The function above doesn't belong to any object. In HTML, the default global object is the HTML page itself (window object in browsers).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Note:</strong> Global functions can easily create name conflicts and bugs in the global object.
          </p>
        </section>

        {/* The 'this' Keyword */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">The 'this' Keyword</h2>
          <p className="text-gray-800 mb-3">
            In JavaScript, <code className="bg-gray-200 px-1 rounded">this</code> refers to an object, depending on how it's used:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>In an object method: refers to the object</li>
            <li>Alone: refers to the global object</li>
            <li>In a function: refers to the global object</li>
            <li>In strict mode function: is undefined</li>
            <li>In an event: refers to the element that received the event</li>
            <li>With call(), apply(), bind(): can refer to any object</li>
          </ul>
        </section>

        {/* Invoking as Method */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Invoking a Function as a Method</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy("example2", example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            When a function is defined as an object property, it's called a method. The <code className="bg-gray-200 px-1 rounded">this</code> value refers to the owner object.
          </p>
        </section>

        {/* Constructor Invocation */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Invoking a Function with a Constructor</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy("example3", example3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            If a function invocation is preceded with the <code className="bg-gray-200 px-1 rounded">new</code> keyword, it's a constructor invocation.
          </p>
          <p className="text-gray-700 mb-4">
            Constructor functions create new objects that inherit properties and methods from the constructor.
          </p>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Function References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript function references covering all aspects of function usage and patterns.
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

export default Function_Invocation;
