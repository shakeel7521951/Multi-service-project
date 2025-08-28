import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_AutoIncrement = () => {
  const [copied, setCopied] = useState("");

  const mysql = `CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);

ALTER TABLE Persons AUTO_INCREMENT=100;`;

  const mysqlInsert = `INSERT INTO Persons (FirstName,LastName)
VALUES ('Lars','Monsen');`;

  const sqlServer = `CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const sqlServerTip = `CREATE TABLE Persons (
    Personid int IDENTITY(10,5) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const access = `CREATE TABLE Persons (
    Personid AUTOINCREMENT PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const accessTip = `CREATE TABLE Persons (
    Personid AUTOINCREMENT(10,5) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`;

  const oracleSeq = `CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 10;`;

  const oracleInsert = `INSERT INTO Persons (Personid,FirstName,LastName)
VALUES (seq_person.nextval,'Lars','Monsen');`;

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
          <h1 className="text-3xl font-bold mb-2">SQL AUTO INCREMENT Field</h1>
          <p className="text-gray-600 text-lg">
            Auto-increment allows a unique number to be generated automatically when a new record is inserted. 
            It is commonly used for <strong>Primary Key</strong> fields.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* MySQL */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-4">Syntax for MySQL</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{mysql}</code>
          </pre>
          <button
            onClick={() => handleCopy(mysql, "mysql")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "mysql" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold">Insert Example</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{mysqlInsert}</code>
          </pre>
          <button
            onClick={() => handleCopy(mysqlInsert, "mysqlInsert")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "mysqlInsert" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* SQL Server */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-4">Syntax for SQL Server</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{sqlServer}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlServer, "sqlserver")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "sqlserver" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold">Custom Start & Increment</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{sqlServerTip}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlServerTip, "sqlserverTip")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "sqlserverTip" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Access */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-4">Syntax for Access</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{access}</code>
          </pre>
          <button
            onClick={() => handleCopy(access, "access")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "access" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold">Custom Start & Increment</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{accessTip}</code>
          </pre>
          <button
            onClick={() => handleCopy(accessTip, "accessTip")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "accessTip" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Oracle */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-4">Syntax for Oracle</h2>
          <h3 className="text-xl font-semibold">Create Sequence</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{oracleSeq}</code>
          </pre>
          <button
            onClick={() => handleCopy(oracleSeq, "oracleSeq")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "oracleSeq" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold">Insert Using Sequence</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>{oracleInsert}</code>
          </pre>
          <button
            onClick={() => handleCopy(oracleInsert, "oracleInsert")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "oracleInsert" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#FFF3CD] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL feature is used to automatically generate unique values for primary key fields?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>FOREIGN KEY</li>
            <li>CHECK</li>
            <li className="font-bold">AUTO INCREMENT ✅</li>
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

export default Sql_AutoIncrement;
