import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Functions = () => {
  const references = [
    "Function Definitions",
    "Function Parameters",
    "Function Invocation",
    "Function Return",
    "Arrow Functions",
    "Function Expressions",
    "Callback Functions",
    "Higher-Order Functions",
    "Closures",
    "Recursion",
    "Default Parameters",
    "Rest Parameters",
    "Function Methods",
    "IIFE",
    "Function Hoisting"
  ];

  const jsExample = `// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

// Function invocation
let result = myFunction(4, 3);`;

  const syntaxExample = `function name(parameter1, parameter2, parameter3) {
  // code to be executed
}`;

  const returnExample = `// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}`;

  const celsiusExample = `function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Using function as variable value
let text = "The temperature is " + toCelsius(77) + " Celsius";`;

  const localVarExample = `// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false,
    example4: false
  });

  const handleCopy = (exampleKey, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied({ ...copied, [exampleKey]: true });
        setTimeout(() => setCopied({ ...copied, [exampleKey]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Functions</h1>
          <p className="text-gray-600 text-lg">
            Learn how to create and use functions - the building blocks of JavaScript programming.
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
          <h2 className="text-3xl font-bold mb-4">What are JavaScript Functions?</h2>
          <p className="text-gray-800 mb-3">
            A JavaScript function is a block of code designed to perform a particular task.
          </p>
          <p className="text-gray-800 mb-3">
            A JavaScript function is executed when "something" invokes it (calls it).
          </p>
          <p className="text-gray-800 mb-6">
            Functions allow you to encapsulate code for reuse, making your programs more modular and maintainable.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try It Yourself »
          </button>
        </section>

        {/* Basic Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basic Function Example</h2>
          <p className="text-gray-700 mb-4">
            Here's a simple function that multiplies two numbers:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('example1', jsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Syntax</h2>
          <p className="text-gray-700 mb-4">
            A JavaScript function is defined with the <code className="bg-gray-100 px-1">function</code> keyword, followed by a name and parentheses.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Syntax:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{syntaxExample}</code>
            </pre>
            <div className="mt-4 space-y-3">
              <p>Function parameters are listed inside the parentheses () in the function definition.</p>
              <p>Function arguments are the values received by the function when it is invoked.</p>
              <p>Inside the function, the arguments behave as local variables.</p>
            </div>
          </div>
        </section>

        {/* Function Invocation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Invocation</h2>
          <p className="text-gray-700 mb-4">
            The code inside a function executes when the function is invoked:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>When an event occurs (like a button click)</li>
            <li>When called from JavaScript code</li>
            <li>Automatically (self-invoked)</li>
          </ul>
        </section>

        {/* Return Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Function Return</h2>
          <p className="text-gray-700 mb-4">
            When JavaScript reaches a <code className="bg-gray-100 px-1">return</code> statement, the function stops executing and returns a value.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{returnExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('example2', returnExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Why Functions Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Why Use Functions?</h2>
          <div className="space-y-3">
            <p>• <strong>Code reuse:</strong> Write once, use many times</p>
            <p>• <strong>Modularity:</strong> Break complex problems into smaller pieces</p>
            <p>• <strong>Flexibility:</strong> Same code can work with different inputs</p>
            <p>• <strong>Organization:</strong> Makes code easier to understand and maintain</p>
          </div>
        </section>

        {/* Function as Variables Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Functions as Variable Values</h2>
          <p className="text-gray-700 mb-4">
            Functions can be used like variables in assignments and calculations:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{celsiusExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('example3', celsiusExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Local Variables Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Local Variables</h2>
          <p className="text-gray-700 mb-4">
            Variables declared within a function become local to that function:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{localVarExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('example4', localVarExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example4 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Function References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for all aspects of JavaScript functions:
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

export default Functions;