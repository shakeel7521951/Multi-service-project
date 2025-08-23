import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_intro = () => {
  const references = [
    "SQL Syntax",
    "SQL SELECT",
    "SQL WHERE",
    "SQL INSERT",
    "SQL UPDATE",
    "SQL DELETE",
    "SQL Joins",
    "SQL Keys",
    "SQL Constraints",
    "SQL Functions",
    "SQL Views",
    "SQL Indexes",
    "SQL Transactions",
    "SQL Data Types",
    "SQL Operators",
  ];

  const sqlExample = `SELECT * FROM Customers;`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(sqlExample)
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
          <h1 className="text-3xl font-extrabold mb-2">SQL Tutorial</h1>
          <p className="text-gray-600 text-lg">
            Learn SQL — the standard language for storing, manipulating and
            retrieving data in databases.
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
          <h2 className="text-3xl font-bold mb-4">Introduction to SQL</h2>
          <p className="text-gray-800 mb-3">
            SQL (Structured Query Language) is a standard language for
            accessing and manipulating databases.
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
            <li>SQL lets you access and manipulate databases.</li>
            <li>SQL became an ANSI standard in 1986 and ISO standard in 1987.</li>
            <li>All major RDBMS systems (MySQL, SQL Server, Oracle, PostgreSQL) support it.</li>
          </ul>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Start Learning Now »
          </button>
        </section>

        {/* Code Editor Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Try SQL Example</h2>
          <p className="text-gray-700 mb-4">
            Test SQL queries live in an interactive environment.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{sqlExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* SQL References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SQL References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Use our SQL reference to learn the syntax, commands, and usage for
            every SQL function and query.
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

export default Sql_intro;
