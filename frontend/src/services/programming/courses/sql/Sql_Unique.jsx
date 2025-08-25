import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Unique = () => {
  const [copied, setCopied] = useState("");

  const exCreateSQL = `CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const exCreateMySQL = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);`;

  const exMultiCol = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID, LastName)
);`;

  const exAlterSQL = `ALTER TABLE Persons
ADD UNIQUE (ID);`;

  const exAlterNamed = `ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID, LastName);`;

  const exDropMySQL = `ALTER TABLE Persons
DROP INDEX UC_Person;`;

  const exDropSQLServer = `ALTER TABLE Persons
DROP CONSTRAINT UC_Person;`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL UNIQUE Constraint</h1>
          <p className="text-gray-600 text-lg">
            The <strong>UNIQUE</strong> constraint ensures that all values in a column are different.
          </p>
          <p className="text-gray-700 mt-2">
            Both <strong>UNIQUE</strong> and <strong>PRIMARY KEY</strong> constraints guarantee uniqueness.
            A table can have multiple <strong>UNIQUE</strong> constraints but only one <strong>PRIMARY KEY</strong>.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* CREATE TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4">UNIQUE on CREATE TABLE</h2>
          <p className="text-gray-700 mb-4">
            The following SQL creates a <strong>UNIQUE</strong> constraint on the <code>ID</code> column:
          </p>

          {/* SQL Server / Oracle / MS Access */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exCreateSQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(exCreateSQL, "create1")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "create1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* MySQL */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-2">MySQL</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exCreateMySQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(exCreateMySQL, "create2")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "create2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Multiple Columns */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Multiple Columns</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exMultiCol}</code>
            </pre>
            <button
              onClick={() => handleCopy(exMultiCol, "multi")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "multi" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* ALTER TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4">UNIQUE on ALTER TABLE</h2>
          <p className="text-gray-700 mb-4">
            Add a <strong>UNIQUE</strong> constraint when the table is already created:
          </p>

          {/* Simple Add */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-2">Add Unique</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exAlterSQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(exAlterSQL, "alter1")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "alter1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Named Constraint */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Named Constraint</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exAlterNamed}</code>
            </pre>
            <button
              onClick={() => handleCopy(exAlterNamed, "alter2")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "alter2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* DROP UNIQUE */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Drop UNIQUE Constraint</h2>
          <p className="text-gray-700 mb-4">Remove a UNIQUE constraint using:</p>

          {/* MySQL */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-2">MySQL</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exDropMySQL}</code>
            </pre>
            <button
              onClick={() => handleCopy(exDropMySQL, "drop1")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "drop1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SQL Server / Oracle / MS Access */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded overflow-x-auto mb-4">
              <code>{exDropSQLServer}</code>
            </pre>
            <button
              onClick={() => handleCopy(exDropSQLServer, "drop2")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-5 py-2 rounded"
            >
              {copied === "drop2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which constraint ensures all values in a column are different?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">UNIQUE ✅</li>
            <li>PRIMARY KEY</li>
            <li>CHECK</li>
            <li>FOREIGN KEY</li>
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

export default Sql_Unique;
