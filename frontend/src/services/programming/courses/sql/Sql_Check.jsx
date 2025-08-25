import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Check = () => {
  const [copied, setCopied] = useState("");

  // SQL Code Examples
  const createMySQL = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);`;

  const createSQLServer = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18)
);`;

  const createMulti = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);`;

  const alterAdd = `ALTER TABLE Persons
ADD CHECK (Age>=18);`;

  const alterAddNamed = `ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');`;

  const dropSQLServer = `ALTER TABLE Persons
DROP CONSTRAINT CHK_PersonAge;`;

  const dropMySQL = `ALTER TABLE Persons
DROP CHECK CHK_PersonAge;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL CHECK Constraint</h1>
          <p className="text-gray-600 text-lg">
            The <strong>CHECK</strong> constraint is used to limit the values
            that can be placed in a column. It ensures that data entered into
            a column meets specific conditions.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Table Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Persons Table (Before Constraint)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">LastName</th>
                  <th className="border p-2">FirstName</th>
                  <th className="border p-2">Age</th>
                  <th className="border p-2">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Hansen</td>
                  <td className="border p-2">Ola</td>
                  <td className="border p-2">17 ❌</td>
                  <td className="border p-2">Oslo</td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Svendson</td>
                  <td className="border p-2">Tove</td>
                  <td className="border p-2">23 ✅</td>
                  <td className="border p-2">Sandnes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-2">
            Without a <strong>CHECK</strong> constraint, invalid data (like age
            under 18) can be inserted.
          </p>
        </section>

        {/* Example: CREATE TABLE MySQL */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL CHECK on CREATE TABLE (MySQL)
          </h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(createMySQL, "mysql")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "mysql" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: CREATE TABLE SQL Server */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL CHECK on CREATE TABLE (SQL Server / Oracle / MS Access)
          </h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createSQLServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(createSQLServer, "sqlserver")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: Multiple Columns CHECK */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL CHECK on Multiple Columns
          </h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createMulti}</code>
          </pre>
          <button
            onClick={() => handleCopy(createMulti, "multi")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "multi" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* ALTER TABLE */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL CHECK on ALTER TABLE
          </h2>

          <h3 className="text-xl font-semibold mb-2">Add CHECK</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{alterAdd}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterAdd, "alter")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "alter" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">Add Named CHECK</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{alterAddNamed}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterAddNamed, "alterNamed")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "alterNamed" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* DROP CHECK */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">DROP a CHECK Constraint</h2>

          <h3 className="text-xl font-semibold mb-2">
            SQL Server / Oracle / MS Access
          </h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{dropSQLServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropSQLServer, "dropSQLServer")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "dropSQLServer" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{dropMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropMySQL, "dropMySQL")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "dropMySQL" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which constraint ensures that the values in a column must satisfy a
            condition, such as <code>Age &gt;= 18</code>?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">CHECK ✅</li>
            <li>NOT NULL</li>
            <li>UNIQUE</li>
            <li>DEFAULT</li>
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

export default Sql_Check;
