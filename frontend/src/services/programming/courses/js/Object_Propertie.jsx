import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Propertie = () => {
  const references = [
    "Object Methods",
    "Property Descriptors",
    "Getters & Setters",
    "Prototype Chain",
    "Property Attributes",
    "Enumerable Properties",
    "Configurable Properties",
    "Writable Properties",
    "Object Keys",
    "Property Metadata",
    "Object Creation",
    "Inheritance",
    "Property Access",
    "Object Freeze",
    "Object Seal"
  ];

  const exampleCode = `// Create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add a property
Object.defineProperty(person, "year", {value: "2008"});

// Change a property
Object.defineProperty(person, "language", {value: "NO"});

// Make property read-only
Object.defineProperty(person, "language", {writable: false});`;

  const counterExample = `// Define object with counter
const obj = {counter: 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get: function() { this.counter = 0; }
});
Object.defineProperty(obj, "add", {
  set: function(value) { this.counter += value; }
});

// Use the counter
obj.reset;
obj.add = 5;
console.log(obj.counter); // 5`;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Properties</h1>
          <p className="text-gray-600 text-lg">
            Master object property management with comprehensive methods for adding, 
            accessing, and configuring properties in JavaScript.
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
          <h2 className="text-3xl font-bold mb-4">Property Management Methods</h2>
          <p className="text-gray-800 mb-3">
            JavaScript provides powerful methods to manage object properties with fine-grained control.
          </p>
          <p className="text-gray-800 mb-3">
            These methods allow you to define property attributes, create getters/setters, 
            and control property enumeration.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding these methods is crucial for creating robust and maintainable JavaScript code.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Methods List */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Property Methods:</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-white rounded shadow">
              <code className="font-bold">Object.defineProperty(object, property, descriptor)</code> - Adds or changes an object property
            </li>
            <li className="p-3 bg-white rounded shadow">
              <code className="font-bold">Object.defineProperties(object, descriptors)</code> - Adds or changes multiple properties
            </li>
            <li className="p-3 bg-white rounded shadow">
              <code className="font-bold">Object.getOwnPropertyDescriptor(object, property)</code> - Accesses a property's descriptor
            </li>
            <li className="p-3 bg-white rounded shadow">
              <code className="font-bold">Object.getOwnPropertyNames(object)</code> - Returns all properties as an array
            </li>
            <li className="p-3 bg-white rounded shadow">
              <code className="font-bold">Object.getPrototypeOf(object)</code> - Accesses the prototype
            </li>
          </ul>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Property Examples</h2>
          
          <div className="flex border-b mb-4">
            <button 
              className={`px-4 py-2 ${activeTab === 'basic' ? 'border-b-2 border-[#04AA6D] font-semibold' : ''}`}
              onClick={() => setActiveTab('basic')}
            >
              Basic Properties
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'counter' ? 'border-b-2 border-[#04AA6D] font-semibold' : ''}`}
              onClick={() => setActiveTab('counter')}
            >
              Counter Example
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{activeTab === 'basic' ? exampleCode : counterExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(activeTab === 'basic' ? exampleCode : counterExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Property Attributes Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Property Attributes</h2>
          <p className="mb-4">
            Properties have attributes that control their behavior:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">writable</h4>
              <p>If <code>true</code>, the property value can be changed</p>
              <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                {`Object.defineProperty(obj, 'prop', {writable: true})`}
              </code>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">enumerable</h4>
              <p>If <code>true</code>, the property shows up in enumeration</p>
              <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                {`Object.defineProperty(obj, 'prop', {enumerable: false})`}
              </code>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">configurable</h4>
              <p>If <code>true</code>, the property can be reconfigured or deleted</p>
              <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                {`Object.defineProperty(obj, 'prop', {configurable: true})`}
              </code>
            </div>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object Property References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for JavaScript object properties and methods.
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


export default Object_Propertie;
