import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Sum = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const sumAll = `SELECT SUM(Quantity)\nFROM OrderDetails;`;
  const sumWhere = `SELECT SUM(Quantity)\nFROM OrderDetails\nWHERE ProductID = 11;`;
  const sumAlias = `SELECT SUM(Quantity) AS total\nFROM OrderDetails;`;
  const sumGroupBy = `SELECT OrderID, SUM(Quantity) AS [Total Quantity]\nFROM OrderDetails\nGROUP BY OrderID;`;
  const sumExpression = `SELECT SUM(Quantity * 10)\nFROM OrderDetails;`;
  const sumJoin = `SELECT SUM(Price * Quantity)\nFROM OrderDetails\nLEFT JOIN Products ON OrderDetails.ProductID = Products.ProductID;`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL SUM() Function</h1>
          <p className="text-gray-600 text-lg">
            The <strong>SUM()</strong> function returns the total sum of a numeric column.
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
            <code>{`SELECT SUM(column_name)\nFROM table_name\nWHERE condition;`}</code>
          </pre>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (OrderDetails)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">OrderDetailID</th>
                  <th className="border px-3 py-2">OrderID</th>
                  <th className="border px-3 py-2">ProductID</th>
                  <th className="border px-3 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">10248</td>
                  <td className="border px-3 py-2">11</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">10248</td>
                  <td className="border px-3 py-2">42</td>
                  <td className="border px-3 py-2">10</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">10248</td>
                  <td className="border px-3 py-2">72</td>
                  <td className="border px-3 py-2">5</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">10249</td>
                  <td className="border px-3 py-2">14</td>
                  <td className="border px-3 py-2">9</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">10249</td>
                  <td className="border px-3 py-2">51</td>
                  <td className="border px-3 py-2">40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section className="space-y-8">
          {/* SUM All */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() Example</h2>
            <p className="mb-2">Return the sum of all Quantity fields in the OrderDetails table:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumAll}</code>
            </pre>
            <button onClick={() => handleCopy(sumAll, "ex1")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SUM with WHERE */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() with WHERE Clause</h2>
            <p className="mb-2">Return the sum of Quantity for ProductID 11:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumWhere}</code>
            </pre>
            <button onClick={() => handleCopy(sumWhere, "ex2")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SUM with Alias */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() with Alias</h2>
            <p className="mb-2">Give the column a name using <code>AS</code>:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumAlias}</code>
            </pre>
            <button onClick={() => handleCopy(sumAlias, "ex3")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SUM with GROUP BY */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() with GROUP BY</h2>
            <p className="mb-2">Return the Quantity for each OrderID:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumGroupBy}</code>
            </pre>
            <button onClick={() => handleCopy(sumGroupBy, "ex4")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex4" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SUM with Expression */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() with an Expression</h2>
            <p className="mb-2">Assume each product costs $10, calculate total earnings:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumExpression}</code>
            </pre>
            <button onClick={() => handleCopy(sumExpression, "ex5")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex5" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* SUM with JOIN */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">SUM() with JOIN</h2>
            <p className="mb-2">Join with Products to calculate actual amount:</p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded mb-4 text-sm overflow-x-auto">
              <code>{sumJoin}</code>
            </pre>
            <button onClick={() => handleCopy(sumJoin, "ex6")} className="bg-[#04AA6D] text-white px-5 py-2 rounded">
              {copied === "ex6" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What does the SQL SUM() function do?</p>
          <ul className="space-y-2 text-gray-800">
            <li>Counts the number of rows in a table</li>
            <li className="font-bold">Returns the total sum of a numeric column ✅</li>
            <li>Calculates the average value of a column</li>
            <li>Returns the maximum value in a column</li>
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

export default Sql_Sum;
