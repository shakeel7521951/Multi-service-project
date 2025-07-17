import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Classes_Inrto = () => {
  const references = [
    "Class Syntax",
    "Constructor Method",
    "Class Methods",
    "Static Methods",
    "Class Inheritance",
    "Getters & Setters",
    "Class Expressions",
    "Private Class Fields",
    "Method Chaining",
    "Polymorphism",
    "Encapsulation",
    "Browser Support",
    "ES6 Features",
    "Strict Mode",
    "Prototype Methods"
  ];

  const classExample = `class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(\`My car is \${myCar.age()} years old.\`);`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(classExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Classes</h1>
          <p className="text-gray-600 text-lg">
            Master object-oriented programming in JavaScript with ES6 classes.
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
          <h2 className="text-3xl font-bold mb-4">Why Learn JavaScript Classes?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript classes, introduced in ECMAScript 2015 (ES6), provide a cleaner syntax for creating objects and dealing with inheritance.
          </p>
          <p className="text-gray-800 mb-3">
            Classes are templates for JavaScript objects, making your code more organized, reusable, and easier to maintain.
          </p>
          <p className="text-gray-800 mb-6">
            Learn how to use classes to build complex applications with proper object-oriented architecture.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Class Syntax Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Class Syntax</h2>
          <p className="text-gray-700 mb-4">
            Use the <code>class</code> keyword to create a class. Always add a constructor method:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Using Classes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Using Classes</h2>
          <p className="text-gray-700 mb-4">
            When you have a class, you can use it to create objects with the <code>new</code> keyword:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);`}</code>
            </pre>
          </div>
        </section>

        {/* Class Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Class Methods</h2>
          <p className="text-gray-700 mb-4">
            Add methods to your class to define object behavior:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice with JavaScript Classes
          </h2>
          <p className="text-gray-700 mb-4">
            Try out this complete class example:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{classExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Browser Support Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Browser Support</h2>
          <p className="mb-4">
            JavaScript Classes are supported in all modern browsers:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Chrome 49</th>
                  <th className="py-2 px-4 border">Edge 12</th>
                  <th className="py-2 px-4 border">Firefox 45</th>
                  <th className="py-2 px-4 border">Safari 9</th>
                  <th className="py-2 px-4 border">Opera 36</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border text-center">Mar, 2016</td>
                  <td className="py-2 px-4 border text-center">Jul, 2015</td>
                  <td className="py-2 px-4 border text-center">Mar, 2016</td>
                  <td className="py-2 px-4 border text-center">Oct, 2015</td>
                  <td className="py-2 px-4 border text-center">Mar, 2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Strict Mode Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Strict Mode</h2>
          <p className="text-gray-700 mb-4">
            Class syntax automatically runs in strict mode:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#FFC0C7] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    date = new Date();  // Error in strict mode
    const date = new Date(); // Correct
    return date.getFullYear() - this.year;
  }
}`}</code>
            </pre>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Class References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for JavaScript classes and object-oriented programming:
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


export default Classes_Inrto;
