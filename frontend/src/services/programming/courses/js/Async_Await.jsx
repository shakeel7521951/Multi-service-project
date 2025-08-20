import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Async_Await = () => {
  const references = [
    "Promise Basics",
    "Async Functions",
    "Await Operator",
    "Error Handling",
    "Fetch API",
    "XMLHttpRequest",
    "Browser Support",
    "Common Patterns",
    "Parallel Execution",
    "Error Propagation",
    "Top-level Await",
    "Async Iteration",
    "Promise Methods",
    "Real-world Examples",
    "Performance Tips"
  ];

  const basicExample = `async function myFunction() {
  return "Hello";
}

// Is the same as:
function myFunction() {
  return Promise.resolve("Hello");
}`;

  const awaitExample = `async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("I love You !!");
    }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();`;

  const fileExample = `async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();`;

  const browserSupport = [
    { browser: "Chrome", version: "55", date: "Dec, 2016" },
    { browser: "Edge", version: "15", date: "Apr, 2017" },
    { browser: "Firefox", version: "52", date: "Mar, 2017" },
    { browser: "Safari", version: "11", date: "Sep, 2017" },
    { browser: "Opera", version: "42", date: "Dec, 2016" }
  ];

  const [copied, setCopied] = useState("");
  const [activeTab, setActiveTab] = useState("basic");

  const handleCopy = (code, exampleName) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(exampleName);
        setTimeout(() => setCopied(""), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Async/Await</h1>
          <p className="text-gray-600 text-lg">
            Master modern asynchronous JavaScript with async/await syntax for cleaner, more readable code.
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
        <section className="bg-[#E7F3FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Why Use Async/Await?</h2>
          <p className="text-gray-800 mb-3">
            <span className="font-semibold">async/await</span> makes promises easier to write. 
            <span className="font-semibold">async</span> makes a function return a Promise, 
            while <span className="font-semibold">await</span> makes a function wait for a Promise.
          </p>
          <p className="text-gray-800 mb-3">
            This syntactic sugar built on top of promises allows you to write asynchronous code that looks 
            and behaves more like synchronous code, improving readability and maintainability.
          </p>
          <p className="text-gray-800 mb-6">
            Learn how to simplify your asynchronous JavaScript code with practical examples below.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Async/Await Examples</h2>
          <p className="text-gray-700 mb-4">
            Explore different patterns and use cases for async/await in JavaScript.
          </p>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'basic' ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('basic')}
            >
              Basic Syntax
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'await' ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('await')}
            >
              Await Example
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'file' ? 'text-[#04AA6D] border-b-2 border-[#04AA6D]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('file')}
            >
              File Loading
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            {activeTab === 'basic' && (
              <>
                <h3 className="font-bold mb-3">Basic Async Syntax:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{basicExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(basicExample, 'basic')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied === 'basic' ? "Copied!" : "Copy Text"}
                </button>
              </>
            )}
            
            {activeTab === 'await' && (
              <>
                <h3 className="font-bold mb-3">Await with Timeout:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{awaitExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(awaitExample, 'await')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied === 'await' ? "Copied!" : "Copy Text"}
                </button>
              </>
            )}
            
            {activeTab === 'file' && (
              <>
                <h3 className="font-bold mb-3">File Loading with Async/Await:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{fileExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(fileExample, 'file')}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied === 'file' ? "Copied!" : "Copy Text"}
                </button>
              </>
            )}
          </div>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            ECMAScript 2017 introduced the JavaScript keywords async and await. 
            Here are the first browser versions with full support:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {browserSupport.map((browser, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow text-center">
                  <div className="font-bold">{browser.browser}</div>
                  <div className="text-sm">v{browser.version}</div>
                  <div className="text-xs text-gray-500">{browser.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Async/Await References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to master all aspects of asynchronous JavaScript programming.
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

export default Async_Await;