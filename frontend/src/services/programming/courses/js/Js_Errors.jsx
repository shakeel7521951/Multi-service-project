import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Errors = () => {
  const errorTypes = [
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ];

  const errorExample = `
try {
  adddlert("Welcome guest!");
} catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}`;

  const inputValidationExample = `
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">
            JavaScript Errors & try...catch
          </h1>
          <p className="text-gray-600 text-lg">
            Handle runtime issues gracefully using JavaScript’s error-handling
            mechanisms.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Why Error Handling */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Why Learn Error Handling?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript programs often face unexpected situations — bad inputs,
            network issues, or logical bugs.
          </p>
          <p className="text-gray-800 mb-3">
            By using <code>try</code>, <code>catch</code>, <code>finally</code>,
            and <code>throw</code>, developers can handle these scenarios
            effectively and provide a better user experience.
          </p>
        </section>

        {/* Example Error Block */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Example: try...catch</h2>
          <p className="text-gray-700 mb-4">
            The following code triggers an error due to a misspelled function:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{errorExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(errorExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Input Validation */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Input Validation</h2>
          <p className="text-gray-700 mb-4">
            You can validate user inputs using <code>throw</code> and handle them
            with <code>catch</code>. Optionally, use <code>finally</code> to reset
            inputs:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{inputValidationExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(inputValidationExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Error Types */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Error Types</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            JavaScript has built-in error types that describe different failure
            conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {errorTypes.map((type, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Error Object Reference */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-8">
            JavaScript Error Object
          </h2>
          <p className="text-gray-700 mb-4">
            JavaScript provides an <code>Error</code> object with the following
            properties:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
            <li><strong>name</strong> – Type of error</li>
            <li><strong>message</strong> – Description of the error</li>
          </ul>

          <p className="text-gray-700">
            Non-standard properties (e.g., <code>fileName</code>,{" "}
            <code>stack</code>) may not work across all browsers.
          </p>
        </section>

        {/* Navigation Bottom */}
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

export default Js_Errors;
