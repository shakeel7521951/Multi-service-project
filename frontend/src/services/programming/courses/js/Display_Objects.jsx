import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

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
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index = null) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (index !== null) {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 1500);
        } else {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start relative">
          <div className="absolute -left-6 top-3 w-14 h-14 bg-[#04AA6D] opacity-10 rounded-full"></div>
          <h1 className="text-4xl font-extrabold mb-2 relative">JavaScript Objects Display</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Learn different methods to display and work with JavaScript objects in your applications.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#E7F3FE] p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#2196F3] opacity-10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#2196F3] opacity-10 rounded-full"></div>
          
          <h2 className="text-3xl font-bold mb-6">Displaying JavaScript Objects</h2>
          <p className="text-gray-800 mb-4">
            Displaying a JavaScript object directly will output <code className="bg-gray-200 px-1.5 py-0.5 rounded-md">[object Object]</code>.
          </p>
          <p className="text-gray-800 mb-8">
            There are several methods to properly display object content. Here are the most common approaches:
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-4 text-lg">Basic Object Example:</h3>
            <div className="relative">
              <pre className="bg-gray-100 border-l-4 border-[#2196F3] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{objectExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(objectExample)}
                className="absolute top-3 right-3 p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                title="Copy code"
              >
                {copied ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600" />}
              </button>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Display Methods</h2>
          
          <div className="flex overflow-x-auto mb-6 pb-2">
            {examples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-5 py-3 mr-3 rounded-t-lg transition ${activeTab === idx ? 'bg-[#2196F3] text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {example.title}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-100 p-8 rounded-b-xl rounded-r-xl shadow-md">
            <div className="flex items-start mb-6">
              <div className="bg-[#2196F3] text-white rounded-full w-7 h-7 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                {activeTab + 1}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{examples[activeTab].title}</h3>
                <p className="text-gray-700">{examples[activeTab].description}</p>
              </div>
            </div>
            
            <div className="relative">
              <pre className="bg-white border-l-4 border-[#2196F3] p-4 font-mono text-sm rounded-lg overflow-x-auto">
                <code>{examples[activeTab].code}</code>
              </pre>
              <button
                onClick={() => handleCopy(examples[activeTab].code, activeTab)}
                className="absolute top-3 right-3 p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                title="Copy code"
              >
                {copiedIndex === activeTab ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-600" />}
              </button>
            </div>
          </div>
        </section>

        {/* Object References */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Object Methods Reference</h2>
          <p className="text-gray-700 mb-8 max-w-3xl text-lg">
            Explore all available methods for working with JavaScript objects:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {methods.map((method, idx) => (
              <div
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-[#2196F3] hover:text-white text-gray-800 text-center font-medium py-4 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                {method}
              </div>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end pt-4">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md hover:shadow-lg">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display_Objects;