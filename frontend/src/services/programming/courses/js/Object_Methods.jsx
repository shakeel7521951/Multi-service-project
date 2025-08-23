import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
        <div className="text-start relative">
          <div className="absolute -left-6 top-3 w-14 h-14 bg-[#04AA6D] opacity-10 rounded-full"></div>
          <h1 className="text-4xl font-extrabold mb-2 relative">JavaScript Object Methods</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Learn how to work with object methods in JavaScript - the actions that can be performed on objects.
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
        <section className="bg-[#E7F3FE] p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#04AA6D] opacity-10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#04AA6D] opacity-10 rounded-full"></div>
          
          <h2 className="text-3xl font-bold mb-6">Understanding Object Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-800">
                Object methods are functions stored as object properties that perform actions on the object.
              </p>
              <p className="text-gray-800">
                Inside these methods, the <code className="bg-gray-100 px-1.5 py-0.5 rounded-md">this</code> keyword refers to the 
                "owner" of the function - the object that "owns" the method.
              </p>
              <p className="text-gray-800">
                You can access object methods using dot notation, add new methods dynamically, 
                and combine them with built-in JavaScript methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4 text-lg">Object Property Example:</h3>
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left font-semibold">Property</th>
                    <th className="border p-2 text-left font-semibold">Value</th>
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
                  <tr className="bg-[#FFF4A3]">
                    <td className="border p-2 font-medium">fullName</td>
                    <td className="border p-2">function() {"{return this.firstName + \" \" + this.lastName;}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Practical Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-[#04AA6D] text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{example.title}</h3>
                    <p className="text-gray-700 mt-2">{example.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <pre className="bg-[#1E1E1E] text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(example.code, index)}
                    className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded transition"
                    title="Copy code"
                  >
                    {copiedIndex === index ? <FaCheck className="text-green-400" /> : <FaCopy />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Object References</h2>
          <p className="text-gray-700 mb-8 max-w-3xl text-lg">
            Explore our complete JavaScript object references for detailed information about all object properties and methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {referenceItems.map((ref, idx) => (
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

export default Object_Methods;