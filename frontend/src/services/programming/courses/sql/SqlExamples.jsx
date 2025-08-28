import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SqlExamples = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  const examples = [
    {
      title: "SQL SELECT",
      desc: "Selects data from a database.",
      code: `SELECT column1, column2 FROM Customers;`
    },
    {
      title: "SQL SELECT DISTINCT",
      desc: "Selects only distinct (different) values.",
      code: `SELECT DISTINCT Country FROM Customers;`
    },
    {
      title: "SQL WHERE",
      desc: "Filters records based on a condition.",
      code: `SELECT * FROM Customers WHERE Country = 'Germany';`
    },
    {
      title: "SQL AND, OR, NOT",
      desc: "Combines multiple conditions.",
      code: `SELECT * FROM Customers WHERE Country = 'Germany' AND City = 'Berlin';`
    },
    {
      title: "SQL ORDER BY",
      desc: "Sorts results in ascending or descending order.",
      code: `SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;`
    },
    {
      title: "SQL NULL Values",
      desc: "Tests for NULL values.",
      code: `SELECT * FROM Customers WHERE Address IS NULL;`
    },
    {
      title: "SQL SELECT TOP / LIMIT",
      desc: "Selects the first N records (SQL Server / MySQL).",
      code: `-- SQL Server\nSELECT TOP 5 * FROM Customers;\n\n-- MySQL / PostgreSQL\nSELECT * FROM Customers LIMIT 5;`
    },
    {
      title: "SQL MIN() and MAX()",
      desc: "Finds the smallest or largest value.",
      code: `SELECT MIN(Price) FROM Products;\nSELECT MAX(Price) FROM Products;`
    },
    {
      title: "SQL COUNT(), AVG(), SUM()",
      desc: "Performs aggregate calculations.",
      code: `SELECT COUNT(*) FROM Orders;\nSELECT AVG(Price) FROM Products;\nSELECT SUM(Quantity) FROM OrderDetails;`
    },
    {
      title: "SQL LIKE",
      desc: "Searches for a specified pattern.",
      code: `SELECT * FROM Customers WHERE CustomerName LIKE 'A%';`
    },
    {
      title: "SQL Wildcards",
      desc: "Used with LIKE for flexible matching.",
      code: `SELECT * FROM Customers WHERE CustomerName LIKE '_r%';`
    },
    {
      title: "SQL IN",
      desc: "Specifies multiple values in WHERE.",
      code: `SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');`
    },
    {
      title: "SQL BETWEEN",
      desc: "Selects values within a range.",
      code: `SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;`
    },
    {
      title: "SQL Aliases",
      desc: "Renames a column or table.",
      code: `SELECT CustomerName AS Name, Address AS Addr FROM Customers;`
    },
    {
      title: "SQL Joins",
      desc: "Combines rows from two or more tables.",
      code: `SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
    },
    {
      title: "SQL UNION",
      desc: "Combines result sets of two queries.",
      code: `SELECT City FROM Customers\nUNION\nSELECT City FROM Suppliers;`
    },
    {
      title: "SQL GROUP BY",
      desc: "Groups rows that share values.",
      code: `SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;`
    },
    {
      title: "SQL HAVING",
      desc: "Filters groups after aggregation.",
      code: `SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5;`
    },
    {
      title: "SQL EXISTS",
      desc: "Tests for existence of records.",
      code: `SELECT CustomerName FROM Customers WHERE EXISTS (SELECT * FROM Orders WHERE Customers.CustomerID = Orders.CustomerID);`
    },
    {
      title: "SQL ANY and ALL",
      desc: "Compares a value to a set of values.",
      code: `SELECT ProductName FROM Products WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity > 10);`
    },
    {
      title: "SQL CASE",
      desc: "Creates conditional logic.",
      code: `SELECT OrderID, Quantity,\nCASE\n  WHEN Quantity > 30 THEN 'High'\n  WHEN Quantity BETWEEN 10 AND 30 THEN 'Medium'\n  ELSE 'Low'\nEND AS OrderSize\nFROM OrderDetails;`
    },
    {
      title: "SQL Comments",
      desc: "Adds comments inside SQL.",
      code: `-- Single line comment\n/* Multi-line\n   comment */`
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL Examples</h1>
          <p className="text-gray-600 text-lg">
            A modern quick reference with the most common SQL statements. Each example includes syntax, explanation, and ready-to-copy code.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* SQL Example Sections */}
        {examples.map((ex, idx) => (
          <section key={idx} className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-3">{ex.title}</h2>
            <p className="text-gray-700 mb-4">{ex.desc}</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
              <code>{ex.code}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex.code, ex.title)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
            >
              {copied === ex.title ? "Copied!" : "Copy SQL"}
            </button>
          </section>
        ))}

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Write an SQL statement to return all products with a price greater than 50, sorted by price descending.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
            <code>SELECT * FROM Products WHERE Price 50 ORDER BY Price DESC;</code>
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

export default SqlExamples;
