import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Comments = () => {
  const [copied, setCopied] = useState("");

  const ex1 = `-- Select all:\nSELECT * FROM Customers;`;
  const ex2 = `SELECT * FROM Customers -- WHERE City='Berlin';`;
  const ex3 = `-- SELECT * FROM Customers;\nSELECT * FROM Products;`;
  const ex4 = `/*Select all the columns\nof all the records\nin the Customers table:*/\nSELECT * FROM Customers;`;
  const ex5 = `/*SELECT * FROM Customers;\nSELECT * FROM Products;\nSELECT * FROM Orders;\nSELECT * FROM Categories;*/\nSELECT * FROM Suppliers;`;
  const ex6 = `SELECT CustomerName, /*City,*/ Country FROM Customers;`;
  const ex7 = `SELECT * FROM Customers WHERE (CustomerName LIKE 'L%'\nOR CustomerName LIKE 'R%' /*OR CustomerName LIKE 'S%'\nOR CustomerName LIKE 'T%'*/ OR CustomerName LIKE 'W%')\nAND Country='USA'\nORDER BY CustomerName;`;

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
          <h1 className="text-3xl font-bold mb-2">SQL Comments</h1>
          <p className="text-gray-600 text-lg">
            Comments are used to explain SQL code or to prevent execution of statements.
          </p>
          <p className="mt-2 text-red-600 font-semibold">
            <strong>Note:</strong> Comments are not supported in Microsoft Access!
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Demo Database */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Demo Database (Customers)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">CustomerID</th>
                  <th className="border px-3 py-2">CustomerName</th>
                  <th className="border px-3 py-2">ContactName</th>
                  <th className="border px-3 py-2">City</th>
                  <th className="border px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2">Berlin</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados</td>
                  <td className="border px-3 py-2">Ana Trujillo</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Single Line Comments */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Single-Line Comments</h2>
          <p className="text-gray-700 mb-4">
            Single line comments start with <code className="bg-gray-200 px-1">--</code>.  
            Everything after <code>--</code> until the end of the line will be ignored.
          </p>

          {/* Example 1 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-bold mb-2">Example: Comment as Explanation</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex1}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex1, "ex1")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex1" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Example 2 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-bold mb-2">Example: Comment to Ignore End of Line</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex2}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex2, "ex2")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex2" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Example 3 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Example: Comment to Ignore Statement</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex3}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex3, "ex3")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex3" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Multi-Line Comments */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Multi-Line Comments</h2>
          <p className="text-gray-700 mb-4">
            Multi-line comments start with <code className="bg-gray-200 px-1">/*</code>  
            and end with <code className="bg-gray-200 px-1">*/</code>.  
            Any text in between will be ignored.
          </p>

          {/* Example 4 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-bold mb-2">Example: Multi-line Explanation</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex4}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex4, "ex4")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex4" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Example 5 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-bold mb-2">Example: Comment to Ignore Many Statements</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex5}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex5, "ex5")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex5" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Example 6 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow mb-6">
            <h3 className="font-bold mb-2">Example: Ignore Part of a Line</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex6}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex6, "ex6")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex6" ? "Copied!" : "Copy SQL"}
            </button>
          </div>

          {/* Example 7 */}
          <div className="bg-[#D9EEE1] p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Example: Ignore Part of a Statement</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded mb-4">
              <code>{ex7}</code>
            </pre>
            <button
              onClick={() => handleCopy(ex7, "ex7")}
              className="bg-[#04AA6D] text-white px-6 py-2 rounded"
            >
              {copied === "ex7" ? "Copied!" : "Copy SQL"}
            </button>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">Which symbol starts a single-line comment in SQL?</p>
          <ul className="space-y-2 text-gray-800">
            <li>A. /* */</li>
            <li className="font-bold">B. -- ✅</li>
            <li>C. #</li>
            <li>D. //</li>
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

export default Sql_Comments;
