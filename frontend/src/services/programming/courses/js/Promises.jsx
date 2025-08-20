import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Promises = () => {
  const references = [
    "Promise Syntax",
    "Promise States",
    "Promise Methods",
    "Promise.all()",
    "Promise.race()",
    "Async/Await",
    "Error Handling",
    "Fetch API",
    "Browser Support",
    "Common Patterns",
    "Chaining Promises",
    "Promise Examples",
    "Advanced Techniques",
    "Best Practices",
    "Common Mistakes"
  ];

  const promiseExample = `let myPromise = new Promise(function(resolve, reject) {
  // Producing code (may take some time)
  let x = 0;

  if (x == 0) {
    resolve("Success!");
  } else {
    reject("Error occurred");
  }
});

// Consuming code
myPromise.then(
  function(value) { console.log(value); },
  function(error) { console.error(error); }
);`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(promiseExample)
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Promises</h1>
          <p className="text-gray-600 text-lg">
            Master asynchronous programming in JavaScript with our comprehensive Promise guide.
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
        <section className="bg-[#E7F4FE] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">"I Promise a Result!"</h2>
          <div className="space-y-4 text-gray-800">
            <p>
              <strong>"Producing code"</strong> is code that can take some time to complete.
            </p>
            <p>
              <strong>"Consuming code"</strong> is code that must wait for the result.
            </p>
            <p>
              A <strong>Promise</strong> is an Object that links Producing code and Consuming code.
            </p>
          </div>
        </section>

        {/* Promise Object Section */}
        <section className="bg-[#FFF3CD] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">JavaScript Promise Object</h2>
          <p className="mb-4">A Promise contains both the producing code and calls to the consuming code:</p>
          
          <h3 className="font-bold text-lg mb-2">Promise Syntax</h3>
          <pre className="bg-white border-l-4 border-[#FFC107] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{promiseExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </section>

        {/* Promise States Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Promise Object Properties</h2>
          <p className="mb-4">A JavaScript Promise object can be in one of three states:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">State</th>
                  <th className="py-2 px-4 border-b">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">"pending"</td>
                  <td className="py-2 px-4 border-b">undefined</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">"fulfilled"</td>
                  <td className="py-2 px-4 border-b">a result value</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">"rejected"</td>
                  <td className="py-2 px-4 border-b">an error object</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> You cannot directly access the Promise properties state and result. 
              You must use Promise methods like <code>.then()</code> or <code>.catch()</code> to handle promises.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">JavaScript Promise Examples</h2>
          
          <div className="space-y-8">
            {/* Example 1 */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Waiting for a Timeout</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Using Callback</h4>
                  <pre className="bg-white p-4 rounded overflow-x-auto text-sm">
                    <code>
{`setTimeout(function() { 
  myFunction("I love You !!!"); 
}, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}`}
                    </code>
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Using Promise</h4>
                  <pre className="bg-white p-4 rounded overflow-x-auto text-sm">
                    <code>
{`let myPromise = new Promise(function(resolve) {
  setTimeout(function() { 
    resolve("I love You !!"); 
  }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Example 2 */}
            <div className="bg-[#E7E9EB] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Waiting for a File</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Using Callback</h4>
                  <pre className="bg-white p-4 rounded overflow-x-auto text-sm">
                    <code>
{`function getFile(callback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      callback(req.responseText);
    } else {
      callback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myFunction);`}
                    </code>
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Using Promise</h4>
                  <pre className="bg-white p-4 rounded overflow-x-auto text-sm">
                    <code>
{`let myPromise = new Promise(function(resolve, reject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      resolve(req.response);
    } else {
      reject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) { myFunction(value); },
  function(error) { myFunction(error); }
);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Support */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Browser Support</h2>
          <p className="mb-4">
            ECMAScript 2015 (ES6) introduced the JavaScript Promise object. The following table shows the first browser versions with full support:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Browser</th>
                  <th className="py-2 px-4 border-b">Version</th>
                  <th className="py-2 px-4 border-b">Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Chrome</td>
                  <td className="py-2 px-4 border-b">33</td>
                  <td className="py-2 px-4 border-b">Feb, 2014</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Edge</td>
                  <td className="py-2 px-4 border-b">12</td>
                  <td className="py-2 px-4 border-b">Jul, 2015</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Firefox</td>
                  <td className="py-2 px-4 border-b">29</td>
                  <td className="py-2 px-4 border-b">Apr, 2014</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Safari</td>
                  <td className="py-2 px-4 border-b">7.1</td>
                  <td className="py-2 px-4 border-b">Sep, 2014</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Opera</td>
                  <td className="py-2 px-4 border-b">20</td>
                  <td className="py-2 px-4 border-b">Mar, 2014</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Promise References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive Promise references to master asynchronous JavaScript programming.
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

export default Promises;