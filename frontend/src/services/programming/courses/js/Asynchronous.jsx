import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Asynchronous = () => {
  const references = [
    "Promises",
    "Async/Await",
    "Fetch API",
    "AJAX",
    "setTimeout",
    "setInterval",
    "Event Loop",
    "Web Workers",
    "Callback Functions",
    "Error Handling",
    "Promise Chaining",
    "Microtasks",
    "XMLHttpRequest",
    "Async Patterns",
    "Performance Optimization"
  ];

  const example1 = `function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);`;

  const example2 = `setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}`;

  const example3 = `setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}`;

  const [copied, setCopied] = useState({
    example1: false,
    example2: false,
    example3: false
  });

  const handleCopy = (example, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(prev => ({...prev, [example]: true}));
        setTimeout(() => setCopied(prev => ({...prev, [example]: false})), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">Asynchronous JavaScript</h1>
          <p className="text-gray-600 text-lg">
            Master asynchronous programming in JavaScript with callbacks, promises, and async/await.
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
          <h2 className="text-3xl font-bold mb-4">Asynchronous JavaScript</h2>
          <p className="text-gray-800 mb-3">
            <em>"I will finish later!"</em>
          </p>
          <p className="text-gray-800 mb-3">
            Functions running in parallel with other functions are called asynchronous.
          </p>
          <p className="text-gray-800 mb-6">
            A good example is JavaScript <code>setTimeout()</code>.
          </p>
        </section>

        {/* Concept Explanation */}
        <section className="bg-[#FFF3CD] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Asynchronous JavaScript</h2>
          <p className="text-gray-800 mb-4">
            The examples used in the previous chapter were very simplified. The purpose was to demonstrate the syntax of callback functions:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy('example1', example1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example1 ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <p className="text-gray-800 mb-4">
            In the example above, <code>myDisplayer</code> is the name of a function. It is passed to <code>myCalculator()</code> as an argument.
          </p>
          <p className="text-gray-800">
            In the real world, callbacks are most often used with asynchronous functions. A typical example is JavaScript <code>setTimeout()</code>.
          </p>
        </section>

        {/* Timeout Section */}
        <section className="bg-[#E7F3FE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Waiting for a Timeout</h2>
          <p className="text-gray-800 mb-4">
            When using the JavaScript function <code>setTimeout()</code>, you can specify a callback function to be executed on time-out:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy('example2', example2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example2 ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <p className="text-gray-800 mb-4">
            In the example above, <code>myFunction</code> is used as a callback. <code>myFunction</code> is passed to <code>setTimeout()</code> as an argument.
          </p>
          <p className="text-gray-800 mb-4">
            3000 is the number of milliseconds before time-out, so <code>myFunction()</code> will be called after 3 seconds.
          </p>
          
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
            <h3 className="font-bold mb-2">Note</h3>
            <p>
              When you pass a function as an argument, remember not to use parenthesis.
            </p>
            <p className="font-mono text-green-600 mt-2">Right: setTimeout(myFunction, 3000);</p>
            <p className="font-mono text-red-600">Wrong: setTimeout(myFunction(), 3000);</p>
          </div>

          <p className="text-gray-800">
            Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
          </p>
        </section>

        {/* Interval Section */}
        <section className="bg-[#E7F3FE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Waiting for Intervals</h2>
          <p className="text-gray-800 mb-4">
            When using the JavaScript function <code>setInterval()</code>, you can specify a callback function to be executed for each interval:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{example3}</code>
            </pre>
            <button
              onClick={() => handleCopy('example3', example3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.example3 ? "Copied!" : "Copy Text"}
            </button>
          </div>

          <p className="text-gray-800 mb-4">
            In the example above, <code>myFunction</code> is used as a callback. <code>myFunction</code> is passed to <code>setInterval()</code> as an argument.
          </p>
          <p className="text-gray-800">
            1000 is the number of milliseconds between intervals, so <code>myFunction()</code> will be called every second.
          </p>
        </section>

        {/* Callback Alternatives */}
        <section className="bg-[#FFF3CD] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Callback Alternatives</h2>
          <p className="text-gray-800 mb-4">
            With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
          </p>
          <p className="text-gray-800 mb-4">
            But, asynchronous programs are difficult to write and difficult to debug.
          </p>
          <p className="text-gray-800">
            Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.
          </p>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Asynchronous JavaScript References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references to master asynchronous programming in JavaScript.
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

export default Asynchronous;