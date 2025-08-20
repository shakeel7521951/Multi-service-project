import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Regular_Expressions = () => {
  const [copied, setCopied] = useState(false);

  const jsExample = `let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const modifiers = [
    { mod: "i", desc: "Perform case-insensitive matching" },
    { mod: "g", desc: "Perform a global match (find all)" },
    { mod: "m", desc: "Perform multiline matching" },
    { mod: "d", desc: "Perform start and end matching (New in ES2022)" },
  ];

  const patterns = [
    { expr: "[abc]", desc: "Find any of the characters between the brackets" },
    { expr: "[0-9]", desc: "Find any of the digits between the brackets" },
    { expr: "(x|y)", desc: "Find any of the alternatives separated with |" },
  ];

  const metaChars = [
    { meta: "\\d", desc: "Find a digit" },
    { meta: "\\s", desc: "Find a whitespace character" },
    { meta: "\\bWORD", desc: "Find a match at the beginning of a word" },
    { meta: "WORD\\b", desc: "Find a match at the end of a word" },
    { meta: "\\uxxxx", desc: "Find the Unicode character specified by the hexadecimal number xxxx" },
  ];

  const quantifiers = [
    { quant: "n+", desc: "Matches any string that contains at least one n" },
    { quant: "n*", desc: "Matches any string that contains zero or more occurrences of n" },
    { quant: "n?", desc: "Matches any string that contains zero or one occurrences of n" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Regular Expressions</h1>
          <p className="text-gray-600 text-lg">
            A regular expression is a sequence of characters that forms a search pattern.
            The search pattern can be used for text search and text replace operations.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* What is a Regular Expression? */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What Is a Regular Expression?</h2>
          <p className="text-gray-800 mb-3">
            A regular expression is a sequence of characters that forms a search pattern.
          </p>
          <p className="text-gray-800 mb-3">
            When you search for data in a text, you can use this search pattern to describe what you are searching for.
          </p>
          <p className="text-gray-800 mb-6">
            A regular expression can be a single character, or a more complicated pattern.
          </p>
          <p className="text-gray-800 mb-6">
            Regular expressions can be used to perform all types of text search and text replace operations.
          </p>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Syntax</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>/pattern/modifiers;</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>/w3schools/i;</code>
            </pre>
            <p className="text-gray-700">
              /w3schools/i is a regular expression.<br />
              w3schools is a pattern (to be used in a search).<br />
              i is a modifier (modifies the search to be case-insensitive).
            </p>
          </div>
        </section>

        {/* Using String Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Using String Methods</h2>
          <p className="text-gray-700 mb-3">
            In JavaScript, regular expressions are often used with the two string methods: <strong>search()</strong> and <strong>replace()</strong>.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <p className="font-medium mb-2">Using String search() With a String</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-2">
              <code>let text = "Visit W3Schools!";</code><br />
              <code>let n = text.search("W3Schools");</code>
            </pre>
            <p className="text-gray-700">
              The result in <strong>n</strong> will be: <em>6</em>
            </p>

            <p className="font-medium mt-4 mb-2">Using String replace() With a String</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-2">
              <code>let text = "Visit Microsoft!";</code><br />
              <code>let result = text.replace("Microsoft", "W3Schools");</code>
            </pre>

            <p className="font-medium mt-4 mb-2">Use String replace() With a Regular Expression</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>let text = "Visit Microsoft!";</code><br />
              <code>let result = text.replace(/microsoft/i, "W3Schools");</code>
            </pre>
            <p className="text-gray-700 mt-2"><em>Visit W3Schools!</em></p>
          </div>

          <p className="text-gray-700">
            Did You Notice?<br />
            Regular expression arguments (instead of string arguments) can be used in the methods above. Regular expressions can make your search much more powerful (case insensitive for example).
          </p>
        </section>

        {/* Modifiers List */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Regular Expression Modifiers</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {modifiers.map(({ mod, desc }, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded hover:bg-black hover:text-white transition">
                <strong className="block">{mod}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Patterns */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Regular Expression Patterns</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {patterns.map(({ expr, desc }, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded hover:bg-black hover:text-white transition">
                <strong className="block">{expr}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Metacharacters */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Metacharacters</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {metaChars.map(({ meta, desc }, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded hover:bg-black hover:text-white transition">
                <strong className="block">{meta}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quantifiers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Quantifiers</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {quantifiers.map(({ quant, desc }, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded hover:bg-black hover:text-white transition">
                <strong className="block">{quant}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* RegExp.escape */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">The RegExp.escape() Method</h2>
          <p className="text-gray-700 mb-3">
            The RegExp.escape() method returns string where characters that belong to the regular expression syntax are escaped. This makes it possible to treat characters like +, *, ?, ^, $, (, ), [, ],|, and \ literally, and not as part of a regular expression.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{`// Escape a text for use in a regular expression
const safe = RegExp.escape("[*]");

// Build a new regular expression
const regex = new RegExp(safe);

// Text to replace within
const oldText = "[*] is a web school.";

// Perform the match
const newText = oldText.match(regex);`}</code>
          </pre>
          <p className="text-gray-700 mt-2">
            RegExp.escape() is supported in modern browsers since May 2025.
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


export default Regular_Expressions;
