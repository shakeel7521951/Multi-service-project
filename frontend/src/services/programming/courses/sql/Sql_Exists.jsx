import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Exists = () => {
  const [copied, setCopied] = useState("");

  const sqlEx1 = `SELECT SupplierName
FROM Suppliers
WHERE EXISTS (
  SELECT ProductName 
  FROM Products 
  WHERE Products.SupplierID = Suppliers.SupplierID 
  AND Price < 20
);`;

  const sqlEx2 = `SELECT SupplierName
FROM Suppliers
WHERE EXISTS (
  SELECT ProductName 
  FROM Products 
  WHERE Products.SupplierID = Suppliers.SupplierID 
  AND Price = 22
);`;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold mb-2">SQL EXISTS Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>EXISTS</strong> operator is used to test for the
            existence of any record in a subquery.  
            It returns <strong>TRUE</strong> if the subquery returns one or more records.
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
          <h2 className="text-2xl font-bold mb-4">EXISTS Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column_name(s)\nFROM table_name\nWHERE EXISTS (SELECT column_name FROM table_name WHERE condition);`}</code>
          </pre>
        </section>

        {/* Demo Database Products */}
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

        {/* Demo Database Suppliers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Suppliers)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">SupplierID</th>
                  <th className="border px-3 py-2">SupplierName</th>
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
                  <td className="border px-3 py-2">Exotic Liquid</td>
                  <td className="border px-3 py-2">Charlotte Cooper</td>
                  <td className="border px-3 py-2">49 Gilbert St.</td>
                  <td className="border px-3 py-2">London</td>
                  <td className="border px-3 py-2">EC1 4SD</td>
                  <td className="border px-3 py-2">UK</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">New Orleans Cajun Delights</td>
                  <td className="border px-3 py-2">Shelley Burke</td>
                  <td className="border px-3 py-2">P.O. Box 78934</td>
                  <td className="border px-3 py-2">New Orleans</td>
                  <td className="border px-3 py-2">70117</td>
                  <td className="border px-3 py-2">USA</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Grandma Kelly's Homestead</td>
                  <td className="border px-3 py-2">Regina Murphy</td>
                  <td className="border px-3 py-2">707 Oxford Rd.</td>
                  <td className="border px-3 py-2">Ann Arbor</td>
                  <td className="border px-3 py-2">48104</td>
                  <td className="border px-3 py-2">USA</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Tokyo Traders</td>
                  <td className="border px-3 py-2">Yoshi Nagase</td>
                  <td className="border px-3 py-2">9-8 Sekimai Musashino-shi</td>
                  <td className="border px-3 py-2">Tokyo</td>
                  <td className="border px-3 py-2">100</td>
                  <td className="border px-3 py-2">Japan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            Example: Suppliers with product price &lt; 20
          </h2>
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
          <h2 className="text-2xl font-bold mb-4">
            Example: Suppliers with product price = 22
          </h2>
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

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What does the SQL <strong>EXISTS</strong> operator return?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>FALSE if the subquery has records</li>
            <li className="font-bold">TRUE if the subquery has one or more records ✅</li>
            <li>It always returns all rows from both tables</li>
            <li>It deletes NULL values</li>
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

export default Sql_Exists;
