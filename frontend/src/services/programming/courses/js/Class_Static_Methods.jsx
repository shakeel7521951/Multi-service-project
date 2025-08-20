import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Class_Static_Methods = () => {
  const references = [
    "Class Methods",
    "Static Properties",
    "Instance Methods",
    "Constructor",
    "Class Inheritance",
    "Method Chaining",
    "Getters & Setters",
    "Private Methods",
    "Class Expressions",
    "Hoisting",
    "Prototype Methods",
    "Arrow Functions in Classes",
    "This Keyword",
    "Class Composition",
    "Mixins"
  ];

  const staticMethodExample = `class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// Call on the Class:
Car.hello();

// Error if called on object:
// myCar.hello();`;

  const parameterExample = `class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
Car.hello(myCar);`;

  const [copied, setCopied] = useState(null);

  const handleCopy = (code, exampleName) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(exampleName);
        setTimeout(() => setCopied(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Static Methods</h1>
          <p className="text-gray-600 text-lg">
            Understand class-level methods that belong to the class itself rather than instances.
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
        <section className="bg-[#E7F3FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What are Static Methods?</h2>
          <p className="text-gray-800 mb-3">
            Static methods are defined on the class itself rather than on instances of the class.
            You call them on the class, not on instances.
          </p>
          <p className="text-gray-800 mb-3">
            They're often utility functions that don't require access to instance-specific data.
          </p>
          <p className="text-gray-800 mb-6">
            Static methods can access other static methods and properties but cannot access instance methods or properties directly.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Basic Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Basic Static Method Example
          </h2>
          <p className="text-gray-700 mb-4">
            This shows how to define and call a static method:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{staticMethodExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(staticMethodExample, 'basic')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 'basic' ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Parameter Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Passing Object to Static Method
          </h2>
          <p className="text-gray-700 mb-4">
            While static methods can't access instance data directly, you can pass objects as parameters:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{parameterExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(parameterExample, 'parameter')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 'parameter' ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Static methods are called on the class, not instances</li>
            <li>Use the <code className="bg-gray-100 px-1 rounded">static</code> keyword to define them</li>
            <li>They can't access non-static (instance) properties/methods directly</li>
            <li>Often used for utility functions related to the class</li>
            <li>Can be called without creating any class instances</li>
          </ul>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more JavaScript class concepts and related topics with these references:
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

export default Class_Static_Methods;