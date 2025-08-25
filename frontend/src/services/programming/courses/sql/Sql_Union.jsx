import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Union = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT City FROM Customers\nUNION\nSELECT City FROM Suppliers\nORDER BY City;`;

  const sqlEx2 = `SELECT City, Country FROM Customers\nWHERE Country='Germany'\nUNION\nSELECT City, Country FROM Suppliers\nWHERE Country='Germany'\nORDER BY City;`;

  const sqlEx3 = `SELECT 'Customer' AS Type, ContactName, City, Country\nFROM Customers\nUNION\nSELECT 'Supplier', ContactName, City, Country\nFROM Suppliers;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL UNION Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>UNION</strong> operator is used to combine the result-set of two or more SELECT statements.
            It automatically removes duplicate rows from the result set.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Requirements for UNION</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Every SELECT statement within UNION must have the same number of columns.</li>
            <li>The columns must have similar data types.</li>
            <li>The columns in every SELECT statement must also be in the same order.</li>
          </ul>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">UNION Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s) FROM table1\nUNION\nSELECT column_name(s) FROM table2;`}</code>
          </pre>
          <p className="text-gray-700 mt-2">
            <strong>Note:</strong> The column names in the result-set are usually equal to the column names in the first SELECT statement.
          </p>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <p className="text-gray-700 mb-4">We will use the Northwind sample database.</p>

          <h3 className="text-xl font-semibold mb-2">Customers Table</h3>
          <div className="overflow-x-auto mb-6">
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
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-2">Suppliers Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">SupplierID</th>
                  <th className="border px-3 py-2">SupplierName</th>
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
                  <td className="border px-3 py-2">Exotic Liquid</td>
                  <td className="border px-3 py-2">Charlotte Cooper</td>
                  <td className="border px-3 py-2">49 Gilbert St.</td>
                  <td className="border px-3 py-2">London</td>
                  <td className="border px-3 py-2">EC1 4SD</td>
                  <td className="border px-3 py-2">UK</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">New Orleans Cajun Delights</td>
                  <td className="border px-3 py-2">Shelley Burke</td>
                  <td className="border px-3 py-2">P.O. Box 78934</td>
                  <td className="border px-3 py-2">New Orleans</td>
                  <td className="border px-3 py-2">70117</td>
                  <td className="border px-3 py-2">USA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: UNION Cities</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <p className="text-gray-700 mb-4">This query returns all unique cities from both Customers and Suppliers tables.</p>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: UNION With WHERE</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <p className="text-gray-700 mb-4">This query returns German cities from both Customers and Suppliers.</p>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: UNION Customers & Suppliers</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <p className="text-gray-700 mb-4">This query lists all customers and suppliers with type labels.</p>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What does the SQL UNION operator do?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">Combines the result of two or more SELECT statements and removes duplicates ✅</li>
            <li>Combines results but keeps duplicates</li>
            <li>Only selects from the first table</li>
            <li>Deletes duplicate records from a table</li>
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

export default Sql_Union;
