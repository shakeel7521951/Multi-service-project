import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Array_Const = () => {
  const references = [
    "Array Methods",
    "Array Properties",
    "Array Const",
    "Array Let",
    "Array Var",
    "Array Iteration",
    "Array Sorting",
    "Array ES6 Features",
    "Array Browser Support",
    "Array Examples",
    "Array Reference",
  ];

  const example1 = `const cars = ["Saab", "Volvo", "BMW"];`;
  const example2 = `const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR`;
  const example3 = `// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");`;
  const example4 = `// This will not work:
const cars;
cars = ["Saab", "Volvo", "BMW"];`;
  const example5 = `// This is OK:
cars = ["Saab", "Volvo", "BMW"];
var cars;`;
  const example6 = `const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"`;
  const example7 = `var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"`;

  const [copied, setCopied] = useState(null);

  const handleCopy = (text, exampleNum) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(exampleNum);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Array Const</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use the const keyword with arrays in JavaScript ES6.
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
          <h2 className="text-3xl font-bold mb-4">ECMAScript 2015 (ES6)</h2>
          <p className="text-gray-800 mb-3">
            In 2015, JavaScript introduced an important new keyword: <code className="bg-gray-200 px-1 rounded">const</code>.
          </p>
          <p className="text-gray-800 mb-6">
            It has become a common practice to declare arrays using <code className="bg-gray-200 px-1 rounded">const</code>:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-4">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy(example1, 1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Cannot be Reassigned Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Cannot be Reassigned</h2>
          <p className="text-gray-700 mb-4">
            An array declared with <code className="bg-gray-200 px-1 rounded">const</code> cannot be reassigned:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy(example2, 2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Arrays are Not Constants Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Arrays are Not Constants</h2>
          <p className="text-gray-700 mb-4">
            The keyword <code className="bg-gray-200 px-1 rounded">const</code> is a little misleading.
          </p>
          <p className="text-gray-700 mb-4">
            It does NOT define a constant array. It defines a constant reference to an array.
          </p>
          <p className="text-gray-700 mb-4">
            Because of this, we can still change the elements of a constant array.
          </p>
          <h3 className="font-semibold mb-2">Elements Can be Reassigned</h3>
          <p className="text-gray-700 mb-4">
            You can change the elements of a constant array:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy(example3, 3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 3 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">const</code> keyword is not supported in Internet Explorer 10 or earlier.
          </p>
          <p className="text-gray-700 mb-4">
            The following table defines the first browser versions with full support for the <code className="bg-gray-200 px-1 rounded">const</code> keyword:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Chrome 49</th>
                  <th className="py-2 px-4 border-b">IE 11 / Edge</th>
                  <th className="py-2 px-4 border-b">Firefox 36</th>
                  <th className="py-2 px-4 border-b">Safari 10</th>
                  <th className="py-2 px-4 border-b">Opera 36</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-center">Mar, 2016</td>
                  <td className="py-2 px-4 border-b text-center">Oct, 2013</td>
                  <td className="py-2 px-4 border-b text-center">Feb, 2015</td>
                  <td className="py-2 px-4 border-b text-center">Sep, 2016</td>
                  <td className="py-2 px-4 border-b text-center">Mar, 2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Assigned when Declared Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Assigned when Declared</h2>
          <p className="text-gray-700 mb-4">
            JavaScript <code className="bg-gray-200 px-1 rounded">const</code> variables must be assigned a value when they are declared:
          </p>
          <p className="text-gray-700 mb-4">
            Meaning: An array declared with <code className="bg-gray-200 px-1 rounded">const</code> must be initialized when it is declared.
          </p>
          <p className="text-gray-700 mb-4">
            Using <code className="bg-gray-200 px-1 rounded">const</code> without initializing the array is a syntax error:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example4}</code>
            </pre>
            <button
              onClick={() => handleCopy(example4, 4)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 4 ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            Arrays declared with <code className="bg-gray-200 px-1 rounded">var</code> can be initialized at any time.
          </p>
          <p className="text-gray-700 mb-4">
            You can even use the array before it is declared:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example5}</code>
            </pre>
            <button
              onClick={() => handleCopy(example5, 5)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 5 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Const Block Scope Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Const Block Scope</h2>
          <p className="text-gray-700 mb-4">
            An array declared with <code className="bg-gray-200 px-1 rounded">const</code> has Block Scope.
          </p>
          <p className="text-gray-700 mb-4">
            An array declared in a block is not the same as an array declared outside the block:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example6}</code>
            </pre>
            <button
              onClick={() => handleCopy(example6, 6)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 6 ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            An array declared with <code className="bg-gray-200 px-1 rounded">var</code> does not have block scope:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example7}</code>
            </pre>
            <button
              onClick={() => handleCopy(example7, 7)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === 7 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Redeclaring Arrays Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Redeclaring Arrays</h2>
          <p className="text-gray-700 mb-4">
            Redeclaring an array declared with <code className="bg-gray-200 px-1 rounded">var</code> is allowed anywhere in a program:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed`}</code>
            </pre>
          </div>
          <p className="text-gray-700 mb-4">
            Redeclaring or reassigning an array to <code className="bg-gray-200 px-1 rounded">const</code>, in the same scope, or in the same block, is not allowed:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}`}</code>
            </pre>
          </div>
          <p className="text-gray-700 mb-4">
            Redeclaring or reassigning an existing <code className="bg-gray-200 px-1 rounded">const</code> array, in the same scope, or in the same block, is not allowed:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}`}</code>
            </pre>
          </div>
          <p className="text-gray-700 mb-4">
            Redeclaring an array with <code className="bg-gray-200 px-1 rounded">const</code>, in another scope, or in another block, is allowed:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}`}</code>
            </pre>
          </div>
        </section>

        {/* Complete Array Reference */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Complete Array Reference</h2>
          <p className="text-gray-800 mb-4">
            For a complete Array reference, go to our:
          </p>
          <p className="text-gray-800 mb-4 font-semibold">
            Complete JavaScript Array Reference.
          </p>
          <p className="text-gray-800">
            The reference contains descriptions and examples of all Array properties and methods.
          </p>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our comprehensive JavaScript references to find details about arrays, methods, and other JavaScript features.
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

export default Array_Const;