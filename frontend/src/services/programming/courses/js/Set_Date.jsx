import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Set_Date = () => {
  const methods = [
    { name: "setDate()", desc: "Set the day as a number (1-31)" },
    { name: "setFullYear()", desc: "Set the year (yyyy)" },
    { name: "setHours()", desc: "Set the hour (0-23)" },
    { name: "setMilliseconds()", desc: "Set the milliseconds (0-999)" },
    { name: "setMinutes()", desc: "Set the minutes (0-59)" },
    { name: "setMonth()", desc: "Set the month (0-11)" },
    { name: "setSeconds()", desc: "Set the seconds (0-59)" },
    { name: "setTime()", desc: "Set the time (milliseconds since January 1, 1970)" }
  ];

  const examples = [
    {
      title: "setFullYear()",
      code: `const d = new Date("January 01, 2025");
d.setFullYear(2020);`,
      desc: "Sets the year of a date object to 2020"
    },
    {
      title: "setFullYear() with month and day",
      code: `const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);`,
      desc: "Sets year to 2020, month to December (11), and day to 3"
    },
    {
      title: "setMonth()",
      code: `const d = new Date("January 01, 2025");
d.setMonth(11);`,
      desc: "Sets the month to December (11)"
    },
    {
      title: "setDate()",
      code: `const d = new Date("January 01, 2025");
d.setDate(15);`,
      desc: "Sets the day to 15th of the month"
    },
    {
      title: "Adding Days with setDate()",
      code: `const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);`,
      desc: "Adds 50 days to the date (handles month/year changes automatically)"
    },
    {
      title: "setHours()",
      code: `const d = new Date("January 01, 2025");
d.setHours(22);`,
      desc: "Sets the hour to 22 (10 PM)"
    },
    {
      title: "setHours() with minutes and seconds",
      code: `const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);`,
      desc: "Sets hour to 22, minutes to 10, and seconds to 20"
    },
    {
      title: "setMinutes()",
      code: `const d = new Date("January 01, 2025");
d.setMinutes(30);`,
      desc: "Sets the minutes to 30"
    },
    {
      title: "setSeconds()",
      code: `const d = new Date("January 01, 2025");
d.setSeconds(30);`,
      desc: "Sets the seconds to 30"
    },
    {
      title: "Comparing Dates",
      code: `const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  console.log("Today is before January 14, 2100.");
} else {
  console.log("Today is after January 14, 2100.");
}`,
      desc: "Compares today's date with January 14, 2100"
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index, code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
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
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Set Date Methods</h1>
          <p className="text-gray-600 text-lg">
            Learn how to manipulate dates in JavaScript using set date methods.
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
          <h2 className="text-3xl font-bold mb-4">Set Date Methods</h2>
          <p className="text-gray-800 mb-3">
            Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
          </p>
          <p className="text-gray-800 mb-6">
            These methods are used for setting a part of a date while maintaining the rest of the date components.
          </p>
        </section>

        {/* Methods Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Set Date Methods</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Method</th>
                  <th className="py-3 px-4 border-b text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 px-4 border-b font-mono">{method.name}</td>
                    <td className="py-3 px-4 border-b">{method.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Examples</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore practical examples of how to use JavaScript Set Date methods.
          </p>
          
          <div className="space-y-8">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-[#E7E9EB] p-6 rounded-xl">
                <h3 className="font-bold mb-2">{example.title}</h3>
                <p className="text-gray-700 mb-3">{example.desc}</p>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(idx, example.code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copiedIndex === idx ? "Copied!" : "Copy Code"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="font-bold text-lg mb-2">Important Note</h3>
          <p>
            JavaScript counts months from 0 to 11. January is 0. December is 11.
          </p>
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

export default Set_Date;
