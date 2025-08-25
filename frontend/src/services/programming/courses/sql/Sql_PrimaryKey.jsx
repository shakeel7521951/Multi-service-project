import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_PrimaryKey = () => {
  const [copied, setCopied] = useState("");

  // Code Examples
  const createMySQL = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);`;

  const createSqlServer = `CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const createMulti = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID, LastName)
);`;

  const alterSingle = `ALTER TABLE Persons
ADD PRIMARY KEY (ID);`;

  const alterMulti = `ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID, LastName);`;

  const dropMySQL = `ALTER TABLE Persons
DROP PRIMARY KEY;`;

  const dropSqlServer = `ALTER TABLE Persons
DROP CONSTRAINT PK_Person;`;

  // Copy handler
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
          <h1 className="text-3xl font-bold mb-2">SQL PRIMARY KEY Constraint</h1>
          <p className="text-gray-600 text-lg">
            The <strong>PRIMARY KEY</strong> constraint uniquely identifies each record in a table.  
            Primary keys must contain <strong>unique values</strong> and cannot contain <strong>NULL</strong> values.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Explanation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">About PRIMARY KEY</h2>
          <p className="text-gray-700 mb-2">
            Each table can have only <strong>ONE</strong> primary key.  
            The primary key can be a single column or a combination of columns.
          </p>
        </section>

        {/* Example: CREATE TABLE */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL PRIMARY KEY on CREATE TABLE</h2>
          <p className="text-gray-700 mb-4">
            The following SQL creates a primary key on the <code>ID</code> column when the 
            <code>Persons</code> table is created:
          </p>

          {/* MySQL */}
          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{createMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(createMySQL, "createMySQL")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition mb-6"
          >
            {copied === "createMySQL" ? "Copied!" : "Copy SQL"}
          </button>

          {/* SQL Server / Oracle / MS Access */}
          <h3 className="text-xl font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{createSqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(createSqlServer, "createSqlServer")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition mb-6"
          >
            {copied === "createSqlServer" ? "Copied!" : "Copy SQL"}
          </button>

          {/* Multiple Columns */}
          <h3 className="text-xl font-semibold mb-2">Multiple Columns</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{createMulti}</code>
          </pre>
          <button
            onClick={() => handleCopy(createMulti, "createMulti")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition"
          >
            {copied === "createMulti" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: ALTER TABLE */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL PRIMARY KEY on ALTER TABLE</h2>
          <p className="text-gray-700 mb-4">
            To add a primary key when the table is already created, use:
          </p>

          {/* Single Column */}
          <h3 className="text-xl font-semibold mb-2">Single Column</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{alterSingle}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterSingle, "alterSingle")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition mb-6"
          >
            {copied === "alterSingle" ? "Copied!" : "Copy SQL"}
          </button>

          {/* Multiple Columns */}
          <h3 className="text-xl font-semibold mb-2">Multiple Columns</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{alterMulti}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterMulti, "alterMulti")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition"
          >
            {copied === "alterMulti" ? "Copied!" : "Copy SQL"}
          </button>

          <p className="text-gray-700 mt-4">
            <strong>Note:</strong> If you use <code>ALTER TABLE</code> to add a primary key, the column(s) must have been declared with <code>NOT NULL</code> when the table was first created.
          </p>
        </section>

        {/* Drop PRIMARY KEY */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">DROP a PRIMARY KEY Constraint</h2>
          <p className="text-gray-700 mb-4">To remove a primary key, use:</p>

          {/* MySQL */}
          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{dropMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropMySQL, "dropMySQL")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition mb-6"
          >
            {copied === "dropMySQL" ? "Copied!" : "Copy SQL"}
          </button>

          {/* SQL Server / Oracle / MS Access */}
          <h3 className="text-xl font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{dropSqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropSqlServer, "dropSqlServer")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded font-semibold transition"
          >
            {copied === "dropSqlServer" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which constraint ensures that each record in a table can be uniquely identified?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>NOT NULL</li>
            <li>UNIQUE</li>
            <li className="font-bold">PRIMARY KEY ✅</li>
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

export default Sql_PrimaryKey;
