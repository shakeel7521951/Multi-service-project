import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Class_Inheritance = () => {
  const references = [
    "Class Syntax",
    "Constructor Method",
    "Static Methods",
    "Method Chaining",
    "Prototype Methods",
    "Private Class Fields",
    "Class Expressions",
    "Mixins Pattern",
    "Method Overriding",
    "Instanceof Operator",
    "Object Prototypes",
    "Polymorphism",
    "Encapsulation",
    "Composition vs Inheritance",
    "ES6 Class Features"
  ];

  const inheritanceExample = `class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();`;

  const getterSetterExample = `class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;`;

  const [copied, setCopied] = useState({
    inheritance: false,
    getterSetter: false
  });

  const handleCopy = (type) => {
    const textToCopy = type === 'inheritance' ? inheritanceExample : getterSetterExample;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied({ ...copied, [type]: true });
        setTimeout(() => setCopied({ ...copied, [type]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Class Inheritance</h1>
          <p className="text-gray-600 text-lg">
            Master object-oriented programming in JavaScript with class inheritance, getters, and setters.
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
          <h2 className="text-3xl font-bold mb-4">Class Inheritance in JavaScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript class inheritance allows you to create a child class that inherits methods and properties from a parent class using the <code className="bg-gray-200 px-1 rounded">extends</code> keyword.
          </p>
          <p className="text-gray-800 mb-3">
            The <code className="bg-gray-200 px-1 rounded">super()</code> method calls the parent's constructor and gives access to parent's properties and methods.
          </p>
          <p className="text-gray-800 mb-6">
            Getters and setters allow you to define object accessors for more controlled property access.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Learn More »
          </button>
        </section>

        {/* Inheritance Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Class Inheritance Example</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-200 px-1 rounded">Model</code> class inherits from the <code className="bg-gray-200 px-1 rounded">Car</code> class:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{inheritanceExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('inheritance')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.inheritance ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Getters and Setters Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Getters and Setters</h2>
          <p className="text-gray-800 mb-4">
            Getters and setters allow you to define object accessors. The getter/setter method name should differ from the property name.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#FFC0C7] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{getterSetterExample}</code>
            </pre>
            <button
              onClick={() => handleCopy('getterSetter')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.getterSetter ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="bg-[#F3ECEA] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3 text-[#976B4A]">Important Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Class declarations are <strong>not hoisted</strong> - you must declare a class before using it</li>
            <li>Use <code className="bg-gray-200 px-1 rounded">super()</code> before accessing <code className="bg-gray-200 px-1 rounded">this</code> in child class constructor</li>
            <li>Getter/setter names should differ from property names (common convention uses underscore prefix for properties)</li>
            <li>Classes support method overriding - child classes can provide specific implementations</li>
          </ul>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript references covering classes, prototypes, and object-oriented patterns.
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

export default Class_Inheritance;
