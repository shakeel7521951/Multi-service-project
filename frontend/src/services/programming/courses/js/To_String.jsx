import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const To_String = () => {
  const references = [
    "String Methods",
    "Array Methods",
    "Date Methods",
    "Number Methods",
    "Object Methods",
    "Type Conversion",
    "JSON Methods",
    "Boolean Methods",
    "Function Methods",
    "Data Types",
    "Type Coercion",
    "Template Literals",
    "Regular Expressions",
    "Error Handling",
    "Debugging Techniques"
  ];

  const arrayExample = `const fruits = ["Banana", "Orange", "Apple", "Mango"];\n\nlet myList = fruits.toString();`;
  const dateExample = `const d = new Date();\n\nlet text = d.toString();`;
  const numberExample = `let x = 123;\n\nlet text = x.toString();`;
  const numberBaseExample = `let x = 123;\n\nlet text = x.toString(2);`;
  const objectExample = `let person = {\n  firstname: "John",\n  lastname: "Doe",\n}\nlet text = person.toString();`;

  const [copied, setCopied] = useState({
    array: false,
    date: false,
    number: false,
    numberBase: false,
    object: false
  });

  const handleCopy = (code, type) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript toString() Method</h1>
          <p className="text-gray-600 text-lg">
            Learn how to convert different data types to strings using the versatile toString() method.
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
          <h2 className="text-3xl font-bold mb-4">Understanding toString()</h2>
          <p className="text-gray-800 mb-3">
            The JavaScript <code className="bg-gray-100 px-1 rounded">toString()</code> method converts a variable (or a value) to a string.
          </p>
          <p className="text-gray-800 mb-3">
            It is a built-in method for many data types, including numbers, arrays, dates, and objects.
          </p>
          <p className="text-gray-800 mb-6">
            The method is useful for:
            <ul className="list-disc pl-5 mt-2">
              <li>Converting data to a readable format for display</li>
              <li>Ensuring type compatibility when a string is required</li>
              <li>Customizing objects for user interfaces</li>
              <li>Customizing objects for debugging</li>
            </ul>
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Array Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Array toString()</h2>
          <p className="text-gray-700 mb-4">
            When used on an array, <code>toString()</code> returns the array elements as a comma separated string.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{arrayExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(arrayExample, 'array')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.array ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Date Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Date toString()</h2>
          <p className="text-gray-700 mb-4">
            When used on a date, <code>toString()</code> returns a human-readable date and time string.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{dateExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(dateExample, 'date')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.date ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Number Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Number toString()</h2>
          <p className="text-gray-700 mb-4">
            When used on a number, <code>toString()</code> returns the number as a string.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{numberExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(numberExample, 'number')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.number ? "Copied!" : "Copy Code"}
            </button>
          </div>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mt-4">
            <h3 className="font-bold mb-3">Convert to Binary (base 2):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{numberBaseExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(numberBaseExample, 'numberBase')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.numberBase ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Object Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Object toString()</h2>
          <p className="text-gray-700 mb-4">
            When used on an object, <code>toString()</code> returns "[object Object]". To provide a meaningful string representation, it can be overridden in the object definition.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{objectExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(objectExample, 'object')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.object ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to find details about methods, properties, and usage patterns.
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

export default To_String;
