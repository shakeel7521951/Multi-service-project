import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Workers_Api = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  const supportCheckExample = `<script>
const x = document.getElementById("result");
if(typeof(Worker) !== "undefined") {
  x.innerHTML = "Your browser support Web Workers!";
} else {
  x.innerHTML = "Sorry, your browser does not support Web Workers.";
}
</script>`;

  const workerJsExample = `var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();`;

  const fullExample = `<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  const x = document.getElementById("result");
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      x.innerHTML = event.data;
    };
  } else {
    x.innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Web Workers API</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
            <div className="bg-[#D9EEE1] p-5 rounded-2xl mb-6">
          <h2 className="text-3xl font-bold mb-4">What is a Web Worker?</h2>
          <p className="mb-4">
            When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
          </p>
          <p className="mb-4">
            A <strong>web worker</strong> is a JavaScript file that runs in the background, independently of other scripts, without affecting page performance.
          </p>
          <p className="mb-6">
            This allows users to interact with the page while the worker runs in the background.
          </p>
</div>
          {/* Browser Support Example */}
          <h3 className="text-2xl font-semibold mb-2">Check Web Worker API Support</h3>
          <p className="mb-4">Before using a web worker, you should check for browser support:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{supportCheckExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(supportCheckExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === supportCheckExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* JS Worker File */}
          <h3 className="text-2xl font-semibold mb-2">Create a .js Web Worker File</h3>
          <p className="mb-6">This file defines what the worker will do:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">demo_workers.js</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{workerJsExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(workerJsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === workerJsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Full HTML Worker Example */}
          <h3 className="text-2xl font-semibold mb-2">Full Web Worker Example</h3>
          <p className="mb-6">A complete example demonstrating how to use the Web Worker API:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{fullExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(fullExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === fullExample ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Workers_Api;
