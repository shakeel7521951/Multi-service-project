import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StyleGuide = () => {
  const [copied, setCopied] = useState(false);
  const jsExample = `let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Style Guide</h1>
          <p className="text-gray-600 text-lg">
            Follow these coding conventions to ensure your JavaScript code is clean,
            consistent, and easy to maintain.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Style Guide Content */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold">Coding Conventions</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Use <strong>camelCase</strong> for variable and function names.</li>
            <li>Always use <strong>2 spaces</strong> for indentation (no tabs).</li>
            <li>End all simple statements with a <strong>semicolon</strong>.</li>
            <li>Put <strong>spaces</strong> around operators and after commas.</li>
          </ul>

          <h3 className="font-semibold text-lg">Examples:</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{jsExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>

          <h3 className="text-lg font-semibold pt-6">Object Formatting</h3>
          <p className="text-gray-700">
            Place brackets and properties properly and always use quotes for strings.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};`}</code>
          </pre>

          <h3 className="text-lg font-semibold pt-6">Line Length</h3>
          <p className="text-gray-700">Avoid lines longer than 80 characters.</p>

          <h3 className="text-lg font-semibold pt-6">Naming Conventions</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>camelCase</strong> – Used for variables and functions.</li>
            <li><strong>UPPERCASE</strong> – Often used for constants.</li>
            <li><strong>PascalCase</strong> – Common in class names.</li>
            <li><strong>Underscores</strong> – Sometimes used in database naming.</li>
          </ul>

          <h3 className="text-lg font-semibold pt-6">JavaScript in HTML</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{`<script src="myscript.js"></script>`}</code>
          </pre>

          <h3 className="text-lg font-semibold pt-6">Case Sensitivity</h3>
          <p className="text-gray-700">
            Always use lower case file names for consistency and compatibility across
            servers.
          </p>

          <h3 className="text-lg font-semibold pt-6">Performance Tip</h3>
          <p className="text-gray-700">
            Prefer readable code in development and minify scripts for production.
          </p>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
