import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Avg = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const avgAll = `SELECT AVG(Price)\nFROM Products;`;
  const avgWhere = `SELECT AVG(Price)\nFROM Products\nWHERE CategoryID = 1;`;
  const avgAlias = `SELECT AVG(Price) AS [average price]\nFROM Products;`;
  const avgHigher = `SELECT * FROM Products\nWHERE Price > (SELECT AVG(Price) FROM Products);`;
  const avgGroupBy = `SELECT AVG(Price) AS AveragePrice, CategoryID\nFROM Products\nGROUP BY CategoryID;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL AVG() Function</h1>
          <p className="text-gray-600 text-lg">
            The <strong>AVG()</strong> function returns the average value of a numeric column.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Syntax Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT AVG(column_name)\nFROM table_name\nWHERE condition;`}</code>
          </pre>
          <p className="mt-2 text-gray-500 text-sm">Note: NULL values are ignored.</p>
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

        {/* Examples */}
        <section className="space-y-8">
          {/* AVG All */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">AVG() Example</h2>
            <p className="mb-2">Return the average price of all products:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{avgAll}</code>
            </pre>
            <button onClick={() => handleCopy(avgAll, "ex1")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* AVG with WHERE */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">AVG() with WHERE Clause</h2>
            <p className="mb-2">Return the average price of products in category 1:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{avgWhere}</code>
            </pre>
            <button onClick={() => handleCopy(avgWhere, "ex2")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* AVG with Alias */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">AVG() with Alias</h2>
            <p className="mb-2">Give the column a name using <code>AS</code>:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{avgAlias}</code>
            </pre>
            <button onClick={() => handleCopy(avgAlias, "ex3")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* AVG Higher Than Average */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Higher Than Average</h2>
            <p className="mb-2">Return all products with a price higher than the average:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{avgHigher}</code>
            </pre>
            <button onClick={() => handleCopy(avgHigher, "ex4")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex4" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* AVG with GROUP BY */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">AVG() with GROUP BY</h2>
            <p className="mb-2">Return the average price for each category:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{avgGroupBy}</code>
            </pre>
            <button onClick={() => handleCopy(avgGroupBy, "ex5")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex5" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What does the SQL AVG() function do?</p>
          <ul className="space-y-2 text-gray-800">
            <li>Returns the sum of a numeric column</li>
            <li className="font-bold">Returns the average value of a numeric column ✅</li>
            <li>Counts the number of rows in a table</li>
            <li>Finds the maximum value in a numeric column</li>
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

export default Sql_Avg;
