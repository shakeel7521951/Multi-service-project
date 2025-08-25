import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_CreateTable = () => {
  const [copied, setCopied] = useState("");

  const sqlSyntax = `CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ....
);`;

  const sqlEx1 = `CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`;

  const sqlEx2 = `CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL CREATE TABLE Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>CREATE TABLE</strong> statement is used to create a new table in a database.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{sqlSyntax}</code>
          </pre>
          <p className="mt-2 text-gray-700">
            The <strong>column parameters</strong> specify the names of the columns of the table.
            <br />
            The <strong>datatype</strong> parameter specifies the type of data the column can hold (e.g.{" "}
            <code>varchar</code>, <code>integer</code>, <code>date</code>, etc.).
          </p>
        </section>

        {/* Example 1: Create Persons Table */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Create Table</h2>
          <p className="mb-4 text-gray-700">
            The following SQL creates a table called <code>Persons</code> with five columns:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Demo Persons Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Empty "Persons" Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">PersonID</th>
                  <th className="border px-3 py-2">LastName</th>
                  <th className="border px-3 py-2">FirstName</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-gray-700">
            The empty <code>Persons</code> table can now be filled with data using the <strong>INSERT INTO</strong> statement.
          </p>
        </section>

        {/* Create Table Using Another Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Create Table Using Another Table</h2>
          <p className="text-gray-700 mb-3">
            A copy of an existing table can also be created using <code>CREATE TABLE ... AS SELECT</code>. 
            The new table gets the same column definitions and can be filled with values from the old table.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`CREATE TABLE new_table_name AS
SELECT column1, column2, ...
FROM existing_table_name
WHERE ...;`}</code>
          </pre>
        </section>

        {/* Example 2: Copy Customers Table */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Copy Table</h2>
          <p className="mb-4 text-gray-700">
            The following SQL creates a new table <code>TestTable</code> (a copy of <code>Customers</code>):
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL statement correctly creates a table named <code>Students</code> with columns ID and Name?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">CREATE TABLE Students (ID int, Name varchar(255)); ✅</li>
            <li>INSERT TABLE Students (ID int, Name varchar(255));</li>
            <li>MAKE TABLE Students (ID int, Name varchar(255));</li>
            <li>NEW TABLE Students (ID int, Name varchar(255));</li>
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

export default Sql_CreateTable;
