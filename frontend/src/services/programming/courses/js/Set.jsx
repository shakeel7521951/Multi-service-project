import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Set = () => {
  const references = [
    "Set Methods",
    "Set Properties",
    "Browser Support",
    "ES6 Features",
    "JavaScript Data Types",
    "Map vs Set",
    "WeakSet",
    "Iterators",
    "Array to Set",
    "Set to Array",
    "Set Operations",
    "Performance",
    "Use Cases",
    "Polyfills",
    "Compatibility Table"
  ];

  const examples = [
    {
      title: "Creating a Set",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);`
    },
    {
      title: "Adding Values",
      code: `// Create a Set\nconst letters = new Set();\n\n// Add Values\nletters.add("a");\nletters.add("b");\nletters.add("c");`
    },
    {
      title: "Adding Variables",
      code: `// Create Variables\nconst a = "a";\nconst b = "b";\nconst c = "c";\n\n// Add to Set\nletters.add(a);\nletters.add(b);\nletters.add(c);`
    },
    {
      title: "Iterating Through Set",
      code: `// Create a Set\nconst letters = new Set(["a","b","c"]);\n\n// List all Elements\nlet text = "";\nfor (const x of letters) {\n  text += x;\n}`
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Sets</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript Sets - collections of unique values with powerful methods.
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
          <h2 className="text-3xl font-bold mb-4">What are JavaScript Sets?</h2>
          <p className="text-gray-800 mb-3">
            A JavaScript Set is a collection of unique values where each value can only occur once.
          </p>
          <p className="text-gray-800 mb-3">
            Sets can hold values of any type, whether primitive values or object references.
          </p>
          <p className="text-gray-800 mb-6">
            Sets provide efficient methods for adding, deleting, and checking the existence of values.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Set Examples
          </h2>
          <p className="text-gray-700 mb-4">
            Explore common Set operations with these practical examples.
          </p>
          
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}:</h3>
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
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Features of Sets</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Only stores unique values (no duplicates)</li>
            <li>Maintains insertion order of elements</li>
            <li>Has methods for adding, deleting, and checking elements</li>
            <li>Can be iterated with for...of loops</li>
            <li>Provides efficient lookups (faster than arrays)</li>
            <li>Size property tracks the number of elements</li>
          </ul>
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Browser Support</h2>
          <p className="mb-4">Set is an ES6 feature (JavaScript 2015) and is supported in all modern browsers:</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-3 rounded">
              <div className="font-bold">Chrome 51</div>
              <div className="text-sm">May 2016</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold">Edge 15</div>
              <div className="text-sm">Apr 2017</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold">Firefox 54</div>
              <div className="text-sm">Jun 2017</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold">Safari 10</div>
              <div className="text-sm">Sep 2016</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold">Opera 38</div>
              <div className="text-sm">Jun 2016</div>
            </div>
          </div>
          <p className="mt-4 text-red-600 font-medium">Note: Not supported in Internet Explorer</p>
        </section>

        {/* Set References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Set References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for all Set methods, properties, and advanced usage patterns.
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

export default Set;
