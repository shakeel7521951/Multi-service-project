import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Syntax  = () => {
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

        {/* SQL Syntax Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">SQL Syntax & Statements</h2>
          <p className="text-gray-800 mb-3">
            Most of the actions you need to perform on a database are done with
            SQL statements. They consist of keywords that are easy to
            understand.
          </p>
          <p className="text-gray-800 mb-6">
            Example: The following SQL statement returns all records from the
            Customers table:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Database Tables Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Database Tables</h2>
          <p className="text-gray-800 mb-3">
            A database usually contains one or more tables. Each table is
            identified by a name (e.g. "Customers" or "Orders"), and contains
            records (rows) with data.
          </p>
          <p className="text-gray-800 mb-6">
            Below is a selection from the <strong>Customers</strong> table:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">CustomerName</th>
                  <th className="border px-3 py-2">ContactName</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">City</th>
                  <th className="border px-3 py-2">PostalCode</th>
                  <th className="border px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2">Obere Str. 57</td>
                  <td className="border px-3 py-2">Berlin</td>
                  <td className="border px-3 py-2">12209</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-3 py-2">Ana Trujillo</td>
                  <td className="border px-3 py-2">Avda. de la Constitución 2222</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05021</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">Antonio Moreno</td>
                  <td className="border px-3 py-2">Mataderos 2312</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05023</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Keep in Mind Section */}
        <section className="bg-[#FFF4CC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Keep in Mind That...</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>SQL keywords are NOT case sensitive (select = SELECT).</li>
            <li>Semicolon is used to separate SQL statements.</li>
            <li>We will use semicolons in all examples for best practice.</li>
          </ul>
        </section>

        {/* Important SQL Commands */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Most Important SQL Commands</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>SELECT - extracts data from a database</li>
            <li>UPDATE - updates data in a database</li>
            <li>DELETE - deletes data from a database</li>
            <li>INSERT INTO - inserts new data into a database</li>
            <li>CREATE DATABASE - creates a new database</li>
            <li>ALTER DATABASE - modifies a database</li>
            <li>CREATE TABLE - creates a new table</li>
            <li>ALTER TABLE - modifies a table</li>
            <li>DROP TABLE - deletes a table</li>
            <li>CREATE INDEX - creates an index</li>
            <li>DROP INDEX - deletes an index</li>
          </ul>
        </section>

        {/* Exercise Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL statement is used to select all records from a table
            named 'Customers'?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>SELECT FROM Customers;</li>
            <li>SELECT ALL FROM Customers;</li>
            <li className="font-bold">SELECT * FROM Customers; ✅</li>
            <li>GET ALL FROM Customers;</li>
          </ul>
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

export default Sql_Syntax;
