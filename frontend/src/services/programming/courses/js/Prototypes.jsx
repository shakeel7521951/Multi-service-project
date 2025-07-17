import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Prototypes = () => {
  const references = [
    "Object Prototypes",
    "Constructor Functions",
    "Prototype Chain",
    "Inheritance",
    "Adding Properties",
    "Adding Methods",
    "Built-in Prototypes",
    "Date Prototype",
    "Array Prototype",
    "String Prototype",
    "Number Prototype",
    "Custom Prototypes",
    "Prototype vs Instance",
    "ES6 Classes",
    "Prototype Patterns"
  ];

  const constructorExample = `function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");`;

  const prototypeExample = `Person.prototype.nationality = "English";

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};`;

  const [copiedConstructor, setCopiedConstructor] = useState(false);
  const [copiedPrototype, setCopiedPrototype] = useState(false);

  const handleCopyConstructor = () => {
    navigator.clipboard
      .writeText(constructorExample)
      .then(() => {
        setCopiedConstructor(true);
        setTimeout(() => setCopiedConstructor(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyPrototype = () => {
    navigator.clipboard
      .writeText(prototypeExample)
      .then(() => {
        setCopiedPrototype(true);
        setTimeout(() => setCopiedPrototype(false), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Prototypes</h1>
          <p className="text-gray-600 text-lg">
            Understand the core of JavaScript's inheritance model through prototypes and constructors.
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
          <h2 className="text-3xl font-bold mb-4">Understanding Prototypes</h2>
          <p className="text-gray-800 mb-3">
            All JavaScript objects inherit properties and methods from a prototype. This is JavaScript's way of implementing inheritance.
          </p>
          <p className="text-gray-800 mb-3">
            When you create objects using constructor functions, they inherit from the constructor's prototype property. This forms the prototype chain.
          </p>
          <p className="text-gray-800 mb-6">
            The prototype model is powerful and flexible, allowing you to add properties and methods to all instances of an object, even after they've been created.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Constructor Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Object Constructors
          </h2>
          <p className="text-gray-700 mb-4">
            Constructor functions are used to create multiple objects with the same properties and methods.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{constructorExample}</code>
            </pre>
            <button
              onClick={handleCopyConstructor}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedConstructor ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Prototype Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            The Prototype Property
          </h2>
          <p className="text-gray-700 mb-4">
            The prototype property allows you to add new properties and methods to all instances of an object.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{prototypeExample}</code>
            </pre>
            <button
              onClick={handleCopyPrototype}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedPrototype ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
              <span><strong>Prototype Chain:</strong> When accessing a property, JavaScript looks up the chain until it finds the property or reaches Object.prototype</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
              <span><strong>Built-in Prototypes:</strong> All built-in objects (Array, Date, String) inherit from their respective prototypes</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
              <span><strong>Object.prototype:</strong> The top of the prototype inheritance chain for all JavaScript objects</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
              <span><strong>ES6 Classes:</strong> Syntactic sugar over JavaScript's existing prototype-based inheritance</span>
            </li>
          </ul>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Prototype References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to understand prototype inheritance, built-in prototypes, and advanced patterns.
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


export default Prototypes;
