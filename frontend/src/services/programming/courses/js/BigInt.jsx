import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BigInt = () => {
  const references = [
    "BigInt Creation",
    "BigInt Operators",
    "Type Conversion",
    "Hexadecimal Notation",
    "Octal Notation",
    "Binary Notation",
    "MAX_SAFE_INTEGER",
    "MIN_SAFE_INTEGER",
    "Number.isInteger()",
    "Number.isSafeInteger()",
    "Browser Support",
    "Security Considerations",
    "Data Types in JS",
    "BigInt Limitations",
    "Use Cases"
  ];

  const codeExample1 = `let x = 9999999999999999;
let y = 9999999999999999n;`;

  const codeExample2 = `let x = BigInt(999999999999999);
let type = typeof x;  // "bigint"`;

  const codeExample3 = `let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false
  });

  const handleCopy = (example) => {
    let textToCopy;
    switch (example) {
      case "example1":
        textToCopy = codeExample1;
        break;
      case "example2":
        textToCopy = codeExample2;
        break;
      case "example3":
        textToCopy = codeExample3;
        break;
      default:
        return;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied({ ...copied, [example]: true });
        setTimeout(() => setCopied({ ...copied, [example]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript BigInt</h1>
          <p className="text-gray-600 text-lg">
            Work with large integers beyond the Number type limitations using JavaScript's BigInt.
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
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is BigInt?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
          </p>
          <p className="text-gray-800 mb-3">
            JavaScript integers are only accurate up to 15 digits. BigInt solves this limitation.
          </p>
          <p className="text-gray-800 mb-6">
            BigInt is the second numeric data type in JavaScript (after Number) and was introduced in ES2020.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try BigInt Examples »
          </button>
        </section>

        {/* Integer Accuracy Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Integer Accuracy</h2>
          <p className="text-gray-700 mb-4">
            JavaScript Numbers have limited precision for integers:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`let x = 999999999999999;   // 15 digits (accurate)
let y = 9999999999999999;  // 16 digits (inaccurate)`}</code>
            </pre>
          </div>
        </section>

        {/* Creating BigInt Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Creating BigInt</h2>
          <p className="text-gray-700 mb-4">
            Create a BigInt by appending 'n' or using the BigInt() constructor:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample1}</code>
            </pre>
            <button
              onClick={() => handleCopy("example1")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Type Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">BigInt Type</h2>
          <p className="text-gray-700 mb-4">
            The typeof a BigInt is "bigint":
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample2}</code>
            </pre>
            <button
              onClick={() => handleCopy("example2")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Operators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">BigInt Operators</h2>
          <p className="text-gray-700 mb-4">
            Most operators that work with Numbers also work with BigInt:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Multiplication Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExample3}</code>
            </pre>
            <button
              onClick={() => handleCopy("example3")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Arithmetic between BigInt and Number is not allowed</li>
            <li>Unsigned right shift (&gt;&gt;&gt;) cannot be used with BigInt</li>
            <li>BigInt cannot have decimals</li>
            <li>Division with BigInt truncates fractional parts</li>
            <li>BigInt can be written in hexadecimal, octal, or binary notation</li>
          </ul>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            BigInt is supported in all modern browsers since 2020:
          </p>
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2">Browser</th>
                  <th className="px-4 py-2">Version</th>
                  <th className="px-4 py-2">Release Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-100">
                  <td className="px-4 py-2">Chrome</td>
                  <td className="px-4 py-2">67+</td>
                  <td className="px-4 py-2">May 2018</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Edge</td>
                  <td className="px-4 py-2">79+</td>
                  <td className="px-4 py-2">Jan 2020</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-2">Firefox</td>
                  <td className="px-4 py-2">68+</td>
                  <td className="px-4 py-2">Jul 2019</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Safari</td>
                  <td className="px-4 py-2">14+</td>
                  <td className="px-4 py-2">Sep 2020</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-2">Opera</td>
                  <td className="px-4 py-2">54+</td>
                  <td className="px-4 py-2">Jun 2018</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* JavaScript Data Types Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">JavaScript Data Types</h2>
          <p className="text-gray-700 mb-4">
            With BigInt, JavaScript has 8 data types:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "String", "Number", "BigInt", "Boolean",
              "Undefined", "Null", "Symbol", "Object"
            ].map((type, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg text-center font-medium">
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">BigInt References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore detailed references for all BigInt features and related number handling in JavaScript.
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

export default BigInt;
