import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sql_Where = () => {
  const sqlExample1 = `SELECT * FROM Customers\nWHERE Country='Mexico';`;
  const sqlExample2 = `SELECT * FROM Customers\nWHERE CustomerID=1;`;
  const sqlExample3 = `SELECT * FROM Customers\nWHERE CustomerID > 80;`;

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
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">SQL WHERE Clause</h1>
          <p className="text-gray-600 text-lg">
            The <strong>WHERE</strong> clause is used to filter records. It is
            used to extract only those records that fulfill a specified
            condition.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Back
          </button>
        </div>

        {/* Example 1 */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: Select all customers from Mexico</h2>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlExample1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlExample1, "ex1")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`SELECT column1, column2, ...\nFROM table_name\nWHERE condition;`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            Note: The WHERE clause is not only used in SELECT statements, it is
            also used in <strong>UPDATE</strong>, <strong>DELETE</strong>, etc.
          </p>
        </section>

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
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">City</th>
                  <th className="border px-3 py-2">PostalCode</th>
                  <th className="border px-3 py-2">Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">Alfreds Futterkiste</td>
                  <td className="border px-3 py-2">Maria Anders</td>
                  <td className="border px-3 py-2">Obere Str. 57</td>
                  <td className="border px-3 py-2">Berlin</td>
                  <td className="border px-3 py-2">12209</td>
                  <td className="border px-3 py-2">Germany</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">Ana Trujillo Emparedados y helados</td>
                  <td className="border px-3 py-2">Ana Trujillo</td>
                  <td className="border px-3 py-2">Avda. de la Constitución 2222</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05021</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Antonio Moreno Taquería</td>
                  <td className="border px-3 py-2">Antonio Moreno</td>
                  <td className="border px-3 py-2">Mataderos 2312</td>
                  <td className="border px-3 py-2">México D.F.</td>
                  <td className="border px-3 py-2">05023</td>
                  <td className="border px-3 py-2">Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Text vs Numeric */}
        <section className="bg-[#FFF4CC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Text Fields vs Numeric Fields</h2>
          <p className="text-gray-700 mb-4">
            SQL requires single quotes around text values. However, numeric
            fields should not be enclosed in quotes.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlExample2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlExample2, "ex2")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Operators */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Operators in WHERE Clause</h2>
          <p className="text-gray-700 mb-4">
            You can use other operators than the <code>=</code> operator to
            filter the search.
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto mb-4">
            <code>{sqlExample3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlExample3, "ex3")}
            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-2 px-6 py-2 rounded transition"
          >
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Operator</th>
                  <th className="border px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">=</td><td className="border px-3 py-2">Equal</td></tr>
                <tr><td className="border px-3 py-2">&gt;</td><td className="border px-3 py-2">Greater than</td></tr>
                <tr><td className="border px-3 py-2">&lt;</td><td className="border px-3 py-2">Less than</td></tr>
                <tr><td className="border px-3 py-2">&gt;=</td><td className="border px-3 py-2">Greater than or equal</td></tr>
                <tr><td className="border px-3 py-2">&lt;=</td><td className="border px-3 py-2">Less than or equal</td></tr>
                <tr><td className="border px-3 py-2">&lt;&gt; / !=</td><td className="border px-3 py-2">Not equal</td></tr>
                <tr><td className="border px-3 py-2">BETWEEN</td><td className="border px-3 py-2">Between a certain range</td></tr>
                <tr><td className="border px-3 py-2">LIKE</td><td className="border px-3 py-2">Search for a pattern</td></tr>
                <tr><td className="border px-3 py-2">IN</td><td className="border px-3 py-2">Specify multiple possible values</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">
            What is the purpose of the SQL WHERE clause?
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>To specify the table from which to select data</li>
            <li className="font-bold">To filter records that meet a specified condition ✅</li>
            <li>To join multiple tables together</li>
            <li>To sort records in ascending order</li>
          </ul>
        </section>

        {/* Next Button */}
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

export default Sql_Where;