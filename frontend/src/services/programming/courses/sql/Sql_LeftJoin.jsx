import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_LeftJoin = () => {
  const [copied, setCopied] = useState("");

  const sqlEx = `SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL LEFT JOIN Keyword</h1>
          <p className="text-gray-600 text-lg">
            The <strong>LEFT JOIN</strong> keyword returns all records from the left table
            (<strong>table1</strong>), and the matching records from the right table
            (<strong>table2</strong>). The result is 0 records from the right side if there is no match.
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
        <section>
          <h2 className="text-2xl font-bold mb-4">LEFT JOIN Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table1\nLEFT JOIN table2\nON table1.column_name = table2.column_name;`}</code>
          </pre>
          <p className="text-gray-700 mt-2">
            <strong>Note:</strong> In some databases LEFT JOIN is called LEFT OUTER JOIN.
          </p>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <p className="text-gray-700 mb-4">
            In this tutorial we will use the well-known Northwind sample database.
          </p>

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

          <h3 className="text-xl font-semibold mb-2">Orders Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">OrderID</th>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">EmployeeID</th>
                  <th className="border px-3 py-2">OrderDate</th>
                  <th className="border px-3 py-2">ShipperID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">10308</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">7</td>
                  <td className="border px-3 py-2">1996-09-18</td>
                  <td className="border px-3 py-2">3</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10309</td>
                  <td className="border px-3 py-2">37</td>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">1996-09-19</td>
                  <td className="border px-3 py-2">1</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10310</td>
                  <td className="border px-3 py-2">77</td>
                  <td className="border px-3 py-2">8</td>
                  <td className="border px-3 py-2">1996-09-20</td>
                  <td className="border px-3 py-2">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL LEFT JOIN Example</h2>
          <p className="mb-4 text-gray-700">
            The following SQL statement will select all customers, and any orders they might have:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx, "ex")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What does the LEFT JOIN keyword return?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">All records from the left table, and matching records from the right ✅</li>
            <li>Only the matching records from both tables</li>
            <li>All records from both tables</li>
            <li>Only the records from the right table</li>
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

export default Sql_LeftJoin;
