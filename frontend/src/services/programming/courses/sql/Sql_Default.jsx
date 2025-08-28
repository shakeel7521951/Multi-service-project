import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Default = () => {
  const [copied, setCopied] = useState("");

  const createEx = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);`;

  const createFuncEx = `CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
);`;

  const alterMySQL = `ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';`;

  const alterSqlServer = `ALTER TABLE Persons
ADD CONSTRAINT df_City
DEFAULT 'Sandnes' FOR City;`;

  const alterAccess = `ALTER TABLE Persons
ALTER COLUMN City SET DEFAULT 'Sandnes';`;

  const alterOracle = `ALTER TABLE Persons
MODIFY City DEFAULT 'Sandnes';`;

  const dropMySQL = `ALTER TABLE Persons
ALTER City DROP DEFAULT;`;

  const dropSqlServer = `ALTER TABLE Persons
ALTER COLUMN City DROP DEFAULT;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL DEFAULT Constraint</h1>
          <p className="text-gray-600 text-lg">
            The <strong>DEFAULT</strong> constraint is used to set a default value for a column.
            <br />If no other value is specified when inserting a new record,
            the default value will be used automatically.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* CREATE TABLE Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL DEFAULT on CREATE TABLE
          </h2>
          <p className="text-gray-700 mb-4">
            The following SQL sets a default value for the <code>City</code> column 
            when the <code>Persons</code> table is created:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{createEx}</code>
          </pre>
          <button
            onClick={() => handleCopy(createEx, "create")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "create" ? "Copied!" : "Copy SQL"}
          </button>

          <p className="text-gray-700 mb-4">
            You can also use functions such as <code>GETDATE()</code> to set system values:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4 overflow-x-auto">
            <code>{createFuncEx}</code>
          </pre>
          <button
            onClick={() => handleCopy(createFuncEx, "createFunc")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "createFunc" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* ALTER TABLE Examples */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            SQL DEFAULT on ALTER TABLE
          </h2>
          <p className="text-gray-700 mb-6">
            To add a <strong>DEFAULT</strong> constraint to an existing column:
          </p>

          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{alterMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterMySQL, "mysql")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "mysql" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">SQL Server</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{alterSqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterSqlServer, "sqlserver")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">MS Access</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{alterAccess}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterAccess, "access")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "access" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">Oracle</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{alterOracle}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterOracle, "oracle")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "oracle" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* DROP DEFAULT Constraint */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">DROP a DEFAULT Constraint</h2>
          <p className="text-gray-700 mb-6">
            To remove a <strong>DEFAULT</strong> constraint from a column:
          </p>

          <h3 className="text-xl font-semibold mb-2">MySQL</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{dropMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropMySQL, "dropMySQL")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "dropMySQL" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">SQL Server / Oracle / MS Access</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 mb-3 rounded font-mono text-sm overflow-x-auto">
            <code>{dropSqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropSqlServer, "dropSqlServer")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "dropSqlServer" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL constraint sets a default value for a column when no value is specified?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>NOT NULL</li>
            <li>UNIQUE</li>
            <li className="font-bold">DEFAULT ✅</li>
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

export default Sql_Default;
