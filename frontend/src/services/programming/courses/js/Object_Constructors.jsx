import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Object_Constructors = () => {
  const references = [
    "Object Basics",
    "Constructor Functions",
    "Prototype Methods",
    "Built-in Constructors",
    "Object Literals",
    "Array Constructors",
    "Date Objects",
    "Function Constructors",
    "Class Syntax",
    "Inheritance",
    "Static Methods",
    "Property Descriptors",
    "Object.create()",
    "Factory Functions",
    "Singleton Pattern"
  ];

  const constructorExample = `function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");`;

  const prototypeExample = `Person.prototype.nationality = "English";
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};`;

  const builtInConstructors = `new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object`;

  const [activeTab, setActiveTab] = useState("constructor");
  const [copied, setCopied] = useState({});

//   const handleCopy = (text, key) => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         setCopied(prev => ({ ...prev, [key]: true }));
//         setTimeout(() => setCopied(prev => ({ ...prev, [key]: false }), 1500)
//       })
//       .catch(err => console.error("Failed to copy:", err));
//   };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Constructors</h1>
          <p className="text-gray-600 text-lg">
            Learn how to create and manage objects using constructor functions and prototypes.
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
          <h2 className="text-3xl font-bold mb-4">Understanding Constructors</h2>
          <p className="text-gray-800 mb-3">
            Constructor functions are used to create multiple objects of the same type. They serve as blueprints for object creation.
          </p>
          <p className="text-gray-800 mb-3">
            It's considered good practice to name constructor functions with an upper-case first letter (PascalCase).
          </p>
          <p className="text-gray-800 mb-6">
            The <code className="bg-gray-100 px-1 rounded">this</code> keyword in the constructor refers to the new object being created.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <div className="flex border-b mb-4">
            <button
              className={`px-4 py-2 font-medium ${activeTab === "constructor" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("constructor")}
            >
              Constructor Example
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "prototype" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("prototype")}
            >
              Prototype Methods
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "builtin" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("builtin")}
            >
              Built-in Constructors
            </button>
          </div>

          {activeTab === "constructor" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Basic Constructor Function:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
                <code>{constructorExample}</code>
                <button
                  onClick={() => handleCopy(constructorExample, "constructor")}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                  title="Copy code"
                >
                  <FaCopy />
                </button>
                {copied.constructor && (
                  <span className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </pre>
              <p className="mt-4 text-gray-700">
                <strong>Note:</strong> In the constructor function, <code className="bg-gray-100 px-1 rounded">this</code> has no value initially. 
                It becomes the new object when instantiated with <code className="bg-gray-100 px-1 rounded">new</code>.
              </p>
            </div>
          )}

          {activeTab === "prototype" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Adding Methods via Prototype:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
                <code>{prototypeExample}</code>
                <button
                  onClick={() => handleCopy(prototypeExample, "prototype")}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                  title="Copy code"
                >
                  <FaCopy />
                </button>
                {copied.prototype && (
                  <span className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </pre>
              <p className="mt-4 text-gray-700">
                <strong>Important:</strong> Adding methods to the prototype is more memory efficient than adding them 
                directly in the constructor, as they're shared across all instances.
              </p>
            </div>
          )}

          {activeTab === "builtin" && (
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">JavaScript Built-in Constructors:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
                <code>{builtInConstructors}</code>
                <button
                  onClick={() => handleCopy(builtInConstructors, "builtin")}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                  title="Copy code"
                >
                  <FaCopy />
                </button>
                {copied.builtin && (
                  <span className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </pre>
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <h4 className="font-bold text-yellow-800 mb-2">Best Practice:</h4>
                <p className="text-yellow-700">
                  Use object literals <code className="bg-yellow-100 px-1 rounded">{}</code> instead of <code className="bg-yellow-100 px-1 rounded">new Object()</code>, 
                  array literals <code className="bg-yellow-100 px-1 rounded">[]</code> instead of <code className="bg-yellow-100 px-1 rounded">new Array()</code>, 
                  and function expressions instead of <code className="bg-yellow-100 px-1 rounded">new Function()</code> for better performance and readability.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#FFF4E3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
          <div className="grid gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-bold text-lg mb-2">Property Default Values</h3>
              <p className="text-gray-700 mb-2">
                You can set default values for all objects created by the constructor:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                <code>function Person() {"{"}\n  this.nationality = "English";\n{"}"}</code>
              </pre>
            </div>
            
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-bold text-lg mb-2">Adding Properties</h3>
              <p className="text-gray-700 mb-2">
                Properties added to an instance don't affect other objects:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                <code>myFather.nationality = "English"; // Only affects myFather</code>
              </pre>
            </div>
            
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-bold text-lg mb-2">Constructor vs Prototype</h3>
              <p className="text-gray-700">
                Methods added to the constructor function prototype are available to all instances,
                while methods added in the constructor create new copies for each instance.
              </p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for object-oriented programming in JavaScript:
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

export default Object_Constructors;