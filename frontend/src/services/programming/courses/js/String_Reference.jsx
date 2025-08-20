import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const String_Reference = () => {
  const stringMethods = [
    { name: "at()", description: "Returns an indexed character from a string" },
    { name: "charAt()", description: "Returns the character at a specified index (position)" },
    { name: "charCodeAt()", description: "Returns the Unicode of the character at a specified index" },
    { name: "codePointAt()", description: "Returns the Unicode value at an index (position) in a string" },
    { name: "concat()", description: "Returns two or more joined strings" },
    { name: "constructor", description: "Returns the string's constructor function" },
    { name: "endsWith()", description: "Returns if a string ends with a specified value" },
    { name: "fromCharCode()", description: "Returns Unicode values as characters" },
    { name: "includes()", description: "Returns if a string contains a specified value" },
    { name: "indexOf()", description: "Returns the index (position) of the first occurrence of a value in a string" },
    { name: "isWellFormed()", description: "Returns true if a string is well formed" },
    { name: "lastIndexOf()", description: "Returns the index (position) of the last occurrence of a value in a string" },
    { name: "length", description: "Returns the length of a string" },
    { name: "localeCompare()", description: "Compares two strings in the current locale" },
    { name: "match()", description: "Searches a string for a value, or a regular expression, and returns the matches" },
    { name: "padEnd()", description: "Pads a string at the end" },
    { name: "padStart()", description: "Pads a string from the start" },
    { name: "prototype", description: "Allows you to add properties and methods to an object" },
    { name: "repeat()", description: "Returns a new string with a number of copies of a string" },
    { name: "replace()", description: "Searches a string for a pattern, and returns a string where the first match is replaced" },
    { name: "replaceAll()", description: "Searches a string for a pattern and returns a new string where all matches are replaced" },
    { name: "search()", description: "Searches a string for a value, or regular expression, and returns the index (position) of the match" },
    { name: "slice()", description: "Extracts a part of a string and returns a new string" },
    { name: "split()", description: "Splits a string into an array of substrings" },
    { name: "startsWith()", description: "Checks whether a string begins with specified characters" },
    { name: "substring()", description: "Extracts characters from a string, between two specified indices (positions)" },
    { name: "toLocaleLowerCase()", description: "Returns a string converted to lowercase letters, using the host's locale" },
    { name: "toLocaleUpperCase()", description: "Returns a string converted to uppercase letters, using the host's locale" },
    { name: "toLowerCase()", description: "Returns a string converted to lowercase letters" },
    { name: "toString()", description: "Returns a string or a string object as a string" },
    { name: "toUpperCase()", description: "Returns a string converted to uppercase letters" },
    { name: "toWellFormed()", description: "Returns a string where 'lone surrogates' are replaced with the Unicode replacement character" },
    { name: "trim()", description: "Returns a string with removed whitespaces" },
    { name: "trimEnd()", description: "Returns a string with removed whitespaces from the end" },
    { name: "trimStart()", description: "Returns a string with removed whitespaces from the start" },
    { name: "valueOf()", description: "Returns the primitive value of a string or a string object" }
  ];

  const htmlWrapperMethods = [
    { name: "anchor()", description: "Displays a string as an anchor" },
    { name: "big()", description: "Displays a string using a big font" },
    { name: "blink()", description: "Displays a blinking string" },
    { name: "bold()", description: "Displays a string in bold" },
    { name: "fixed()", description: "Displays a string using a fixed-pitch font" },
    { name: "fontcolor()", description: "Displays a string using a specified color" },
    { name: "fontsize()", description: "Displays a string using a specified size" },
    { name: "italics()", description: "Displays a string in italic" },
    { name: "link()", description: "Displays a string as a hyperlink" },
    { name: "small()", description: "Displays a string using a small font" },
    { name: "strike()", description: "Displays a string with a strikethrough" },
    { name: "sub()", description: "Displays a string as subscript text" },
    { name: "sup()", description: "Displays a string as superscript text" }
  ];

  const exampleCode = `let text = "Hello World!";
let result = text.toUpperCase();
console.log(result); // Output: "HELLO WORLD!"`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(exampleCode)
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
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript String Reference</h1>
          <div className="flex items-center text-gray-600 mb-2">
            <span className="bg-[#04AA6D] text-white text-sm px-2 py-1 rounded mr-2">Revised</span>
            <span>July 2025</span>
          </div>
          <p className="text-gray-600 text-lg">
            Comprehensive reference for all JavaScript string methods and properties with detailed descriptions.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Note Section */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="font-semibold mb-1">Note:</p>
          <p>All string methods return a new value. They do not change the original string.</p>
        </section>

        {/* Code Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">String Methods Example</h2>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"} <FaCopy />
            </button>
          </div>
        </section>

        {/* String Methods Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">String Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {stringMethods.map((method, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-[#04AA6D]">{method.name}</td>
                    <td className="py-3 px-4">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HTML Wrapper Methods Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">String HTML Wrapper Methods</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
            <p className="font-semibold mb-1">Important:</p>
            <p>These are not standard methods, and may not work as expected. The HTML wrapper methods are deprecated in JavaScript. They are only standardized for compatibility purposes and are not recommended for new development.</p>
            <p className="mt-2">Modern web development practices advocate for using CSS for styling and DOM manipulation to create and modify HTML elements, providing greater control and flexibility.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="text-left py-3 px-4 font-semibold">Method</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {htmlWrapperMethods.map((method, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-[#04AA6D]">{method.name}</td>
                    <td className="py-3 px-4">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Complete Reference Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Complete JavaScript Reference</h2>
          <p className="text-gray-800 mb-6 max-w-3xl">
            For a complete reference to all JavaScript properties and methods, with full descriptions and many examples, go to:
            <br />
            <strong>W3Schools' Full JavaScript Reference.</strong>
          </p>
          <p className="text-gray-800">
            The reference includes all JavaScript updates from 1999 to 2025.
          </p>
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

export default String_Reference;
