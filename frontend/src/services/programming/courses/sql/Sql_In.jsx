import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const Sql_In = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  // SQL Examples
  const sqlEx1 = `SELECT * FROM Customers\nWHERE Country IN ('Germany', 'France', 'UK');`;
  const sqlEx2 = `SELECT * FROM Customers\nWHERE Country NOT IN ('Germany', 'France', 'UK');`;
  const sqlEx3 = `SELECT * FROM Customers\nWHERE CustomerID IN (SELECT CustomerID FROM Orders);`;
  const sqlEx4 = `SELECT * FROM Customers\nWHERE CustomerID NOT IN (SELECT CustomerID FROM Orders);`;

  return (
    <div className="min-h-screen bg-white px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">SQL IN Operator</h1>
          <p className="text-gray-600 text-lg">
            The <strong>IN</strong> operator allows you to specify multiple values in a{" "}
            <code className="bg-gray-200 px-1">WHERE</code> clause. It is a shorthand for using multiple{" "}
            <code className="bg-gray-200 px-1">OR</code> conditions.
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
            <code>{`SELECT column_name(s)\nFROM table_name\nWHERE column_name IN (value1, value2, ...);`}</code>
          </pre>
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
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">Around the Horn</td>
                  <td className="border px-3 py-2">Thomas Hardy</td>
                  <td className="border px-3 py-2">120 Hanover Sq.</td>
                  <td className="border px-3 py-2">London</td>
                  <td className="border px-3 py-2">WA1 1DP</td>
                  <td className="border px-3 py-2">UK</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">Berglunds snabbköp</td>
                  <td className="border px-3 py-2">Christina Berglund</td>
                  <td className="border px-3 py-2">Berguvsvägen 8</td>
                  <td className="border px-3 py-2">Luleå</td>
                  <td className="border px-3 py-2">S-958 22</td>
                  <td className="border px-3 py-2">Sweden</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example 1: IN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: IN</h2>
          <p className="mb-2">Return all customers from 'Germany', 'France', or 'UK':</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4 overflow-x-auto">
            <code>{sqlEx1}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx1, "ex1")}
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
          >
            {copied === "ex1" ? <FaCheck /> : <FaCopy />}
            {copied === "ex1" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 2: NOT IN */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT IN</h2>
          <p className="mb-2">Return all customers that are NOT from 'Germany', 'France', or 'UK':</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4 overflow-x-auto">
            <code>{sqlEx2}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx2, "ex2")}
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
          >
            {copied === "ex2" ? <FaCheck /> : <FaCopy />}
            {copied === "ex2" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 3: IN (SELECT) */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: IN (SELECT)</h2>
          <p className="mb-2">Return all customers that have an order in the Orders table:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4 overflow-x-auto">
            <code>{sqlEx3}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx3, "ex3")}
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
          >
            {copied === "ex3" ? <FaCheck /> : <FaCopy />}
            {copied === "ex3" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Example 4: NOT IN (SELECT) */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Example: NOT IN (SELECT)</h2>
          <p className="mb-2">Return all customers that have NOT placed any orders:</p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded mb-4 overflow-x-auto">
            <code>{sqlEx4}</code>
          </pre>
          <button
            onClick={() => handleCopy(sqlEx4, "ex4")}
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded hover:bg-[#03945f] transition"
          >
            {copied === "ex4" ? <FaCheck /> : <FaCopy />}
            {copied === "ex4" ? "Copied!" : "Copy SQL"}
          </button>
        </section>

        {/* Exercise */}
        <section className="bg-[#E7E9EB] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Exercise</h2>
          <p className="mb-4 text-gray-700">What is the primary purpose of the SQL IN operator?</p>
          <ul className="space-y-2 text-gray-800">
            <li className="p-2 bg-white rounded hover:bg-green-50 cursor-pointer">To specify a range of values in a WHERE clause ✅</li>
            <li className="p-2 bg-white rounded hover:bg-green-50 cursor-pointer">To select all columns from a table</li>
            <li className="p-2 bg-white rounded hover:bg-green-50 cursor-pointer">To perform a wildcard search</li>
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

export default Sql_In;
