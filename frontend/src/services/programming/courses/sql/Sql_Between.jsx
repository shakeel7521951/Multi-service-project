import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Between = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20;`;
  const sqlEx2 = `SELECT * FROM Products\nWHERE Price NOT BETWEEN 10 AND 20;`;
  const sqlEx3 = `SELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20\nAND CategoryID IN (1,2,3);`;
  const sqlEx4 = `SELECT * FROM Products\nWHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'\nORDER BY ProductName;`;
  const sqlEx5 = `SELECT * FROM Orders\nWHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';`;

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
          <h1 className="text-3xl font-bold mb-2">SQL BETWEEN Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>BETWEEN</strong> operator selects values within a given range.
            The values can be numbers, text, or dates. It is inclusive: begin and end values are included.
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
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table_name\nWHERE column_name BETWEEN value1 AND value2;`}</code>
          </pre>
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
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: BETWEEN Numbers</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx1}</code>
          </pre>
          <button onClick={() => handleCopy(sqlEx1, "ex1")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT BETWEEN</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx2}</code>
          </pre>
          <button onClick={() => handleCopy(sqlEx2, "ex2")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: BETWEEN with IN</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx3}</code>
          </pre>
          <button onClick={() => handleCopy(sqlEx3, "ex3")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 4 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: BETWEEN Text Values</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx4}</code>
          </pre>
          <button onClick={() => handleCopy(sqlEx4, "ex4")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 5 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: BETWEEN Dates</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlEx5}</code>
          </pre>
          <button onClick={() => handleCopy(sqlEx5, "ex5")} className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded transition">
            {copied === "ex5" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which SQL statement selects all products with a price between 10 and 20?</p>
          <ul className="space-y-2 text-gray-800">
            <li>SELECT * FROM Products WHERE Price = 10 AND Price = 20;</li>
            <li className="font-bold">SELECT * FROM Products WHERE Price BETWEEN 10 AND 20; ✅</li>
            <li>SELECT * FROM Products WHERE Price = 10 OR Price = 20;</li>
            <li>SELECT * FROM Products WHERE Price LIKE '10-20';</li>
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

export default Sql_Between;
