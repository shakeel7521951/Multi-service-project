import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Get_Date = () => {
  const references = [
    "Date Objects",
    "Date Formats",
    "Date Get Methods",
    "Date Set Methods",
    "UTC Methods",
    "Date Output",
    "Date Parsing",
    "Date Comparison",
    "Date Arithmetic",
    "Timing Events",
    "Countdown Timer",
    "Clock Application",
    "Timezone Handling",
    "Date Validation",
    "Localization"
  ];

  const currentDateExample = `// Create a new date object with current date and time
const date = new Date();
console.log(date);`;

  const getMethodsExample = `// Get various date components
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth(); // 0-11
const day = date.getDate();    // 1-31
const hours = date.getHours(); // 0-23`;

  const [copied, setCopied] = useState(false);
  const [copiedExample, setCopiedExample] = useState(0);

  const handleCopy = (example, num) => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        setCopiedExample(num);
        setTimeout(() => setCopiedExample(0), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Get Date Methods</h1>
          <p className="text-gray-600 text-lg">
            Master JavaScript date handling with comprehensive reference and interactive examples.
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
          <h2 className="text-3xl font-bold mb-4">Working with Dates in JavaScript</h2>
          <p className="text-gray-800 mb-3">
            JavaScript Date objects represent a single moment in time in a platform-independent format. 
            Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
          </p>
          <p className="text-gray-800 mb-3">
            The Date object provides numerous methods for working with dates and times, allowing you 
            to get and set year, month, day, hour, minute, second, and millisecond values.
          </p>
          <p className="text-gray-800 mb-6">
            Understanding these methods is crucial for any application that deals with dates, times, 
            scheduling, or time-sensitive operations.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Date Examples »
          </button>
        </section>

        {/* Code Editor Section - Current Date */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Creating Date Objects
          </h2>
          <p className="text-gray-700 mb-4">
            The <code>new Date()</code> constructor creates a new date object with the current date and time.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{currentDateExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(currentDateExample, 1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedExample === 1 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* Date Get Methods Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Date Get Methods</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            These methods allow you to get various components of a date object. All get methods return values 
            relative to the local time zone unless specified as UTC.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Method</th>
                  <th className="py-3 px-4 border-b text-left">Description</th>
                  <th className="py-3 px-4 border-b text-left">Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getFullYear()</code></td>
                  <td className="py-3 px-4 border-b">Get year as a four digit number</td>
                  <td className="py-3 px-4 border-b">YYYY</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getMonth()</code></td>
                  <td className="py-3 px-4 border-b">Get month as a number</td>
                  <td className="py-3 px-4 border-b">0-11</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getDate()</code></td>
                  <td className="py-3 px-4 border-b">Get day as a number</td>
                  <td className="py-3 px-4 border-b">1-31</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getDay()</code></td>
                  <td className="py-3 px-4 border-b">Get weekday as a number</td>
                  <td className="py-3 px-4 border-b">0-6 (Sun-Sat)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getHours()</code></td>
                  <td className="py-3 px-4 border-b">Get hour</td>
                  <td className="py-3 px-4 border-b">0-23</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getMinutes()</code></td>
                  <td className="py-3 px-4 border-b">Get minute</td>
                  <td className="py-3 px-4 border-b">0-59</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getSeconds()</code></td>
                  <td className="py-3 px-4 border-b">Get second</td>
                  <td className="py-3 px-4 border-b">0-59</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getMilliseconds()</code></td>
                  <td className="py-3 px-4 border-b">Get millisecond</td>
                  <td className="py-3 px-4 border-b">0-999</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b"><code>getTime()</code></td>
                  <td className="py-3 px-4 border-b">Get milliseconds since Jan 1, 1970</td>
                  <td className="py-3 px-4 border-b">Number</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Editor Section - Get Methods */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Using Date Get Methods
          </h2>
          <p className="text-gray-700 mb-4">
            Here's how you can extract different components from a Date object:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{getMethodsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(getMethodsExample, 2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copiedExample === 2 ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </section>

        {/* UTC Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">UTC Date Methods</h2>
          <p className="text-gray-700 mb-4">
            JavaScript also provides UTC equivalents of all get methods that return values in universal time:
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Method</th>
                    <th className="py-3 px-4 border-b text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCFullYear()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCMonth()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC month (0-11)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCDate()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC day of month (1-31)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCHours()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC hour (0-23)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCMinutes()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC minutes (0-59)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCSeconds()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC seconds (0-59)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><code>getUTCMilliseconds()</code></td>
                    <td className="py-3 px-4 border-b">Returns the UTC milliseconds (0-999)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* JavaScript References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">JavaScript Date References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript date references to master all aspects of date and time handling:
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

export default Get_Date;