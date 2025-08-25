import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Constraints = () => {
  const [copied, setCopied] = useState("");

  const createSyntax = `CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);`;

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
          <h1 className="text-3xl font-bold mb-2">SQL Constraints</h1>
          <p className="text-gray-600 text-lg">
            SQL <strong>constraints</strong> are used to specify rules for data in a table.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Create Constraints */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL Create Constraints</h2>
          <p className="text-gray-700 mb-4">
            Constraints can be specified when the table is created with the{" "}
            <code>CREATE TABLE</code> statement, or added later with the{" "}
            <code>ALTER TABLE</code> statement.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{createSyntax}</code>
          </pre>
          <button
            onClick={() => handleCopy(createSyntax, "syntax")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "syntax" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Explanation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">About Constraints</h2>
          <p className="text-gray-700 mb-2">
            Constraints are used to <strong>limit the type of data</strong> that can go into a table. 
            This ensures the <strong>accuracy and reliability</strong> of the data.
          </p>
          <p className="text-gray-700 mb-2">
            If there is any violation between the constraint and the data action, the action is aborted.
          </p>
          <p className="text-gray-700">
            Constraints can be <strong>column level</strong> (apply to one column) 
            or <strong>table level</strong> (apply to the whole table).
          </p>
        </section>

        {/* Common Constraints */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Common SQL Constraints</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>
              <strong>NOT NULL</strong> - Ensures that a column cannot have a NULL value
            </li>
            <li>
              <strong>UNIQUE</strong> - Ensures that all values in a column are different
            </li>
            <li>
              <strong>PRIMARY KEY</strong> - A combination of NOT NULL and UNIQUE. 
              Uniquely identifies each row in a table
            </li>
            <li>
              <strong>FOREIGN KEY</strong> - Prevents actions that would destroy links between tables
            </li>
            <li>
              <strong>CHECK</strong> - Ensures that the values in a column satisfy a specific condition
            </li>
            <li>
              <strong>DEFAULT</strong> - Sets a default value for a column if no value is specified
            </li>
            <li>
              <strong>CREATE INDEX</strong> - Used to create and retrieve data from the database very quickly
            </li>
          </ul>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL constraint ensures that a column must have a value and cannot be left empty?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">NOT NULL ✅</li>
            <li>UNIQUE</li>
            <li>DEFAULT</li>
            <li>CHECK</li>
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

export default Sql_Constraints;
