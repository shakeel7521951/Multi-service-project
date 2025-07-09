import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Const</h1>
          <p className="text-gray-600 text-lg">
            Understand how to use the const keyword in JavaScript ES6 for declaring constants.
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
        <section className="bg-[#FFFFCC] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">The const Keyword</h2>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> keyword was introduced in ES6 (2015).
          </p>
          <p className="text-gray-800 mb-3">
            Variables defined with <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> cannot be redeclared or reassigned.
          </p>
          <p className="text-gray-800 mb-3">
            <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> variables have Block Scope.
          </p>
          <p className="text-gray-800 mb-6">
            Use <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> when you know the value should not change.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More About ES6 »
          </button>
        </section>

        {/* Key Points Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Points About Const</h2>
          <ul className="space-y-3 list-disc pl-5 text-gray-700">
            <li>Must be initialized during declaration</li>
            <li>Cannot be reassigned after declaration</li>
            <li>Has block scope like <code className="bg-gray-100 px-1 py-0.5 rounded">let</code></li>
            <li>For objects and arrays, the contents can be modified but the reference cannot change</li>
            <li>Not hoisted to the top of their block scope</li>
          </ul>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Interactive Examples</h2>
          <p className="text-gray-700 mb-4">
            Explore these examples to understand how <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> works in different scenarios.
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">{examples[activeExample].title}</h3>
              <div className="flex gap-2">
                <button 
                  onClick={prevExample}
                  className="p-1 rounded hover:bg-gray-300"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextExample}
                  className="p-1 rounded hover:bg-gray-300"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples[activeExample].code}</code>
            </pre>
            
            <button
              onClick={() => handleCopy(examples[activeExample].code)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">var vs let vs const</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border">Keyword</th>
                  <th className="px-4 py-2 border">Scope</th>
                  <th className="px-4 py-2 border">Redeclare</th>
                  <th className="px-4 py-2 border">Reassign</th>
                  <th className="px-4 py-2 border">Hoisted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">var</td>
                  <td className="px-4 py-2 border">Function</td>
                  <td className="px-4 py-2 border">Yes</td>
                  <td className="px-4 py-2 border">Yes</td>
                  <td className="px-4 py-2 border">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">let</td>
                  <td className="px-4 py-2 border">Block</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">Yes</td>
                  <td className="px-4 py-2 border">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">const</td>
                  <td className="px-4 py-2 border">Block</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Browser Support */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Browser Support</h2>
          <p className="mb-4">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">const</code> keyword is not supported in Internet Explorer 11 or earlier.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="font-bold">Chrome 49</div>
              <div>Mar, 2016</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Edge 12</div>
              <div>Jul, 2015</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Firefox 36</div>
              <div>Jan, 2015</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Safari 11</div>
              <div>Sep, 2017</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Opera 36</div>
              <div>Mar, 2016</div>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our JavaScript references to learn more about variables, functions, and ES6 features.
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

export default Const;