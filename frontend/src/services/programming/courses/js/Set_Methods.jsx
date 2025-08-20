import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Set_Methods = () => {
  const methods = [
    "new Set()",
    "add()",
    "clear()",
    "delete()",
    "entries()",
    "forEach()",
    "has()",
    "keys()",
    "values()"
  ];

  const properties = [
    "size"
  ];

  const examples = [
    {
      title: "The new Set() Method",
      description: "Pass an array to the new Set() constructor:",
      code: `// Create a new Set\nconst letters = new Set(["a","b","c"]);`
    },
    {
      title: "The add() Method",
      description: "Adding elements to a Set:",
      code: `letters.add("d");\nletters.add("e");\n\n// Adding duplicate elements\nletters.add("a");\nletters.add("b");\nletters.add("c");\nletters.add("c");\nletters.add("c");\n\n// Note: Only unique values are stored in a Set`
    },
    {
      title: "The size Property",
      description: "Getting the number of elements in a Set:",
      code: `// Create a new Set\nconst mySet = new Set(["a","b","c"]);\n\n// Get the number of elements\nmySet.size; // Returns 3`
    },
    {
      title: "Listing Set Elements",
      description: "You can list all Set elements (values) with a for..of loop:",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// List all Elements\nlet text = "";\nfor (const x of letters) {\n  text += x;\n}`
    },
    {
      title: "The has() Method",
      description: "Check if a value exists in a Set:",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// Check if Set contains "d"\nanswer = letters.has("d"); // Returns false`
    },
    {
      title: "The forEach() Method",
      description: "Invoke a function for each Set element:",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// List all entries\nlet text = "";\nletters.forEach(function(value) {\n  text += value;\n})`
    },
    {
      title: "The values() Method",
      description: "Get an Iterator object with the values in a Set:",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// Get all Values\nconst myIterator = letters.values();\n\n// List all Values\nlet text = "";\nfor (const entry of myIterator) {\n  text += entry;\n}`
    },
    {
      title: "The keys() Method",
      description: "Get an Iterator object with the values in a Set (same as values()):",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// Create an Iterator\nconst myIterator = letters.keys();\n\n// List all Elements\nlet text = "";\nfor (const x of myIterator) {\n  text += x;\n}`
    },
    {
      title: "The entries() Method",
      description: "Get an Iterator with [value,value] pairs from a Set:",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// Get all Entries\nconst myIterator = letters.entries();\n\n// List all Entries\nlet text = "";\nfor (const entry of myIterator) {\n  text += entry;\n}`
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard
      .writeText(examples[index].code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Set Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript Set objects with our comprehensive guide to methods and properties.
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
          <h2 className="text-3xl font-bold mb-4">What is a JavaScript Set?</h2>
          <p className="text-gray-800 mb-3">
            A Set is a collection of unique values. Each value can only occur once in a Set.
          </p>
          <p className="text-gray-800 mb-3">
            Set objects are collections of values where each value must be unique. The values can be of any type.
          </p>
          <p className="text-gray-800 mb-6">
            Explore the methods and properties below to learn how to work with Sets in JavaScript.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Now »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Set Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {methods.map((method, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {method}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Set Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {properties.map((prop, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {prop}
              </button>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Set Method Examples</h2>
          
          {examples.map((example, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-2">{example.title}</h3>
              <p className="text-gray-700 mb-4">{example.description}</p>
              <div className="bg-[#E7E9EB] p-6 rounded-xl">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
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

export default Set_Methods;
