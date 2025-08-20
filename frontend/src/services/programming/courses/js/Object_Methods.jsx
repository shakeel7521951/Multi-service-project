import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Object_Methods = () => {
  const examples = [
    {
      title: "Basic Object Method",
      code: `const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};`,
      description: "A method is a function definition stored as a property value."
    },
    {
      title: "Accessing Object Methods",
      code: `// Execute as function:
name = person.fullName();

// Access function definition:
name = person.fullName;`,
      description: "Use () to execute the method, omit () to get the function definition."
    },
    {
      title: "Adding a Method to an Object",
      code: `person.name = function () {
  return this.firstName + " " + this.lastName;
};`,
      description: "You can add new methods to an object at any time."
    },
    {
      title: "Using JavaScript Methods",
      code: `person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};`,
      description: "Combine object methods with built-in JavaScript methods."
    }
  ];

  const referenceItems = [
    "Object Properties",
    "Object Methods",
    "Object Accessors",
    "Object Constructors",
    "Object Prototypes",
    "Object Iterables",
    "Object Sets",
    "Object Maps",
    "this Keyword",
    "ES6 Object Features",
    "Object Destructuring",
    "Object Spread",
    "JSON Methods",
    "Object Reference"
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Methods</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with object methods in JavaScript - the actions that can be performed on objects.
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
          <h2 className="text-3xl font-bold mb-4">Understanding Object Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-gray-800 mb-4">
                Object methods are functions stored as object properties that perform actions on the object.
              </p>
              <p className="text-gray-800 mb-4">
                Inside these methods, the <code className="bg-gray-100 px-1 rounded">this</code> keyword refers to the 
                "owner" of the function - the object that "owns" the method.
              </p>
              <p className="text-gray-800">
                You can access object methods using dot notation, add new methods dynamically, 
                and combine them with built-in JavaScript methods.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Object Property Example:</h3>
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">Property</th>
                    <th className="border p-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">firstName</td>
                    <td className="border p-2">John</td>
                  </tr>
                  <tr>
                    <td className="border p-2">lastName</td>
                    <td className="border p-2">Doe</td>
                  </tr>
                  <tr>
                    <td className="border p-2">age</td>
                    <td className="border p-2">50</td>
                  </tr>
                  <tr>
                    <td className="border p-2">eyeColor</td>
                    <td className="border p-2">blue</td>
                  </tr>
                  <tr>
                    <td className="border p-2">fullName</td>
                    <td className="border p-2">function() {"{return this.firstName + \" \" + this.lastName;}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Practical Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold mb-3 text-lg">{example.title}</h3>
                <p className="text-gray-700 mb-4">{example.description}</p>
                <div className="relative">
                  <pre className="bg-[#1E1E1E] text-gray-200 p-4 rounded overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(example.code, index)}
                    className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded transition"
                  >
                    {copiedIndex === index ? (
                      <span className="text-green-400">Copied!</span>
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our complete JavaScript object references for detailed information about all object properties and methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {referenceItems.map((ref, idx) => (
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

export default Object_Methods;