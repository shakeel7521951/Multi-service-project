import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
        <div className="text-start relative">
          <div className="absolute -left-6 top-3 w-14 h-14 bg-[#04AA6D] opacity-10 rounded-full"></div>
          <h1 className="text-4xl font-extrabold mb-2 relative">JavaScript Object Properties</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Master JavaScript objects - the fundamental building blocks of modern JavaScript applications.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#FFF4A3] p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#04AA6D] opacity-10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#04AA6D] opacity-10 rounded-full"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative">Understanding Object Properties</h2>
          <p className="text-gray-800 mb-3">
            An object in JavaScript is an unordered collection of properties. Properties are the most important part of JavaScript objects.
          </p>
          <p className="text-gray-800 mb-3">
            Properties can be changed, added, deleted, and some are read-only. You can access them using dot notation or bracket notation.
          </p>
          <p className="text-gray-800 mb-6">
            Objects can also contain nested objects and methods, making them powerful data structures for complex applications.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg">
            Learn More »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Concepts with Examples</h2>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`px-6 py-3 font-medium rounded-t-lg transition ${activeTab === 0 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D] bg-gray-50' : 'text-gray-600 hover:text-[#04AA6D]'}`}
              onClick={() => setActiveTab(0)}
            >
              Property Access
            </button>
            <button
              className={`px-6 py-3 font-medium rounded-t-lg transition ${activeTab === 1 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D] bg-gray-50' : 'text-gray-600 hover:text-[#04AA6D]'}`}
              onClick={() => setActiveTab(1)}
            >
              Adding/Deleting
            </button>
            <button
              className={`px-6 py-3 font-medium rounded-t-lg transition ${activeTab === 2 ? 'text-[#04AA6D] border-b-2 border-[#04AA6D] bg-gray-50' : 'text-gray-600 hover:text-[#04AA6D]'}`}
              onClick={() => setActiveTab(2)}
            >
              Nested Objects
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-md">
            {activeTab === 0 && (
              <>
                <h3 className="font-bold mb-3 text-lg">Accessing Object Properties:</h3>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                    <code>{codeExample1}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(0)}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition"
                    title="Copy code"
                  >
                    {copied[0] ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600" />}
                  </button>
                </div>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h3 className="font-bold mb-3 text-lg">Adding and Deleting Properties:</h3>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                    <code>{codeExample2}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(1)}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition"
                    title="Copy code"
                  >
                    {copied[1] ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600" />}
                  </button>
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h3 className="font-bold mb-3 text-lg">Working with Nested Objects:</h3>
                <div className="relative">
                  <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                    <code>{codeExample3}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(2)}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition"
                    title="Copy code"
                  >
                    {copied[2] ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600" />}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="bg-[#E7E9EB] p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Important Notes</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
              <span>The <code className="bg-gray-200 px-1.5 py-0.5 rounded-md">delete</code> keyword deletes both the value and the property itself</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
              <span>After deletion, the property cannot be used until it's added back</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
              <span>Property names can be strings or symbols (new in ES6)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
              <span>Objects are mutable and manipulated by reference, not by value</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#04AA6D] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
              <span>Use <code className="bg-gray-200 px-1.5 py-0.5 rounded-md">Object.defineProperty()</code> for more control over property attributes</span>
            </li>
          </ul>
        </section>

        {/* Object References */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Object References</h2>
          <p className="text-gray-700 mb-8 max-w-3xl text-lg">
            Explore our complete JavaScript object references to master all aspects of object properties and methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-sm hover:shadow-md"
              >
                {ref}
              </div>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end pt-4">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Object_Properties;