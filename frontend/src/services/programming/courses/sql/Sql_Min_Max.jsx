import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Min_Max = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const minEx = `SELECT MIN(Price)\nFROM Products;`;
  const maxEx = `SELECT MAX(Price)\nFROM Products;`;
  const syntaxMin = `SELECT MIN(column_name)\nFROM table_name\nWHERE condition;`;
  const syntaxMax = `SELECT MAX(column_name)\nFROM table_name\nWHERE condition;`;
  const aliasEx = `SELECT MIN(Price) AS SmallestPrice\nFROM Products;`;
  const groupByEx = `SELECT MIN(Price) AS SmallestPrice, CategoryID\nFROM Products\nGROUP BY CategoryID;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">
            SQL MIN() and MAX() Functions
          </h1>
          <p className="text-gray-600 text-lg">
            The <strong>MIN()</strong> function returns the smallest value of the selected column. <br />
            The <strong>MAX()</strong> function returns the largest value of the selected column.
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
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">MIN()</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{syntaxMin}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">MAX()</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{syntaxMax}</code>
              </pre>
            </div>
          </div>
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
          {/* MIN Example */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">MIN() Example</h2>
            <p className="mb-2">Find the lowest price in the <code>Price</code> column:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{minEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(minEx, "ex1")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* MAX Example */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">MAX() Example</h2>
            <p className="mb-2">Find the highest price in the <code>Price</code> column:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{maxEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(maxEx, "ex2")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Alias Example */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Set Column Name (Alias)</h2>
            <p className="mb-2">Use <code>AS</code> to give a descriptive name:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{aliasEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(aliasEx, "ex3")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Group By Example */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">MIN() with GROUP BY</h2>
            <p className="mb-2">Smallest price for each category:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{groupByEx}</code>
            </pre>
            <button
              onClick={() => handleCopy(groupByEx, "ex4")}
              className="bg-[#04AA6D] text-white px-5 py-2 rounded"
            >
              {copied === "ex4" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What does the SQL MIN() function do?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>Returns the largest value of the selected column</li>
            <li className="font-bold">Returns the smallest value of the selected column ✅</li>
            <li>Calculates the average of the selected column</li>
            <li>Counts the number of records in the selected column</li>
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

export default Sql_Min_Max;
