import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_NotNull = () => {
  const [copied, setCopied] = useState("");

  const createEx = `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);`;

  const alterSqlServer = `ALTER TABLE Persons
ALTER COLUMN Age int NOT NULL;`;

  const alterMySQL = `ALTER TABLE Persons
MODIFY COLUMN Age int NOT NULL;`;

  const alterOracle = `ALTER TABLE Persons
MODIFY Age int NOT NULL;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL NOT NULL Constraint</h1>
          <p className="text-gray-600 text-lg">
            By default, a column can hold <strong>NULL</strong> values.  
            The <strong>NOT NULL</strong> constraint enforces a column to NOT accept NULL values.
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
          <h2 className="text-2xl font-bold mb-4">Why Use NOT NULL?</h2>
          <p className="text-gray-700 mb-2">
            This enforces a field to always contain a value, which means that you cannot insert a new record, 
            or update a record without adding a value to this field.
          </p>
        </section>

        {/* Example: CREATE TABLE with NOT NULL */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL NOT NULL on CREATE TABLE</h2>
          <p className="text-gray-700 mb-4">
            The following SQL ensures that the <code>ID</code>, <code>LastName</code>, 
            and <code>FirstName</code> columns will NOT accept NULL values when the 
            <code>Persons</code> table is created:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createEx}</code>
          </pre>
          <button
            onClick={() => handleCopy(createEx, "create")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "create" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: ALTER TABLE for SQL Server */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL NOT NULL on ALTER TABLE</h2>
          <p className="text-gray-700 mb-4">
            To create a <strong>NOT NULL</strong> constraint on the <code>Age</code> column 
            when the <code>Persons</code> table is already created, use the following SQL:
          </p>

          {/* SQL Server / MS Access */}
          <h3 className="text-xl font-semibold mb-2">SQL Server / MS Access</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{alterSqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterSqlServer, "sqlserver")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
          </button>

          {/* MySQL / Oracle prior 10G */}
          <h3 className="text-xl font-semibold mb-2">MySQL / Oracle (prior to 10G)</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{alterMySQL}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterMySQL, "mysql")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "mysql" ? "Copied!" : "Copy SQL"}
          </button>

          {/* Oracle 10G and later */}
          <h3 className="text-xl font-semibold mb-2">Oracle 10G and later</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{alterOracle}</code>
          </pre>
          <button
            onClick={() => handleCopy(alterOracle, "oracle")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "oracle" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which constraint ensures that a column always has a value and cannot contain NULL?
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

export default Sql_NotNull;
