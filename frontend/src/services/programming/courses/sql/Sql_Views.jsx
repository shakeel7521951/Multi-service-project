import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Views = () => {
  const [copied, setCopied] = useState("");

  const createViewSyntax = `CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`;

  const createBrazil = `CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';`;

  const selectBrazil = `SELECT * FROM [Brazil Customers];`;

  const createAboveAvg = `CREATE VIEW [Products Above Average Price] AS
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);`;

  const selectAboveAvg = `SELECT * FROM [Products Above Average Price];`;

  const replaceView = `CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';`;

  const dropView = `DROP VIEW [Brazil Customers];`;

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
          <h1 className="text-3xl font-bold mb-2">SQL Views</h1>
          <p className="text-gray-600 text-lg">
            A <strong>View</strong> is a virtual table based on the result-set of an SQL statement. 
            It contains rows and columns like a real table, but is generated dynamically whenever queried.
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
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">CREATE VIEW Syntax</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createViewSyntax}</code>
          </pre>
          <button
            onClick={() => handleCopy(createViewSyntax, "syntax")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "syntax" ? "Copied!" : "Copy SQL"}
          </button>
          <p className="text-gray-700 mt-3 text-sm">
            Note: A view always shows up-to-date data, since it is recreated whenever queried.
          </p>
        </section>

        {/* Example: Brazil Customers */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Brazil Customers View</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createBrazil}</code>
          </pre>
          <button
            onClick={() => handleCopy(createBrazil, "brazil")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "brazil" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">Querying the View</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{selectBrazil}</code>
          </pre>
          <button
            onClick={() => handleCopy(selectBrazil, "selectBrazil")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "selectBrazil" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example: Products Above Avg Price */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Products Above Average Price</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{createAboveAvg}</code>
          </pre>
          <button
            onClick={() => handleCopy(createAboveAvg, "aboveAvg")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition mb-6"
          >
            {copied === "aboveAvg" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2">Querying the View</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{selectAboveAvg}</code>
          </pre>
          <button
            onClick={() => handleCopy(selectAboveAvg, "selectAboveAvg")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "selectAboveAvg" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Updating a View */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Updating a View</h2>
          <p className="text-gray-700 mb-4">
            A view can be updated using the <strong>CREATE OR REPLACE VIEW</strong> statement.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{replaceView}</code>
          </pre>
          <button
            onClick={() => handleCopy(replaceView, "replace")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "replace" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Dropping a View */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL Dropping a View</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{dropView}</code>
          </pre>
          <button
            onClick={() => handleCopy(dropView, "drop")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "drop" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which SQL statement is used to update an existing view?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>ALTER VIEW</li>
            <li className="font-bold">CREATE OR REPLACE VIEW ✅</li>
            <li>UPDATE VIEW</li>
            <li>MODIFY VIEW</li>
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

export default Sql_Views;
