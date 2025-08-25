import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Having = () => {
  const [copied, setCopied] = useState("");

  const ex1 = `SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5;`;

  const ex2 = `SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY COUNT(CustomerID) DESC;`;

  const ex3 = `SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM (Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 10;`;

  const ex4 = `SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders\nFROM Orders\nINNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID\nWHERE LastName = 'Davolio' OR LastName = 'Fuller'\nGROUP BY LastName\nHAVING COUNT(Orders.OrderID) > 25;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL HAVING Clause</h1>
          <p className="text-gray-600 text-lg">
            The <strong>HAVING</strong> clause was added to SQL because the <strong>WHERE</strong> keyword cannot be used with aggregate functions.
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
          <h2 className="text-2xl font-bold mb-4">HAVING Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table_name\nWHERE condition\nGROUP BY column_name(s)\nHAVING condition\nORDER BY column_name(s);`}</code>
          </pre>
        </section>

        {/* Demo Database Customers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Customers)</h2>
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
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Around the Horn</td>
                  <td className="border px-3 py-2">Thomas Hardy</td>
                  <td className="border px-3 py-2">120 Hanover Sq.</td>
                  <td className="border px-3 py-2">London</td>
                  <td className="border px-3 py-2">WA1 1DP</td>
                  <td className="border px-3 py-2">UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 1</h2>
          <p className="mb-4 text-gray-700">List countries with more than 5 customers:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{ex1}</code>
          </pre>
          <button
            onClick={() => handleCopy(ex1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 2</h2>
          <p className="mb-4 text-gray-700">List countries with more than 5 customers, sorted high to low:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{ex2}</code>
          </pre>
          <button
            onClick={() => handleCopy(ex2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Demo Database Orders & Employees */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Orders & Employees)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Orders Table */}
            <div className="overflow-x-auto">
              <h3 className="font-semibold mb-2">Orders</h3>
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
                    <td className="border px-3 py-2">10248</td>
                    <td className="border px-3 py-2">90</td>
                    <td className="border px-3 py-2">5</td>
                    <td className="border px-3 py-2">1996-07-04</td>
                    <td className="border px-3 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">10249</td>
                    <td className="border px-3 py-2">81</td>
                    <td className="border px-3 py-2">6</td>
                    <td className="border px-3 py-2">1996-07-05</td>
                    <td className="border px-3 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">10250</td>
                    <td className="border px-3 py-2">34</td>
                    <td className="border px-3 py-2">4</td>
                    <td className="border px-3 py-2">1996-07-08</td>
                    <td className="border px-3 py-2">2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Employees Table */}
            <div className="overflow-x-auto">
              <h3 className="font-semibold mb-2">Employees</h3>
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-3 py-2">EmployeeID</th>
                    <th className="border px-3 py-2">LastName</th>
                    <th className="border px-3 py-2">FirstName</th>
                    <th className="border px-3 py-2">BirthDate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">1</td>
                    <td className="border px-3 py-2">Davolio</td>
                    <td className="border px-3 py-2">Nancy</td>
                    <td className="border px-3 py-2">1968-12-08</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">2</td>
                    <td className="border px-3 py-2">Fuller</td>
                    <td className="border px-3 py-2">Andrew</td>
                    <td className="border px-3 py-2">1952-02-19</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">3</td>
                    <td className="border px-3 py-2">Leverling</td>
                    <td className="border px-3 py-2">Janet</td>
                    <td className="border px-3 py-2">1963-08-30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Example 3 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 3</h2>
          <p className="mb-4 text-gray-700">Employees with more than 10 orders:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{ex3}</code>
          </pre>
          <button
            onClick={() => handleCopy(ex3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 4 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 4</h2>
          <p className="mb-4 text-gray-700">Check if Davolio or Fuller registered more than 25 orders:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{ex4}</code>
          </pre>
          <button
            onClick={() => handleCopy(ex4, "ex4")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Why was the HAVING clause added to SQL?</p>
          <ul className="space-y-2 text-gray-800">
            <li>A. To replace the WHERE clause</li>
            <li className="font-bold">B. To allow filtering on aggregate functions ✅</li>
            <li>C. To sort grouped data</li>
            <li>D. To join multiple tables</li>
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

export default Sql_Having;
