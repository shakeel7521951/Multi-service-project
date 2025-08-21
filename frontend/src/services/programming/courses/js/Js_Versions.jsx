import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Versions = () => {
  const versions = [
    { version: "ES1", name: "ECMAScript 1 (1997)", description: "First edition" },
    { version: "ES2", name: "ECMAScript 2 (1998)", description: "Editorial changes" },
    { version: "ES3", name: "ECMAScript 3 (1999)", description: "Added regular expressions, try/catch, switch, do-while" },
    { version: "ES4", name: "ECMAScript 4", description: "Never released" },
    { version: "ES5", name: "ECMAScript 5 (2009)", description: "Added 'strict mode', JSON support, String.trim(), Array.isArray(), Array iteration methods, Allows trailing commas for object literals" },
    { version: "ES6", name: "ECMAScript 2015", description: "Added let and const, default parameter values, Array.find(), Array.findIndex()" },
    { version: "ES7", name: "ECMAScript 2016", description: "Added exponential operator (**), Array.includes()" },
    { version: "ES8", name: "ECMAScript 2017", description: "Added string padding, Object.entries(), Object.values(), async functions, shared memory, Allows trailing commas for function parameters" },
    { version: "ES9", name: "ECMAScript 2018", description: "Added rest/spread properties, asynchronous iteration, Promise.finally(), Additions to RegExp" },
    { version: "ES10", name: "ECMAScript 2019", description: "Added String.trimStart(), String.trimEnd(), Array.flat(), Object.fromEntries, Optional catch binding" },
    { version: "ES11", name: "ECMAScript 2020", description: "Added The Nullish Coalescing Operator (??)" }
  ];

  const browserSupportES5 = [
    { browser: "Chrome", version: "23", date: "Nov 2012" },
    { browser: "Firefox", version: "21", date: "May 2013" },
    { browser: "IE", version: "9*", date: "Mar 2011", note: "* Does not support 'use strict'" },
    { browser: "IE / Edge", version: "10", date: "Sep 2012" },
    { browser: "Safari", version: "6", date: "Jul 2012" },
    { browser: "Opera", version: "15", date: "Jul 2013" }
  ];

  const browserSupportES6 = [
    { browser: "Chrome", version: "51", date: "May 2016" },
    { browser: "Firefox", version: "52", date: "Mar 2017" },
    { browser: "Edge", version: "14", date: "Aug 2016" },
    { browser: "Safari", version: "10", date: "Sep 2016" },
    { browser: "Opera", version: "38", date: "Jun 2016" },
    { browser: "Internet Explorer", version: "Not supported", date: "" }
  ];

  const [copied, setCopied] = useState(false);

  const exampleCode = `// ES6+ Example\nconst greet = (name = 'World') => {\n  return \`Hello, \${name}!\`;\n};\n\nconsole.log(greet()); // Hello, World!\nconsole.log(greet('JavaScript')); // Hello, JavaScript!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-left">
          <h1 className="text-4xl text-left font-bold mb-3 text-gray-800">JavaScript Versions</h1>
          <p className="text-gray-600 text-left text-lg ">
            Explore the evolution of JavaScript from ES1 to the latest ECMAScript standards.
          </p>
        </header>

        {/* Navigation */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">JavaScript History</h2>
          <p className="text-gray-700 mb-3">
            JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
          </p>
          <p className="text-gray-700 mb-3">
            ECMAScript is the official name of the JavaScript standard. From 1997 to 2015, versions were abbreviated by numbers (ES1, ES2, ES3, ES5, ES6).
          </p>
          <p className="text-gray-700 mb-6">
            Since 2016, versions are named by year (ECMAScript 2016, 2017, 2018, ...).
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded-lg shadow-md">
            Learn Modern JavaScript »
          </button>
        </section>

        {/* Versions Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">ECMAScript Editions</h2>
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Version</th>
                  <th className="py-3 px-4 border-b text-left">Official Name</th>
                  <th className="py-3 px-4 border-b text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {versions.map((ver, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{ver.version}</td>
                    <td className="py-3 px-4 border-b font-medium">{ver.name}</td>
                    <td className="py-3 px-4 border-b text-gray-600">{ver.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Modern JavaScript Example</h2>
          <p className="text-gray-700 mb-4">Try out modern JavaScript features in your browser.</p>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-white font-bold mb-3">ES6+ Example:</h3>
            <pre className="bg-gray-800 text-green-200 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support */}
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Browser Support for ES5 (2009)</h2>
            <div className="overflow-x-auto shadow rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Browser</th>
                    <th className="py-3 px-4 border-b text-left">Version</th>
                    <th className="py-3 px-4 border-b text-left">From Date</th>
                    <th className="py-3 px-4 border-b text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {browserSupportES5.map((browser, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{browser.browser}</td>
                      <td className="py-3 px-4 border-b">{browser.version}</td>
                      <td className="py-3 px-4 border-b">{browser.date}</td>
                      <td className="py-3 px-4 border-b text-gray-600">{browser.note || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Browser Support for ES6 (2015)</h2>
            <div className="overflow-x-auto shadow rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Browser</th>
                    <th className="py-3 px-4 border-b text-left">Version</th>
                    <th className="py-3 px-4 border-b text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {browserSupportES6.map((browser, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{browser.browser}</td>
                      <td className="py-3 px-4 border-b">{browser.version}</td>
                      <td className="py-3 px-4 border-b">{browser.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js_Versions;
