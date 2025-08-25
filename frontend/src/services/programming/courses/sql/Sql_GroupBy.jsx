import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_GroupBy = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;`;

  const sqlEx2 = `SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;`;

  const sqlEx3 = `SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL GROUP BY Statement</h1>
          <p className="text-gray-600 text-lg">
            The <strong>GROUP BY</strong> statement groups rows that have the same values 
            into summary rows, such as finding the number of customers in each country.
          </p>
          <p className="text-gray-600">
            It is often used with aggregate functions like{" "}
            <code>COUNT()</code>, <code>MAX()</code>, <code>MIN()</code>,{" "}
            <code>SUM()</code>, <code>AVG()</code>.
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
          <h2 className="text-2xl font-bold mb-4">GROUP BY Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);`}</code>
          </pre>
        </section>

        {/* Demo Database - Customers */}
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
          <h2 className="text-2xl font-bold mb-4">Example 1: Customers per Country</h2>
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

        {/* Example 2 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 2: Customers per Country (Sorted)</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Demo Database - Orders & Shippers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Orders & Shippers)</h2>
          <div className="overflow-x-auto mb-6">
            <h3 className="font-semibold mb-2">Orders</h3>
            <table className="w-full border border-gray-300 text-sm text-left mb-4">
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
              </tbody>
            </table>

            <h3 className="font-semibold mb-2">Shippers</h3>
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ShipperID</th>
                  <th className="border px-3 py-2">ShipperName</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Speedy Express</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">United Package</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Federal Shipping</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 3 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example 3: Orders per Shipper</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
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
          <p className="mb-4 text-gray-700">
            Write an SQL query to find the number of customers in each city.
          </p>
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

export default Sql_GroupBy;
