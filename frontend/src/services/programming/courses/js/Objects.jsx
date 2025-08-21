import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Objects = () => {
  const references = [
    "Object Properties",
    "Object Methods",
    "Object Literals",
    "Object Constructors",
    "Object Accessors",
    "Object Prototypes",
    "Object Iterables",
    "Object Sets",
    "Object Maps",
    "Object JSON",
    "Object this",
    "Object ES5",
    "Object ES6",
    "Object Best Practices",
    "Object Examples",
  ];

  const jsExample = `const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  start: function() {
    return "Car started!";
  }
};`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(jsExample)
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
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Objects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Master the power of objects - the fundamental building blocks of JavaScript programming.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            <FaChevronLeft className="text-sm" />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-lg border-l-4 border-[#04AA6D]">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">Understanding JavaScript Objects</h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            In JavaScript, objects are king! Almost everything is an object. Objects are variables that can contain multiple values in key:value pairs.
          </p>
          <p className="text-gray-800 mb-3 leading-relaxed">
            Objects are mutable, addressed by reference (not by value), and can contain properties and methods that let you structure and organize your code effectively.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Let's explore how objects work with practical examples and real-world analogies.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md">
            Start Learning Now »
          </button>
        </section>

        {/* Real Life Objects Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real Life Objects</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            In real life, objects are things like: houses, cars, people, animals, or any other subjects.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-6 shadow-inner">
            <h3 className="font-bold text-lg mb-4 text-[#04AA6D]">Car Object Example:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-[#04AA6D] border-b pb-2">Properties</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">P</span>
                    <span className="font-mono text-sm">car.name = "Fiat"</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">P</span>
                    <span className="font-mono text-sm">car.model = "500"</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">P</span>
                    <span className="font-mono text-sm">car.weight = "850kg"</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">P</span>
                    <span className="font-mono text-sm">car.color = "white"</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-[#04AA6D] border-b pb-2">Methods</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-[#FF9800] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">M</span>
                    <span className="font-mono text-sm">car.start()</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#FF9800] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">M</span>
                    <span className="font-mono text-sm">car.drive()</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#FF9800] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">M</span>
                    <span className="font-mono text-sm">car.brake()</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#FF9800] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">M</span>
                    <span className="font-mono text-sm">car.stop()</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">Object Properties</h3>
              <p className="text-gray-700">A real life car has properties like weight and color. Car objects have the same properties, but the values differ from car to car.</p>
            </div>
            
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">Object Methods</h3>
              <p className="text-gray-700">A real life car has methods like start and stop. Car objects have the same methods, but the methods are performed at different times.</p>
            </div>
          </div>
        </section>

        {/* Variables vs Objects Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript Variables vs Objects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">JavaScript Variables</h3>
              <p className="mb-3 text-gray-700">JavaScript variables are containers for single data values.</p>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <h4 className="font-mono text-sm mb-2 text-gray-600">Example:</h4>
                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">let car = "Fiat";</code>
              </div>
            </div>
            
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">JavaScript Objects</h3>
              <p className="mb-3 text-gray-700">Objects are variables too. But objects can contain many values.</p>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <h4 className="font-mono text-sm mb-2 text-gray-600">Example:</h4>
                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">const car = {"{"}type:"Fiat", model:"500", color:"white"{"}"};</code>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400 shadow-sm">
            <p className="font-semibold text-gray-800">Note:</p>
            <p className="text-gray-700">It is a common practice to declare objects with the <span className="font-mono bg-yellow-200 px-1 py-0.5 rounded">const</span> keyword.</p>
          </div>
        </section>

        {/* Object Definition Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript Object Definition</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">How to Define a JavaScript Object</h3>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">1</span>
                  Using an Object Literal
                </li>
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">2</span>
                  Using the <span className="font-mono mx-1">new</span> Keyword
                </li>
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">3</span>
                  Using an Object Constructor
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">JavaScript Object Literal</h3>
              <p className="mb-3 text-gray-700">An object literal is a list of name:value pairs inside curly braces {"{}"}.</p>
              <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-inner">
                <code className="font-mono text-sm block mb-2 bg-gray-900 text-gray-100 p-3 rounded-lg">{"{"}firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"{"}"}</code>
                <p className="text-sm text-gray-600">Note: name:value pairs are also called key:value pairs. Object literals are also called object initializers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Objects Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Creating JavaScript Objects</h2>
          
          <div className="space-y-6">
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">Example 1: Create with properties</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border-l-4 border-[#04AA6D]">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};`}</code>
              </pre>
            </div>
            
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">Example 2: Create empty then add properties</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border-l-4 border-[#04AA6D]">
                <code>{`const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";`}</code>
              </pre>
            </div>
            
            <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-3 text-gray-800">Example 3: Using new Object()</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border-l-4 border-[#04AA6D]">
                <code>{`const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";`}</code>
              </pre>
              <div className="mt-3 bg-yellow-100 p-3 rounded text-sm border-l-4 border-yellow-400">
                <p className="font-semibold text-gray-800">Note:</p>
                <p className="text-gray-700">The examples above do exactly the same. For readability, simplicity and execution speed, use the object literal method.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Object Properties Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Object Properties</h2>
          
          <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm mb-5">
            <p className="text-gray-700 mb-3">The named values, in JavaScript objects, are called properties.</p>
            <div className="mt-3 bg-white p-4 rounded-lg shadow-inner">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#04AA6D]">
                    <th className="text-left p-3 font-semibold text-gray-800">Property</th>
                    <th className="text-left p-3 font-semibold text-gray-800">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">firstName</td>
                    <td className="p-3">John</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">lastName</td>
                    <td className="p-3">Doe</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">age</td>
                    <td className="p-3">50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">eyeColor</td>
                    <td className="p-3">blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
            <h3 className="font-bold mb-3 text-gray-800">Accessing Object Properties</h3>
            <p className="mb-3 text-gray-700">You can access object properties in two ways:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <code className="font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg block mb-2">objectName.propertyName</code>
                <p className="mt-2 text-sm text-gray-600">Example: <span className="font-mono bg-gray-100 px-2 py-1 rounded">person.lastName;</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <code className="font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg block mb-2">objectName["propertyName"]</code>
                <p className="mt-2 text-sm text-gray-600">Example: <span className="font-mono bg-gray-100 px-2 py-1 rounded">person["lastName"];</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Object Methods Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript Object Methods</h2>
          
          <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm mb-5">
            <p className="text-gray-700 mb-3">Methods are actions that can be performed on objects. Methods are function definitions stored as property values.</p>
            <div className="mt-3 bg-white p-4 rounded-lg shadow-inner">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#04AA6D]">
                    <th className="text-left p-3 font-semibold text-gray-800">Property</th>
                    <th className="text-left p-3 font-semibold text-gray-800">Property Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">firstName</td>
                    <td className="p-3">John</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">lastName</td>
                    <td className="p-3">Doe</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">age</td>
                    <td className="p-3">50</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">eyeColor</td>
                    <td className="p-3">blue</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">fullName</td>
                    <td className="p-3 font-mono text-sm">function() {"{"}return this.firstName + " " + this.lastName;{"}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#E7E9EB] p-5 rounded-xl shadow-sm">
            <h3 className="font-bold mb-3 text-gray-800">Method Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border-l-4 border-[#04AA6D]">
              <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};`}</code>
            </pre>
            <p className="mt-3 text-gray-700">In the example above, <span className="font-mono bg-gray-100 px-2 py-1 rounded">this</span> refers to the <span className="font-mono bg-gray-100 px-2 py-1 rounded">person</span> object.</p>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-xl shadow-lg border-l-4 border-[#04AA6D]">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">Key JavaScript Object Concepts</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">In JavaScript, Objects are King.</h3>
              <p className="text-gray-700">If you understand objects, you understand JavaScript.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Objects are containers for:</h3>
              <ul className="list-none pl-0 mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</span>
                  <span><strong>Properties</strong> - named values</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</span>
                  <span><strong>Methods</strong> - functions stored as properties</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">In JavaScript, almost "everything" is an object:</h3>
              <ul className="list-none pl-0 mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">○</span>
                  Booleans, Numbers, Strings can be objects (if defined with <span className="font-mono mx-1">new</span>)
                </li>
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">○</span>
                  Dates, Maths, Regular expressions are always objects
                </li>
                <li className="flex items-center">
                  <span className="bg-[#04AA6D] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">○</span>
                  Arrays, Functions are objects
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">JavaScript Primitives</h3>
              <p className="text-gray-700 mb-3">Primitive values are immutable (they cannot be changed). JavaScript has 7 primitive data types:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["string", "number", "boolean", "null", "undefined", "symbol", "bigint"].map((type, idx) => (
                  <span key={idx} className="bg-white p-3 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Practice Live with JavaScript Objects
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Try out JavaScript object code directly in your browser and see the results instantly.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl shadow-inner">
            <h3 className="font-bold mb-3 text-gray-800">Example:</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 border-l-4 border-[#04AA6D] p-5 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{jsExample}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md transition-colors duration-200"
                aria-label="Copy code"
              >
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-3 rounded-lg transition-all duration-200 w-full md:w-auto"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#04AA6D] to-[#028a58] bg-clip-text text-transparent">
            JavaScript Object References
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Use our comprehensive JavaScript object references to find details about object properties, methods, and usage patterns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition-all duration-200 shadow-md hover:shadow-lg">
            Next
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Objects;