import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Window = () => {
  const references = [
    "Window Object",
    "Window Properties",
    "Window Methods",
    "Screen Object",
    "Location Object",
    "History Object",
    "Navigator Object",
    "Timing Events",
    "Cookies",
    "Web Storage API",
    "Dialog Boxes",
    "Window Size",
    "Window Resizing",
    "Window Opening",
    "Window Closing"
  ];

  const jsExample = `// Get window size
let width = window.innerWidth;
let height = window.innerHeight;

// Open new window
let newWindow = window.open("", "", "width=300,height=300");

// Resize window
window.resizeTo(800, 600);`;

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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Window - The Browser Object Model</h1>
          <p className="text-gray-600 text-lg">
            Learn how JavaScript interacts with the browser through the Browser Object Model (BOM).
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
          <h2 className="text-3xl font-bold mb-4">The Browser Object Model (BOM)</h2>
          <p className="text-gray-800 mb-3">
            The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
          </p>
          <p className="text-gray-800 mb-3">
            There are no official standards for the Browser Object Model (BOM), but modern browsers have implemented 
            (almost) the same methods and properties for JavaScript interactivity.
          </p>
          <p className="text-gray-800 mb-6">
            These methods and properties are often referred to as the BOM.
          </p>
        </section>

        {/* Window Object Section */}
        <section className="bg-[#FFF4A3] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">The Window Object</h2>
          <p className="text-gray-800 mb-3">
            The window object is supported by all browsers. It represents the browser's window.
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>All global JavaScript objects, functions, and variables automatically become members of the window object</li>
            <li>Global variables are properties of the window object</li>
            <li>Global functions are methods of the window object</li>
            <li>Even the document object (of the HTML DOM) is a property of the window object</li>
          </ul>
          <div className="bg-[#E7E9EB] p-4 rounded">
            <p className="font-mono">window.document.getElementById("header");</p>
            <p className="text-center">is the same as:</p>
            <p className="font-mono">document.getElementById("header");</p>
          </div>
        </section>

        {/* Window Size Section */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Window Size</h2>
          <p className="text-gray-800 mb-3">
            Two properties can be used to determine the size of the browser window.
            Both properties return the sizes in pixels:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><code className="bg-gray-100 px-1 rounded">window.innerHeight</code> - the inner height of the browser window (in pixels)</li>
            <li><code className="bg-gray-100 px-1 rounded">window.innerWidth</code> - the inner width of the browser window (in pixels)</li>
          </ul>
          <p className="text-gray-800">
            The browser window (the browser viewport) is NOT including toolbars and scrollbars.
          </p>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Practice with Window Object
          </h2>
          <p className="text-gray-700 mb-4">
            Try out these Window object properties and methods in your browser console.
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

        {/* Other Window Methods Section */}
        <section className="bg-[#F3ECEA] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Other Window Methods</h2>
          <p className="text-gray-800 mb-4">
            Some commonly used window methods:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <h3 className="font-bold mb-2"><code>window.open()</code></h3>
              <p>Open a new browser window</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="font-bold mb-2"><code>window.close()</code></h3>
              <p>Close the current window</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="font-bold mb-2"><code>window.moveTo()</code></h3>
              <p>Move the current window</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="font-bold mb-2"><code>window.resizeTo()</code></h3>
              <p>Resize the current window</p>
            </div>
          </div>
        </section>

        {/* BOM References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">BOM References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for the Browser Object Model to learn about all available properties and methods.
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

export default Js_Window;
