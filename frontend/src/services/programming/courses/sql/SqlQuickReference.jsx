import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SqlQuickReference = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // Example SQL Snippets
  const examples = {
    select: `SELECT column_name(s)
FROM table_name;`,

    selectWhere: `SELECT column_name(s)
FROM table_name
WHERE condition;`,

    insert: `INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);`,

    update: `UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;`,

    delete: `DELETE FROM table_name
WHERE condition;`,

    createTable: `CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype
);`,

    alterTable: `ALTER TABLE table_name
ADD column_name datatype;`,

    dropTable: `DROP TABLE table_name;`,

    join: `SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column = table2.column;`,

    orderBy: `SELECT column_name(s)
FROM table_name
ORDER BY column_name ASC|DESC;`,
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Quick Reference</h1>
          <p className="text-gray-600 text-lg">
            A modern quick reference guide to the most common SQL statements. Based on W3Schools style, but fully interactive with copy buttons.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Sections */}
        {Object.entries(examples).map(([key, code]) => (
          <section key={key} className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-3 uppercase">{key.replace(/([A-Z])/g, " $1")}</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{code}</code>
            </pre>
            <button
              onClick={() => handleCopy(code, key)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
            >
              {copied === key ? "Copied!" : "Copy SQL"}
            </button>
          </section>
        ))}

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Write an SQL statement to select all records from the table <code>Customers</code> where the <code>Country</code> is "Germany".
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>SELECT * FROM Customers WHERE Country = 'Germany';</code>
          </pre>
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

export default SqlQuickReference;
