import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timing_Events = () => {
  const references = [
    "setTimeout()",
    "setInterval()",
    "clearTimeout()",
    "clearInterval()",
    "requestAnimationFrame()",
    "Event Loop",
    "Callbacks",
    "Promises",
    "Async/Await",
    "Web Workers",
    "Performance API",
    "Debouncing",
    "Throttling",
    "Animation Timing",
    "Clock Examples"
  ];

  const example1 = `<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>`;

  const example2 = `<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
<button onclick="clearTimeout(myVar)">Stop it</button>`;

  const example3 = `setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}`;

  const example4 = `<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false,
    example4: false
  });

  const handleCopy = (example, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied({ ...copied, [example]: true });
        setTimeout(() => setCopied({ ...copied, [example]: false }), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Timing Events</h1>
          <p className="text-gray-600 text-lg">
            Learn how to execute code at specific time intervals using JavaScript's timing functions.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Timing Events</h2>
          <p className="text-gray-800 mb-3">
            JavaScript can be executed in time-intervals. This is called timing events.
          </p>
          <p className="text-gray-800 mb-3">
            The window object allows execution of code at specified time intervals.
            These time intervals are called timing events.
          </p>
          <p className="text-gray-800 mb-6">
            The two key methods to use with JavaScript are:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>setTimeout(function, milliseconds)</strong> - Executes a function after waiting specified milliseconds</li>
            <li><strong>setInterval(function, milliseconds)</strong> - Same as setTimeout(), but repeats execution continuously</li>
          </ul>
          <p className="text-gray-800 mb-3">
            These methods are both part of the HTML DOM Window object.
          </p>
        </section>

        {/* setTimeout Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The setTimeout() Method</h2>
          <p className="text-gray-700 mb-4">
            <code>window.setTimeout(function, milliseconds);</code><br />
            The method can be written without the window prefix.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Click a button. Wait 3 seconds, and the page will alert "Hello":</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy("example1", example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* clearTimeout Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Stop setTimeout() Execution?</h2>
          <p className="text-gray-700 mb-4">
            The <code>clearTimeout()</code> method stops the execution of the function specified in setTimeout().
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Same example as above, but with an added "Stop" button:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy("example2", example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* setInterval Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">The setInterval() Method</h2>
          <p className="text-gray-700 mb-4">
            The <code>setInterval()</code> method repeats a given function at every given time-interval.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Display the current time (updating every second):</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy("example3", example3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* clearInterval Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Stop setInterval() Execution?</h2>
          <p className="text-gray-700 mb-4">
            The <code>clearInterval()</code> method stops the executions of the function specified in setInterval().
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-8">
            <h3 className="font-bold mb-3">Example:</h3>
            <p className="mb-3">Same example as above, but with a "Stop time" button:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example4}</code>
            </pre>
            <button
              onClick={() => handleCopy("example4", example4)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example4 ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Timing References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Timing References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for JavaScript timing and asynchronous programming concepts.
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

export default Timing_Events;
