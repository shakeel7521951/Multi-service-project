import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Ecmas_Scripts = () => {
  const features = [
    "RegExp /v Flag",
    "RegExp.escape()",
    "Float16Array",
    "Math.f16round()",
    "Promise.try()",
    "Set union()",
    "Set intersection()",
    "Set difference()",
    "Set symmetricDifference()",
    "Set isSubsetOf()",
    "Set isSupersetOf()",
    "Set isDisjointFrom()",
    "Import Attributes"
  ];

  const regexExample = `let text = "Hello 😄";
let pattern = /\\p{RGI_Emoji}/v;
let result = pattern.test(text);`;

  const setExample = `const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);`;

  const [copied, setCopied] = useState({ regex: false, set: false });

  const handleCopy = (type) => {
    const textToCopy = type === 'regex' ? regexExample : setExample;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">ECMAScript 2025</h1>
          <p className="text-gray-600 text-lg">
            Explore the cutting-edge features coming to JavaScript in 2025.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Warning Section */}
        <section className="bg-[#FFF4CE] p-6 rounded-lg border-l-4 border-[#FFC107]">
          <h2 className="text-xl font-bold mb-2">Warning</h2>
          <p className="text-gray-800 mb-2">
            These features are relatively new. Older browsers may need an alternative code (Polyfill).
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">New Features in JavaScript 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {feature}
              </button>
            ))}
          </div>
        </section>

        {/* RegExp /v Flag Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The RegExp /v Flag</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 rounded">v</code> flag is an "upgrade" to the <code className="bg-gray-100 px-1 rounded">u</code> flag.
            The <code className="bg-gray-100 px-1 rounded">u</code> (unicode) flag enables full Unicode support in regular expressions.
            The <code className="bg-gray-100 px-1 rounded">v</code> flag enables more Unicode-related features.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{regexExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('regex')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.regex ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Browser Support:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
              <div className="bg-white p-2 rounded">Chrome 136</div>
              <div className="bg-white p-2 rounded">Edge 136</div>
              <div className="bg-white p-2 rounded">Firefox 134</div>
              <div className="bg-white p-2 rounded">Safari 18.2</div>
              <div className="bg-white p-2 rounded">Opera 121</div>
            </div>
          </div>
        </section>

        {/* Set Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">New Set Methods</h2>
          <p className="text-gray-700 mb-4">
            JavaScript Sets now include powerful new methods for set operations like union, intersection, and difference.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example (union):</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{setExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('set')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.set ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Set Methods:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>union()</code> - Combines elements from both sets</li>
                <li><code>intersection()</code> - Gets common elements</li>
                <li><code>difference()</code> - Gets elements in A but not B</li>
                <li><code>symmetricDifference()</code> - Gets elements in either but not both</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Set Comparisons:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>isSubsetOf()</code> - Checks if all elements are in another set</li>
                <li><code>isSupersetOf()</code> - Checks if contains all elements of another set</li>
                <li><code>isDisjointFrom()</code> - Checks if sets have no common elements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Import Attributes Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Import Attributes</h2>
          <p className="text-gray-800 mb-3">
            Import attributes allow you to specify additional metadata about module imports.
          </p>
          <div className="bg-white p-4 rounded-lg mt-4">
            <h3 className="font-bold mb-2">Syntax:</h3>
            <pre className="bg-gray-100 p-3 rounded font-mono text-sm">
              <code>import {names} from "module-name" with {"{key:\"data\"}"};</code>
            </pre>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Examples:</h3>
            <pre className="bg-gray-100 p-3 rounded font-mono text-sm">
              <code>{`import config from "config.json" with {type:"json"};\nimport styles from "styles.css" with {type:"css"};\nimport data from "data.json" with {type:"json"};`}</code>
            </pre>
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


export default Ecmas_Scripts;
