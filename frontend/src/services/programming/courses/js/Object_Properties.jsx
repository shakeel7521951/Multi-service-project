import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Properties = () => {
  const references = [
    "Object Basics",
    "Property Access",
    "Adding Properties",
    "Deleting Properties",
    "Nested Objects",
    "Object Methods",
    "Property Attributes",
    "Object Constructors",
    "Prototypes",
    "Object Destructuring",
    "JSON Handling",
    "Object Reference"
  ];

  const codeExample1 = `// Different ways to access properties
const person = {
  firstName: "John",
  age: 30
};

// Dot notation
let age = person.age;

// Bracket notation
let name = person["firstName"];

// Using expression
let x = "age";
console.log(person[x]); // 30`;

  const codeExample2 = `// Adding and deleting properties
const person = { name: "Alice" };

// Add new property
person.age = 25;
person["nationality"] = "English";

// Delete property
delete person.age;
delete person["nationality"];`;

  const codeExample3 = `// Nested objects
const myObj = {
  name: "John",
  vehicles: {
    car: "Ford",
    bike: "Honda",
    plane: "Boeing"
  }
};

// Accessing nested properties
console.log(myObj.vehicles.car); // Ford
console.log(myObj["vehicles"]["bike"]); // Honda`;

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState([false, false, false]);

  const handleCopy = (index) => {
    let textToCopy;
    if (index === 0) textToCopy = codeExample1;
    else if (index === 1) textToCopy = codeExample2;
    else textToCopy = codeExample3;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const newCopied = [...copied];
        newCopied[index] = true;
        setCopied(newCopied);
        setTimeout(() => {
          newCopied[index] = false;
          setCopied([...newCopied]);
        }, 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Properties</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript objects - the fundamental building blocks of modern JavaScript applications.
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
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Understanding Object Properties</h2>
          <p className="text-gray-800 mb-3">
            An object in JavaScript is an unordered collection of properties. Properties are the most important part of JavaScript objects.
          </p>
          <p className="text-gray-800 mb-3">
            Properties can be changed, added, deleted, and some are read-only. You can access them using dot notation or bracket notation.
          </p>
          <p className="text-gray-800 mb-6">
            Objects can also contain nested objects and methods, making them powerful data structures for complex applications.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Concepts with Examples</h2>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 0 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(0)}
            >
              Property Access
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 1 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(1)}
            >
              Adding/Deleting
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 2 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab(2)}
            >
              Nested Objects
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            {activeTab === 0 && (
              <>
                <h3 className="font-bold mb-3">Accessing Object Properties:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{codeExample1}</code>
                </pre>
                <button
                  onClick={() => handleCopy(0)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied[0] ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h3 className="font-bold mb-3">Adding and Deleting Properties:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{codeExample2}</code>
                </pre>
                <button
                  onClick={() => handleCopy(1)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied[1] ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h3 className="font-bold mb-3">Working with Nested Objects:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{codeExample3}</code>
                </pre>
                <button
                  onClick={() => handleCopy(2)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied[2] ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>The <code className="bg-gray-200 px-1 rounded">delete</code> keyword deletes both the value and the property itself</li>
            <li>After deletion, the property cannot be used until it's added back</li>
            <li>Property names can be strings or symbols (new in ES6)</li>
            <li>Objects are mutable and manipulated by reference, not by value</li>
            <li>Use <code className="bg-gray-200 px-1 rounded">Object.defineProperty()</code> for more control over property attributes</li>
          </ul>
        </section>

        {/* Object References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our complete JavaScript object references to master all aspects of object properties and methods.
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

export default Object_Properties;