import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Template_Strings = () => {
  const references = [
    "String Methods",
    "String Search",
    "String Templates",
    "String Interpolation",
    "Multiline Strings",
    "Tagged Templates",
    "Browser Support",
    "ES6 Features",
    "Complete String Reference"
  ];

  const examples = [
    {
      title: "Back-Tics Syntax",
      description: "Template Strings use back-ticks (``) rather than the quotes to define a string:",
      code: `let text = \`Hello World!\`;`
    },
    {
      title: "Quotes Inside Strings",
      description: "Template Strings allow both single and double quotes inside a string:",
      code: `let text = \`He's often called "Johnny"\`;`
    },
    {
      title: "Multiline Strings",
      description: "Template Strings allow multiline strings:",
      code: `let text = 
\`The quick
brown fox
jumps over
the lazy dog\`;`
    },
    {
      title: "Variable Substitutions",
      description: "Template Strings allow variables in strings:",
      code: `let firstName = "John";
let lastName = "Doe";

let text = \`Welcome \${firstName}, \${lastName}!\`;`
    },
    {
      title: "Expression Substitution",
      description: "Template Strings allow expressions in strings:",
      code: `let price = 10;
let VAT = 0.25;

let total = \`Total: \${(price * (1 + VAT)).toFixed(2)}\`;`
    },
    {
      title: "HTML Templates",
      description: "",
      code: `let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = \`<h2>\${header}</h2><ul>\`;
for (const x of tags) {
  html += \`<li>\${x}</li>\`;
}

html += \`</ul>\`;`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = (index, code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(-1), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Template Strings</h1>
          <p className="text-gray-600 text-lg">
            {`Template Strings, Template Literals, String Templates - "Beloved child has many names"`}
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
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What are Template Strings?</h2>
          <p className="text-gray-800 mb-3">
            Template Strings are a powerful feature introduced in ES6 (ECMAScript 2015) that provide an elegant way to work with strings in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            They offer several advantages over traditional string literals, including multiline strings, embedded expressions, and easier string interpolation.
          </p>
          <p className="text-gray-800 mb-6">
            Template Strings use back-ticks (``) instead of single or double quotes and support placeholders for variables and expressions using ${`...`} syntax.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Examples Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-2">
            Template String Examples
          </h2>
          
          {examples.map((example, index) => (
            <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">{example.title}</h3>
              {example.description && <p className="text-gray-700 mb-4">{example.description}</p>}
              <pre className="bg-white border-l-4 border-[#FFC0C7] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{example.code}</code>
              </pre>
              <button
                onClick={() => handleCopy(index, example.code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
              >
                {copiedIndex === index ? "Copied!" : "Copy Code"}
              </button>
            </div>
          ))}
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Browser Support</h2>
          <p className="text-gray-800 mb-4">
            Template Strings is an ES6 feature (JavaScript 2015). ES6 is fully supported in all modern browsers since June 2017:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold">Chrome 51</p>
              <p className="text-sm">May 2016</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold">Edge 15</p>
              <p className="text-sm">Apr 2017</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold">Firefox 54</p>
              <p className="text-sm">Jun 2017</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold">Safari 10</p>
              <p className="text-sm">Sep 2016</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold">Opera 38</p>
              <p className="text-sm">Jun 2016</p>
            </div>
          </div>
          <p className="text-gray-800 mt-4">
            Note: Template Strings are not supported in Internet Explorer.
          </p>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Template String References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore more about template strings and related JavaScript string features:
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

export default Template_Strings;
