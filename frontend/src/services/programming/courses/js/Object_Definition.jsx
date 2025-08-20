import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Definition = () => {
  const references = [
    "Object Literals",
    "Object Constructors",
    "Object Methods",
    "Property Management",
    "Object Protection",
    "Object.assign()",
    "Object.create()",
    "Object.entries()",
    "Object.keys()",
    "Object.values()",
    "Object.freeze()",
    "Object.seal()",
    "this Keyword",
    "Prototypes",
    "JSON Objects"
  ];

  const objectExample = `// Object Literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Object Constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Creating instances
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(objectExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Definition</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript objects - the fundamental building blocks for organizing and structuring data in your applications.
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
          <h2 className="text-3xl font-bold mb-4">Understanding JavaScript Objects</h2>
          <p className="text-gray-800 mb-3">
            Objects in JavaScript are collections of key-value pairs. They are used to store various keyed collections and more complex entities.
          </p>
          <p className="text-gray-800 mb-3">
            Almost everything in JavaScript is an object at its core. Understanding objects is crucial for effective JavaScript programming.
          </p>
          <p className="text-gray-800 mb-6">
            Learn different ways to create and manipulate objects with practical examples and comprehensive references.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Methods for Defining JavaScript Objects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">1. Using an Object Literal</h3>
              <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
                <code>{`{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`}</code>
              </pre>
              <p className="mt-2 text-gray-700">An object literal is a list of property names:values inside curly braces.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">2. Using the new Keyword</h3>
              <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
                <code>{`const person = new Object();
person.firstName = "John";
person.lastName = "Doe";`}</code>
              </pre>
              <p className="mt-2 text-gray-700">Creates an empty object that you can then populate with properties.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">3. Using an Object Constructor</h3>
              <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
                <code>{`function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-700">Useful when you need to create multiple objects of the same type.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">4. Using Object.create()</h3>
              <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
                <code>{`const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(\`My name is \${this.name}. Am I human? \${this.isHuman}\`);
  }
};

const me = Object.create(person);`}</code>
              </pre>
              <p className="mt-2 text-gray-700">Creates a new object with the specified prototype object and properties.</p>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice with JavaScript Objects
          </h2>
          <p className="text-gray-700 mb-4">
            Try out these object creation patterns in your own code.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{objectExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Object Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Object Methods</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">General Methods</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <li className="bg-white p-2 rounded"><code>Object.assign()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.create()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.entries()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.fromEntries()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.keys()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.values()</code></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Property Management Methods</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <li className="bg-white p-2 rounded"><code>Object.defineProperty()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.defineProperties()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.getOwnPropertyDescriptor()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.getOwnPropertyNames()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.getPrototypeOf()</code></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Object Protection Methods</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <li className="bg-white p-2 rounded"><code>Object.freeze()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.seal()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.preventExtensions()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.isFrozen()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.isSealed()</code></li>
                <li className="bg-white p-2 rounded"><code>Object.isExtensible()</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for all JavaScript object-related concepts, methods, and patterns.
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


export default Object_Definition;
