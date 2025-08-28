import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_CreateIndex = () => {
  const [copied, setCopied] = useState("");

  const createIndex = `CREATE INDEX index_name
ON table_name (column1, column2, ...);`;

  const createUniqueIndex = `CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);`;

  const example1 = `CREATE INDEX idx_lastname
ON Persons (LastName);`;

  const example2 = `CREATE INDEX idx_pname
ON Persons (LastName, FirstName);`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL CREATE INDEX Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>CREATE INDEX</strong> statement is used to create indexes in tables. 
            Indexes make data retrieval faster, but they can slow down updates since the index itself must be updated.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">CREATE INDEX Syntax</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createIndex}</code>
          </pre>
          <button
            onClick={() => handleCopy(createIndex, "create")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "create" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">CREATE UNIQUE INDEX Syntax</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createUniqueIndex}</code>
          </pre>
          <button
            onClick={() => handleCopy(createUniqueIndex, "unique")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "unique" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Examples */}
        <section className="bg-[#E7E9EB] p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">Single Column Index</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-2">
              <code>{example1}</code>
            </pre>
            <button
              onClick={() => handleCopy(example1, "ex1")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
            >
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Multiple Column Index</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-2">
              <code>{example2}</code>
            </pre>
            <button
              onClick={() => handleCopy(example2, "ex2")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
            >
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#FFF3CD] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What is the main purpose of creating an index in SQL?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>To enforce NOT NULL constraint</li>
            <li>To ensure data uniqueness</li>
            <li className="font-bold">To speed up searches/queries ✅</li>
            <li>To define foreign key relationship</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
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

export default Sql_CreateIndex;
