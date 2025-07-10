import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Number_Properties = () => {
  const references = [
    "Numbers Tutorial",
    "Number Methods",
    "Number Reference",
    "JavaScript Arithmetic",
    "JavaScript Math",
    "JavaScript BigInt"
  ];

  const examples = {
    EPSILON: `let x = Number.EPSILON;`,
    MAX_VALUE: `let x = Number.MAX_VALUE;`,
    MIN_VALUE: `let x = Number.MIN_VALUE;`,
    MAX_SAFE_INTEGER: `let x = Number.MAX_SAFE_INTEGER;`,
    MIN_SAFE_INTEGER: `let x = Number.MIN_SAFE_INTEGER;`,
    POSITIVE_INFINITY: `let x = Number.POSITIVE_INFINITY;
// or
let y = 1 / 0;`,
    NEGATIVE_INFINITY: `let x = Number.NEGATIVE_INFINITY;
// or
let y = -1 / 0;`,
    NaN: `let x = Number.NaN;
// or
let y = 100 / "Apple";`
  };

  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState("EPSILON");

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(activeTab);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const properties = [
    { name: "EPSILON", desc: "Difference between the smallest floating point number greater than 1 and 1." },
    { name: "MAX_VALUE", desc: "Constant representing the largest possible number in JavaScript." },
    { name: "MIN_VALUE", desc: "Constant representing the lowest possible number in JavaScript." },
    { name: "MAX_SAFE_INTEGER", desc: "Represents the maximum safe integer in JavaScript (2⁵³ - 1)." },
    { name: "MIN_SAFE_INTEGER", desc: "Represents the minimum safe integer in JavaScript -(2⁵³ - 1)." },
    { name: "POSITIVE_INFINITY", desc: "Represents positive infinity (returned on overflow)." },
    { name: "NEGATIVE_INFINITY", desc: "Represents negative infinity (returned on overflow)." },
    { name: "NaN", desc: "A reserved word for a number that is not a legal number." }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Number Properties</h1>
          <p className="text-gray-600 text-lg">
            Explore the built-in properties of JavaScript's Number object and their uses.
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
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Number Properties</h2>
          <p className="text-gray-800 mb-3">
            JavaScript numbers have several built-in properties that provide useful constants and information.
          </p>
          <p className="text-gray-800 mb-6">
            These properties can only be accessed as <code className="bg-gray-200 px-1 rounded">Number.property</code>. 
            Using them on variables will return undefined.
          </p>
        </section>

        {/* Properties Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {properties.map((prop) => (
              <button
                key={prop.name}
                onClick={() => setActiveTab(prop.name)}
                className={`cursor-pointer text-center font-medium py-3 px-4 rounded transition ${
                  activeTab === prop.name
                    ? "bg-[#04AA6D] text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {prop.name}
              </button>
            ))}
          </div>

          {/* Property Details */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Number.{activeTab}</h3>
            <p className="text-gray-700 mb-4">
              {properties.find(p => p.name === activeTab).desc}
            </p>
            
            {activeTab === "EPSILON" && (
              <p className="text-gray-700 mb-4">
                <strong>Note:</strong> Number.EPSILON is an ES6 feature and does not work in Internet Explorer.
              </p>
            )}
            
            {["MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER"].includes(activeTab) && (
              <p className="text-gray-700 mb-4">
                <strong>Note:</strong> These are ES6 features and do not work in Internet Explorer.
              </p>
            )}

            <h4 className="font-bold mb-3">Example:</h4>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples[activeTab]}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples[activeTab])}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied === activeTab ? "Copied!" : "Copy Example"}
            </button>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">See Also</h2>
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

export default Number_Properties;
