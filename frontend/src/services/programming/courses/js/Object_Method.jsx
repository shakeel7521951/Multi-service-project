import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Method = () => {
  const references = [
    "Object.assign()",
    "Object.create()",
    "Object.entries()",
    "Object.fromEntries()",
    "Object.keys()",
    "Object.values()",
    "Object.groupBy()",
    "Map.groupBy()",
    "for...in Loop",
    "Object Properties",
    "Object Prototypes",
    "Object Constructors",
    "Object Accessors",
    "Object Seal/Freeze",
    "Complete Reference"
  ];

  const exampleCode = `// Object.assign() example
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
// result: { a: 1, b: 4, c: 5 }`;

  const groupByExample = `// Object.groupBy() example (ES2024)
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 }
];

const result = Object.groupBy(inventory, ({ quantity }) => 
  quantity > 5 ? "ok" : "restock");
`;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("assign");

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
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript object manipulation with these powerful built-in methods.
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
        <section className="bg-[#E7F5FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Working with JavaScript Objects</h2>
          <p className="text-gray-800 mb-3">
            JavaScript objects are fundamental to modern web development. The Object class provides 
            powerful methods to manipulate, iterate, and transform objects.
          </p>
          <p className="text-gray-800 mb-3">
            These methods allow you to merge objects, create new objects from existing ones, 
            convert objects to arrays, and perform complex data manipulations.
          </p>
          <p className="text-gray-800 mb-6">
            Explore these essential methods with practical examples below.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Now »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Object Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Method Card 1 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-3">Object.assign()</h3>
              <p className="text-gray-700 mb-4">
                Copies properties from one or more source objects to a target object.
              </p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>Object.assign(target, ...sources)</code>
              </pre>
            </div>

            {/* Method Card 2 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-3">Object.entries()</h3>
              <p className="text-gray-700 mb-4">
                Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
              </p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>Object.entries(obj)</code>
              </pre>
            </div>

            {/* Method Card 3 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-3">Object.groupBy()</h3>
              <p className="text-gray-700 mb-4">
                Groups elements of an object according to string values returned from a callback function (ES2024).
              </p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>Object.groupBy(items, callbackFn)</code>
              </pre>
            </div>

            {/* Method Card 4 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl mb-3">Object.keys()</h3>
              <p className="text-gray-700 mb-4">
                Returns an array of a given object's own enumerable property names.
              </p>
              <pre className="bg-white p-4 font-mono text-sm rounded overflow-x-auto">
                <code>Object.keys(obj)</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Examples</h2>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="flex space-x-4 mb-4">
              <button 
                onClick={() => setActiveTab("assign")} 
                className={`px-4 py-2 rounded ${activeTab === "assign" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
              >
                Object.assign()
              </button>
              <button 
                onClick={() => setActiveTab("groupBy")} 
                className={`px-4 py-2 rounded ${activeTab === "groupBy" ? "bg-[#04AA6D] text-white" : "bg-gray-200"}`}
              >
                Object.groupBy()
              </button>
            </div>

            {activeTab === "assign" && (
              <>
                <h3 className="font-bold mb-3">Object.assign() Example:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{exampleCode}</code>
                </pre>
                <button
                  onClick={() => handleCopy(exampleCode)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}

            {activeTab === "groupBy" && (
              <>
                <h3 className="font-bold mb-3">Object.groupBy() Example (ES2024):</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{groupByExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(groupByExample)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-yellow-800">
                    <strong>Browser Support Note:</strong> Object.groupBy() is an ES2024 feature. 
                    Check compatibility before using in production.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object Method References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive reference of JavaScript Object methods with detailed 
            explanations, examples, and browser compatibility information.
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


export default Object_Method;
