import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy } from "react-icons/fa";

const Display_Objects = () => {
  const methods = [
    "Display Properties by Name",
    "Display in Loop",
    "Object.values()",
    "Object.entries()",
    "JSON.stringify()",
    "Object.keys()",
    "Object.assign()",
    "Object.freeze()",
    "Object.seal()",
    "Object.create()"
  ];

  const objectExample = `const person = {
  name: "John",
  age: 30,
  city: "New York"
};`;

  const examples = [
    {
      title: "Displaying Properties by Name",
      code: `document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;`,
      description: "Access object properties directly by their names."
    },
    {
      title: "Displaying in Loop",
      code: `let text = "";
for (let x in person) {
  text += person[x] + " ";
};`,
      description: "Loop through object properties using for...in loop."
    },
    {
      title: "Using Object.values()",
      code: `const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;`,
      description: "Convert object values to an array."
    },
    {
      title: "Using Object.entries()",
      code: `let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}`,
      description: "Get both keys and values as arrays for iteration."
    },
    {
      title: "Using JSON.stringify()",
      code: `let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;`,
      description: "Convert the entire object to a JSON string."
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Objects Display</h1>
          <p className="text-gray-600 text-lg">
            Learn different methods to display and work with JavaScript objects in your applications.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#E7F3FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Displaying JavaScript Objects</h2>
          <p className="text-gray-800 mb-3">
            Displaying a JavaScript object directly will output <code className="bg-gray-200 px-1 rounded">[object Object]</code>.
          </p>
          <p className="text-gray-800 mb-6">
            There are several methods to properly display object content. Here are the most common approaches:
          </p>
          
          <div className="bg-white p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Basic Object Example:</h3>
            <div className="relative">
              <pre className="bg-gray-100 border-l-4 border-[#2196F3] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{objectExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(objectExample)}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
                title="Copy code"
              >
                <FaCopy className={copied ? "text-green-500" : "text-gray-600"} />
              </button>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Display Methods</h2>
          
          <div className="flex overflow-x-auto mb-4 pb-2">
            {examples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-4 py-2 mr-2 rounded-t-lg ${activeTab === idx ? 'bg-[#2196F3] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {example.title}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-100 p-6 rounded-b-lg rounded-r-lg">
            <h3 className="font-bold mb-2">{examples[activeTab].title}</h3>
            <p className="text-gray-700 mb-4">{examples[activeTab].description}</p>
            
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#2196F3] p-4 font-mono text-sm rounded overflow-x-auto">
                <code>{examples[activeTab].code}</code>
              </pre>
              <button
                onClick={() => handleCopy(examples[activeTab].code)}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
                title="Copy code"
              >
                <FaCopy className={copied ? "text-green-500" : "text-gray-600"} />
              </button>
            </div>
          </div>
        </section>

        {/* Object References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Object Methods Reference</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore all available methods for working with JavaScript objects:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {methods.map((method, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {method}
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

export default Display_Objects;