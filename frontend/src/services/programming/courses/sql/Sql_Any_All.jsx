import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Any_All = () => {
  const [copied, setCopied] = useState("");

  // SQL Example Queries
  const sqlEx1 = `SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity = 10);`;

  const sqlEx2 = `SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity > 99);`;

  const sqlEx3 = `SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity > 1000);`;

  const sqlEx4 = `SELECT ALL ProductName
FROM Products
WHERE TRUE;`;

  const sqlEx5 = `SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity = 10);`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-3">SQL ANY and ALL Operators</h1>
          <p className="text-gray-700 text-lg">
            The <strong>ANY</strong> and <strong>ALL</strong> operators allow you
            to perform a comparison between a single column value and a range of
            other values.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft /> Back
          </button>
        </div>

        {/* ANY Operator */}
        <section>
          <h2 className="text-2xl font-bold mb-3">The SQL ANY Operator</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Returns a boolean value as a result</li>
            <li>Returns TRUE if ANY of the subquery values meet the condition</li>
            <li>
              <strong>ANY</strong> means the condition will be true if it is true
              for <em>any</em> of the values in the range
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
   FROM table_name
   WHERE condition);`}</code>
          </pre>
        </section>

        {/* ALL Operator */}
        <section>
          <h2 className="text-2xl font-bold mb-3">The SQL ALL Operator</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Returns a boolean value as a result</li>
            <li>Returns TRUE if ALL of the subquery values meet the condition</li>
            <li>Used with SELECT, WHERE and HAVING statements</li>
            <li>
              <strong>ALL</strong> means the condition is true only if it is true
              for <em>all</em> values in the range
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`-- ALL with SELECT
SELECT ALL column_name(s)
FROM table_name
WHERE condition;`}</code>
          </pre>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`-- ALL with WHERE or HAVING
SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
  (SELECT column_name
   FROM table_name
   WHERE condition);`}</code>
          </pre>
        </section>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database</h2>
          <h3 className="text-xl font-semibold mb-2">Products Table</h3>
          <div className="overflow-x-auto mb-6">
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
                  <td className="border px-3 py-2">9</td>
                  <td className="border px-3 py-2">Mishi Kobe Niku</td>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">6</td>
                  <td className="border px-3 py-2">18 - 500 g pkgs.</td>
                  <td className="border px-3 py-2">97</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-2">OrderDetails Table</h3>
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
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">10249</td>
                  <td className="border px-3 py-2">51</td>
                  <td className="border px-3 py-2">40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ANY Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">SQL ANY Examples</h2>

          {[{sql: sqlEx1, title: "ANY with Quantity = 10", key: "ex1"},
            {sql: sqlEx2, title: "ANY with Quantity > 99", key: "ex2"},
            {sql: sqlEx3, title: "ANY with Quantity > 1000", key: "ex3"}].map((ex) => (
            <div key={ex.key} className="bg-[#D9EEE1] p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">{ex.title}</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded text-sm mb-3 overflow-x-auto">
                <code>{ex.sql}</code>
              </pre>
              <button
                onClick={() => handleCopy(ex.sql, ex.key)}
                className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
              >
                {copied === ex.key ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          ))}
        </section>

        {/* ALL Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">SQL ALL Examples</h2>

          {[{sql: sqlEx4, title: "ALL Product Names", key: "ex4"},
            {sql: sqlEx5, title: "ALL with Quantity = 10", key: "ex5"}].map((ex) => (
            <div key={ex.key} className="bg-[#D9EEE1] p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">{ex.title}</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 rounded text-sm mb-3 overflow-x-auto">
                <code>{ex.sql}</code>
              </pre>
              <button
                onClick={() => handleCopy(ex.sql, ex.key)}
                className="bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
              >
                {copied === ex.key ? "Copied!" : "Copy SQL"}
              </button>
            </div>
          ))}
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            Which operator will return TRUE if <strong>at least one</strong>{" "}
            value in the subquery satisfies the condition?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li className="font-bold">ANY ✅</li>
            <li>ALL</li>
            <li>BETWEEN</li>
            <li>NULL</li>
          </ul>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sql_Any_All;
