import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Date_Formats = () => {
  const references = [
    "Date Methods",
    "Date Objects",
    "Date Formats",
    "UTC Methods",
    "Time Zones",
    "Date Output",
    "Date Input",
    "Date Parsing",
    "ISO Standards",
    "Browser Support",
    "Date Conversion",
    "Timestamp",
    "Date Arithmetic",
    "Date Validation",
    "Localization"
  ];

  const codeExamples = [
    {
      title: "ISO Date",
      code: 'const d = new Date("2015-03-25");',
      description: "The computed date will be relative to your time zone."
    },
    {
      title: "ISO Date-Time",
      code: 'const d = new Date("2015-03-25T12:00:00Z");',
      description: "Date and time separated with T, UTC time defined with Z."
    },
    {
      title: "Short Date",
      code: 'const d = new Date("03/25/2015");',
      description: "MM/DD/YYYY format (browser-specific behavior)."
    },
    {
      title: "Long Date",
      code: 'const d = new Date("Mar 25 2015");',
      description: "Month can be full or abbreviated, case insensitive."
    },
    {
      title: "Date Parsing",
      code: 'let msec = Date.parse("March 21, 2012");\nconst d = new Date(msec);',
      description: "Convert date string to milliseconds since Jan 1, 1970."
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setCopiedIndex(index);
        setTimeout(() => {
          setCopied(false);
          setCopiedIndex(-1);
        }, 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Date Formats</h1>
          <p className="text-gray-600 text-lg">
            Learn how to work with dates in JavaScript using various formats and standards.
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
          <h2 className="text-3xl font-bold mb-4">JavaScript Date Input Formats</h2>
          <p className="text-gray-800 mb-3">
            There are generally 3 types of JavaScript date input formats:
          </p>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Type</th>
                  <th className="border p-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">ISO Date</td>
                  <td className="border p-2">"2015-03-25" (The International Standard)</td>
                </tr>
                <tr>
                  <td className="border p-2">Short Date</td>
                  <td className="border p-2">"03/25/2015"</td>
                </tr>
                <tr>
                  <td className="border p-2">Long Date</td>
                  <td className="border p-2">"Mar 25 2015" or "25 Mar 2015"</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-800 mb-3">
            The ISO format follows a strict standard in JavaScript. The other formats are not so well defined and might be browser specific.
          </p>
          <p className="text-gray-800 mb-6">
            Independent of input format, JavaScript will (by default) output dates in full text string format like: <br />
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">Thu Jul 10 2025 02:51:56 GMT-0700 (Pacific Daylight Time)</span>
          </p>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">JavaScript Date Format Examples</h2>
          <p className="text-gray-700 mb-4">
            Try these different date formats in your JavaScript code:
          </p>
          
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-3">{example.title}</h3>
                <p className="text-gray-700 mb-3">{example.description}</p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(example.code, index)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied && copiedIndex === index ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Time Zones Section */}
        <section className="bg-[#FFF4A3] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Time Zones in JavaScript Dates</h2>
          <p className="text-gray-800 mb-3">
            When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
          </p>
          <p className="text-gray-800 mb-3">
            When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
          </p>
          <p className="text-gray-800">
            UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time). Omitting T or Z in a date-time string can give different results in different browsers.
          </p>
        </section>

        {/* Warnings Section */}
        <section className="bg-[#FFC0C7] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Important Warnings</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>In some browsers, months or days with no leading zeroes may produce an error.</li>
            <li>The behavior of "YYYY/MM/DD" is undefined - some browsers will try to guess the format, others will return NaN.</li>
            <li>The behavior of "DD-MM-YYYY" is also undefined.</li>
            <li>Always test date formats across different browsers for compatibility.</li>
            <li>For reliable results, use ISO format (YYYY-MM-DD) whenever possible.</li>
          </ul>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Date References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive JavaScript Date references for all methods, properties, and usage examples.
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

export default Date_Formats;