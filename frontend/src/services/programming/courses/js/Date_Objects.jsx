import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Date_Objects = () => {
  const references = [
    "Date Methods",
    "Date Formats",
    "Date Get Methods",
    "Date Set Methods",
    "UTC Methods",
    "Time Zones",
    "Timestamp Conversion",
    "Date Arithmetic",
    "Date Comparison",
    "Date Validation",
    "Date Localization",
    "Date Libraries",
    "Browser Support",
    "Legacy Date Code"
  ];

  const jsExample = `// Create a new Date object
const now = new Date();
console.log(now);

// Specific date
const birthday = new Date("1995-12-17");
console.log(birthday);

// Using multiple parameters
const eventDate = new Date(2025, 6, 10, 9, 30, 0);
console.log(eventDate);`;

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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Date Objects</h1>
          <p className="text-gray-600 text-lg">
            Work with dates and times in JavaScript using the powerful Date object.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Date Objects</h2>
          <p className="text-gray-800 mb-3">
            JavaScript Date Objects let us work with dates and times in web applications.
          </p>
          <div className="bg-white p-4 rounded-lg my-4">
            <p className="font-mono text-gray-700">Thu Jul 10 2025 02:29:59 GMT-0700 (Pacific Daylight Time)</p>
          </div>
          <h3 className="text-xl font-bold mb-2 mt-4">Examples</h3>
          <pre className="bg-gray-100 p-3 rounded font-mono text-sm">
            <code>const d = new Date();</code><br />
            <code>const d = new Date("2022-03-25");</code>
          </pre>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-yellow-800"><strong>Note:</strong> Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not.</p>
          </div>
        </section>

        {/* Date Output Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">JavaScript Date Output</h2>
          <p className="text-gray-700 mb-4">
            By default, JavaScript will use the browser's time zone and display a date as a full text string:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono">Thu Jul 10 2025 02:29:59 GMT-0700 (Pacific Daylight Time)</p>
          </div>
          <p className="text-gray-700 mt-4">
            You will learn much more about how to display dates later in this tutorial.
          </p>
        </section>

        {/* Creating Date Objects */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Creating Date Objects</h2>
          <p className="text-gray-700 mb-4">
            Date objects are created with the <code className="bg-gray-200 px-1 rounded">new Date()</code> constructor.
            There are 9 ways to create a new date object:
          </p>
          <div className="bg-gray-100 p-6 rounded-xl">
            <ul className="list-disc pl-5 space-y-2">
              <li><code>new Date()</code></li>
              <li><code>new Date(date string)</code></li>
              <li><code>new Date(year, month)</code></li>
              <li><code>new Date(year, month, day)</code></li>
              <li><code>new Date(year, month, day, hours)</code></li>
              <li><code>new Date(year, month, day, hours, minutes)</code></li>
              <li><code>new Date(year, month, day, hours, minutes, seconds)</code></li>
              <li><code>new Date(year, month, day, hours, minutes, seconds, ms)</code></li>
              <li><code>new Date(milliseconds)</code></li>
            </ul>
          </div>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Practice with Date Objects</h2>
          <p className="text-gray-700 mb-4">
            Try out JavaScript Date code directly in your browser and see the results.
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

        {/* Date Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Date Methods</h2>
          <p className="text-gray-700 mb-4">
            When a date object is created, a number of methods allow you to operate on it:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Display Methods</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>toString()</code> - Converts to string with timezone</li>
                <li><code>toDateString()</code> - More readable date format</li>
                <li><code>toUTCString()</code> - Converts using UTC standard</li>
                <li><code>toISOString()</code> - Converts using ISO standard</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Get/Set Methods</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>getFullYear()</code>/<code>setFullYear()</code></li>
                <li><code>getMonth()</code>/<code>setMonth()</code></li>
                <li><code>getDate()</code>/<code>setDate()</code></li>
                <li><code>getHours()</code>/<code>setHours()</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Date References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our comprehensive JavaScript Date references to find details about all Date methods, formats, and usage.
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

export default Date_Objects;