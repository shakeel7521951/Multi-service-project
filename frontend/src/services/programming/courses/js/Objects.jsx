import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Objects</h1>
          <p className="text-gray-600 text-lg">
            Master the power of objects - the fundamental building blocks of JavaScript programming.
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
          <h2 className="text-3xl font-bold mb-4">Understanding JavaScript Objects</h2>
          <p className="text-gray-800 mb-3">
            In JavaScript, objects are king! Almost everything is an object. Objects are variables that can contain multiple values in key:value pairs.
          </p>
          <p className="text-gray-800 mb-3">
            Objects are mutable, addressed by reference (not by value), and can contain properties and methods that let you structure and organize your code effectively.
          </p>
          <p className="text-gray-800 mb-6">
            Let's explore how objects work with practical examples and real-world analogies.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Real Life Objects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Real Life Objects</h2>
          <p className="text-gray-700 mb-4">
            In real life, objects are things like: houses, cars, people, animals, or any other subjects.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4">Car Object Example:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-[#04AA6D]">Properties</h4>
                <ul className="space-y-2">
                  <li><span className="font-mono">car.name = "Fiat"</span></li>
                  <li><span className="font-mono">car.model = "500"</span></li>
                  <li><span className="font-mono">car.weight = "850kg"</span></li>
                  <li><span className="font-mono">car.color = "white"</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#04AA6D]">Methods</h4>
                <ul className="space-y-2">
                  <li><span className="font-mono">car.start()</span></li>
                  <li><span className="font-mono">car.drive()</span></li>
                  <li><span className="font-mono">car.brake()</span></li>
                  <li><span className="font-mono">car.stop()</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Object Properties</h3>
              <p>A real life car has properties like weight and color. Car objects have the same properties, but the values differ from car to car.</p>
            </div>
            
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Object Methods</h3>
              <p>A real life car has methods like start and stop. Car objects have the same methods, but the methods are performed at different times.</p>
            </div>
          </div>
        </section>

        {/* Variables vs Objects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Variables vs Objects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">JavaScript Variables</h3>
              <p className="mb-3">JavaScript variables are containers for single data values.</p>
              <div className="bg-white p-3 rounded">
                <h4 className="font-mono text-sm mb-1">Example:</h4>
                <code className="font-mono text-sm">let car = "Fiat";</code>
              </div>
            </div>
            
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">JavaScript Objects</h3>
              <p className="mb-3">Objects are variables too. But objects can contain many values.</p>
              <div className="bg-white p-3 rounded">
                <h4 className="font-mono text-sm mb-1">Example:</h4>
                <code className="font-mono text-sm">const car = {"{"}type:"Fiat", model:"500", color:"white"{"}"};</code>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-semibold">Note:</p>
            <p>It is a common practice to declare objects with the <span className="font-mono">const</span> keyword.</p>
          </div>
        </section>

        {/* Object Definition Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Object Definition</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How to Define a JavaScript Object</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using an Object Literal</li>
                <li>Using the <span className="font-mono">new</span> Keyword</li>
                <li>Using an Object Constructor</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">JavaScript Object Literal</h3>
              <p className="mb-3">An object literal is a list of name:value pairs inside curly braces {"{}"}.</p>
              <div className="bg-[#E7E9EB] p-4 rounded-lg">
                <code className="font-mono text-sm block mb-2">{"{"}firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"{"}"}</code>
                <p className="text-sm">Note: name:value pairs are also called key:value pairs. Object literals are also called object initializers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Objects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Creating JavaScript Objects</h2>
          
          <div className="space-y-6">
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Example 1: Create with properties</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};`}</code>
              </pre>
            </div>
            
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Example 2: Create empty then add properties</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>{`const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";`}</code>
              </pre>
            </div>
            
            <div className="bg-[#E7E9EB] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Example 3: Using new Object()</h3>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                <code>{`const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";`}</code>
              </pre>
              <div className="mt-2 bg-yellow-100 p-2 rounded text-sm">
                <p className="font-semibold">Note:</p>
                <p>The examples above do exactly the same. For readability, simplicity and execution speed, use the object literal method.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Object Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Object Properties</h2>
          
          <div className="bg-[#E7E9EB] p-4 rounded-lg mb-4">
            <p>The named values, in JavaScript objects, are called properties.</p>
            <div className="mt-3 bg-white p-3 rounded">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Property</th>
                    <th className="text-left p-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-mono">firstName</td>
                    <td className="p-2">John</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">lastName</td>
                    <td className="p-2">Doe</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">age</td>
                    <td className="p-2">50</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">eyeColor</td>
                    <td className="p-2">blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#E7E9EB] p-4 rounded-lg">
            <h3 className="font-bold mb-2">Accessing Object Properties</h3>
            <p className="mb-3">You can access object properties in two ways:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <code className="font-mono text-sm">objectName.propertyName</code>
                <p className="mt-2 text-sm">Example: <span className="font-mono">person.lastName;</span></p>
              </div>
              <div className="bg-white p-3 rounded">
                <code className="font-mono text-sm">objectName["propertyName"]</code>
                <p className="mt-2 text-sm">Example: <span className="font-mono">person["lastName"];</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Object Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">JavaScript Object Methods</h2>
          
          <div className="bg-[#E7E9EB] p-4 rounded-lg mb-4">
            <p>Methods are actions that can be performed on objects. Methods are function definitions stored as property values.</p>
            <div className="mt-3 bg-white p-3 rounded">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Property</th>
                    <th className="text-left p-2">Property Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-mono">firstName</td>
                    <td className="p-2">John</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">lastName</td>
                    <td className="p-2">Doe</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">age</td>
                    <td className="p-2">50</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">eyeColor</td>
                    <td className="p-2">blue</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">fullName</td>
                    <td className="p-2 font-mono">function() {"{"}return this.firstName + " " + this.lastName;{"}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#E7E9EB] p-4 rounded-lg">
            <h3 className="font-bold mb-2">Method Example</h3>
            <pre className="bg-white p-3 rounded overflow-x-auto">
              <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};`}</code>
            </pre>
            <p className="mt-2">In the example above, <span className="font-mono">this</span> refers to the <span className="font-mono">person</span> object.</p>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Key JavaScript Object Concepts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">In JavaScript, Objects are King.</h3>
              <p>If you understand objects, you understand JavaScript.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Objects are containers for:</h3>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Properties</strong> - named values</li>
                <li><strong>Methods</strong> - functions stored as properties</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">In JavaScript, almost "everything" is an object:</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Booleans, Numbers, Strings can be objects (if defined with <span className="font-mono">new</span>)</li>
                <li>Dates, Maths, Regular expressions are always objects</li>
                <li>Arrays, Functions are objects</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">JavaScript Primitives</h3>
              <p>Primitive values are immutable (they cannot be changed). JavaScript has 7 primitive data types:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                <span className="bg-white p-2 rounded text-center">string</span>
                <span className="bg-white p-2 rounded text-center">number</span>
                <span className="bg-white p-2 rounded text-center">boolean</span>
                <span className="bg-white p-2 rounded text-center">null</span>
                <span className="bg-white p-2 rounded text-center">undefined</span>
                <span className="bg-white p-2 rounded text-center">symbol</span>
                <span className="bg-white p-2 rounded text-center">bigint</span>
              </div>
            </div>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice Live with JavaScript Objects
          </h2>
          <p className="text-gray-700 mb-4">
            Try out JavaScript object code directly in your browser and see the results instantly.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{jsExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our comprehensive JavaScript object references to find details about object properties, methods, and usage patterns.
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

export default Objects;
