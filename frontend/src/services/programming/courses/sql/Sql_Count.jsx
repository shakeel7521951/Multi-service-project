import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Count = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const countAll = `SELECT COUNT(*)\nFROM Products;`;
  const countColumn = `SELECT COUNT(ProductName)\nFROM Products;`;
  const countWhere = `SELECT COUNT(ProductID)\nFROM Products\nWHERE Price > 20;`;
  const countDistinct = `SELECT COUNT(DISTINCT Price)\nFROM Products;`;
  const countAlias = `SELECT COUNT(*) AS [Number of records]\nFROM Products;`;
  const countGroupBy = `SELECT COUNT(*) AS [Number of records], CategoryID\nFROM Products\nGROUP BY CategoryID;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL COUNT() Function</h1>
          <p className="text-gray-600 text-lg">
            The <strong>COUNT()</strong> function returns the number of rows that
            match a specified criterion.
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
            <code>{`SELECT COUNT(column_name)\nFROM table_name\nWHERE condition;`}</code>
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
          {/* COUNT(*) */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT(*) Example</h2>
            <p className="mb-2">Find the total number of rows in the Products table:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countAll}</code>
            </pre>
            <button
              onClick={() => handleCopy(countAll, "ex1")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* COUNT(column_name) */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT(column_name) Example</h2>
            <p className="mb-2">Find the number of products where ProductName is not null:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countColumn}</code>
            </pre>
            <button
              onClick={() => handleCopy(countColumn, "ex2")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* COUNT with WHERE */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT() with WHERE Clause</h2>
            <p className="mb-2">Find the number of products where Price is higher than 20:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countWhere}</code>
            </pre>
            <button
              onClick={() => handleCopy(countWhere, "ex3")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* COUNT DISTINCT */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT(DISTINCT)</h2>
            <p className="mb-2">How many different prices are there in the Products table:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countDistinct}</code>
            </pre>
            <button
              onClick={() => handleCopy(countDistinct, "ex4")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex4" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* COUNT Alias */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT() with Alias</h2>
            <p className="mb-2">Give the counted column a name using <code>AS</code>:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countAlias}</code>
            </pre>
            <button
              onClick={() => handleCopy(countAlias, "ex5")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex5" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* COUNT with GROUP BY */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">COUNT() with GROUP BY</h2>
            <p className="mb-2">Number of records for each category:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{countGroupBy}</code>
            </pre>
            <button
              onClick={() => handleCopy(countGroupBy, "ex6")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex6" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What does the SQL COUNT() function do?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>Calculates the sum of all values in a column</li>
            <li className="font-bold">Returns the number of rows that match a specified criterion ✅</li>
            <li>Finds the minimum value in a column</li>
            <li>Returns the average value of all rows in a column</li>
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

export default Sql_Count;