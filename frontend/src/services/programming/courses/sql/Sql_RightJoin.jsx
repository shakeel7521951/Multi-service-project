import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_RightJoin = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT Orders.OrderID, Employees.LastName, Employees.FirstName\nFROM Orders\nRIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID\nORDER BY Orders.OrderID;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL RIGHT JOIN Keyword</h1>
          <p className="text-gray-600 text-lg">
            The <strong>RIGHT JOIN</strong> keyword returns all records from the
            <strong> right table</strong>, and the matching records from the
            <strong> left table</strong>. If there is no match, the result is
            <strong> NULL</strong> on the left side.
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
          <h2 className="text-2xl font-bold mb-4">RIGHT JOIN Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table1\nRIGHT JOIN table2\nON table1.column_name = table2.column_name;`}</code>
          </pre>
          <p className="text-gray-700 mt-2">
            <strong>Note:</strong> In some databases RIGHT JOIN is called RIGHT
            OUTER JOIN.
          </p>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <p className="text-gray-700 mb-4">
            In this tutorial we will use the well-known Northwind sample
            database.
          </p>

          <h3 className="text-xl font-semibold mb-2">Orders Table</h3>
          <div className="overflow-x-auto mb-6">
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

          <h3 className="text-xl font-semibold mb-2">Employees Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">EmployeeID</th>
                  <th className="border px-3 py-2">LastName</th>
                  <th className="border px-3 py-2">FirstName</th>
                  <th className="border px-3 py-2">BirthDate</th>
                  <th className="border px-3 py-2">Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Davolio</td>
                  <td className="border px-3 py-2">Nancy</td>
                  <td className="border px-3 py-2">12/8/1968</td>
                  <td className="border px-3 py-2">EmpID1.pic</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Fuller</td>
                  <td className="border px-3 py-2">Andrew</td>
                  <td className="border px-3 py-2">2/19/1952</td>
                  <td className="border px-3 py-2">EmpID2.pic</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Leverling</td>
                  <td className="border px-3 py-2">Janet</td>
                  <td className="border px-3 py-2">8/30/1963</td>
                  <td className="border px-3 py-2">EmpID3.pic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">SQL RIGHT JOIN Example</h2>
          <p className="text-gray-700 mb-4">
            The following SQL statement will return all employees, and any
            orders they might have placed:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What does the RIGHT JOIN keyword return in SQL?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>Only records from the left table</li>
            <li>Only records from the right table</li>
            <li className="font-bold">
              All records from the right table, and matching records from the
              left ✅
            </li>
            <li>All records from both tables regardless of match</li>
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

export default Sql_RightJoin;