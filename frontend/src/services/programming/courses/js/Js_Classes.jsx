import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Js_Classes = () => {
  const classExample = `class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(classExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const browserSupport = [
    { browser: "Chrome", version: "49", date: "Mar, 2016" },
    { browser: "Edge", version: "12", date: "Jul, 2015" },
    { browser: "Firefox", version: "45", date: "Mar, 2016" },
    { browser: "Safari", version: "9", date: "Oct, 2015" },
    { browser: "Opera", version: "36", date: "Mar, 2016" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Classes</h1>
          <p className="text-gray-600 text-lg">
            Learn how JavaScript classes serve as templates for creating objects
            with reusable structure and logic.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Intro */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What Are Classes?</h2>
          <p className="text-gray-800 mb-3">
            JavaScript classes, introduced in ES6, are blueprints for creating
            objects. They encapsulate data with code to work on that data.
          </p>
          <p className="text-gray-800 mb-3">
            Classes make your code more structured and easier to manage.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Class Examples »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Example: JavaScript Class</h2>
          <p className="text-gray-700 mb-4">
            Below is an example of a class with a method to calculate age.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{classExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Info Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Key Concepts</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>constructor()</strong> initializes object properties.</li>
            <li>You can create multiple methods in a class.</li>
            <li>Use <code>new ClassName()</code> to create objects.</li>
            <li>You can send parameters to methods like functions.</li>
            <li>If no constructor is defined, JavaScript provides one.</li>
          </ul>
        </section>

        {/* Browser Support */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Browser Support</h2>
          <table className="w-full text-left border-t border-gray-300">
            <thead>
              <tr className="text-gray-700">
                <th className="py-2">Browser</th>
                <th className="py-2">Version</th>
                <th className="py-2">Release Date</th>
              </tr>
            </thead>
            <tbody>
              {browserSupport.map((b, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2">{b.browser}</td>
                  <td className="py-2">{b.version}</td>
                  <td className="py-2">{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default Js_Classes;
