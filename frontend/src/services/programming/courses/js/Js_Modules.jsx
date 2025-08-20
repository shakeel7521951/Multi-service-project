import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Modules = () => {
  const jsExample = `// message.js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + " years old.";
};
export default message;

// person.js
export const name = "Jesse";
export const age = 40;

// person_alt.js
const name = "Jesse";
const age = 40;
export { name, age };

// Import in your main file
import message from "./message.js";
import { name, age } from "./person.js";`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Modules</h1>
          <p className="text-gray-600 text-lg">
            Organize and reuse JavaScript code using the ES6 module system.
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
          <h2 className="text-3xl font-bold mb-4">Why Use Modules?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript modules let you break your code into reusable pieces.
            This helps maintain clean, organized, and scalable applications.
          </p>
          <p className="text-gray-800 mb-6">
            ES6 introduced modules with native support for `import` and
            `export` statements, improving the way we structure JavaScript apps.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Exploring Modules »
          </button>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Modules in Action</h2>
          <p className="text-gray-700 mb-4">
            See how you can export and import functions or variables between
            files in JavaScript.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Explanation Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Key Concepts</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Modules:</strong> External files imported with
              <code className="mx-1 bg-gray-100 px-1 py-0.5 rounded text-sm">
                import
              </code>
              statements.
            </li>
            <li>
              <strong>Named Exports:</strong> Export multiple values by name.
            </li>
            <li>
              <strong>Default Exports:</strong> One default value per file.
            </li>
            <li>
              <strong>Import:</strong> Use curly braces for named exports and
              no braces for default exports.
            </li>
            <li>
              <strong>Important:</strong> Modules require
              <code className="mx-1 bg-gray-100 px-1 py-0.5 rounded text-sm">
                type="module"
              </code>
              and won’t work with the
              <code className="mx-1 bg-gray-100 px-1 py-0.5 rounded text-sm">
                file://
              </code>
              protocol.
            </li>
          </ul>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Browser Support</h2>
          <table className="w-full text-left border border-gray-300 rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b">Chrome</th>
                <th className="p-3 border-b">Edge</th>
                <th className="p-3 border-b">Firefox</th>
                <th className="p-3 border-b">Safari</th>
                <th className="p-3 border-b">Opera</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border-t">61</td>
                <td className="p-3 border-t">16</td>
                <td className="p-3 border-t">60</td>
                <td className="p-3 border-t">11</td>
                <td className="p-3 border-t">48</td>
              </tr>
            </tbody>
          </table>
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

export default Js_Modules;
