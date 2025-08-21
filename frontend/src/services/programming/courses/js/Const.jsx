import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Const = () => {
  const references = [
    "JavaScript Variables",
    "JavaScript Let",
    "JavaScript Var",
    "JavaScript Scope",
    "JavaScript Hoisting",
    "Data Types",
    "Arrays",
    "Objects",
    "Functions",
    "Arrow Functions",
    "Template Literals",
    "Destructuring",
    "Spread Operator",
    "Modules",
    "ES6 Features"
  ];

  const examples = [
    {
      title: "Cannot be Reassigned",
      code: `const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error`
    },
    {
      title: "Must be Assigned",
      code: `// Correct
const PI = 3.14159265359;

// Incorrect
const PI;
PI = 3.14159265359;`
    },
    {
      title: "Constant Arrays",
      code: `// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");`
    },
    {
      title: "Constant Objects",
      code: `// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";`
    },
    {
      title: "Block Scope",
      code: `const x = 10;
// Here x is 10

{
  const x = 2;
  // Here x is 2
}

// Here x is 10`
    }
  ];

  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  const nextExample = () => {
    setActiveExample((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
  };

  const prevExample = () => {
    setActiveExample((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">JavaScript Const</h1>
          <div className="w-16 h-1.5 bg-[#04AA6D] mb-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Understand how to use the const keyword in JavaScript ES6 for declaring constants.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-medium px-5 py-2.5 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-sm">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#FFFFCC] p-8 rounded-xl shadow-sm border border-yellow-200">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">The const Keyword</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            The <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> keyword was introduced in ES6 (2015).
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            Variables defined with <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> cannot be redeclared or reassigned.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> variables have Block Scope.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Use <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> when you know the value should not change.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-medium px-6 py-2.5 rounded-md transition-all shadow-md hover:shadow-sm">
            Learn More About ES6 »
          </button>
        </section>

        {/* Key Points Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-5 text-gray-800">Key Points About Const</h2>
          <ul className="space-y-3 pl-5">
            {[
              "Must be initialized during declaration",
              "Cannot be reassigned after declaration",
              "Has block scope like let",
              "For objects and arrays, the contents can be modified but the reference cannot change",
              "Not hoisted to the top of their block scope"
            ].map((point, index) => (
              <li key={index} className="relative pl-5 text-gray-700 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-[#04AA6D] before:rounded-full">
                {point.includes("let") ? (
                  <>
                    Has block scope like <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">let</code>
                  </>
                ) : (
                  point
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Interactive Examples</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore these examples to understand how <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> works in different scenarios.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">{examples[activeExample].title}</h3>
              <div className="flex gap-2">
                <button 
                  onClick={prevExample}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Previous example"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextExample}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Next example"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-md overflow-x-auto">
                <code>{examples[activeExample].code}</code>
              </pre>
              <button
                onClick={() => handleCopy(examples[activeExample].code)}
                className="absolute top-3 right-3 p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                aria-label="Copy code"
              >
                {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </button>
            </div>
            
            <button
              onClick={() => handleCopy(examples[activeExample].code)}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-medium mt-4 px-5 py-2.5 rounded-md transition-all shadow-md hover:shadow-sm"
            >
              {copied ? "Copied!" : "Copy Code"} {copied ? <FaCheck /> : <FaCopy />}
            </button>
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-5 text-gray-800">var vs let vs const</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Keyword</th>
                  <th className="px-5 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Scope</th>
                  <th className="px-5 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Redeclare</th>
                  <th className="px-5 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Reassign</th>
                  <th className="px-5 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Hoisted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 border-b border-gray-200 font-mono">var</td>
                  <td className="px-5 py-4 border-b border-gray-200">Function</td>
                  <td className="px-5 py-4 border-b border-gray-200">Yes</td>
                  <td className="px-5 py-4 border-b border-gray-200">Yes</td>
                  <td className="px-5 py-4 border-b border-gray-200">Yes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 border-b border-gray-200 font-mono">let</td>
                  <td className="px-5 py-4 border-b border-gray-200">Block</td>
                  <td className="px-5 py-4 border-b border-gray-200">No</td>
                  <td className="px-5 py-4 border-b border-gray-200">Yes</td>
                  <td className="px-5 py-4 border-b border-gray-200">No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 border-b border-gray-200 font-mono text-[#04AA6D] font-semibold">const</td>
                  <td className="px-5 py-4 border-b border-gray-200">Block</td>
                  <td className="px-5 py-4 border-b border-gray-200">No</td>
                  <td className="px-5 py-4 border-b border-gray-200">No</td>
                  <td className="px-5 py-4 border-b border-gray-200">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support */}
        <section className="bg-[#FFF4A3] p-8 rounded-xl shadow-sm border border-yellow-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Browser Support</h2>
          <p className="mb-6 text-gray-800">
            The <code className="bg-gray-100 px-1.5 py-0.5 rounded-md font-mono text-[#04AA6D]">const</code> keyword is not supported in Internet Explorer 11 or earlier.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { browser: "Chrome 49", date: "Mar, 2016" },
              { browser: "Edge 12", date: "Jul, 2015" },
              { browser: "Firefox 36", date: "Jan, 2015" },
              { browser: "Safari 11", date: "Sep, 2017" },
              { browser: "Opera 36", date: "Mar, 2016" }
            ].map((browser, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-gray-800">{browser.browser}</div>
                <div className="text-gray-600">{browser.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-5 text-gray-800">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to learn more about variables, functions, and ES6 features.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-md transition-all shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-medium px-5 py-2.5 rounded-md hover:bg-[#03945f] transition-all shadow-md hover:shadow-sm">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Const;