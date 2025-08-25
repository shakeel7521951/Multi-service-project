import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_InnerJoin = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT ProductID, ProductName, CategoryName\nFROM Products\nINNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;`;
  const sqlEx2 = `SELECT Products.ProductID, Products.ProductName, Categories.CategoryName\nFROM Products\nINNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;`;
  const sqlEx3 = `SELECT Products.ProductID, Products.ProductName, Categories.CategoryName\nFROM Products\nJOIN Categories ON Products.CategoryID = Categories.CategoryID;`;
  const sqlEx4 = `SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName\nFROM ((Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)\nINNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);`;

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
          <h1 className="text-3xl font-bold mb-2">SQL INNER JOIN</h1>
          <p className="text-gray-600 text-lg">
            The <strong>INNER JOIN</strong> keyword selects records that have matching values in both tables.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Database: Products */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Products Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ProductID</th>
                  <th className="border px-3 py-2">ProductName</th>
                  <th className="border px-3 py-2">CategoryID</th>
                  <th className="border px-3 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Chais</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">18</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Chang</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">19</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Aniseed Syrup</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Demo Database: Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">CategoryID</th>
                  <th className="border px-3 py-2">CategoryName</th>
                  <th className="border px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Beverages</td>
                  <td className="border px-3 py-2">Soft drinks, coffees, teas, beers, and ales</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Condiments</td>
                  <td className="border px-3 py-2">Sweet and savory sauces, relishes, spreads, and seasonings</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Confections</td>
                  <td className="border px-3 py-2">Desserts, candies, and sweet breads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table1\nINNER JOIN table2\nON table1.column_name = table2.column_name;`}</code>
          </pre>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Basic INNER JOIN</h2>
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

        {/* Example 2: Table Names */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Specifying Table Names</h2>
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

        {/* Example 3: JOIN = INNER JOIN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: JOIN vs INNER JOIN</h2>
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

        {/* Demo Database: Shippers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Shippers Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ShipperID</th>
                  <th className="border px-3 py-2">ShipperName</th>
                  <th className="border px-3 py-2">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Speedy Express</td>
                  <td className="border px-3 py-2">(503) 555-9831</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">United Package</td>
                  <td className="border px-3 py-2">(503) 555-3199</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Federal Shipping</td>
                  <td className="border px-3 py-2">(503) 555-9931</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 4: Join Three Tables */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: INNER JOIN with Three Tables</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx4}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx4, "ex4")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition"
          >
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What does INNER JOIN return?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">Only rows with a match in both tables ✅</li>
            <li>All rows from the left table</li>
            <li>All rows from the right table</li>
            <li>All rows regardless of matching</li>
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

export default Sql_InnerJoin;
