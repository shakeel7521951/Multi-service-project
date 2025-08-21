import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Es_Six = () => {
  const features = [
    "The let keyword",
    "The const keyword",
    "Arrow Functions",
    "Object Destructuring",
    "Array Destructuring",
    "Spread Operator",
    "For/of Loop",
    "Map Objects",
    "Set Objects",
    "Classes",
    "Promises",
    "Symbol Type",
    "Default Parameters",
    "Function Rest Parameter",
    "String Methods",
    "Array Methods",
    "New Math Methods",
    "Number Properties",
    "Global Methods",
    "RegExp Modifiers",
    "Modules"
  ];

  const letExample = `var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10`;

  const arrowExample = `// ES5
var multiply = function(x, y) {
  return x * y;
}

// ES6
const multiply = (x, y) => x * y;`;

  const classExample = `class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);`;

  const [copied, setCopied] = useState({
    let: false,
    arrow: false,
    class: false
  });

  const handleCopy = async (code, type) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [type]: false }));
      }, 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center sm:text-start">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">JavaScript ES6 (2015)</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            ECMAScript 2015 introduced modern features that transformed JavaScript. Learn the new syntax and tools that make coding faster and easier.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#E7F5FE] p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">What is ES6?</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            ES6 introduced significant changes, including classes, arrow functions, template literals, and block-scoped variables with <code>let</code> and <code>const</code>.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            These updates made JavaScript more powerful, cleaner, and easier to use across modern browsers.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded-lg shadow transition">
            Start Learning ES6 »
          </button>
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#FFF4CE] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
          <p className="text-gray-700 mb-6">ES6 is supported in all modern browsers since 2016-2017:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {["Chrome v51+","Edge v15+","Firefox v54+","Safari v10+","Opera v38+"].map((browser, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <div className="font-bold text-blue-600">{browser.split(" ")[0]}</div>
                <div className="text-sm text-gray-600">{browser.split(" ")[1]} {browser.split(" ")[2] || ""}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">⚠️ Not supported in Internet Explorer.</p>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Key ES6 Features</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore some of the most useful features added in ES6 that make modern JavaScript development smoother.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg shadow transition"
              >
                {feature}
              </button>
            ))}
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-2">ES6 Code Examples</h2>

          {/* let example */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-3">let Keyword (Block Scope)</h3>
            <pre className="bg-black text-green-400 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{letExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(letExample, 'let')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copied.let ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Arrow function example */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-3">Arrow Functions</h3>
            <pre className="bg-black text-green-400 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{arrowExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(arrowExample, 'arrow')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copied.arrow ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Class example */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-3">Classes</h3>
            <pre className="bg-black text-green-400 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{classExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(classExample, 'class')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copied.class ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-[#F8F9FA] p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Additional ES6 Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">New String Methods</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><code>String.includes()</code> - Check if string contains substring</li>
                <li><code>String.startsWith()</code> - Check if string starts with substring</li>
                <li><code>String.endsWith()</code> - Check if string ends with substring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">New Array Methods</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><code>Array.from()</code> - Create array from array-like objects</li>
                <li><code>Array.find()</code> - Find first element that matches condition</li>
                <li><code>Array.findIndex()</code> - Find index of first matching element</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js_Es_Six;
