import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Functions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Learn how to create and use functions - the building blocks of JavaScript programming.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-lg border-l-4 border-[#04AA6D]">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">What are JavaScript Functions?</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            A JavaScript function is a block of code designed to perform a particular task.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            A JavaScript function is executed when "something" invokes it (calls it).
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Functions allow you to encapsulate code for reuse, making your programs more modular and maintainable.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md">
            Try It Yourself »
          </button>
        </section>

        {/* Basic Example Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Basic Function Example</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Here's a simple function that multiplies two numbers:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <h3 className="font-bold mb-3 text-gray-800">Example:</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{jsExample}</code>
              </pre>
              <button
                onClick={() => handleCopy('example1', jsExample)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied.example1 ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={() => handleCopy('example1', jsExample)}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied.example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Syntax Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Function Syntax</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            A JavaScript function is defined with the <code className="bg-gray-100 px-1 py-0.5 rounded">function</code> keyword, followed by a name and parentheses.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <h3 className="font-bold mb-3 text-gray-800">Syntax:</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{syntaxExample}</code>
              </pre>
            </div>
            <div className="mt-5 space-y-3 text-gray-700">
              <p>Function parameters are listed inside the parentheses () in the function definition.</p>
              <p>Function arguments are the values received by the function when it is invoked.</p>
              <p>Inside the function, the arguments behave as local variables.</p>
            </div>
          </div>
        </section>

        {/* Function Invocation Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Function Invocation</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The code inside a function executes when the function is invoked:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>When an event occurs (like a button click)</li>
            <li>When called from JavaScript code</li>
            <li>Automatically (self-invoked)</li>
          </ul>
        </section>

        {/* Return Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Function Return</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            When JavaScript reaches a <code className="bg-gray-100 px-1 py-0.5 rounded">return</code> statement, the function stops executing and returns a value.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{returnExample}</code>
              </pre>
              <button
                onClick={() => handleCopy('example2', returnExample)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied.example2 ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={() => handleCopy('example2', returnExample)}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied.example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Why Functions Section */}
        <section className="bg-[#FFF4A3] p-7 rounded-xl shadow-md border-l-4 border-[#ffd966]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Use Functions?</h2>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">•</span>
              <span><strong>Code reuse:</strong> Write once, use many times</span>
            </p>
            <p className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">•</span>
              <span><strong>Modularity:</strong> Break complex problems into smaller pieces</span>
            </p>
            <p className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">•</span>
              <span><strong>Flexibility:</strong> Same code can work with different inputs</span>
            </p>
            <p className="flex items-start">
              <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">•</span>
              <span><strong>Organization:</strong> Makes code easier to understand and maintain</span>
            </p>
          </div>
        </section>

        {/* Function as Variables Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Functions as Variable Values</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Functions can be used like variables in assignments and calculations:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{celsiusExample}</code>
              </pre>
              <button
                onClick={() => handleCopy('example3', celsiusExample)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied.example3 ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={() => handleCopy('example3', celsiusExample)}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied.example3 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Local Variables Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Local Variables</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Variables declared within a function become local to that function:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{localVarExample}</code>
              </pre>
              <button
                onClick={() => handleCopy('example4', localVarExample)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied.example4 ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={() => handleCopy('example4', localVarExample)}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied.example4 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Function References
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Explore our comprehensive references for all aspects of JavaScript functions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Functions;