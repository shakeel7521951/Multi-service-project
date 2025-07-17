import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Object_Protection = () => {
  const references = [
    "Object.preventExtensions()",
    "Object.isExtensible()",
    "Object.seal()",
    "Object.isSealed()",
    "Object.freeze()",
    "Object.isFrozen()",
    "const vs Object Methods",
    "Strict Mode Implications",
    "Array Protection",
    "Property Descriptors",
    "Protection Hierarchy",
    "Performance Considerations",
    "Use Cases",
    "Browser Compatibility",
    "Common Mistakes"
  ];

  const basicExample = `// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(basicExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Object Protection</h1>
          <p className="text-gray-600 text-lg">
            Learn how to control mutability and protect your JavaScript objects from unintended modifications.
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
          <h2 className="text-3xl font-bold mb-4">Why Protect JavaScript Objects?</h2>
          <p className="text-gray-800 mb-3">
            Object protection methods in JavaScript allow you to control how objects can be modified, 
            preventing accidental changes and making your code more predictable and maintainable.
          </p>
          <p className="text-gray-800 mb-3">
            JavaScript provides several methods to protect objects at different levels of strictness, 
            from preventing property additions to making objects completely immutable.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding these methods is crucial for writing robust JavaScript applications, 
            especially when working with shared state or configuration objects.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Object Protection Methods
          </h2>
          <p className="text-gray-700 mb-4">
            JavaScript provides several methods to protect objects at different levels:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Basic Methods:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{basicExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Detailed Examples Section */}
        <section className="space-y-8">
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Using const</h3>
            <p className="text-gray-700 mb-4">
              The most common way to protect an object from being changed is by using the const keyword.
            </p>
            <p className="text-gray-700 mb-4">
              With const you can not re-assign the object, but you can still change the value of a property, 
              delete a property or create a new property.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.preventExtensions()</h3>
            <p className="text-gray-700 mb-4">
              The Object.preventExtensions() method prevents adding properties to an object.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English";`}
              </code>
            </pre>
            <p className="text-gray-700 mb-4">
              Since arrays are objects, arrays can be prevented from extensions too:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);

// This will throw an error:
fruits.push("Kiwi");`}
              </code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.isExtensible()</h3>
            <p className="text-gray-700 mb-4">
              You can use Object.isExtensible() to check if an object is extensible.
              The Object.isExtensible() returns true if an object is extensible.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will return false
let answer = Object.isExtensible(person);`}
              </code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Prevent Extensions
Object.preventExtensions(fruits);

// This will return false
let answer = Object.isExtensible(fruits);`}
              </code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.seal()</h3>
            <p className="text-gray-700 mb-4">
              The Object.seal() method prevents additions or deletions of new properties.
              The Object.seal() method makes existing properties non-configurable.
            </p>
            <p className="text-gray-700 mb-4">
              Note: The Object.seal() method will fail silently in non-strict mode and throw a TypeError in strict mode.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person)

// This will throw an error
delete person.age;`}
              </code>
            </pre>
            <p className="text-gray-700 mb-4">
              Since arrays are objects, arrays can be sealed too:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);

// This will throw an error:
fruits.push("Kiwi");`}
              </code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.isSealed()</h3>
            <p className="text-gray-700 mb-4">
              The Object.isSealed() method can be used to check if an object is sealed.
              The Object.isSealed() returns true if an object is sealed.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Seal Object
Object.seal(person);

// This will return true
let answer = Object.isSealed(person);`}
              </code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Seal Array
Object.seal(fruits);

// This will return true
let answer = Object.isSealed(fruits);`}
              </code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.freeze()</h3>
            <p className="text-gray-700 mb-4">
              The Object.freeze() method prevents any changes to an object.
              Frozen objects are read-only. No modification, addition or deletion of properties are allowed.
            </p>
            <p className="text-gray-700 mb-4">
              Note: The Object.freeze() method will fail silently in non-strict mode and throw a TypeError in strict mode.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person)

// This will throw an error
person.age = 51;`}
              </code>
            </pre>
            <p className="text-gray-700 mb-4">
              Since arrays are objects, arrays can be frozen too:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will trow an error:
fruits.push("Kiwi");`}
              </code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Object.isFrozen()</h3>
            <p className="text-gray-700 mb-4">
              The Object.isFrozen() method can be used to check if an object is frozen.
              The Object.isFrozen() returns true if an object is frozen.
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>
{`// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Freeze Object
Object.freeze(person);

// This will return true
let answer = Object.isFrozen(person);`}
              </code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>
{`// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will return true:
let answer = Object.isFrozen(fruits);`}
              </code>
            </pre>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object Protection References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to understand all aspects of JavaScript object protection,
            including method details, use cases, and browser compatibility.
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


export default Object_Protection;
