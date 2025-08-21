import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">JavaScript Strings</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Learn how to work with text in JavaScript using strings and template literals.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-sm border border-[#c5e5d4]">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">JavaScript Strings</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            Strings are used for storing and manipulating text in JavaScript.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            A JavaScript string is zero or more characters written inside quotes. 
            You can use single or double quotes, and template literals (backticks) 
            for advanced string operations.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Strings are primitive values but can also be created as objects using 
            the <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">new String()</code> 
            constructor (though this is not recommended).
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2.5 rounded-md transition-all shadow hover:shadow-md">
            Try String Examples »
          </button>
        </section>

        {/* Code Examples Section */}
        <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            String Examples
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Explore different ways to create and manipulate strings in JavaScript.
          </p>
          
          {/* Example Tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {codeExamples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === idx
                    ? "bg-[#E7E9EB] text-[#04AA6D] border-b-2 border-[#04AA6D] shadow-inner"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm"
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>
          
          {/* Active Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-xl border border-gray-300">
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
            <button
              onClick={() => handleCopy(codeExamples[activeTab].code)}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-4 py-2 rounded transition"
            >
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Key Concepts</h2>
          
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quotes Inside Strings</h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              You can use quotes inside a string, as long as they don't match 
              the quotes surrounding the string:
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#04AA6D]">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{`let answer1 = "It's alright";\nlet answer2 = "He is called 'Johnny'";\nlet answer3 = 'He is called "Johnny"';`}</code>
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Escape Characters</h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              The backslash escape character (\) turns special characters into string characters:
            </p>
            <div className="bg-white p-4 rounded-lg overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Code</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Result</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">\'</td>
                    <td className="py-3 px-4">'</td>
                    <td className="py-3 px-4">Single quote</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">\"</td>
                    <td className="py-3 px-4">"</td>
                    <td className="py-3 px-4">Double quote</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">\\</td>
                    <td className="py-3 px-4">\</td>
                    <td className="py-3 px-4">Backslash</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">String Objects</h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Strings can be created as objects, but this is not recommended:
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#04AA6D]">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{`let x = "John"; // primitive\nlet y = new String("John"); // object\n\n// Comparison:\nconsole.log(x == y); // true\nconsole.log(x === y); // false`}</code>
              </pre>
            </div>
            <p className="text-gray-800 mt-4 leading-relaxed">
              Comparing two String objects always returns false because they are different objects.
            </p>
          </div>
        </section>

        {/* String References */}
        <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">String References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Explore all string methods and properties available in JavaScript.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-lg">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strings;