import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Function_Apply = () => {
  const references = [
    "Function call()",
    "Function bind()",
    "JavaScript Functions",
    "this Keyword",
    "JavaScript Strict Mode",
    "Array Methods",
    "Math Object",
    "Object Methods",
    "Function Methods",
    "JavaScript Scope",
    "Function Parameters",
    "Arrow Functions",
    "Function Invocation",
    "Function Closures",
    "Function Context"
  ];

  const example1 = `const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);`;

  const example2 = `const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);`;

  const example3 = `// Using call() method:
person.fullName.call(person1, "Oslo", "Norway");

// Using apply() method:
person.fullName.apply(person1, ["Oslo", "Norway"]);`;

  const example4 = `Math.max(1,2,3);  // Returns 3

// Using apply() with array:
Math.max.apply(null, [1,2,3]); // Also returns 3`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false,
    example4: false
  });

  const handleCopy = (example, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied({ ...copied, [example]: true });
        setTimeout(() => setCopied({ ...copied, [example]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Function apply()</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use the apply() method to call functions with a given this value and arguments as an array.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Previous
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Method Reuse</h2>
          <p className="text-gray-800 mb-6">
            With the <code className="bg-gray-100 px-1 py-0.5 rounded">apply()</code> method, you can write a method that can be used on different objects.
          </p>
        </section>

        {/* Main Content */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The JavaScript apply() Method</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">apply()</code> method is similar to the <code className="bg-gray-100 px-1 py-0.5 rounded">call()</code> method.
          </p>
          <p className="text-gray-700 mb-6">
            In this example the <code className="bg-gray-100 px-1 py-0.5 rounded">fullName</code> method of person is applied on person1:
          </p>

          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{example1}</code>
              <button
                onClick={() => handleCopy("example1", example1)}
                className="absolute top-2 right-2 p-2 text-gray-600 hover:text-[#04AA6D]"
              >
                {copied.example1 ? "Copied!" : <FaCopy />}
              </button>
            </pre>
          </div>
        </section>

        {/* Difference Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Difference Between call() and apply()</h2>
          <p className="text-gray-700 mb-4">
            The difference is:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The <code className="bg-gray-100 px-1 py-0.5 rounded">call()</code> method takes arguments separately.</li>
            <li>The <code className="bg-gray-100 px-1 py-0.5 rounded">apply()</code> method takes arguments as an array.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">apply()</code> method is very handy if you want to use an array instead of an argument list.
          </p>

          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">The apply() Method with Arguments:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative mb-6">
              <code>{example2}</code>
              <button
                onClick={() => handleCopy("example2", example2)}
                className="absolute top-2 right-2 p-2 text-gray-600 hover:text-[#04AA6D]"
              >
                {copied.example2 ? "Copied!" : <FaCopy />}
              </button>
            </pre>

            <h3 className="font-bold mb-3">Compared with the call() method:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{example3}</code>
              <button
                onClick={() => handleCopy("example3", example3)}
                className="absolute top-2 right-2 p-2 text-gray-600 hover:text-[#04AA6D]"
              >
                {copied.example3 ? "Copied!" : <FaCopy />}
              </button>
            </pre>
          </div>
        </section>

        {/* Max Method Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Simulate a Max Method on Arrays</h2>
          <p className="text-gray-700 mb-4">
            You can find the largest number (in a list of numbers) using the <code className="bg-gray-100 px-1 py-0.5 rounded">Math.max()</code> method:
          </p>

          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto relative">
              <code>{example4}</code>
              <button
                onClick={() => handleCopy("example4", example4)}
                className="absolute top-2 right-2 p-2 text-gray-600 hover:text-[#04AA6D]"
              >
                {copied.example4 ? "Copied!" : <FaCopy />}
              </button>
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            The first argument (null) does not matter. It is not used in this example.
          </p>
          <p className="text-gray-700 mb-6">
            These examples will give the same result:
          </p>
        </section>

        {/* Strict Mode Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">JavaScript Strict Mode</h2>
          <p className="text-gray-800">
            In JavaScript strict mode, if the first argument of the <code className="bg-gray-100 px-1 py-0.5 rounded">apply()</code> method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
          </p>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Function References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore related JavaScript function concepts and methods:
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


export default Function_Apply;
