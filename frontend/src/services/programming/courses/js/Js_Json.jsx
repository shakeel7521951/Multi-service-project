import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Json = () => {
  const jsonExample = `{
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}`;

  const jsParseExample = `let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;`;

  const [copied, setCopied] = useState(false);
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript JSON</h1>
          <p className="text-gray-600 text-lg">
            Learn how JSON simplifies data transport and storage in web applications.
          </p>
        </div>

        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is JSON?</h2>
          <ul className="text-gray-800 list-disc pl-6 space-y-2">
            <li>JSON stands for JavaScript Object Notation</li>
            <li>Lightweight data-interchange format</li>
            <li>Language-independent and self-describing</li>
            <li>Derived from JavaScript object syntax, but used in many languages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">JSON Example</h2>
          <p className="text-gray-700 mb-4">This example defines an array of employee records:</p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsonExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(jsonExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy JSON"}
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Convert JSON to JavaScript</h2>
          <p className="text-gray-700 mb-4">Parse JSON into usable JavaScript objects using <code>JSON.parse()</code>:</p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsParseExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(jsParseExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy JS Code"}
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">JSON Syntax Rules</h2>
          <ul className="text-gray-700 list-disc pl-6 space-y-2">
            <li>Data is in name/value pairs</li>
            <li>Data is separated by commas</li>
            <li>Curly braces hold objects</li>
            <li>Square brackets hold arrays</li>
          </ul>
        </section>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js_Json;
