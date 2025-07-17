import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Get_Set = () => {
  const references = [
    "Object Basics",
    "Object Methods",
    "Object Constructors",
    "Object Prototypes",
    "Object Properties",
    "Object Descriptors",
    "Object Freeze/Seal",
    "Object Keys/Values",
    "Object Assign",
    "Object Entries",
    "Object FromEntries",
    "Object DefineProperty",
    "Object DefineProperties",
    "Object Getters/Setters",
    "Object Composition"
  ];

  const getterExample = `// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;`;

  const setterExample = `const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;`;

  const [activeTab, setActiveTab] = useState("getter");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Accessors</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use getters and setters to control access to object properties in JavaScript.
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
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">JavaScript Accessors (Getters and Setters)</h2>
          <p className="text-gray-800 mb-3">
            ECMAScript 5 (ES5 2009) introduced Getter and Setters.
          </p>
          <p className="text-gray-800 mb-6">
            Getters and setters allow you to define Object Accessors (Computed Properties).
          </p>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Getter and Setter Examples</h2>
          
          <div className="flex border-b mb-4">
            <button
              className={`px-4 py-2 font-medium ${activeTab === "getter" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("getter")}
            >
              Getter Example
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "setter" ? "border-b-2 border-[#04AA6D] text-[#04AA6D]" : "text-gray-600"}`}
              onClick={() => setActiveTab("setter")}
            >
              Setter Example
            </button>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            {activeTab === "getter" ? (
              <>
                <h3 className="font-bold mb-3">JavaScript Getter (The get Keyword)</h3>
                <p className="text-gray-700 mb-4">
                  This example uses a lang property to get the value of the language property.
                </p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{getterExample}</code>
                </pre>
              </>
            ) : (
              <>
                <h3 className="font-bold mb-3">JavaScript Setter (The set Keyword)</h3>
                <p className="text-gray-700 mb-4">
                  This example uses a lang property to set the value of the language property.
                </p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{setterExample}</code>
                </pre>
              </>
            )}
            <button
              onClick={() => handleCopy(activeTab === "getter" ? getterExample : setterExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">JavaScript Function or Getter?</h2>
          <p className="text-gray-800 mb-6">
            What is the differences between these two examples?
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-[#04AA6D]">Example 1: Function</h3>
              <pre className="bg-gray-100 p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Access as function:
person.fullName();`}</code>
              </pre>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-[#04AA6D]">Example 2: Getter</h3>
              <pre className="bg-gray-100 p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Access as property:
person.fullName;`}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg">
            <h3 className="font-bold mb-2">Key Difference:</h3>
            <p className="text-gray-800">
              Example 1 accesses fullName as a function: <code className="bg-gray-100 px-1">person.fullName()</code>.<br />
              Example 2 accesses fullName as a property: <code className="bg-gray-100 px-1">person.fullName</code>.<br />
              The second example provides a simpler syntax.
            </p>
          </div>
        </section>

        {/* Data Quality Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Quality with Getters/Setters</h2>
          <p className="text-gray-700 mb-6">
            JavaScript can secure better data quality when using getters and setters.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Getter with Data Transformation</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// Returns "EN":
person.lang;`}</code>
              </pre>
            </div>
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold mb-3">Setter with Data Validation</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Stores "EN":
person.lang = "en";`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Why Use Section */}
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Why Using Getters and Setters?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>It gives simpler syntax</li>
            <li>It allows equal syntax for properties and methods</li>
            <li>It can secure better data quality</li>
            <li>It is useful for doing things behind-the-scenes</li>
          </ul>
        </section>

        {/* Advanced Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Object.defineProperty()</h2>
          <p className="text-gray-700 mb-6">
            The <code className="bg-gray-100 px-1">Object.defineProperty()</code> method can also be used to add Getters and Setters:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Counter Example</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;`}</code>
            </pre>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Object References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript object references for detailed information about object properties and methods.
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

export default Object_Get_Set;
