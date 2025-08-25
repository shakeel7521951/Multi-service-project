import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_DropTable = () => {
  const [copied, setCopied] = useState("");

  const sqlDropSyntax = `DROP TABLE table_name;`;

  const sqlDropEx = `DROP TABLE Shippers;`;

  const sqlTruncateSyntax = `TRUNCATE TABLE table_name;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL DROP TABLE Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>DROP TABLE</strong> statement is used to delete an existing table from the database.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax: DROP TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{sqlDropSyntax}</code>
          </pre>
          <p className="mt-2 text-gray-700">
            <strong>⚠️ Note:</strong> Be careful before dropping a table! Deleting a table will result in the <strong>loss of all information</strong> stored in it.
          </p>
        </section>

        {/* Example: DROP TABLE */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Drop Table</h2>
          <p className="mb-4 text-gray-700">
            The following SQL statement drops the existing table <code>Shippers</code>:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlDropEx}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlDropEx, "drop")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "drop" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* TRUNCATE TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4">SQL TRUNCATE TABLE</h2>
          <p className="text-gray-700 mb-3">
            The <strong>TRUNCATE TABLE</strong> statement is used to delete all rows inside a table, but not the table itself.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{sqlTruncateSyntax}</code>
          </pre>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL statement will remove the table <code>Orders</code> completely from the database?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">DROP TABLE Orders; ✅</li>
            <li>DELETE TABLE Orders;</li>
            <li>REMOVE TABLE Orders;</li>
            <li>TRUNCATE Orders;</li>
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

export default Sql_DropTable;
