import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Workers_Api = () => {
  const references = [
    "Worker Object",
    "Dedicated Workers",
    "Shared Workers",
    "Service Workers",
    "PostMessage API",
    "Error Handling",
    "Termination",
    "Browser Support",
    "Performance Tips",
    "Use Cases",
  ];

  const workerExample = `// demo_workers.js
let i = 0;

function timedCount() {
  i++;
  postMessage(i);
  setTimeout(timedCount, 500);
}

timedCount();`;

  const htmlExample = `<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>`;

  const supportCheckCode = `if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
}`;

  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(-1), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold mb-3 text-gray-900">Web Workers API</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Run JavaScript in background threads to keep your UI responsive and fluid.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-3xl font-bold mb-4">What is a Web Worker?</h2>
          <p className="text-gray-800 mb-3">
            A web worker is JavaScript running in the background, without affecting the performance of the page.
          </p>
          <p className="text-gray-800 mb-3">
            When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
          </p>
          <p className="text-gray-800 mb-6">
            With web workers, you can continue to interact with the page while the worker runs in the background.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded-lg transition">
            Try Examples »
          </button>
        </section>

        {/* Browser Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Browser Support</h2>
          <p className="text-gray-700 mb-4">
            The numbers in the table specify the first browser versions that fully support Web Workers:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="py-2 px-4 border-b">Chrome 4</th>
                  <th className="py-2 px-4 border-b">IE 10</th>
                  <th className="py-2 px-4 border-b">Firefox 3.5</th>
                  <th className="py-2 px-4 border-b">Safari 4</th>
                  <th className="py-2 px-4 border-b">Opera 11.5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2 px-4 border-b">Jan 2010</td>
                  <td className="py-2 px-4 border-b">Sep 2012</td>
                  <td className="py-2 px-4 border-b">Jun 2009</td>
                  <td className="py-2 px-4 border-b">Jun 2009</td>
                  <td className="py-2 px-4 border-b">Jun 2011</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Check Support Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Check Web Worker Support</h2>
          <p className="text-gray-700 mb-4">
            Before creating a web worker, check whether the user's browser supports it:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl">
            <pre className="bg-gray-900 text-green-300 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{supportCheckCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(supportCheckCode, 0)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copiedIndex === 0 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Worker File Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Create a Web Worker File</h2>
          <p className="text-gray-700 mb-4">
            Here's how to create a simple web worker that counts numbers in the background:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl">
            <h3 className="font-bold mb-3">demo_workers.js:</h3>
            <pre className="bg-gray-900 text-green-300 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{workerExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(workerExample, 1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copiedIndex === 1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* HTML Implementation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Create a Web Worker Object</h2>
          <p className="text-gray-700 mb-4">
            Here's how to implement the web worker in an HTML page:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl">
            <h3 className="font-bold mb-3">Example HTML:</h3>
            <pre className="bg-gray-900 text-green-300 border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{htmlExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(htmlExample, 2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition"
            >
              {copiedIndex === 2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="space-y-6">
          <div className="bg-[#FFF4A3] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Terminate a Web Worker</h3>
            <p className="mb-3">
              When a web worker object is created, it will continue to listen for messages until terminated.
            </p>
            <pre className="bg-gray-900 text-yellow-300 p-3 rounded font-mono text-sm">
              <code>w.terminate();</code>
            </pre>
          </div>

          <div className="bg-[#FFD3D3] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Reuse the Web Worker</h3>
            <p className="mb-3">
              Set the worker variable to undefined after termination to reuse the code:
            </p>
            <pre className="bg-gray-900 text-red-300 p-3 rounded font-mono text-sm">
              <code>w = undefined;</code>
            </pre>
          </div>

          <div className="bg-[#D9EEE1] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Web Workers and the DOM</h3>
            <p className="mb-3">
              Since web workers are in external files, they do not have access to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The window object</li>
              <li>The document object</li>
              <li>The parent object</li>
            </ul>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Web Worker References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for all Web Worker related APIs and features.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg shadow transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workers_Api;
