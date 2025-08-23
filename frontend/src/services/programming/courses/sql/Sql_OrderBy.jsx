import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_OrderBy = () => {
  // SQL examples
  const sqlEx1 = `SELECT * FROM Products\nORDER BY Price;`;
  const sqlEx2 = `SELECT * FROM Products\nORDER BY Price DESC;`;
  const sqlEx3 = `SELECT * FROM Products\nORDER BY ProductName;`;
  const sqlEx4 = `SELECT * FROM Products\nORDER BY ProductName DESC;`;
  const sqlEx5 = `SELECT * FROM Customers\nORDER BY Country, CustomerName;`;
  const sqlEx6 = `SELECT * FROM Customers\nORDER BY Country ASC, CustomerName DESC;`;

  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(key);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">SQL ORDER BY Keyword</h1>
          <p className="text-gray-600 text-lg">
            The <strong>ORDER BY</strong> keyword is used to <strong>sort</strong> the result-set
            in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Example 1: Basic ORDER BY (ascending default) */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Sort products by price (lowest to highest)</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column1, column2, ...\nFROM table_name\nORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            Note: If you do not specify <code>ASC</code> or <code>DESC</code>, sorting is
            <strong> ascending by default</strong>.
          </p>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Products)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ProductID</th>
                  <th className="border px-3 py-2">ProductName</th>
                  <th className="border px-3 py-2">SupplierID</th>
                  <th className="border px-3 py-2">CategoryID</th>
                  <th className="border px-3 py-2">Unit</th>
                  <th className="border px-3 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Chais</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">10 boxes x 20 bags</td>
                  <td className="border px-3 py-2">18</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Chang</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">24 - 12 oz bottles</td>
                  <td className="border px-3 py-2">19</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Aniseed Syrup</td>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">12 - 550 ml bottles</td>
                  <td className="border px-3 py-2">10</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Chef Anton's Cajun Seasoning</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">48 - 6 oz jars</td>
                  <td className="border px-3 py-2">22</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">Chef Anton's Gumbo Mix</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">36 boxes</td>
                  <td className="border px-3 py-2">21.35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DESC explanation + example */}
        <section className="bg-[#FFF4CC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">DESC</h2>
          <p className="text-gray-700 mb-4">
            <strong>ORDER BY</strong> sorts in ascending order by default. To sort in descending
            order, use the <code>DESC</code> keyword.
          </p>
          <h3 className="text-xl font-semibold mb-2">Example: Highest to lowest price</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Alphabetical ordering */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Order Alphabetically</h2>
          <p className="text-gray-700 mb-4">
            For text (string) columns, <code>ORDER BY</code> sorts alphabetically.
          </p>
          <h3 className="text-xl font-semibold mb-2">Example: A → Z by ProductName</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2 mt-8">Example: Z → A (reverse alphabetical)</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx4}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx4, "ex4")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* ORDER BY several columns */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">ORDER BY Several Columns</h2>
          <p className="text-gray-700 mb-4">
            When ordering by multiple columns, the second (and later) columns are used to
            break ties from the earlier ones.
          </p>
          <h3 className="text-xl font-semibold mb-2">Example: Country, then CustomerName</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx5}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx5, "ex5")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex5" ? "Copied!" : "Copy SQL"}
          </button>

          <h3 className="text-xl font-semibold mb-2 mt-8">Using Both ASC and DESC</h3>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx6}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx6, "ex6")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex6" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What is the purpose of the SQL <strong>ORDER BY</strong> keyword?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>To filter records based on a condition</li>
            <li>To group records with the same value</li>
            <li className="font-bold">To sort records in ascending or descending order ✅</li>
            <li>To limit the number of rows returned</li>
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

export default Sql_OrderBy;