import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Joins = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`;

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
          <h1 className="text-3xl font-extrabold mb-2">SQL Joins</h1>
          <p className="text-gray-600 text-lg">
            A <strong>JOIN</strong> clause is used to combine rows from two or more tables,
            based on a related column between them.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Database: Orders */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Orders Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">OrderID</th>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">OrderDate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">10308</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">1996-09-18</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10309</td>
                  <td className="border px-3 py-2">37</td>
                  <td className="border px-3 py-2">1996-09-19</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10310</td>
                  <td className="border px-3 py-2">77</td>
                  <td className="border px-3 py-2">1996-09-20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Demo Database: Customers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Customers Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">CustomerName</th>
                  <th className="border px-3 py-2">ContactName</th>
                  <th className="border px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-3 py-2">Ana Trujillo</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">Antonio Moreno</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example INNER JOIN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: INNER JOIN</h2>
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

        {/* Example Result */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">OrderID</th>
                  <th className="border px-3 py-2">CustomerName</th>
                  <th className="border px-3 py-2">OrderDate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">10308</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-3 py-2">1996-09-18</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10365</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">1996-11-27</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">10383</td>
                  <td className="border px-3 py-2">Around the Horn</td>
                  <td className="border px-3 py-2">1996-12-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Types of Joins */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Different Types of SQL JOINs</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>(INNER) JOIN:</strong> Returns records that have matching values in both tables</li>
            <li><strong>LEFT (OUTER) JOIN:</strong> Returns all records from the left table, and the matched records from the right table</li>
            <li><strong>RIGHT (OUTER) JOIN:</strong> Returns all records from the right table, and the matched records from the left table</li>
            <li><strong>FULL (OUTER) JOIN:</strong> Returns all records when there is a match in either left or right table</li>
          </ul>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which JOIN returns all records from the left table, even if there are no matches in the right table?</p>
          <ul className="space-y-2 text-gray-800">
            <li>INNER JOIN</li>
            <li className="font-bold">LEFT JOIN ✅</li>
            <li>RIGHT JOIN</li>
            <li>FULL JOIN</li>
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

export default Sql_Joins;
