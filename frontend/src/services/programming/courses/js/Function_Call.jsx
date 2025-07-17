import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Function_Call = () => {
  const references = [
    "Function apply()",
    "Function bind()",
    "JavaScript Functions",
    "this Keyword",
    "Object Methods",
    "Arrow Functions",
    "Function Expressions",
    "Method Borrowing",
    "Function Context",
    "Strict Mode",
    "Event Handlers",
    "Global Object",
    "Function Arguments",
    "Prototype Methods",
    "Function Invocation"
  ];

  const example1 = `const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

// Returns "John Doe":
person.fullName();`;

  const example2 = `const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}

// Returns "John Doe":
person.fullName.call(person1);`;

  const example3 = `const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

// Returns "John Doe, Oslo, Norway":
person.fullName.call(person1, "Oslo", "Norway");`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Function call() Method</h1>
          <p className="text-gray-600 text-lg">
            Learn how to reuse methods across different objects using the powerful call() method.
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
          <h2 className="text-3xl font-bold mb-4">Method Reuse</h2>
          <p className="text-gray-800 mb-3">
            With the <code className="bg-gray-100 px-1 rounded">call()</code> method, you can write a method that can be used on different objects.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">All Functions are Methods</h3>
          <p className="text-gray-800 mb-3">
            In JavaScript all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object.
          </p>
        </section>

        {/* Basic Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basic Example</h2>
          <p className="text-gray-700 mb-4">
            This example creates an object with 3 properties, firstName, lastName, fullName.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy("example1", example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">Understanding 'this':</p>
            <p className="text-gray-700">
              In the example above, <code className="bg-gray-100 px-1 rounded">this</code> refers to the person object.<br />
              <code className="bg-gray-100 px-1 rounded">this.firstName</code> means the firstName property of person.
            </p>
          </div>
        </section>

        {/* The call() Method Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The call() Method</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 rounded">call()</code> method is a predefined JavaScript method that can be used to invoke a method with an object as an argument.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Note:</p>
            <p>With <code className="bg-gray-100 px-1 rounded">call()</code>, an object can use a method belonging to another object.</p>
          </div>

          <h3 className="text-xl font-semibold mb-3">Example Using call()</h3>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy("example2", example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* call() with Arguments Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">call() Method with Arguments</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 rounded">call()</code> method can accept arguments that will be passed to the function.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy("example3", example3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Understanding this Section */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">What is 'this'?</h2>
          <p className="text-gray-700 mb-4">
            In JavaScript, the <code className="bg-gray-100 px-1 rounded">this</code> keyword refers to an object. It refers to different objects depending on how it is used:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>In an object method, <code className="bg-gray-100 px-1 rounded">this</code> refers to the object.</li>
            <li>Alone, <code className="bg-gray-100 px-1 rounded">this</code> refers to the global object.</li>
            <li>In a function, <code className="bg-gray-100 px-1 rounded">this</code> refers to the global object.</li>
            <li>In a function, in strict mode, <code className="bg-gray-100 px-1 rounded">this</code> is undefined.</li>
            <li>In an event, <code className="bg-gray-100 px-1 rounded">this</code> refers to the element that received the event.</li>
            <li>Methods like <code className="bg-gray-100 px-1 rounded">call()</code>, <code className="bg-gray-100 px-1 rounded">apply()</code>, and <code className="bg-gray-100 px-1 rounded">bind()</code> can refer <code className="bg-gray-100 px-1 rounded">this</code> to any object.</li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <p className="font-semibold">Note:</p>
            <p><code className="bg-gray-100 px-1 rounded">this</code> is not a variable. It is a keyword. You cannot change the value of <code className="bg-gray-100 px-1 rounded">this</code>.</p>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Related References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore these related JavaScript concepts to deepen your understanding of function methods and context.
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


export default Function_Call;
