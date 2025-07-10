import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Strings = () => {
  const references = [
    "String Methods",
    "String Search",
    "String Templates",
    "String Conversion",
    "String Comparison",
    "String Concatenation",
    "String Length",
    "String Slice",
    "String Replace",
    "String Case",
    "String Trim",
    "String Padding",
    "String Extraction",
    "String Repeat",
    "String HTML Wrappers"
  ];

  const codeExamples = [
    {
      title: "Basic Strings",
      code: `let text = "John Doe";\nlet carName1 = "Volvo XC60";\nlet carName2 = 'Volvo XC60';`
    },
    {
      title: "Quotes Inside Strings",
      code: `let answer1 = "It's alright";\nlet answer2 = "He is called 'Johnny'";\nlet answer3 = 'He is called "Johnny"';`
    },
    {
      title: "Template Strings",
      code: `let text = \`He's often called "Johnny"\`;`
    },
    {
      title: "String Length",
      code: `let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\nlet length = text.length;`
    },
    {
      title: "Escape Characters",
      code: `let text = "We are the so-called \\"Vikings\\" from the north.";\nlet text2 = 'It\\'s alright.';\nlet text3 = "The character \\\\ is called backslash.";`
    },
    {
      title: "Multiline Strings",
      code: `let text =\n\`The quick\nbrown fox\njumps over\nthe lazy dog\`;`
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Strings</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with text in JavaScript using strings and template literals.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Strings</h2>
          <p className="text-gray-800 mb-3">
            Strings are used for storing and manipulating text in JavaScript.
          </p>
          <p className="text-gray-800 mb-3">
            A JavaScript string is zero or more characters written inside quotes. 
            You can use single or double quotes, and template literals (backticks) 
            for advanced string operations.
          </p>
          <p className="text-gray-800 mb-6">
            Strings are primitive values but can also be created as objects using 
            the <code className="bg-gray-200 px-1 rounded">new String()</code> 
            constructor (though this is not recommended).
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try String Examples »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            String Examples
          </h2>
          <p className="text-gray-700 mb-4">
            Explore different ways to create and manipulate strings in JavaScript.
          </p>
          
          {/* Example Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {codeExamples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-t-lg font-medium ${
                  activeTab === idx
                    ? "bg-[#E7E9EB] text-[#04AA6D] border-b-2 border-[#04AA6D]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>
          
          {/* Active Example */}
          <div className="bg-[#E7E9EB] p-6 rounded-b-xl rounded-tr-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{codeExamples[activeTab].code}</code>
            </pre>
            <button
              onClick={() => handleCopy(codeExamples[activeTab].code)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Key Concepts</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Quotes Inside Strings</h3>
            <p className="text-gray-800 mb-3">
              You can use quotes inside a string, as long as they don't match 
              the quotes surrounding the string:
            </p>
            <pre className="bg-white p-3 rounded text-sm mb-3">
              <code>{`let answer1 = "It's alright";\nlet answer2 = "He is called 'Johnny'";\nlet answer3 = 'He is called "Johnny"';`}</code>
            </pre>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Escape Characters</h3>
            <p className="text-gray-800 mb-3">
              The backslash escape character (\) turns special characters into string characters:
            </p>
            <div className="bg-white p-3 rounded text-sm mb-3 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Code</th>
                    <th className="text-left py-2 px-4">Result</th>
                    <th className="text-left py-2 px-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-mono">\'</td>
                    <td className="py-2 px-4">'</td>
                    <td className="py-2 px-4">Single quote</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-mono">\"</td>
                    <td className="py-2 px-4">"</td>
                    <td className="py-2 px-4">Double quote</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-mono">\\</td>
                    <td className="py-2 px-4">\</td>
                    <td className="py-2 px-4">Backslash</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">String Objects</h3>
            <p className="text-gray-800 mb-3">
              Strings can be created as objects, but this is not recommended:
            </p>
            <pre className="bg-white p-3 rounded text-sm mb-3">
              <code>{`let x = "John"; // primitive\nlet y = new String("John"); // object\n\n// Comparison:\nconsole.log(x == y); // true\nconsole.log(x === y); // false`}</code>
            </pre>
            <p className="text-gray-800">
              Comparing two String objects always returns false because they are different objects.
            </p>
          </div>
        </section>

        {/* String References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">String References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore all string methods and properties available in JavaScript.
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

export default Strings;