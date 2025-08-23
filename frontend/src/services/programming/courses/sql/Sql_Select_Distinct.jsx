import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Select_Distinct = () => {
  const references = [
    "SQL Syntax",
    "SQL SELECT",
    "SQL WHERE",
    "SQL INSERT",
    "SQL UPDATE",
    "SQL DELETE",
    "SQL Joins",
    "SQL Keys",
    "SQL Constraints",
    "SQL Functions",
    "SQL Views",
    "SQL Indexes",
    "SQL Transactions",
    "SQL Data Types",
    "SQL Operators",
  ];

  const [copied, setCopied] = useState(false);
  const sqlExample = `SELECT DISTINCT Country FROM Customers;`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(sqlExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">SQL SELECT DISTINCT </h1>
          <p className="text-gray-600 text-lg">
            The SELECT DISTINCT statement is used to return only distinct
            (different) values from a column.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Previous
          </button>
        </div>

        {/* Example Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example</h2>
          <p className="text-gray-800 mb-4">
            Select all the different countries from the "Customers" table:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlExample}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded border text-sm font-mono">
            SELECT DISTINCT column1, column2, ...
            <br />FROM table_name;
          </pre>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <p className="mb-3 text-gray-700">
            Below is a selection from the Customers table used in the examples:
          </p>
          <div className="overflow-x-auto">
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
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">Antonio Moreno</td>
                  <td className="border px-3 py-2">Mataderos 2312</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05023</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Without DISTINCT */}
        <section>
          <h2 className="text-2xl font-bold mb-3">SELECT Example Without DISTINCT</h2>
          <p className="text-gray-700 mb-3">
            If you omit the DISTINCT keyword, the SQL statement returns the
            "Country" value from all the records of the "Customers" table:
          </p>
          <pre className="bg-gray-100 p-4 rounded border text-sm font-mono">
            SELECT Country FROM Customers;
          </pre>
        </section>

        {/* Count Distinct */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Count Distinct</h2>
          <p className="text-gray-700 mb-3">
            By using the DISTINCT keyword in a function called COUNT, we can
            return the number of different countries.
          </p>
          <pre className="bg-gray-100 p-4 rounded border text-sm font-mono mb-3">
            SELECT COUNT(DISTINCT Country) FROM Customers;
          </pre>
          <p className="text-gray-700 mb-3">
            Note: The COUNT(DISTINCT column_name) is not supported in Microsoft
            Access databases. Here is a workaround:
          </p>
          <pre className="bg-gray-100 p-4 rounded border text-sm font-mono">
            SELECT Count(*) AS DistinctCountries
            <br />FROM (SELECT DISTINCT Country FROM Customers);
          </pre>
        </section>

        {/* Exercise Section */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which of the following SQL statements would return a list of all
            unique countries from a table named 'Customers'?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>SELECT UNIQUE Country FROM Customers;</li>
            <li>SELECT Country FROM Customers;</li>
            <li className="font-bold">SELECT DISTINCT Country FROM Customers; ✅</li>
            <li>SELECT * FROM Customers WHERE Country IS UNIQUE;</li>
          </ul>
        </section>

        {/* SQL References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SQL References</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
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

export default Sql_Select_Distinct;
